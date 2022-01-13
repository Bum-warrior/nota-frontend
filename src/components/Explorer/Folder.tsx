import * as React from 'react';
import { useState } from 'react';
import File from './File'
import {FileProps} from './File'
import RenderFilesHandler, {RenderFilesHandlerProps} from './RenderFilesHandler';
import RenderFoldersHandler, {RenderFoldersHandlerProps} from './RenderFoldersHandler'

interface FolderProps extends FileProps, RenderFilesHandlerProps, RenderFoldersHandlerProps{
    
}

const Folder: React.FunctionComponent<FolderProps> = (props: FolderProps) => {
    const [subMenuVisibleState, setsubMenuVisibleState] = useState(false);
    return (
        <div>
            <File active={props.active} datatype={props.datatype} onClick={()=>{
                setsubMenuVisibleState(subMenuVisibleState? false : true)
            }}>{props.root.name}</File>
            {/* root={props.root} openFile={props.openFile} currentFile={props.currentFile} active={subMenuVisibleState} */}
            <div className='folder-submenu'>
                <RenderFoldersHandler root={props.root} openFile={props.openFile} currentFile={props.currentFile}></RenderFoldersHandler>
                <RenderFilesHandler root={props.root} openFile={props.openFile} currentFile={props.currentFile}></RenderFilesHandler>
            </div>
        </div>      
    );
}
 
export default Folder;