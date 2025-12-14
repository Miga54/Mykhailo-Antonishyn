export function initThemeToggle() {
    // Перевірка збереженої теми при завантаженні
    const savedTheme = localStorage.getItem('site-theme');

    // Якщо в пам'яті є dark, одразу вмикаємо темну тему
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    if (window.self !== window.top) return;

    // Створюємо кнопку
    const btn = document.createElement('button');
    btn.className = 'theme-toggle-btn';

    // Виставляємо правильну іконку при старті
    const isDarkStart = document.body.classList.contains('dark-theme');
    btn.innerHTML = isDarkStart ? '☀️' : '🌙';
    btn.title = 'Change the theme';

    // Логіка кліку
    btn.addEventListener('click', () => {
        // Перемикаємо клас
        document.body.classList.toggle('dark-theme');

        const isDark = document.body.classList.contains('dark-theme');

        // Зберігаємо в localStorage
        if (isDark) {
            localStorage.setItem('site-theme', 'dark');
            btn.innerHTML = '☀️';
        } else {
            localStorage.setItem('site-theme', 'light');
            btn.innerHTML = '🌙';
        }

        // Оновлення фреймів
        const frames = document.querySelectorAll('iframe');
        frames.forEach(frame => {
            try {
                const innerDoc = frame.contentDocument || frame.contentWindow.document;
                if (innerDoc && innerDoc.body) {
                    if (isDark) {
                        innerDoc.body.classList.add('dark-theme');
                    } else {
                        innerDoc.body.classList.remove('dark-theme');
                    }
                }
            } catch (e) {
                console.log('CORS restrictions for the frame');
            }
        });
    });

    // Додаємо кнопку на сторінку
    document.body.append(btn);
    console.log('The theme button with localStorage is initialized.');
}

export function initEvents() {

    // Підсвічування кнопки back та посилань у футері
    const navLinks = document.querySelectorAll('nav a, footer a, header a');

    navLinks.forEach(link => {
        // Коли миша наводиться
        link.addEventListener('mouseenter', () => {
            link.classList.add('js-hover-effect');
            console.log(`The mouse is pointed at: ${link.textContent}`);
        });

        // Коли миша покидає елемент
        link.addEventListener('mouseleave', () => {
            link.classList.remove('js-hover-effect');
        });
    });


    // Відстеження натискання клавіш ArrowUp/ArrowDown
    document.addEventListener('keydown', (event) => {

        // Перевіряємо, яка клавіша натиснута
        if (event.key === 'ArrowUp') {
            console.log('ArrowUp pressed');
        }

        else if (event.key === 'ArrowDown') {
            console.log('ArrowDown pressed');
        }
    });

    console.log('Event listeners (mouse and keyboard) have been initialized.');
}