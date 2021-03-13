$('.user_infor form').on('submit', function (e) {
    e.preventDefault();
    console.log($(this).serialize());

    $.ajax({
        type: 'post',
        url: '/my/userinfo',
        data: $(this).serialize(),
        success: function (res) {
            window.parent.getinfor();
            renderUserInfro();
        }
    })
})


function renderUserInfro() {
    $.ajax({
        url: '/my/userinfo',
        type: 'get',
        success: function (res) {
            if (res.status == 0) {
                $('.user_id').val(res.data.id);
                $('.uname').val(res.data.username);
                $('.nickname').val(res.data.nickname);
                $('.email').val(res.data.email);
            }
        }
    })
}

renderUserInfro();


$('.reset').click(function(e) {
    e.preventDefault();
    renderUserInfro();
    
})

