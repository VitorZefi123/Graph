class ContractType {
    static TURNOVER_BASED = "turnover-based";
    static FIXED_RATE = "fixed rate";
    static HYBRID = "hybrid";

    static getAllTypes() {
        return [
            this.TURNOVER_BASED,
            this.FIXED_RATE,
            this.HYBRID
        ];
    }
}
export default ContractType;