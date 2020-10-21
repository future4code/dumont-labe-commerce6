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
    state = {
        inputMinValue: "",
        inputMaxValue: "",
        inputSearchProduct: ""
    }

    onChangeInputMinValue = (event) => {
        this.setState({inputMinValue: event.target.value})
    }
    
    onChangeInputMaxValue = (event) => {
        this.setState({inputMaxValue: event.target.value})
    }

    onChangeInputSearchProduct = (event) => {
        this.setState({inputSearchProduct: event.target.value})
    }

    render() {
        return (
            <FilterContainer>
                <h2>Filtros:</h2>
                <p>Valor Mínimo:</p>
                <input 
                value={this.state.inputMinValue}
                onChange={this.onChangeInputMinValue}
                />
                <p>Valor Máximo:</p>
                <input 
                value={this.state.inputMaxValue}
                onChange={this.onChangeInputMaxValue}
                />
                <p>Buscar Produto:</p>
                <input 
                value={this.state.inputSearchProduct}
                onChange={this.onChangeInputSearchProduct}
                />
            </FilterContainer>  
        ) 
    }
}

export default Filter
