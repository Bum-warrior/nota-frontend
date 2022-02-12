import React, {useEffect, useState } from 'react';
import IFile from '../TextEditor/interfaces/IFile';
import RenderFoldersHandler from './RenderFoldersHandler';
import RenderFilesHandler from './RenderFilesHandler';
import IRenderProps from './IRenderProps';
import IFolder from '../TextEditor/interfaces/IFolder';

export interface ExplorerProps extends Pick<IRenderProps, 'fileSystem'>{
    currentFile: {
        currentFile: IFile | undefined;
        openFile: Function;
    }
}


const Explorer: React.FunctionComponent<ExplorerProps> = (props : ExplorerProps) => {
    const [lastMenu, setlastMenu] = useState(Function);
    const [lastClickedFile, setlastClickedFile] = useState('');
    const [isCreating, setisCreating] = useState(false);
    const [name, setname] = useState("");
    const [creatingType, setcreatingType] = useState("file");

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
            currentFile={props.currentFile} 
            fileSystem={props.fileSystem}/>
            <RenderFilesHandler 
            ctxMenu={{lastMenu, setlastMenu,  lastClickedFile, setlastClickedFile}}
            nestLvl={0} 
            root={props.fileSystem.fs} 
            fileSystem={props.fileSystem}
            currentFile={props.currentFile} 
            />
            </section>
            {
                !isCreating &&
                <div className='explorer-footer'>
                    <div onClick={(e) => {
                        setisCreating(true);
                        setcreatingType("file");
                        console.log(isCreating);
                    }}>
                        <span>Создать файл</span>
                    </div>
                    <div onClick={(e) => {
                        setisCreating(true);
                        setcreatingType("folder");
                        console.log(isCreating);
                    }}>
                    <span>Создать папку</span>
                    </div>
                </div>
            }
            {
                isCreating &&
                <div className='explorer-footer'>
                    <form onSubmit={(e: React.SyntheticEvent) => {
                            e.preventDefault();
                            setisCreating(false);
                            switch (creatingType) {
                                case "file":
                                    let newFile : IFile = {
                                        name: name,
                                        text: '',
                                        systemUnitType: 'file',
                                        uniqueId: Math.random().toString(16).slice(2),
                                    }
                                    props.fileSystem.fs.files?.push(newFile);
                                    break;
                                case "folder":
                                    let newFolder : IFolder = {
                                        name: name,
                                        files: [],
                                        systemUnitType: 'folder',
                                        uniqueId: Math.random().toString(16).slice(2),
                                    }
                                    props.fileSystem.fs.folders?.push(newFolder);
                                break
                                default:
                                    break;
                            }
                        }}>
                        <label htmlFor='name'>Название:</label>
                        <input type="text" id='name' value={name} autoComplete={'off'} onChange={(e) => setname(e.target.value)}/>
                    </form>
                </div>
            }
            
        </div>
    );
}
 
export default Explorer;