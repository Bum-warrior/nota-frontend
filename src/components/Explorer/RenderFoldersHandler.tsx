import React from 'react'
import IFolder from '../TextEditor/interfaces/IFolder';
import { DataType } from './IconsProvider';
import Folder from './Folder';
import File from './File'
import { ExplorerProps } from './Explorer';

export interface RenderFoldersHandlerProps extends Omit<ExplorerProps, 'fileSystem'>{
    root: IFolder;
}
 
const RenderFoldersHandler: React.FunctionComponent<RenderFoldersHandlerProps> = (props : RenderFoldersHandlerProps) => {
    return ( 
        <div>
            {
                props.root.folders?.map((item) => {
                    return <Folder datatype={DataType.Folder} active={false} 
                    openFile={props.openFile} currentFile={props.currentFile}
                    root={item}
                    onClick={() => {
                        
                    }}>
                        {item.name}</Folder>})
            }
        </div>
    );
}
 
export default RenderFoldersHandler;