import React, { useState } from 'react'
import styled from 'styled-components'
import { DataType } from './IconsProvider';
import File from './File';
import Folder from './Folder';
import IFileSystem from '../TextEditor/interfaces/IFileSystem';
import IFile from '../TextEditor/interfaces/IFile';
import IFolder from '../TextEditor/interfaces/IFolder';
import RenderFolderHandler from './RenderFolderHandler';

export interface ExplorerProps {
    fileSystem: IFileSystem;
    openFile: Function;
    currentFile: IFile | undefined;
}

let ExlporerContainer = styled.div`
width: 18%;
max-height: 95vh;
background-color: #E8E8E8;
display: flex;
flex-direction: column;
overflow-x: scroll;
overflow-y: scroll;
`

const Explorer: React.FunctionComponent<ExplorerProps> = (props : ExplorerProps) => {

    return ( 
        <ExlporerContainer>
            <RenderFolderHandler root={props.fileSystem.root} 
            currentFile={props.currentFile} openFile={props.openFile}/>
        </ExlporerContainer>
    );
}
 
export default Explorer;