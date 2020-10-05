import React from 'react'
import styled from "styled-components";

const _SearchBox = ({placeholder, handleChange, className }) => (
    <input 
        type='search' 
        className={className} 
        placeholder={placeholder} 
        onChange={handleChange} 
    />
)

export const SearchBox = styled(_SearchBox)`

    -webkit-appearance: none;
    border: none;
    outline: none;
    padding: 10px;
    width: 150px;
    line-height: 30px;
    margin-bottom: 30px;

`