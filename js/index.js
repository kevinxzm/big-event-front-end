// 退出按钮功能
$(function () {
    $('.log_out').click(function () {
        layer.open({
            title: '退出',
            content: '请问您是要退出么',
            yes: function () {
                location.assign('../mylogin.html');
                localStorage.removeItem('token');
            }
        });
    })
})

$(function() {

    $('.bar_user').click(function() {
        $(this).hide();
        
    })





})


// 获取全局里需要使用到的用户数据
function getinfor() {
    $.ajax({
        url: '/my/userinfo',
        type: 'get',
        success: function (res) {
            if (res.status == 0) {
                renderwel(res.data);
            }
        }
    })
}
getinfor();



// 修改欢迎辞和渲染头像
function renderwel(data) {
    var i = data.nickname ? data.nickname : data.username;
    var user = '欢迎&nbsp;&nbsp&nbsp;&nbsp ' + i;
    $('.user_wel').html(user);

    if (data.user_pic != null) {
        //渲染user头像
        $('.user_cap').html('');
        var url = 'url(' + data.user_pic + ')';
        $('.user_cap').css('background', url);
        $('.user_cap').css('background-size', '100% 100%');
        // $('.user_cap').css('background-size', '100% 100%');

    } else {
        //使用用户名i的首字母
        var cap = i.substr(0, 1);
        cap = cap.toUpperCase();
        $('.user_cap').html(cap);
    }
}









