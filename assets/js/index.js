$(function() {
    /* 网页顶部二级菜单 */
    $('.xiala').mouseenter(function() {
        $('.xiala i').removeClass('iconfont icon-arrow-down').addClass('iconfont icon-arrow-up');
        $('.more-list').css('display', 'block');
    }).mouseleave(function() {
        $('.xiala i').removeClass('iconfont icon-arrow-up').addClass('iconfont icon-arrow-down');
        $('.more-list').css('display', 'none');
    })

    /* 轮播图左右箭头 */
    $('.carousel').hover(function() {
        $('.move').css('display', 'block');
    },function() {
        $('.move').css('display', 'none');
    })

    /* 图片轮播 */
    var index = 0;
    var timer = 0;
    var len = $('.carousel-img li').length;

    function run() {
        timer = setInterval(function() {
            $('.carousel-img li:eq('+ index +')').stop(true).fadeOut(100);
            $('.carousel-index li a:eq('+ index +')').removeClass('active');
            index++;
            if (index > len - 1) {
                index = 0;
            }
            $('.carousel-img li:eq('+ index +')').stop(true).fadeIn(1000);
            $('.carousel-index li a:eq('+ index +')').addClass('active');
        },4000)
    }
    run();
    $('.carousel .carousel-img').mouseover(function() {
        clearInterval(timer);
    }).mouseout(function() {
        run();
    })
    $('.carousel-index li').mouseover(function() {
        $('.carousel-img li:eq('+ index +')').stop(true).fadeOut(100);
        $('.carousel-index li a:eq('+ index +')').removeClass('active');
        index = $(this).index();
        $('.carousel-img li:eq('+ index +')').stop(true).fadeIn(1000);
        $('.carousel-index li a:eq('+ index +')').addClass('active');
    })
    $('.carousel-left').click(function() {
        $('.carousel-img li:eq('+ index +')').stop(true).fadeOut(100);
        $('.carousel-index li a:eq('+ index +')').removeClass('active');
        index--;
        if (index < 0) {
            index = len - 1;
        }
        $('.carousel-img li:eq('+ index +')').stop(true).fadeIn(1000);
        $('.carousel-index li a:eq('+ index +')').addClass('active');
    })
    $('.carousel-right').click(function() {
        $('.carousel-img li:eq('+ index +')').stop(true).fadeOut(100);
        $('.carousel-index li a:eq('+ index +')').removeClass('active');
        index++;
        if (index > len - 1) {
            index = 0;
        }
        $('.carousel-img li:eq('+ index +')').stop(true).fadeIn(1000);
        $('.carousel-index li a:eq('+ index +')').addClass('active');
    })

    /* 热门歌手 */
    var hIndex = 0;
    $('.country span').mouseover(function() {
        $('.dots span').eq(0).addClass('active').siblings().removeClass('active');
        hIndex = $(this).index();
        $(this).addClass('show').siblings().removeClass('show');
        $('.singer-img .singer-list').eq(3 * hIndex).show().siblings().hide();
    });
    $('.dots span').mouseover(function() {
        $('.dots span').eq($(this).index()).addClass('active').siblings().removeClass('active');
        $('.singer-img .singer-list').eq(3 * hIndex +  $(this).index()).show().siblings().hide();
    });
})


$(function() {
    /* 新歌首发 */
    $('.leftbar .count span').mouseover(function() {
        $('.pages .page .currentPage').text(1);
        $('.count span').eq($(this).index()).addClass('show').siblings().removeClass('show');
        $('.second-left ul').eq($(this).index()).addClass('u-active').siblings().removeClass('u-active');
    })
    var mValue = $('.second-left ul').eq($(this).index()).css('marginTop');
    var mIndex = $('.second-left ul').eq($(this).index());
    var pIndex = $('.pages .page .currentPage').text();
    $('.pages .nex').click(function() {
        pIndex++;
        if (pIndex >= 3) {
            pIndex = 3;
            $('.nex').removeClass('next').addClass('n-border');
        }
        if (pIndex <= 1) {
            pIndex = 1;
            $('.pre').removeClass('p-border').addClass('prev');
        }
        if (pIndex > 1) {
            $('.pre').removeClass('prev').addClass('p-border');
        }
        $('.pages .page .currentPage').text(pIndex);
        mValue = (pIndex - 1) * -280 + 'px';
        if ($('.songList ul').hasClass('u-active')) {
            console.log(mValue);
            $('.u-active').css('marginTop', mValue);
        }
    })
    $('.pages .pre').click(function() {
        pIndex--;
        if (pIndex <= 1) {
            pIndex = 1;
            $('.pre').removeClass('p-border').addClass('prev');
        }
        if (pIndex > 1) {
            $('.pre').removeClass('prev').addClass('p-border');
        }
        if (pIndex < 3) {
            $('.nex').removeClass('n-border').addClass('next');
        }
        $('.pages .page .currentPage').text(pIndex);
        mValue = (pIndex - 1) * -280 + 'px';
        if ($('.songList ul').hasClass('u-active')) {
            console.log(mValue);
            $('.u-active').css('marginTop', mValue);
        }
    })
})