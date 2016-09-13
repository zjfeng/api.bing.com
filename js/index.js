window.onload = function() {
	$("#sinput").bind("keyup", function() {
		var searchText = $("#sinput").val();
		// 	$.get("http://api.bing.com/qsonhs.aspx?q=" + stext, function(d) {
		// 		var d = d.AS.Results[0].Suggests;
		// 		var html = "";
		// 		for (var i = 0; i < d.length; i++) {
		// 			html += "<li>" + d[i].Txt + "</li>"
		// 		}
		// 		$("#ssuggest").html(html).show();
		// 	}, "json");
		// 	$("#ssuggest").show();
		// })
		if (searchText) {
			$.ajax({
				type: "GET",
				url: "http://api.bing.com/qsonhs.aspx?type=cb&q=" + searchText,
				dataType: 'jsonp',
				jsonp: 'cb',
				success: function(d) {
					var d = d.AS.Results[0].Suggests;
					var html = '';
					for (var i = 0; i < d.length; i++) {
						html += '<li>' + d[i].Txt + '</li>';
					}
					$('#sresult').html(html);
					$('#ssuggest').show();
				},
				error: function() {
					console.log("error");
				}
			});
		}
	});
	$("#sinput").bind("click", function() {
		var searchText = $("#sinput").val();
		if (searchText) {
			$('#ssuggest').show();
		} else {
			$('#ssuggest').hide();
		}
	});
	//点击空白处，提示框消失  
    $(document).bind('click', function() {  
        $("#ssuggest").hide();  
    });
    $(document).delegate('#ssuggest li', 'click', function(event) {
        var keyword = $(this).text();
        location.href = 'http://cn.bing.com/search?q='+keyword;
    });
    // $(document).delegate('click', '#ssuggest li', function() {  
    //     var keyword = $("#ssuggest li").text();
    //     console.log($("#ssuggest li").length);
    //     console.log(keyword);
    //     location.href = 'http://cn.bing.com/search?q='+keyword;  
    // }); 
}
