class AssetRequirement {
    static Types = {
        INSPECTION: "inspection requirement",
        REPORTING: "reporting requirement",
        NOTIFICATION: "notification requirement",
        SCANNING: "scanning requirement",
    };

    static TypeNames = {
        INSPECTION_SHORT: "inspection",
        REPORTING_SHORT: "reporting",
        NOTIFICATION_SHORT: "notification",
        SCANNING_SHORT: "scanning",
    };

    static typeToNameMap = {
        [AssetRequirement.TypeNames.INSPECTION_SHORT]: AssetRequirement.Types.INSPECTION,
        [AssetRequirement.TypeNames.REPORTING_SHORT]: AssetRequirement.Types.REPORTING,
        [AssetRequirement.TypeNames.NOTIFICATION_SHORT]: AssetRequirement.Types.NOTIFICATION,
        [AssetRequirement.TypeNames.SCANNING_SHORT]: AssetRequirement.Types.SCANNING,
    };
}

export default AssetRequirement;
