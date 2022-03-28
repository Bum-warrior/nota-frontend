import { type } from 'os';
import React, { useEffect, useState } from 'react';
import { text } from 'stream/consumers';
import Explorer from '../Explorer/Explorer';
import IFile from '../TextEditor/interfaces/IFile';
import IFolder from '../TextEditor/interfaces/IFolder';
import TextEditor from '../TextEditor/TextEditor';
import axios from 'axios';
import config from '../../config'
import useInterval from '../../hooks/useInterval'

interface NotesPageProps {
    
}

const NotesPage: React.FunctionComponent<NotesPageProps> = (props: NotesPageProps) => {
    
    const [currentFile, setcurrentFile] = useState<IFile>();
    const [fileSystem, setfileSystem] = useState<IFolder>();
    
    const [dataLoaded, setdataLoaded] = useState(false);
    const [firstLoad, setfirstLoad] = useState(true);

    async function saveFileSystemOnServer(fileSystem: IFolder) {
        try{
            let token = localStorage.getItem("token")
            if(token === null){
                throw new Error("")
            }
            let response = await axios.post(config.BACKEND_ADDRES+'/filesystem', fileSystem,{
                headers: {
                    token : token
                }
            });
            console.log("UPDATE^", response.status);
            return "ok";
        }catch (e){
            console.log('SAVE ERROR', e);
            setdataLoaded(false);
            setcurrentFile(undefined);
            return "server not responding";
        }
    }

    async function fetchFileSystemFromServer() {
        try{
            let token = localStorage.getItem("token")
            if(token === null){
                throw new Error("")
            }
            let responseRoot = await axios.get(config.BACKEND_ADDRES+'/filesystem', {
                headers: {
                    token : token
                }
            });
            setfileSystem(responseRoot.data.fileSystem);
            setdataLoaded(true);
            console.log('FETCH STATUS CODE', responseRoot);
            return "ok";
        } catch (e){
            console.log('FETCH ERROR', e);
            return "server not responding";
        }
    }

    useInterval( async () => {
        setfirstLoad(false)
        if (!dataLoaded){
            console.log("DATA LOADED STATUS", dataLoaded)
            let res = await fetchFileSystemFromServer();
            console.log("RESPONSE FETCH", res);
            if(res === "ok"){
                console.log("DATA LOADED STATUS", dataLoaded)
            }
        }
        if((dataLoaded) && (fileSystem)){
            console.log("DATA LOADED STATUS on saving", dataLoaded)
            await saveFileSystemOnServer(fileSystem);
        }
    }, (firstLoad)? 0 : 5000)

    useEffect(() => {
        
    })

    if(fileSystem === undefined){
        return <div className='loading-explorer'>Loading...</div>
    }else{
        return ( 
            <div className='notes-page'>
                {/* pass user`s files to explorer on left side and hook to change displayable file*/}
                    <Explorer currentDisplayableFile={{currentFile : currentFile, openFile : setcurrentFile}} fileSystem={{fs: fileSystem, changeFS: setfileSystem}}   />
                    <TextEditor file={currentFile}/>
            </div> );
    }    
}

export default NotesPage;