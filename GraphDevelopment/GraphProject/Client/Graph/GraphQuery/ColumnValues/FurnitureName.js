class FurnitureName {
    static SWIVEL_CHAIR = "swivel chair";
    static TABLE = "table";
    static CUPBOARD = "cupboard";
    static WORKTOP = "worktop";
    static BED = "bed";
    static ARMCHAIR = "armchair";
    static CHAIR = "chair";

    static getAllFurnitureNames() {
        return [
            this.SWIVEL_CHAIR,
            this.TABLE,
            this.CUPBOARD,
            this.WORKTOP,
            this.BED,
            this.ARMCHAIR,
            this.CHAIR,
        ];
    }
}

export default FurnitureName;
