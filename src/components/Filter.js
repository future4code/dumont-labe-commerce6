import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
    width: 20vw;
    height: 100vh;
    margin: 10px;
    padding-left: 10px;
    border: solid 1px black;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

class Filter extends React.Component {

    render() {
        return (
            <FilterContainer>
                <h2>Filtros:</h2>
                <p>Valor Mínimo:</p>
                <input 
                value={this.props.inputMinValue}
                
                type="number"/>
                <p>Valor Máximo:</p>
                <input 
                value={this.props.inputMaxValue}
                 
                type="number"/>
                <p>Buscar Produto:</p>
                <input 
                value={this.props.inputSearchProduct}
                onChange={this.props.nameFilter}
                
                />
            </FilterContainer>  
        ) 
    }
}

export default Filter
