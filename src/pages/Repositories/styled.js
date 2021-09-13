import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div `
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
`

export const Title = styled.h1`
    text-align:center;
    font-size: 2rem;
    color: #fff;
    font-family: sans-serif;
`

export const List = styled.ul `
    list-styled: none;
    padding: 0;
    margin: 1px;
    DISPLAY: FLEX;
    FLEX-DIRECTION: row;
    flex-wrap: wrap;
    justify-content: center;

`

export const ListItem = styled.li `
    margin: .5rem;
    background: #000;
    color: #fff;
    padding: 3rem;
    list-style-type: none;
    width: 20%;
    text-align: center;
`

export const LinkHome = styled(Link)`
    display:block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000
    padding: .5rem 0;
    color: #fff;
    text-decoration: none;
`