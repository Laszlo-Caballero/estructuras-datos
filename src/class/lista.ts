import { Nodo } from "./Nodo";
type MapType<T, U> = {
  (date: T, index?: number): U;
};

export class ListaSimple<T> {
  public inicio: Nodo<T> | null;
  public cant: number = 0;

  constructor(_inicio?: Nodo<T>) {
    if (_inicio) {
      this.inicio = _inicio;
    } else {
      this.inicio = null;
    }
  }

  AgregarInicio(nuevo: Nodo<T>) {
    if (this.inicio == null) {
      this.inicio = nuevo;
    } else {
      nuevo.sgte = this.inicio;
      this.inicio = nuevo;
    }
    this.cant++;
  }

  AgregarFinal(nuevo: Nodo<T>) {
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

  EliminarNodo(dato: T) {
    if (this.inicio?.dato == dato) {
      this.inicio = this.inicio.sgte;
      return true;
    }

    let anterior = this.inicio;
    let actual = this.inicio?.sgte;

    while (actual != null && actual.dato != dato) {
      anterior = actual;
      actual = actual.sgte;
    }

    if (actual != null && anterior != null) {
      anterior.sgte = actual?.sgte;
      return true;
    }

    return false;
  }

  Map<U>(cb: MapType<T, U>) {
    let inicio = this.inicio;
    let index = 0;
    const Retorno: U[] = [];
    while (inicio != null) {
      Retorno.push(cb(inicio.dato, index));
      inicio = inicio.sgte;
      index++;
    }
    return Retorno;
  }
}
