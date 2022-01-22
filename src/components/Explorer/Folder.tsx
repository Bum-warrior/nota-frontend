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

    //if submenu visible it will contain files and folders, else none
    let subMenu = subMenuVisibleState ? 
        <div className='folder-submenu'>
            <RenderFoldersHandler lastMenu={props.lastMenu} setlastMenu={props.setlastMenu} nestLvl={props.nestLvl+1} root={props.root} openFile={props.openFile} currentFile={props.currentFile}></RenderFoldersHandler>
            <RenderFilesHandler lastMenu={props.lastMenu} setlastMenu={props.setlastMenu} nestLvl={props.nestLvl+1} root={props.root} openFile={props.openFile} currentFile={props.currentFile}></RenderFilesHandler>
        </div> : null
    
    return (
        <div>
            <File lastMenu={props.lastMenu} setlastMenu={props.setlastMenu} nestLvl={props.nestLvl} active={props.active} datatype={props.datatype} onClick={()=>{
                setsubMenuVisibleState(subMenuVisibleState? false : true)
            }}>{props.root.name}</File>
            {/* root={props.root} openFile={props.openFile} currentFile={props.currentFile} active={subMenuVisibleState} */}
            {subMenu}
        </div>      
    );
}
 
export default Folder;