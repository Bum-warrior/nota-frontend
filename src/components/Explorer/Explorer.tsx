import React, {useEffect, useState } from 'react';
import IFile from '../TextEditor/interfaces/IFile';
import RenderFoldersHandler from './RenderFoldersHandler';
import RenderFilesHandler from './RenderFilesHandler';
import IRenderProps from './IRenderProps';
import IFolder from '../TextEditor/interfaces/IFolder';

export interface ExplorerProps extends Pick<IRenderProps, 'fileSystem'>{
    currentDisplayableFile: {
        currentFile: IFile | undefined;
        openFile: Function;
    }
}


const Explorer: React.FunctionComponent<ExplorerProps> = (props : ExplorerProps) => {
    const [lastMenu, setlastMenu] = useState(Function);
    const [lastClickedFile, setlastClickedFile] = useState('');
    const [updateFlag, setupdateFlag] = useState(false);

    useEffect(() => {
        console.log("FILE TREE UPDATED")
    })

    return ( 
        <div className='explorer-container'
        onClick={(event : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if(lastMenu !== undefined){
                lastMenu();
            }
        }}
        >
            <section className='explorer-provider'>
            <RenderFoldersHandler 
            ctxMenu={{lastMenu, setlastMenu, lastClickedFile, setlastClickedFile}}
            nestLvl={0} 
            root={props.fileSystem.fs}
            currentItem={props.fileSystem.fs}
            currentDisplayableFile={props.currentDisplayableFile} 
            fileSystem={props.fileSystem}/>
            <RenderFilesHandler 
            ctxMenu={{lastMenu, setlastMenu,  lastClickedFile, setlastClickedFile}}
            nestLvl={0} 
            root={props.fileSystem.fs} 
            fileSystem={props.fileSystem}
            currentDisplayableFile={props.currentDisplayableFile} 
            />
            </section>
            <div className='explorer-footer'>
                <div onClick={(e) => {
                    console.log("CALL")
                    e.preventDefault()  
                    //ANY but it can be only folder cause of checking type upper
                    //i made it cause it can be file or folder, but here only folder and idk how do this in right way
                    let currentFolder: any = props.fileSystem.fs;
                    console.log("CURRENT FOLDER",currentFolder)
                    let newFile: IFile = {
                        name: 'Новый файл',
                        text: '',
                        systemUnitType: 'file',
                        uniqueId: Math.random().toString(16).slice(2),
                        initialEdit: true,
                    }
                    currentFolder.files.push(newFile);
                    setupdateFlag(!updateFlag);
                    }}>
                    <span>Создать файл</span>
                </div>
                <div onClick={(e) => {
                    e.preventDefault();
                    //ANY but it can be only folder cause of checking type upper
                    //i made it cause it can be file or folder, but here only folder and idk how do this in right way
                    let currentFolder: any = props.fileSystem.fs;
                    let newFolder: IFolder = {
                        name: 'Новая папка',
                        files:[],
                        folders:[],
                        systemUnitType: 'folder',
                        uniqueId: Math.random().toString(16).slice(2),
                        initialEdit: true,
                    }
                    currentFolder.folders.push(newFolder);
                    setupdateFlag(!updateFlag);
                    }}>
                <span>Создать папку</span>
                </div>
            </div>       
        </div>
    );
}
 
export default Explorer;