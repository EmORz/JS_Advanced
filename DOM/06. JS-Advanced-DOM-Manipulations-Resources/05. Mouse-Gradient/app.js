function attachGradientEvents() {
 

    let width = parseInt(getComputedStyle(document.all.gradient).width);

    document.all.gradient.addEventListener('click', function (e) {
        document.all.result.innerHTML = `${Math.floor(e.offsetX/ width *100)}%`;
    })
}