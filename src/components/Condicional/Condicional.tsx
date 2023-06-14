import { BaseSyntheticEvent, useState } from "react"
import Input from "../Input/Input"
import Form from "../Form/Form"
import Button from "../Button/Button"

export default function Condicional () {

    const [condicional, setCondicional] = useState('')
    const [phrase, setPhrase] = useState('')

    const showPhrase = (e?: BaseSyntheticEvent) => {
        e?.preventDefault()
        setCondicional(phrase)
    }

    const clearPhrase = () => setCondicional('')

    return (
        <>
        <Form >
            <Input type='text' name='phrase' onChange={(e) => setPhrase(e.target.value)} placeholder='Digite'/>
            <Button type='submit' onClick={showPhrase}>Submit</Button>
            <Button type='submit' onClick={clearPhrase}>Clear</Button>
        </Form>

        {condicional && ( 
            <div>
                <h1>{condicional}</h1>
            </div>
        )}
        </>
    )
}
