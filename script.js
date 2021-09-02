window.addEventListener('DOMContentLoaded', () => {

})

function execute(code) {
    if (code.includes('http')) {
        fetch(document.getElementById('url').value, {
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

function main(){
    execute(document.getElementById('url').value)
}
