$.ajaxPrefilter(function (options) {
    options.url = 'http://ajax.frontend.itheima.net' + options.url;


    // 防止非法登录的操作，所有需要token的ajax请求
    if(options.url.indexOf('/my') != -1) {
        options.headers = { Authorization: localStorage.getItem('token') };
        options.complete = function (res) {
           
            if (res.responseJSON.status == 1 && res.responseJSON.message === '身份认证失败！') {
                location.assign('../mylogin.html');
                localStorage.removeItem('token');
            }
        }
    }   
   
    
})