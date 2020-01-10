var iSecond;
var timerchecker = null;
window.onload = function() {
    fncClearTime();
    initTimer();
}
 
function fncClearTime() {
    iSecond = 10;
}
 
Lpad = function(str, len) {
    str = str + "";
    while (str.length < len) {
        str = "0" + str;
    }
    return str;
}
 
initTimer = function() {
    var timer = document.getElementById("timer");
    rHour = parseInt(iSecond / 3600);
    rHour = rHour % 60;
 
    rMinute = parseInt(iSecond / 60);
    rMinute = rMinute % 60;
 
    rSecond = iSecond % 60;
 
    if (iSecond > 0) {
        timer.innerHTML = "&nbsp;" + Lpad(rHour, 2) + "시간 " + Lpad(rMinute, 2)
                + "분 " + Lpad(rSecond, 2) + "초 ";
        iSecond--;
        timerchecker = setTimeout("initTimer()", 1000); // 1초 간격으로 체크
    } else {
        logoutUser();
    }
}

function logoutUser() {
    location.href="login.html"; //로그아웃 및 로그인페이지로 이동
    alert("로그아웃 되었습니다.");
}