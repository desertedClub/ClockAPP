setInterval(setAlarm, 1000)

const alarmMenu = document.getElementById("alarm-menu")
const setAlarmButton = document.getElementById("set-alarm-btn")
const closeButton = document.getElementById("close-btn")
const saveAlarmButton = document.getElementById("save-alarm-btn")
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

    // saveAlarm() passes result, saveAlarm passes the function itself
    saveAlarmButton.addEventListener("click", saveAlarm)
}

// save alarm when checked if everything is set
function saveAlarm() {
    const inputTime = document.getElementById("alarm-time").value
    const sound = document.getElementById("alarm-sound").value
    const vibration = document.getElementById("alarm-vibration").checked

    if(inputTime && sound) { // vibration can be tru or false
        alarm = {time: inputTime, sound, vibration}
        alert(`Alarm set for: ${inputTime}`)
        alarmStatus.textContent = `Alarm set for: ${inputTime}`
        alarmMenu.style.display = "none"
    } else alert("Please, fill in all alarm details.")
}

function checkAlarm() {
    if(alarm) {
        const now = new Date()
        const nowTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
        if(nowTime === alarm.time) {
            alert("Alarm ringing!")

            //const audio = new Audio(alarm.sound)
            //audio.play()

            if(alarm.vibration && navigator.vibrate)
                navigator.vibrate([200,100,200])

            alarm = null
            alarmStatus.textContent = "Alarm: not set"
        }
    }
}

setInterval(checkAlarm, 1000)

setAlarm()