import * as React from 'react';
import { useState } from 'react';
import IFolder from '../TextEditor/interfaces/IFolder';
import File from './File'
import {FileProps} from './File'
import RenderFilesHandler, {RenderFilesHandlerProps} from './RenderFilesHandler';
import RenderFoldersHandler, {RenderFoldersHandlerProps} from './RenderFoldersHandler'

export interface FolderProps extends FileProps, RenderFilesHandlerProps, RenderFoldersHandlerProps{
    currentItem: IFolder;
}

const Folder: React.FunctionComponent<FolderProps> = (props: FolderProps) => {
    const [subMenuVisibleState, setsubMenuVisibleState] = useState(false);
    
    //if submenu visible it will contain files and folders, else none
    
    return (
        <div>
            <File 
            active={props.active}
            ctxMenu={props.ctxMenu}
            currentFile={props.currentFile}
            currentItem={props.currentItem}
            datatype={props.datatype}
            fileSystem={props.fileSystem}
            nestLvl={props.nestLvl}
            onClick={(e) => {
                if(!e.defaultPrevented) {
                    setsubMenuVisibleState(!subMenuVisibleState)
                }
            }}>{props.root.name}</File>
            {
                subMenuVisibleState ? 
                <div className='folder-submenu'>
                <RenderFoldersHandler 
                fileSystem={props.fileSystem} 
                currentItem={props.currentItem} 
                ctxMenu={props.ctxMenu} 
                nestLvl={props.nestLvl+1} 
                root={props.root} 
                currentFile={props.currentFile}/>
                <RenderFilesHandler 
                fileSystem={props.fileSystem} 
                ctxMenu={props.ctxMenu}
                nestLvl={props.nestLvl+1} 
                root={props.root} 
                currentFile={props.currentFile}/>
                </div> : null
            }
        </div>      
    );
}
 
export default Folder;