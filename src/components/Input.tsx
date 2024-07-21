import { Dispatch, SetStateAction } from "react";
interface Props {
  label: string;
  btn: string;
  handleFuncition: () => void;
  inputState: [string, Dispatch<SetStateAction<string>>];
}

export default function Input({
  label,
  btn,
  handleFuncition,
  inputState,
}: Props) {
  return (
    <div className="flex flex-col w-52 items-center gap-y-2">
      <label htmlFor="Agregar" className="text-monsoon-50 font-medium">
        {label}
      </label>
      <input
        type="text"
        className="border border-blue-950 rounded-2xl px-2 py-1"
        onChange={(e) => {
          inputState[1](e.target.value);
        }}
        value={inputState[0]}
      />
      <button
        className="border border-blue-950 px-12 py-2 rounded-full font-semibold text-monsoon-50 bg-monsoon-950"
        onClick={handleFuncition}
      >
        {btn}
      </button>
    </div>
  );
}
