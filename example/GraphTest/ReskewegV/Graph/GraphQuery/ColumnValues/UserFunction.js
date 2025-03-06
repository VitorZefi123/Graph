class UserFunction {
    static MASTER = "master";
    static AGENT = "agent";

    static getAllRoles() {
        return [
            this.MASTER,
            this.AGENT
        ];
    }
}

export default UserFunction;
