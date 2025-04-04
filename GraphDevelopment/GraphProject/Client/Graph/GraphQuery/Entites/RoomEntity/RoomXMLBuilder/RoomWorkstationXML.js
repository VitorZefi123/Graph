import RoomColumns from '../RoomColumns.js';
import TableNames from '../../../TableNames.js';


class RoomWorkstationXML {
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
    static SIZE = "Size";
    static COMPARISON_OPERATOR = "Comparison Operator";

    constructor(tableName, columnName, hashMap) {
        this.tableName = tableName;
        this.columnName = columnName;
        this.hashMap = hashMap;
    }

    buildXML() {
        const xmlDoc = document.implementation.createDocument("", "", null);

        const condition = xmlDoc.createElement(RoomWorkstationXML.CONDITION);
        condition.setAttribute(RoomWorkstationXML.TYPE, RoomWorkstationXML.PRIMITIVE);

        const property = xmlDoc.createElement(RoomWorkstationXML.PROPERTY);

        const name = xmlDoc.createElement(RoomWorkstationXML.NAME);
        name.textContent = RoomColumns.getIdByColumnName(this.columnName);

        const entityType = xmlDoc.createElement(RoomWorkstationXML.ENTITY_TYPE);
        entityType.textContent = TableNames.getIdByTableName(this.tableName);

        property.appendChild(name);
        property.appendChild(entityType);

        const operator = xmlDoc.createElement(RoomWorkstationXML.OPERATOR);
        operator.textContent = this.hashMap.get(RoomWorkstationXML.COMPARISON_OPERATOR);

        const value = xmlDoc.createElement(RoomWorkstationXML.VALUE);
        value.textContent = this.hashMap.get(RoomWorkstationXML.SIZE) || RoomWorkstationXML.EMPTY_SPACE;
    
        condition.appendChild(property);
        condition.appendChild(operator);
        condition.appendChild(value);

        xmlDoc.appendChild(condition);

        const xmlString = new XMLSerializer().serializeToString(xmlDoc);
        return xmlString;
    }
}

export default RoomWorkstationXML;