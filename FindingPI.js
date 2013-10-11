(function() {
	function factorial(n) {
		if (n < 1)
			return 1;
		else
			return n * factorial(n - 1);
	}

	function plouffBig(n) {
		var pi = 0;
		var k = 0;
		while (k < n) {
			pi += (1 / (16 ^ k))
					* ((4 / (8 * k + 1)) - (2 / (8 * k + 4))
							- (1 / (8 * k + 5)) - (1 / (8 * k + 6)));
			k += 1;
		}
		return pi;
	}

	function bellardBig(n) {
		pi = 0;
		k = 0;
		while (k < n) {
			pi += ((-1) ^ k / (1024 ^ k))
					* ((256) / (10 * k + 1) + (1) / (10 * k + 9) - (64)
							/ (10 * k + 3) - (32) / (4 * k + 1) - (4)
							/ (10 * k + 5) - (4) / (10 * k + 7) - (1) / (4 * k + 3));
			k += 1;
		}
		pi = pi * 1 / (2 ^ 6);
		return pi;
	}

	function chudnovskyBig(n) {
		pi = 0;
		k = 0;
		while (k < n) {
			pi += ((-1) ^ k)
					* ((factorial(6 * k))
							/ ((factorial(k) ^ 3) * (factorial(3 * k)))
							* (13591409 + 545140134 * k) / (640320 ^ (3 * k)));
			k += 1;
		}
		pi = pi * (10005).sqrt() / 4270934400;
		pi = pi ^ (-1);
		return pi;
	}

	function printResult() {
		console.print("\t\t\t Plouff \t\t Bellard \t\t\t Chudnovsky");
		for ( var i = 0; i < 20; i++) {
			console.print("Iteration number " + i + " " + plouffBig(i) + " "
					+ bellardBig(i) + " " + chudnovskyBig(i));
		}
	}
})();