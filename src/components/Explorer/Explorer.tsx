import React, { useState } from 'react'
import styled from 'styled-components'
import { DataType } from './IconsProvider';
import File from './File';
import Folder from './Folder';
import IFileSystem from '../TextEditor/interfaces/IFileSystem';
import IFile from '../TextEditor/interfaces/IFile';
import IFolder from '../TextEditor/interfaces/IFolder';
import RenderFoldersHandler from './RenderFoldersHandler';
import RenderFilesHandler from './RenderFilesHandler';

export interface ExplorerProps {
    fileSystem: IFileSystem;
    openFile: Function;
    currentFile: IFile | undefined;
}

let ExlporerContainer = styled.div`
width: 18%;
height: 95vh;
background-color: #E8E8E8;
display: flex;
flex-direction: column;
overflow-x: scroll;
overflow-y: scroll;
`

const Explorer: React.FunctionComponent<ExplorerProps> = (props : ExplorerProps) => {

    return ( 
        <ExlporerContainer>
            <RenderFoldersHandler root={props.fileSystem.root} 
            currentFile={props.currentFile} openFile={props.openFile}/>
            <RenderFilesHandler root={props.fileSystem.root} 
            currentFile={props.currentFile} openFile={props.openFile}></RenderFilesHandler>
        </ExlporerContainer>
    );
}
 
export default Explorer;