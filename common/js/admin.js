$(function(){
   $(".regin").click(function (e) {
       $(".box").hide(700); 
       $(".box2").show(700);  
   });
   $(".close").click(function (e) { 
        $(".box2").hide(700); 
        $(".box").show(700);   
   });
   
   $(".getreg").click(function (e) { 
        var user = $(".user").val();
        var password = $(".password").val();
        var password2 = $(".password2").val();
        var email = $(".email").val();
        var phone = $(".phone").val();
        var aa = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (user ==""||password == ""||password2 == ""||email==""||phone == "") {
            alert("请完善你的注册信息")
            return;
        } 
        if (password != password2) 
            {
                alert("请检查密码是否一致")
                return;
            }
        if (!aa.test(email)) {
            alert("请输入正确格式的邮箱")
        } 
        
        if (phone.length<11) {
           alert("请输入11位手机号")      
        }
   });    
})
