const workoutList = document.querySelectorAll('.workoutList');
const addExercise = document.querySelector('.addExercise');
const clickDiv = document.querySelector('.click');

// creating back arrow element
const backArrow = document.createElement('img');
backArrow.classList = 'backArrow';
backArrow.src = '../../assets/images/arrow-back-8.png';

for (let i = 0; i < workoutList.length; i++) {
    workoutList[i].addEventListener('click', function (event) {
        clickDiv.style.display = 'none';

        for (let i = 0; i < workoutList.length; i++) {
            workoutList[i].style.display = 'none'
        }
        event.preventDefault();

        const title = document.querySelectorAll('.workoutTitle')[i];
        const sets = document.querySelectorAll('.sets')[i];
        const reps = document.querySelectorAll('.reps')[i];
        const weight = document.querySelectorAll('.weight')[i];

        // creates all elements
        const infoDiv = document.createElement('div');
        const titleDiv = document.createElement('div');
        const save = document.createElement('button');
        const titleH1 = document.createElement('h1');


        // gives all elements their attributes
        const setsH2 = document.createElement('input');
        setsH2.setAttribute('type', 'number');
        setsH2.setAttribute('min', 1);
        setsH2.setAttribute('max', 10);
        setsH2.setAttribute('placeholder', `${sets.textContent}`);

        const repsH2 = document.createElement('input');
        repsH2.setAttribute('type', 'number');
        repsH2.setAttribute('min', 1);
        repsH2.setAttribute('placeholder', `${reps.textContent}`);

        const weightH2 = document.createElement('input');
        weightH2.setAttribute('type', 'number');
        weightH2.setAttribute('min', 1);
        weightH2.setAttribute('placeholder', `${weight.textContent}`);


        // sets classes for elements
        save.classList = 'saveBtn'
        titleDiv.classList = 'titleDiv';
        infoDiv.classList = 'infoDiv';
        titleH1.classList = 'workout-title';
        setsH2.classList = 'info';
        repsH2.classList = 'info';
        weightH2.classList = 'info';

        // titleH1.innerText = title.textContent;
        // setsH2.innerText = sets.textContent;
        // repsH2.innerText = reps.textContent;
        // weightH2.innerText = weight.textContent;
        save.textContent = 'Save Info'

        titleDiv.append(backArrow, titleH1);
        infoDiv.append(setsH2, repsH2, weightH2, save);

        document.body.append(titleDiv, infoDiv);




        backArrow.addEventListener('click', function () {
            titleDiv.style.display = 'none';
            infoDiv.style.display = 'none';

            clickDiv.style.display = 'flex';
            for (let i = 0; i < workoutList.length; i++) {
                workoutList[i].style.display = 'block'
            }
        })
    });

}


