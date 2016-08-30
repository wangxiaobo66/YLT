const util = require('util');

/**
 * Created by jin on 16/4/14.
 */
//list-frame组件
export const LIST_FRAME = 'LIST_FRAME';
export function listFrame(listFrame) {
    return {
        type: LIST_FRAME,
        listFrame
    }
}
export const LIST_FRAME_ACTIVE = 'LIST_FRAME_ACTIVE';
export function listFrameActive(active) {
    return {
        type: LIST_FRAME_ACTIVE,
        active
    }
}
export const LIST_FRAME_DIV = 'LIST_FRAME_DIV';
export function listFrameDiv(listDiv) {
    return {
        type: LIST_FRAME_DIV,
        listDiv
    }
}
export const LIST_FRAME_DIV_REMOVE = 'LIST_FRAME_DIV_REMOVE';
export function listFrameDivRemove(index) {
    return {
        type: LIST_FRAME_DIV_REMOVE,
        index
    }
}
export const LIST_FRAME_DIV_PAGE = 'LIST_FRAME_DIV_PAGE';
export function listFrameDivRage(page) {
    return {
        type: LIST_FRAME_DIV_PAGE,
        page
    }
}
export const LIST_FRAME_LI_REMOVE = 'LIST_FRAME_LI_REMOVE';
export function listFrameLiRemove(indexLi) {
    return {
        type: LIST_FRAME_LI_REMOVE,
        indexLi
    }
}
export const LIST_REAME_LI_ADD = 'LIST_REAME_LI_ADD';
export function listFrameLiAdd(ObjLi) {
    return {
        type: LIST_REAME_LI_ADD,
        ObjLi
    }
}
//user-message组件
//用户信息
export const USER_MESSAGE = 'USER_MESSAGE';
export function userMessage(messageList) {
    return {
        type: USER_MESSAGE,
        messageList
    }
}
export const MODIFY_RETURN = 'MODIFY_RETURN';
export function modifyReturn(result) {
    return {
        type: MODIFY_RETURN,
        result
    }
}
export const INPUT_CODE = 'INPUT_CODE';
export function inputCode(code) {
    return {
        type: INPUT_CODE,
        code
    }
}
export const TRY_CODE = 'TRY_CODE';
export function tryCode(newSrc) {
    return {
        type: TRY_CODE,
        newSrc
    }
}
//query-box组件checkbox
export const QUERY_BOX_CHECKBOX = 'QUERY_BOX_CHECKBOX';
export function queryBoxCheckbox(active) {
    return {
        type: QUERY_BOX_CHECKBOX,
        active
    }
}

//left-nav组件选中
export const LEFT_NAV_FIRST = 'LEFT_NAV_FIRST';
export const LEFT_NAV_NEXT = 'LEFT_NAV_NEXT';
export const LEFT_NAV_ROLE = 'LEFT_NAV_ROLE';
export function leftNavFirst(selectFirst) {
    return {
        type: LEFT_NAV_FIRST,
        selectFirst
    }
}
export function leftNavNext(selectNext) {
    return {
        type: LEFT_NAV_NEXT,
        selectNext
    }
}

export function leftNavRole(role) {
    return {
        type: LEFT_NAV_ROLE,
        role
    }
}


export function windowKeyDown(data) {
    return {
        type: WINDOW_KEY_DOWN,
        data
    }
}

function fetchSecretSauce() {
    /*    return $.post("eventLog/findEventLogsByParam.do", {
     draw: 1,
     columns: [
     {
     data: 'eventStr',
     searchable: true,
     orderable: false,
     name: '',
     search: {
     value: '',
     regex: false
     }
     },
     {
     data: 'username',
     searchable: true,
     orderable: false,
     name: '',
     search: {
     value: '',
     regex: false
     }
     },
     {
     data: 'description',
     name: '',
     searchable: true,
     orderable: false,
     search: {
     value: '',
     regex: false
     }
     },
     {
     data: 'createTime',
     name: '',
     searchable: true,
     orderable: false,
     search: {
     value: '',
     regex: false
     }
     }
     ],
     start: 0,
     length: 10,
     search: {
     value: '',
     regex: false
     },
     "extra_search": JSON.stringify({"username":"","startTime":"","endTime":""})

     }, function(json){
     console.log(JSON.parse(json));
     })*/
    return fetch('eventLog/findEventLogsByParam.do', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Content-Type': 'application/json; charset=UTF-8',
        },
        credentials: 'include',
        body: JSON.stringify({
            draw: 1,
            columns: [
                {
                    data: 'eventStr',
                    searchable: true,
                    orderable: false,
                    name: '',
                    search: {
                        value: '',
                        regex: false
                    }
                },
                {
                    data: 'username',
                    searchable: true,
                    orderable: false,
                    name: '',
                    search: {
                        value: '',
                        regex: false
                    }
                },
                {
                    data: 'description',
                    name: '',
                    searchable: true,
                    orderable: false,
                    search: {
                        value: '',
                        regex: false
                    }
                },
                {
                    data: 'createTime',
                    name: '',
                    searchable: true,
                    orderable: false,
                    search: {
                        value: '',
                        regex: false
                    }
                }
            ],
            start: 0,
            length: 10,
            search: {
                value: '',
                regex: false
            },
            "extra_search": JSON.stringify({"username": "", "startTime": "", "endTime": ""})
        })
    });
}

