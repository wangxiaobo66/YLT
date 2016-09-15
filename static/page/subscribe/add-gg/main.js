/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/15
 */

import './style.scss';

import React from 'react';

export default class Guige extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="module-gg">
                <div className="ui-title">输入您要订阅的车皮号，该车皮的木材到货后，会将信息推送给您</div>
                <form className="ui-form">
                    <div className="item">
                        <label>
                            <div className="for">树种</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select">
                                    <option value="">请选择</option>
                                    <option value="1">樟子松</option>
                                    <option value="2">落叶松</option>
                                    <option value="2">白松</option>
                                    <option value="2">鱼鳞松</option>
                                    <option value="2">臭白</option>
                                    <option value="2">白桦</option>
                                    <option value="2">枫桦</option>
                                    <option value="2">红松</option>
                                    <option value="2">椴木</option>
                                    <option value="2">柞木</option>
                                    <option value="2">水曲柳</option>
                                    <option value="2">杨木</option>
                                    <option value="2">辐射松</option>
                                    <option value="2">花旗松</option>
                                    <option value="2">铁杉</option>
                                    <option value="2">加松</option>
                                    <option value="2">雪松</option>
                                    <option value="2">其他</option>
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">货种</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select">
                                    <option value="">请选择</option>
                                    <option value="1">原木</option>
                                    <option value="2">条子</option>
                                    <option value="2">口料</option>
                                    <option value="2">大方</option>
                                    <option value="2">板</option>
                                    <option value="2">防腐材</option>
                                    <option value="2">其他</option>
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">长度</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select">
                                    <option value="">请选择</option>
                                    <option value="1">2米</option>
                                    <option value="2">2.5米</option>
                                    <option value="2">3米</option>
                                    <option value="2">4米</option>
                                    <option value="2">6米</option>
                                    <option value="2">其他</option>
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">口岸</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select">
                                    <option value="">请选择</option>
                                    <option value="1">满洲里</option>
                                    <option value="2">缨芬河</option>
                                    <option value="2">二连浩特</option>
                                    <option value="2">其他</option>
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">订阅时间</div>
                            <div className="input-box">
                                <input className="input input-inline col-xs-5" type="date" placeholder="开始时间" />
                                <span className="col-xs-1">到</span>
                                <input className="input input-inline col-xs-5" type="date" placeholder="结束时间" />
                            </div>
                        </label>
                    </div>
                </form>
                <div className="oper">
                    <a href="javascript:;" className="ui-btn ui-btn-fixed">新增订阅</a>
                </div>
            </div>
        );
    }
}