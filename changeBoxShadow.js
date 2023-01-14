
export const changeBoxShadow = (caja, hShadow, vShadow, blurRadius, spreadRadius, colorShadow) => {
   
    const box = document.querySelector(caja),
        horizontal = document.getElementById(hShadow),
        vertical = document.getElementById(vShadow),
        blur = document.getElementById(blurRadius),
        spread = document.getElementById(spreadRadius),
        color = document.getElementById(colorShadow);

    document.addEventListener('input', e => {
        if (e.target === horizontal || e.target === vertical || e.target === blur || e.target === spread || e.target === color) {
            box.style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${color.value}`;
        }
    })

}