import React, { useEffect, useRef } from 'react'

interface TextDisplayProps {
    displayText?: string,
}
 
const TextDisplay: React.FunctionComponent<TextDisplayProps> = (props : TextDisplayProps) => {
    let displayText = (props.displayText)? props.displayText : '';

    const display = useRef(HTMLDivElement) as unknown as React.MutableRefObject<HTMLDivElement>;


    function processText(startValue: string) : string{
        let text =  startValue;

        let allDiv = new RegExp(/<div>(.*?)<\/div>/gm);
        

        let divList = text.match(allDiv);

        console.log('TEXT:', text)
        console.log('DIV LIST:', divList)
        if (divList != null){
            for(let i = 0; i < divList.length; i++){
                let item = divList[i];
                let sourceString = item.slice(5,-6);
                //let words = item.slice(5,-6).split(' ');
                
                
                //Header md
                if (sourceString.startsWith('#') && sourceString[1] !== '#'){
                    sourceString = sourceString.slice(1);
                    divList[i] = addPropertyOnElement("class=md-header1", wrapStringWithElement(sourceString, 'div'), 'div');
                }

                if (sourceString.startsWith('##') && sourceString[2] !== '#'){
                    sourceString = sourceString.slice(2);
                    divList[i] = addPropertyOnElement("class=md-header2", wrapStringWithElement(sourceString, 'div'), 'div');
                }

                if (sourceString.startsWith('###') && sourceString[3] !== '#'){
                    sourceString = sourceString.slice(3);
                    divList[i] = addPropertyOnElement("class=md-header3", wrapStringWithElement(sourceString, 'div'), 'div');
                }
                //

                //Todo md
                if (sourceString.startsWith('[]') || sourceString.startsWith('[ ]')){
                    sourceString = sourceString.slice(sourceString.indexOf(']')+1);
                    let checkBox = `<input type="checkbox" id="" disabled>`;
                    let label = wrapStringWithElement(sourceString, 'label')
                    let buildedElement = wrapStringWithElement(checkBox + label, 'div'); 
                    divList[i] = addPropertyOnElement("class=md-todo", buildedElement , 'div');
                }

                if (sourceString.startsWith('[x]') || sourceString.startsWith('[х]')){
                    sourceString = sourceString.slice(sourceString.indexOf(']')+1);
                    let checkBox = `<input type="checkbox" id="" disabled checked>`;
                    let label = wrapStringWithElement(sourceString, 'label')
                    let buildedElement = wrapStringWithElement(checkBox + label, 'div'); 
                    divList[i] = addPropertyOnElement("class=md-todo", buildedElement , 'div');
                }
                //
            }
            text = divList?.join("");
        }
        return text
    }

    function addPropertyOnElement(property: string, sourceBlock: string, element: string){
        return sourceBlock.replace(`${element}`, `${element} ${property}`)
    }

    //add class on existing class list
    function addClassOnElement(){
        
    }

    function wrapStringWithElement(text: string, element: string){
        return `<${element}>${text}</${element}>`
    }

    useEffect(() => {
        let processedText = processText(displayText);
        display.current.innerHTML = processedText;
    })

    return ( <div className='text-editor-display' ref={display}>
        
    </div> );
}
 
export default TextDisplay;