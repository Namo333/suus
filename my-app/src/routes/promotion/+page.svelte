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
            <a href="/name" class="menu__link icon-picture">Название и лого</a>
        </li>
        <li class="menu__list-item" class:active={$page.url.pathname === '/options'}>
            <a href="/options" class="menu__link icon-people">Тезисы</a>
        </li>
        <li class="menu__list-item" class:active={$page.url.pathname === '/multiserver'}>
            <a href="/multiserver" aria-disabled="true" class="menu__link icon-server">Мультисервер</a>
        </li>
        <li class="menu__list-item" class:active={$page.url.pathname === '/promotion'}>
            <a href="/promotion" class="menu__link icon-promotion active">Продвижение</a>
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
                            Community Stars
                        </h2>
                        <div class="editor__card-grid editor-grid">
                            <div class="editor-grid__column">
                                <div class="editor-grid__item editor-grid__balance">
                                    <div class="editor-grid__balance-title">
                                        CStars:
                                    </div>
                                    <div class="editor-grid__balance-value icon-rhombus">
                                        5
                                    </div>
                                </div>
                                <p class="editor-grid__item">
                                    Server ID: 88792121
                                </p>
                            </div>
                            <p class="editor-grid__item">
                                Продвигайте свой сервер, используя CStar.
                                Пока мы не прикрутили платежную систему,
                                CStar зачисляются в ручном режиме.
                            </p>
                        </div>
                        <div class="editor__card-btn">
                            <a href="#buycstar" class="btn btn-blue">
                                <span class="btn__text">Купить CStars</span>
                            </a>
                        </div>

                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Уровень сервера
                        </h2>
                        <div class="editor__card-levels levels levels-completed levels-partner">
                            <div class="levels__items">
                                <div class="levels__item level level-server">
                                    <h3 class="level__title icon-rhombus">
                                        Сервер
                                    </h3>
                                    <ul class="level__list">
                                        <li class="level__list-item">2 репозиции в месяц</li>
                                        <li class="level__list-item">До 4 серверов в MS</li>
                                        <li class="level__list-item">До 3 тезисов</li>
                                        <li class="level__list-item">Участие в ТОПе серверов</li>
                                        <li class="level__list-item">Установка GIF логотипа</li>
                                    </ul>
                                    <div class="level__state">Активировано!</div>
                                </div>
                                <div class="levels__item level level-team">
                                    <h3 class="level__title icon-rhombus">
                                        Сообщество
                                    </h3>
                                    <ul class="level__list">
                                        <li class="level__list-item">4 репозиции в месяц</li>
                                        <li class="level__list-item">До 6 серверов в MS</li>
                                        <li class="level__list-item">До 4 тезисов</li>
                                        <li class="level__list-item">Участие в ТОПе серверов</li>
                                        <li class="level__list-item">Установка GIF логотипа</li>
                                        <li class="level__list-item">Синее выделение сервера</li>
                                        <li class="level__list-item">Кнопка паники</li>
                                    </ul>
                                    <div class="level__state">Активировано!</div>

                                </div>
                                <div class="levels__item level level-partner level-active">
                                    <h3 class="level__title icon-rhombus">
                                        Партнер
                                    </h3>
                                    <ul class="level__list">
                                        <li class="level__list-item">8 репозиций в месяц</li>
                                        <li class="level__list-item">До 10 серверов в MS</li>
                                        <li class="level__list-item">До 6 тезисов</li>
                                        <li class="level__list-item">Участие в ТОПе серверов</li>
                                        <li class="level__list-item">Партнерское выделение</li>
                                        <li class="level__list-item">Установка GIF логотипа</li>
                                        <li class="level__list-item">1 Кнопка паники в месяц</li>
                                        <li class="level__list-item">Премодерация отзывов</li>
                                        <li class="level__list-item icon-info">Защита от автоскрытия</li>
                                    </ul>
                                    <div class="level__state">Активировано!</div>

                                </div>

                            </div>
                            <div class="levels__progress">
                                <span class="levels__progress-bar"></span>
                                <span class="levels__progress-round levels__progress-initial">0</span>
                                <span class="levels__progress-round levels__progress-third">2</span>
                                <span class="levels__progress-round levels__progress-two-thirds">5</span>
                                <span class="levels__progress-round levels__progress-total">10</span>
                            </div>
                            <div class="levels__footer">
                                <div class="levels__footer-info">
                                    Статус партнёра навсегда дает Вам уровень <span
                                        class="levels__footer-state">&lt;Партнер&gt;</span>
                                </div>
                                <a href="" class="levels__footer-link">Управление подписками</a>
                            </div>
                        </div>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Уровень сервера
                        </h2>
                        <div class="editor__card-levels levels levels-completed levels-official">
                            <div class="levels__items">
                                <div class="levels__item level level-server">
                                    <h3 class="level__title icon-rhombus">
                                        Сервер
                                    </h3>
                                    <ul class="level__list">
                                        <li class="level__list-item">2 репозиции в месяц</li>
                                        <li class="level__list-item">До 4 серверов в MS</li>
                                        <li class="level__list-item">До 3 тезисов</li>
                                        <li class="level__list-item">Участие в ТОПе серверов</li>
                                        <li class="level__list-item">Установка GIF логотипа</li>
                                    </ul>
                                    <div class="level__state">Активировано!</div>
                                </div>
                                <div class="levels__item level level-team">
                                    <h3 class="level__title icon-rhombus">
                                        Сообщество
                                    </h3>
                                    <ul class="level__list">
                                        <li class="level__list-item">4 репозиции в месяц</li>
                                        <li class="level__list-item">До 6 серверов в MS</li>
                                        <li class="level__list-item">До 4 тезисов</li>
                                        <li class="level__list-item">Участие в ТОПе серверов</li>
                                        <li class="level__list-item">Установка GIF логотипа</li>
                                        <li class="level__list-item">Синее выделение сервера</li>
                                        <li class="level__list-item">Кнопка паники</li>
                                    </ul>
                                    <div class="level__state">Активировано!</div>

                                </div>
                                <div class="levels__item level level-official level-active">
                                    <h3 class="level__title icon-rhombus">
                                        Официальный
                                    </h3>
                                    <ul class="level__list">
                                        <li class="level__list-item">8 репозиций в месяц</li>
                                        <li class="level__list-item">До 10 серверов в MS</li>
                                        <li class="level__list-item">До 6 тезисов</li>
                                        <li class="level__list-item">Участие в ТОПе серверов</li>
                                        <li class="level__list-item">Официальное выделение</li>
                                        <li class="level__list-item">Установка GIF логотипа</li>
                                        <li class="level__list-item">1 Кнопка паники в месяц</li>
                                        <li class="level__list-item">Премодерация отзывов</li>
                                        <li class="level__list-item icon-info">Защита от автоскрытия</li>
                                    </ul>
                                    <div class="level__state">Активировано!</div>

                                </div>

                            </div>
                            <div class="levels__progress">
                                <span class="levels__progress-bar"></span>
                                <span class="levels__progress-round levels__progress-initial">0</span>
                                <span class="levels__progress-round levels__progress-third">2</span>
                                <span class="levels__progress-round levels__progress-two-thirds">5</span>
                                <span class="levels__progress-round levels__progress-total">10</span>
                            </div>
                            <div class="levels__footer">
                                <div class="levels__footer-info">
                                    Офф. сервера всегда имеют уровен <span
                                        class="levels__footer-state">&lt;Оффициальный&gt;</span>
                                </div>
                                <a href="" class="levels__footer-link">Управление подписками</a>
                            </div>
                        </div>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Уровень сервера
                        </h2>
                        <div class="editor__card-levels levels">
                            <div class="levels__items">
                                <div class="levels__item level level-server">
                                    <h3 class="level__title icon-rhombus">
                                        Сервер
                                    </h3>
                                    <ul class="level__list">
                                        <li class="level__list-item">2 репозиции в месяц</li>
                                        <li class="level__list-item">До 4 серверов в MS</li>
                                        <li class="level__list-item">До 3 тезисов</li>
                                        <li class="level__list-item">Участие в ТОПе серверов</li>
                                        <li class="level__list-item">Установка GIF логотипа</li>
                                    </ul>
                                    <a href="" class="level__state level__state-btn">Активировать за 2 CStar</a>
                                </div>
                                <div class="levels__item level level-team">
                                    <h3 class="level__title icon-rhombus">
                                        Сообщество
                                    </h3>
                                    <ul class="level__list">
                                        <li class="level__list-item">4 репозиции в месяц</li>
                                        <li class="level__list-item">До 6 серверов в MS</li>
                                        <li class="level__list-item">До 4 тезисов</li>
                                        <li class="level__list-item">Участие в ТОПе серверов</li>
                                        <li class="level__list-item">Установка GIF логотипа</li>
                                        <li class="level__list-item">Синее выделение сервера</li>
                                        <li class="level__list-item">Кнопка паники</li>
                                    </ul>
                                    <a href="" class="level__state level__state-btn">Активировать за 5 CStar</a>

                                </div>
                                <div class="levels__item level level-project">
                                    <h3 class="level__title icon-rhombus">
                                        Проект
                                    </h3>
                                    <ul class="level__list">
                                        <li class="level__list-item">8 репозиций в месяц</li>
                                        <li class="level__list-item">До 10 серверов в MS</li>
                                        <li class="level__list-item">До 6 тезисов</li>
                                        <li class="level__list-item">Участие в ТОПе серверов</li>
                                        <li class="level__list-item">Установка GIF логотипа</li>
                                        <li class="level__list-item">Особое выделение сервера</li>
                                        <li class="level__list-item">Кнопка паники</li>
                                        <li class="level__list-item">Премодерация отзывов</li>
                                        <li class="level__list-item icon-info">Защита от автоскрытия</li>
                                    </ul>
                                    <a href="" class="level__state level__state-btn">Активировать за 10 CStar</a>

                                </div>
                            </div>
                            <div class="levels__progress">
                                <span class="levels__progress-bar"></span>
                                <span class="levels__progress-round levels__progress-initial">0</span>
                                <span class="levels__progress-round levels__progress-third">2</span>
                                <span class="levels__progress-round levels__progress-two-thirds">5</span>
                                <span class="levels__progress-round levels__progress-total">10</span>
                            </div>

                        </div>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Уровень сервера
                        </h2>
                        <div class="editor__card-levels levels levels-server">
                            <div class="levels__items">
                                <div class="levels__item level level-server level-active">
                                    <h3 class="level__title icon-rhombus">
                                        Сервер
                                    </h3>
                                    <ul class="level__list">
                                        <li class="level__list-item">2 репозиции в месяц</li>
                                        <li class="level__list-item">До 4 серверов в MS</li>
                                        <li class="level__list-item">До 3 тезисов</li>
                                        <li class="level__list-item">Участие в ТОПе серверов</li>
                                        <li class="level__list-item">Установка GIF логотипа</li>
                                    </ul>
                                    <div class="level__state">Активировано!</div>
                                </div>
                                <div class="levels__item level level-team">
                                    <h3 class="level__title icon-rhombus">
                                        Сообщество
                                    </h3>
                                    <ul class="level__list">
                                        <li class="level__list-item">4 репозиции в месяц</li>
                                        <li class="level__list-item">До 6 серверов в MS</li>
                                        <li class="level__list-item">До 4 тезисов</li>
                                        <li class="level__list-item">Участие в ТОПе серверов</li>
                                        <li class="level__list-item">Установка GIF логотипа</li>
                                        <li class="level__list-item">Синее выделение сервера</li>
                                        <li class="level__list-item">Кнопка паники</li>
                                    </ul>
                                    <a href="" class="level__state level__state-btn">Активировать за 5 CStar</a>

                                </div>
                                <div class="levels__item level level-project">
                                    <h3 class="level__title icon-rhombus">
                                        Проект
                                    </h3>
                                    <ul class="level__list">
                                        <li class="level__list-item">8 репозиций в месяц</li>
                                        <li class="level__list-item">До 10 серверов в MS</li>
                                        <li class="level__list-item">До 6 тезисов</li>
                                        <li class="level__list-item">Участие в ТОПе серверов</li>
                                        <li class="level__list-item">Установка GIF логотипа</li>
                                        <li class="level__list-item">Особое выделение сервера</li>
                                        <li class="level__list-item">Кнопка паники</li>
                                        <li class="level__list-item">Премодерация отзывов</li>
                                        <li class="level__list-item icon-info">Защита от автоскрытия</li>
                                    </ul>
                                    <a href="" class="level__state level__state-btn">Активировать за 10 CStar</a>

                                </div>
                            </div>
                            <div class="levels__progress">
                                <span class="levels__progress-bar"></span>
                                <span class="levels__progress-round levels__progress-initial">0</span>
                                <span class="levels__progress-round levels__progress-third active">2</span>
                                <span class="levels__progress-round levels__progress-two-thirds">5</span>
                                <span class="levels__progress-round levels__progress-total">10</span>
                            </div>
                            <div class="levels__footer">
                                <div class="levels__footer-info">
                                    2 Ваших CStar повышают уровень до
                                    <span class="levels__footer-state">&lt;Сервер&gt;</span>
                                </div>
                                <a href="" class="levels__footer-link">Управление подписками</a>
                            </div>
                        </div>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Уровень сервера
                        </h2>
                        <div class="editor__card-levels levels levels-team">
                            <div class="levels__items">
                                <div class="levels__item level level-server">
                                    <h3 class="level__title icon-rhombus">
                                        Сервер
                                    </h3>
                                    <ul class="level__list">
                                        <li class="level__list-item">2 репозиции в месяц</li>
                                        <li class="level__list-item">До 4 серверов в MS</li>
                                        <li class="level__list-item">До 3 тезисов</li>
                                        <li class="level__list-item">Участие в ТОПе серверов</li>
                                        <li class="level__list-item">Установка GIF логотипа</li>
                                    </ul>
                                    <div class="level__state">Активировано!</div>
                                </div>
                                <div class="levels__item level level-team level-active">
                                    <h3 class="level__title icon-rhombus">
                                        Сообщество
                                    </h3>
                                    <ul class="level__list">
                                        <li class="level__list-item">4 репозиции в месяц</li>
                                        <li class="level__list-item">До 6 серверов в MS</li>
                                        <li class="level__list-item">До 4 тезисов</li>
                                        <li class="level__list-item">Участие в ТОПе серверов</li>
                                        <li class="level__list-item">Установка GIF логотипа</li>
                                        <li class="level__list-item">Синее выделение сервера</li>
                                        <li class="level__list-item">Кнопка паники</li>
                                    </ul>
                                    <div class="level__state">Активировано!</div>

                                </div>
                                <div class="levels__item level level-project">
                                    <h3 class="level__title icon-rhombus">
                                        Проект
                                    </h3>
                                    <ul class="level__list">
                                        <li class="level__list-item">8 репозиций в месяц</li>
                                        <li class="level__list-item">До 10 серверов в MS</li>
                                        <li class="level__list-item">До 6 тезисов</li>
                                        <li class="level__list-item">Участие в ТОПе серверов</li>
                                        <li class="level__list-item">Установка GIF логотипа</li>
                                        <li class="level__list-item">Особое выделение сервера</li>
                                        <li class="level__list-item">Кнопка паники</li>
                                        <li class="level__list-item">Премодерация отзывов</li>
                                        <li class="level__list-item icon-info">Защита от автоскрытия</li>
                                    </ul>
                                    <a href="" class="level__state level__state-btn">Активировать за 10 CStar</a>

                                </div>
                            </div>
                            <div class="levels__progress">
                                <span class="levels__progress-bar"></span>
                                <span class="levels__progress-round levels__progress-initial">0</span>
                                <span class="levels__progress-round levels__progress-third active">2</span>
                                <span class="levels__progress-round levels__progress-two-thirds active">5</span>
                                <span class="levels__progress-round levels__progress-total">10</span>
                            </div>
                            <div class="levels__footer">
                                <div class="levels__footer-info">
                                    5 Ваших CStar повышают уровень до
                                    <span class="levels__footer-state">&lt;Сообщество&gt;</span>
                                </div>
                                <a href="" class="levels__footer-link">Управление подписками</a>
                            </div>
                            <div class="levels__discount discount discount-violet">
                                <a href="" class="discount__package icon-rhombus">
                                    <span class="discount__info">
                                        <span class="discount__info-title">
                                            4 CStars
                                        </span>
                                        <span class="discount__sale discount__sale-red">
                                            Эксклюзив! <span class="discount__sale-value">-25%</span>
                                        </span>
                                    </span>
                                    <span class="discount__price">
                                        <span class="discount__price-value">
                                            237₽
                                        </span>
                                        <span class="discount__price-period">
                                            / мес.
                                        </span>
                                    </span>
                                </a>
                                <div class="discount__desc">
                                    <div class="discount__desc-title">
                                        Эксклюзив!
                                    </div>
                                    <div class="discount__desc-text">
                                        Докупите недостающие CStar со скидкой, чтобы прокачать уровень!
                                        Предложение действительно: 00:18:53
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Уровень сервера
                        </h2>
                        <div class="editor__card-levels levels levels-completed levels-project">
                            <div class="levels__items">
                                <div class="levels__item level level-server">
                                    <h3 class="level__title icon-rhombus">
                                        Сервер
                                    </h3>
                                    <ul class="level__list">
                                        <li class="level__list-item">2 репозиции в месяц</li>
                                        <li class="level__list-item">До 4 серверов в MS</li>
                                        <li class="level__list-item">До 3 тезисов</li>
                                        <li class="level__list-item">Участие в ТОПе серверов</li>
                                        <li class="level__list-item">Установка GIF логотипа</li>
                                    </ul>
                                    <div class="level__state">Активировано!</div>
                                </div>
                                <div class="levels__item level level-team e">
                                    <h3 class="level__title icon-rhombus">
                                        Сообщество
                                    </h3>
                                    <ul class="level__list">
                                        <li class="level__list-item">4 репозиции в месяц</li>
                                        <li class="level__list-item">До 6 серверов в MS</li>
                                        <li class="level__list-item">До 4 тезисов</li>
                                        <li class="level__list-item">Участие в ТОПе серверов</li>
                                        <li class="level__list-item">Установка GIF логотипа</li>
                                        <li class="level__list-item">Синее выделение сервера</li>
                                        <li class="level__list-item">Кнопка паники</li>
                                    </ul>
                                    <div class="level__state">Активировано!</div>

                                </div>
                                <div class="levels__item level level-project level-active">
                                    <h3 class="level__title icon-rhombus">
                                        Проект
                                    </h3>
                                    <ul class="level__list">
                                        <li class="level__list-item">8 репозиций в месяц</li>
                                        <li class="level__list-item">До 10 серверов в MS</li>
                                        <li class="level__list-item">До 6 тезисов</li>
                                        <li class="level__list-item">Участие в ТОПе серверов</li>
                                        <li class="level__list-item">Установка GIF логотипа</li>
                                        <li class="level__list-item">Особое выделение сервера</li>
                                        <li class="level__list-item">Кнопка паники</li>
                                        <li class="level__list-item">Премодерация отзывов</li>
                                        <li class="level__list-item icon-info">Защита от автоскрытия</li>
                                    </ul>
                                    <div class="level__state">Активировано!</div>

                                </div>
                            </div>
                            <div class="levels__progress">
                                <span class="levels__progress-bar"></span>
                                <span class="levels__progress-round levels__progress-initial">0</span>
                                <span class="levels__progress-round levels__progress-third active">2</span>
                                <span class="levels__progress-round levels__progress-two-thirds active">5</span>
                                <span class="levels__progress-round levels__progress-total active">10</span>
                            </div>
                            <div class="levels__footer">
                                <div class="levels__footer-info">
                                    10 Ваших CStar повышают уровень до
                                    <span class="levels__footer-state">&lt;Проект&gt;</span>
                                </div>
                                <a href="" class="levels__footer-link">Управление подписками</a>
                            </div>

                        </div>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Уровень сервера
                        </h2>
                        <div class="editor__card-levels levels">

                            <div class="levels__discount discount discount-violet">
                                <a href="#buycstargre" class="discount__package icon-rhombus">
                                    <span class="discount__info">
                                        <span class="discount__info-title">
                                            4 CStars
                                        </span>
                                        <span class="discount__sale discount__sale-red">
                                            Эксклюзив! <span class="discount__sale-value">-25%</span>
                                        </span>
                                    </span>
                                    <span class="discount__price">
                                        <span class="discount__price-value">
                                            237₽
                                        </span>
                                        <span class="discount__price-period">
                                            / мес.
                                        </span>
                                    </span>
                                </a>
                                <div class="discount__desc">
                                    <div class="discount__desc-title">
                                        Эксклюзив!
                                    </div>
                                    <div class="discount__desc-text">
                                        Докупите недостающие CStar со скидкой, чтобы прокачать уровень!
                                        Предложение действительно: 00:18:53
                                    </div>
                                </div>
                            </div>
                            <div class="levels__discount discount discount-blue">
                                <a href="#buycstargre" class="discount__package icon-rhombus">
                                    <span class="discount__info">
                                        <span class="discount__info-title">
                                            7 CStars
                                        </span>
                                        <span class="discount__sale discount__sale-red">
                                            По цене <span class="discount__sale-value">пяти!</span>
                                        </span>
                                    </span>
                                    <span class="discount__price">
                                        <span class="discount__price-value">
                                            395₽
                                        </span>
                                        <span class="discount__price-period">
                                            / мес.
                                        </span>
                                    </span>
                                </a>
                                <div class="discount__desc">
                                    <div class="discount__desc-title">
                                        Эксклюзив!
                                    </div>
                                    <div class="discount__desc-text">
                                        Докупите недостающие CStar со скидкой, чтобы прокачать уровень!
                                        Предложение действительно: 00:18:53
                                    </div>
                                </div>
                            </div>
                            <div class="levels__discount discount discount-yellow">
                                <a href="#buycstargre" class="discount__package icon-rhombus">
                                    <span class="discount__info">
                                        <span class="discount__info-title">
                                            15 CStars
                                        </span>
                                        <span class="discount__sale discount__sale-red">
                                            По цене <span class="discount__sale-value">11-и!</span>
                                        </span>
                                    </span>
                                    <span class="discount__price">
                                        <span class="discount__price-value">
                                            869₽
                                        </span>
                                        <span class="discount__price-period">
                                            / мес.
                                        </span>
                                    </span>
                                </a>
                                <div class="discount__desc">
                                    <div class="discount__desc-title">
                                        Эксклюзив!
                                    </div>
                                    <div class="discount__desc-text">
                                        Докупите недостающие CStar со скидкой, чтобы прокачать уровень!
                                        Предложение действительно: 00:18:53
                                    </div>
                                </div>
                            </div>
                            <div class="levels__discount discount discount-green">
                                <a href="#buycstargre" class="discount__package icon-rhombus">
                                    <span class="discount__info">
                                        <span class="discount__info-title">
                                            3 CStars
                                        </span>
                                        <span class="discount__sale discount__sale-red">
                                            По цене <span class="discount__sale-value">двух!</span>
                                        </span>
                                    </span>
                                    <span class="discount__price">
                                        <span class="discount__price-value">
                                            158₽
                                        </span>
                                        <span class="discount__price-period">
                                            / мес.
                                        </span>
                                    </span>
                                </a>
                                <div class="discount__desc">
                                    <div class="discount__desc-title">
                                        Эксклюзив!
                                    </div>
                                    <div class="discount__desc-text">
                                        Докупите недостающие CStar со скидкой, чтобы прокачать уровень!
                                        Предложение действительно: 00:18:53
                                    </div>
                                </div>
                            </div>
                            <div class="levels__discount discount discount-gray">
                                <a href="#buycstargra" class="discount__package icon-rhombus">
                                    <span class="discount__info">
                                        <span class="discount__info-title">
                                            3 CStars
                                        </span>
                                        <span class="discount__sale ">
                                            1 CStar = 79₽/мес
                                        </span>
                                    </span>
                                    <span class="discount__price">
                                        <span class="discount__price-value">
                                            237
                                        </span>
                                        <span class="discount__price-period">
                                            / мес.
                                        </span>
                                    </span>
                                </a>
                                <div class="discount__desc">
                                    <div class="discount__desc-title">
                                        Эксклюзив!
                                    </div>
                                    <div class="discount__desc-text">
                                        Докупите недостающие CStar со скидкой, чтобы прокачать уровень!
                                        Предложение действительно: 00:18:53
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Спуск сервера
                        </h2>
                        <p class="editor__card-desc">
                            Каждый новый сервер, добавляемый в вашу категорию - поднимает Ваш сервер вверх. Часто
                            пользователи не прокручивают канал очень высоко вверх, и чтобы
                            оставаться в поле зрения масс - вы можете спустить сервер вниз.
                        </p>
                        <div class="editor__card-reposition reposition">
                            <div class="reposition__header">
                                <p class="editor__card-desc">
                                    Нет доступных репозиций,
                                    <a href="#exchange" class="editor__card-link">Пополнить</a>
                                </p>
                            </div>
                            <div class="reposition__body">
                                <div class="reposition__discount discount discount-reposition">
                                    <a href="" class="discount__package icon-reload">
                                        <span class="discount__info">
                                            <span class="discount__info-title">
                                                Репозиция
                                            </span>
                                            <span class="discount__sale">
                                                Освежает сервер
                                            </span>
                                        </span>
                                        <span class="discount__price">
                                            <span class="discount__price-value">
                                                1 CStar
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Репозиция сервера
                        </h2>
                        <p class="editor__card-desc">
                            Каждый новый сервер, который другие владельцы добавляют в вашу категорию,
                            поднимают Ваш сервер вверх. Часто пользователи не прокручивают канал очень
                            высоко вверх, и чтобы оставаться в поле зрения масс - вы можете спустить сервер вниз.
                        </p>
                        <div class="editor__card-reposition reposition">
                            <div class="reposition__header">
                                <p class="editor__card-desc">
                                    Доступно репозиций: <span class="color-blue">1</span>
                                </p>
                                <p class="editor__card-desc">
                                    <a href="#exchange" class="editor__card-link editor__card-link-white">Пополнить
                                        репозиции</a>
                                </p>
                            </div>
                            <div class="reposition__body">
                                <a href="" class="reposition__btn btn btn-red">Спустить сервер</a>
                                <div class="reposition__discount discount discount-reposition">
                                    <a href="" class="discount__package icon-reload">
                                        <span class="discount__info">
                                            <span class="discount__info-title">
                                                Репозиция
                                            </span>
                                            <span class="discount__sale">
                                                Освежает сервер
                                            </span>
                                        </span>
                                        <span class="discount__price">
                                            <span class="discount__price-value">
                                                1 CStar
                                            </span>
                                        </span>
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
                <div class="editor__column">
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Кнопка паники
                        </h2>
                        <p class="editor__card-desc">
                            Если Ваш сервер подвергается бомбардировке негативными отзывами, вы можете
                            на 24 часа заморозить возможность отправлять новые ревью о своем сервере.
                            Это не значит, что негативные ревью нельзя будет опубликовать позже, однако это
                            поможет сгладить ущерб.
                        </p>
                        <div class="editor__card-reposition reposition">
                            <div class="reposition__header">
                                <p class="editor__card-desc">
                                    Нет доступных активаций,
                                    <a href="#panicbuy" class="editor__card-link">Пополнить</a>
                                </p>
                            </div>
                            <div class="reposition__body">
                                <div class="reposition__discount discount discount-panic">
                                    <a href="" class="discount__package icon-sos">
                                        <span class="discount__info">
                                            <span class="discount__info-title">
                                                Кнопка паники
                                            </span>
                                            <span class="discount__sale">
                                                Если есть проблема
                                            </span>
                                        </span>
                                        <span class="discount__price">
                                            <span class="discount__price-value">
                                                149₽
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Кнопка паники
                        </h2>
                        <p class="editor__card-desc">
                            Если Ваш сервер подвергается бомбардировке негативными отзывами, вы можете
                            на 24 часа заморозить возможность отправлять новые ревью о своем сервере.
                            Это не значит, что негативные ревью нельзя будет опубликовать позже, однако это
                            поможет сгладить ущерб.
                        </p>
                        <div class="editor__card-reposition reposition">
                            <div class="reposition__header">
                                <p class="editor__card-desc">
                                    Доступно активаций: <span class="color-blue">1</span>
                                </p>
                                <p class="editor__card-desc">
                                    <a href="#panicbuy" class="editor__card-link editor__card-link-white">
                                        Пополнить кнопки паники
                                    </a>
                                </p>
                            </div>
                            <div class="reposition__body">
                                <a href="#panicactive" class="reposition__btn btn btn-red">Кнопка паники!</a>
                                <div class="reposition__discount discount discount-panic">
                                    <a href="" class="discount__package icon-sos">
                                        <span class="discount__info">
                                            <span class="discount__info-title">
                                                Кнопка паники
                                            </span>
                                            <span class="discount__sale">
                                                Если есть проблема
                                            </span>
                                        </span>
                                        <span class="discount__price">
                                            <span class="discount__price-value">
                                                149₽
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Кнопка паники
                        </h2>
                        <p class="editor__card-desc">
                            Если Ваш сервер подвергается бомбардировке негативными отзывами, вы можете
                            на 24 часа заморозить возможность отправлять новые ревью о своем сервере.
                            Это не значит, что негативные ревью нельзя будет опубликовать позже, однако это
                            поможет сгладить ущерб.
                        </p>
                        <div class="editor__card-reposition reposition">
                            <div class="reposition__header">
                                <p class="editor__card-desc">
                                    Доступно активаций: <span class="color-blue">1</span> | <span
                                        class="color-red">До следующей активации: 23 дн.</span>
                                </p>
                                <p class="editor__card-desc">
                                    <a href="#panicbuy" class="editor__card-link editor__card-link-white">
                                        Пополнить кнопки паники
                                    </a>
                                </p>
                            </div>
                            <div class="reposition__body">
                                <a href="" aria-disabled="true" class="reposition__btn btn btn-red">Активен
                                    куллдаун</a>
                                <div class="reposition__discount discount discount-panic">
                                    <a href="" class="discount__package icon-sos">
                                        <span class="discount__info">
                                            <span class="discount__info-title">
                                                Кнопка паники
                                            </span>
                                            <span class="discount__sale">
                                                Если есть проблема
                                            </span>
                                        </span>
                                        <span class="discount__price">
                                            <span class="discount__price-value">
                                                149₽
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="editor__card editor__card-panic">
                        <h2 class="editor__card-title title color-red">
                            КНОПКА ПАНИКИ АКТИВИРОВАНА
                        </h2>
                        <p class="editor__card-desc">
                            Кнопка паники была активирована. Следующие 24 часа после активации, пользователи
                            не смогут оставить новые ревью или изменить userscore сервера.
                        </p>

                        <div class="editor__card-reposition reposition">
                            <div class="reposition__header">
                                <p class="editor__card-desc">
                                    Доступно активаций: <span class="color-blue">1</span> | <span
                                        class="color-red">До следующей активации: 30 дн.</span>
                                </p>
                            </div>
                            <div class="reposition__body">
                                <a href="" class="reposition__btn btn btn-red">
                                    Кнопка паники активна!
                                </a>
                            </div>
                        </div>

                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Премодерация ревью
                        </h2>
                        <p class="editor__card-desc">
                            Если премодерация ревью включена - наша команда модерации будет проверять
                            все отзывы о Вашем сервере на предмет нарушений наших правил перед тем, как
                            они будут опубликованы. Нет, это не значит, что мы будем пропускать только
                            позитивные ревью. Это значит, что ревью, нарушающие наши правила, будут удалены
                            еще до публикации.
                        </p>
                        <p class="editor__card-desc">
                            Активация только на уровне <span class="color-orange">&lt;Проект&gt;</span>
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item form__btns">
                                <button type="submit" disabled class="btn btn-red btn-sm">Недостаточный
                                    уровень</button>
                            </div>
                        </form>

                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Премодерация ревью
                        </h2>
                        <p class="editor__card-desc">
                            Если премодерация ревью включена - наша команда модерации будет проверять
                            все отзывы о Вашем сервере на предмет нарушений наших правил перед тем, как
                            они будут опубликованы. Нет, это не значит, что мы будем пропускать только
                            позитивные ревью. Это значит, что ревью, нарушающие наши правила, будут удалены
                            еще до публикации.
                        </p>
                        <p class="editor__card-desc">
                            Уровень <span class="color-orange">&lt;Проект&gt;</span> позволяет
                            управлять премодерацией
                        </p>
                        <form action="#" class="editor__card-form form">
                            <label class="form__item form__toggler">
                                <input type="checkbox" name="panic" class="form__toggler-input hidden">
                                <span class="form__toggler-content">
                                    <span class="form__toggler-btn">
                                        Включить
                                    </span>
                                    <span class="form__toggler-btn">
                                        Выключить
                                    </span>
                                </span>
                            </label>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    </main>

    <div id="buycstar" class="popup open">
        <div class="popup__content">
            <form action="#" class="popup__body form">
                <a class="popup__close icon-close" href="#"></a>
                <div class="form__item form__title">
                    Купить <span class="color-blue form__label icon-rhombus">Community Stars</span>
                </div>
                <div class="form__item">
                    CStars (звезды сообщества) используются для продвижения в SUS. Вы можете потратить CStars, чтобы
                    увеличить
                    уровень сервера, или заказать отдельные услуги.
                </div>
                <div class="form__item">
                    <div class="form__item-title">
                        Выберите один из вариантов:
                    </div>
                    <div class="form__row form__row-3">
                        <div class="form__discount discount discount-green">
                            <a href="" class="discount__package icon-rhombus">
                                <span class="discount__info">
                                    <span class="discount__info-title">
                                        3 CStars
                                    </span>
                                    <span class="discount__sale discount__sale-red">
                                        По цене <span class="discount__sale-value">двух!</span>
                                    </span>
                                </span>
                                <span class="discount__price">
                                    <span class="discount__price-value">
                                        158₽
                                    </span>
                                    <span class="discount__price-period">
                                        / мес.
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="form__discount discount discount-blue">
                            <a href="" class="discount__package icon-rhombus">
                                <span class="discount__info">
                                    <span class="discount__info-title">
                                        7 CStars
                                    </span>
                                    <span class="discount__sale discount__sale-red">
                                        По цене <span class="discount__sale-value">пяти!</span>
                                    </span>
                                </span>
                                <span class="discount__price">
                                    <span class="discount__price-value">
                                        395₽
                                    </span>
                                    <span class="discount__price-period">
                                        / мес.
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="form__discount discount discount-yellow">
                            <a href="" class="discount__package icon-rhombus">
                                <span class="discount__info">
                                    <span class="discount__info-title">
                                        15 CStars
                                    </span>
                                    <span class="discount__sale discount__sale-red">
                                        По цене <span class="discount__sale-value">11-и!</span>
                                    </span>
                                </span>
                                <span class="discount__price">
                                    <span class="discount__price-value">
                                        869₽
                                    </span>
                                    <span class="discount__price-period">
                                        / мес.
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>

                </div>
                <div class="form__item">
                    <div class="form__item-title">
                        Или свое количество:
                    </div>
                    <div class="form__row ">
                        <input type="number" name="port" class="form__input form__input-min" placeholder="2302">
                        <div class="editor__card-balance">
                            <div class="editor-grid__balance-value icon-rhombus">
                                2 CStar
                            </div>
                            <div class="editor-grid__balance-title">
                                = 158₽ / мес
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form__item">
                    <button type="submit" class="btn btn-blue">
                        <span class="btn__text">
                            Купить
                        </span>
                    </button>
                </div>
            </form>
        </div>
    </div>

    <div id="buycstargre" class="popup open">
        <div class="popup__content">
            <form action="#" class="popup__body form">
                <a class="popup__close icon-close" href="#"></a>
                <div class="form__item form__title">
                    Купить <span class="color-blue form__label icon-rhombus">Community Stars</span>
                </div>
                <div class="form__item">
                    3 CStars по цене двух - хороший выбор!
                </div>
                <div class="form__item">
                    <div class="form__row form__row-3">
                        <div class="form__discount discount discount-green">
                            <a href="" class="discount__package icon-rhombus">
                                <span class="discount__info">
                                    <span class="discount__info-title">
                                        3 CStars
                                    </span>
                                    <span class="discount__sale discount__sale-red">
                                        По цене <span class="discount__sale-value">двух!</span>
                                    </span>
                                </span>
                                <span class="discount__price">
                                    <span class="discount__price-value">
                                        158₽
                                    </span>
                                    <span class="discount__price-period">
                                        / мес.
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="form__item">

                    <div class="form__row ">
                        Итого:
                        <div class="editor__card-balance">
                            <div class="editor-grid__balance-value icon-rhombus">
                                158₽ в месяц
                            </div>
                            <div class="editor-grid__balance-desc">
                                Продлевается автоматически,
                                можно отменить в любой момент.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form__item">
                    <button type="submit" class="btn btn-blue icon-io">
                        <span class="btn__text">
                            Перейти к оплате
                        </span>
                    </button>
                </div>
            </form>
        </div>
    </div>

    <div id="buycstargra" class="popup open">
        <div class="popup__content">
            <form action="#" class="popup__body form">
                <a class="popup__close icon-close" href="#"></a>
                <div class="form__item form__title">
                    Купить <span class="color-blue form__label icon-rhombus">Community Stars</span>
                </div>
                <div class="form__item">
                    5 CStars - то, что нужно серверу.
                </div>
                <div class="form__item">
                    <div class="form__row form__row-3">
                        <div class="form__discount discount discount-gray">
                            <a href="" class="discount__package icon-rhombus">
                                <span class="discount__info">
                                    <span class="discount__info-title">
                                        5 CStars
                                    </span>
                                    <span class="discount__sale">
                                        1 CStar = 79₽/мес
                                    </span>
                                </span>
                                <span class="discount__price">
                                    <span class="discount__price-value">
                                        395₽
                                    </span>
                                    <span class="discount__price-period">
                                        / мес.
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="form__item">

                    <div class="form__row ">
                        Итого:
                        <div class="editor__card-balance">
                            <div class="editor-grid__balance-value icon-rhombus">
                                395₽ в месяц
                            </div>
                            <div class="editor-grid__balance-desc">
                                Продлевается автоматически,
                                можно отменить в любой момент.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form__item">
                    <button type="submit" class="btn btn-blue icon-io">
                        <span class="btn__text">
                            Перейти к оплате
                        </span>
                    </button>
                </div>
            </form>
        </div>
    </div>

    <div id="exchange" class="popup open">
        <div class="popup__content">
            <form action="#" class="popup__body form">
                <a class="popup__close icon-close" href="#"></a>
                <div class="form__item form__title">
                    Обменять CStar на <span class="color-green form__label icon-rhombus">Репозиции</span>
                </div>
                <div class="form__item">
                    Репозиции позволяют освежить местоположение Вашего сервера в списке отображения.
                    Получите столько репозиций в месяц, сколько вложите CStar
                </div>
                <div class="form__item">

                    <div class="form__row ">
                        Баланс:
                        <div class="editor__card-balance">
                            <div class="editor-grid__balance-value icon-rhombus">
                                3 CStar
                            </div>
                            <div class="editor-grid__balance-title">
                                свободны
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form__item">
                    <div class="form__row">
                        <div class="form__discount discount discount-gray">
                            <a href="" class="discount__package icon-rhombus">
                                <span class="discount__info">
                                    <span class="discount__info-title">
                                        5 CStars
                                    </span>
                                    <span class="discount__sale">
                                        1 CStar = 79₽/мес
                                    </span>
                                </span>
                                <span class="discount__price">
                                    <span class="discount__price-value">
                                        395₽
                                    </span>
                                    <span class="discount__price-period">
                                        / мес.
                                    </span>
                                </span>
                            </a>
                        </div>
                        <input type="number" name="num" class="form__input form__input-min" placeholder="2">
                    </div>
                </div>
                <div class="form__item">

                    <div class="form__row ">
                        2 ваши
                        <div class="editor__card-balance">
                            <div class="editor-grid__balance-value icon-rhombus">
                                CStar 
                            </div>
                            <div class="editor-grid__balance-title">
                                = 2 Репозиции
                            </div>
                            
                            <div class="editor-grid__balance-desc">
                                Продлевается автоматически,
                                можно отменить в любой момент.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form__item">
                    <button type="submit" class="btn btn-blue icon-rhombus">
                        <span class="btn__text">
                            Активировать
                        </span>
                    </button>
                </div>
            </form>
        </div>
    </div>

    <div id="panicbuy" class="popup open">
        <div class="popup__content">
            <form action="#" class="popup__body form">
                <a class="popup__close icon-close" href="#"></a>
                <div class="form__item form__title">
                    Купить <span class="color-red form__label icon-rhombus">Кнопку паники</span>
                </div>
                <div class="form__item">
                    Кнопка паники позволяет на 24 часа заморозить возможность отправки новых ревью о сервере. Можно
                    активировать не чаще, чем раз в 30 дней.
                </div>
                <div class="form__item">
                    <div class="form__row">
                        <div class="form__discount discount discount-panic">
                            <a href="" class="discount__package icon-sos">
                                <span class="discount__info">
                                    <span class="discount__info-title">
                                        Кнопка паники
                                    </span>
                                    <span class="discount__sale">
                                        Если есть проблема
                                    </span>
                                </span>
                                <span class="discount__price">
                                    <span class="discount__price-value">
                                        149₽
                                    </span>
                                </span>
                            </a>
                        </div>
            
                    </div>
                </div>
                <div class="form__item">

                    <div class="form__row ">
                        Итого:
                        <div class="editor__card-balance">
                            <div class="editor-grid__balance-value icon-rhombus">
                                149₽
                            </div>
                            <div class="editor-grid__balance-desc">
                                Единоразово
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form__item">
                    <button type="submit" class="btn btn-blue icon-io">
                        <span class="btn__text">
                            Перейти к оплате
                        </span>
                    </button>
                </div>
            </form>
        </div>
    </div>

    <div id="panicactive"class="popup open">
        <div class="popup__content">
            <form action="#" class="popup__body form">
                <a class="popup__close icon-close" href="#"></a>
                <div class="form__item form__title">
                    Активировать КНОПКУ ПАНИКИ?
                </div>
                <div class="form__item form__text">
                    Кнопка паники будет активирована. Пользователи не смогут оставлять ревью и менять userscore
                    следующие
                    24 часа. Следующая активация будет доступна через 30 дней.
                </div>
                <div class="form__item">
                    <div class="form__row">
                        <button type="submit" class="btn btn-red">
                            Активировать!
                        </button>
                        <button type="button" class="btn btn-border">
                            Отмена
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    
</div>