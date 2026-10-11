const gearPath = ({toothCount, roundness, ratio, radius}) => {
    let result         = "";
    const sin = x => Math.round(Math.sin(x) * 1000) / 1000;
    const cos = x => Math.round(Math.cos(x) * 1000) / 1000;
    for (let i = 0; i < toothCount; i++) {
        const angleDistance = Math.PI * 2 / toothCount;     // from start to next start in rad
        const angleStart    = angleDistance * i;              // angles are relative to the _vertical_ axis
        const angleEnd      = angleStart + angleDistance * ratio;    // end of the tooth
        const angleMid      = (angleEnd + angleStart) / 2;       // mid of the tooth
        const angleNext     = angleStart + angleDistance;
        const x1            = sin(angleStart) * radius;   // tooth base coords
        const y1            = cos(angleStart) * radius;
        const x2            = sin(angleEnd) * radius;
        const y2            = cos(angleEnd) * radius;

        const mx = sin(angleMid);
        const my = cos(angleMid);

        const c1x = sin((angleStart * roundness + angleMid) / (roundness + 1));
        const c1y = cos((angleStart * roundness + angleMid) / (roundness + 1));
        const c2x = sin((angleEnd   * roundness + angleMid) / (roundness + 1));
        const c2y = cos((angleEnd   * roundness + angleMid) / (roundness + 1));

        const nextx = sin(angleNext) * radius;
        const nexty = cos(angleNext) * radius;

        if (i < 1) {
            result = `M  ${x1}  ${y1}`;
        }
        result += `
                     Q  ${c1x} ${c1y}   ${mx} ${my}
                     Q  ${c2x} ${c2y}   ${x2} ${y2}
                     A ${radius} ${radius} 0 0 0 ${nextx} ${nexty}
                     `
    }
    return result;
};

document.querySelector(".gear svg path")
    .setAttribute("d", gearPath({toothCount:64, roundness:0.2, ratio:0.8, radius:0.95}));

export const updateProgress = progress => {
    document.body.style.setProperty("--progress", String(1 - progress));
};

export const updateDaytime = className => {
    document.body.className = className;
};

export const scroller = document.querySelector(".h-scroll-window");


