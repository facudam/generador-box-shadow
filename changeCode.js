
export const changeCode = (codeContainer, hShadow, vShadow, blurRadius, spreadRadius, colorShadow) => {


    document.addEventListener('input', e => {
        const contenedor = document.querySelector(codeContainer),
            horizontal = document.getElementById(hShadow),
            vertical = document.getElementById(vShadow),
            blur = document.getElementById(blurRadius),
            spread = document.getElementById(spreadRadius),
            color = document.getElementById(colorShadow);
        
            let cssCode = `box-shadow: ${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${color.value}`

        if (e.target === horizontal || e.target === vertical || e.target === blur || e.target === spread || e.target === color) {
            contenedor.innerHTML = cssCode;
        }
            
            
    })
}