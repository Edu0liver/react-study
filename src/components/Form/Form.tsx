import { FormEvent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  method?: string;
  onSubmit?: (event: FormEvent) => void;
}

export default function Form({
  children,
  className,
  method,
  onSubmit,
}: Props) {
  return (
    <form
      className={ className ?? 'form' }
      method={method ?? ''}
      onSubmit={onSubmit ?? (() => console.log(''))}
    >
      {children}
    </form>
  )
}
