import { BaseSyntheticEvent } from "react";

interface Props {
  type: string;
  value?: string;
  className?: string;
  name?: string;
  placeholder?: string;
  onChange?: (e: BaseSyntheticEvent) => void;
}

export default function Input({
  type,
  className,
  name,
  placeholder,
  onChange,
}: Props) {
  return (
    <>
      <input
        type={type}
        className={ className ?? '' }
        name={ name ?? '' }
        placeholder={ placeholder ?? '' }
        onChange={onChange}
      />
    </>
  )
}
