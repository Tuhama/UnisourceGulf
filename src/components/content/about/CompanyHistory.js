import React, {Component} from 'react';
import './AboutTabPages.less';
import BG from '../../../images/backgrounds/companyHistory.webp';

export default class CompanyHistory extends Component {
    render() {
        return (
            <div className='temp-page-container'>
                <img src={BG} style={{width:"100%"}}/>
                <div  className="half-cover">
                    <div style={{marginLeft:"50px"}}>
                        <br/>
                        <div>
                            <h2 className="main-title">Company History</h2>
                        </div>
                        <div>
                            <p className="minor-text">
                                Comming soon...
                            </p>
                        </div>
                        <div  className="read-more-b">
                            READ MORE
                        </div>
                    </div>
                </div>
            </div>)}
}