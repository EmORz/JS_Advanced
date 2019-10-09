function validate() {


    document.addEventListener('blur', function (e) {
        if (e.target.value.match(/@/)===null
        || this.readyState.target.value.match(/\./)===null) {
            e.target.classList.add('error');
        }else{
            e.target.classList.remove('error');
        }
    }, true)
}