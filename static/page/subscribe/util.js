/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/22
 */
 
export default {
    /**
     * 检查开始和结束时间
     * @param key
     * @param value
     */
    checkTime(key, value) {
        let startTime;
        let endTime;
        if (key === 'startTime') {
            startTime = new Date(value).getTime();
            endTime = this.state.form.endTime;
            if (endTime && startTime > endTime) {
                window.toast('开始时间必须小于结束时间');
                return;
            }
            this.state.form['startTime'] = startTime;
        } else {
            endTime = new Date(value + ' 23:59:59').getTime();
            startTime = this.state.form.startTime;
            if (endTime && endTime < startTime) {
                window.toast('结束时间必须大于开始时间');
                return;
            }
            this.state.form['endTime'] = endTime;
        }

        this.checkDisabled();
    }
}