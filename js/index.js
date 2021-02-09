// function readMore() {
//     var dots=document.getElementById("dots")
//     var more = document.getElementById("more")
//     var btn = document.getElementById("btn")
//
//     if (dots.style.display==="none") {
//         dots.style.display="inline"
//         btn.innerHTML = "Показать ещё"
//         more.style.display="none"
//     } else {
//         dots.style.display="none"
//         btn.innerHTML = "Скрыть"
//         more.style.display="inline"
//     }-
// }
function readMore() {
    let btn = document.getElementById("btn");
    let moduleBlockMore = document.getElementById('moduleBlockMore');
    if (getComputedStyle(moduleBlockMore).display == 'none') {
        moduleBlockMore.style.display = 'block';
        btn.innerHTML = 'Скрыть';
    } else {
        moduleBlockMore.style.display = 'none';
        btn.innerHTML = 'Показать ещё';
    }
}

function selectTheme() {
    let buttonSelect = document.getElementById('buttonSelect');
    let filterSelect = document.getElementById('filterSelect');
    if (getComputedStyle(filterSelect).display == 'none') {
        buttonSelect.style.borderBottomLeftRadius = '0';
        buttonSelect.style.borderBottomRightRadius = '0';
        filterSelect.style.display = 'block';

    } else {
        buttonSelect.style.borderBottomLeftRadius = '10px';
        buttonSelect.style.borderBottomRightRadius = '10px';
        filterSelect.style.display = 'none';
    }
}


function readMoreTwo() {
    let btnTwo = document.getElementById("btnTwo");
    let moduleBlockMoreTwo = document.getElementById('moduleBlockMoreTwo');
    if (getComputedStyle(moduleBlockMoreTwo).display == 'none') {
        moduleBlockMoreTwo.style.display = 'block';
        btnTwo.innerHTML = 'Скрыть';
    } else {
        moduleBlockMoreTwo.style.display = 'none';
        btnTwo.innerHTML = 'Показать ещё';
    }
}




