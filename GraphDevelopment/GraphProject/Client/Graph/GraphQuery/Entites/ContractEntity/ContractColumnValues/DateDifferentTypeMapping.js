class DateDifferentTypeMapping {
    static Types = {
        TODAY: 'today',
        YESTERDAY: 'yesterday',
        LAST_WEEK: 'last week',
        LAST_MONTH: 'last month',
        LAST_YEAR: 'last year',
        THIS_WEEK: 'this week',
        THIS_MONTH: 'this month',
        THIS_YEAR: 'this year',
    };

    static TypeNames = {
        TODAY_SHORT: 'today',
        YESTERDAY_SHORT: 'yesterday',
        LAST_WEEK_SHORT: 'last week',
        LAST_MONTH_SHORT: 'last month',
        LAST_YEAR_SHORT: 'last year',
        THIS_WEEK_SHORT: 'this week',
        THIS_MONTH_SHORT: 'this month',
        THIS_YEAR_SHORT: 'this year',

    };

    static typeToNameMap = {
        [DateDifferentTypeMapping.TypeNames.TODAY_SHORT]: DateDifferentTypeMapping.Types.TODAY,
        [DateDifferentTypeMapping.TypeNames.YESTERDAY_SHORT]: DateDifferentTypeMapping.Types.YESTERDAY,
        [DateDifferentTypeMapping.TypeNames.LAST_WEEK_SHORT]: DateDifferentTypeMapping.Types.LAST_WEEK,
        [DateDifferentTypeMapping.TypeNames.LAST_MONTH_SHORT]: DateDifferentTypeMapping.Types.LAST_MONTH,
        [DateDifferentTypeMapping.TypeNames.LAST_YEAR_SHORT]: DateDifferentTypeMapping.Types.LAST_YEAR,
        [DateDifferentTypeMapping.TypeNames.THIS_WEEK_SHORT]: DateDifferentTypeMapping.Types.THIS_WEEK,
        [DateDifferentTypeMapping.TypeNames.THIS_MONTH_SHORT]: DateDifferentTypeMapping.Types.THIS_MONTH,
        [DateDifferentTypeMapping.TypeNames.THIS_YEAR_SHORT]: DateDifferentTypeMapping.Types.THIS_YEAR,

    };
}

export default DateDifferentTypeMapping;
