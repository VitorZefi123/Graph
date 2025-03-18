class SystemTypeMapping {
    static Types = {
        INSPECTION: 'inspection',
        REPORTING: 'reporting',
        NOTIFICATION: 'notification',
        SCANNING: 'scanning',
        TRAFFIC_SAFETY: 'traffic safety',
    };

    static TypeNames = {
        INSPECTION_SHORT: 'inspection',
        REPORTING_SHORT: 'report',
        NOTIFICATION_SHORT: 'notification',
        SCANNING_SHORT: 'scan',
        TRAFFIC_SAFETY_SHORT: 'traffic',
    };

    static typeToNameMap = {
        [SystemTypeMapping.TypeNames.INSPECTION_SHORT]: SystemTypeMapping.Types.INSPECTION,
        [SystemTypeMapping.TypeNames.REPORTING_SHORT]: SystemTypeMapping.Types.REPORTING,
        [SystemTypeMapping.TypeNames.NOTIFICATION_SHORT]: SystemTypeMapping.Types.NOTIFICATION,
        [SystemTypeMapping.TypeNames.SCANNING_SHORT]: SystemTypeMapping.Types.SCANNING,
        [SystemTypeMapping.TypeNames.TRAFFIC_SAFETY_SHORT]: SystemTypeMapping.Types.TRAFFIC_SAFETY,
    };
}

export default SystemTypeMapping;
