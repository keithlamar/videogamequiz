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
	question1.correctvg = question1.vg[0];
	question1.correctcn = question1.cn[2];
	question1.desc = "Princess Daisy is a fictional character in the Mario series of video games, where she is the princess of the fictional region of Sarasaland. She first appeared in Super Mario Land as the game's damsel in distress, a role usually played by Princess Peach. Since her appearance in Mario Tennis, she has become a staple playable character in the Mario spin-off games, in which she is often paired up with Peach. It is often speculated that she is Luigi's love interest. Her official description for Mario Party 4 states that Luigi has a crush on her, but Waluigi does too, which may cause trouble.";

question2 = {}
	question2.pic = "images/daisy.png"
	question2.vg = ["Men In Black",
		"Catch",
		"BasDrum",
		"Loser",
		"Yessir"];
	question2.cn = ["Peach",
		"Rosalina",
		"Daisy",
		"Zelda",
		"Ashe"];
	question2.correctvg = question2.vg[1];
	question2.correctcn = question2.cn[3];
	question2.desc = "Some Words";

//counter for which question the user is on.
var questionNum = 1


function checkAnswer (qNum){
	var vgAnswer = $('#vg').text()
	var cnAnswer = $('#cn').text()
	var vgCorrect = eval("question" + qNum + ".correctvg")
	var cnCorrect = eval("question" + qNum + ".correctcn")
	var questionPic = eval("question" + qNum + ".pic")
	var questionDesc = eval("question" + qNum + ".desc")
	function answerScreen(text){
		$('#answer-screen').find('h1').text(text).next('img').attr('src', questionPic).next('p').text(questionDesc);
	}

	if(vgAnswer == vgCorrect && cnAnswer == cnCorrect){
		answerScreen('Your Correct!');
	}
	else if(vgAnswer == vgCorrect || cnAnswer == cnCorrect){
		answerScreen('Your Half-Correct!')
	}
	else{
		answerScreen('Incorrect!')
	}
	};


$(document).ready(function(){
	
	function showQuestion(){
		//remember to define var in function, when var will dynamically change
		var questionVG = eval("question" + questionNum + ".vg")
		var questionCN = eval("question" + questionNum + ".cn")
		for(var i = 0; i < questionVG.length; i++){
			$('.left-col')
			.find('ul')
			.prepend('<li><button class="choice">' + questionVG[i] + '</button></li>')		
		};
		for(var i = 0; i < questionCN.length; i++){
			$('.right-col')
			.find('ul')
			.prepend('<li><button class="choice">' + questionCN[i] + '</button></li>')		
		};
	}

	$('#answer-screen').hide();
	$('#start').on('click', function(){
		showQuestion();
		$('#intro').fadeOut(1000);
	});
	$('.left-col').on('click', '.choice', function(){
		var choice = $(this).text()
		$('#answers').find('#vg').text(choice).parent().addClass('selected').removeClass('answer');


	});
	$('.right-col').on('click', '.choice', function(){
		var choice = $(this).text()
		$('#answers').find('#cn').text(choice).parent().addClass('selected').removeClass('answer');
	});
	$('#submit').on('click', function(){
		checkAnswer(questionNum);
		$('#answer-screen').fadeIn(500);
		questionNum++;
	});
	$('#next').on('click', function(){
		showQuestion();
		$(this).parent().parent().hide();

	})
});