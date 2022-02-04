import React, {useState } from 'react';
import IFile from '../TextEditor/interfaces/IFile';
import RenderFoldersHandler from './RenderFoldersHandler';
import RenderFilesHandler from './RenderFilesHandler';
import IRenderProps from './IRenderProps';

export interface ExplorerProps extends Pick<IRenderProps, 'fileSystem'>{
    currentFile: {
        currentFile: IFile | undefined;
        openFile: Function;
    }
}


const Explorer: React.FunctionComponent<ExplorerProps> = (props : ExplorerProps) => {
    const [lastMenu, setlastMenu] = useState(() => Function);

    return ( 
        <div className='explorer-container'
        onClick={(event : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if(lastMenu !== undefined){
                lastMenu();
            }
        }}
        >
            <RenderFoldersHandler 
            ctxMenu={{lastMenu, setlastMenu}}
            nestLvl={0} 
            root={props.fileSystem.fs}
            currentItem={props.fileSystem.fs}
            currentFile={props.currentFile} 
            fileSystem={props.fileSystem}/>
            <RenderFilesHandler 
            ctxMenu={{lastMenu, setlastMenu}}
            nestLvl={0} 
            root={props.fileSystem.fs} 
            fileSystem={props.fileSystem}
            currentFile={props.currentFile} 
            />
        </div>
    );
}
 
export default Explorer;