import Form from "../../../components/Form/Form";
import Input from "../../../components/Input/Input";
import './FormAuth.css';

interface User {
  email: string;
  password: string;
}

export default function FormAuth() {

  const users: User[] = [];
  
  const hadleSubmit = (event: any) => {
    event.preventDefault();

    users.push({
      email: event.target[0].value,
      password: event.target[1].value,
    })

    alert('Cadastrado com sucesso!');
    console.log(users)
  }
  
  return (
    <>
      <div className="page">
        <div className="form">
          <Form className="form-signup" onSubmit={hadleSubmit}>
            <div className="inputs">
              <Input type="email" name="email" placeholder="Email"/>
              <Input type="password" name='password' placeholder="Password"/>
            </div>
            <div>
              <Input type="submit" className="submit-button"/>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}
