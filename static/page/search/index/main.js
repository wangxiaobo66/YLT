/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/7
 */

import React from 'react';
import {Link} from 'react-router';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="module-index">
                <p className="search-p">按选定木材规格订阅信息，当有新消息产生后，会将消息推送给您</p>
                <form className="ui-form info-ft">
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
                                    <option value="3">口料</option>
                                    <option value="4">大方</option>
                                    <option value="5">板</option>
                                    <option value="6">防腐材</option>
                                    <option value="7">其他</option>
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
                                    <option value="3">3米</option>
                                    <option value="4">4米</option>
                                    <option value="5">6米</option>
                                    <option value="6">其他</option>
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
                                    <option value="3">二连浩特</option>
                                    <option value="4">其他</option>
                                </select>
                            </div>
                        </label>
                    </div>
                </form>
                <footer className="footer">
                    <Link className="ui-btn ui-btn-fixed" to="result">查找</Link>
                </footer>
            </div>
        );
    }
}