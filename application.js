question1 = {}
	question1.pic = "images/daisy.png"
	question1.vg = ["Super Mario Bros Series",
		"Sonic the Hedgehog",
		"Donkey Kong Contry",
		"Megaman X",
		"Beyond Good and Evil"];
	question1.cn = ["Princess Peach",
		"Princess Rosalina",
		"Princess Daisy",
		"Princess Zelda",
		"Princess Ashe"];
	question1.correct1 = question1.vg[0];
	question1.correct2 = question1.cn[2];




$(document).ready(function(){
	$('#start').on('click', function(){
		for(var i = 0; i < question1.vg.length; i++){
			$('.left-col')
			.find('ul')
			.prepend('<li><button class="choice">' + question1.vg[i] + '</button></li>')		
		};
		for(var i = 0; i < question1.cn.length; i++){
			$('.right-col')
			.find('ul')
			.prepend('<li><button class="choice">' + question1.cn[i] + '</button></li>')		
		};
		$('#intro').hide();
	});
	$('.left-col').on('click', '.choice', function(){
		var choice = $(this).text()
		$('#answers').find('#vg').text(choice);
	});

});