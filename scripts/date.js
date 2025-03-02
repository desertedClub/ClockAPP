const d = document.getElementById("day")
const m = document.getElementById("month")
const y = document.getElementById("year")
const months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
]

function showDate() {
    let date = new Date()
    let day = date.getDay()
    let monthNumber = date.getMonth()
    let year = date.getYear()

    let monthName = month[monthNumber]

    d.textContent = day
    m.textContent = monthName
    y.textContent = year
}

setInterval(1000, showDate)
showDate()