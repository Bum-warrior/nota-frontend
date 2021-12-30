import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import File from './File'
import {FileProps} from './File'
import RenderFilesHandler, {RenderFilesHandlerProps} from './RenderFilesHandler';
import RenderFoldersHandler, {RenderFoldersHandlerProps} from './RenderFoldersHandler'

interface FolderProps extends FileProps, RenderFilesHandlerProps, RenderFoldersHandlerProps{
    
}

let FolderContainer = styled.div`
    
`

let SubMenu = styled.div<FolderProps>`
    display: ${(props) => (props.active? 'none' : 'block')};
    min-height: 26px;
    height: fit-content;
    min-width: 100%;
    margin-left: 20px;
`

const Folder: React.FunctionComponent<FolderProps> = (props: FolderProps) => {
    const [subMenuVisibleState, setsubMenuVisibleState] = useState(false);
    return (
        <FolderContainer>
            <File active={props.active} datatype={props.datatype} onClick={()=>{
                setsubMenuVisibleState(subMenuVisibleState? false : true)
            }}>{props.root.name}</File>
            <SubMenu root={props.root} openFile={props.openFile} currentFile={props.currentFile} active={subMenuVisibleState}>
                <RenderFoldersHandler root={props.root} openFile={props.openFile} currentFile={props.currentFile}></RenderFoldersHandler>
                <RenderFilesHandler root={props.root} openFile={props.openFile} currentFile={props.currentFile}></RenderFilesHandler>
            </SubMenu>
        </FolderContainer>      
    );
}
 
export default Folder;