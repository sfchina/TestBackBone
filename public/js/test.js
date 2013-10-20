$(document).ready(function() {
	var loadBaseTemplate=function () {
	    return $.get('/js/control/baseControl.html').then(function(src) {
	    	
	       return $('body').append($(src));
	    });
	}
	var getTemplate=function (name) {
	    return $.get('/js/control/'+name+'.html').then(function(src) {
	       return Handlebars.compile(src);
	    });
	}
	
	loadBaseTemplate();
});
