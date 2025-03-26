class FloorValues {
    static Types = {
        FLOOR_1: "floor1",
        FLOOR_2: "floor2",
    };

    static TypeNames = {
        FLOOR_1_SHORT: "floor1",
        FLOOR_2_SHORT: "floor2",
    };

    static typeToNameMap = {
        [FloorValues.TypeNames.FLOOR_1_SHORT]: FloorValues.Types.FLOOR_1,
        [FloorValues.TypeNames.FLOOR_2_SHORT]: FloorValues.Types.FLOOR_2,
    }
}

export default FloorValues;
