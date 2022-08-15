$(function(){
    // 点击账号注册的连接
    $('#link_reg').on('click',function(){
        $('.login-box').hide()
        $('.reg-box').show()
        
    })
    // 去登陆点击
    $('#link_login').on('click',function(){
        $('.login-box').show()
        $('.reg-box').hide()
        
    })
})