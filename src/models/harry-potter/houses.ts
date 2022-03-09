
export class Houses {

  private _name: string = '';
  private _element: string = '';
  private _animal: string = '';
  private _commonRoom: string = '';
  private _founder: string = '';
  private _ghost: string = '';
  private _visible: boolean = false;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get element(): string {
    return this._element;
  }

  set element(value: string) {
    this._element = value;
  }

  get animal(): string {
    return this._animal;
  }

  set animal(value: string) {
    this._animal = value;
  }

  get commonRoom(): string {
    return this._commonRoom;
  }

  set commonRoom(value: string) {
    this._commonRoom = value;
  }

  get founder(): string {
    return this._founder;
  }

  set founder(value: string) {
    this._founder = value;
  }

  get ghost(): string {
    return this._ghost;
  }

  set ghost(value: string) {
    this._ghost = value;
  }

  get visible(): boolean {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
  }
}
