import { changeBoxShadow } from "./changeBoxShadow.js"
import { changeCode } from "./changeCode.js";

document.addEventListener('DOMContentLoaded', e => {
    changeBoxShadow('.main-container__box', 'horizontal', 'vertical', 'blur-radius', 'spread-radius', 'color');

    changeCode('.code-container__p', 'horizontal', 'vertical', 'blur-radius', 'spread-radius', 'color')
})