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
                props.root.folders?.map((item, index) => {
                    return <Folder 
                    active={false} 
                    ctxMenu={props.ctxMenu}
                    currentDisplayableFile={props.currentDisplayableFile}
                    currentItem={item}
                    fileSystem={props.fileSystem}
                    key={index}
                    nestLvl={props.nestLvl}
                    root={item}
                    // onClick={() => {
                    // }}
                    >
                        {item.name}
                    </Folder>})
            }
        </div>
    );
}
 
export default RenderFoldersHandler;