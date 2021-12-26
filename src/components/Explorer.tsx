import React from 'react'
import styled from 'styled-components'

interface ExplorerProps {
    
}

let ExlporerContainer = styled.div`
background-color: black;
width: 10%;
min-height: 902px;

background-color: #E8E8E8;
`

const Explorer: React.FunctionComponent<ExplorerProps> = () => {
    return ( 
        <ExlporerContainer>

        </ExlporerContainer>
    );
}
 
export default Explorer;