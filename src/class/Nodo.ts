export class Nodo {
  public sgte: Nodo | null;
  public dato: string;

  constructor(_dato: string, _sgte?: Nodo) {
    this.dato = _dato;
    if (_sgte) {
      this.sgte = _sgte;
    } else {
      this.sgte = null;
    }
  }

  toString() {
    return `Dato: ${this.dato}, Sgte: ${this.sgte ? "Nodo" : "null"}`;
  }
}
