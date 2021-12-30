import React from 'react'
import IFolder from '../TextEditor/interfaces/IFolder';
import {ExplorerProps} from './Explorer'
import File from './File'
import {DataType} from './IconsProvider'

export interface RenderFilesHandlerProps extends Omit<ExplorerProps, 'fileSystem'>{
    root: IFolder
}
 
const RenderFilesHandler: React.FunctionComponent<RenderFilesHandlerProps> = (props: RenderFilesHandlerProps) => {
    return ( 
        <div>
            {
                props.root.files?.map((item) => {
                    return <File datatype={DataType.File} active={item==props.currentFile} onClick={() => {
                        props.openFile(item)
                    }}>
                        {item.name}</File>})
            }
        </div>
    );
}
 
export default RenderFilesHandler;