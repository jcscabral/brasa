
var formatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  //currency: 'USD',
  minimumFractionDigits: 2,
});

function formatMoney(text){		
	return formatter.format(text);
}
