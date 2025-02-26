"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permuter = void 0;
class Permuter {
    constructor(data) {
        this.__items = [...data];
    }
    get items() {
        return this.__items;
    }
    permute(i, j) {
        if ((i < 0 && i >= this.__items.length))
            return false;
        if ((j < 0 && j >= this.__items.length))
            return false;
        const aux = Object.assign({}, this.__items[i]);
        this.__items[i] = Object.assign({}, this.__items[j]);
        this.__items[j] = Object.assign({}, aux);
        return true;
    }
}
exports.Permuter = Permuter;
;
