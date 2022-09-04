export const letterOnly = (e) => {
    const charCode = e.charCode || e.which;
    const keyValue = String.fromCharCode(charCode);
    const isValid = new RegExp(/^[a-zA-Z,.\s]*$/).test(keyValue);
    if (!isValid) {
        e.preventDefault();
        return;
    }
};

export const numberOnly = (e) => {
    const charCode = e.charCode || e.which;
    const keyValue = String.fromCharCode(charCode);
    const isValid = new RegExp(/^[0-9,.]*$/).test(keyValue);
    if (!isValid) {
        e.preventDefault();
        return;
    }
};
