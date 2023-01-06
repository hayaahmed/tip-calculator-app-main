let tipspersent = document.querySelectorAll(".discounts button");
let billinput = document.querySelector(".input1 input");
let peopleNum = document.querySelector(".input2 .peopleinput");
let customTip = document.querySelector(".custom");
let totalnum = document.querySelector(".total");
let tipamout = document.querySelector(".tip-amount");
let theZeroError = document.querySelector(".err");
let reset = document.querySelector(".reset");
tipspersent.forEach((tip) => {
    tip.addEventListener("click", (e) => {
        e.preventDefault();
        let tipval = tip.innerHTML;
        let addedbilltip = ((tipval.split("%").join("")) / 100) * (billinput.value);
        if (peopleNum.value === "0") {
            peopleNum.classList.add("error");
            theZeroError.style.display = "block";
        }
        else {
            if (theZeroError.style.display === "block") {
                theZeroError.style.display = "none";
                peopleNum.classList.remove("error");
            }
            let tipperperson = (parseFloat(addedbilltip) / peopleNum.value).toFixed(2);
            tipamout.innerHTML = `$${tipperperson}`;
            let totalperperson = ((parseFloat(addedbilltip) + parseFloat(billinput.value)) / peopleNum.value).toFixed(2);
            totalnum.innerHTML = `$${totalperperson}`;
        }
        for (let i = 0; i < tipspersent.length; i++) {
            tipspersent[i].classList.remove("pressed");
        }
        tip.classList.add("pressed");
    });

});
customTip.addEventListener("keyup", () => {
    if (customTip.value !== "") {
        let addedbilltip = (((customTip.value).split("%").join("")) / 100) * (billinput.value);
        if (peopleNum.value === "0") {
            peopleNum.classList.add("error");
            theZeroError.style.display = "block";
        }
        else {
            if (theZeroError.style.display === "block") {
                theZeroError.style.display = "none";
                peopleNum.classList.remove("error");
            }
            let tipperperson = (parseFloat(addedbilltip) / peopleNum.value).toFixed(2);
            tipamout.innerHTML = `$${tipperperson}`;
            let totalperperson = ((parseFloat(addedbilltip) + parseFloat(billinput.value)) / peopleNum.value).toFixed(2);
            totalnum.innerHTML = `$${totalperperson}`;
        }
    }
})
reset.addEventListener("click", () => {
    tipamout.innerHTML = `$0.00`;
    totalnum.innerHTML = `0.00`;
})
