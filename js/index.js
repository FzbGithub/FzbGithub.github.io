/**
 * Created by sks on 2017/1/4.
 */
(function () {
    var sureLogin= document.querySelector('.sure-login');
    sureLogin.onclick=function () {
        var useName= document.querySelector('.user-name');
        var usePassword= document.querySelector('.user-password');
        var useVerify= document.querySelector('.user-verify');
        var nameVal=useName.value,passwordVal=usePassword.value,verifyVal=useVerify.value;
        if(!nameVal) {
            alert("请输入用户名！");
            return
        }
        if(!passwordVal) {
            alert("请输入专属密码！");
            return
        }
        if(!verifyVal) {
            alert("请输入验证码！");
            return
        }
        if(nameVal && passwordVal && verifyVal) {
            if(nameVal==="fzb" && passwordVal==="fzb" && verifyVal==="123456") {
                window.location.href="./view/belong.html";
            } else {
                alert("验证不通过，请检查输入信息！");
                return;
            }
        }
    }
})()