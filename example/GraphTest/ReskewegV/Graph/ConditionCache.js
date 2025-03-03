class ConditionCache {
    constructor() {
        this.cache = new Map(); 
        this.loadFromLocalStorage(); 
    }

    loadFromLocalStorage() {
        const savedCache = localStorage.getItem('conditionCache');
        if (savedCache) {
            const parsedCache = JSON.parse(savedCache);
            this.cache = new Map(Object.entries(parsedCache)); 
        }
    }

    saveToLocalStorage() {
        const cacheObject = Object.fromEntries(this.cache); 
        localStorage.setItem('conditionCache', JSON.stringify(cacheObject)); 
    }

    saveCondition(keys, tree) {
        let keyString = keys.join(",");
        this.cache.set(keyString, tree);
        this.saveToLocalStorage(); 
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
