$(function() {
	$("#test").click(function() {
		var data = {1 : [1, 2, 3], 2 : {"name" : "xuhui", "sex" : "male"}, 3 : "scut"};
		$.post("untitled.html", 
			data, 
			function() {

			});

	});

});
