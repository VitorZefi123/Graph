class RoomReservationParser {
    #columnName;
    #sentence;
    #tableName;

    constructor(columnName, tableName, sentence) {
        this.#columnName = columnName;
        this.#tableName = tableName;
        this.#sentence = sentence;
    }

    parse() {
        const result = [];
        let canBeReserved = "can"; 

        if (/\b(can not|cannot)\b/i.test(this.#sentence)) {
            canBeReserved = "cannot";
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }

        result.push(`Can Be Reserved: ${canBeReserved}`);

        return result;
    }
}

export default RoomReservationParser;
