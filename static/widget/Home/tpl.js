/**
 * @file
 * @auth jinguangguo
 * @date 2016/8/14
 */

import React from 'react';
import {Pagination, Glyphicon, Input, Navbar, Button, ButtonInput} from 'react-bootstrap';

export default function() {

    return (
        <article className="w-home">
            this is a widget home.
            {
                this.state.list.length > 0 ?
                    <ul>
                        {
                            this.state.list.map(function (item, index) {
                                return (
                                    <div className="item" key={index}>
                                        {item.name} && {item.age}
                                    </div>
                                )
                            })
                        }
                    </ul>
                    :
                    null
            }
            <hr/>
            <Button bsStyle="default" onClick={this.alert}>alert</Button>
            <Button bsStyle="success" onClick={this.confirm}>confirm</Button>
        </article>
    );

}