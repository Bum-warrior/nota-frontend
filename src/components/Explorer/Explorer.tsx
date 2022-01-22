import React, { useContext, useState } from 'react';
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
    const [test, settest] = useState(false);
    const [lastMenu, setlastMenu] = useState(() => settest);

    return ( 
        <div className='explorer-container'>
            <RenderFoldersHandler lastMenu={lastMenu} setlastMenu={setlastMenu}
            nestLvl={0} root={props.fileSystem.root}
            currentFile={props.currentFile} openFile={props.openFile}/>
            <RenderFilesHandler lastMenu={lastMenu} setlastMenu={setlastMenu}
            nestLvl={0} root={props.fileSystem.root} 
            currentFile={props.currentFile} openFile={props.openFile}></RenderFilesHandler>
        </div>
    );
}
 
export default Explorer;