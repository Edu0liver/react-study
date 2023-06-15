 import { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Card from '../../modules/Card/Card'
import FormAuth from '../../modules/FormAuth/FormAuth'
import Condicional from '../Condicional/Condicional'
 
export default class RoutesMap extends Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<Card />}/>
                <Route path='/card' element={<Card />}/>
                <Route path='/form-auth' element={<FormAuth/>}/>
                <Route path='/condicional' element={<Condicional/>}/>
            </Routes>
        )
    }
}
 