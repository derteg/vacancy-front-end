$(function() {
	var $cont = $('.js-promo-test'),
		$label = $('label', $cont),
		$knob = $(".js-dial");

	$knob.knob({
		width: '252',
		height: '252',
		fgColor: '#ffbe0f',
		dynamicDraw: true,
		lineCap: 'round',
		thickness: '.02',
		readOnly: true,
		skin:'tron',
		bgColor: '#5b4739',
		displayInput:false
	});

	$knob.append(function() {
		$knob.parent().parent().find('.b-result__circle-content').text(0+'%');
	});

	$label.click(function(){
		var that = $(this),
			myVal = $knob.val(),
			valNew = that.data('test-proc');
	
		if(that.parent('.b-promo__test-row').find('input').prop('checked') === false){
			$knob.val(parseFloat(myVal) + parseFloat(valNew)).trigger('change');
		} else {
			$knob.val(parseFloat(myVal) - parseFloat(valNew)).trigger('change');
		}

		$knob.append(function() {
			$knob.parent().parent().find('.b-result__circle-content').text($knob.val() + '%');
		});
	});
});