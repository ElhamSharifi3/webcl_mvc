import { setProgress, getProgress, getDaytime } from "./model.js";
import { updateProgress, updateDaytime, scroller } from "./view.js";

export const update = num => {
    setProgress(num);
    updateProgress(getProgress());
    updateDaytime(getDaytime());
};


// animate from 0 to current hour
const targetHour = new Date().getHours();

const setAndWait = hour => {
    setTimeout( _ => {
        scroller.scrollLeft = (hour/24) * scroller.getBoundingClientRect().width; /* width might have changed */
        hour +=0.5;
        if ( hour > targetHour ) return;
        setAndWait(hour);
    }, 50);
};

export const startAnimation = () => setAndWait(0);