import * as Crypto from "expo-crypto";
export interface TUserAttr {
  id: string;
  name: string;
  email: string;
}
const emptyUser: TUserAttr = { id: "", name: "", email: "" };
export class User implements TUserAttr {
  private _data: TUserAttr = emptyUser;
  constructor(email?: string, name?: string) {
    this._data.id = Crypto.randomUUID();
    this._data.email = email ? email : "";
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
  get email() {
    return this._data.email;
  }
  set email(s: string) {
    this._data.email = s;
  }

  get data(): TUserAttr {
    return this._data;
  }
}
