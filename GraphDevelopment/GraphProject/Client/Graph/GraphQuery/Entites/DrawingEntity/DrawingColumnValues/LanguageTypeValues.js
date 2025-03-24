class LanguageTypeValues {
    static Types = {
        ENGLISH: "english",
        FRENCH: "french",
        GERMAN: "german",
        ITALIAN: "italian",
    };

    static TypeNames = {
        ENGLISH_SHORT: "english",
        FRENCH_SHORT: "french",
        GERMAN_SHORT: "german",
        ITALIAN_SHORT: "italian",
    };

    static typeToNameMap = {
        [LanguageTypeValues.TypeNames.ENGLISH_SHORT]: LanguageTypeValues.Types.ENGLISH,
        [LanguageTypeValues.TypeNames.FRENCH_SHORT]: LanguageTypeValues.Types.FRENCH,
        [LanguageTypeValues.TypeNames.GERMAN_SHORT]: LanguageTypeValues.Types.GERMAN,
        [LanguageTypeValues.TypeNames.ITALIAN_SHORT]: LanguageTypeValues.Types.ITALIAN,
    };
}

export default LanguageTypeValues;
