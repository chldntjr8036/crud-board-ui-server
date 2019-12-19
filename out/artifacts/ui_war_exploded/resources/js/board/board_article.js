document.addEventListener('DOMContentLoaded', function () {
    let currentURI = document.documentURI;
    let cutpoint = currentURI.search('id');
    let id = currentURI.slice(cutpoint+3, currentURI.length);
    // console.log(id);

    //현재 페이지에 해당하는 게시글 정보 요청
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/articles/'+id,
        success: function (article) {
            // console.log(article);
            for (let key in article){
                // console.log(key);
                if(key === 'password') continue;
                $('#'+key).val(article[key]);
            }
        }
    });

    //update 버튼 클릭시 이벤트
    $('#updateButton').click(function () {
        window.location.href='/ui/board/board_update.html?id='+id; //페이지 이동
    });

    //delete 버튼 클릭시 이벤트
    $('#deleteButton').click(function () {
        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:8080/articles/'+id,
            success: function () {
                window.location.href = '/ui/board/board_main.html';
            }
        });
    });

    //목록으로 버튼 이벤트 처리
    $('#goToListButton').click(function () {
        window.location.href = '/ui/board/board_main.html';
    });

});