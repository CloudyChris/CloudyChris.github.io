
function gen_day(dxml){
    var tab_li = document.createElement("li");
    var tab_a  = document.createElement("a");
    
    var dname = document.createTextNode($dxml.find("day").text());
    
    tab_a.appendChild(dname);
    
    tab_li.appendChild(tab_a);
}

$(document).ready(function(){

    $.get( "content/pages/511D_util/courses_schedule/orar.xml", function(response) {

		 var $main_xml = $( $.parseXML(response));
         $(main_xml).find("orar > zi").each(function(){
			gen_day($(this));
            
		})
		 //$("#version_ind").append($main_xml.find("content > version").text());
	});
});
