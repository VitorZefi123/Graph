class ServiceTypeXML {
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
    static SERVICE_TYPE = "Service type";

    constructor(tableName, columnName, hashMap) {
        this.tableName = tableName;
        this.columnName = columnName;
        this.hashMap = hashMap;
    }

    buildXML() {
        const xmlDoc = document.implementation.createDocument("", "", null);

        const condition = xmlDoc.createElement(ServiceTypeXML.CONDITION);
        condition.setAttribute(ServiceTypeXML.TYPE, ServiceTypeXML.PRIMITIVE);

        const property = xmlDoc.createElement(ServiceTypeXML.PROPERTY);

        const name = xmlDoc.createElement(ServiceTypeXML.NAME);
        name.textContent = this.columnName;

        const entityType = xmlDoc.createElement(ServiceTypeXML.ENTITY_TYPE);
        entityType.textContent = this.tableName;

        property.appendChild(name);
        property.appendChild(entityType);

        const operator = xmlDoc.createElement(ServiceTypeXML.OPERATOR);
        operator.textContent = ServiceTypeXML.EQUAL;

        const value = xmlDoc.createElement(ServiceTypeXML.VALUE);
        value.textContent = this.hashMap.get(ServiceTypeXML.SERVICE_TYPE) || ServiceTypeXML.EMPTY_SPACE;
    
        condition.appendChild(property);
        condition.appendChild(operator);
        condition.appendChild(value);

        xmlDoc.appendChild(condition);

        const xmlString = new XMLSerializer().serializeToString(xmlDoc);
        return xmlString;
    }
}

export default ServiceTypeXML;