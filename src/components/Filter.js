import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
    width: 20vw;
    margin: 10px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: rgb(35, 32, 112);
`
const Title = styled.h3`
    margin-right: 10px;
`

const Input = styled.input`
    margin-right: 10px;
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
