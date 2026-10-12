import { createView, scroller } from "./view.js";
import { update, startAnimation } from "./controller.js";

createView();

scroller.onscroll = _evt => {
    update(scroller.scrollLeft / scroller.getBoundingClientRect().width); /* width might have changed */
};

startAnimation();