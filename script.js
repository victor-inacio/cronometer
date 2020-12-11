const cronometer = document.querySelector('div')
const startCronometerBtn = document.querySelector('.startCronometer')
const pauseCronometerBtn = document.querySelector('.pauseCronometer')
const stopCronometerBtn = document.querySelector('.stopCronometer')

startCronometerBtn.addEventListener('click', e => {

    turnOnCronometer()
    pauseCronometerBtn.classList.remove('hide')
    stopCronometerBtn.classList.remove('hide')
    startCronometerBtn.classList.add('hide')

})

pauseCronometerBtn.addEventListener('click', e => {

    pauseCronometer()
    pauseCronometerBtn.classList.add('hide')
    startCronometerBtn.classList.remove('hide')

})

stopCronometerBtn.addEventListener('click', e => {

    stopCronometer()
    pauseCronometerBtn.classList.add('hide')
    stopCronometerBtn.classList.add('hide')
    startCronometerBtn.classList.remove('hide')

})

const cronometerData = {
    elapsedTimeInSeconds: 0,
    cronometerLoop: null
}

function turnOnCronometer() {
    
    const cronometerLoop = setInterval(() => {
        cronometerData.elapsedTimeInSeconds += 1

        const elapsedSeconds = Math.floor(cronometerData.elapsedTimeInSeconds) % 60
        const elapsedMinutes = Math.floor(cronometerData.elapsedTimeInSeconds / 60) % 60
        const elapsedHours = Math.floor(cronometerData.elapsedTimeInSeconds / 60 / 60) 
        
        cronometer.innerHTML = formattedNumber(elapsedHours) + ':' + 
                                formattedNumber(elapsedMinutes) + ':' +
                                formattedNumber(elapsedSeconds)
        
        cronometerData.cronometerLoop = cronometerLoop
    }, 1000)
    cronometerData.cronometerLoop = cronometerLoop
}

function pauseCronometer() {
    clearInterval(cronometerData.cronometerLoop)
}

function stopCronometer() {
    clearInterval(cronometerData.cronometerLoop)
    cronometerData.elapsedTimeInSeconds = 0
    cronometer.innerHTML = '00:00:00'
}

function formattedNumber(number) {

    return number < 10 ? '0' + number : number

}
