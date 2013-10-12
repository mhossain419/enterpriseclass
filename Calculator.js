var calculator = (function() {

    function factorial(n) {
        if (n < 1) {
            return 1;
        }

        return n * factorial(n - 1);
    }

    return {
        plouffBig : function(n) {
            var pi = 0;
            var k = 0;
            while (k < n) {
                pi += (1 / Math.pow(16, k))
                        * ((4 / (8 * k + 1)) - (2 / (8 * k + 4))
                                - (1 / (8 * k + 5)) - (1 / (8 * k + 6)));
                k += 1;
            }
            return pi;
        },

        bellardBig : function(n) {
            var pi = 0;
            var k = 0;
            while (k < n) {
                pi += (Math.pow(-1, k) / Math.pow(1024, k))
                        * (256 / (10 * k + 1) + 1 / (10 * k + 9) - 64
                                / (10 * k + 3) - 32 / (4 * k + 1) - 4
                                / (10 * k + 5) - 4 / (10 * k + 7) - 1 / (4 * k + 3));
                k += 1;
            }
            pi = pi * 1 / Math.pow(2, 6);
            return pi;
        },

        calculatePI : function(max) {
            var numbers = [];
            var primes = [];
            var limit = Math.sqrt(max);

            for ( var i = 0; i < max; i++) {
                numbers.push(true);
            }

            for ( var i = 2; i <= limit; i++) {
                if (numbers[i]) {
                    for ( var j = i * i; j < max; j += i) {
                        numbers[j] = false;
                    }
                }
            }

            for ( var i = 2; i < max; i++) {
                if (numbers[i]) {
                    primes.push(i);
                }
            }

            return primes;
        }
    };
}());

(function() {
    console.log("Plouf Big: " + calculator.plouffBig(1000));
    console.log("Bellard Big: " + calculator.bellardBig(1000));
    console.log("PI: " + calculator.calculatePI(10000));
})();
