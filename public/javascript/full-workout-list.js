let time = 0;
const timeDisplay = document.querySelector('.time');
const finishBtn = document.querySelector('.finishBtn');


const workoutTimer = setInterval(() => {
    time++;
    let hour = Math.floor(time / 3600);
    let minute = Math.floor((time - hour * 3600) / 60);
    let seconds = time - (hour * 3600 + minute * 60);
    timeDisplay.textContent = `Current workout time: ${hour}:${minute}:${seconds}`;
    // return timeDisplay.textContent;
}, 1000);

finishBtn.addEventListener('click', () => {
    clearInterval(workoutTimer);

    const modal = document.querySelector('.modal');
    const x = document.querySelector('.close');
    const finishWorkoutH1 = document.querySelector('.finishWorkoutH1');
    const finishWorkoutDiv = document.querySelector('.finishWorkoutDiv');

    finishWorkoutH1.textContent = `Great Job! your total workout time was ${timeDisplay.textContent.substring(timeDisplay.textContent.indexOf(':'))}`;
    modal.style.display = "block";

    finishWorkoutDiv.append(finishWorkoutH1);
    modal.append(finishWorkoutDiv)

    document.body.append(modal);

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.location.replace('/');
        }
    }

    x.onclick = function () {
        modal.style.display = "none";
        document.location.replace('/');
    }
});


