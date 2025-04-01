class EmployeeFunctionXML {
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
    static USER_FUNCTION_KEY = "User Function";

    constructor(tableName, columnName, hashMap) {
        this.tableName = tableName;
        this.columnName = columnName;
        this.hashMap = hashMap;
    }

    buildXML() {
        const xmlDoc = document.implementation.createDocument("", "", null);

        const condition = xmlDoc.createElement(EmployeeFunctionXML.CONDITION);
        condition.setAttribute(EmployeeFunctionXML.TYPE, EmployeeFunctionXML.PRIMITIVE);

        const property = xmlDoc.createElement(EmployeeFunctionXML.PROPERTY);

        const name = xmlDoc.createElement(EmployeeFunctionXML.NAME);
        name.textContent = this.columnName;

        const entityType = xmlDoc.createElement(EmployeeFunctionXML.ENTITY_TYPE);
        entityType.textContent = this.tableName;

        property.appendChild(name);
        property.appendChild(entityType);

        const operator = xmlDoc.createElement(EmployeeFunctionXML.OPERATOR);
        operator.textContent = EmployeeFunctionXML.EQUAL;

        const value = xmlDoc.createElement(EmployeeFunctionXML.VALUE);
        value.textContent = this.hashMap.get(EmployeeFunctionXML.USER_FUNCTION_KEY) || EmployeeFunctionXML.EMPTY_SPACE;
    
        condition.appendChild(property);
        condition.appendChild(operator);
        condition.appendChild(value);

        xmlDoc.appendChild(condition);

        const xmlString = new XMLSerializer().serializeToString(xmlDoc);
        return xmlString;
    }
}
export default EmployeeFunctionXML;