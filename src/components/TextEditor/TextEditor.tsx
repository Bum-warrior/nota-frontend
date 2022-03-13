import React, { Children, Component, useState, useRef, useEffect } from 'react'
import IFile from './interfaces/IFile'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import TextDisplay from './TextDisplay';
import axios from 'axios';
import config from '../../config';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'



interface TextEditorProps {
    file?: IFile;
    
}


const TextEditor: React.FunctionComponent<TextEditorProps> = (props: TextEditorProps) => {
    const [text, settext] = useState('');

    function saveChange(text: string){
        
        if(props!=undefined && props.file!=undefined){
            props.file.text=text;
        }
        settext(text);
        
    }

    useEffect(() => {
        settext((props.file?.text)? props.file.text : '')
    })

    return (
        <div className='text-editor-container'>
            <div className='text-editor-half-screen'>
                {/* <ContentEditable
                    className='text-editor'
                    html={text} // innerHTML of the editable div
                    disabled={props.file? false : true}       // use true to disable editing  /  if file exist disable == false
                    onChange={(e) => {saveChange(e)}} // handle innerHTML change
                    tagName='article' // Use a custom HTML tag (uses a div by default)
                /> */}
                <div className='text-editor-field-wrapper'>
                    <textarea 
                    className='text-editor-field'
                    value={text}
                    onChange={(e) => {
                        saveChange(e.target.value)
                    }}
                    />
                </div>
            </div>
            <div className='text-editor-half-screen'>
                <div className='text-editor-display-wrapper'>
                    <div className='text-editor-display'>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default TextEditor;