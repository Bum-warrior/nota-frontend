import * as React from 'react';
import { useState } from 'react';
import IFolder from '../TextEditor/interfaces/IFolder';
import File from './File'
import {FileProps} from './File'
import RenderFilesHandler, {RenderFilesHandlerProps} from './RenderFilesHandler';
import RenderFoldersHandler, {RenderFoldersHandlerProps} from './RenderFoldersHandler'
import {animated, useTransition} from 'react-spring';

export interface FolderProps extends FileProps, RenderFilesHandlerProps, RenderFoldersHandlerProps{
    currentItem: IFolder;
}

const Folder: React.FunctionComponent<FolderProps> = (props: FolderProps) => {
    const [subMenuVisibleState, setsubMenuVisibleState] = useState(false);
    const transition = useTransition(subMenuVisibleState, {
        from: {
            x: 100,
            opacity: 0,
            height: 0,
            
        },
        enter:{
            x: 0,
            opacity: 1,
            height: 'auto',
            
        },
        leave: {
            x: 100,
            opacity: 0,
            height: 0,
        },
    })
    //if submenu visible it will contain files and folders, else none
    
    return (
        <div className='folder-container'>
            <File 
            active={props.active}
            ctxMenu={props.ctxMenu}
            currentDisplayableFile={props.currentDisplayableFile}
            currentItem={props.currentItem}
            datatype={props.datatype}
            fileSystem={props.fileSystem}
            nestLvl={props.nestLvl}
            onClick={(e) => {
                if(!e.defaultPrevented) {
                    setsubMenuVisibleState(!subMenuVisibleState);
                }
                if(e.defaultPrevented){
                    setsubMenuVisibleState(true);
                }
            }}>{props.root.name}</File>
            {
                transition((style, item) =>
                item ?
                <animated.div className='folder-submenu' style={style}>
                <RenderFoldersHandler 
                fileSystem={props.fileSystem} 
                currentItem={props.currentItem} 
                ctxMenu={props.ctxMenu} 
                nestLvl={props.nestLvl+1} 
                root={props.root} 
                currentDisplayableFile={props.currentDisplayableFile}/>
                <RenderFilesHandler 
                fileSystem={props.fileSystem} 
                ctxMenu={props.ctxMenu}
                nestLvl={props.nestLvl+1} 
                root={props.root} 
                currentDisplayableFile={props.currentDisplayableFile}/>
                </animated.div>: null)
            }
        </div>      
    );
}
 
export default Folder;