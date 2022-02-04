import * as React from 'react';
import { useEffect, useState } from 'react';
import { System } from 'typescript';
import IFile from '../TextEditor/interfaces/IFile';
import IFileSystemObject from '../TextEditor/interfaces/IFileSystemObject';
import IFolder from '../TextEditor/interfaces/IFolder';
import { ExplorerProps } from './Explorer';
import { DataType, ICONS } from './IconsProvider';
import IRenderProps from './IRenderProps';


export interface FileProps extends Omit<IRenderProps, 'root'>, Pick<ExplorerProps, 'currentFile'>{
    active: boolean;
    nestLvl: number;
    currentItem: IFile | IFolder;
    onClick?: React.MouseEventHandler<HTMLDivElement> & Function;
    datatype?: DataType;
    children?: React.ReactNode | React.ReactChild;
}


const File: React.FunctionComponent<FileProps> = (props: FileProps) => {
    const [isShown, setisShown] = useState(false);
    const [position, setposition] = useState({x: 0, y: 0});

    const [isEditable, setisEditable] = useState(false);
    
    function showCtxMenu(event : React.MouseEvent<HTMLDivElement>){
        event.preventDefault();
        
        //check if another ctxmenu exist and close it by hook
        if (props.ctxMenu.lastMenu !== undefined){
            props.ctxMenu.lastMenu()
            props.ctxMenu.setlastMenu(() => hideCtxMenu)
        } else {
            props.ctxMenu.setlastMenu(() => hideCtxMenu)
        }

        setisShown(false);
        let newPosition = {
            x: event.pageX,
            y: event.pageY,
        }
        if((window.innerHeight-newPosition.y)<100){
            //(heightOfWindows - (heightOfOneLine multyply by they number))
            newPosition.y = (window.innerHeight-(33*4))
        }
        
        setposition(newPosition);
        setisShown(true);
    }

    function hideCtxMenu(){
        setisShown(false)
        props.ctxMenu.setlastMenu(undefined)
    }
    
    function deleteCurrentFile(){
        console.log("=====================")
        console.log(`object: `);
        console.log(props.currentItem);
        console.log(`step 1 compare ${props.currentItem.systemUnitType}`);
        if (props.currentItem.systemUnitType == 'file'){deleteFile(props.currentItem.uniqueId, props.fileSystem.fs)};
        if (props.currentItem.systemUnitType == 'folder'){deleteFolder(props.currentItem.uniqueId, props.fileSystem.fs)};
    }

    // TODO: Dont stop if already delete
    function deleteFile(id: string, folder: IFolder){
        console.log("DELETE FILE CALLED");
        hideCtxMenu();
        folder.files = folder.files?.filter( file => file.uniqueId !== id);
        folder.folders?.map(item => deleteFile(id, item))
    }

    function deleteFolder(id: string, folder: IFolder){
        console.log("DELETE FOLDER CALLED");
        hideCtxMenu();
        folder.folders = folder.folders?.filter(item => item.uniqueId != id)
        folder.folders?.map(item => deleteFolder(id, item))
    }

    useEffect(() =>{
        if(!props.active){
            setisEditable(false)
        }
    })

    function test(){
        console.log(props.fileSystem.fs)
    }

    return ( 
        <div className={`file-line ${props.active}`}
        //padding +20px by one nesting lvl
            style={{paddingLeft : `${(props.nestLvl==undefined)? 0 : props.nestLvl * 20}px`}} 
            
            onClick={(e) => {
                //open file if not a folder
                if (props.currentItem.systemUnitType !== 'folder'){
                    props.currentFile.openFile(props.currentItem)
                }
                // if ctx menu exist then close it
                if(props.onClick !== undefined){
                    props.onClick(e)
                }
            }}

            onContextMenu= {(e) => {showCtxMenu(e)}}
            >
            <img src={ICONS[props.datatype || 0]} height={'26px'} width={'26px'}></img>
            
            {
                !isEditable && 
                <div className='file-line-name'>
                    {props.children}
                </div>
            }
            {
                isEditable && props.active &&
                <textarea rows={1} className='file-line-editName'>

                </textarea>
            }
            
            
            {
                isShown && 
                <div className='ctx-menu-container'
                style={{top: position.y, left: position.x}}>
                    <div className='ctx-menu-element' onClick={() => {test()}}><div><span>Создать файл</span></div></div>
                    <div className='ctx-menu-element' onClick={() => {console.log(props.fileSystem.fs)}}><div><span>Создать папку</span></div></div>
                    <div className='ctx-menu-element' onClick={() => {setisEditable(true)}}><div><span>Переименовать</span></div></div>
                    <div className='ctx-menu-element' onClick={() => {deleteCurrentFile()}}><div><span>Удалить</span></div></div>
                </div>
            }
            
        </div>
    );
}

export default File;
