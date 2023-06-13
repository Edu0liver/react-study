import { ReactNode } from "react";
import './Button.css'

interface Props {
    children: ReactNode;
    className?: string;
    onClick: () => void;
}

export default function Button({ children, onClick, className }: Props) {
  return (
    <button className={ className?? 'button' } onClick={onClick}>{children}</button>
  )
}
