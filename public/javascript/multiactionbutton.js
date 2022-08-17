const e = require("express");

//multiaction button
{
    //enable all menu buttons
    document.querySelectorALL(".mab").forEach(multiAction => {
        const menuBtn = multiAction.querySelector(".mab__button--menu");
        const list = multiAction.querySelector(".mab__list");

        menuBtn.addEventListner("click", () => {
            list.classList.toggle(".mab__list--visible")
        });    
    });

    //hide list when clicking off the list
    document.addEventListener("click", e => {
        const remainOpen = (
            e.target.matches(".mab__list ")
            || e.target.matches(".mab__button--menu")
            || e.target.matches(".mab__icon")
        );

        if (remainOpen) return;

        document.querySelectorAll(".mab__list").forEach(list => {
            list.classList.toggle("mab__list--visible");
        });
    });
}