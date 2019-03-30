import React, {Component} from 'react';
import './Home.less'
import {Link} from "react-router-dom";
import {Form, Input} from "antd";


export default class ContactInfo extends Component {

    render() {
        const WrappedMessagingForm = Form.create({ name: 'messaging-form' })(MessagingForm);

        return (
            <div className="contactInfo">
                <WrappedMessagingForm/>
            </div>
        );
    }
}

class MessagingForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
         const {getFieldDecorator} = this.props.form;
        return (
            <div className="contactInfo">
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item
                        label="E-mail"
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: 'The input is not valid E-mail!',
                            }, {
                                required: true, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input/>
                        )}
                    </Form.Item>
                    <Form.Item
                        label={(
                            <span>
                                Name&nbsp;
                            </span>
                        )}>
                        {getFieldDecorator('name', {
                            rules: [{required: true, message: 'Please input your name!', whitespace: true}],
                        })(
                            <Input/>
                        )}
                    </Form.Item>
                </Form>
            </div>
        );
    }
}