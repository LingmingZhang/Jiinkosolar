/**
 * Created by Administrator on 2017/6/28.
 */
(function(){
    var texts=[
        "<a href='press-1.html' target='_blank'>晶科能源2017上海SNEC展携6款新品重磅来袭<a/>",
        "<a href='press-2.html' target='_blank'>作为B20德国ECRE联席主席 晶科能源推动B20政策文件制定<a/>",
        "<a href='press-1.html' target='_blank'>晶科能源代表中国企业独家受邀在B20德国柏林峰会发言<a/>",
        "<a href='press-2.html' target='_blank'>晶科能源为Asunim在土耳其的光伏项目提供42MW太阳能组件<a/>",
    ];
    var $banText=$("#banner-text"),LIHEIGHT=40,moved=0,interval=500,
        WAIT=3500,timer=null,str="";
    for(var text of texts){
        str+=`<li>${text}</li>`;
    }
    str+=`<li>${texts[0]}</li>`;
    $banText.append(str).css("height",(texts.length+1)*LIHEIGHT);
    //启动周期性定时器
    function play(){
        timer=setInterval(()=>{
            moved++;
            $banText.animate({top:-moved*LIHEIGHT},interval,()=>{
                if(moved==4){moved=0;$banText.css("top",0)}
            })
        },WAIT)
    }
    play();
    //当鼠标进入$banText时
    $("#banner-text-container").hover(()=>{
        clearInterval(timer);
        timer=null;
    },()=>play());
})();