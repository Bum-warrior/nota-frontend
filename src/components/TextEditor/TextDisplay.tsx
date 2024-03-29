import React, { useEffect, useRef } from 'react'

interface TextDisplayProps {
    displayText?: string,
}

class Wrapper {
    elements: number[];
    sourceList?: string[];
    className: string;

    constructor(classname: string) {
        this.className = classname;
        this.elements = [];
    }

    addArrayOfElements(array: string[]) {
        this.sourceList = array;
    }

    addListIndex(index: number) {
        this.elements.push(index);
    }

    process() {
        // console.log('DONT PROCESSED LIST',this.sourceList);
        // console.log('ELEMENT LENG', this.elements.length)
        if (this.elements.length % 2 != 0) {
            // console.log("POP")
            this.elements.pop();
        }
        if (this.sourceList) {
            for (let i = 0; i < this.elements.length; i = i + 2) {

                //start block string
                this.sourceList[this.elements[i]] = `<div class='${this.className}'>` + this.sourceList[this.elements[i]]
                //end block string
                this.sourceList[this.elements[i + 1]] = this.sourceList[this.elements[i + 1]] + `</div>`

            }
        }
        if (!this.sourceList) this.sourceList = [''];
        // console.log('PROCESSED LIST',this.sourceList);
        // console.log('ELEMENTS',this.elements);
        return this.sourceList;
    }
}

const TextDisplay: React.FunctionComponent<TextDisplayProps> = (props: TextDisplayProps) => {
    let displayText = (props.displayText) ? props.displayText : '';

    const display = useRef(HTMLDivElement) as unknown as React.MutableRefObject<HTMLDivElement>;


    function processText(startValue: string): string {
        let text = startValue;

        let allDiv = new RegExp(/<div>(.*?)<\/div>/gm);


        let divList = text.match(allDiv);

        // console.log('TEXT:', text)
        // console.log('DIV LIST:', divList)
        if (divList != null) {
            let codeWrapper = new Wrapper('code');
            for (let i = 0; i < divList.length; i++) {
                let item = divList[i];
                let sourceString = item.slice(5, -6);
                //let words = item.slice(5,-6).split(' ');


                //Header md
                if (sourceString.startsWith('#') && sourceString[1] !== '#') {
                    sourceString = sourceString.slice(1);
                    divList[i] = addPropertyOnElement("class=md-header1", wrapStringWithElement(sourceString, 'div'), 'div');
                }

                if (sourceString.startsWith('##') && sourceString[2] !== '#') {
                    sourceString = sourceString.slice(2);
                    divList[i] = addPropertyOnElement("class=md-header2", wrapStringWithElement(sourceString, 'div'), 'div');
                }

                if (sourceString.startsWith('###') && sourceString[3] !== '#') {
                    sourceString = sourceString.slice(3);
                    divList[i] = addPropertyOnElement("class=md-header3", wrapStringWithElement(sourceString, 'div'), 'div');
                }
                //

                //Todo md
                if (sourceString.startsWith('[]') || sourceString.startsWith('[ ]') || sourceString.startsWith('()') || sourceString.startsWith('( )')) {
                    let index = sourceString.indexOf(']') + 1;
                    index = index ? index : sourceString.indexOf(')') + 1;
                    sourceString = sourceString.slice(index);
                    let checkBox = `<input type="checkbox" id="" disabled>`;
                    let label = wrapStringWithElement(sourceString, 'label')
                    let buildedElement = wrapStringWithElement(checkBox + label, 'div');
                    divList[i] = addPropertyOnElement("class=md-todo", buildedElement, 'div');
                }

                if (sourceString.startsWith('[x]') || sourceString.startsWith('[х]') || sourceString.startsWith('(x)') || sourceString.startsWith('(х)')) {
                    let index = sourceString.indexOf(']') + 1;
                    index = index ? index : sourceString.indexOf(')') + 1;
                    sourceString = sourceString.slice(index);
                    let checkBox = `<input type="checkbox" id="" disabled checked>`;
                    let label = wrapStringWithElement(sourceString, 'label')
                    let buildedElement = wrapStringWithElement(checkBox + label, 'div');
                    divList[i] = addPropertyOnElement("class=md-todo", buildedElement, 'div');
                }
                //

                //CODE block md
                if (sourceString.startsWith('```')) {
                    sourceString = ' ';
                    divList[i] = wrapStringWithElement(sourceString, 'div')
                    codeWrapper.addListIndex(i);
                }
                //
            }
            codeWrapper.addArrayOfElements(divList);

            text = codeWrapper.process().join(' ');
        }
        return text
    }

    function addPropertyOnElement(property: string, sourceBlock: string, element: string) {
        return sourceBlock.replace(`${element}`, `${element} ${property}`)
    }

    function wrapStringWithElement(text: string, element: string) {
        return `<${element}>${text}</${element}>`
    }

    useEffect(() => {
        let processedText = processText(displayText);
        display.current.innerHTML = processedText;
    })

    return (<div className='text-editor-display' ref={display}>

    </div>);
}

export default TextDisplay;