export function updateInfo(data) {
    return function (dispatch) {
        return fetchSecretSauce().then(
            sauce => dispatch(setPage({
                page: parseInt(JSON.parse(sauce).recordsTotal / 100)
            })),
            error => dispatch()
        )
    }
}
//请求用户信息
function getSelfInfo() {
    return fetch('/scoreweb/user/getSelfInfo', {credentials: 'include'})
}

export function userInfoList() {
    return function (dispatch) {
        return getSelfInfo().then(
            function (res) {
                res.json().then(function (json) {
                    if (json.result === "0") {
                        dispatch(userMessage(json.data))
                    }
                })
            }
        )
    }
}
//修改用户信息
function postSelfInfo(data) {
    return fetch('/scoreweb/user/updateSelfInfo', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        credentials: 'include',
        body: JSON.stringify(data)
    })
}
export function modifySelfInfo(data) {
    let info = data;
    return function (dispatch) {
        return postSelfInfo(info).then(
            function (res) {
                res.json().then(function (json) {

                })
            }
        )
    }
}
//验证原始密码
function postOldPassWord(data) {
    return fetch('/scoreweb/user/checkPassword', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        credentials: 'include',
        body: JSON.stringify(data)
    })
}
export function verifyOldPassWord(data) {
    let info = data;
    return function (dispatch) {
        return postOldPassWord(info).then(
            function (res) {
                res.json().then(function (json) {
                    dispatch(modifyReturn(json.result))
                })
            }
        )
    }
}
//验证码
function postVerify(data) {
    return fetch('/scoreweb/user/checkValidateCode', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        credentials: 'include',
        body: JSON.stringify(data)
    })
}
export function verifyCode(data) {
    let info = data;
    return function (dispatch) {
        return postVerify(info).then(
            function (res) {
                res.json().then(function (json) {
                    if (json.result !== "0") {
                        let newSrc = "/scoreweb/user/createCaptcha?" + new Date().getTime();
                        dispatch(tryCode(newSrc));
                    } else {
                        dispatch(inputCode(info))
                    }
                })
            }
        )
    }
}
//修改密码
function postPassWord(data) {
    return fetch('/scoreweb/user/updatePassword', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        credentials: 'include',
        body: JSON.stringify(data)
    })
}
export function modifyPassWord(data) {
    let info = data;
    return function (dispatch) {
        return postPassWord(info).then(
            function (res) {
                res.json().then(function (json) {
                    console.log(json)
                })
            }
        )
    }
}

/**
 * create by pingyuan 2016/06/14
 */
//boxyAction
export const BOXY_SHOW = 'BOXY_SHOW';
export function boxyShow(showMsg) {
    return {
        type: BOXY_SHOW,
        showMsg
    }
}
export const BOXY_HIDE = 'BOXY_HIDE';
export function boxyHide() {
    return {
        type: BOXY_HIDE
    }
}

//maskAction
export const MASK_SHOW = 'MASK_SHOW';
export function maskShow(showMsg) {
    return {
        type: MASK_SHOW,
        showMsg
    }
}
export const MASK_HIDE = 'MASK_HIDE';
export function maskHide() {
    return {
        type: MASK_HIDE
    }
}

// infoFormSubmit
export const INFOFORM_SUBMIT = 'INFOFORM_SUBMIT';
export function infoFormSubmit(submitList) {
    return {
        type: INFOFORM_SUBMIT,
        submitList
    }
}

// btnGroupAction
export const BTN_GROUP_SURE = 'BTN_GROUP_SURE';
export function btnGroupSure(btnMsg) {
    return {
        type: BTN_GROUP_SURE,
        btnMsg
    }
}
export const BTN_GROUP_MODIFY = 'BTN_GROUP_MODIFY';
export function btnGroupModify(btnMsg) {
    return {
        type: BTN_GROUP_MODIFY,
        btnMsg
    }
}
export const BTN_GROUP_DELETE = 'BTN_GROUP_DELETE';
export function btnGroupDelete(btnMsg) {
    return {
        type: BTN_GROUP_DELETE,
        btnMsg
    }
}

// tabsAction
export const TABS_SWITCH = 'TABS_SWITCH';
export function tabsSwitch(tabsData, i) {
    return {
        type: TABS_SWITCH,
        index: i,
        tabsData
    }
}
/* pingyuan end */