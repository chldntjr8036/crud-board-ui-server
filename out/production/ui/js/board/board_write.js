document.addEventListener('DOMContentLoaded', function () {
    //자리수 맞추기 formatter
    let format = function(num) {
        if(num/10 < 1) {
            return String("0"+num);
        }
        return String(num);
    }

    //글쓰기 버튼 이벤트 처리
    $('#writeButton').click(function () {

        let date = new Date();
        let dateTime = date.getFullYear()+'-'
            +format(date.getMonth())+'-'
            +format(date.getDay())+'T'
            +format(date.getHours())+':'
            +format(date.getMinutes())+':'
            +format(date.getSeconds());

        let dataObj = {
            'title':$('#title').val(),
            'userName':$('#userName').val(),
            'password':$('#password').val(),
            'contents':$('#contents').val(),
            'dateTime':dateTime
        };
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/article',
            dataType: 'JSON',
            contentType: 'application/json',
            data: JSON.stringify(dataObj),
            success: function (article) {
                window.location.replace('/ui/board/board_article.html?id='+article['id']);
            },
            error: function (e) {
                window.alert(e.stackTrace);
            }
        });

    });

    //목록으로 이등하기 이벤트 처리
    $('#goToListButton').click(function () {
        window.location.href = '/ui/board/board_main.html';
    });
});