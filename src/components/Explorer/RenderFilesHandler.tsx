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
                    return <File 
                    active={item==props.currentFile.currentFile}
                    ctxMenu={props.ctxMenu}
                    currentFile={props.currentFile}
                    currentItem={item}
                    datatype={DataType.File} 
                    fileSystem={props.fileSystem}
                    key={item.uniqueId}
                    nestLvl={props.nestLvl} 
                    >
                        {item.name}
                    </File>})
            }
        </div>
    );
}
 
export default RenderFilesHandler;