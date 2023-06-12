
interface Props {
    name: string;
    age: number;
    profissao: string;
}

export default function Pessoa({ name, age, profissao }: Props) {
    return (
        <div>
            <h1>{name}</h1>
            <p>Idade: {age}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}