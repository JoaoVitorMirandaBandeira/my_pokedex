import { useState } from "react"
import { getAllPokemons } from "../services/getAllPokemons"
import { filterPokemons } from "../utils/filterPokemons"
import styled from "styled-components"
import "../style/form.scss"


const DivForm =  styled.div`
    display: flex;
    gap:5px;
    padding: 10px 20px;
`
const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #3B4CCA;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    cursor: pointer;
    &:active{
        background-color: #212b7e;
    }
`

const Form = (props) => {
    const [textInput,setTextInput] = useState('')
    const handleInputChange = (event) => {
        const value = event.target.value
        setTextInput(value)
    }
    const searchPokemons = async () => {
        const resulte = await getAllPokemons()
        const filteredPokemons = filterPokemons(resulte,textInput)
        props.setFilteredPokemons(filteredPokemons)
    }
    return(
        <DivForm>
            <input type="text" id="name" value={textInput} onChange={handleInputChange} placeholder="Nome do pokemon"/>
            <Button onClick={searchPokemons}>Buscar</Button>
        </DivForm>
    )
}

export { Form }