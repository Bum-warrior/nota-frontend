import * as React from 'react';
import styled from 'styled-components'
import { DataType, ICONS } from './IconsProvider';


interface DataLineProps {
    active: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement> & Function;
    datatype?: DataType;
    children?: React.ReactNode | React.ReactChild;
}



let Line = styled.div<DataLineProps>`
height: 26px;
border: 0px;
background-color: ${(props) => (props.active ? '#57B6CB' : '#E8E8E8')};
display: flex;
&:hover{
    background-color: ${(props) => (props.active ? '#57B6CB' : '#b1dde7')};
    cursor: pointer;
}
img{
    self-align: flex-start;
    margin-top: auto;
    margin-bottom: auto;
}
div{
    margin-left: 5px;
    margin-top: auto;
    margin-bottom: auto;
}
`

const File: React.FunctionComponent<DataLineProps> = (props: DataLineProps) => {
    return ( 
        <Line active={props.active} onClick={props.onClick}>
            <img src={ICONS[props.datatype || 0]} height={'20px'} width={'20px'}></img>
            <div>
                {props.children}    
            </div>
        </Line>
    );
}
 
export default File;
