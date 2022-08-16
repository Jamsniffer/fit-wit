const weighttrainingEl = document.querySelector(".allWeighttraining");

async function addWorkout(id) {
    console.log("in add workout ");
    return await fetch(`/api/full-workout-list/Weighttraining/${id}`, {
        method: "POST",
    })
        .then((data) => data.json)
        .then((res) => console.log("from full workout ", res))
        .catch(console.err);
}

weighttrainingEl.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON" || event.target.nodeName === "SPAN") {
        console.log("add Workout");
        addWorkout(event.target.id);
    }
});