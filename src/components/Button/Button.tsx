import { BaseSyntheticEvent, ReactNode } from "react";
import './Button.css'

interface Props {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick: (e?: BaseSyntheticEvent) => void;
}

export default function Button({ children, onClick, type, className }: Props) {
  return (
    <button type={ type ?? 'button' } className={ className?? 'button' } onClick={onClick}>{children}</button>
  )
}
