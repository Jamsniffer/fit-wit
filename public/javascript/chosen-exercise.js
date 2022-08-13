const workoutList = document.querySelectorAll('.workoutList');
const addExercise = document.querySelector('.addExercise');

// creating back arrow element
const backArrow = document.createElement('img');
backArrow.classList = 'backArrow';
backArrow.src = './assets/images/arrow-back-8.png';

for (let i = 0; i < workoutList.length; i++) {
    workoutList[i].addEventListener('click', function (event) {
        addExercise.style.display = 'none';

        for (let i = 0; i < workoutList.length; i++) {
            workoutList[i].style.display = 'none'
        }
        event.preventDefault();

        const title = document.querySelectorAll('.workoutTitle')[i];
        const sets = document.querySelectorAll('.sets')[i];
        const reps = document.querySelectorAll('.reps')[i];
        const weight = document.querySelectorAll('.weight')[i];

        const infoDiv = document.createElement('div');
        const titleDiv = document.createElement('div');

        const titleH1 = document.createElement('h1');
        const setsH2 = document.createElement('h2');
        const repsH2 = document.createElement('h2');
        const weightH2 = document.createElement('h2');

        titleDiv.classList = 'titleDiv';
        infoDiv.classList = 'infoDiv';
        titleH1.classList = 'title';
        setsH2.classList = 'info';
        repsH2.classList = 'info';
        weightH2.classList = 'info';

        titleH1.innerText = title.textContent;
        setsH2.innerText = sets.textContent;
        repsH2.innerText = reps.textContent;
        weightH2.innerText = weight.textContent;

        titleDiv.append(backArrow, titleH1);
        infoDiv.append(setsH2, repsH2, weightH2);

        document.body.append(titleDiv, infoDiv);

        backArrow.addEventListener('click', function () {
            titleDiv.style.display = 'none';
            infoDiv.style.display = 'none';

            addExercise.style.display = 'flex';
            for (let i = 0; i < workoutList.length; i++) {
                workoutList[i].style.display = 'block'
            }
        })
    });

}


