/**
 * @file
 * @auth jinguangguo
 * @date 2016/8/14
 */

export default {

    list(param = {}) {

        return $.ajax({
            url: '/api/home/list.json',
            method: 'GET',
            data: param,
            dataType: 'JSON'
        });

    }

}