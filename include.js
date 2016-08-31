function Include() {
	var scripts = [].slice.call(arguments),
		fn = scripts[scripts.length - 1].call ? scripts.pop() : !1,
		count = scripts.length,
		doc = document;

	scripts.forEach(function(src, script) {
		script = doc.createElement('script');
		script.async = !0;
		script.onload = script.onerror = script.onreadystatechange = loaded;
		script.src = src;
		doc.head.appendChild(script);
	});

	function loaded() {
		var state = this.readyState;
		if (!state || /ded|te/.test(state))
			if (!(--count) && fn)
				fn();
	}
}
