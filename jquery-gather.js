var keyValue = function(key, value) {
	var o = {};
	o[key] = value;
	return o;
};

var getValue = function(el) {
	// if it's a checkbox, return 1 or 0
	var t = el.attr("type");
	return t == "checkbox" || t == "radio" ?
		(el.is(":checked") ? 1 : 0) : el.val();
};

$.fn.gather = function() {

	var formData = $("select[name], input[name], textarea[name]", this)
		.filter(function() { 
			return !$(this).attr('data-gather-ignore');
		})
		.map(function() {
			return keyValue($(this).attr("name"), getValue($(this)));
		})
		.toArray();

	return formData;
};