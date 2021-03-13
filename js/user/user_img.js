 // 1.1 获取裁剪区域的 DOM 元素
 var $image = $('#image')
 // 1.2 配置选项
 const options = {
   // 纵横比
   aspectRatio: 1,
   // 指定预览区域
   preview: '.img-preview'
 }

 // 1.3 创建裁剪区域
 $image.cropper(options)


//  2.1 我想的修改初始图片
//  $image
//    .cropper('destroy')     
//    .attr('src', '../img/1.png')  
//    .cropper(options)  





//  真键的改变行为
 $('.img_ul').on('change',function(e) {

   var file = e.target.files[0];
   console.log(file);

   var newurl = URL.createObjectURL(file);
   
   $image
   .cropper('destroy')     
   .attr('src', newurl)  
   .cropper(options)        

 })

//  假键的连接
 $('.img_ul_true').click(function() {
   $('.img_ul').click();

 })



//  确定键的设置
$('.img_ul_cof').click(function() {
  // 将截取出来的图片转成  base64
  var dataURL = $image
  .cropper('getCroppedCanvas', {
    width: 100,
    height: 100
  })
  .toDataURL('image/png') 
  
  $.ajax({
    type: 'post',
    url: '/my/update/avatar',
    data: {avatar: dataURL},
    success:function(res) {
      console.log(res);
      window.parent.getinfor();
    }
  })
})





