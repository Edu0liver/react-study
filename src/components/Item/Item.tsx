import { ReactNode } from "react";

interface Props {
    content: ReactNode;
}

export default function Item({ content }: Props) {
  return (
    <>
        <li>
            {content}
        </li>
    </>
  )
}
