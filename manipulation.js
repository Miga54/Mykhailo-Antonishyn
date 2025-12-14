export function styleReviews() {
    // Знаходимо елементи
    const reviewCards = document.querySelectorAll('.review-card');

    // Перевірка, чи є такі елементи на сторінці
    if (reviewCards.length === 0) {
        console.log('.review-card elements not found on this page.');
        return;
    }

    // Змінюємо стилі
    reviewCards.forEach(card => {
        card.style.backgroundColor = '#fff3e0';
        card.style.borderLeft = '8px solid #FF6600';
        card.style.color = '#333';
        card.style.transition = 'transform 0.3s';
    });

    console.log(`Successfully stylized ${reviewCards.length} cards.`);
}

export function addThematicQuote() {

    if (window.self !== window.top) {
        return;
    }

    const mainContainer = document.querySelector('main');
    if (!mainContainer) return;

    // Створюємо елементи
    const quoteWrapper = document.createElement('div');
    const quoteText = document.createElement('p');

    quoteText.innerHTML = `
        "Data is the new fuel, but hardware is the engine.<br>
        <span style="color: var(--accent-color); font-weight: bold;">LearnBox Station</span> is where the future is trained."
    `;

    // Стилізуємо
    quoteWrapper.style.boxSizing = 'border-box';

    quoteWrapper.style.marginTop = '40px';
    quoteWrapper.style.padding = '20px';
    quoteWrapper.style.borderTop = '1px solid #eee';
    quoteWrapper.style.textAlign = 'center';

    quoteWrapper.style.width = '100%';
    quoteWrapper.style.flexBasis = '100%';

    quoteText.style.fontFamily = 'var(--font-accent)';
    quoteText.style.fontStyle = 'italic';
    quoteText.style.color = '#555';
    quoteText.style.fontSize = '0.9rem';
    quoteText.style.lineHeight = '1.6';

    // Додаємо
    quoteWrapper.append(quoteText);
    mainContainer.append(quoteWrapper);

    console.log('Thematic quote added.');
}

// Функція для відображення поточної дати у футері
export function displayCurrentDate() {
    const footer = document.querySelector('footer');

    // Якщо футера немає, виходимо
    if (!footer) return;

    // Оновлюємо рік у копірайті
    const copyrightParagraph = footer.querySelector('p');
    if (copyrightParagraph) {
        const currentYear = new Date().getFullYear();
        // Переписуємо текст, зберігаючи форматування
        copyrightParagraph.innerHTML = `© ${currentYear} LearnBox Station. All rights reserved.`;
    }

    // Додаємо точну дату окремим елементом
    const dateElement = document.createElement('div');

    // Отримуємо дату у форматі день.місяць.рік
    const today = new Date().toLocaleDateString('en-UK', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    // Налаштовуємо текст і стилі
    dateElement.textContent = `${today}`;
    dateElement.style.fontSize = '0.85rem';
    dateElement.style.color = 'var(--secondary-color)';
    dateElement.style.marginTop = '5px';
    dateElement.style.fontFamily = 'var(--font-heading)';

    // Додаємо дату в кінець футера
    footer.append(dateElement);

    console.log('Дату у футері оновлено.');
}

// Функція-акордеон для таблиць характеристик
export function initTableAccordion() {
    // Шукаємо таблицю характеристик
    const table = document.querySelector('.specs-table');

    // Якщо таблиці немає на сторінці — виходимо
    if (!table) return;

    // Знаходимо всі рядки в тілі таблиці
    const rows = table.querySelectorAll('tbody tr');

    // Якщо рядків мало, ховати нічого не треба
    if (rows.length <= 4) return;

    // Ховаємо всі рядки, починаючи з 5-го
    for (let i = 4; i < rows.length; i++) {
        rows[i].classList.add('hidden-row');
    }

    // Створюємо кнопку Show More
    const btn = document.createElement('button');
    btn.textContent = 'Show More Specs ↓';
    btn.className = 'accordion-btn';

    // Вставляємо кнопку одразу після таблиці
    const wrapper = document.querySelector('.table-wrapper');
    if (wrapper) {
        wrapper.after(btn);
    } else {
        table.after(btn);
    }

    // Додаємо логіку кліку
    btn.addEventListener('click', () => {
        // Перевіряємо, чи розкрита таблиця зараз
        const isExpanded = btn.textContent.includes('Less');

        // Перемикаємо клас hidden-row для прихованих рядків
        for (let i = 4; i < rows.length; i++) {
            if (isExpanded) {
                rows[i].classList.add('hidden-row');
            } else {
                rows[i].classList.remove('hidden-row');
            }
        }

        // Змінюємо текст кнопки
        if (isExpanded) {
            btn.textContent = 'Show More Specs ↓';
        } else {
            btn.textContent = 'Show Less Specs ↑';
        }
    });

    console.log('The accordion for the table has been initialized.');
}