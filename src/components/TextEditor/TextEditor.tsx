import React, { Children, Component, useState, useRef, useEffect } from 'react'
import IFile from './interfaces/IFile'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'


interface TextEditorProps {
    file?: IFile;
}


const TextEditor: React.FunctionComponent<TextEditorProps> = (props: TextEditorProps) => {


    return (
        <div className='editor-container'>
            <ContentEditable
                className='editor'
                html={props.file? props.file.text : ''} // innerHTML of the editable div
                disabled={props.file? false : true}       // use true to disable editing  /  if file exist disable == false
                onChange={(e) => {saveChange(e, props)}} // handle innerHTML change
                tagName='article' // Use a custom HTML tag (uses a div by default)
            >
            </ContentEditable>
        </div>
    );
}

function saveChange(e: ContentEditableEvent, props: TextEditorProps){
    const newValue = e.currentTarget.innerHTML;
    if(props!=undefined && props.file!=undefined){
        props.file.text=newValue;
    }
}

export default TextEditor;