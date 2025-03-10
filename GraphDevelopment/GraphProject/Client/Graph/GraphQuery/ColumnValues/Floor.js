class Floor {
    static COVERING_RUBBER = "rubber";
    static COVERING_ARTIFICIAL_STONE = "artificial stone";
    static COVERING_PLASTIC = "plastic";
    static COVERING_LINOLIUM = "linoleum";
    static COVERING_MARBLE = "marble";
    static COVERING_METAL = "metal";
    static COVERING_STONEWARE_TILES = "stoneware/tiles";
    static COVERING_CARPET = "carpet";
    static SCREED_ASPHALT = "asphalt";
    static SCREED_STONEWOOD = "stonewood";
    static SCREED_TERAZZO = "terazzo";
    static SCREED_CEMENT = "cement";
    static WOOD_BEECH_PARKET = "parquet";
    static PAVING_GRANITE = "granite";

    static getAllCaptions() {
        return [
            this.COVERING_RUBBER,
            this.COVERING_ARTIFICIAL_STONE,
            this.COVERING_PLASTIC,
            this.COVERING_LINOLIUM,
            this.COVERING_MARBLE,
            this.COVERING_METAL,
            this.COVERING_STONEWARE_TILES,
            this.COVERING_CARPET,
            this.SCREED_ASPHALT,
            this.SCREED_STONEWOOD,
            this.SCREED_TERAZZO,
            this.SCREED_CEMENT,
            this.WOOD_BEECH_PARKET,
            this.PAVING_GRANITE
        ];
    }
}

export default Floor;