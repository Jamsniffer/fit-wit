function grabWorkout() {
    const apiUrl = `/api/powerlifting/`;

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json()
        }
    })
}