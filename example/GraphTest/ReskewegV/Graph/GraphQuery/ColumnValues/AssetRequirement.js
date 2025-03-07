class AssetRequirement {
    static INSPECTION = "inspection";
    static REPORTING = "reporting";
    static NOTIFICATION = "notification";
    static SCANNING = "scanning";

    static getAllCaptions() {
        return [
            this.INSPECTION,
            this.REPORTING,
            this.NOTIFICATION,
            this.SCANNING,
        ];
    }
}

export default AssetRequirement;
