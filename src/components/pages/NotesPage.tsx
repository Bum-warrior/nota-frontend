import { type } from 'os';
import React, { useEffect, useState } from 'react';
import { text } from 'stream/consumers';
import Explorer from '../Explorer/Explorer';
import IFile from '../TextEditor/interfaces/IFile';
import IFolder from '../TextEditor/interfaces/IFolder';
import TextEditor from '../TextEditor/TextEditor';
import axios from 'axios';
import config from '../../config'

interface NotesPageProps {
    
}



let empty : IFolder = {    
    name:'',
    systemUnitType: 'folder',
    uniqueId: Math.random().toString(16).slice(2),
    folders: [],
    files: [],
}

const NotesPage: React.FunctionComponent<NotesPageProps> = (props: NotesPageProps) => {
    
    const [currentFile, setcurrentFile] = useState<IFile>();
    const [fileSystem, setfileSystem] = useState(empty);
    const [dataLoaded, setdataLoaded] = useState(false);

    async function saveFileSystemOnServer() {
        try{
            let response = await axios.post(config.BACKEND_ADDRES+'filesystem', fileSystem);
            console.log(response);
        }catch (e){
            console.log(e);
        }
        
    }

    async function fetchFileSystemFromServer() {
        try{
            let responseRoot = await axios.get(config.BACKEND_ADDRES+'filesystem');
            setfileSystem(responseRoot.data);
            console.log('DATA FROM SERVER', responseRoot.data)
            setdataLoaded(true)
        } catch (e){
            setTimeout(fetchFileSystemFromServer, 3000)
        }
    }

    useEffect(() => {
        
        if(!dataLoaded){
            fetchFileSystemFromServer();
        } else {
            saveFileSystemOnServer();
        }
    })

    if(!dataLoaded){
        return <div className='loading-explorer'>Loading...</div>
    }

    return ( 
    <div className='notes-page'>
        {/* pass user`s files to explorer on left side and hook to change displayable file*/}
            <Explorer currentDisplayableFile={{currentFile : currentFile, openFile : setcurrentFile}} fileSystem={{fs: fileSystem, changeFS: setfileSystem}}   />
            <TextEditor file={currentFile} updateFileSystem={saveFileSystemOnServer}/>
    </div> );
}
 
export default NotesPage;