import './Pessoa.css'

interface Props {
    name: string;
    age: number;
    profissao: string;
}

export default function Pessoa({ name, age, profissao }: Props) {
    return (
        <div id="pessoa">
            <h1>{name}</h1>
            <div id='data'>
                <p>Idade: {age}</p>
                <p>Profissão: {profissao}</p>
            </div>
        </div>
    )
}