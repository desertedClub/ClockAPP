document.addEventListener("DOMContentLoaded", function() {
    setInterval(showDate, 1000)
    showDate()
})

var months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
]

function showDate() {
    let date = new Date()
    let day = date.getDate()
    let monthNumber = date.getMonth()
    let year = date.getFullYear()

    let monthName = months[monthNumber]

    document.getElementById("day").textContent = day
    document.getElementById("month").textContent = monthName
    document.getElementById("year").textContent = year
}