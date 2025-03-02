const alarmMenu = document.getElementById("alarm-menu")
const setAlarmButton = document.getElementById("set-alarm-btn")
const closeButton = document.getElementById("close-btn")
const saveAlarmButton = document.getElementById("save-alarm-btn")
const inputTime = document.getElementById("alarm-time").value
const sound = document.getElementById("alarm-sound").value
const vibration = document.getElementById("alarm-vibration").checked
const alarmStatus = document.getElementById("alarm-status")

alarmMenu.style.display = "none"
let alarm = null

function setAlarm() {
    // open alarm menu when button is clicked
    setAlarmButton.addEventListener("click", function() {
        alarmMenu.style.display = "block"
    })
    // close alarm menu when button is clicked
    closeButton.addEventListener("click", function() {
        alarmMenu.style.display = "none"
    })

    saveAlarmButton.addEventListener("click", saveAlarm())
}

// save alarm when checked if everything is set
function saveAlarm() {
    if(inputTime && sound && vibration) {
        alarm = {time: inputTime, sound, vibration}
        alarmStatus.textContent = `Alarm set for: ${inputTime}`
        alert(`Alarm set for: ${inputTime}`)
    }
}

setInterval(1000, setAlarm)
setAlarm()