import React from 'react'

interface modalProps {
    visible: Boolean;
}
 
const ModalWindow: React.FunctionComponent<modalProps> = (props: modalProps) => {
    return (<div className='modalWindow-bg'>
        <div className='modalWindow-content'>
            
        </div>
    </div>);
}
 
export default ModalWindow;