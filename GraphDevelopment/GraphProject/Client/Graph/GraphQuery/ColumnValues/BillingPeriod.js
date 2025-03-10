class BillingPeriod {
    static MONTHLY = "monthly";
    static ANNUAL = "annual";
    static QUARTERLY = "quarterly";
    static SEMI_ANNUAL = "semi-annual";
    static WEEKLY = "weekly";
    static DAILY = "daily";
    static BI_ANNUAL = "bi-annual";
    
    static getAllCaptions() {
        return [
            this.MONTHLY,
            this.ANNUAL,
            this.QUARTERLY,
            this.SEMI_ANNUAL,
            this.WEEKLY,
            this.DAILY,
            this.BI_ANNUAL
        ];
    }
}

export default BillingPeriod;
