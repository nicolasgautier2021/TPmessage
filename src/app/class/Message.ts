import {Time} from "@angular/common";

export class Message {
private _id : number;
private _texte : String ;
private _pseudo : String ;
private _date : Date;

  constructor(id: number, texte: String, pseudo: String, date: Date) {
    this._id = id;
    this._texte = texte;
    this._pseudo = pseudo;
    this._date = date;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get texte(): String {
    return this._texte;
  }

  set texte(value: String) {
    this._texte = value;
  }

  get pseudo(): String {
    return this._pseudo;
  }

  set pseudo(value: String) {
    this._pseudo = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }
}
