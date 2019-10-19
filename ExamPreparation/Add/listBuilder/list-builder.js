function listBuilder(selector){

    return {
        createNewList: function(){
            $(selector).html($('<ul>'));
        },
        addItem: function (item){
            $(selector+ " ul")
            .append($('<li>').text(item)
            .append($('<button>').text('Up').click(()=>{
                $(this).parent().insertBefore($(this).parent().prev())
            })))
            .append($('<button>').text('Down').click(()=>{
                $(this).parent().insertAfter($(this).parent().next())
            }))
        }
    }

}