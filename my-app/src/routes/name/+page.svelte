<script src="js/app.min.js">
    import { page } from '$app/stores';
    export const prerender = true;
</script>

<div class="wrapper">
    <header class="header header--sidebar">
<div class="header__container header__container-fuild ">
    <a href="/" class="header__logo logo">
<img src="img/logo.svg" alt="logo">
</a>
    <nav class="header__menu header-menu">
        <ul class="header-menu__list">
            <li class="header-menu__list-item">
                <a href="" class="header-menu__link">Главная</a>
            </li>
            <li class="header-menu__list-item">
                <a href="" class="header-menu__link">Наш Discord</a>
            </li>
        </ul>
    </nav>
    
    
        <div class="header__actions">
            <a href="" class="header__action color-blue icon-rhombus">
                2 CStar свободны
            </a>
            <a href="" class="header__action color-violet icon-rhombus">
                2 CStar распределены
            </a>
            <a href="" class="header__action header__action-nickname icon-down">
                ECspezi#9061
            </a>
        </div>
    
    
</div>

</header>
    <main class="page">
        <section class="server-editor">
            <aside class="server-editor__menu menu">
<div class="menu__server">
    <div class="menu__server-thumb">
        <img src="img/servers/NSC.png" class="cover-image" alt="NSC logo">
    </div>
    <div class="menu__server-name">
        Namalsk Stalker
        Classic
    </div>
</div>
<nav class="menu__body">
    <ul class="menu__list">
        <li class="menu__list-item" class:active={$page.url.pathname === '/server-setting'}>
            <a href="/server-setting" class="menu__link icon-setting">Настройки сервера</a>
        </li>
        <li class="menu__list-item" class:active={$page.url.pathname === '/name'}>
            <a href="/name" class="menu__link icon-picture active">Название и лого</a>
        </li>
        <li class="menu__list-item" class:active={$page.url.pathname === '/options'}>
            <a href="/options" class="menu__link icon-people">Тезисы</a>
        </li>
        <li class="menu__list-item" class:active={$page.url.pathname === '/multiserver'}>
            <a href="/multiserver" aria-disabled="true" class="menu__link icon-server">Мультисервер</a>
        </li>
        <li class="menu__list-item" class:active={$page.url.pathname === '/promotion'}>
            <a href="/promotion" class="menu__link icon-promotion">Продвижение</a>
        </li>
        <li class="menu__list-item" class:active={$page.url.pathname === '/verification'}>
            <a href="/verification" class="menu__link icon-verified">Верификация</a>
        </li>
        
        
    </ul>
