import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import File from './File'
import {FileProps} from './File'

interface FolderProps extends FileProps{
    
}

let FolderContainer = styled.div`
    
`

let SubMenu = styled.div<FolderProps>`
    display: ${(props) => (props.active? 'none' : 'block')};
    min-height: 100px;
    min-width: 100%;
    background-color: purple;
`

const Folder: React.FunctionComponent<FolderProps> = (props: FolderProps) => {
    const [subMenuVisibleState, setsubMenuVisibleState] = useState(false);
    return (
        <FolderContainer>
            <File active={props.active} datatype={props.datatype} onClick={()=>{
                setsubMenuVisibleState(subMenuVisibleState? false : true)
            }}>a1</File>
            <SubMenu active={subMenuVisibleState}/>
        </FolderContainer>      
    );
}
 
export default Folder;