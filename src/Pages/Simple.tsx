import { useState } from "react";
import { ListaSimple } from "../class/lista";
import { Nodo } from "../class/Nodo";
import Input from "../components/Input";
import CNodo from "../components/Nodo";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const lista = new ListaSimple<string>();

lista.AgregarInicio(new Nodo("1"));

export default function Simple() {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputValue2, setInputValue2] = useState<string>("");

  const code = `import { Nodo } from "./Nodo";
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

  AgregarInicio(nuevo: Nodo) {
    if (this.inicio == null) {
      this.inicio = nuevo;
    } else {
      nuevo.sgte = this.inicio;
      this.inicio = nuevo;
    }
    this.cant++;
  }

  AgregarFinal(nuevo: Nodo) {
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
`;

  return (
    <>
      <article className="p-12 flex-grow flex flex-col justify-between">
        <section className="flex flex-grow justify-between">
          <div className=" w-3/5">
            <h3 className="text-2xl mb-6">Listas Simple</h3>
            <div className="grid grid-cols-4 gap-y-4">
              {lista.Map((date, index) => {
                return <CNodo key={index} dato={date} sgte />;
              })}
            </div>
          </div>
          <SyntaxHighlighter
            language="typescript"
            style={atomOneDark}
            customStyle={{ height: 360, width: "40%", overflowY: "scroll" }}
          >
            {code}
          </SyntaxHighlighter>
        </section>
      </article>
      <footer className="bg-monsoon-800 px-12 py-4 flex gap-x-2">
        <Input
          label="Agregar Nodo al Incio"
          btn="agregar"
          inputState={[inputValue, setInputValue]}
          handleFuncition={() => {
            lista.AgregarInicio(new Nodo(inputValue));
            setInputValue("");
          }}
        />

        <Input
          label="Agregar Nodo al Final"
          btn="agregar"
          inputState={[inputValue2, setInputValue2]}
          handleFuncition={() => {
            lista.AgregarFinal(new Nodo(inputValue2));
            setInputValue2("");
          }}
        />
      </footer>
    </>
  );
}
