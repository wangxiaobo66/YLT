/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/24
 */

import React from 'react';
import {Link} from 'react-router';
import Title from '../../../component/Title/Title';
import Text from '../../../component/Text/Text';

import arrivalService from '../service';//到货

import {Bottom} from '../../../component/Bottom/Bottom';

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSlide: false,
            data:null
        };
    }
    componentDidMount() {
        arrivalService.detail({
            dataId:this.props.params.id
        }).then(rep => {
            this.setState({
                data:rep.result.data
            })
        })
    }
    toggleSlide() {
        this.setState({
            isSlide: !this.state.isSlide
        });
    }
    render() {
        let data = this.state.data;
        return(
            <div className="module-detail">
                <div className="detail-box">
                    <Title content="基本规格" tip={data!==null?moment(data.dfrq).format('YYYY-MM-DD'):null} />
                    <div className="content">
                        <div className="info">
                            {
                                data!==null?
                                    '车次:'+data.cc+  '  车号:'+data.ch+  '  品名:'+data.pm
                            :null
                            }
                        </div>
                        <Text label="口岸" text={data!==null?data.portName:null} half={true} border={false} />
                        <Text label="车次" text={data!==null?data.cc:null} half={true} border={false} />
                        <Text label="车号" text={data!==null?data.ch:null} half={true} border={false} />
                        <Text label="股道" text={data!==null?data.gdm:null} half={true} border={false} />
                        <Text label="顺位号" text={data!==null?data.swh:null} half={true} border={false} />
                        <Text label="品名" text={data!==null?data.pm:null} half={true} border={false} />
                        <Text label="件数" text={data!==null?data.js:null} half={true} border={false}/>
                        <Text label="重量" text={data!==null?data.zl:null} half={true} border={false} />
                    </div>
                </div>
                <Bottom />
            </div>
        );
    }
}