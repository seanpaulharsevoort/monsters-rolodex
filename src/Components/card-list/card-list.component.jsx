import React from 'react';
import styled from 'styled-components'
import { Card } from '../card/Card.component'
 


 
const _CardList = ({monsters, className}) => (
    <div className={className} > 
    {
        monsters.map(monster => <Card key={monster.id} monster={monster}/>)
    }
    </div>
)

export const CardList = styled(_CardList)`
    width: 85vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
`;
