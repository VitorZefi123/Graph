
class AreaUnit {
static AreaUnits = {
    SQUARE_METERS: 'm²',
    SQUARE_KILOMETERS: 'km²',
    SQUARE_CENTIMETERS: 'cm²',
    SQUARE_MILLIMETERS: 'mm²',
    HECTARES: 'ha',
};


static AreaUnitNames = {
    SQUARE_METERS: 'sqm',
    SQUARE_KILOMETERS: 'sqkm',
    SQUARE_CENTIMETERS: 'sqcm',
    SQUARE_MILLIMETERS: 'sqmm',
    HECTARES: 'h',
    SQUARE_METERS_M: 'm²',
    SQUARE_KILOMETERS_KM: 'km²',
    SQUARE_CENTIMETERS_CM: 'cm²',
    SQUARE_MILLIMETERS_MM: 'mm²',
    HECTARES_HA: 'ha',
};


    // Mapping from AreaUnitNames to AreaUnits
    static unitToNameMap = {
        [AreaUnit.AreaUnitNames.SQUARE_METERS]: AreaUnit.AreaUnits.SQUARE_METERS,
        [AreaUnit.AreaUnitNames.SQUARE_KILOMETERS]: AreaUnit.AreaUnits.SQUARE_KILOMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_CENTIMETERS]: AreaUnit.AreaUnits.SQUARE_CENTIMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_MILLIMETERS]: AreaUnit.AreaUnits.SQUARE_MILLIMETERS,
        [AreaUnit.AreaUnitNames.HECTARES]: AreaUnit.AreaUnits.HECTARES,
        [AreaUnit.AreaUnitNames.SQUARE_METERS_M]: AreaUnit.AreaUnits.SQUARE_METERS,
        [AreaUnit.AreaUnitNames.SQUARE_KILOMETERS_KM]: AreaUnit.AreaUnits.SQUARE_KILOMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_CENTIMETERS_CM]: AreaUnit.AreaUnits.SQUARE_CENTIMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_MILLIMETERS_MM]: AreaUnit.AreaUnits.SQUARE_MILLIMETERS,
        [AreaUnit.AreaUnitNames.HECTARES_HA]: AreaUnit.AreaUnits.HECTARES,
    };

}

export default AreaUnit;