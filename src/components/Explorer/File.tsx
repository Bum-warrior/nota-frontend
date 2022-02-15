import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { System } from 'typescript';
import IFile from '../TextEditor/interfaces/IFile';
import IFileSystemObject from '../TextEditor/interfaces/IFileSystemObject';
import IFolder from '../TextEditor/interfaces/IFolder';
import { ExplorerProps } from './Explorer';
import { DataType, ICONS } from './IconsProvider';
import IRenderProps from './IRenderProps';


export interface FileProps extends Omit<IRenderProps, 'root'>, Pick<ExplorerProps, 'currentDisplayableFile'>{
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
    const [name, setname] = useState(props.children?.toString());

    const editNameRef = useRef(HTMLInputElement) as unknown as React.MutableRefObject<HTMLInputElement>;
    
    function showCtxMenu(event : React.MouseEvent<HTMLDivElement>){
        event.preventDefault();
        
        //check if another ctxmenu exist and close it by hook
        if (props.ctxMenu.lastMenu !== undefined){
            props.ctxMenu.lastMenu()
            //passes a function that internally calls the function to remove the last menu
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
        document.addEventListener("click", hideCtxMenu);
    }

    function hideCtxMenu(){
        setisShown(false);
        props.ctxMenu.setlastMenu(undefined);
        document.removeEventListener("click", hideCtxMenu);
    }

    function startEditing(){
        setisEditable(true);    
    }

    function stopEditing(){
        setisEditable(false);
    }

    function deleteCurrentItem(){
        if (props.currentItem.systemUnitType == 'file'){deleteFile(props.currentItem.uniqueId, props.fileSystem.fs)};
        if (props.currentItem.systemUnitType == 'folder'){deleteFolder(props.currentItem.uniqueId, props.fileSystem.fs)};
    }

    // TODO: Dont stop if already delete. findElementById good examle how to do recursive function
    function deleteFile(id: string, folder: IFolder){
        hideCtxMenu();
        folder.files = folder.files?.filter( file => file.uniqueId !== id);
        folder.folders?.map(item => deleteFile(id, item))
    }

    function deleteFolder(id: string, folder: IFolder){
        hideCtxMenu();
        folder.folders = folder.folders?.filter(item => item.uniqueId != id)
        folder.folders.map(item => deleteFolder(id, item))
    }

    useEffect(() =>{
        if(props.ctxMenu.lastClickedFile !== props.currentItem.uniqueId){
            stopEditing();
        }
        if (props.currentItem.initialEdit === true){
            props.ctxMenu.setlastClickedFile(props.currentItem.uniqueId);
            startEditing();
            delete props.currentItem.initialEdit;
        }
        if(isEditable){
            editNameRef.current.focus();
        }
        console.log('RERENDER COMPONENT');
    })

    //change css class depend on file state. This line responsible for background color
    const bgStyle = (isEditable)? `explorer-editable-file` : (props.active)? `explorer-active-file` : ''

    return ( 
        <div className={`file-line ${bgStyle}`}
            //padding +20px by one nesting lvl
            style={{paddingLeft : `${(props.nestLvl==undefined)? 0 : props.nestLvl * 28}px`}} 
            onClick={(e) => {
                //open file if not a folder
                props.ctxMenu.setlastClickedFile(props.currentItem.uniqueId)
                if (props.currentItem.systemUnitType !== 'folder'){
                    props.currentDisplayableFile.openFile(props.currentItem)
                }
                // if ctx menu exist then close it
                if(props.onClick !== undefined){
                    props.onClick(e)
                }
            }}
            onContextMenu= {e => showCtxMenu(e)}>

            <img src={ICONS[props.datatype || 0]} height={'26px'} width={'26px'}></img>
            

            {/* render name or form for editing name */}
            {
                !isEditable && 
                <div className='file-line-name'>
                    {`${name}`}
                </div>
            }
            {
                isEditable &&
                <form onSubmit={e => {
                    e.preventDefault();
                    stopEditing();
                    }}>
                    <input ref={editNameRef} className='explorer-rename-input' type={'text'} value={name} onChange={e => {
                        setname(e.target.value);
                        if (props.currentItem.name) props.currentItem.name = e.target.value;
                        }}></input>
                </form>
            }
            

            {/* ctxMenu for folder */}
            {
                isShown && props.currentItem.systemUnitType === 'folder' &&
                <div className='ctx-menu-container'
                    style={{top: position.y, left: position.x}}>
                    <div className='ctx-menu-element' onClick={(e) => {
                        e.preventDefault()  
                        //ANY but it can be only folder cause of checking type upper
                        //i made it cause it can be file or folder, but here only folder and idk how do this in right way
                        let currentFolder: any = props.currentItem;
                        let newFile: IFile = {
                            name: 'Новый файл',
                            text: '',
                            systemUnitType: 'file',
                            uniqueId: Math.random().toString(16).slice(2),
                            initialEdit: true,
                        }
                        currentFolder.files.push(newFile);
                        }}>
                        <div><span>Создать файл</span></div></div>
                    <div className='ctx-menu-element' onClick={(e) => {
                        e.preventDefault();
                        //ANY but it can be only folder cause of checking type upper
                        //i made it cause it can be file or folder, but here only folder and idk how do this in right way
                        let currentFolder: any = props.currentItem;
                        console.log(currentFolder)
                        let newFolder: IFolder = {
                            name: 'Новая папка',
                            files:[],
                            folders:[],
                            systemUnitType: 'folder',
                            uniqueId: Math.random().toString(16).slice(2),
                            initialEdit: true,
                        }
                        currentFolder.folders.push(newFolder);
                        }}>
                        <div><span>Создать папку</span></div></div>
                    <div className='ctx-menu-element' onClick={(e) => {
                        e.preventDefault();
                        startEditing();
                        }}>
                    <div><span>Переименовать</span></div></div>
                    <div className='ctx-menu-element' onClick={e => deleteCurrentItem()}><div><span>Удалить</span></div></div>
                </div>
            }
            {/* ctxMenu for file */}
            {
                isShown && props.currentItem.systemUnitType === 'file' &&
                <div className='ctx-menu-container'
                    style={{top: position.y, left: position.x}}>
                    <div className='ctx-menu-element' onClick={e => startEditing()}><div><span>Переименовать</span></div></div>
                    <div className='ctx-menu-element' onClick={e => deleteCurrentItem()}><div><span>Удалить</span></div></div>
                </div>
            }
        </div>
    );
}

export default File;
