 <script>
$(document).ready(function() {

      //миллисекунды зацикливания вызова функции ниже
	setInterval (blinke_funk, 150);

	function blinke_funk() { 
		var blinke_speed = 150; //миллисекунды анимации

		$("#div_block1").fadeIn(blinke_speed).fadeOut(blinke_speed);
		$("#div_block2").fadeIn(blinke_speed).fadeOut(blinke_speed);
	}

});
</script>