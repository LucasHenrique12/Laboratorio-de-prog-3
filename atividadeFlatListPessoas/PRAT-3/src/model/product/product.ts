import * as Crypto from "expo-crypto";

export interface TProductAttr {
  id: string;
  name: string;
  price: string;
}
const emptyProduct: TProductAttr = { id: "", name: "", price: "" };

export class Product implements TProductAttr {
  private _data: TProductAttr = emptyProduct;

  constructor(price?: string, name?: string) {
    this._data.id = Crypto.randomUUID();
    this._data.price = price ? price : "";
    this._data.name = name ? name : "";
  }
  get id() {
    return this._data.id;
  }
  get name() {
    return this._data.name;
  }
  set name(s: string) {
    this._data.name = s;
  }
  get price() {
    return this._data.price;
  }
  set price(s: string) {
    this._data.price = s;
  }

  get data(): TProductAttr {
    return this._data;
  }
}
