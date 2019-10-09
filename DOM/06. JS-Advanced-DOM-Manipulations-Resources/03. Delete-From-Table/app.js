function deleteByEmail() {
    //console.log('TODO:...');
    //    Email: <input type="text" name="email" />
    debugger
    let input = document.getElementsByName('email')[0];
    let emailDel = input.value;

    let customers = document.querySelectorAll('#customers tr');
    let result = document.getElementById('result');

    let check = true;
    for (let index = 0; index < customers.length; index++) {

        if (customers[index].lastElementChild.innerHTML === emailDel.trim()) {
            customers[index].parentElement.removeChild(customers[index]);
            result.innerHTML = 'Deleted';
            check = false;
            break;
        }

    }
    if (check) {
        result.innerHTML = 'Not found.';
    }


}