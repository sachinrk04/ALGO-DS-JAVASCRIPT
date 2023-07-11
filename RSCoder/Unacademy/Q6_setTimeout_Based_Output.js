// setTimeout Based Output

// use var
function a_var() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log("i-a_var->", i); // 3, 3, 3
        }, i * 1000);
    }
}

// a_var()

// use let
function a_let() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log("i-a_let->", i); // 0, 1, 2
        }, i * 1000);
    }
}

// a_let()

// print 0, 1, 3 with var

function a_closer() {

    for (var i = 0; i < 3; i++) {
        function closer(value) {
            setTimeout(function log() {
                console.log("i-a_closer->", value); // 0, 1, 2
            }, i * 1000);
        }
        closer(i)
    }
}

a_closer()