
class AreaUnit {
    static AreaUnits = {
        SQUARE_METERS: 'm²',
        SQUARE_KILOMETERS: 'km²',
        SQUARE_CENTIMETERS: 'cm²',
        SQUARE_MILLIMETERS: 'mm²',
        HECTARES: 'ha',
        SQUARE_INCHES: 'in²',
        SQUARE_FEET: 'ft²',
        SQUARE_YARDS: 'yd²',
        ACRES: 'ac',
        SQUARE_METERS_PER_WORKPLACE: 'm²/AP',
        SQUARE_METERS_PER_PERSON: 'm²/P',
    };
    

    static AreaUnitNames = {
        // Existing abbreviations
        SQUARE_METERS: 'sqm',
        SQUARE_KILOMETERS: 'sqkm',
        SQUARE_CENTIMETERS: 'sqcm',
        SQUARE_MILLIMETERS: 'sqmm',
        SQUARE_INCHES: 'sqin',
        SQUARE_FEET: 'sqft',
        SQUARE_YARDS: 'sqyd',
        SQUARE_METERS_PER_WORKPLACE: 'sqm/AP',
        SQUARE_METERS_PER_PERSON: 'sqm/P',
    
        // Full names
        SQUARE_METERS_FULL: 'square meters',
        SQUARE_KILOMETERS_FULL: 'square kilometers',
        SQUARE_CENTIMETERS_FULL: 'square centimeters',
        SQUARE_MILLIMETERS_FULL: 'square millimeters',
        HECTARES_FULL: 'hectares',
        SQUARE_INCHES_FULL: 'square inches',
        SQUARE_FEET_FULL: 'square feet',
        SQUARE_YARDS_FULL: 'square yards',
        ACRES_FULL: 'acres',
    
        // "sq.km" style notation
        SQUARE_METERS_SQ: 'sq.m',
        SQUARE_KILOMETERS_SQ: 'sq.km',
        SQUARE_CENTIMETERS_SQ: 'sq.cm',
        SQUARE_MILLIMETERS_SQ: 'sq.mm',
        SQUARE_INCHES_SQ: 'sq.in',
        SQUARE_FEET_SQ: 'sq.ft',
        SQUARE_YARDS_SQ: 'sq.yd',

        SQUARE_METERS_M: 'm²',
        SQUARE_KILOMETERS_KM: 'km²',
        SQUARE_CENTIMETERS_CM: 'cm²',
        SQUARE_MILLIMETERS_MM: 'mm²',

        SQUARE_INCHES_2: 'in²',
        SQUARE_FEET_2: 'ft²',
        SQUARE_YARDS_2: 'yd²',
        SQUARE_METERS_PER_WORKPLACE_2: 'm²/AP',
        SQUARE_METERS_PER_PERSON_2: 'm²/P',
    };

    // Mapping from AreaUnitNames to AreaUnits
    static unitToNameMap = {
        // Abbreviations
        [AreaUnit.AreaUnitNames.SQUARE_METERS_PER_WORKPLACE]: AreaUnit.AreaUnits.SQUARE_METERS_PER_WORKPLACE,
        [AreaUnit.AreaUnitNames.SQUARE_METERS_PER_PERSON]: AreaUnit.AreaUnits.SQUARE_METERS_PER_PERSON,
        [AreaUnit.AreaUnitNames.SQUARE_METERS_PER_WORKPLACE_2]: AreaUnit.AreaUnits.SQUARE_METERS_PER_WORKPLACE,
        [AreaUnit.AreaUnitNames.SQUARE_METERS_PER_PERSON_2]: AreaUnit.AreaUnits.SQUARE_METERS_PER_PERSON,
        [AreaUnit.AreaUnitNames.SQUARE_KILOMETERS]: AreaUnit.AreaUnits.SQUARE_KILOMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_CENTIMETERS]: AreaUnit.AreaUnits.SQUARE_CENTIMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_MILLIMETERS]: AreaUnit.AreaUnits.SQUARE_MILLIMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_METERS]: AreaUnit.AreaUnits.SQUARE_METERS,
        [AreaUnit.AreaUnitNames.SQUARE_INCHES]: AreaUnit.AreaUnits.SQUARE_INCHES,
        [AreaUnit.AreaUnitNames.SQUARE_FEET]: AreaUnit.AreaUnits.SQUARE_FEET,
        [AreaUnit.AreaUnitNames.SQUARE_YARDS]: AreaUnit.AreaUnits.SQUARE_YARDS,



        [AreaUnit.AreaUnitNames.SQUARE_METERS_FULL]: AreaUnit.AreaUnits.SQUARE_METERS,
        [AreaUnit.AreaUnitNames.SQUARE_KILOMETERS_FULL]: AreaUnit.AreaUnits.SQUARE_KILOMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_CENTIMETERS_FULL]: AreaUnit.AreaUnits.SQUARE_CENTIMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_MILLIMETERS_FULL]: AreaUnit.AreaUnits.SQUARE_MILLIMETERS,
        [AreaUnit.AreaUnitNames.HECTARES_FULL]: AreaUnit.AreaUnits.HECTARES,

        [AreaUnit.AreaUnitNames.SQUARE_INCHES_FULL]: AreaUnit.AreaUnits.SQUARE_INCHES,
        [AreaUnit.AreaUnitNames.SQUARE_FEET_FULL]: AreaUnit.AreaUnits.SQUARE_FEET,
        [AreaUnit.AreaUnitNames.SQUARE_YARDS_FULL]: AreaUnit.AreaUnits.SQUARE_YARDS,
        [AreaUnit.AreaUnitNames.ACRES_FULL]: AreaUnit.AreaUnits.ACRES,


        [AreaUnit.AreaUnitNames.SQUARE_INCHES_2]: AreaUnit.AreaUnits.SQUARE_INCHES,
        [AreaUnit.AreaUnitNames.SQUARE_FEET_2]: AreaUnit.AreaUnits.SQUARE_FEET,
        [AreaUnit.AreaUnitNames.SQUARE_YARDS_2]: AreaUnit.AreaUnits.SQUARE_YARDS,
       
  
        [AreaUnit.AreaUnitNames.SQUARE_KILOMETERS_SQ]: AreaUnit.AreaUnits.SQUARE_KILOMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_CENTIMETERS_SQ]: AreaUnit.AreaUnits.SQUARE_CENTIMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_MILLIMETERS_SQ]: AreaUnit.AreaUnits.SQUARE_MILLIMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_METERS_SQ]: AreaUnit.AreaUnits.SQUARE_METERS,
        [AreaUnit.AreaUnitNames.SQUARE_INCHES_SQ]: AreaUnit.AreaUnits.SQUARE_INCHES,
        [AreaUnit.AreaUnitNames.SQUARE_FEET_SQ]: AreaUnit.AreaUnits.SQUARE_FEET,
        [AreaUnit.AreaUnitNames.SQUARE_YARDS_SQ]: AreaUnit.AreaUnits.SQUARE_YARDS,


        [AreaUnit.AreaUnitNames.SQUARE_KILOMETERS_KM]: AreaUnit.AreaUnits.SQUARE_KILOMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_CENTIMETERS_CM]: AreaUnit.AreaUnits.SQUARE_CENTIMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_MILLIMETERS_MM]: AreaUnit.AreaUnits.SQUARE_MILLIMETERS,
        [AreaUnit.AreaUnitNames.SQUARE_METERS_M]: AreaUnit.AreaUnits.SQUARE_METERS,

    };
}


export default AreaUnit;