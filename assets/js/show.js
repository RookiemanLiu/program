//设置标题滚动
$(function() {
    var titlename = $(document).attr("title").split("");

    function gdtitle() {
        titlename.push(titlename[0]);
        titlename.shift();
        document.title = titlename.join("");
    }
    setInterval(gdtitle, 1000);//设置时间间隔运行
});

//头部二级菜单
$(function() {
    $('.xiala').mouseenter(function() {
        $('.xiala i').removeClass('iconfont icon-arrow-down').addClass('iconfont icon-arrow-up');
        $('.more-list').css('display', 'block');
    }).mouseleave (function() {
        $('.xiala i').removeClass('iconfont icon-arrow-up').addClass('iconfont icon-arrow-down');
        $('.more-list').css('display','none');
    });
});

//歌词滚动条
$(function(){
    $('.lyric-content').scroll(function(){
        var top = $(this).scrollTop();
        var maxHeight = $(this).get(0).scrollHeight - $(this).height();
        var bili = top / maxHeight;
        $('.lyrics-line').css('top',($(this).height()-$('.lyrics-line').height())*bili);
    })
});

//底部进度控制栏
$(function() {
    $('.controls-left a').click(function(ent) {
        ent.preventDefault();
    });
    //控制栏左侧
    $('.controls-left .play-pause,.play-start').click(function() {
        $('.play-pause,.play-start').toggle();
    });
    $('.play-valume .song-valume').hover(function() {
        $('.disvalume').toggle();
    });
    $('.play-pattern .song-circulation').click(function() {
        $('.pattern-box').toggle();
    });
    $('.disvalume').hover(function() {
       $('.disvalume').toggle();
    });
    $('.song-lyric').click(function() {
        $('.pattern-box').hide();

    });


//控制栏右侧
    //下载提示框
    $('.play-download .song-down').click(function() {
       $('.tips').fadeIn(500);
    });
    $('.tips-header .close').click(function() {
       $('.tips').hide();
    });


    //分享提示框
    $('.play-share .song-share').click(function() {
        $('.shareTo').fadeIn(500);
    });
    $('.share-header .close').click(function() {
       $('.shareTo').hide();
    });
    $('.share-weixin').hover(function() {
        $('.weixin-qr').toggle();
    });

    //播放列表提示框
    $('.play-list .song-list').click(function() {
       $('.list-box').show();
    });
    $('.icon-close').click(function() {
        $('.list-box').hide();
    });
});