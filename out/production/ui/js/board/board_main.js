
document.addEventListener('DOMContentLoaded', function () {
    //글 리스트 데이터 조회
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/articles',
        success: function (results) {
            let tbody = document.getElementById('board_body');
            //최적화여지있음. html이 한번만 갱신되도록.
            for (let result of results) {
                let tr = document.createElement('tr');

                for(let prop in result) {

                    if(prop === 'password' || prop === 'contents') {
                        continue;
                    }

                    let value = result[prop];
                    let td = document.createElement('td');
                    let text = document.createTextNode(value);

                    td.appendChild(text);
                    if(prop === 'title'){
                        let anchor = document.createElement('a');
                        anchor.appendChild(td);
                        tr.appendChild(anchor);
                        anchor.href = 'http://localhost:9000/ui/board/board_article.html?id='+result['id'];
                        continue;
                    }
                    tr.appendChild(td);
                }

                tbody.appendChild(tr);
            }
        },
        error: function(e){
            console.log(e.stackTrace);
        }
    });

    //글쓰기 버튼 클릭시 이벤트
    $('#writeButton').click(function () {
        console.log('click');
        window.location.href = '/ui/board/board_write.html';
    });
});