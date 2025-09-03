/**
 * Adds a typewriter effect to an element.
 * @param {string} selector - The CSS selector for the element (e.g., 'h1').
 * @param {string} text - The full text to type out.
 */
function typeWriter(selector, text) {
    const element = document.querySelector(selector);
    if (!element) return;

    element.innerHTML = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        } else {
            element.innerHTML = text;
        }
    }
    type();
}