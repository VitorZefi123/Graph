import RoomColumns from '../RoomColumns.js';
import TableNames from '../../../TableNames.js';
import Rentability from '../RoomValues/Rentability.js';


class RoomRentabilityXML {
    static CONDITION = "Condition";
    static TYPE = "Type";
    static PRIMITIVE = "Primitive";
    static PROPERTY = "Property";
    static NAME = "Name";
    static ENTITY_TYPE = "EntityType";
    static OPERATOR = "Operator";
    static EQUAL = "In";
    static VALUE = "Value";
    static EMPTY_SPACE = " ";
    static RENTABILITY = "Rentability";

    constructor(tableName, columnName, hashMap) {
        this.tableName = tableName;
        this.columnName = columnName;
        this.hashMap = hashMap;
    }

    buildXML() {
        const xmlDoc = document.implementation.createDocument("", "", null);

        const condition = xmlDoc.createElement(RoomRentabilityXML.CONDITION);
        condition.setAttribute(RoomRentabilityXML.TYPE, RoomRentabilityXML.PRIMITIVE);

        const property = xmlDoc.createElement(RoomRentabilityXML.PROPERTY);

        const name = xmlDoc.createElement(RoomRentabilityXML.NAME);
        name.textContent = RoomColumns.getIdByColumnName(this.columnName);

        const entityType = xmlDoc.createElement(RoomRentabilityXML.ENTITY_TYPE);
        entityType.textContent = TableNames.getIdByTableName(this.tableName);

        property.appendChild(name);
        property.appendChild(entityType);

        const operator = xmlDoc.createElement(RoomRentabilityXML.OPERATOR);
        operator.textContent = RoomRentabilityXML.EQUAL;

        const value = xmlDoc.createElement(RoomRentabilityXML.VALUE);
        value.textContent = Rentability.getIdByRentabilityName(this.hashMap.get(RoomRentabilityXML.RENTABILITY) || RoomRentabilityXML.EMPTY_SPACE);
    
        condition.appendChild(property);
        condition.appendChild(operator);
        condition.appendChild(value);

        xmlDoc.appendChild(condition);

        const xmlString = new XMLSerializer().serializeToString(xmlDoc);
        return xmlString;
    }
}

export default RoomRentabilityXML;