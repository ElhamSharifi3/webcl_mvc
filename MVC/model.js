let progress = 0; // value from 0 to 1

export const setProgress = num => {
    progress = num; // since we have no observable here, update all users manually
};

export const getProgress = () => progress;

export const getDaytime = () => {
    let className = 'night';
    const h = 1 / 24;

    if (progress >= 0 * h && progress < 6 * h) className = 'night';
    if (progress >= 6 * h && progress < 10 * h) className = 'morning';
    if (progress >= 10 * h && progress < 16 * h) className = 'noon';
    if (progress >= 16 * h && progress < 20 * h) className = 'evening';
    if (progress >= 20 * h && progress < 24 * h) className = 'night';

    return className;
};

