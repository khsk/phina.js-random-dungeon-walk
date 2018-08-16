const ROT = require('rot-js');
const TileData = require('./TileData.js');
const TILES = require('./tiles.js')

class MAP {
    constructor() {
        this.fullMap = null;
        this.screenMap = null;

        // しばらくはfullMapしか使わない表明。イマイチ。(実装fullMapにしてるし)
        this.screenMap = this.fullMap;
        this.rotMap = null;
    }

    /**
     * 新規にマップを作り、タイル情報のみ設定する
     * @param {int} x 
     * @param {int} y 
     */
    createMap(x,y) {
        this.initMap(x,y);

        this.rotMap = new ROT.Map.Digger(x,y);
        var digCallback = function(x, y, value) {
            if (value) {
                this.fullMap[x][y].tile = TILES.WALL;
                return;
            }
            this.fullMap[x][y].tile = TILES.ROAD;
        };
        this.rotMap.create(digCallback.bind(this));
    }

    /**
     * 新規にマップ配列を作り、全てに空のTileDataを格納する。
     * 
     * @param {int} x 
     * @param {int} y 
     */
    initMap(x,y) {
        this.fullMap= Array(x).fill().map(() => {
            return Array(y).fill().map(() => { 
                return new TileData() });
        });
    }

    /**
     * 指定された座標が歩行可能か
     * 
     * @param {int} x 
     * @param {int} y 
     */
    canWalk(x,y) {
        return this.fullMap[x][y].tile == TILES.ROAD;
    }

    isOccupationByUnit(x,y) {
        return this.fullMap[x][y].unit != null;
    }

    /**
     * 
     * coordinateを使うかかgridで統一するか悩み中
     * 
     * @param {*} x 
     * @param {*} y 
     */
    getRandomFreeUnitGrid(x,y) {
        let rnx = ROT.RNG.getUniformInt(0,x - 1);
        let rny = ROT.RNG.getUniformInt(0,y - 1);
        if (this.canWalk(rnx, rny) && !this.isOccupationByUnit(rnx, rny)) {
            return {x:rnx, y:rny};
        }

        return this.getRandomFreeUnitGrid(x,y);
    } 
}

module.exports = MAP;
