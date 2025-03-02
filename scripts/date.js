document.addEventListener("DOMContentLoaded", function() {
    function updateDate() {
        let date = new Date()
        let day = date.getDate()
        let monthNumber = date.getMonth()
        let year = date.getFullYear()

        let months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]

        let monthName = months[monthNumber]

        document.getElementById("day").textContent = day
        document.getElementById("month").textContent = monthName
        document.getElementById("year").textContent = year
        }

        updateDate()
        setInterval(updateDate, 1000)
})