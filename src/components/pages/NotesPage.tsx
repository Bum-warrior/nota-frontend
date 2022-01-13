import { type } from 'os'
import React, { useState } from 'react'
import { text } from 'stream/consumers'
import Explorer from '../Explorer/Explorer'
import IFile from '../TextEditor/interfaces/IFile'
import IFileSystem from '../TextEditor/interfaces/IFileSystem'
import IFolder from '../TextEditor/interfaces/IFolder'
import TextEditor from '../TextEditor/TextEditor'

interface NotesPageProps {
    
}


let testFileSystem : IFileSystem = {
    root: {
        folders:[
            {
                name: 'Без Олега',
                folders:[
                    {
                        name: "Вложенная пустая папка папка",
                        folders: [
                            {
                                name: 'Дважды-вложенная-папка-с-файлом-ыыыаааыыыаааыыыаааыыыааа',
                                files: [
                                    {
                                        name: 'Все заебись',
                                        text: 'Работает классно'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                files:[
                    {   
                        name: 'Вложенный файлик',
                        text: 'Тут Олега нет'
                    }
                ]
            }
        ],
        files: [
            {
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег'
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег'
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег'
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег'
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег'
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег'
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег'
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег'
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег'
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег'
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег'
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег'
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег'
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег'
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег'
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег'
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег'
            },
        ]
    }
}

const NotesPage: React.FunctionComponent<NotesPageProps> = (props: NotesPageProps) => {
    
    const [currentFile, setcurrentFile] = useState<IFile>();
    
    function updateCurrentFile(file: IFile){
        setcurrentFile(file)
    }

    return ( 
    <div className='notes-page'>
        {/* pass user`s files to explorer on left side and hook to change displayable file*/}
        <Explorer fileSystem={testFileSystem} openFile={updateCurrentFile} currentFile={currentFile}/>
        <TextEditor file={currentFile}/>
    </div> );
}
 
export default NotesPage;