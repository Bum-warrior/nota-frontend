import { type } from 'os';
import React, { useEffect, useState } from 'react';
import { text } from 'stream/consumers';
import Explorer from '../Explorer/Explorer';
import IFile from '../TextEditor/interfaces/IFile';
import IFileSystem from '../TextEditor/interfaces/IFileSystem';
import IFolder from '../TextEditor/interfaces/IFolder';
import TextEditor from '../TextEditor/TextEditor';
import axios from 'axios';
import config from '../../config'

interface NotesPageProps {
    
}



let empty : IFileSystem = {
    root: {
        name:'',
        systemUnitType: 'folder',
        uniqueId: Math.random().toString(16).slice(2),
        folders: [],
        files: [],
    }
}

const NotesPage: React.FunctionComponent<NotesPageProps> = (props: NotesPageProps) => {
    
    const [currentFile, setcurrentFile] = useState<IFile>();
    const [fileSystem, setfileSystem] = useState(empty.root);
    const [dataLoaded, setdataLoaded] = useState(false);

    async function saveFileSystemOnServer() {
        let response = await axios.post(config.BACKEND_ADDRES+'filesystem', );
        console.log(response);
    }

    async function fetchFileSystemFromServer() {
        try{
            let responseRoot = await axios.get(config.BACKEND_ADDRES+'filesystem');
            setfileSystem(responseRoot.data.root);
            console.log('DATA FROM SERVER', responseRoot.data)
            setdataLoaded(true)
        } catch (e){
            console.log(e)
        }
    }

    useEffect(() => {
        console.log('serverAction')
        if(!dataLoaded){
            fetchFileSystemFromServer()
        }
    })

    if(!dataLoaded){
        return <div>Loading</div>
    }

    return ( 
    <div className='notes-page'>
        {/* pass user`s files to explorer on left side and hook to change displayable file*/}
            <Explorer currentDisplayableFile={{currentFile : currentFile, openFile : setcurrentFile}} fileSystem={{fs: fileSystem, changeFS: setfileSystem}}   />
            <TextEditor file={currentFile} updateFileSystem={saveFileSystemOnServer}/>
    </div> );
}
 
export default NotesPage;