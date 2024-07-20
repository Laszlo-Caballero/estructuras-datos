import { ListaSimple } from "../class/lista";
import { Nodo } from "../class/Nodo";
import CNodo from "../components/Nodo";

const lista = new ListaSimple();

lista.agregarInicio(new Nodo("1"));
lista.agregarInicio(new Nodo("2"));
lista.agregarInicio(new Nodo("3"));
lista.agregarInicio(new Nodo("4"));
lista.agregarInicio(new Nodo("5"));

export default function Simple() {
  return (
    <article>
      <section className="flex">
        {lista.Map((date) => {
          return <CNodo dato={date} sgte />;
        })}
      </section>
      <footer>
        <div className="flex flex-col w-52 items-center gap-y-2">
          <label htmlFor="Agregar">Agregar Nodo</label>
          <input
            type="text"
            className="border border-blue-950 rounded-2xl px-2 py-1"
          />
          <button className="border border-blue-950 px-12 py-2 rounded-full">
            Agregar
          </button>
        </div>
      </footer>
    </article>
  );
}
