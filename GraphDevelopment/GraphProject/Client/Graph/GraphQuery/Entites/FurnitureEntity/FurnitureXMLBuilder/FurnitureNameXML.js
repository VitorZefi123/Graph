import FurnitureColumns from '../FurnitureColumns.js';
import TableNames from '../../../TableNames.js';


class FurnitureNameXML {
    static CONDITION = "Condition";
    static TYPE = "Type";
    static PRIMITIVE = "Primitive";
    static PROPERTY = "Property";
    static NAME = "Name";
    static ENTITY_TYPE = "EntityType";
    static OPERATOR = "Operator";
    static EQUAL = "LikeNoCase";
    static VALUE = "Value";
    static EMPTY_SPACE = " ";
    static RENTABILITY = "Furniture Name";

    constructor(tableName, columnName, hashMap) {
        this.tableName = tableName;
        this.columnName = columnName;
        this.hashMap = hashMap;
    }

    buildXML() {
        const xmlDoc = document.implementation.createDocument("", "", null);

        const condition = xmlDoc.createElement(FurnitureNameXML.CONDITION);
        condition.setAttribute(FurnitureNameXML.TYPE, FurnitureNameXML.PRIMITIVE);

        const property = xmlDoc.createElement(FurnitureNameXML.PROPERTY);

        const name = xmlDoc.createElement(FurnitureNameXML.NAME);
        name.textContent = FurnitureColumns.getIdByColumnName(this.columnName);

        const entityType = xmlDoc.createElement(FurnitureNameXML.ENTITY_TYPE);
        entityType.textContent = TableNames.getIdByTableName(this.tableName);

        property.appendChild(name);
        property.appendChild(entityType);

        const operator = xmlDoc.createElement(FurnitureNameXML.OPERATOR);
        operator.textContent = FurnitureNameXML.EQUAL;

        const value = xmlDoc.createElement(FurnitureNameXML.VALUE);
        value.textContent = this.hashMap.get(FurnitureNameXML.RENTABILITY) || FurnitureNameXML.EMPTY_SPACE;
    
        condition.appendChild(property);
        condition.appendChild(operator);
        condition.appendChild(value);

        xmlDoc.appendChild(condition);

        const xmlString = new XMLSerializer().serializeToString(xmlDoc);
        return xmlString;
    }
}

export default FurnitureNameXML;