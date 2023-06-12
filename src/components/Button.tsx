
interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
    onClick: () => void;
}

export default function Button({ children, onClick, color = 'primary' }: Props) {
  return (
    <button className={`btn btn-${color}`} onClick={onClick} >{children}</button>
  )
}
