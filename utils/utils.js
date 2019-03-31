function http(url, callback, type, category){
    wx.request({
        url: url,
        header: {
            'content-type': 'application/json' // 默认值
        },
        success(res) {
            callback(res.data, type, category)
        }
    })
}

// 星星处理函数
/**
 *  stars: 00  50  40  45
 *  00: [0, 0, 0, 0, 0]
 *  40: [1, 1, 1, 1, 0]
 *  50: [1, 1, 1, 1, 1]
 *  45: [1, 1, 1, 1, 0]
 * 
 */
function star(stars){
    var stararr = [];
    var num = stars.substring(0, 1);
    for(var i = 0; i < 5; i++){
        if(i < num){
            stararr.push(1);
        }else{
            stararr.push(0);
        }
    }
    return stararr;
}

module.exports = {
    http: http,
    star: star
}