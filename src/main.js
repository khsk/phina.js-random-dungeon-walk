const phina = require('phina.js');

const ROT = require('rot-js');

const ASSETS = require('./assets.js');
const STATUS = require('./status.js');
const DIRECTIONS = require('./directions.js');
const TILES = require('./tiles.js')

const MAP = require('./map.js')

////////////////////////////////////////////////////////////////////


class Player {

    constructor(o = {}) {
        this.X = o.X || 0;
        this.Y = o.Y || 0;
    }

}

new Player();

////////////////////////////////////////////////////////////////////

phina.globalize();

// Main scene
phina.define('MainScene', {
    superClass: 'CanvasScene',
    init: function() {
        this.superInit();
        this.backgroundColor = '#444';

        const player = Sprite('player').addChildTo(this);
        player.setOrigin(0,0);
        player.xOffset = 4 ;
        player.yOffset = -4 ;

        // grid保持はvector2のほうがいいかも
        player.x = this.gridX.span(8) + player.xOffset;
        player.xGrid = 8;

        player.y = this.gridY.span(8) + player.yOffset;
        player.yGrid = 8;

        player.update = (app) => {
            // thisがひどい

            if(player.tweener.playing) {
                return;
            }

            const key = app.keyboard;
            const moveTo = (xGrid = 0, yGrid = 0) => {

                if (!this.map.canWalk(player.xGrid + xGrid, player.yGrid + yGrid)) {
                    return false;
                }

                player.xGrid += xGrid;
                player.yGrid += yGrid;

                player.tweener.moveTo(this.gridX.span(player.xGrid) + player.xOffset, this.gridY.span(player.yGrid) + player.yOffset, 250).play();
            };

            if        (key.getKey('left') && key.getKey('up')) {
                moveTo(DIRECTIONS.LEFT, DIRECTIONS.UP);
            } else if (key.getKey('left') && key.getKey('down')) {
                moveTo(DIRECTIONS.LEFT, DIRECTIONS.DOWN);
            } else if (key.getKey('right') && key.getKey('up')) {
                moveTo(DIRECTIONS.RIGHT, DIRECTIONS.UP);
            } else if (key.getKey('right') && key.getKey('down')) {
                moveTo(DIRECTIONS.RIGHT, DIRECTIONS.DOWN);
            } else if (key.getKey('left')) {
                moveTo(DIRECTIONS.LEFT);
            } else if (key.getKey('right')) {
                moveTo(DIRECTIONS.RIGHT);
            } else if (key.getKey('up')) {
                moveTo(0, DIRECTIONS.UP);
            } else if (key.getKey('down')) {
                moveTo(0, DIRECTIONS.DOWN);
            }
        };


        this.map = new MAP();
        this.map.createMap(16,16)
        this.showMap(this.map.fullMap)


        initGrid = this.map.getRandomFreeUnitGrid(16,16);

        player.x = this.gridX.span(initGrid.x) + player.xOffset;
        player.xGrid = initGrid.x;

        player.y = this.gridY.span(initGrid.y) + player.yOffset;
        player.yGrid = initGrid.y;        
    },

    showMap: function(fullMap) {
        Array.range(0, fullMap.length).each((X) =>{
            Array.range(0, fullMap[X].length).each((Y) =>{
                let rect = RectangleShape({
                    width: 40,
                    height: 60,
                    padding: 0, // パディングを0にする
                    strokeWidth: 1,
                }).addChildTo(this);
                rect.setPosition(this.gridX.span(X),this.gridY.span(Y));
                rect.setOrigin(0,0); // 左上を原点にする
                if (fullMap[X][Y].tile == TILES.WALL ) {
                    rect.fill = 'gray'
                } else {
                    rect.fill = 'transparent';
                }
            });
        });
    }
});

// Main
phina.main(function() {
    const app = GameApp({
        startLabel: 'main',
        assets: ASSETS,
    });
    app.run();
});