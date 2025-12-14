import {
    styleReviews,
    addThematicQuote,
    displayCurrentDate,
    initTableAccordion
} from './manipulation.js';

import {
    initThemeToggle,
    initEvents
} from './event.js';

import {
    initFormValidation
} from './validation.js';

document.addEventListener('DOMContentLoaded', () => {

    styleReviews();
    addThematicQuote();
    displayCurrentDate();
    initTableAccordion();

    initThemeToggle();
    initEvents();

    initFormValidation();
});

if (window.self !== window.top) {
    document.body.classList.add('embedded');
}