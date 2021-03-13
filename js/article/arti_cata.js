// 获取文章分类
function getArtType() {
    $.ajax({
        method: 'get',
        url: '/my/article/cates',
        success: function (res) {
            var body = template('article_content', res);
            $('.article_body').html(body);
        }
    })
}

getArtType()

// 添加类别
$(function () {
    var cataAdd = '';

    $('.cata_add').click(function () {
        cataAdd = layer.open({
            type: 1,
            area: ['500px', '250px'],
            title: '在线调试',
            content: $('#cata_add').html()
        });
    })


    $('body').on('click', '.cata_add_sub', function (e) {
        e.preventDefault();
        console.log($('.form_add').serialize());
        $.ajax({
            type: 'post',
            url: '/my/article/addcates',
            data: $('.form_add').serialize(),
            success: function (res) {
                console.log(res);
                getArtType();

            }
        })
        layer.msg('添加成功');
        layer.close(cataAdd);
    })
})

// 删除类别

$(function () {

    $('body').on('click', '#artDel', function () {

        // 第一种我原来常写的方法
        // var ele = $(this).parent().parent().children().eq(0);
        // var id = ele.html();
        // console.log(id);

        // $.ajax({
        //     type: "get",
        //     url: '/my/article/deletecate/' +id,
        //     success: function(res) {
        //         console.log(res);
        //         getArtType()

        //     }
        // })

        // 第二种注册属性的方法
        var a = $(this).data('num');

        var confirm = layer.open({
            content: '确定删除？',
            btn: ['确定'],
            yes: function () {
                $.ajax({
                    type: "get",
                    url: '/my/article/deletecate/' + a,
                    success: function (res) {
                        layer.close(confirm);
                        layer.msg('删除成功');
                        getArtType();
                    }
                })
            }
        })
    })
})
var form = layui.form;
// 3. 编辑类别
$(function () {
    $('body').on('click', '#artEdi', function () {
        // 3.1 弹出编辑层

        layer.open({
            type: 1,
            title: ['修改类别名称'],
            content: $('#ediText').html(),
            area: ['400px', '230px']
        });

        // var ediForm = new Object;
        // ediForm.id = $(this).data('num');
        // ediForm.name = $(this).data('name');
        // ediForm.alias = $(this).data('alias');

        // 3.2 编写弹出层默认值

        var ediForm = {
            Id: $(this).data('id'),
            name: $(this).data('name'),
            alias: $(this).data('alias')
        }
        console.log(ediForm);
        form.val('ediForm', ediForm);
    })


    $('body').on('submit', '.ediForm', function (e) {
        e.preventDefault();
        console.log($(".ediForm").serialize());
        $.ajax({
            type: 'post',
            url: '/my/article/updatecate',
            data: $(this).serialize(),
            success: function (res) {
                console.log(res);
            }
        })
    })














})





