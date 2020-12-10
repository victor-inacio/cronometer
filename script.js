const cronometer = document.querySelector('div')
const button = document.querySelector('button')

button.addEventListener('click', e => {

    turnOnCronometer()

})

turnOnCronometer()

function turnOnCronometer() {

    const initTime = Date.now()

    setInterval(() => {
        const newTime = Date.now()

        const elapsedTimeInMiliseconds = newTime - initTime

        const elapsedSeconds = Math.floor(elapsedTimeInMiliseconds / 1000) % 60
        const elapsedMinutes = Math.floor(elapsedTimeInMiliseconds / 1000 / 60) % 60
        const elapsedHours = Math.floor(elapsedTimeInMiliseconds / 1000 / 60 / 60) 

        cronometer.innerHTML = `${formattedNumber(elapsedHours)}:${formattedNumber(elapsedMinutes)}:${formattedNumber(elapsedSeconds)}`
    }, 1000)

}

function formattedNumber(number) {

    return number < 10 ? '0' + number : number

}
