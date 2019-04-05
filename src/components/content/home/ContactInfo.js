import React, {Component} from 'react';
import './Home.less'

import {Button, Form, Input} from "antd";
import {TUNIS_ADDRESS,KUWAIT_ADDRESS,BOX_ADDRESS,MOBILE1,MOBILE2,EMAIL} from '../../../constants';
//import {GoogleApiWrapper} from "google-maps-react";


export default class ContactInfo extends Component {

    render() {
        const WrappedMessagingForm = Form.create({name: 'messaging-form'})(MessagingForm);

        return (

                <a id="ContactInfo" href="#">
            <div className="contactInfo">
                <WrappedMessagingForm />
                <div>
                    <span className={"font-5"}>Our Address</span>
                </div>
                <div>


                    <div>
                        <br/>
                        <span>
                        {TUNIS_ADDRESS}
                            <br/>
                            {KUWAIT_ADDRESS}
                            <br/>
                            {BOX_ADDRESS}
                            <br/>
                            {MOBILE1}
                            <br/>
                            {MOBILE2}
                            <br/>
                            {EMAIL}
                    </span>
                    </div>
                   {/* <GoogleApiWrapper/>*/}
                </div>
            </div>
                </a>

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
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: {span: 24, offset: 0},
                sm: {span: 20, offset: 4},
            },
        };
        return (
            <div >
                <span className={"font-5"}>Please feel free to contact us anytime</span>
                <br/>
                <br/>
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
                    <Form.Item
                        label={(
                            <span>
                                Subject&nbsp;
                            </span>
                        )}>
                        {getFieldDecorator('subject', {
                            rules: [{message: 'Please input your name!', whitespace: true}],
                        })(
                            <Input/>
                        )}
                    </Form.Item>
                    <Form.Item
                        label={(
                            <span>
                                Message&nbsp;
                            </span>
                        )}>
                        {getFieldDecorator('subject', {
                            rules: [{message: 'Please input your name!', whitespace: true}],
                        })(
                            <Input.TextArea/>)}
                    </Form.Item>
                    <Form.Item {...formItemLayoutWithOutLabel}>
                        <Button type="primary" htmlType="submit" style={{alignSelf:"center"}}>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}