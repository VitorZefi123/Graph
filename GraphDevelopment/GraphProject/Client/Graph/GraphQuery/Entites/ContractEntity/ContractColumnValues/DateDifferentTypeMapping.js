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
        NEXT_QUARTER: 'next quarter',
        THIS_QUARTER:'this quarter',
        LAST_QUARTER:'last quarter',
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
        NEXT_QUARTER_SHORT: 'next quarter',
        THIS_QUARTER_SHORT:'this quarter',
        LAST_QUARTER_SHORT:'last quarter',

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
        [DateDifferentTypeMapping.TypeNames.NEXT_QUARTER_SHORT]: DateDifferentTypeMapping.Types.NEXT_QUARTER,
        [DateDifferentTypeMapping.TypeNames.THIS_QUARTER_SHORT]: DateDifferentTypeMapping.Types.THIS_QUARTER,
        [DateDifferentTypeMapping.TypeNames.LAST_QUARTER_SHORT]: DateDifferentTypeMapping.Types.LAST_QUARTER,

    };
}

export default DateDifferentTypeMapping;
