import { useState } from "react";
import './Card.css'
import Button from "../../components/Button/Button";
import Pessoa from "../../components/Pessoa/Pessoa";

interface PessoaType {
  id: number;
  name: string;
  age: number;
  profissao: string;
}

export default function Card() {

  const pessoas: PessoaType[] = [
    {
      id: 1,
      name: 'Roger',
      age: 22,
      profissao: 'Programador'
    },
    {
      id: 2,
      name: 'Eduardo',
      age: 20,
      profissao: 'Programador'
    },
    {
      id: 3,
      name: 'Danilo',
      age: 25,
      profissao: 'Programador'
    },
  ];

  const isVoidArray = (pessoas: PessoaType[]) => {
    if (pessoas.length === 0) {
      return true;
    }
    return false;
  }

  const [setPessoa, setPessoaValue] = useState(pessoas[0]);

  const changePessoa = (pessoa: PessoaType, pessoas: PessoaType[]) => {
    const pessoaIndex = pessoas.findIndex((p) => p.id === pessoa.id);
    const nextPessoa = pessoas[pessoaIndex + 1];

    if (!nextPessoa) {
      setPessoaValue(pessoas[0]);
      return;
    }

    setPessoaValue(nextPessoa);
  };

  const changeBackPessoa = (pessoa: PessoaType, pessoas: PessoaType[]) => {
    const pessoaIndex = pessoas.findIndex((p) => p.id === pessoa.id);
    const previousPessoa = pessoas[pessoaIndex - 1];

    if (!previousPessoa) {
      setPessoaValue(pessoas.reverse()[0]);
      return;
    }

    setPessoaValue(previousPessoa);
  };
  
  return (
    <>
      <div className="void_array">{isVoidArray(pessoas) && <h1>Não há pessoas!</h1>}</div>
      
      <div className="card">
      {
        !isVoidArray(pessoas) &&
        <div>
          <Pessoa name={setPessoa.name} age={setPessoa.age} profissao={setPessoa.profissao}/>
          <Button onClick={() => changeBackPessoa(setPessoa, pessoas)}>Anterior</Button>
          <Button onClick={() => changePessoa(setPessoa, pessoas)}>Próximo</Button>
        </div>
      }
      </div>
    </>
  )
}
