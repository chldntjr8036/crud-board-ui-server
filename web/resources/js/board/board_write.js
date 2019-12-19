document.addEventListener('DOMContentLoaded', function () {
    //글쓰기 버튼 이벤트 처리
    $('#writeButton').click(function () {
        let dataObj = {
            'title':$('#title').val(),
            'userName':$('#userName').val(),
            'password':$('#password').val(),
            'contents':$('#contents').val()
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