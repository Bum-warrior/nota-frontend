import React from 'react'
import IFolder from '../TextEditor/interfaces/IFolder';
import { DataType } from './IconsProvider';
import Folder, { FolderProps } from './Folder';
import File from './File'
import { ExplorerProps } from './Explorer';
import IRenderProps from './IRenderProps';
import IFileSystemObject from '../TextEditor/interfaces/IFileSystemObject';

export interface RenderFoldersHandlerProps extends Omit<ExplorerProps, 'fileSystem'>, IRenderProps, Pick<FolderProps, 'currentItem'>{
    
}
 
const RenderFoldersHandler: React.FunctionComponent<RenderFoldersHandlerProps> = (props : RenderFoldersHandlerProps) => {
    return ( 
        <div>
            {
                props.root.folders?.map((item) => {
                    return <Folder 
                    currentItem={item} 
                    ctxMenu={props.ctxMenu}
                    fileSys={props.fileSys}
                    nestLvl={props.nestLvl}
                    datatype={DataType.Folder} 
                    active={false} 
                    openFile={props.openFile} 
                    currentFile={props.currentFile}
                    root={item}
                    // onClick={() => {
                    // }}
                    >
                        {item.name}</Folder>})
            }
        </div>
    );
}
 
export default RenderFoldersHandler;