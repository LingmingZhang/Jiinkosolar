var links=document.querySelector("p.links");
var divs=document.querySelectorAll("#links-items>div");
links.onclick=function(e){
    if(e.target.nodeName=="A"){
        for(var i=0;i<links.children.length;i++){
        links.children[i].className="";
        divs[i].className="";
        e.target.className="click";
        if(e.target==links.children[i])
        divs[i].className="block";
       }
    }
}