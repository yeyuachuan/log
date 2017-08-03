/**
 * Created by acer on 2017/7/31.
 */
$(function () {
    var data ={
        username:"hellodoge2",
        password:123
    }
    $(".sign-btn1").click(function () {
        if($(".password input").val()==data.password && $(".username input").val()== data.username){
            alert("登陆成功");
            $(".login-child").hide();
            $(".cover").hide();
            $(".login-first").hide();
        }else{
            alert("登陆失败");
        }
    })
})