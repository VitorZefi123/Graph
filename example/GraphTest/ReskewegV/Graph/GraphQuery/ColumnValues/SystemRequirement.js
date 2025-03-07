class SystemRequirement {
    static INSPECTION = "inspection";
    static REPORTING = "reporting";
    static NOTIFICATION = "notification";
    static SCANNING = "scanning";
    static TRAFFIC_SAFETY = 'traffic safety';

    static getAllCaptions() {
        return [
            this.INSPECTION,
            this.REPORTING,
            this.NOTIFICATION,
            this.SCANNING,
            this.TRAFFIC_SAFETY,
        ];
    }
}

export default SystemRequirement;
