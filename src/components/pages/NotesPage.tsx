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
        name:'',
        systemUnitType: 'folder',
        uniqueId: Math.random().toString(16).slice(2),
        folders:[
            {
                name: 'Без Олега',
                systemUnitType: 'folder',
                uniqueId: Math.random().toString(16).slice(2),
                folders:[
                    {
                        name: "Вложенная пустая папка папка",
                        systemUnitType: 'folder',
                        uniqueId: Math.random().toString(16).slice(2),
                        files: [],
                        folders: [
                            {
                                name: 'Дважды-вложенная-папка-с-файлом',
                                systemUnitType: 'folder',
                                uniqueId: Math.random().toString(16).slice(2),
                                folders:[],
                                files: [
                                    {
                                        name: 'Все заебись',
                                        text: 'Работает классно',
                                        systemUnitType: 'file',
                                        uniqueId: Math.random().toString(16).slice(2),
                                    }
                                ]
                            }
                        ]
                    },{
                        name: "Вложенная пустая папка папка 2",
                        systemUnitType: 'folder',
                        uniqueId: Math.random().toString(16).slice(2),
                        folders:[],
                        files: [
                            {
                                name: 'Все заебись',
                                text: 'Работает классно',
                                systemUnitType: 'file',
                                uniqueId: Math.random().toString(16).slice(2),
                            }
                        ]
                    }
                ],
                files:[
                    {   
                        name: 'Вложенный файлик',
                        text: 'Тут Олега нет',
                        systemUnitType: 'file',
                        uniqueId: Math.random().toString(16).slice(2),
                    }
                ]
            },{
                name: 'Без Олега',
                systemUnitType: 'folder',
                uniqueId: Math.random().toString(16).slice(2),
                folders:[
                    {
                        name: "Вложенная пустая папка папка",
                        systemUnitType: 'folder',
                        uniqueId: Math.random().toString(16).slice(2),
                        files: [],
                        folders: [
                            {
                                name: 'Дважды-вложенная-папка-с-файлом',
                                systemUnitType: 'folder',
                                uniqueId: Math.random().toString(16).slice(2),
                                folders:[],
                                files: [
                                    {
                                        name: 'Все заебись',
                                        text: 'Работает классно',
                                        systemUnitType: 'file',
                                        uniqueId: Math.random().toString(16).slice(2),
                                    }
                                ]
                            }
                        ]
                    },{
                        name: "Вложенная пустая папка папка 2",
                        systemUnitType: 'folder',
                        uniqueId: Math.random().toString(16).slice(2),
                        folders:[],
                        files: [
                            {
                                name: 'Все заебись',
                                text: 'Работает классно',
                                systemUnitType: 'file',
                                uniqueId: Math.random().toString(16).slice(2),
                            }
                        ]
                    }
                ],
                files:[
                    {   
                        name: 'Вложенный файлик',
                        text: 'Тут Олега нет',
                        systemUnitType: 'file',
                        uniqueId: Math.random().toString(16).slice(2),
                    }
                ]
            },{
                name: 'Без Олега',
                systemUnitType: 'folder',
                uniqueId: Math.random().toString(16).slice(2),
                folders:[
                    {
                        name: "Вложенная пустая папка папка",
                        systemUnitType: 'folder',
                        files: [],
                        uniqueId: Math.random().toString(16).slice(2),
                        folders: [
                            {
                                name: 'Дважды-вложенная-папка-с-файлом',
                                systemUnitType: 'folder',
                                uniqueId: Math.random().toString(16).slice(2),
                                folders:[],
                                files: [
                                    {
                                        name: 'Все заебись',
                                        text: 'Работает классно',
                                        systemUnitType: 'file',
                                        uniqueId: Math.random().toString(16).slice(2),
                                    }
                                ]
                            }
                        ]
                    },{
                        name: "Вложенная пустая папка папка 2",
                        systemUnitType: 'folder',
                        uniqueId: Math.random().toString(16).slice(2),
                        folders:[],
                        files: [
                            {
                                name: 'Все заебись',
                                text: 'Работает классно',
                                systemUnitType: 'file',
                                uniqueId: Math.random().toString(16).slice(2),
                            }
                        ]
                    }
                ],
                files:[
                    {   
                        name: 'Вложенный файлик',
                        text: 'Тут Олега нет',
                        systemUnitType: 'file',
                        uniqueId: Math.random().toString(16).slice(2),
                    }
                ]
            }
        ],
        files: [
            {
                name: 'Я Обычный файлик',
                text: 'TEXT: <div>#Привет я Олег</div><div>##Привет я Олег<br></div><div>###Привет я Олег<br></div><div>КУ я обычный текст</div><div>[] da</div><div>[x] net</div><div>```cmd</div><div>little command</div><div>```</div><div>```code</div><div>function healMe(){</div><div>&nbsp; &nbsp; health+=100;</div><div>}</div><div>```</div>',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },{
                name: 'Я Обычный файлик, НО С ОЧЕНЬ ДЛИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИННЫМ НАЗВАНИЕМ',
                text: 'Привет я Олег            ',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },{
                name: 'Я Обычный файлик',
                text: 'Привет я Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },
            {
                name: 'Я тоже',
                text: 'Пока я все еще Олег',
                systemUnitType: 'file',
                uniqueId: Math.random().toString(16).slice(2),
            },
        ]
        
    }
}

const NotesPage: React.FunctionComponent<NotesPageProps> = (props: NotesPageProps) => {
    
    const [currentFile, setcurrentFile] = useState<IFile>();
    const [fileSystem, setfileSystem] = useState(testFileSystem.root);

    return ( 
    <div className='notes-page'>
        {/* pass user`s files to explorer on left side and hook to change displayable file*/}
            <Explorer currentDisplayableFile={{currentFile : currentFile, openFile : setcurrentFile}} fileSystem={{fs: fileSystem, changeFS: setfileSystem}}   />
            <TextEditor file={currentFile}/>
    </div> );
}
 
export default NotesPage;