import { Nodo } from "./Nodo";
type MapType = {
  (date: string, index?: number): JSX.Element;
};

export class ListaSimple {
  public inicio: Nodo | null;
  public cant: number = 0;

  constructor(_inicio?: Nodo) {
    if (_inicio) {
      this.inicio = _inicio;
    } else {
      this.inicio = null;
    }
  }

  agregarInicio(nuevo: Nodo) {
    if (this.inicio == null) {
      this.inicio = nuevo;
    } else {
      nuevo.sgte = this.inicio;
      this.inicio = nuevo;
    }
    this.cant++;
  }

  agregarFinal(nuevo: Nodo) {
    if (this.inicio == null) {
      this.inicio = nuevo;
    } else {
      let inicio = this.inicio;
      while (inicio.sgte != null) {
        inicio = inicio.sgte;
      }
      inicio.sgte = nuevo;
    }
    this.cant++;
  }

  Map(cb: MapType) {
    let inicio = this.inicio;
    let index = 0;
    const Retorno: JSX.Element[] = [];
    while (inicio != null) {
      Retorno.push(cb(inicio.dato, index));
      inicio = inicio.sgte;
      index++;
    }
    return Retorno;
  }
}
