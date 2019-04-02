import React, {Component} from 'react';
import ChatBot from 'react-simple-chatbot';


export default class UniChatBot extends Component {
    render() {
        return (
            <div className=''>
                <ChatBot
                    steps={[
                        {
                            id: 'hello-world',
                            message: 'Hello World!',
                            end: true,
                        },
                    ]}
                />
            </div>)}
}