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
                let words = item.slice(5,-6).split(' ');
                
                if (words[0].startsWith('#')){
                    divList[i] = addClassOnDiv("header1", item);
                }
            }
            text = divList?.join();
        }
        return text
    }

    function addClassOnDiv(className: string, blockDiv: string){
        return blockDiv.replace('<div>', `<div class=${className}>`)
    }

    useEffect(() => {
        let processedText = processText(displayText);
        display.current.innerHTML = processedText;
    })

    return ( <div className='text-editor-display' ref={display}>
        
    </div> );
}
 
export default TextDisplay;