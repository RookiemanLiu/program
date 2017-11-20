var tel = document.querySelector('.tel');
var pas = document.querySelector('.pas');
var pass = document.querySelector('.pass');
var tips = document.querySelectorAll('.tips');
var nBtn = document.querySelector('.note-btn');
var sBtn = document.querySelector('.sign-btn');
tel.onfocus = function() {
    tips[0].style.display = 'inline-block';
};
tel.onblur = function() {
    var aTel = tel.value.trim();
    var reg = /^(13[0-9]|14[579]|15[012356789]|17[135678]|18[0-9]|199)[0-9]{8}$/;
    if(reg.test(aTel)) {
        tips[0].style.color = '#0c0';
        tips[0].innerHTML = '手机号可用!';
        nBtn.style.backgroundColor = '#3db9ec'
        return false;
    } else if(aTel === ''){
        tips[0].style.display = 'none';
    } else {
        tips[0].style.backgroundColor = '#fadada';
        tips[0].style.color = '#d70f0f';
        tips[0].innerHTML = '请输入可用的手机号码！';
    }
};
pas.onfocus = function() {
    tips[1].style.display = 'inline-block';
};
pas.onblur = function() {
    var aPas = pas.value.trim();
    var reg = /^[\w-\.*!@#$%\^&]{6,16}$/;
    if(reg.test(aPas)) {
        tips[1].style.color = '#0c0';
        tips[1].innerHTML = '密码格式输入正确!';
        return false;
    } else if(aPas === ''){
        tips[1].style.display = 'none';
    } else {
        tips[1].style.backgroundColor = '#fadada';
        tips[1].style.color = '#d70f0f';
        tips[1].innerHTML = '密码格式为6-16位的字母、数字和符号组成'
    }
};
pass.onfocus = function() {
    tips[2].style.display = 'inline-block';
};
pass.onblur = function() {
    if (pass.value ==='') {
        tips[2].style.display = 'none';
    } else if(pass.value === pas.value) {
        tips[2].style.color = '#0c0';
        tips[2].innerHTML = '两次密码一致，密码可用';
        return false;
    } else {
        tips[2].style.backgroundColor = '#fadada';
        tips[2].style.color = '#d70f0f';
        tips[2].innerHTML = '密码不一致，请确认后重新输入';
    }
};
sBtn.onclick = function() {
    if(tel.value == '') {
        tips[0].style.backgroundColor = '#fadada';
        tips[0].style.color = '#d70f0f';
        tips[0].style.display = 'inline-block';
    } else if(pas.value == '') {
        tips[1].style.backgroundColor = '#fadada';
        tips[1].style.color = '#d70f0f';
        tips[1].style.display = 'inline-block';
    } else if(pass.value == '') {
        tips[2].style.backgroundColor = '#fadada';
        tips[2].style.color = '#d70f0f';
        tips[2].style.display = 'inline-block';
    }
}