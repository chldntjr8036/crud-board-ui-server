document.addEventListener('DOMContentLoaded', function () {
    let currentURI = document.documentURI;
    let cutpoint = currentURI.search('id');
    let id = currentURI.slice(cutpoint+3, currentURI.length);
    // console.log(id);

    //자리수 맞추기 formatter
    let format = function(num) {
        if(num/10 < 1) {
            return String("0"+num);
        }
        return String(num);
    }

    let date = new Date();
    let dateTime = date.getFullYear()+'-'
        +format(date.getMonth())+'-'
        +format(date.getDay())+'T'
        +format(date.getHours())+':'
        +format(date.getMinutes())+':'
        +format(date.getSeconds());

    //현재 페이지에 해당하는 게시글 정보 요청
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/articles/'+id,
        success: function (article) {
            // console.log(article);
            for (let key in article){
                // console.log(key);
                $('#'+key).val(article[key]);
            }
        }
    });

    // 수정하기 버튼 클릭시 이벤트
    $('#updateButton').click(function () {
        let titleVal = $('#title').val();
        let contentsVal = $('#contents').val();
        let userNameVal = $('#userName').val();

        let newArticle = {
            'title': titleVal,
            'contents':contentsVal,
            'userName':userNameVal,
            'dateTime':dateTime
        };

        $.ajax({
            type: 'PUT',
            url: 'http://localhost:8080/articles/'+id,
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(newArticle),
            success: function (article) {
                window.location.href = '/ui/board/board_article.html?id='+id;
            },
            error: function (e) {
                console.log('error : ' + e.stackTrace);
            }
        });
    });

    //목록으로 버튼 클릭시 이벤트
    $('#goToListButton').click(function () {
        window.location.href = '/ui/board/board_main.html';
    })

});