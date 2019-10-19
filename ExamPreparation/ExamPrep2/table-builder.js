function tableBuilder(selector) {

    debugger
    function createTable(columnNames) {
        
        $(selector).html($('<table>').append($('<tr>')));

        for (let columnName of columnNames) {

            $(selector + ' table tr:first').append($('<th>').text(columnName));
        }
        $(selector + ' table tr:first').append($('<th>').text('Action'))
    }

    debugger
    function fillData(dataRows) {
        for(let row of dataRows){
            $(selector+" table").append($('<tr>'));

            for(let data of row){
                $(selector + " table tr:last").append($('<td>').text(data));
            }
            $(selector + " table tr:last").append($('<td>').append($('button').click($(this).parent().parent().remove()).text('Delete')));

        }
    }
debugger
    return {createTable, fillData}
    // TODO: return { … }
}
