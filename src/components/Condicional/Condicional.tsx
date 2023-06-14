import { BaseSyntheticEvent, useState } from "react"
import Input from "../Input/Input"
import Form from "../Form/Form"
import Button from "../Button/Button"

export default function Condicional () {

    const [condicional, setCondicional] = useState(false)

    const showPhrase = (e: BaseSyntheticEvent) => {
        e.preventDefault()
        setCondicional(e.target[0].value)
    }

    return (
        <>
        <Form onSubmit={showPhrase}>
            <Input type='text' name='phrase' placeholder='Digite'/>
            <Button type='submit'>Submit</Button>
        </Form>

        {condicional && (
            <div>
                <h1>{condicional}</h1>
            </div>
        )}
        </>
    )
}
