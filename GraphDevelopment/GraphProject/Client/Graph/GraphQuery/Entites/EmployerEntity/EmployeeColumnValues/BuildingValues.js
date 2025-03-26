class BuildingValues {
    static Types = {
        BUILDING_1: "building1",
        BUILDING_2: "building2",
    };

    static TypeNames = {
        BUILDING_1_SHORT: "building1",
        BUILDING_2_SHORT: "building2",
    };

    static typeToNameMap = {
        [BuildingValues.TypeNames.BUILDING_1_SHORT]: BuildingValues.Types.BUILDING_1,
        [BuildingValues.TypeNames.BUILDING_2_SHORT]: BuildingValues.Types.BUILDING_2,
    }
}

export default BuildingValues;
