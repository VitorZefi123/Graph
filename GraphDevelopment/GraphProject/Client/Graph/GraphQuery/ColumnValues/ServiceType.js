class ServiceType {

    static Standards = {
        ARCHIVE: "Archive rental space standard",
        OFFICE: "Office rental space standard",
        TECHNICAL_CENTER: "Technical center rental space standard",
        SOCIAL_ROOMS: "Rental of social rooms"
    };

    static Types = {
        ARCHIVE: "archive",
        OFFICE: "office",
        TECHNICAL_CENTER: "technical",
        SOCIAL_ROOMS: "social"
    };

    static typeToStandardMap = {
        [ServiceType.Types.ARCHIVE]: ServiceType.Standards.ARCHIVE,
        [ServiceType.Types.OFFICE]: ServiceType.Standards.OFFICE,
        [ServiceType.Types.TECHNICAL_CENTER]: ServiceType.Standards.TECHNICAL_CENTER,
        [ServiceType.Types.SOCIAL_ROOMS]: ServiceType.Standards.SOCIAL_ROOMS
    };

}

export default ServiceType;