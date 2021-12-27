import { type } from 'os'
import React, { useState } from 'react'
import styled from 'styled-components'
import Explorer from '../Explorer/Explorer'
import IFile from '../TextEditor/interfaces/IFile'
import IFileSystem from '../TextEditor/interfaces/IFileSystem'
import IFolder from '../TextEditor/interfaces/IFolder'
import TextEditor from '../TextEditor/TextEditor'

interface NotesPageProps {
    fs: IFileSystem;
}

let Container = styled.div`
display: flex;
flex-direction: row;
`
let testFileSystem : IFileSystem = {
    root: {
        folders:[
            {
                name: 'Без Олега',
                folders:[
                    {
                        name: "Скрытая папка"
                    }
                ],
                files:[
                    {   
                        name: 'отсутствие',
                        text: 'Тут Олега нет'
                    }
                ]
            }
        ],
        files: [
            {
                name: 'Приветствие',
                text: 'Привет я Олег',
            },
            {
                name: 'Покатствие',
                text: 'Пока я все еще Олег'
            },{
                name: 'Приветствие',
                text: 'Привет я Олег',
            },
            {
                name: 'Покатствие',
                text: 'Пока я все еще Олег'
            },{
                name: 'Приветствие',
                text: 'Привет я Олег',
            },
            {
                name: 'Покатствие',
                text: 'Пока я все еще Олег'
            }
        ]
    }
}

const NotesPage: React.FunctionComponent<NotesPageProps> = (props: NotesPageProps) => {
    
    const [currentFile, setcurrentFile] = useState<IFile>();
    
    function updateCurrentFile(file: IFile){
        setcurrentFile(file)
        console.log(file)
        console.log('CLICKCCCCC')
    }

    return ( 
    <Container>
        {/* pass user`s files to explorer on left side and hook to change displayable file*/}
        <Explorer fileSystem={testFileSystem} openFile={updateCurrentFile} currentFile={currentFile}>

        </Explorer>

        <TextEditor file={currentFile}>

        </TextEditor>
    </Container> );
}
 
export default NotesPage;