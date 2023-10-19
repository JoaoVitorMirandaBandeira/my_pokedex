import styled from "styled-components"

export const CardPokemon = styled.div`
    display:flex;
    flex-direction: column;
    background-color:#f0d20e;
    height:200px;
    width:130px;
    align-items:center;
    justify-content: space-around;
    border-radius: 5px;
    img{
        height:100px;
        width:100px;
        padding: 10px 10px;
        border-radius: 5px;
        background-color:#FFFFFF;
    }
    .text-card{
        display:flex;
        width: 100%;
        justify-content:space-around;
        cursor: pointer;
        font-size: 17px;
        font-weight: 600;
        .name:hover{
            text-decoration: underline;
        }
        .heart{
            color: #FF0000;
        }
    }

`