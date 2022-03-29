import React, { Children, Component, useState, useRef, useEffect } from 'react'
import IFile from './interfaces/IFile'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import * as style from 'react-syntax-highlighter/dist/esm/styles/prism';



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
    
    function handleKey(e : React.KeyboardEvent<HTMLTextAreaElement>){
        let content = e.currentTarget.value;
        let caret   = e.currentTarget.selectionStart;
        console.log(e.key)
        if(e.key === 'Tab'){
            document.execCommand('insertText', false, "    ");
            e.preventDefault();
        }
    }

    useEffect(() => {
        settext((props.file?.text)? props.file.text : '')
    })

    return (
        <div className='text-editor-container'>
            <div className='text-editor-half-screen'>
                <div className='text-editor-field-wrapper'>
                    <textarea 
                    className='text-editor-field'
                    spellCheck={false}
                    onKeyDown={handleKey}
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
                        <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({node, inline, className, children, ...props}) {
                              const match = /language-(\w+)/.exec(className || '')
                              return !inline && match ? (
                                <SyntaxHighlighter
                                  children={String(children).replace(/\n$/, '')}
                                  style={style.coy}
                                  language={match[1]}
                                  PreTag="div"
                                  {...props}
                                />
                              ) : (
                                <code className={className} {...props}>
                                  {children}
                                </code>
                              )
                            }                            
                          }}
                        >
                            {text}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default TextEditor;