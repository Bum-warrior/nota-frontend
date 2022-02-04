import React, {useState} from 'react'
import IFolder from '../TextEditor/interfaces/IFolder';
import {ExplorerProps} from './Explorer'
import File from './File'
import {DataType} from './IconsProvider'
import IRenderProps from './IRenderProps';

export interface RenderFilesHandlerProps extends Omit<ExplorerProps, 'fileSystem'>, IRenderProps{

}
 
const RenderFilesHandler: React.FunctionComponent<RenderFilesHandlerProps> = (props: RenderFilesHandlerProps) => {

    return ( 
        <div>
            {
                props.root.files?.map((item) => {
                    return <File ctxMenu={props.ctxMenu}
                    key={item.uniqueId}
                    fileSystem={props.fileSystem}
                    currentItem={item}
                    nestLvl={props.nestLvl} 
                    datatype={DataType.File} 
                    active={item==props.currentFile.currentFile}
                    currentFile={props.currentFile}>
                        {item.name}</File>})
            }
            
        </div>
    );
}
 
export default RenderFilesHandler;