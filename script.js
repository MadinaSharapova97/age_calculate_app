const day = document.querySelector("#day"),
    month = document.querySelector("#month"),
    year = document.querySelector("#year"),
    dd = document.querySelector("#dd"),
    mm = document.querySelector("#mm"),
    yy = document.querySelector("#yy"),
    icon = document.querySelector("#icon"),
    err = document.getElementsByClassName("error"),
    label = document.getElementsByTagName("label")
icon.addEventListener("click", () => {
    let date = new Date()
    let d2 = date.getDate()
    let m2 = 1 + date.getMonth()
    let y2 = date.getFullYear()
    let monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    function changeTextColor(){
        day.textContent = "--"
        month.textContent = "--"
        year.textContent = "--"
        dd.style.border = "2px solid hsl(0, 100%, 67%)"
        mm.style.border = "2px solid hsl(0, 100%, 67%)"
        yy.style.border = "2px solid hsl(0, 100%, 67%)"
        label[0].style.color = "hsl(0, 100%, 67%)"
        label[1].style.color = "hsl(0, 100%, 67%)"
        label[2].style.color = "hsl(0, 100%, 67%)"
    }

    if (dd.value !== "" || mm.value !== "" || yy.value !== "") {
        if (dd.value > d2) {
            d2 = d2 + monthArr[m2 - 1]
            m2 = m2 - 1
        }
        if (mm.value > m2) {
            m2 = m2 + 12
            y2 = y2 - 1
        }
        let d = d2 - dd.value
        let m = m2 - mm.value
        let y = y2 - yy.value

        day.textContent = d
        month.textContent = m
        year.textContent = y

    } else {
        changeTextColor()
        err[0].textContent = "This field is required"
        err[1].textContent = "This field is required"
        err[2].textContent = "This field is required"
    }
    if (dd.value > 31) {
        err[0].textContent = "Must be a valid date"
        err[0].style.color = "hsl(0, 100%, 67%)"
        changeTextColor()
    }
    if (mm.value > 12) {
        err[1].textContent = "Must be a valid month"
        err[1].style.color = "hsl(0, 100%, 67%)"
        changeTextColor()
    }
    if (yy.value > y2) {
        err[2].textContent = "Must be in the past"
        err[2].style.color = "hsl(0, 100%, 67%)"
        changeTextColor()
    }

})
