import styled from '@emotion/styled';

export const Container = styled.div`
    margin: auto;
    width: 700px;
    padding: 20px;
`
export const Search = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const Label = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`

export const Input = styled.input`
    max-width: 200px;
    padding: 5px;
`

export const Table = styled.table`
    margin: auto;
    width: 700px;
`

export const Header = styled.th`
    padding: 20px;
    box-shadow: 0 4px 8px -1px rgba(0, 0, 0, 0.2);
    width: ${props => props.width}px;

`
export const HeaderRow = styled.tr`
    display:flex;
    flex-direction: row;
    align-items: center;
`
export const Row = styled.tr`
    display:flex;
    flex-direction: row;
    border-bottom: 1px solid darkgray;
    min-height: 50px;
`
export const Cell = styled.td`
    padding: 10px 20px 10px 20px;
    display: flex;
    align-items: center;
    width: ${props => props.width}px;

`


