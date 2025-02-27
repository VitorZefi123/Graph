class ConditionCache {
    constructor() {
        this.cache = new Map(); 
    }


    saveCondition(keys, tree) {
        let keyString = keys.join(","); 
        this.cache.set(keyString, tree);
    }

    getCondition(keys) {
        let keyString = keys.join(",");
        return this.cache.get(keyString) || null;
    }

    getAllConditions() {
        return this.cache;
    }
}

export default ConditionCache;