</nav>
</aside>
            <div class="server-editor__content editor">
                <div class="editor__column">
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Укажите название сервера
                        </h2>
                        <p class="editor__card-desc">
                            Укажите оригинальное, оффициальное и аутентичное название Вашего сервера.
                            Оно&nbsp;будет отображаться в карточке сервера.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Введите название
                                </div>
                                <div class="form__inputs">
                                    <input type="text" name="name" class="form__input"
                                        placeholder="Введите название">
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title">
                                    Введите название
                                </div>
                                <div class="form__inputs">
                                    <input type="text" name="name" class="form__input form__input-error"
                                        placeholder="Введите название">
                                    <span class="form__error color-red">
                                        Разрешено не более 35 символов
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Загрузите логотип
                        </h2>
                        <p class="editor__card-desc">
                            Загрузите логотип Вашего сервера. Этот логотип будет отображаться в карточке
                            сервера. Логотип должен быть оригинальным, размером ровно 256х256 пикселей. Допустимы
                            форматы JPG, JPEG или PNG.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Перетащите или выберите файл
                                </div>
                                <div class="form__file">
                                    <label class="form__file-label">
                                        <input type="file" accept="image/*" name="file"
                                            class="form__file-input hidden">
                                        <span class="form__file-content">
                                            <span class="form__file-row">
                                                DRAG AND
                                            </span>
                                            <span class="form__file-row _big">
                                                DROP
                                            </span>
                                        </span>
                                    </label>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Загрузите логотип
                        </h2>
                        <p class="editor__card-desc">
                            Загрузите логотип Вашего сервера. Этот логотип будет отображаться в карточке
                            сервера. Логотип должен быть оригинальным, размером ровно 256х256 пикселей. Допустимы
                            форматы JPG, JPEG или PNG.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Перетащите или выберите файл
                                </div>
                                <div class="form__file">
                                    <div class="form__file-preview">
                                        <img src="img/servers/NSC-2.png" class="cover-image" alt="NSC preview">
                                        <button type="button" class="form__file-close icon-close"></button>
                                    </div>
                                    <label class="form__file-label">
                                        <input type="file" accept="image/*" name="file"
                                            class="form__file-input hidden">
                                        <span class="form__file-content">
                                            <span class="form__file-row">
                                                DRAG AND
                                            </span>
                                            <span class="form__file-row _big">
                                                DROP
                                            </span>
                                        </span>
                                    </label>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Загрузите логотип
                        </h2>
                        <p class="editor__card-desc">
                            Загрузите логотип Вашего сервера. Этот логотип будет отображаться в карточке
                            сервера. Логотип должен быть оригинальным, размером ровно 256х256 пикселей. Допустимы
                            форматы JPG, JPEG или PNG.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Перетащите или выберите файл
                                </div>
                                <div class="form__file">
                                    <label class="form__file-label form__file-error">
                                        <input type="file" accept="image/*" name="file"
                                            class="form__file-input hidden">
                                        <span class="form__file-content">
                                            <span class="form__file-row">
                                                ФАЙЛ НЕ ПОДХОДИТ
                                            </span>
                                        </span>
                                    </label>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Загрузите Баннер
                        </h2>
                        <p class="editor__card-desc">
                            Загрузите баннер вашего сервера. Баннер будет отображаться в карточке сервера.
                            Баннер должен быть оригинальным, размером ровно 1920х1080 пикселей.
                            Допустимы форматы JPG, JPEG или PNG
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Перетащите или выберите файл
                                </div>
                                <div class="form__file">
                                    <label class="form__file-label">
                                        <input type="file" accept="image/*" name="file"
                                            class="form__file-input hidden">
                                        <span class="form__file-content">
                                            <span class="form__file-row">
                                                DRAG AND
                                            </span>
                                            <span class="form__file-row _big">
                                                DROP
                                            </span>
                                        </span>
                                    </label>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Загрузите Баннер
                        </h2>
                        <p class="editor__card-desc">
                            Загрузите баннер вашего сервера. Баннер будет отображаться в карточке сервера.
                            Баннер должен быть оригинальным, размером ровно 1920х1080 пикселей.
                            Допустимы форматы JPG, JPEG или PNG
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Перетащите или выберите файл
                                </div>
                                <div class="form__file">
                                    <label class="form__file-label form__file-error">
                                        <input type="file" accept="image/*" name="file"
                                            class="form__file-input hidden">
                                        <span class="form__file-content">
                                            <span class="form__file-row">
                                                ФАЙЛ НЕ ПОДХОДИТ
                                            </span>
                                        </span>
                                    </label>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Загрузите Баннер
                        </h2>
                        <p class="editor__card-desc">
                            Загрузите баннер вашего сервера. Баннер будет отображаться в карточке сервера.
                            Баннер должен быть оригинальным, размером ровно 1920х1080 пикселей.
                            Допустимы форматы JPG, JPEG или PNG
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Перетащите или выберите файл
                                </div>
                                <div class="form__file">
                                    <div class="form__file-preview form__file-banner">
                                        <img src="img/servers/NSC-2.png" class="cover-image" alt="NSC preview">
                                        <button type="button" class="form__file-close icon-close"></button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                <div class="editor__column">
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Создайте краткое описание сервера
                        </h2>
                        <p class="editor__card-desc">
                            Краткое описание сервера отображается в ТОПе серверов и обычной карточке
                            сервера. Максимальное количество символов - 300.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Введите описание
                                </div>
                                <div class="form__inputs">
                                    <textarea name="description" class="form__textarea"
                                        placeholder="Расскажите, как на Вашем сервере летают бабочки..."></textarea>
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title">
                                    Введите описание
                                </div>
                                <div class="form__inputs">
                                    <textarea name="description" class="form__textarea form__textarea-error"
                                        placeholder="Расскажите, как на Вашем сервере летают бабочки..."></textarea>
                                    <span class="form__error color-red">
                                        Разрешено не более 300 символов
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Создайте краткое описание сервера
                        </h2>
                        <p class="editor__card-desc">
                            Расширенное описание отображается в расширенной карточке сервера.
                            Максимальное количество символов - 1024.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Введите описание
                                </div>
                                <div class="form__inputs">
                                    <textarea name="description" class="form__textarea form__textarea-big"
                                        placeholder="Расскажите, как на Вашем сервере летают бабочки..."></textarea>
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title">
                                    Введите описание
                                </div>
                                <div class="form__inputs">
                                    <textarea name="description" class="form__textarea form__textarea-big form__textarea-error"
                                        placeholder="Расскажите, как на Вашем сервере летают бабочки..."></textarea>
                                    <span class="form__error color-red">
                                        Разрешено не более 1024 символов
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
</div>