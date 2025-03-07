import Columns from './Columns.js';
import SizeParser from './ColumnParser/SizeParser.js';
import CategoryParser from './ColumnParser/CategoryParser.js';
import DateParser from './ColumnParser/DateParser.js';
import FloorParser from './ColumnParser/FloorParser.js';
import RentabilityParser from './ColumnParser/RentabilityParser.js';
import ServiceTypeParser from './ColumnParser/ServiceTypeParser.js';
import FurnitureNameParser from './ColumnParser/FurnitureNameParser.js';
import AccountStatusParser from './ColumnParser/AccountStatusParser.js';
import SystemLocationParser from './ColumnParser/SystemLocationParser.js';
import SystemMaintainedParser from './ColumnParser/SystemMaintainedParser.js';
import SystemRequirementParser from './ColumnParser/SystemRequirementParser.js';
import EmployeeCompanyParser from './ColumnParser/EmployeeCompanyParser.js';
import EmployeeFunctionParser from './ColumnParser/EmployeeFunctionParser.js'; 
import EmployeeNameParser from './ColumnParser/EmployeeNameParser.js';
import LevelContentParser from './ColumnParser/LevelContentParser.js';
import LeasesEndParser from './ColumnParser/LeasesEndParser.js';
import NoticePeriodParser from './ColumnParser/NoticePeriodParser.js';
import RoomCleaningGroupParser from './ColumnParser/RoomCleaningGroupParser.js';
import RoomReservationParser from './ColumnParser/RoomReservationParser.js';
import LevelNameParser from './ColumnParser/LevelNameParser.js';
import UserFunctionParser from './ColumnParser/UserFunctionParser.js';
import AssetRequirementParser from './ColumnParser/AssetRequirementParser.js';
import ContractTerminationParser from './ColumnParser/ContractTerminationParser.js';
import ContractStartParser from './ColumnParser/ContractStartParser.js';
import ContractBillingParser from './ColumnParser/ContractBillingParser.js';
import UserAccountParser from './ColumnParser/UserAccountParser.js';
import ContractTypeParser from './ColumnParser/ContractTypeParser.js';
import TableNames from './TableNames.js';

class ParserFactory {
    constructor(tableName, columnName, sentence, dateMatch, categoryMatch, unitUsed, numberMatch, comparisonOperator) {
        this.tableName = tableName;
        this.columnName = columnName;
        this.sentence = sentence;
        this.dateMatch = dateMatch;
        this.categoryMatch = categoryMatch;
        this.unitUsed = unitUsed;
        this.numberMatch = numberMatch;
        this.comparisonOperator = comparisonOperator;
    }

    createParser() {

        if (this.tableName.includes(TableNames.EMPLOYEE) && this.columnName == Columns.ACCOUNT) {
            debugger;
            const parser = new UserAccountParser(this.columnName, TableNames.EMPLOYEE, this.sentence);
            return parser.parse();
        }

        if (this.tableName == TableNames.RENTAL && this.columnName == Columns.TURNOVER) {
            debugger;
            const parser = new ContractTypeParser(this.columnName, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.tableName == TableNames.CONTRACT && (this.columnName == Columns.END_ON || this.columnName == Columns.TERMINATION)) {
            debugger;
            const parser = new ContractTerminationParser(this.columnName, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.tableName == TableNames.CONTRACT && this.columnName == Columns.START_ON) {
            debugger;
            const parser = new ContractStartParser(Columns.START_ON, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.tableName == TableNames.CONTRACT && this.columnName == Columns.BILLING_PERIOD) {
            debugger;
            const parser = new ContractBillingParser(Columns.BILLING_PERIOD, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.tableName == TableNames.ASSET && this.columnName == Columns.REQUIREMENT) {
            debugger;
            const parser = new AssetRequirementParser(Columns.REQUIREMENT, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.tableName == TableNames.USER && this.columnName == Columns.FUNCTION) {
            const parser = new UserFunctionParser(Columns.FUNCTION, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.tableName == TableNames.ROOM && this.columnName == Columns.RESERVED) {
            const parser = new RoomReservationParser(Columns.RESERVED, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.tableName == TableNames.ROOM && this.columnName == Columns.CLEANING_GROUP) {
            const parser = new RoomCleaningGroupParser(Columns.CLEANING_GROUP, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.tableName == TableNames.LEASES && this.columnName == Columns.NOTICE_PERIOD) {
            const parser = new NoticePeriodParser(Columns.NOTICE_PERIOD, this.tableName, this.sentence, this.comparisonOperator);
            return parser.parse();
        }
        
        if (this.tableName == TableNames.LEASES && this.columnName == Columns.END_ON) {
            const parser = new LeasesEndParser(Columns.END_ON, this.tableName, this.sentence);
            return parser.parse();
        }
        if (this.tableName == TableNames.LEVEL && this.columnName == Columns.CONTENT) {
            const parser = new LevelContentParser(Columns.CONTENT, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.tableName == TableNames.LEVEL && this.columnName == Columns.NAME) {
            const parser = new LevelNameParser(Columns.NAME, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.tableName == TableNames.EMPLOYEE && this.columnName == Columns.FUNCTION) {
            const parser = new EmployeeFunctionParser(Columns.FUNCTION, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.tableName == TableNames.EMPLOYEE && this.columnName == Columns.COMPANY) {
            const parser = new EmployeeCompanyParser(Columns.COMPANY, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.tableName == TableNames.EMPLOYEE && this.columnName == Columns.NAME) {
            const parser = new EmployeeNameParser(Columns.NAME, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.tableName == TableNames.SYSTEMS && this.columnName == Columns.REQUIREMENT) {
            const parser = new SystemRequirementParser(Columns.REQUIREMENT, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.tableName == TableNames.SYSTEMS && this.columnName == Columns.MAINTAINED_BY) {
            const parser = new SystemMaintainedParser(Columns.MAINTAINED_BY, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.tableName == TableNames.SYSTEMS && this.columnName == Columns.SYSTEM_LOCATION) {
            const parser = new SystemLocationParser(Columns.SYSTEM_LOCATION, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.tableName == TableNames.USER_ACCOUNT) {
            const parser = new AccountStatusParser(Columns.STATUS, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.columnName == Columns.NAME && this.tableName == TableNames.FURNITURE) {
            const parser = new FurnitureNameParser(Columns.NAME, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.columnName == Columns.SERVICE_TYPE) {
            const parser = new ServiceTypeParser(Columns.SERVICE_TYPE, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.columnName == Columns.RENTABILITY) {
            const parser = new RentabilityParser(Columns.RENTABILITY, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.columnName == Columns.FLOOR) {
            const parser = new FloorParser(Columns.FLOOR, this.tableName, this.sentence);
            return parser.parse();
        }

        if (this.columnName == Columns.DATE || this.dateMatch) {
            const parser = new DateParser(Columns.DATE, this.dateMatch, this.comparisonOperator, this.tableName);
            return parser.parse();
        }

        if (this.columnName == Columns.ROOM_SIZE || this.unitUsed) {
            const parser = new SizeParser(Columns.ROOM_SIZE, parseFloat(this.numberMatch[0]), this.unitUsed, this.comparisonOperator, this.tableName);
            return parser.parse();
        }

        if (this.columnName == Columns.CATEGORY || this.categoryMatch) {
            const parser = new CategoryParser(Columns.CATEGORY, this.categoryMatch, this.tableName);
            return parser.parse();
        }
    }
}

export default ParserFactory;


