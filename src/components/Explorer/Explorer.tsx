import React, { useState } from 'react'
import styled from 'styled-components'
import { DataType } from './IconsProvider';
import File from './File';
import IFileSystem from '../TextEditor/interfaces/IFileSystem';
import IFile from '../TextEditor/interfaces/IFile';
import IFolder from '../TextEditor/interfaces/IFolder';

interface ExplorerProps {
    fileSystem: IFileSystem;
    openFile: Function;
    currentFile: IFile | undefined;
}

let ExlporerContainer = styled.div`
background-color: black;
width: 20%;
min-height: 902px;
background-color: #E8E8E8;
display: flex;
flex-direction: column;
`

const Explorer: React.FunctionComponent<ExplorerProps> = (props : ExplorerProps) => {
    const [activeFile, setactiveFile] = useState(Boolean);
    function renderFolder(folder : IFolder): React.ReactNode{
        return(
            folder.folders?.map((item) => {
            return <File datatype={DataType.Folder} active={false} onClick={() => {
                props.openFile(item)
            }}>
                {item.name}</File>
        })
        )
    }

    function renderFiles(files: IFile[] | undefined): React.ReactNode{
        return(
            files?.map((item) => {
                return <File datatype={DataType.File} active={item==props.currentFile} onClick={() => {
                    props.openFile(item)
                }}>
                    {item.name}</File>
            })
        )
    }

    return ( 
        <ExlporerContainer>
            {/* map all folders and files fot render it and pass hook for displayable file
            

            !!!!!
            TODO: RECURSIVE TREE
            !!!!!


            */}
            {
                renderFolder(props.fileSystem.root)
            }
            {
                renderFiles(props.fileSystem.root.files)
            }
        </ExlporerContainer>
    );
}
 
export default Explorer;