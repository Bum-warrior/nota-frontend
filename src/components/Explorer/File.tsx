import * as React from 'react';
import styled from 'styled-components'
import { DataType, ICONS } from './IconsProvider';


export interface FileProps {
    active: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement> & Function;
    datatype?: DataType;
    children?: React.ReactNode | React.ReactChild;
}


const File: React.FunctionComponent<FileProps> = (props: FileProps) => {
    return ( 
        <div className='file-line' onClick={props.onClick}>
            <img src={ICONS[props.datatype || 0]} height={'20px'} width={'20px'}></img>
            <div>
                {props.children}    
            </div>
        </div>
    );
}
 
export default File;
