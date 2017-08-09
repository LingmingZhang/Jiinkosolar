$(()=> {
    var imgs=[];
    var $ulImgs = $("#imgs"), LIWIDTH = 1920,
    $ulIdxs = $("#indexs"), moved = 0, interval = 500,
    WAIT = 3500, timer = null;
    var str = "", strIdx = "";

    //为页面添加图片
    $.ajax({
            url:"data/banner.php",
            success:function(data){
                for(var i=0;i<data.length;i++){
                    var obj=data[i];
                    imgs[i]="img/index/"+obj.bname;
                }
                for (var src of imgs) {
                    str += `<li><img src="${src}"></li>`;
                    strIdx += `<li></li>`;
                }
                str += `<li><img src="${imgs[0]}"></li>`;
                $ulImgs.append(str).css("width", (imgs.length + 1) * LIWIDTH);
                $ulIdxs.append(strIdx).children().first().addClass("hover");
            }
    });

    //启动周期性定时器
    function play() {
        timer = setInterval(() => {
            moved++;
            $ulImgs.animate({left: -moved * LIWIDTH}, interval, () => {
                if (moved == 6) {
                    moved = 0;
                    $ulImgs.css("left", 0)
                }
                $ulIdxs.children(":eq(" + moved + ")").addClass("hover").siblings().removeClass("hover");
            })
        }, WAIT);
    }
    play();

    //当鼠标进入#container时
    $("#container").hover(() => {
        clearInterval(timer);
        timer = null;
    }, () => play());

    //$ulIdxs绑定单击事件
    $ulIdxs.on("click", "li", e => {
        var $tar = $(e.target);
        moved = $tar.index();
        $ulImgs.stop(true).animate({left: -moved * LIWIDTH}, interval, () => {
            $tar.addClass("hover").siblings().removeClass("hover");
        })
    });

    //为左右两侧箭头绑定单击事件
    var $lf = $("#arrow-left"), $rt = $("#arrow-right");
    $lf.click(function () {
        if (moved != 0) {
            moved--;
            $ulImgs.animate({left: -moved * LIWIDTH}, interval, () => {
                clearInterval(timer);
                timer = null;
            });
            $ulIdxs.children(":eq(" + moved + ")").addClass("hover").siblings().removeClass("hover");
        }
    });
    $rt.click(function () {
        if (moved != 6) {
            moved++;
            $ulImgs.animate({left: -moved * LIWIDTH}, interval, () => {
                clearInterval(timer);
                timer = null;
            });
            $ulIdxs.children(":eq(" + moved + ")").addClass("hover").siblings().removeClass("hover");
        }
    })

})
