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
            <a href="/server-setting" class="menu__link icon-setting active">Настройки сервера</a>
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
                            Настройка бота Discord
                        </h2>
                        <p class="editor__card-desc">
                            Каждый сервер, добавляемый в SUS, должен быть привязан к своему оффициальному
                            Discord серверу. Это необходимо, чтобы отслеживать статистику активности, а также
                            позволит нашим пользователям быстрее найти официальные ресурсы Вашего проекта.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Укажите Discord гильдию вашего сервера
                                </div>
                                <div class="form__options">
                                    <label class="form__option">
                                        <input type="radio" name="guild" checked value="1"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-thumb">
                                                <img src="img/servers/NSC.png" class="cover-image" alt="NSC">
                                            </span>
                                            <span class="form__option-text">
                                                Namalsk Stalker
                                                Classic
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="guild" value="2"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-thumb">
                                                <img src="img/servers/SUS.png" class="cover-image" alt="SUS">
                                            </span>
                                            <span class="form__option-text">
                                                Servers User Score
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="guild" value="3"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-thumb">
                                                <img src="img/servers/MIG.png" class="cover-image" alt="MIG">
                                            </span>
                                            <span class="form__option-text">
                                                Migliore RP
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="guild" value="4"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-thumb">
                                                <img src="img/servers/stalker.png" class="cover-image" alt="MIG">
                                            </span>
                                            <span class="form__option-text">
                                                Migliore Stalker Roleplay
                                            </span>
                                        </span>
                                    </label>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Статус сервера Discord
                        </h2>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    К серверу привязан Discord сервер:
                                </div>
                                <div class="form__options">
                                    <label class="form__option">
                                        <input type="radio" name="discord" checked value="1"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-thumb">
                                                <img src="img/servers/MIG.png" class="cover-image" alt="MIG">
                                            </span>
                                            <span class="form__option-text">
                                                Migliore RP
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="discord" value="2"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon ">
                                                <img src="img/icons/draw.svg" alt="icon draw">
                                            </span>
                                            <span class="form__option-text">
                                                Сменить Discord
                                            </span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title">
                                    Статус Discord сервера:
                                </div>
                                <div class="form__server-status server-status">
                                    <div class="server-status__row">
                                        Участников: <span class="color-red">280</span> / осталось 20
                                        участников, чтобы получить статус &lt;Отображается&gt;
                                    </div>
                                    <div class="server-status__row">
                                        Статус бота: <span class="color-green"> Онлайн</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Настройка игры
                        </h2>
                        <p class="editor__card-desc">
                            Выберите раздел, в котором будет отображаться Ваш сервер. Обратите внимание,
                            что некоторые игры имеют несколько разделов. Выберите тот, который лучше всего
                            подходит для описания Вашего сервера.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Выберите игру
                                </div>
                                <div class="form__options">
                                    <label class="form__option">
                                        <input type="radio" name="game" value="1" class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/dayz.png" class="cover-image" alt="dayz">
                                            </span>
                                            <span class="form__option-text">
                                                DayZ Vanilla / ++
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" value="2" class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/dayzstalker.png" class="cover-image"
                                                    alt="DayZ Stalker RP">
                                            </span>
                                            <span class="form__option-text">
                                                DayZ Stalker RP
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" value="3" class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/dayzstalker.png" class="cover-image"
                                                    alt="DayZ Stalker RP">
                                            </span>
                                            <span class="form__option-text">
                                                DayZ Stalker PVP/PVE
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" value="4" class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/dayz.png" class="cover-image" alt="dayz">
                                            </span>
                                            <span class="form__option-text">
                                                DayZ RolePlay (Не&nbsp;сталкер)
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" value="5" class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/gmod.png" class="cover-image" alt="gmod">
                                            </span>
                                            <span class="form__option-text">
                                                GMOD Legacy Gamemodes
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" value="6" class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/darkRP.png" class="cover-image" alt="darkRP">
                                            </span>
                                            <span class="form__option-text">
                                                GMOD Role Play
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" value="7" class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/unturned.png" class="cover-image" alt="unt">
                                            </span>
                                            <span class="form__option-text">
                                                Unturned
                                                PVP&nbsp;/&nbsp;PVE
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" value="8" class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/unturned.png" class="cover-image" alt="unt">
                                            </span>
                                            <span class="form__option-text">
                                                Unturned
                                                Role&nbsp;Play
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" value="9" class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/arma.png" class="cover-image" alt="arma">
                                            </span>
                                            <span class="form__option-text">
                                                Arma 3 RP
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" value="10"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/arma.png" class="cover-image" alt="arma">
                                            </span>
                                            <span class="form__option-text">
                                                Arma 3 TVT Serious Games
                                            </span>
                                        </span>
                                    </label>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div class="editor__card editor__card-overlay">
                        <h2 class="editor__card-title title">
                            Настройка игры
                        </h2>
                        <p class="editor__card-desc">
                            Выберите раздел, в котором будет отображаться Ваш сервер. Обратите внимание,
                            что некоторые игры имеют несколько разделов. Выберите тот, который лучше всего
                            подходит для описания Вашего сервера.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Выберите игру
                                </div>
                                <div class="form__options">
                                    <label class="form__option">
                                        <input type="radio" name="game" value="1" class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/dayz.png" class="cover-image" alt="dayz">
                                            </span>
                                            <span class="form__option-text">
                                                DayZ Vanilla / ++
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" value="2" class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/dayzstalker.png" class="cover-image"
                                                    alt="DayZ Stalker RP">
                                            </span>
                                            <span class="form__option-text">
                                                DayZ Stalker RP
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" value="3" class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/dayzstalker.png" class="cover-image"
                                                    alt="DayZ Stalker RP">
                                            </span>
                                            <span class="form__option-text">
                                                DayZ Stalker PVP/PVE
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" value="4" class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/dayz.png" class="cover-image" alt="dayz">
                                            </span>
                                            <span class="form__option-text">
                                                DayZ RolePlay (Не&nbsp;сталкер)
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" value="5" class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/gmod.png" class="cover-image" alt="gmod">
                                            </span>
                                            <span class="form__option-text">
                                                GMOD Legacy Gamemodes
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" value="6" class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/darkRP.png" class="cover-image" alt="darkRP">
                                            </span>
                                            <span class="form__option-text">
                                                GMOD Role Play
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" value="7" class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/unturned.png" class="cover-image" alt="unt">
                                            </span>
                                            <span class="form__option-text">
                                                Unturned
                                                PVP&nbsp;/&nbsp;PVE
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" value="8" class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/unturned.png" class="cover-image" alt="unt">
                                            </span>
                                            <span class="form__option-text">
                                                Unturned
                                                Role&nbsp;Play
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" value="9" class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/arma.png" class="cover-image" alt="arma">
                                            </span>
                                            <span class="form__option-text">
                                                Arma 3 RP
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" value="10"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-image">
                                                <img src="img/games/arma.png" class="cover-image" alt="arma">
                                            </span>
                                            <span class="form__option-text">
                                                Arma 3 TVT Serious Games
                                            </span>
                                        </span>
                                    </label>
                                </div>
                            </div>

                        </form>
                        <div class="editor__card-info overlay-card">
                            <div class="overlay-card__icon">
                                <img src="img/icons/warning.svg" alt="icon warning">
                            </div>
                            <div class="overlay-card__title">
                                МУЛЬТИСЕРВЕР
                            </div>
                            <div class="overlay-card__text">
                                Вы активировали “Мультисервер”. Это позволяет Вам настраивать
                                игру для каждого из ваших серверов по отдельности. Перейдите
                                во вкладку “Мультисервер”, чтобы настроить параметры.
                            </div>
                        </div>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Настройка автоподключения
                        </h2>
                        <p class="editor__card-desc">
                            Если вы не устанавливали особые правила отбора игроков, вы можете включить
                            автоподключение. Пользователи увидят кнопку “Подключиться” около карточки
                            Вашего сервера, и смогут зайти в этот же момент.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Включить автоподключение?
                                </div>
                                <label class="form__toggler">
                                    <input type="checkbox" name="autoconnect" class="form__toggler-input hidden">
                                    <span class="form__toggler-content">
                                        <span class="form__toggler-btn">
                                            Включить
                                        </span>
                                        <span class="form__toggler-btn">
                                            Выключить
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title">
                                    Введите IP и Port сервера
                                </div>
                                <div class="form__inputs form__inputs-ip">
                                    <input type="number" name="ip" class="form__input" placeholder="189.332.23.12">
                                    <input type="number" name="port" class="form__input" placeholder="2302">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="editor__card editor__card-overlay">
                        <h2 class="editor__card-title title">
                            Настройка автоподключения
                        </h2>
                        <p class="editor__card-desc">
                            Если вы не устанавливали особые правила отбора игроков, вы можете включить
                            автоподключение. Пользователи увидят кнопку “Подключиться” около карточки
                            Вашего сервера, и смогут зайти в этот же момент.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Включить автоподключение?
                                </div>
                                <label class="form__toggler">
                                    <input type="checkbox" name="autoconnect" class="form__toggler-input hidden">
                                    <span class="form__toggler-content">
                                        <span class="form__toggler-btn">
                                            Включить
                                        </span>
                                        <span class="form__toggler-btn">
                                            Выключить
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title">
                                    Введите IP и Port сервера
                                </div>
                                <div class="form__inputs form__inputs-ip">
                                    <input type="number" name="ip" class="form__input" placeholder="189.332.23.12">
                                    <input type="number" name="port" class="form__input" placeholder="2302">
                                </div>
                            </div>
                        </form>
                        <div class="editor__card-info overlay-card">
                            <div class="overlay-card__icon">
                                <img src="img/icons/warning.svg" alt="icon warning">
                            </div>
                            <div class="overlay-card__title">
                                АВТОПОДКЛЮЧЕНИЕ НЕ ДОСТУПНО
                            </div>
                            <div class="overlay-card__text">
                                На данный момент автоподключение доступно только в играх,
                                базирующих свой мультиплеер через Steam API. DayZ и Arma 3
                                имеют сторонние системы серверов, делающие автоподключение
                                невозможным.
                            </div>
                        </div>
                    </div>
                    <div class="editor__card editor__card-overlay">
                        <h2 class="editor__card-title title">
                            Настройка автоподключения
                        </h2>
                        <p class="editor__card-desc">
                            Если вы не устанавливали особые правила отбора игроков, вы можете включить
                            автоподключение. Пользователи увидят кнопку “Подключиться” около карточки
                            Вашего сервера, и смогут зайти в этот же момент.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Включить автоподключение?
                                </div>
                                <label class="form__toggler">
                                    <input type="checkbox" name="autoconnect" class="form__toggler-input hidden">
                                    <span class="form__toggler-content">
                                        <span class="form__toggler-btn">
                                            Включить
                                        </span>
                                        <span class="form__toggler-btn">
                                            Выключить
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title">
                                    Введите IP и Port сервера
                                </div>
                                <div class="form__inputs form__inputs-ip">
                                    <input type="number" name="ip" class="form__input" placeholder="189.332.23.12">
                                    <input type="number" name="port" class="form__input" placeholder="2302">
                                </div>
                            </div>
                        </form>
                        <div class="editor__card-info overlay-card">
                            <div class="overlay-card__icon">
                                <img src="img/icons/warning.svg" alt="icon warning">
                            </div>
                            <div class="overlay-card__title">
                                АВТОПОДКЛЮЧЕНИЕ НЕ ДОСТУПНО
                            </div>
                            <div class="overlay-card__text">
                                Автоподключение для мультисерверов настраивается отдельно
                                для каждого сервера в составе. Перейдите во вкладку “Мультисервер”, чтобы
                                настроить автоподключение.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="editor__column">
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Настройка FAIRSCORE
                        </h2>
                        <p class="editor__card-desc">
                            Для наиболее точного составления Review Score вашего сервера, мы проверяем,
                            играл игрок на вашем сервере, или нет. В связи с тем, что отслеживание игроков
                            через Steam API в игре DayZ не возможно, мы разработали специальный плагин.
                            Следуйте инструкции, чтобы установить плагин на сервер.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Скачайте плагин
                                </div>
                                <div class="form__download">
                                    <a href="" download
                                        class="form__download-btn btn btn-red icon-download">Загрузить</a>
                                </div>
                            </div>
                            <div class="form__item">
                                <p class="form__text">
                                    Разместите файл в корневой папке сервера и выполните полный перезапуск.
                                </p>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title">
                                    Введите IP и Port сервера
                                </div>
                                <div class="form__inputs form__inputs-ip">
                                    <input type="number" name="ip" class="form__input" placeholder="189.332.23.12">
                                    <input type="number" name="port" class="form__input" placeholder="2302">
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__status form__status-completed">
                                    Соединение установлено
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__status form__status-fail">
                                    Нет соединения
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Настройка FAIRSCORE
                        </h2>
                        <p class="editor__card-desc">
                            Для наиболее точного составления Review Score вашего сервера, мы проверяем,
                            играл игрок на вашем сервере, или нет. Чтобы мы могли отслеживать игроков
                            через Steam API, введите IP и Port вашего сервера.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Введите IP и Port сервера
                                </div>
                                <div class="form__inputs form__inputs-ip">
                                    <input type="number" name="ip" class="form__input" placeholder="189.332.23.12">
                                    <input type="number" name="port" class="form__input" placeholder="2302">
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__status form__status-succes">
                                    Соединение установлено
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="editor__card editor__card-overlay">
                        <h2 class="editor__card-title title">
                            Настройка FAIRSCORE
                        </h2>
                        <p class="editor__card-desc">
                            Для наиболее точного составления Review Score вашего сервера, мы проверяем,
                            играл игрок на вашем сервере, или нет. В связи с тем, что отслеживание игроков
                            через Steam API в игре DayZ не возможно, мы разработали специальный плагин.
                            Следуйте инструкции, чтобы установить плагин на сервер.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Скачайте плагин
                                </div>
                                <div class="form__download">
                                    <a href="" download
                                        class="form__download-btn btn btn-red icon-download">Загрузить</a>
                                </div>
                            </div>
                            <div class="form__item">
                                <p class="form__text">
                                    Разместите файл в корневой папке сервера и выполните полный перезапуск.
                                </p>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title">
                                    Введите IP и Port сервера
                                </div>
                                <div class="form__inputs form__inputs-ip">
                                    <input type="number" name="ip" class="form__input" placeholder="189.332.23.12">
                                    <input type="number" name="port" class="form__input" placeholder="2302">
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__status">
                                    Соединение установлено
                                </div>
                            </div>
                        </form>
                        <div class="editor__card-info overlay-card">
                            <div class="overlay-card__icon">
                                <img src="img/icons/warning.svg" alt="icon warning">
                            </div>
                            <div class="overlay-card__title">
                                FAIRSCORE НЕ ДОСТУПЕН
                            </div>
                            <div class="overlay-card__text">
                                На данный момент установка FAIRSCORE для игры
                                Arma 3 не возможна. Отзывы будут публиковаться
                                без автоматической проверки.
                            </div>
                        </div>
                    </div>
                    <div class="editor__card editor__card-overlay">
                        <h2 class="editor__card-title title">
                            Настройка FAIRSCORE
                        </h2>
                        <p class="editor__card-desc">
                            Для наиболее точного составления Review Score вашего сервера, мы проверяем,
                            играл игрок на вашем сервере, или нет. В связи с тем, что отслеживание игроков
                            через Steam API в игре DayZ не возможно, мы разработали специальный плагин.
                            Следуйте инструкции, чтобы установить плагин на сервер.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Скачайте плагин
                                </div>
                                <div class="form__download">
                                    <a href="" download
                                        class="form__download-btn btn btn-red icon-download">Загрузить</a>
                                </div>
                            </div>
                            <div class="form__item">
                                <p class="form__text">
                                    Разместите файл в корневой папке сервера и выполните полный перезапуск.
                                </p>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title">
                                    Введите IP и Port сервера
                                </div>
                                <div class="form__inputs form__inputs-ip">
                                    <input type="number" name="ip" class="form__input" placeholder="189.332.23.12">
                                    <input type="number" name="port" class="form__input" placeholder="2302">
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__status">
                                    Соединение установлено
                                </div>
                            </div>
                        </form>
                        <div class="editor__card-info overlay-card">
                            <div class="overlay-card__icon">
                                <img src="img/icons/warning.svg" alt="icon warning">
                            </div>
                            <div class="overlay-card__title">
                                FAIRSCORE ДЛЯ МУЛЬТИСЕРВЕРОВ
                            </div>
                            <div class="overlay-card__text">
                                Настройка FAIRSCORE для мультисерверов происходит через
                                вкладку “мультисервер”. Перейдите, чтобы настроить FAIRSCORE для
                                мультисерверов.
                            </div>
                        </div>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Активировать Мультисервер
                        </h2>
                        <p class="editor__card-desc">
                            Функция мультисервер позволяет добавить несколько серверов в один проект.
                            Это удобно, если у вас много серверов, объединенных под одним брендом.
                            Активация мультисервера разблокирует вкладку “мультисервер”. Вы сможете
                            настроить каждый из своих серверов отдельно. <a href=""
                                class="editor__card-link">Подробнее</a>
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Активировать мультисервер?
                                </div>
                                <label class="form__toggler">
                                    <input type="checkbox" name="multiserver" checked
                                        class="form__toggler-input hidden">
                                    <span class="form__toggler-content">
                                        <span class="form__toggler-btn">
                                            Включить
                                        </span>
                                        <span class="form__toggler-btn">
                                            Выключить
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
</div>