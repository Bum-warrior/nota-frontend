import React, {useState } from 'react';
import IFile from '../TextEditor/interfaces/IFile';
import RenderFoldersHandler from './RenderFoldersHandler';
import RenderFilesHandler from './RenderFilesHandler';
import IRenderProps from './IRenderProps';

export interface ExplorerProps extends Pick<IRenderProps, 'fileSys'>{
    openFile: Function;
    currentFile: IFile | undefined;
}


const Explorer: React.FunctionComponent<ExplorerProps> = (props : ExplorerProps) => {
    const [lastMenu, setlastMenu] = useState(() => Function);

    return ( 
        <div className='explorer-container'>
            <RenderFoldersHandler ctxMenu={{lastMenu, setlastMenu}}
            nestLvl={0} 
            root={props.fileSys.fs}
            currentItem={props.fileSys.fs}
            currentFile={props.currentFile} 
            openFile={props.openFile} 
            fileSys={props.fileSys}/>
            <RenderFilesHandler ctxMenu={{lastMenu, setlastMenu}}
            nestLvl={0} 
            root={props.fileSys.fs} 
            fileSys={props.fileSys}
            currentFile={props.currentFile} 
            openFile={props.openFile}></RenderFilesHandler>
        </div>
    );
}
 
export default Explorer;