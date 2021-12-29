import React from 'react'
import IFolder from '../TextEditor/interfaces/IFolder';
import { DataType } from './IconsProvider';
import Folder from './Folder';
import File from './File'
import { ExplorerProps } from './Explorer';

interface RenderFolderHandlerProps extends Omit<ExplorerProps, 'fileSystem'>{
    root: IFolder;
}
 
const RenderFolderHandler: React.FunctionComponent<RenderFolderHandlerProps> = (props : RenderFolderHandlerProps) => {
    return ( 
        <div>
            {
                props.root.folders?.map((item) => {
                    return <Folder datatype={DataType.Folder} active={false} onClick={() => {
                        props.openFile(item)
                    }}>
                        {item.name}</Folder>})
            }
            {
                props.root.files?.map((item) => {
                    return <File datatype={DataType.File} active={item==props.currentFile} onClick={() => {
                        props.openFile(item)
                    }}>
                        {item.name}</File>
                })
            }
        </div>
    );
}
 
export default RenderFolderHandler;