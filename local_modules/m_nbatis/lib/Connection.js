'use strict';
const methods = Symbol('methods');
class Connection {
    constructor() {
        this[methods] = ['testConnection'];
    }
    * [Symbol.iterator]() {
        for (let item of this[methods]) {
            yield item;
        }
    }
    testConnection() {
        return new Promise((resolve, reject) => {
            this.connect((err) => {
                if(err) {
                    throw err;
                    resolve(false);
                }
                else {
                    resolve(true);
                }
                this.destroy();
            });
        });
    }
}

module.exports = Connection;
