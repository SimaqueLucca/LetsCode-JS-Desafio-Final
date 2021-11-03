import searchImprove from './stringTreatment.js'
import getAPIData from './apiManager.js'

function debounce(func, timeout = 2000) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

function saveInput() {
    let inputText = document.querySelector('.txtInputs')
    inputText.blur()
    document.querySelector('.contents-right-container').innerHTML = ''
    inputText = searchImprove(inputText.value)
    getAPIData(inputText)
}

const processChanges = debounce(() => saveInput());

const inputText = document.querySelector('.txtInputs')
inputText.addEventListener('keyup', processChanges)