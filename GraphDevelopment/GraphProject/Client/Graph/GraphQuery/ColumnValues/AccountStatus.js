class AccountStatus {
    static CURRENTLY_BLOCKED = "currently block";
    static TEMPORARILY_BLOCKED = "temporarily block";
    static ADMINISTRATOR_RIGHTS = "administrator rights";
    static LOGGED_IN_TODAY = "logged in today";

    static getAllStatuses() {
        return [
            this.CURRENTLY_BLOCKED,
            this.TEMPORARILY_BLOCKED,
            this.ADMINISTRATOR_RIGHTS,
            this.LOGGED_IN_TODAY
        ];
    }
}

export default AccountStatus;
