$(document).ready(function(){

    $.get( "content/pages/511D_util/courses_schedule/orar.xml", function(response) {

		 var $main_xml = $( $.parseXML(response));
         $(main_xml).find("orar > zi").each(function(){
			$("#orar_container").empty();

		})
		 //$("#version_ind").append($main_xml.find("content > version").text());
	});
});
