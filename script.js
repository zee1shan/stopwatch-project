let sec = document.querySelector(".sec");
let ten = document.querySelector(".tens")
let min = document.querySelector(".min")
let watchimg = document.querySelector(".watch img");
let strt = document.querySelector(".button-start");
let stop = document.querySelector(".button-stop");
let reset = document.querySelector(".button-reset");
let tmilisec = 0;
let tsec = 0;
let minute = 0;
let strtid;
// to start timer
strt.addEventListener("click", () => {
    if (strtid == undefined) {

        watchimg.classList.add("animate")
        watchimg.classList.add("play")
        strtid = setInterval(() => {
            tmilisec++;
            if (tmilisec < 9) {
                ten.innerHTML = '0' + tmilisec;
            }
            if (tmilisec > 9) {
                ten.innerHTML = tmilisec;
            }
            if (tmilisec > 99) {
                tsec++;
                tmilisec = 0;
            }
            if (tsec < 9) {
                sec.innerHTML = '0' + tsec;
            }
            if (tsec > 9) {
                sec.innerHTML = tsec;
            }
            if (tsec >= 60) {
                minute++;
                tsec = 0;
                tmilisec = 0;
            }
            if (minute < 9) {
                min.innerHTML = '0' + minute;
            }
            if (minute > 9) {
                min.innerHTML = minute;
            }
        }, 10);



    }
})
// to stop timer
stop.addEventListener('click', () => {

    clearInterval(strtid);
    watchimg.classList.remove("play")
    watchimg.classList.add("pause")
    strtid = undefined

})
// to reset timer
reset.addEventListener("click", () => {
    clearInterval(strtid)
    sec.innerHTML = "00";
    ten.innerHTML = "00";
    min.innerHTML = "00";
    tmilisec = 0;
    tsec = 0;
    minute = 0;
    watchimg.classList.remove("animate")
    watchimg.classList.remove("play")
    strtid = undefined
})
