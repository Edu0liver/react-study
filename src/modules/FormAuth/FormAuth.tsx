import { BaseSyntheticEvent, useState } from "react";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import './FormAuth.css';

interface User {
  email: string;
  password: string;
}

export default function FormAuth() {

  const users: User[] = [];

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const hadleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    
    users.push({
      email,
      password,
    })

    console.log('Cadastrado com sucesso!');
    console.log(`Users:`, users);
  }
  
  return (
    <>
      <div className="page">
        <div className="form">
          <Form className="form-signup" onSubmit={hadleSubmit}>
            <div className="inputs">
              <Input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email"/>
              <Input type="password" name='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>
            </div>
            <div>
              <Input type="submit" value="Cadastrar" className="submit-button"/>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}
