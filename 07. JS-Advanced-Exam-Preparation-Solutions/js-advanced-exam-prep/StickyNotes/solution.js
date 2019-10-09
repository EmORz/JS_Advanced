function addSticker() {
    //let $title = $('.title');

    let $title = document.getElementsByClassName('title');
    let $content = document.getElementsByClassName('content');
    debugger
   // let $content = $('.content');
    let $list = $('#sticker-list');

    if ($title.value && $content.value) {
        createNote();   
        reset();
    }

    // function createNote() {
    //     let $li = $('<li>');
    //     $li.addClass('note-content');

    //     let $a = $('<a>');
    //     $a.addClass('button');
    //     $a.text('x');

    //     $a.on('click', () => $li.remove());

    //     let $h = $('<h2>');
    //     $h.text($title.val());

    //     let $p = $('<p>');
    //     $p.text($content.val());

    //     $li.append($a);
    //     $li.append($h);
    //     $li.append($('<hr>'));
    //     $li.append($p);

    //     $list.append($li);
    // }
    
    function createNote() {
        let parsedHtml = $.parseHTML(`<li class="note-content"><a class="button">x</a><h2>${$title.val()}</h2><hr><p>${$content.val()}</p></li>`);
        let $el = $(parsedHtml);
        $el.find('.button').on('click', () => $el.remove());
        $list.append($el);
    }
    
    function reset() {
        $title.val('');
        $content.val('');
    }
}