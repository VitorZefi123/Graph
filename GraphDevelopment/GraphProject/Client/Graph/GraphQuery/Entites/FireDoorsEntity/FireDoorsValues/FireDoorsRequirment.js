class FireDoorsRequirment {
    static Types = {
        MAINTENANCE: "maintenance",
    };

    static TypeNames = {
        MAINTENANCE_SHORT: "maintenance",
    };

    static typeToNameMap = {
        [FireDoorsRequirment.TypeNames.MAINTENANCE_SHORT]: FireDoorsRequirment.Types.MAINTENANCE,
    };
}

export default FireDoorsRequirment;
