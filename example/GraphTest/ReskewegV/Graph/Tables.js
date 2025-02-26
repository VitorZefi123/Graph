import SqlCondition from './SqlCondition.js';
import TableNames from './TableNames.js';

class Tables {

    extractFromQuery(query) {
        const allowedTables = TableNames.getTableNames();

        const foundTables = allowedTables.filter(table => query.toLowerCase().includes(table.toLowerCase()));

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
