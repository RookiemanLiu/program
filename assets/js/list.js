$(function() {
    /* 头部二级菜单 */
    $('.xiala').mouseenter(function() {
        $('.xiala i').removeClass('iconfont icon-arrow-down').addClass('iconfont icon-arrow-up');
        $('.more-list').css('display', 'block');
    }).mouseleave(function() {
        $('.xiala i').removeClass('iconfont icon-arrow-up').addClass('iconfont icon-arrow-down');
        $('.more-list').css('display', 'none');
    })

    /* 左侧菜单 */
    $('.content-main h3').click(function() {
        var tIndex = $(this).parent().index();
        $(this).siblings().slideToggle();
        $('.sidebar-same h3 a i').eq(tIndex).toggleClass('icon-down');
    })

    /* 全选与全不选 */
    $('.checkAll i').click(function() {
        if ($(this).hasClass('icon-checked')) {
            $(this).removeClass('icon-checked').addClass('icon-unchecked');
            $('.details-list .icon-checked').removeClass('icon-checked').addClass('icon-unchecked');
        } else {
            $(this).removeClass('icon-unchecked').addClass('icon-checked');
            $('.details-list .icon-unchecked').removeClass('.icon-unchecked').addClass('icon-checked');
        }
    })
    /* 单选 */
    $('.details-list ul li>span').click(function() {
        $('.checkAll i').removeClass('icon-checked').addClass('icon-unchecked');
        if ($(this).hasClass('icon-checked')) {
            $(this).removeClass('icon-checked').addClass('icon-unchecked');
            // $('.checkAll i').removeClass('icon-unchecked').addClass('icon-checked');
        } else if ($(this).hasClass('icon-unchecked')) {
            $(this).removeClass('icon-checked').addClass('icon-checked');
        }
    })
})