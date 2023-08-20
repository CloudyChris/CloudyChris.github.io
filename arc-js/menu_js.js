/* javascript loading pages into l_arc_page on menu entry click */
$(document).ready(function(){
    $("#m1_li").addClass("active_menu_item");
    $("#m2_li").removeClass("active_menu_item");
    $("#m3_li").removeClass("active_menu_item");
    $("#m4_li").removeClass("active_menu_item");
    $("#m1_li").click(function(){
        $("#l_arc_page").load("content/pages/home/index.html");
        $("#m1_li").addClass("active_menu_item");
        $("#m2_li").removeClass("active_menu_item");
        $("#m3_li").removeClass("active_menu_item");
        $("#m4_li").removeClass("active_menu_item");
    });
    $("#m2_li").click(function(){
        $("#l_arc_page").load("content/pages/about/index.html");
        $("#m1_li").removeClass("active_menu_item");
        $("#m2_li").addClass("active_menu_item");
        $("#m3_li").removeClass("active_menu_item");
        $("#m4_li").removeClass("active_menu_item");
    });
    $("#m3_li").click(function(){
        $("#l_arc_page").load("content/pages/downloads/index.html");
        $("#m1_li").removeClass("active_menu_item");
        $("#m2_li").removeClass("active_menu_item");
        $("#m3_li").addClass("active_menu_item");
        $("#m4_li").removeClass("active_menu_item");

    });
    $("#m4_li").click(function(){
        $("#l_arc_page").load("content/pages/contact/index.html");
        $("#m1_li").removeClass("active_menu_item");
        $("#m2_li").removeClass("active_menu_item");
        $("#m3_li").removeClass("active_menu_item");
        $("#m4_li").addClass("active_menu_item");
    });
    
    /* loading home on website opening */
    $("#l_arc_page").load("content/pages/home/index.html");
});
