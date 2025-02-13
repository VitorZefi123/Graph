
class AreaUnit {
    static AreaUnits = {
        SQUARE_METERS: 'm²',
        SQUARE_KILOMETERS: 'km²',
        SQUARE_CENTIMETERS: 'cm²',
        SQUARE_MILLIMETERS: 'mm²',
        HECTARES: 'ha',
    };

    static AreaUnitNames = {
        // Existing abbreviations
        SQUARE_METERS: 'sqm',
        SQUARE_KILOMETERS: 'sqkm',
        SQUARE_CENTIMETERS: 'sqcm',
        SQUARE_MILLIMETERS: 'sqmm',
        HECTARES: 'ha ',
        SQUARE_KILOMETERS_KM: 'km²',
        SQUARE_CENTIMETERS_CM: 'cm²',
        SQUARE_MILLIMETERS_MM: 'mm²',
        SQUARE_METERS_M: 'm²',
        HECTARES_HA: 'ha ',

        // Full names
        SQUARE_METERS_FULL: 'square meters',
        SQUARE_KILOMETERS_FULL: 'square kilometers',
        SQUARE_CENTIMETERS_FULL: 'square centimeters',
        SQUARE_MILLIMETERS_FULL: 'square millimeters',
        HECTARES_FULL: 'hectares',

        // "sq.km" style notation
        SQUARE_METERS_SQ: 'sq.m',
        SQUARE_KILOMETERS_SQ: 'sq.km',
        SQUARE_CENTIMETERS_SQ: 'sq.cm',
        SQUARE_MILLIMETERS_SQ: 'sq.mm',
        HECTARES_SQ: 'ha ',
    };

    // Mapping from AreaUnitNames to AreaUnits
    static unitToNameMap = {
        // Abbreviations
        [AreaUnit.AreaUnitNames.SQUARE_KILOMETERS]: AreaUnit.AreaUnits.SQUARE_KILOMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_CENTIMETERS]: AreaUnit.AreaUnits.SQUARE_CENTIMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_MILLIMETERS]: AreaUnit.AreaUnits.SQUARE_MILLIMETERS,
        [AreaUnit.AreaUnitNames.HECTARES]: AreaUnit.AreaUnits.HECTARES,
        [AreaUnit.AreaUnitNames.SQUARE_METERS]: AreaUnit.AreaUnits.SQUARE_METERS,
                // Full names
        [AreaUnit.AreaUnitNames.SQUARE_METERS_FULL]: AreaUnit.AreaUnits.SQUARE_METERS,
        [AreaUnit.AreaUnitNames.SQUARE_KILOMETERS_FULL]: AreaUnit.AreaUnits.SQUARE_KILOMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_CENTIMETERS_FULL]: AreaUnit.AreaUnits.SQUARE_CENTIMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_MILLIMETERS_FULL]: AreaUnit.AreaUnits.SQUARE_MILLIMETERS,
        [AreaUnit.AreaUnitNames.HECTARES_FULL]: AreaUnit.AreaUnits.HECTARES,
                        // "sq.km" style notation
  
        [AreaUnit.AreaUnitNames.SQUARE_KILOMETERS_SQ]: AreaUnit.AreaUnits.SQUARE_KILOMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_CENTIMETERS_SQ]: AreaUnit.AreaUnits.SQUARE_CENTIMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_MILLIMETERS_SQ]: AreaUnit.AreaUnits.SQUARE_MILLIMETERS,
        [AreaUnit.AreaUnitNames.HECTARES_SQ]: AreaUnit.AreaUnits.HECTARES,
        [AreaUnit.AreaUnitNames.SQUARE_METERS_SQ]: AreaUnit.AreaUnits.SQUARE_METERS,

        // Metric notation

        [AreaUnit.AreaUnitNames.SQUARE_KILOMETERS_KM]: AreaUnit.AreaUnits.SQUARE_KILOMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_CENTIMETERS_CM]: AreaUnit.AreaUnits.SQUARE_CENTIMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_MILLIMETERS_MM]: AreaUnit.AreaUnits.SQUARE_MILLIMETERS,
        [AreaUnit.AreaUnitNames.HECTARES_HA]: AreaUnit.AreaUnits.HECTARES,
        [AreaUnit.AreaUnitNames.SQUARE_METERS_M]: AreaUnit.AreaUnits.SQUARE_METERS,

    };
}


export default AreaUnit;