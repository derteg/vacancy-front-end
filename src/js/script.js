$(function() {
	(function promoTestConfig(){
		var $cont = $('.js-promo-test'),
			$label = $('label', $cont),
			$knob = $(".js-dial"),
			$resultTitle = $('.b-result__text .l-title'),
			$resultText = $('.b-result__text .l-text'),
			triggerVal = 0;

		$(window).on('load resize', doneResizing);

		$knob.knob({
			fgColor: '#ffbe0f',
			dynamicDraw: true,
			lineCap: 'round',
			thickness: '.02',
			readOnly: true,
			skin:'tron',
			bgColor: '#5b4739',
			displayInput:false
		});
		 
		function doneResizing(event){
			var wW = window.innerWidth;

			if(event.type == 'load'){
				$knob.val(0).trigger('change');
				$label.prev('input').prop('checked', false);
			}

			if(wW < 768){
				$knob.trigger('configure', {
					width: '118',
					height: '118'
				});
			} else {
				$knob.trigger('configure', {
					width: '252',
					height: '252'
				});
			}
		}

		$knob.append(function() {
			$knob.parent().parent().find('.b-result__circle-content').text(0+'%');
		});

		function resultInfoTemplates(){
			if(triggerVal <= 10){
				$resultTitle.html('Укажите, что вы умеете');
				$resultText.html('Поставьте слева галочки рядом со своими умениями.');
			} else if(10 < triggerVal && triggerVal <= 50){
				$resultTitle.html('Ваши шансы малы');
				$resultText.html('Но вы можете выслать нам рассказ о себе на <a class="b-lnk b-lnk_yellow" href="mailto:work@nikoland.ru"><span class="l-text">work@nikoland.ru</span></a>. Возможно мы возьмем вас на вырост.');
			} else if(50 < triggerVal && triggerVal <= 75){
				$resultTitle.html('Вы нам подходите');
				$resultText.html('Рассказ о себе, своих достижениях и ссылку на три лучших проекта присылайте на <a class="b-lnk b-lnk_yellow" href="mailto:work@nikoland.ru"><span class="l-text">work@nikoland.ru</span></a>.');
			} else if(75 < triggerVal && triggerVal <= 100){
				$resultTitle.html('У вас отличные шансы');
				$resultText.html('Скорее пишите нам на <a class="b-lnk b-lnk_yellow" href="mailto:work@nikoland.ru"><span class="l-text">work@nikoland.ru</span></a> о себе, своих работах и достижениях');
			}
		}

		$label.click(changeValue);

		function changeValue(event){
			var that = $(this),
				$input = that.prev(),
				myVal = $knob.val(),
				valNew = that.data('test-proc'),
				$numberCont = $knob.parent().parent().find('.b-result__circle-content');

			that.toggleClass('current');
			
			if(that.hasClass('current')){
				$knob.finish().animate({
					value: parseFloat(myVal) + parseFloat(valNew)
				}, {
					duration: 400,
					easing: 'swing',
					progress: function () {
						$(this).val(this.value).trigger('change');
						$knob.append(function() {
							$numberCont.text($knob.val() + '%');
						});

						triggerVal = $knob.val();

						resultInfoTemplates();
					}
				});
			} else {
				$knob.finish().animate({
					value: parseFloat(myVal) - parseFloat(valNew)
				}, {
					duration: 400,
					easing: 'swing',
					progress: function () {
						$(this).val(this.value).trigger('change');

						$knob.append(function() {
							$numberCont.text($knob.val() + '%');
						});

						triggerVal = $knob.val();

						resultInfoTemplates();
					}
				});
			}
		}
	}());
});


$(function($){
	(function bodyScroll(){
		var $btn = $('.js-scroll_btn');

		$btn.click(function(event){
			var $href = $(this).attr('href');

			$('body').animate({
				scrollTop: $($href).offset().top
			}, 600);

			return false;
		});
	}());
});

$(function($){
	(function animateContent(){
		var resizeId,
			$sekshon = $('.js-promo-sect');


			$(window).on('load scroll', doneResizing);

			$(window).resize(function() {
				clearTimeout(resizeId);
				resizeId = setTimeout(doneResizing, 100);
			});
			 
			function doneResizing(){
				var posW = $(window).scrollTop(),
					hW = $(window).height();

				var sec01 = $sekshon.filter('.b-first-promo'),
					sec01Pic = $('.l-pic img', sec01),
					sec01PicPos = sec01Pic.offset().top,
					sec01Text = $('.l-text', sec01),
					sec01TextPos = sec01Text.offset().top,
					sec01Btn = $('.l-btn', sec01),
					sec01BtnPos = sec01Btn.offset().top;

				var sec02 = $sekshon.filter('.b-second-promo'),
					sec02Title = $('.l-title', sec02),
					sec02TitlePos = sec02Title.offset().top,
					sec02Text = $('.l-text', sec02),
					sec02TextPos = sec02Text.offset().top;

				if(sec01Pic.offset().top >= 0){
					sec01Pic.css({
						'opacity': 1
					}).addClass('tada animated');
				}
				if(posW + sec01TextPos - 10 >= sec01TextPos){
					sec01Text
						.css({
							'opacity': 1,
							'-webkit-animation-duration': '1s',
						  	'animation-duration':'1s'					
						}).addClass('bounceInDown animated');
				}
				if(posW + sec01BtnPos - 10 >= sec01BtnPos){
					sec01Btn
						.css({
							'opacity': 1,
							'-webkit-animation-duration': '1s',
							'animation-duration':'1s',
							'-webkit-animation-delay': '.2s',
							'animation-delay':'.2s'
						})
						.addClass('bounceInUp animated')
						.parent().next().css('opacity', 1);
				}



				if(posW + sec02TitlePos/2 >= sec02TitlePos){
					sec02Title.css('opacity', 1).addClass('flipInX animated');
				}
				if(posW + sec02TextPos/2 >= sec02TextPos){
					sec02Text.css('opacity', 1).addClass('bounceInUp animated');
					sec02.addClass('bg-active');
				}
			}


	}());
});