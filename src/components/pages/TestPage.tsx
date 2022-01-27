import * as React from 'react';
import { useState } from 'react';


interface TestPageProps {
    
}
 
const TestPage: React.FunctionComponent<TestPageProps> = (props: TestPageProps) => {
    
    return ( 
        <div className='container-test'>

            <div className='ctx-menu-container'style={{top: 100, left: 100}}>
                    <div className='ctx-menu-element' ><div><span>Создать файл</span></div></div>
                    <div className='ctx-menu-element' ><div><span>Создать папку</span></div></div>
                    <div className='ctx-menu-element' ><div><span>Свойства</span></div></div>
                    <div className='ctx-menu-element' ><div><span>Создать папку</span></div></div>
                    <div className='ctx-menu-element' ><div><span>Свойства</span></div></div>
                    <div className='ctx-menu-element' ><div><span>Удалить файл</span></div></div>
                </div>
        
        </div>
    );
}
 
export default TestPage;