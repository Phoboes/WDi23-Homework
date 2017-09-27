//debugger;
let checkingTotal = 0;
let savingsTotal = 0;
$('#checking-deposit').click(function() {
	checkingTotal += parseInt($('#checking-amount').val());
	$('#checking-balance').html(`$${checkingTotal}`);
});

$('#checking-withdraw').click(function() {
	checkingTotal -= parseInt($('#checking-amount').val());
	$('#checking-balance').html(`$${checkingTotal}`);
	let difference = parseInt($('#checking-amount').val()) - checkingTotal;
	if (parseInt($('#checking-amount').val()) > checkingTotal) {
		checkingTotal += difference;
		savingsTotal -= difference;
	}
});

$('#savings-deposit').click(function() {
	savingsTotal += parseInt($('#savings-amount').val());
	$('#savings-balance').html(`$${savingsTotal}`);
});

$('#savings-withdraw').click(function() {
	savingsTotal -= parseInt($('#savings-amount').val());
	$('#savings-balance').html(`$${savingsTotal}`);
	let difference = parseInt($('#savings-amount').val()) - savingsTotal;
	if (parseInt($('#savings-amount').val()) > checkingTotal) {
		checkingTotal -= difference;
		savingsTotal += difference;
	}
});

if ($('#checking-balance').text() === '$0') {
	$('#checking-balance').addClass('zero'); 	
} else if ($('#checking-balance').text() !== '$0') {
	$('#checking-balance').removeClass('zero');
}

if (savingsTotal === 0) {
	$('#savings-balance').addClass('zero');
} else if (savingsTotal !== 0) {
	$('#savings-balance').removeClass('zero');
}


/*
if (parseInt($('#checking-amount').val()) > checkingTotal) {
	var difference = parseInt($('#checking-amount').val()) - checkingTotal;
	checkingTotal += difference;
	savingsTotal -= difference;
}

*/
