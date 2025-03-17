import SqlCondition from './SqlCondition.js';
import TableNames from './TableNames.js';

class Tables {

    extractFromQuery(query) {
        let foundTables = [];

        // Check if the query contains any allowed table
        for (const [tableShort, tableMapped] of Object.entries(TableNames.tableToNameMap)) {
            if (query.toLowerCase().includes(tableShort.toLowerCase())) {
                foundTables.push(tableMapped);
            }
        }

        if (foundTables.length === 0) {
            return { error: "No valid tables found in the sentence." };
        }

        const conditions = new SqlCondition().parseSqlCondition(query,foundTables);

        return {
            tableName: foundTables,
            sqlConditions: conditions
        };
    }
}

export default Tables;
