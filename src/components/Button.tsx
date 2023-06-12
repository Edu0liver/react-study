import { ReactNode } from "react";
import './Button.css'

interface Props {
    children: ReactNode;
    onClick: () => void;
}

export default function Button({ children, onClick }: Props) {
  return (
    <button id='button' onClick={onClick}>{children}</button>
  )
}
