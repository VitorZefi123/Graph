class Rentability {
    static Types = {
        NOT_RENTABLE: "not rentable",
        EXCLUSIVELY_RENTABLE: "exclusively rentable",
        COMMON_AREA: "common area",
        PROPORTIONALLY_RENTABLE: "proportionally rentable",
    };

    static ShortNames = {
        NOT_RENTABLE_SHORT: "not to be rent",
        NOT_RENTABLE_SHORT_1: "not rentable",
        EXCLUSIVELY_RENTABLE_SHORT: "exclusive",
        COMMON_AREA_SHORT: "common",
        PROPORTIONALLY_RENTABLE_SHORT: "proportional",
    };

    static typeToNameMap = {
        [Rentability.ShortNames.NOT_RENTABLE_SHORT]: Rentability.Types.NOT_RENTABLE,
        [Rentability.ShortNames.NOT_RENTABLE_SHORT_1]: Rentability.Types.NOT_RENTABLE,
        [Rentability.ShortNames.EXCLUSIVELY_RENTABLE_SHORT]: Rentability.Types.EXCLUSIVELY_RENTABLE,
        [Rentability.ShortNames.COMMON_AREA_SHORT]: Rentability.Types.COMMON_AREA,
        [Rentability.ShortNames.PROPORTIONALLY_RENTABLE_SHORT]: Rentability.Types.PROPORTIONALLY_RENTABLE,
    };

    static getAllCaptions() {
        return Object.values(this.Types);
    }
}

export default Rentability;
