import React from 'react';

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
            <div>
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
            </div>  
        ) 
    }
}

export default Filter
