document.addEventListener('DOMContentLoaded', function () {
    $('#btn').click(function () {
       $.ajax({
           type: 'GET',
           url: 'http://localhost:8080/hello',
           success: function (result) {
               console.log(result);
               let p = document.getElementById('result');
               p.textContent = result;
           }
       });
    });

    $('#btn2').click(function () {
        $.ajax({
                type: 'POST',
                url: "http://localhost:8080/hello",
                success: function (result) {
                    console.log(result);
                    let p = document.getElementById('result');
                    p.textContent = result;
                },
                error: function (e) {
                    console.log(e);
                    $('#result').text(e);
                }
            }
        );
    });


    let val = $('#text').val();
    console.log(val);
});