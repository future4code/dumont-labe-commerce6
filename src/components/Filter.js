import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
    width: 20vw;
    margin: 10px;
    padding-left: 10px;
    display: flex;
    align-items: center;
`

class Filter extends React.Component {

    render() {
        return (
            <FilterContainer>
                <h2>Filtros:</h2>
                <input 
                value={this.props.inputMinValue}
                type="number"
                placeholder={'valor min'}/>

                <input 
                value={this.props.inputMaxValue}
                type="number"/>

            </FilterContainer>  
        ) 
    }
}

export default Filter
