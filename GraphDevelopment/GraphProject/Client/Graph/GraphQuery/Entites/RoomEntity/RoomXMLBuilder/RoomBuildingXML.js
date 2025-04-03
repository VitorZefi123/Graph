class RoomBuildingXML {
    static CONDITION = "Condition";
    static TYPE = "Type";
    static PRIMITIVE = "Primitive";
    static PROPERTY = "Property";
    static NAME = "Name";
    static ENTITY_TYPE = "EntityType";
    static OPERATOR = "Operator";
    static EQUAL = "Equal";
    static VALUE = "Value";
    static EMPTY_SPACE = " ";
    static BUILDING_NAME = "Building Name";

    constructor(tableName, columnName, hashMap) {
        this.tableName = tableName;
        this.columnName = columnName;
        this.hashMap = hashMap;
    }

    buildXML() {
        const xmlDoc = document.implementation.createDocument("", "", null);

        const condition = xmlDoc.createElement(RoomBuildingXML.CONDITION);
        condition.setAttribute(RoomBuildingXML.TYPE, RoomBuildingXML.PRIMITIVE);

        const property = xmlDoc.createElement(RoomBuildingXML.PROPERTY);

        const name = xmlDoc.createElement(RoomBuildingXML.NAME);
        name.textContent = this.columnName;

        const entityType = xmlDoc.createElement(RoomBuildingXML.ENTITY_TYPE);
        entityType.textContent = this.tableName;

        property.appendChild(name);
        property.appendChild(entityType);

        const operator = xmlDoc.createElement(RoomBuildingXML.OPERATOR);
        operator.textContent = RoomBuildingXML.EQUAL;

        const value = xmlDoc.createElement(RoomBuildingXML.VALUE);
        value.textContent = this.hashMap.get(RoomBuildingXML.BUILDING_NAME) || RoomBuildingXML.EMPTY_SPACE;
    
        condition.appendChild(property);
        condition.appendChild(operator);
        condition.appendChild(value);

        xmlDoc.appendChild(condition);

        const xmlString = new XMLSerializer().serializeToString(xmlDoc);
        return xmlString;
    }
}

export default RoomBuildingXML;