/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/23
 */

/*
 * 1树种;2物种;3货种;4长度;5口岸;
 * 6产地;7当前位置;8产地;9材料;10服务类型;
 * 11反馈类型;12店铺类型
 */
 
export const LIMIT_COUNT = 10;

export const LOGIN_USER_KEY = 'YLT_USER_ID';

// 树种
export const TYPE_TREE = 1;
export const TYPE_WUZHONG = 2;
export const TYPE_GOODS = 3;
export const TYPE_LENGTH = 4;
export const TYPE_PORT = 5;

export const TYPE_STORE = 12;
export const TYPE_REPORT = 13;

// 举报类型
export const REPORT_TYPE_ASK_BUY = 1;   // 求购单
export const REPORT_TYPE_UNSOLD = 2;    // 未售单

// 0到货列表;1关注店铺;2未售市场;
export const CARE_TYPE_ARRIVAL = 0;
export const CARE_TYPE_STORE = 1;
export const CARE_TYPE_UNSOLD = 2;
export const CARE_TYPE_ASKBUY = 3;

export const STORE_LOGO_DEFAULT = 'http://img.gsxservice.com/23387438_shlxlqpx.jpg';
