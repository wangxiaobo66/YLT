/**
 * Created by jin on 16/4/14.
 */
const _ = require('lodash/lang');
import { combineReducers } from 'redux'
const { RESET_PASSWORD_SRC , RESET_VERIFY_CODE } = require('reset-password-actions');
function resetPassword(state={src: '/scoreManagement/user/createCaptcha', code : true},action){
    switch (action.type) {
        case RESET_PASSWORD_SRC:
            let src = {src:'/scoreManagement/user/createCaptcha?'+new Date().getTime()};
            return Object.assign({},state,src)
        case RESET_VERIFY_CODE:
            let code = {code:action.code};
            return Object.assign({},state,code)
        default:
            return state;
    }
}
//login
const { REFRESH_SRC , VERIFY_CODE } = require('login-actions');
function login(state = {src: '/scoreManagement/user/createCaptcha' , code : true}, action) {
    switch (action.type) {
        case REFRESH_SRC:
            let src = {src:'/scoreManagement/user/createCaptcha?'+new Date().getTime()};
            return Object.assign({},state,src)
        case VERIFY_CODE:
            let code = {code:action.code};
            return Object.assign({},state,code)
        default:
            return state;
    }
}
//create-company组件
const { COMPANY_MESSAGE } = require('create-company-actions');

function showCompany(state = {companyList: {}}, action) {
    switch (action.type) {
        case COMPANY_MESSAGE:
            let list = {companyList: action.list};
            return Object.assign({}, state, list);
        default:
            return state;
    }
}
//message组件
const { USER_MESSAGE , INPUT_CODE , MODIFY_RETURN , TRY_CODE } = require('actions');
function userMessage(state = {listMessage: {}, code: '', resultInfo: '', src: '/scoreManagement/user/createCaptcha'}, action) {
    switch (action.type) {
        case USER_MESSAGE:
            let messageList = {listMessage: action.messageList};
            return Object.assign({}, state, messageList);
        case INPUT_CODE:
            let code = {code: action.code};
            return Object.assign({}, state, code);
        case MODIFY_RETURN:
            let result = {resultInfo: action.result};
            return Object.assign({}, state, result);
        case TRY_CODE:
            let newSrc = {src: action.newSrc};
            return Object.assign({}, state, newSrc);
        default:
            return state;
    }
}
//business-list组件
/*const {} = require('business-list-actions');
function businessList(state={},action){
    switch (action.type){

    }
}*/
//list-frame组件
const { LIST_FRAME , LIST_FRAME_ACTIVE , LIST_FRAME_DIV , LIST_FRAME_DIV_REMOVE , LIST_FRAME_DIV_PAGE , LIST_FRAME_LI_REMOVE , LIST_REAME_LI_ADD } = require('actions');
function listFrame(state = {listFrame: [], divList: [], pageLen: 2, page: 1, active: false}, action) {
    switch (action.type) {
        case LIST_FRAME:
            let listFrame = {listFrame: action.listFrame};
            return Object.assign({}, state, listFrame);
        case LIST_FRAME_ACTIVE:
            let Active = {active: action.active};
            return Object.assign({}, state, Active);
        case LIST_FRAME_DIV:
            let listDiv = action.listDiv;
            let list = _.cloneDeep(state.divList);
            list.push(...listDiv);
            list = _.uniqBy(list, 'name');
            let lfdList = {divList: list};
            return Object.assign({}, state, lfdList);
        case LIST_FRAME_DIV_REMOVE:
            let index = action.index;
            let copyList = _.cloneDeep(state.divList);
            copyList.splice(index, 1);
            let newCopyList = {divList: copyList};
            return Object.assign({}, state, newCopyList);
        case LIST_FRAME_DIV_PAGE:
            let page = action.page;
            let newPage = {page: page};
            return Object.assign({}, state, newPage);
        case LIST_FRAME_LI_REMOVE:
            let indexLi = action.indexLi;
            let liList = _.cloneDeep(state.listFrame);
            liList.splice(indexLi, 1);
            let newLiList = {listFrame: liList};
            return Object.assign({}, state, newLiList);
        case LIST_REAME_LI_ADD:
            let objLi = action.ObjLi;
            let listLi = _.cloneDeep(state.listFrame);
            listLi.push(...objLi);
            listLi = _.sortBy(listLi, 'id');
            let newListLi = {listFrame: listLi};
            return Object.assign({}, state, newListLi);
        default:
            return state;
    }
}

