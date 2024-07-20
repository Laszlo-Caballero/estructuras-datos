import Derecha from "../assets/derecha.png";

interface Props {
  dato: string;
  sgte?: boolean;
}

export default function Nodo({ dato, sgte }: Props) {
  return (
    <div className="flex items-center">
      <div className="p-12 border-blue-950 border rounded-2xl">{dato}</div>
      {sgte && <img src={Derecha} alt="flecha" className="w-12 h-12" />}
    </div>
  );
}
