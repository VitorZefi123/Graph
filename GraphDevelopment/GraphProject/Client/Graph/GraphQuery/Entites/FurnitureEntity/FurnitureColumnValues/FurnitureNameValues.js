class FurnitureNameValues {
    static Types = {
        SWIVEL_CHAIR: "swivel chair",
        TABLE: "table",
        CUPBOARD: "cupboard",
        WORKTOP: "worktop",
        BED: "bed",
        ARMCHAIR: "armchair",
        CHAIR: "chair",
    };

    static TypeNames = {
        SWIVEL_CHAIR_SHORT: "swivel",
        TABLE_SHORT: "table",
        CUPBOARD_SHORT: "cupboard",
        WORKTOP_SHORT: "worktop",
        BED_SHORT: "bed",
        ARMCHAIR_SHORT: "armchair",
        CHAIR_SHORT: "chair",
    };

    static typeToNameMap = {
        [FurnitureNameValues.TypeNames.SWIVEL_CHAIR_SHORT]: FurnitureNameValues.Types.SWIVEL_CHAIR,
        [FurnitureNameValues.TypeNames.TABLE_SHORT]: FurnitureNameValues.Types.TABLE,
        [FurnitureNameValues.TypeNames.CUPBOARD_SHORT]: FurnitureNameValues.Types.CUPBOARD,
        [FurnitureNameValues.TypeNames.WORKTOP_SHORT]: FurnitureNameValues.Types.WORKTOP,
        [FurnitureNameValues.TypeNames.BED_SHORT]: FurnitureNameValues.Types.BED,
        [FurnitureNameValues.TypeNames.ARMCHAIR_SHORT]: FurnitureNameValues.Types.ARMCHAIR,
        [FurnitureNameValues.TypeNames.CHAIR_SHORT]: FurnitureNameValues.Types.CHAIR,
    };
}

export default FurnitureNameValues;
