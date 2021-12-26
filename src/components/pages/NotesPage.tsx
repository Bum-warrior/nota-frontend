import React from 'react'
import styled from 'styled-components'
import Explorer from '../Explorer'
import INote from '../TextEditor/interfaces/INote'
import TextEditor from '../TextEditor/TextEditor'

interface NotesPageProps {
    
}

let Container = styled.div`
display: flex;
flex-direction: row;
`

let testNote: INote = {
    chunks: [
        {
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.Меня зовут Олег.Меня зовут Олег.Меня зовут Олег.Меня зовут Олег.Меня зовут Олег.Меня зовут Олег.Меня зовут Олег.Меня зовут Олег.Меня зовут Олег.Меня зовут Олег.Меня зовут Олег.Меня зовут Олег.Меня зовут Олег.Меня зовут Олег.Меня зовут Олег.Меня зовут Олег.Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },{
            text: 'Привет.'
        },
        {
            text: 'Меня зовут Олег.'
        },
    ]
}

const NotesPage: React.FunctionComponent<NotesPageProps> = () => {
    return ( 
    <Container>
        <Explorer>

        </Explorer>

        <TextEditor note={testNote}>
            
        </TextEditor>
    </Container> );
}
 
export default NotesPage;