/* javascript loading pages into l_arc_page on menu entry click */
$(document).ready(function(){
    $("#m1_li").click(function(){
        $("#l_arc_page").load("content/pages/home/index.html");
    });
    $("#m2_li").click(function(){
        $("#l_arc_page").load("content/pages/about/index.html");
    });
    $("#m3_li").click(function(){
        $("#l_arc_page").load("content/pages/downloads/index.html");
    });
    $("#m4_li").click(function(){
        $("#l_arc_page").load("content/pages/contact/index.html");
    });
    /* loading home on website opening */
    $("#l_arc_page").load("content/pages/home/index.html");
});
