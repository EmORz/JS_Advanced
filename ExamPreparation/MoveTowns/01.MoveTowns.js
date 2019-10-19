function move(num) {
    //debugger
    let selected = $('#towns option:selected');
    //debugger
    //let action = num > 0? moveDown: moveUp;

    if(num===-1){

        selected.insertBefore(selected.prev());
    }if(num === +1){

        selected.insertAfter(selected.next());

    }
    // action(selected);
    // function moveDown(option) {
    //     $(option).insertAfter(option.next())
    // }

    // function moveUp(option) {
    //     $(option).insertBefore(option.prev())
        
    // }

    
}