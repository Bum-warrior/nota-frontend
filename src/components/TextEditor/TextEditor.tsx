import React, { Children, Component, useState, useRef, useEffect } from 'react'
import IFile from './interfaces/IFile'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import TextDisplay from './TextDisplay';
import axios from 'axios';
import config from '../../config';

interface TextEditorProps {
    file?: IFile;
    updateFileSystem: Function;
}


const TextEditor: React.FunctionComponent<TextEditorProps> = (props: TextEditorProps) => {
    const [text, settext] = useState('');

    function saveChange(e: ContentEditableEvent){
        let newValue : string = e.currentTarget.innerHTML;
        // wrap first string in div
        if(newValue[0] !== '<'){
            console.log("REPLACER WORKED")
            let mathString = '';
            for(let i = 0; i < newValue.length; i++){
                if(newValue[i] !== '<'){
                    mathString = mathString + newValue[i];
                } else {
                    break;
                }
            }
            newValue = newValue.replace(mathString, `<div>${mathString}</div>`)
        }
        
        settext(newValue);
        if(props!=undefined && props.file!=undefined){
            props.file.text=newValue;
        }

        props.updateFileSystem()
    }

    useEffect(() => {
        settext((props.file?.text)? props.file.text : '')
    })

    return (
        <div className='text-editor-container'>
            <div className='text-editor-display-wrapper'>
                <ContentEditable
                    className='text-editor'
                    html={text} // innerHTML of the editable div
                    disabled={props.file? false : true}       // use true to disable editing  /  if file exist disable == false
                    onChange={(e) => {saveChange(e)}} // handle innerHTML change
                    tagName='article' // Use a custom HTML tag (uses a div by default)
                />
            </div>
            <div className='text-editor-display-wrapper'>
                <TextDisplay displayText={text}/>
            </div>
        </div>
    );
}



export default TextEditor;