// Here are the common functions

function buttonFillColor(id) {
    const fillColor = document.getElementById(id);
    fillColor.className = 'btn hover:bg-button-color bg-button-color px-6 text-lg font-semibold text-text-primary';
    return fillColor;
}

function buttonStrokeColor(id) {
    const strokeColor = document.getElementById(id);
    strokeColor.className = 'btn bg-transparent border-[1.5px] border-button-border-color px-6 text-lg font-semibold text-text-secondary';
    return strokeColor;
}

function removeHiddenClass(id) {
    const removeHidden = document.getElementById(id);
    return removeHidden.classList.remove('hidden');
}

function addHiddenClass(id) {
    const addHidden = document.getElementById(id);
    return addHidden.classList.add('hidden');
}


