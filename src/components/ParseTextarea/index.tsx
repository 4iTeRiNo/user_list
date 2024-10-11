import { useState } from "react";
import useStore from "../stores";

interface Props {
  value: string;
  onChange?: (value: string) => void;
}
const ParseTextarea = ({ value, onChange }: Props) => {
  const [text, setText] = useState<string>(value);
  const { isChange } = useStore();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!onChange) return;
    const value = e.target.value;

    setText(value);
    onChange(value);
  };

  return (
    <textarea
      onChange={handleChange}
      className={`w-full text-black pl-[10px] rounded-lg text-lg placeholder:text-base 
        focus-visible:outline-none h-[35px] ${
          isChange ? "bg-transparent" : ""
        }`}
      disabled={isChange}
      placeholder="Расскажите о себе немного"
      value={text}
      rows={4}
      cols={28}
      spellCheck={true}
      wrap="cols"
    />
  );
};

export default ParseTextarea;
