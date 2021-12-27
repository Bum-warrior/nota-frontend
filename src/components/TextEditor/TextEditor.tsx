import React, { Children, Component, useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import IFile from './interfaces/IFile'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'


interface TextEditorProps {
    file?: IFile;
}

let EditorContainer = styled.div`
background-color: #C4C4C4;
position: absolute;
top:45px;
bottom: 0;
left:18%;
right:0;
`
let Editor = styled(ContentEditable)`
background-color: #FFFFFF;
line-height: 1.5;
text-align: justify;
outline: none;
height:92%;
overflow-y:scroll;
display: flex;
flex-direction: column;
padding: 3% 20%;
`


let ViewLine = styled.div`

`

const TextEditor: React.FunctionComponent<TextEditorProps> = (props: TextEditorProps) => {


    return (
        <EditorContainer>
            <Editor
              html={props.file? props.file.text : ''} // innerHTML of the editable div
              disabled={props.file? false : true}       // use true to disable editing
              onChange={(e) => {onMyChange(e, props)}} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
              >
            </Editor>
        </EditorContainer>
    );
}

function onMyChange(e: ContentEditableEvent, props: TextEditorProps){
    const newValue = e.currentTarget.innerHTML;
    if(props!=undefined && props.file!=undefined){
        props.file.text=newValue;
    }
}

export default TextEditor;