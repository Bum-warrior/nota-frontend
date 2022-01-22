import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataType, ICONS } from './IconsProvider';
import IRenderProps from './IRenderProps';


export interface FileProps extends Omit<IRenderProps, 'root'>{
    active: boolean;
    nestLvl: number;
    onClick?: React.MouseEventHandler<HTMLDivElement> & Function;
    datatype?: DataType;
    children?: React.ReactNode | React.ReactChild;
    
}


const File: React.FunctionComponent<FileProps> = (props: FileProps) => {
    const [isShown, setisShown] = useState(false);
    const [position, setposition] = useState({x: 0, y: 0});

    function showCtxMenu(event : React.MouseEvent<HTMLDivElement>){
        event.preventDefault();
        //let contextMenuCollection = document.getElementsByClassName('ctx-menu-container');
        // for( let i = 0; i < contextMenuCollection.length; i++){
        //     if (!contextMenuCollection[i].classList.contains('hiden')){
        //         contextMenuCollection[i].classList.add('hiden')
        //     }
        // }
        console.log(props.lastMenu)
        if (props.lastMenu !== undefined){
            props.lastMenu()
            props.setlastMenu(() => hideCtxMenu)
        } else {
            props.setlastMenu(() => hideCtxMenu)
        }

        setisShown(false);
        let newPosition = {
            x: event.pageX,
            y: event.pageY,
        }
        //console.log(newPosition);
        setposition(newPosition);
        setisShown(true);
    }

    function hideCtxMenu(){
        setisShown(false)
    }

    function action(){
        console.log('Click works!')
    }

    let contextMenu = undefined;

    

    return ( 
        <div className={`file-line ${props.active}`} 
        style={{paddingLeft : `${(props.nestLvl==undefined)? 0 : props.nestLvl * 20}px`}} 
        onClick={(e) => {
            if(props.onClick !== undefined){
                props.onClick(e);
            }
            
            props.lastMenu()
        }}
        onContextMenu= {(e) => {showCtxMenu(e)}}
        >
            <img src={ICONS[props.datatype || 0]} height={'20px'} width={'20px'}></img>
            <div>
                {props.children}    
            </div>
            
            {
                isShown && 
                <div className='ctx-menu-container'
                style={{top: position.y, left: position.x}}>
                    <div className='ctx-menu-element'><div><span>Создать файл</span></div></div>
                    <div className='ctx-menu-element'><div><span>Создать папку</span></div></div>
                    <div className='ctx-menu-element'><div><span>Удалить файл</span></div></div>
                </div>
            }
            
        </div>
    );
}

export default File;
