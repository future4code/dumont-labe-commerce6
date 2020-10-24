import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
    width: 20vw;
    margin: 10px 40px 10px 100px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: 'Staatliches', cursive;
    font-size: 1em;
    color: rgb(35, 32, 113);

    @media (min-device-width : 320px) and (max-device-width : 420px)  {
        margin: 40px 0 30px 0;
        flex-direction: column;
        font-size: 1.3em;
    }
`
const Title = styled.h3`
    margin-right: 10px;
`

const Input = styled.input`
    margin-right: 10px;
    height: 1.3em;
    width: 30em;
    border: 2px solid rgb(35, 32, 113);
    border-radius: 4px;
    font-size: 17px;
    font-family: 'Staatliches', cursive;

    @media (min-device-width : 320px) and (max-device-width : 420px)  {
        width: 10.5em; 
        margin-top: 10px; 
        font-size: 20px;
    }
`

class Filter extends React.Component {

    render() {
        return (
            <FilterContainer>
                <Title>Filtros:</Title>
                <Input 
                value={this.props.inputMinValue}
                type="number"
                placeholder={'Valor mínimo'}/>

                <Input 
                value={this.props.inputMaxValue}
                type="number"
                placeholder={'Valor máximo'}/>

            </FilterContainer>  
        ) 
    }
}

export default Filter
