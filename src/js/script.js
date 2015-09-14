$(function() {
	var $cont = $('.js-promo-test'),
		$label = $('label', $cont);

	$label.click(function(){
		var that = $(this),
			valNew = that.data('test-proc'),
			val = $(".js-dial").val();

		if(that.prev().prop('checked') === false){
			$(".js-dial").val(parseFloat(val) + parseFloat(valNew)).trigger('change');
		} else {
			$(".js-dial").val(parseFloat(val) - parseFloat(valNew)).trigger('change');
		}
	});

	$(".js-dial").knob({
		width: '252px',
		fgColor: '#ffbe0f',
		thickness: '.02',
		readOnly: true,
		inputColor: '#ffbe0f',
		font: 'bebas_neuebold',
		bgColor: '#5b4739'
	});
});