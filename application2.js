qManager = {};
	qManager.currentNum = 1;
    qManager.correctPoints = 0;
    
    qManager.question1 = {};
		qManager.question1.pic = "images/daisy.png";
		qManager.question1.vg = ["Super Mario Bros Series",
		"Sonic the Hedgehog",
		"Donkey Kong Contry",
		"Megaman X",
		"Beyond Good and Evil"];
		qManager.question1.cn = ["Princess Peach",
		"Princess Rosalina",
		"Princess Daisy",
		"Princess Zelda",
		"Princess Ashe"];
		qManager.question1.correctvg = qManager.question1.vg[0];
		qManager.question1.correctcn = qManager.question1.cn[2];
		qManager.question1.desc = "Princess Daisy is a fictional character in the Mario series of video games, where she is the princess of the fictional region of Sarasaland. She first appeared in Super Mario Land as the game's damsel in distress, a role usually played by Princess Peach. Since her appearance in Mario Tennis, she has become a staple playable character in the Mario spin-off games, in which she is often paired up with Peach. It is often speculated that she is Luigi's love interest. Her official description for Mario Party 4 states that Luigi has a crush on her, but Waluigi does too, which may cause trouble.";
	qManager.question2 = {};
        qManager.question2.pic = "images/tingle.png";
        qManager.question2.vg = ["Crash Bandicoot: The Wrath of Cortex",
		"Legend fo Zelda: Majora's Mask",
		"Banjo-Kazooie: Nuts & Bolts",
		"Arc the Lad",
		"Ehrgeiz: God Bless the Ring"];
	   qManager.question2.cn = ["Doctor Neo Cortex",
		"Jamjars",
		"Ankle",
		"Tingle",
		"Takaya"];
	   qManager.question2.correctvg = qManager.question2.vg[1];
	   qManager.question2.correctcn = qManager.question2.cn[3];
	   qManager.question2.desc = "Tingle is a middle-aged man obsessed with fairies. He wears a green bodysuit, reminiscent of Link's tunic. He made his first appearance in Majora's Mask, where he was found floating around on a balloon selling maps. He subsequently appeared in Wind Waker, first in a jail room in located on Windfall Island, and in tall wooden towers located randomly around the ocean, where again he acted as a map maker. He has also appeared in Oracle of Ages, Four Swords Adventures and The Minish Cap. He cameos in Phantom Hourglass as a poster, in Spirit Tracks, an almost shop figurine, and in Skyward Sword as a doll in Zelda's room at the Knight Academy. Tingle has gained some notoriety, being ranked first in IGN's list of weird Zelda characters and seventh, one place ahead of Navi, in Cracked's list of annoying video game characters.";

	qManager.question3 = {};
        qManager.question3.pic = "images/raiden.png";
        qManager.question3.vg = ["Halo Series",
		"Resident Evil Series",
		"Mortal Kombat",
		"Imfamous",
		"Metal Gear Solid Series"];
	   qManager.question3.cn = ["Kessler",
		"Sword Guy",
		"Raiden",
		"Chris Redfield",
		"Otacon"];
	   qManager.question3.correctvg = qManager.question3.vg[4];
	   qManager.question3.correctcn = qManager.question3.cn[2];
	   qManager.question3.desc = "Raiden, real name Jack, is a child soldier in the Liberian Civil War, and Solidus Snake's adoptive son. He is the main character of Metal Gear Solid 2 that substitutes Solid Snake as the player's character in the main portion of the game fighting against the titular terrorists to save the hostages from Big Shell. He reappears in Metal Gear Solid 4 as the new Cyborg Ninja who supports Solid Snake. He returns as the protagonist of Metal Gear Rising: Revengeance. Raiden is voiced by Kenyu Horiuchi in Japanese and Quinton Flynn in English.";

	qManager.question4 = {};
        qManager.question4.pic = "images/big-al.png";
        qManager.question4.vg = ["Psychonauts",
		"Beyond Good and Evil",
		"Little Big Planet",
		"Ratchet and Clank",
		"Jak and Dexter"];
	   qManager.question4.cn = ["Sackboy",
		"Captain Quark",
		"Pey'j",
		"Big Al",
		"Dr. Knarf"];
	   qManager.question4.correctvg = qManager.question4.vg[4];
	   qManager.question4.correctcn = qManager.question4.cn[2];
	   qManager.question4.desc = "A recurring character. He originally supplied Clank with the Heli-Pack in Ratchet & Clank. Big Al is chosen for the Q-Force in Ratchet & Clank: Up Your Arsenal for his mastery of electronics. He often baffles Ratchet with his techno-speak and has to get Clank to \"translate\" for him since Clank also speaks \"Nerd\". He is the stereotypical computer geek with interests in electronics and all things Qwark. He has two siblings, Bob and Ed(wina), who, like him, own \"RoboShacks\". ";

	qManager.question5 = {};
        qManager.question5.pic = "images/xemnes.png";
        qManager.question5.vg = ["Jade Cocoon",
		"The Legend of Dragoon",
		"Kingdom Hearts",
		"Final Fantasy VII",
		"Final Fantasy X"];
	   qManager.question5.cn = ["Ash Ketchum",
		"Lavitz Slambert",
		"Golbez",
		"Cloud Strife",
		"Xemnas"];
	   qManager.question5.correctvg = qManager.question5.vg[2];
	   qManager.question5.correctcn = qManager.question5.cn[4];
	   qManager.question5.desc = "Raiden, real name Jack, is a child soldier in the Liberian Civil War, and Solidus Snake's adoptive son. He is the main character of Metal Gear Solid 2 that substitutes Solid Snake as the player's character in the main portion of the game fighting against the titular terrorists to save the hostages from Big Shell. He reappears in Metal Gear Solid 4 as the new Cyborg Ninja who supports Solid Snake. He returns as the protagonist of Metal Gear Rising: Revengeance. Raiden is voiced by Kenyu Horiuchi in Japanese and Quinton Flynn in English.";

    qManager.checkAnswer = function () {
		var vgAnswer = $('#vg').text();
		var cnAnswer = $('#cn').text();
		var vgCorrect = eval("qManager.question" + qManager.currentNum + ".correctvg");
		var cnCorrect = eval("qManager.question" + qManager.currentNum + ".correctcn");
		var questionPic = eval("qManager.question" + qManager.currentNum + ".pic");
		var questionDesc = eval("qManager.question" + qManager.currentNum + ".desc");
		function answerScreen(text) {
			$('#answer-screen').find('h1').text(text).next('img').attr('src', questionPic).next('p').text(questionDesc);
		}

		if (vgAnswer === vgCorrect && cnAnswer === cnCorrect) {
			answerScreen("You're Correct!");
            qManager.correctPoints+=2;
		}
		else if (vgAnswer === vgCorrect || cnAnswer === cnCorrect) {
			answerScreen("You're Half-Correct!");
            qManager.correctPoints+=2;
		}
		else {
			answerScreen('Incorrect!');
		} ;
		}
    qManager.showQuestion = function(){
		//remember to define var in function, when var will dynamically change
         
		var questionVG = eval("qManager.question" + qManager.currentNum + ".vg")
		var questionCN = eval("qManager.question" + qManager.currentNum + ".cn")
		var questionPic = eval("qManager.question" + qManager.currentNum + ".pic")
       
        
            $('#choices').find('img').attr("src", questionPic);
            $('#choices').find('span').text(qManager.currentNum);
            for(var i = 0; i < questionVG.length; i++){
                $('.left-col')
                .find('ul')
                .prepend('<li><button class="choice CN">' + questionVG[i] + '</button></li>')		
            };
            for(var i = 0; i < questionCN.length; i++){
                $('.right-col')
                .find('ul')
                .prepend('<li><button class="choice VG">' + questionCN[i] + '</button></li>')		
            };
        
	};
    qManager.removeQuestion = function (){
		$('.left-col').find('li').remove();
		$('.right-col').find('li').remove();
		$('#answers').find('#vg').text("Select Video Game").parent().addClass('answer').removeClass('selected');
		$('#answers').find('#cn').text("Select Character Name").parent().addClass('answer').removeClass('selected');
	};

    helpBox = {}
    helpBox.h2 = function(){
        $('.help-text').removeClass('help-text').addClass('help-text2')
        .find('p').text('Select the characters name');
        $('.help').removeClass('help').addClass('help2');
        
     }
    helpBox.h3 = function(){
        $('.help2').removeClass('help2').addClass('help3')
        $('.help-text2').removeClass('help-text2').addClass('help-text3')
        .find('p').text('Your answers will appear here, click submit when you\'re ready!');
     }
    helpBox.h4 = function(){
        $('#help-box').fadeOut();
        $('.darken').fadeOut();
     }
    
$(document).ready(function(){
    $('#answer-screen').hide();
    $('#ending').hide();
	$('#start').one('click', function(){
		qManager.showQuestion();
		$('#intro').fadeOut(1000);
	});
    
    
    $('#help-box').on('click', 'button', function(){
        var cat = cat;
        if ($('#help-box').hasClass('help'))
        {
            helpBox.h2();
        }
        else if ($('#help-box').hasClass('help2'))
        {
            helpBox.h3();
        }
        else{
            helpBox.h4();
        }
        
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
		qManager.checkAnswer();
		$('#answer-screen').show();
		qManager.removeQuestion();
		qManager.currentNum++;
		qManager.showQuestion();
	});
	$('#next').on('click', function(){
		$(this).parent().parent().fadeOut(1000);
        if(qManager.currentNum == 6){
            $('#ending').show();
            
        }
	});
});