//query-box组件checkbox
const { QUERY_BOX_CHECKBOX } = require('actions');
function queryBoxCheckbox(state = {active: null}, action) {
    switch (action.type) {
        case QUERY_BOX_CHECKBOX:
            return action.active;
        default:
            return state;
    }
}

//left-nv组件
const { LEFT_NAV_FIRST , LEFT_NAV_NEXT , LEFT_NAV_ROLE } = require('actions');
function leftNavActive(state = {select: [0, 0], role: 0}, action) {
    switch (action.type) {
        case LEFT_NAV_FIRST:
            let stated = {select: action.selectFirst};
            return Object.assign({}, state, stated);
        case LEFT_NAV_NEXT:
            let statedc = {select: action.selectNext};
            return Object.assign({}, state, statedc);
        case LEFT_NAV_ROLE:
            let roled = {role: action.role};
            return Object.assign({}, state, roled);
        default:
            return state;
    }
}

/**
 * create by pingyuan 2016/06/14
 */
//boxy组件
const {BOXY_SHOW, BOXY_HIDE} = require('actions');
function boxyAction(state = {
    show: false,
    type: '',
    tipTime: '',
    content: '',
    boxyReturnConfirm: null,
    boxyReturnCancel: null
}, action) {
    switch (action.type) {
        case BOXY_SHOW:
            return Object.assign({}, state, action.showMsg);
        case BOXY_HIDE:
            return Object.assign({}, state, {
                show: false,
                type: '',
                tipTime: '',
                content: '',
                boxyReturnConfirm: null,
                boxyReturnCancel: null
            });
        default:
            return state;
    }
}

//mask组件
const {MASK_SHOW, MASK_HIDE} = require('actions');
function maskAction(state = {}, action) {
    switch (action.type) {
        case MASK_SHOW:
            return Object.assign({}, state, action.showMsg);
        case MASK_HIDE:
            return Object.assign({}, state, {
                show: false,
                transparent: false
            });
        default:
            return state;
    }
}

//info-form组件
const {INFOFORM_SUBMIT} = require('actions');
function infoFormAction(state = {
    submitList: {},
    isPassed: []
}, action) {
    switch (action.type) {
        case INFOFORM_SUBMIT:
            console.log(action.submitList)
            return Object.assign({}, state, action.submitList);
        default:
            return state;
    }
}

//btn-group组件
const {BTN_GROUP_SURE, BTN_GROUP_MODIFY, BTN_GROUP_DELETE} = require('actions');
function btnGroupAction(state = {}, action) {
    switch (action.type) {
        case BTN_GROUP_SURE:
            console.log(action.btnMsg, "确定Action");
            return state;
        case BTN_GROUP_MODIFY:
            console.log(action.btnMsg, "修改Action");
            return state;
        case BTN_GROUP_DELETE:
            console.log(action.btnMsg, "删除Action");
            return state;
        default:
            return state;
    }
}

