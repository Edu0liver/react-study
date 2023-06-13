
interface Props {
  type: string;
  className?: string;
  name?: string;
  placeholder?: string;
}

export default function Input({
  type,
  className,
  name,
  placeholder,
}: Props) {
  return (
    <>
      <input
        type={type}
        className={ className ?? '' }
        name={ name ?? '' }
        placeholder={ placeholder ?? '' }
      />
    </>
  )
}
