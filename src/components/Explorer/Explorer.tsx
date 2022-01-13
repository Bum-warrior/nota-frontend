import React, { useState } from 'react';
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


const Explorer: React.FunctionComponent<ExplorerProps> = (props : ExplorerProps) => {

    return ( 
        <div className='explorer-container'>
            <RenderFoldersHandler root={props.fileSystem.root} 
            currentFile={props.currentFile} openFile={props.openFile}/>
            <RenderFilesHandler root={props.fileSystem.root} 
            currentFile={props.currentFile} openFile={props.openFile}></RenderFilesHandler>
        </div>
    );
}
 
export default Explorer;