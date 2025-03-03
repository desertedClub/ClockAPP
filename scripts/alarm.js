setInterval(setAlarm, 1000)

const alarmMenu = document.getElementById("alarm-menu")
const setAlarmButton = document.getElementById("set-alarm-btn")
const closeButton = document.getElementById("close-btn")
const saveAlarmButton = document.getElementById("save-alarm-btn")
const stopAlarmButton = document.getElementById("stop-alarm-btn")
const alarmStatus = document.getElementById("see-alarm-status")
const alarmAlertBox = document.getElementById("alarm-alert")
const alertTitle = document.getElementById("alert-title")
const alertInfo = document.getElementById("alert-info")

alarmMenu.style.display = "none"
stopAlarmButton.style.display = "none"
alarmAlertBox.style.display = "none"
let alarm = null
let audio = null

function setAlarm() {
    // open alarm menu when button is clicked
    setAlarmButton.addEventListener("click", function() {
        alarmMenu.style.display = "block"
        setAlarmButton.style.display = "none"
    })
    // close alarm menu when button is clicked
    closeButton.addEventListener("click", function() {
        alarmMenu.style.display = "none"
        setAlarmButton.style.display = "block"
    })

    // saveAlarm() passes result, saveAlarm passes the function itself
    saveAlarmButton.addEventListener("click", saveAlarm)
}

// save alarm when checked if everything is set
function saveAlarm() {
    const inputTime = document.getElementById("alarm-time").value
    const sound = document.getElementById("alarm-sound").value
    const vibration = document.getElementById("alarm-vibration").checked

    if(inputTime && sound) { // vibration can be true or false
        alarm = {time: inputTime, sound, vibration}
        alarmStatus.textContent = `Alarm set for: ${inputTime}`
        alarmMenu.style.display = "none"
        setAlarmButton.style.display = "block"
    } else alert("Please, fill in all alarm details.")
}

function checkAlarm() {
    if(alarm) {
        const now = new Date()
        // padstart(2, '0') - length 2, starts with 0
        const nowTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
        if(nowTime === alarm.time) {
            const audio = new Audio(alarm.sound)
            audio.loop = true
            audio.play()

            if(alarm.vibration && navigator.vibrate)
                navigator.vibrate([200,100,200])

            alarm = null
            alarmStatus.textContent = "Alarm: not set"
            alarmAlertBox.style.display = "block"
            alertTitle.style.display = "block"
            alertInfo.style.display = "block"
            stopAlarmButton.style.display = "block"

            stopAlarmButton.addEventListener("click", function() {
                if(audio) audio.pause()
                if(navigator.vibrate)
                    navigator.vibrate(0)

                stopAlarmButton.style.display = "none"
                alarmAlertBox.style.display = "none"
            })
        }
    }   
}

setInterval(checkAlarm, 1000)
setAlarm()