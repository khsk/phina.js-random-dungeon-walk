class TileData {
    constructor(obj = {}) {
        this.tile   = obj.tile || null;
        this.unit  = obj.unit || null;
        this.item = obj.item || null;
    }
}

module.exports = TileData