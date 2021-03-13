layui.form.verify({
    password: [/^[a-z0-9]{6,16}$/, '密码只有六个数'],
    pdcheck: function (value) {
        if ($('.newPwd').val() !== value) {
            return '密码不一致';
        }
    }
})

$('.user_pd_form').on('submit',function(e) {
    e.preventDefault();
    console.log($(this).serialize());


    $.ajax({
        url: '/my/updatepwd',
        type: 'post',
        data: $(this).serialize(),
        success: function(res) {
            if(res.status == 1) {
                layer.msg(res.message) ;
                $('.user_pd_form')[0].reset();
            } else {
                layer.msg(res.message)
                $('.user_pd_form')[0].reset();
            }
        }
    })




})