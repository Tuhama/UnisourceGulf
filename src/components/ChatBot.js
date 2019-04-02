import React, {Component} from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


const otherFontTheme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: 'rgb(49, 181, 172)',
    headerFontColor: '#fff',
    headerFontSize: '16px',
    botBubbleColor: 'rgb(49, 181, 172)',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a'
};

export default class UniChatBot extends Component {

    render() {
        return (
            <div className=''>
                <ThemeProvider theme={otherFontTheme}>
                <ChatBot floating={true} opened={false}
                    steps={[
                        {
                            id: 'hello',
                            message: 'Hello!',
                            end: true,
                        },
                    ]}
                />
                </ThemeProvider>
            </div>)}
}