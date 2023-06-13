import { BaseSyntheticEvent, useState } from "react"
import Input from "../Input/Input"
import Form from "../Form/Form"
import Button from "../Button/Button"

export default function Condicional () {

    const [condicional, setCondicional] = useState(false)

    const aa = (e: BaseSyntheticEvent) => {
        e.preventDefault()

        setCondicional(e.target.value)
    }

    return (
        <>
        <Form>
            <Input type='text' placeholder='Digite'/>
            <Button type='submit' onClick={aa}>Submit</Button>
        </Form>

        {condicional && (
            <div>
                <h1>{condicional}</h1>
            </div>
        )}
        </>
    )
}
