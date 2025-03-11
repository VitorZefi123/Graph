class ContractTypeMapping {
    static Types = {
        RENTAL: 'rental contract',
        SERVICES: 'services contract',
        SOFTWARE: 'software contract',
        EMPLOYMENT: 'employment contract',
        CONSULTING: 'consulting contract',
    };

    static TypeNames = {
        RENTAL_SHORT: 'rental',
        SERVICES_SHORT: 'service',
        SOFTWARE_SHORT: 'software',
        EMPLOYMENT_SHORT: 'employment',
        CONSULTING_SHORT: 'consulting',
    };

    static typeToNameMap = {
        [ContractTypeMapping.TypeNames.RENTAL_SHORT]: ContractTypeMapping.Types.RENTAL,
        [ContractTypeMapping.TypeNames.SERVICES_SHORT]: ContractTypeMapping.Types.SERVICES,
        [ContractTypeMapping.TypeNames.SOFTWARE_SHORT]: ContractTypeMapping.Types.SOFTWARE,
        [ContractTypeMapping.TypeNames.EMPLOYMENT_SHORT]: ContractTypeMapping.Types.EMPLOYMENT,
        [ContractTypeMapping.TypeNames.CONSULTING_SHORT]: ContractTypeMapping.Types.CONSULTING,
    };
}

export default ContractTypeMapping;