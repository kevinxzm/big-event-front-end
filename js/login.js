$(function () {
    $('.login_log .link_reg a').click(function () {
        $('.login_log').hide();
        $('.login_reg').show();

    })


    $('.login_reg .link_log a').click(function () {
        $('.login_log').show();
        $('.login_reg').hide();

    })
})

// var reg = /^[a-z\S]{3}$/ ;
// var x = 'a c';
// console.log(reg.test(x));
// var form = layui.form;

layui.form.verify({
    username: [/^[a-z]{6,}$/,
        '用户名只有六个字母'],
    password: [/^[a-z0-9]{6,16}$/, '密码只有六个数'],
    pdcheck: function (value) {
        if ($('.pdregister').val() !== value) {
            return '密码不一致';
        }
    }

})


$('.form_log').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        url: '/api/login',
        type: 'post',
        data: $(this).serialize(),
        success: function (res) {
            if(res.status ==0) {
                localStorage.setItem('token',res.token);
                console.log(res.token);
                location.assign('/index.html');
            } else {
                layer.msg(res.message);
            }
        }
    })

})

$('.form_reg').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        url: '/api/reguser',
        type: 'post',
        data: $(this).serialize(),
        success: function (res) {
            console.log(res);

            if (res.status == 1) {
                var mes = '注册失败';
                if (res.message) {
                    mes = mes + '，' + res.message;

                }
                layer.msg(mes, { icon: 5 });
            } else if (res.status == 0) {
                layer.alert('注册成功', { icon: 1 });
            }


            // $('.link_log a').click();
        }

    })
})


$('body').on('click','layui-layer-btn0', function () {
    console.log(1);
})













