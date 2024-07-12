class HashMap {
    constructor() {
        this.map = {};
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash << 5) - hash + key.charCodeAt(i);
            hash |= 0;
        }
        return hash;
    }

    put(key, value) {
        const hashedKey = this.hash(key);
        this.map[hashedKey] = value;
    }

    get(key) {
        const hashedKey = this.hash(key);
        return this.map.hasOwnProperty(hashedKey) ? this.map[hashedKey] : undefined;
    }

    remove(key) {
        const hashedKey = this.hash(key);
        if (this.map.hasOwnProperty(hashedKey)) {
            delete this.map[hashedKey];
        }
    }
}


const hashMap = new HashMap();
hashMap.put("name", "Hari Prasath");
hashMap.put("age", 19);

console.log(hashMap.get("name"));
console.log(hashMap.get("age"));

hashMap.remove("name");
console.log(hashMap.get("name"));
