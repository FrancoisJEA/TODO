import { DatePipe } from '@angular/common';

interface Tasks{
  Name:string;
  Description:string;
  ExpirationDate:Date;
  color?: string;
}

export class task implements Tasks {

//#region var declaration
  private _name:string ="";
  private _description:string = "";
  private _color:string ="";
  private _expirationDate: Date = new Date('');
  private _bar: boolean = false;
//#endregion

//#region get set
  get Name(): string { return this._name;}
  set Name(value: string) {this._name = value;}
  get Description(): string { return this._description;}
  set Description(value: string) {this._description = value;}
  get Color(): string { return this._color;}
  set Color(value: string) {this._color = value;}
  get ExpirationDate(): Date { return this._expirationDate;}
  set ExpirationDate(value: Date) {this._expirationDate = value;}
//#endregion

  constructor(nom: string, description: string,expirationDate:Date , color?: string) {
      this.Name = nom;
      this.Description = description;
      this.ExpirationDate = expirationDate;
      this.Color = color!;
  }


  sePresenter() {
      console.log(`Bonjour, je m'appelle ${this._name} et j'ai ${this._name} ans.`);
  }
}
