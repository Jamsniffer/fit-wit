


//multiaction button
{
    //enable all menu buttons
    console.log(Array.from(document.querySelectorAll(".mab")))
    Array.from(document.querySelectorAll(".mab")).forEach(multiAction => {
        // const menuBtn = multiAction.querySelector(".mab__button--menu");
        // const list = multiAction.querySelector(".mab__list");
        console.log(multiAction.dataset);
        multiAction.addEventListener("click", () => {
            console.log("made it here");
            document.querySelector("#list" + multiAction.dataset.value).classList.toggle(".mab__list--visible")
        
        });    
    });
    // document.querySelector(".mab").addEventListener("click", () => {
    //     console.log("made it here");
    //     document.querySelector("#list" + multiAction.dataset.value).classList.toggle(".mab__list--visible")
    
    // });    
    //hide list when clicking off the list
    document.addEventListener("click", e => {
        const remainOpen = (
            e.target.matches(".mab__list ")
            || e.target.matches(".mab__button--menu")
            || e.target.matches(".mab__icon")
        );

        if (remainOpen) return;

        Array.from(document.querySelector(".mab")).forEach(list => {
            list.classList.toggle("mab__list--visible");
        });
    });
}