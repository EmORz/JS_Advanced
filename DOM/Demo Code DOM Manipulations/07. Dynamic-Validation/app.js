function validate() {

    debugger
    document.addEventListener("blur", function (e) {
    debugger

        if (
            e.target.value.match(/@/gi) === null ||
            e.target.value.match(/\./gi) === null
        ) {
            e.target.classList.add("error")
        } else {
            e.target.classList.remove("error")
        }
    }, true);
}