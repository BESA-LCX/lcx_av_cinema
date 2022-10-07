/*$("#v1,#v2").click(function(){
    $("#video-player").show();
    $(".content-top,#container,#container2").hide();
    location.href="#video";
});*/
//点击筛选功能实现高亮
var select_btn = document.querySelectorAll(".menu-group li");
for (var i = 0; i < select_btn.length; i++) {
    select_btn[i].onclick = function() {
        $(this).css({ border: "2px solid rgb(28, 224, 246)", color: "rgb(28,224,246)" });
        $(this).prevAll().css({ color: "white", border: "1px solid white" });
        $(this).nextAll().css({ color: "white", border: "1px solid white" });
    }
}

//筛选功能
//丝袜
$(".Msiwa").click(function() {
    $(".box").show();
    $(".box").not(".siwa").hide();
});
//秘书ol
$(".Mol").click(function() {
    $(".box").show();
    $(".box").not(".ol").hide();
});
//护士
$(".Mhushi").click(function() {
    $(".box").show();
    $(".box").not(".hushi").hide();
});
//人妻 熟女
$(".Mrenqi").click(function() {
    $(".box").show();
    $(".box").not(".renqi").hide();
});
//女子校生
$(".Mnv").click(function() {
    $(".box").show();
    $(".box").not(".nv").hide();
});
//萝莉
$(".Mluoli").click(function() {
    $(".box").show();
    $(".box").not(".luoli").hide();
});
//外射
$(".Mwaishe").click(function() {
    $(".box").show();
    $(".box").not(".waishe").hide();
});
//颜射
$(".Myanshe").click(function() {
    $(".box").show();
    $(".box").not(".yanshe").hide();
});
//中出
$(".Mzc").click(function() {
    $(".box").show();
    $(".box").not(".zc").hide();
});
//后入
$(".Mendinter").click(function() {
    $(".box").show();
    $(".box").not(".endinter").hide();
});
//女上位
$(".Mnvup").click(function() {
    $(".box").show();
    $(".box").not(".nvup").hide();
});
//女教师
$(".Mkyoshi").click(function() {
    $(".box").show();
    $(".box").not(".kyoshi").hide();
});
//家教
$(".Mht").click(function() {
    $(".box").show();
    $(".box").not(".ht").hide();
});
//空姐
$(".Mca").click(function() {
    $(".box").show();
    $(".box").not(".ca").hide();
});
//戴套
$(".Mtao").click(function() {
    $(".box").show();
    $(".box").not(".tao").hide();
});
//车震
$(".MCarshock").click(function() {
        $(".box").show();
        $(".box").not(".Carshock").hide();
    })
    //约炮
$(".Myue").click(function() {
        $(".box").show();
        $(".box").not(".yue").hide();
    })
    //户外
$(".Mout").click(function() {
        $(".box").show();
        $(".box").not(".out").hide();
    })
    //取消筛选
$("#cancel").click(function() {
    $(".box").show();
});

function turn_color() {
    $("header").css({ opacity: '0.9', backgroundColor: 'rgb(68, 68, 70)' });
}

function return_color() {
    $("header").css({ opacity: '0.9', backgroundColor: 'rgb(19, 18, 18)' });
}

function return_html() {
    /*  $("#video-player").hide();
      $(".content-top,#container,#container2").show();*/
    location.href = "index.html";
}

function return_html1() {
    location.href = "JAV.html";
}

function return_html2() {
    location.href = "swag.html";
}

function return_html3() {
    location.href = "china.html";
}

function return_html4() {
    location.href = "South_korean.html";
}

function return_html5() {
    location.href = "E_A.html";
}

function return_html6() {
    location.href = "Short_video.html";
}
$(".back-top").mouseenter(function() {
    $(".back-top>a").text("返回顶部")
});
$(".back-top").mouseleave(function() {
    $(".back-top>a").text("视频播放")
});