//table组件
const {WRITE_SELF_MODULES, WRITE_COMBINE_MODULES} = require('mod-manage-actions');
const {WRITE_EVENT_LOG_MANAGEMENT} = require('user-logs-actions');
const {TABLE_LIST, BUSINESS_LIST, WRITE_EVENT_LOG} = require('table-actions');
function writeTableData(state = [], action) {
    let list = {};
    let allPage = 0;
    let page = 0;
    let data = {};
    switch(action.type) {
        case TABLE_LIST:
            return action.tableData;
        case BUSINESS_LIST:
            return action.tableData;
        case WRITE_SELF_MODULES:
            list = action.data.list;
            allPage = action.data.allPage;
            page = action.data.page;
            data = {
                columns: [
                    {name: 'id', desc: '序号', width: 16},
                    {name: 'publishTime', desc: '上线时间', width: 16},
                    {name: 'moduleName', desc: '模型名称', width: 16},
                    {name: 'type', desc: '适用企业', width: 16},
                    {name: 'ks', desc: 'KS值', width: 16},
                    {name: 'badGraph', desc: '坏账率曲线图', width: 20}
                ],
                list,
                allPage,
                page
            };
            return data;
        case WRITE_COMBINE_MODULES:
            list = action.data.list;
            allPage = action.data.allPage;
            page = action.data.page;
            data = {
                columns: [
                    {name: 'id', desc: '序号2', width: 16},
                    {name: 'publishTime', desc: '上线时间2', width: 16},
                    {name: 'moduleName', desc: '模型名称2', width: 16},
                    {name: 'type', desc: '适用企业2', width: 16},
                    {name: 'ks', desc: 'KS值2', width: 16},
                    {name: 'badGraph', desc: '坏账率曲线图2', width: 20}
                ],
                list,
                allPage,
                page
            };
            return data;
        case WRITE_EVENT_LOG_MANAGEMENT:
            list = action.data.list;
            allPage = action.data.allPage;
            page = action.data.page;
            data = {
                columns: [
                    {name: 'id', desc: '序号', width: 15},
                    {name: 'eventStr', desc: '日志事件', width: 18},
                    {name: 'username', desc: '用户', width: 15},
                    {name: 'description', desc: '日志描述', width: 30},
                    {name: 'createTime', desc: '操作时间'}
                ],
                list,
                allPage,
                page
            };
            return data;
        case WRITE_EVENT_LOG:
            list = action.data.list;
            allPage = action.data.allPage;
            page = action.data.page;
            data = {
                columns: [
                    {name: 'id', desc: '序号', width: 15},
                    {name: 'eventStr', desc: '日志事件', width: 18},
                    {name: 'username', desc: '用户', width: 15},
                    {name: 'description', desc: '日志描述', width: 30},
                    {name: 'createTime', desc: '操作时间'}
                ],
                list,
                allPage,
                page
            };
            return data;
        default:
            return state;
    }
}

//tabs组件
const {TABS_SWITCH} = require('actions');
function tabsSwitch(state = {}, action) {
    switch (action.type) {
        case TABS_SWITCH:
            let {tabsData, index} = action;
            for (let i = 0, len = tabsData.length; i < len; i++) {
                delete tabsData[i].selected;
            }
            action.tabsData[index].selected = true;
            return Object.assign({}, state, action.tabsData);
        default:
            return state;
    }
}

//图表组件
const {WRITE_BAR_DATA} = require('query-statistics-actions');
const {WRITE_BARGROUP_DATA} = require('statistic-details-actions');
const {WRITE_PROGRESS_BAR} = require('early-warning-actions');
function writeChartData(state = {}, action) {
    let {data, axisLabel} = action;
    let xAxis = [];
    let yAxis = [];
    switch(action.type) {
        case WRITE_PROGRESS_BAR:
            return action.data;
        case WRITE_BAR_DATA:
            for (let i = 0, len = data.length; i < len; i++) {
                xAxis.push(data[i][axisLabel.x]);
                yAxis.push(data[i][axisLabel.y]);
            }
            let barData = {xAxis, yAxis}
            return barData;
        case WRITE_BARGROUP_DATA:
            let bargroupData = action.data;
            return bargroupData.list;
        default:
            return state;
    }
}
/* pingyuan end*/

export const scorewebStore = combineReducers({
    boxyAction,
    maskAction,
    leftNavActive,
    listFrame,
    userMessage,
    infoFormAction,
    btnGroupAction,
    writeTableData,
    showCompany,
    tabsSwitch,
    resetPassword,
    login,
    writeChartData
});