export const commonFncInsertTextContent = ($element, trueText, flaseText = "", checkBoolean = true) => {
    checkBoolean ? $element.textContent = trueText : $element.textContent = flaseText;
}