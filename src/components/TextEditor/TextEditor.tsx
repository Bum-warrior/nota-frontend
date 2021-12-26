import React, { Children, Component, useState } from 'react'
import styled from 'styled-components'
import INote from './interfaces/INote'


interface TextEditorProps {
    note: INote;
}

let EditorContainer = styled.div`
background-color: #C4C4C4;
position: absolute;
top:45px;
bottom: 0;
left:10%;
right:0;
`
let Editor = styled.div`
background-color: #FFFFFF;
line-height: 1.5;
text-align: justify;
outline: none;
height:96%;
overflow-y:scroll;
display: flex;
flex-direction: column;
padding: 2% 50px 0px;
`
let TextAreaCustom = styled.textarea`
border: 0px;
resize: none;
outline: none;
margin-top: 25px;
width: 100%;
min-height: 600px;
height: fit-content;
`

let ViewLine = styled.div`

`

const TextEditor: React.FunctionComponent<TextEditorProps> = (props: TextEditorProps) => {
    const [textareaText, settextareaText] = useState([]);

    return (
        <EditorContainer>
            {/* Editor need clickhandler */}
            <Editor>
                {
                    props.note.chunks.map(item => {
                        return <ViewLine>{item.text}</ViewLine>
                    })
                }
            </Editor>
        </EditorContainer>
    );
}
 
function addElement(text: string): void{

}

function onMyChange(e: React.ChangeEvent<HTMLTextAreaElement>){
    const newValue = e.currentTarget.value;
    console.log(newValue);
    return undefined
}

export default TextEditor;