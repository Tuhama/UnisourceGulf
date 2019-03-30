import React, {Component} from 'react';
import './Home.less'
import {Link} from "react-router-dom";

export default class GalleryItem extends Component {

    render() {
        return (
            <div className="gallery-item">
                <div className="grid-item-logo">
                    <Link to={this.props.address}>
                        <img src={this.props.img} style={{display: "block", margin: "0 auto"}} alt={this.props.alt}/>
                    </Link>
                </div>
                <br/>
                <div>
                    <p>
                        {this.props.text}
                    </p>
                </div>
            </div>
        );
    }
}