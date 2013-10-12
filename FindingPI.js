var calculatePI = (function () {

    function factorial (n) {
        if (n < 1) {
            return 1;
        }

        return n * factorial(n - 1);
    }

    return {
        plouffBig : function (n) {
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

        bellardBig : function (n) {
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

        chudnovskyBig : function (n) {
            var pi = 0;
            var k = 0;
            while (k < n) {
                pi += Math.pow(-1, k)
                        * (factorial(6 * k)
                                / (Math.pow(factorial(k), 3) * (factorial(3 * k)))
                                * (13591409 + 545140134 * k) / Math.pow(640320,
                                (3 * k)));
                k += 1;
            }
            pi = pi * Math.sqrt(10005) / 4270934400;
            pi = Math.pow(pi, -1);
            return pi;
        }
    };
}());

(function () {
    for ( var i = 0; i < 20; i++) {
        console.log("Iteration number " + i + " " + calculatePI.plouffBig(i)
                + " " + calculatePI.bellardBig(i) + " "
                + calculatePI.chudnovskyBig(i));
    }
})();
