import React from 'react'
import styled from 'styled-components'


const _Card = ({monster, className}) => (
    <div className={className}>
        <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2`}/>
        <h1>{ monster.name }</h1>
        <h2>{ monster.email }</h2>
    </div>
)

export const Card = styled(_Card)`
    display: flex;
    flex-direction: column;
    background-color: #95dada;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 25px;
    cursor: pointer;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out; 

    &:hover {
        transform: scale(1.05);
    }

`;