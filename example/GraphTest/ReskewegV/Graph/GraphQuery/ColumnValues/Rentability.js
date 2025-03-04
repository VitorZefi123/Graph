class Rentability {
    static NOT_RENTABLE = "not rentable";
    static EXCLUSIVELY_RENTABLE = "exclusively rentable";
    static COMMON_AREA = "common area";
    static PROPORTIONALLY_RENTABLE = "proportionally rentable";

    static getAllCaptions() {
        return [
            this.NOT_RENTABLE,
            this.EXCLUSIVELY_RENTABLE,
            this.COMMON_AREA,
            this.PROPORTIONALLY_RENTABLE
        ];
    }
}

export default Rentability;
