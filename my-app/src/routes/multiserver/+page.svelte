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
            <a href="/multiserver" aria-disabled="true" class="menu__link icon-server active">Мультисервер</a>
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
            <div class="server-editor__content server-editor__content-big editor">
                <div class="editor__column editor__column-big">
                    <div class="editor__card">
                        <div class="editor__add-server">
                            <div class="editor__add-server-title">
                                Добавьте свой первый сервер
                            </div>
                            <button type="button" class="editor__add-server-btn icon-add"></button>
                        </div>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Ваш сервер #1
                        </h2>
                        <p class="editor__card-desc">
                            Заполните все необходимые поля о вашем сервере.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__inputs form__inputs-2">
                                    <div class="form__inputs-item">
                                        <div class="form__item-title">
                                            Введите название
                                        </div>
                                        <input type="text" name="title" class="form__input"
                                            placeholder="Введите название">
                                    </div>
                                    <div class="form__inputs-item">
                                        <div class="form__item-title">
                                            Укажите игру этого сервера
                                        </div>
                                        <div class="form__dropdown dropdown dropdown-mw">
                                            <button class="dropdown__button" type="button">
                                                Выберите вариант
                                            </button>
                                            <ul class="dropdown__list">
                                                <li class="dropdown__list-item" data-value="dv">
                                                    DayZ Vanilla / V++
                                                </li>
                                                <li class="dropdown__list-item" data-value="dsrp">
                                                    DayZ Stalker RP
                                                </li>
                                                <li class="dropdown__list-item" data-value="dspp">
                                                    DayZ Stalker PVP / PVE
                                                </li>
                                                <li class="dropdown__list-item" data-value="drp">
                                                    DayZ RP (Не сталкер)
                                                </li>
                                                <li class="dropdown__list-item" data-value="gmcg">
                                                    Garry’s Mod Legacy Gamemodes
                                                </li>
                                                <li class="dropdown__list-item" data-value="gm1">
                                                    Garry’s Mod Dark RP
                                                </li>
                                                <li class="dropdown__list-item" data-value="upp">
                                                    Unturned PVP / PVE
                                                </li>
                                                <li class="dropdown__list-item" data-value="urp">
                                                    Unturned Role Play
                                                </li>
                                            </ul>
                                            <input class="dropdown__input hidden" type="text"
                                                name="select-category-2" value="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title">
                                    Введите описание сервера
                                </div>
                                <div class="form__inputs">
                                    <textarea name="description" class="form__textarea"
                                        placeholder="Расскажите, как на Вашем сервере летают бабочки..."></textarea>
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__inputs form__inputs-2-lg">
                                    <div class="form__inputs-item">
                                        <div class="form__item-title">
                                            Загрузите логотип сервера
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
                                    <div class="form__inputs-items">
                                        <div class="form__inputs-item form__item">
                                            <div class="form__item-title">
                                                Введите IP и Port сервера
                                            </div>
                                            <div class="form__inputs form__inputs-ip-mw">
                                                <input type="number" name="ip" class="form__input"
                                                    placeholder="189.332.23.12">
                                                <input type="number" name="port" class="form__input"
                                                    placeholder="2302">
                                            </div>
                                        </div>
                                        <div class="form__inputs-item form__item">
                                            <div class="form__item-title">
                                                У сервера есть свой Discord?
                                            </div>
                                            <div class="form__item form__row">
                                                <label class="form__toggler form__toggler-min">
                                                    <input type="checkbox" name="Discord"
                                                        class="form__toggler-input hidden">
                                                    <span class="form__toggler-content">
                                                        <span class="form__toggler-btn">
                                                            Да
                                                        </span>
                                                        <span class="form__toggler-btn">
                                                            Нет
                                                        </span>
                                                    </span>
                                                </label>
                                                <button type="button" disabled class="btn btn-red btn-sm">Нет
                                                    сервера</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title">
                                    Настройте тезисы о сервере
                                </div>
                                <div class="form__inputs form__inputs-3">
                                    <div class="form__inputs-item">
                                        <div class="form__dropdown dropdown dropdown-mw">
                                            <button class="dropdown__button" type="button">
                                                Выберите из списка
                                            </button>
                                            <ul class="dropdown__list">
                                                <li class="dropdown__list-item" data-value="rp">
                                                    Сложность РП
                                                </li>
                                                <li class="dropdown__list-item" data-value="e">
                                                    Экономика
                                                </li>
                                                <li class="dropdown__list-item" data-value="cart">
                                                    Игровая карта
                                                </li>
                                                <li class="dropdown__list-item" data-value="pvp">
                                                    Сложность ПВП
                                                </li>
                                                <li class="dropdown__list-item" data-value="sport">
                                                    Спортивность
                                                </li>
                                                <li class="dropdown__list-item" data-value="high">
                                                    Сложность
                                                </li>
                                                <li class="dropdown__list-item" data-value="setting">
                                                    Сеттинг
                                                </li>
                                                <li class="dropdown__list-item" data-value="game">
                                                    Игровой Режим
                                                </li>
                                                <li class="dropdown__list-item" data-value="exp">
                                                    Прокачка
                                                </li>
                                                <li class="dropdown__list-item" data-value="fraction">
                                                    Фракции
                                                </li>
                                                <li class="dropdown__list-item" data-value="mods">
                                                    Моды
                                                </li>
                                                <li class="dropdown__list-item" data-value="persons">
                                                    Набор персонала
                                                </li>
                                                <li class="dropdown__list-item" data-value="gifts">
                                                    Призы
                                                </li>
                                                <li class="dropdown__list-item" data-value="var">
                                                    Свой вариант
                                                </li>
                                            </ul>
                                            <input class="dropdown__input hidden" type="text"
                                                name="select-category-1" value="" />
                                        </div>
                                    </div>
                                    <div class="form__inputs-item">
                                        <div class="form__dropdown dropdown dropdown-mw">
                                            <button class="dropdown__button" type="button">
                                                Выберите из списка
                                            </button>
                                            <ul class="dropdown__list">
                                                <li class="dropdown__list-item" data-value="rp">
                                                    Сложность РП
                                                </li>
                                                <li class="dropdown__list-item" data-value="e">
                                                    Экономика
                                                </li>
                                                <li class="dropdown__list-item" data-value="cart">
                                                    Игровая карта
                                                </li>
                                                <li class="dropdown__list-item" data-value="pvp">
                                                    Сложность ПВП
                                                </li>
                                                <li class="dropdown__list-item" data-value="sport">
                                                    Спортивность
                                                </li>
                                                <li class="dropdown__list-item" data-value="high">
                                                    Сложность
                                                </li>
                                                <li class="dropdown__list-item" data-value="setting">
                                                    Сеттинг
                                                </li>
                                                <li class="dropdown__list-item" data-value="game">
                                                    Игровой Режим
                                                </li>
                                                <li class="dropdown__list-item" data-value="exp">
                                                    Прокачка
                                                </li>
                                                <li class="dropdown__list-item" data-value="fraction">
                                                    Фракции
                                                </li>
                                                <li class="dropdown__list-item" data-value="mods">
                                                    Моды
                                                </li>
                                                <li class="dropdown__list-item" data-value="persons">
                                                    Набор персонала
                                                </li>
                                                <li class="dropdown__list-item" data-value="gifts">
                                                    Призы
                                                </li>
                                                <li class="dropdown__list-item" data-value="var">
                                                    Свой вариант
                                                </li>
                                            </ul>
                                            <input class="dropdown__input hidden" type="text"
                                                name="select-category-1" value="" />
                                        </div>
                                    </div>
                                    <div class="form__inputs-item">
                                        <div class="form__dropdown dropdown dropdown-mw">
                                            <button class="dropdown__button" type="button">
                                                Выберите из списка
                                            </button>
                                            <ul class="dropdown__list">
                                                <li class="dropdown__list-item" data-value="rp">
                                                    Сложность РП
                                                </li>
                                                <li class="dropdown__list-item" data-value="e">
                                                    Экономика
                                                </li>
                                                <li class="dropdown__list-item" data-value="cart">
                                                    Игровая карта
                                                </li>
                                                <li class="dropdown__list-item" data-value="pvp">
                                                    Сложность ПВП
                                                </li>
                                                <li class="dropdown__list-item" data-value="sport">
                                                    Спортивность
                                                </li>
                                                <li class="dropdown__list-item" data-value="high">
                                                    Сложность
                                                </li>
                                                <li class="dropdown__list-item" data-value="setting">
                                                    Сеттинг
                                                </li>
                                                <li class="dropdown__list-item" data-value="game">
                                                    Игровой Режим
                                                </li>
                                                <li class="dropdown__list-item" data-value="exp">
                                                    Прокачка
                                                </li>
                                                <li class="dropdown__list-item" data-value="fraction">
                                                    Фракции
                                                </li>
                                                <li class="dropdown__list-item" data-value="mods">
                                                    Моды
                                                </li>
                                                <li class="dropdown__list-item" data-value="persons">
                                                    Набор персонала
                                                </li>
                                                <li class="dropdown__list-item" data-value="gifts">
                                                    Призы
                                                </li>
                                                <li class="dropdown__list-item" data-value="var">
                                                    Свой вариант
                                                </li>
                                            </ul>
                                            <input class="dropdown__input hidden" type="text"
                                                name="select-category-1" value="" />
                                        </div>
                                    </div>
                                    <div class="form__inputs-item">
                                        <div class="form__dropdown dropdown dropdown-mw">
                                            <button class="dropdown__button" type="button">
                                                Выберите из списка
                                            </button>
                                            <ul class="dropdown__list">
                                                <li class="dropdown__list-item" data-value="rp">
                                                    Сложность РП
                                                </li>
                                                <li class="dropdown__list-item" data-value="e">
                                                    Экономика
                                                </li>
                                                <li class="dropdown__list-item" data-value="cart">
                                                    Игровая карта
                                                </li>
                                                <li class="dropdown__list-item" data-value="pvp">
                                                    Сложность ПВП
                                                </li>
                                                <li class="dropdown__list-item" data-value="sport">
                                                    Спортивность
                                                </li>
                                                <li class="dropdown__list-item" data-value="high">
                                                    Сложность
                                                </li>
                                                <li class="dropdown__list-item" data-value="setting">
                                                    Сеттинг
                                                </li>
                                                <li class="dropdown__list-item" data-value="game">
                                                    Игровой Режим
                                                </li>
                                                <li class="dropdown__list-item" data-value="exp">
                                                    Прокачка
                                                </li>
                                                <li class="dropdown__list-item" data-value="fraction">
                                                    Фракции
                                                </li>
                                                <li class="dropdown__list-item" data-value="mods">
                                                    Моды
                                                </li>
                                                <li class="dropdown__list-item" data-value="persons">
                                                    Набор персонала
                                                </li>
                                                <li class="dropdown__list-item" data-value="gifts">
                                                    Призы
                                                </li>
                                                <li class="dropdown__list-item" data-value="var">
                                                    Свой вариант
                                                </li>
                                            </ul>
                                            <input class="dropdown__input hidden" type="text"
                                                name="select-category-1" value="" />
                                        </div>
                                    </div>
                                    <div class="form__inputs-item">
                                        <input type="text" name="desc-1" class="form__input"
                                            placeholder="Введите описание (не более 25с)">
                                    </div>
                                    <div class="form__inputs-item">
                                        <input type="text" name="title-1" class="form__input"
                                            placeholder="Введите заголовок">
                                    </div>
                                    <div class="form__inputs-item">
                                        <input type="text" name="desc-2" class="form__input"
                                            placeholder="Введите описание (не более 25с)">
                                    </div>
                                </div>
                            </div>
                            <div class="form__item form__row form__fairscore">
                                <div class="form__fairscore-item editor__card-bold">
                                    Статус FAIRSCORE
                                </div>
                                <div class="form__fairscore-item form__status form__status-fail">
                                    Нет соединения
                                </div>
                            </div>
                            <p class="form__item editor__card-desc">
                                Заполните поле IP и Port, и установите мод по нашей <a href=""
                                    class="editor__card-link">инструкции</a>.
                                Если получилось правильно: появится соединение.
                            </p>
                            <div class="form__inputs-item form__item">
                                <div class="form__item-title">
                                    Включить автоподключение?
                                </div>
                                <div class="form__item">
                                    <label class="form__toggler">
                                        <input type="checkbox" name="autoconnect"
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
                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <div class="editor__add-server">
                            <div class="editor__add-server-title">
                                Добавьте, как минимум, еще один сервер
                            </div>
                            <button type="button" class="editor__add-server-btn icon-add"></button>
                        </div>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Ваш сервер #2
                        </h2>
                        <p class="editor__card-desc">
                            Заполните все необходимые поля о вашем сервере.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__inputs form__inputs-2">
                                    <div class="form__inputs-item">
                                        <div class="form__item-title">
                                            Введите название
                                        </div>
                                        <input type="text" name="title" class="form__input"
                                            placeholder="Введите название">
                                    </div>
                                    <div class="form__inputs-item">
                                        <div class="form__item-title">
                                            Укажите игру этого сервера
                                        </div>
                                        <div class="form__dropdown dropdown dropdown-mw">
                                            <button class="dropdown__button" type="button">
                                                Выберите вариант
                                            </button>
                                            <ul class="dropdown__list">
                                                <li class="dropdown__list-item" data-value="dv">
                                                    DayZ Vanilla / V++
                                                </li>
                                                <li class="dropdown__list-item" data-value="dsrp">
                                                    DayZ Stalker RP
                                                </li>
                                                <li class="dropdown__list-item" data-value="dspp">
                                                    DayZ Stalker PVP / PVE
                                                </li>
                                                <li class="dropdown__list-item" data-value="drp">
                                                    DayZ RP (Не сталкер)
                                                </li>
                                                <li class="dropdown__list-item" data-value="gmcg">
                                                    Garry’s Mod Legacy Gamemodes
                                                </li>
                                                <li class="dropdown__list-item" data-value="gm1">
                                                    Garry’s Mod Dark RP
                                                </li>
                                                <li class="dropdown__list-item" data-value="upp">
                                                    Unturned PVP / PVE
                                                </li>
                                                <li class="dropdown__list-item" data-value="urp">
                                                    Unturned Role Play
                                                </li>
                                            </ul>
                                            <input class="dropdown__input hidden" type="text"
                                                name="select-category-2" value="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title">
                                    Введите описание сервера
                                </div>
                                <div class="form__inputs">
                                    <textarea name="description" class="form__textarea"
                                        placeholder="Расскажите, как на Вашем сервере летают бабочки..."></textarea>
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__inputs form__inputs-2-lg">
                                    <div class="form__inputs-item">
                                        <div class="form__item-title">
                                            Загрузите логотип сервера
                                        </div>
                                        <div class="form__file">
                                            <div class="form__file-preview">
                                                <img src="img/servers/NSC-2.png" class="cover-image"
                                                    alt="NSC preview">
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
                                    <div class="form__inputs-items">
                                        <div class="form__inputs-item form__item">
                                            <div class="form__item-title">
                                                Введите IP и Port сервера
                                            </div>
                                            <div class="form__inputs form__inputs-ip-mw">
                                                <input type="number" name="ip" class="form__input"
                                                    placeholder="189.332.23.12">
                                                <input type="number" name="port" class="form__input"
                                                    placeholder="2302">
                                            </div>
                                        </div>
                                        <div class="form__inputs-item form__item">
                                            <div class="form__item-title">
                                                У сервера есть свой Discord?
                                            </div>
                                            <div class="form__item form__row">
                                                <label class="form__toggler form__toggler-min">
                                                    <input type="checkbox" name="Discord"
                                                        class="form__toggler-input hidden">
                                                    <span class="form__toggler-content">
                                                        <span class="form__toggler-btn">
                                                            Да
                                                        </span>
                                                        <span class="form__toggler-btn">
                                                            Нет
                                                        </span>
                                                    </span>
                                                </label>
                                                <button type="button" disabled class="btn btn-red btn-sm">Нет
                                                    сервера</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title icon-info">
                                    Настройте тезисы о сервере
                                </div>
                                <div class="form__inputs form__inputs-3">
                                    <div class="form__inputs-item">
                                        <div class="form__dropdown dropdown dropdown-mw">
                                            <button class="dropdown__button" type="button">
                                                Выберите из списка
                                            </button>
                                            <ul class="dropdown__list">
                                                <li class="dropdown__list-item" data-value="rp">
                                                    Сложность РП
                                                </li>
                                                <li class="dropdown__list-item" data-value="e">
                                                    Экономика
                                                </li>
                                                <li class="dropdown__list-item" data-value="cart">
                                                    Игровая карта
                                                </li>
                                                <li class="dropdown__list-item" data-value="pvp">
                                                    Сложность ПВП
                                                </li>
                                                <li class="dropdown__list-item" data-value="sport">
                                                    Спортивность
                                                </li>
                                                <li class="dropdown__list-item" data-value="high">
                                                    Сложность
                                                </li>
                                                <li class="dropdown__list-item" data-value="setting">
                                                    Сеттинг
                                                </li>
                                                <li class="dropdown__list-item" data-value="game">
                                                    Игровой Режим
                                                </li>
                                                <li class="dropdown__list-item" data-value="exp">
                                                    Прокачка
                                                </li>
                                                <li class="dropdown__list-item" data-value="fraction">
                                                    Фракции
                                                </li>
                                                <li class="dropdown__list-item" data-value="mods">
                                                    Моды
                                                </li>
                                                <li class="dropdown__list-item" data-value="persons">
                                                    Набор персонала
                                                </li>
                                                <li class="dropdown__list-item" data-value="gifts">
                                                    Призы
                                                </li>
                                                <li class="dropdown__list-item" data-value="var">
                                                    Свой вариант
                                                </li>
                                            </ul>
                                            <input class="dropdown__input hidden" type="text"
                                                name="select-category-1" value="" />
                                        </div>
                                    </div>
                                    <div class="form__inputs-item">
                                        <div class="form__dropdown dropdown dropdown-mw">
                                            <button class="dropdown__button" type="button">
                                                Выберите из списка
                                            </button>
                                            <ul class="dropdown__list">
                                                <li class="dropdown__list-item" data-value="rp">
                                                    Сложность РП
                                                </li>
                                                <li class="dropdown__list-item" data-value="e">
                                                    Экономика
                                                </li>
                                                <li class="dropdown__list-item" data-value="cart">
                                                    Игровая карта
                                                </li>
                                                <li class="dropdown__list-item" data-value="pvp">
                                                    Сложность ПВП
                                                </li>
                                                <li class="dropdown__list-item" data-value="sport">
                                                    Спортивность
                                                </li>
                                                <li class="dropdown__list-item" data-value="high">
                                                    Сложность
                                                </li>
                                                <li class="dropdown__list-item" data-value="setting">
                                                    Сеттинг
                                                </li>
                                                <li class="dropdown__list-item" data-value="game">
                                                    Игровой Режим
                                                </li>
                                                <li class="dropdown__list-item" data-value="exp">
                                                    Прокачка
                                                </li>
                                                <li class="dropdown__list-item" data-value="fraction">
                                                    Фракции
                                                </li>
                                                <li class="dropdown__list-item" data-value="mods">
                                                    Моды
                                                </li>
                                                <li class="dropdown__list-item" data-value="persons">
                                                    Набор персонала
                                                </li>
                                                <li class="dropdown__list-item" data-value="gifts">
                                                    Призы
                                                </li>
                                                <li class="dropdown__list-item" data-value="var">
                                                    Свой вариант
                                                </li>
                                            </ul>
                                            <input class="dropdown__input hidden" type="text"
                                                name="select-category-1" value="" />
                                        </div>
                                    </div>
                                    <div class="form__inputs-item">
                                        <div class="form__dropdown dropdown dropdown-mw">
                                            <button class="dropdown__button" type="button">
                                                Выберите из списка
                                            </button>
                                            <ul class="dropdown__list">
                                                <li class="dropdown__list-item" data-value="rp">
                                                    Сложность РП
                                                </li>
                                                <li class="dropdown__list-item" data-value="e">
                                                    Экономика
                                                </li>
                                                <li class="dropdown__list-item" data-value="cart">
                                                    Игровая карта
                                                </li>
                                                <li class="dropdown__list-item" data-value="pvp">
                                                    Сложность ПВП
                                                </li>
                                                <li class="dropdown__list-item" data-value="sport">
                                                    Спортивность
                                                </li>
                                                <li class="dropdown__list-item" data-value="high">
                                                    Сложность
                                                </li>
                                                <li class="dropdown__list-item" data-value="setting">
                                                    Сеттинг
                                                </li>
                                                <li class="dropdown__list-item" data-value="game">
                                                    Игровой Режим
                                                </li>
                                                <li class="dropdown__list-item" data-value="exp">
                                                    Прокачка
                                                </li>
                                                <li class="dropdown__list-item" data-value="fraction">
                                                    Фракции
                                                </li>
                                                <li class="dropdown__list-item" data-value="mods">
                                                    Моды
                                                </li>
                                                <li class="dropdown__list-item" data-value="persons">
                                                    Набор персонала
                                                </li>
                                                <li class="dropdown__list-item" data-value="gifts">
                                                    Призы
                                                </li>
                                                <li class="dropdown__list-item" data-value="var">
                                                    Свой вариант
                                                </li>
                                            </ul>
                                            <input class="dropdown__input hidden" type="text"
                                                name="select-category-1" value="" />
                                        </div>
                                    </div>
                                    <div class="form__inputs-item">
                                        <div class="form__dropdown dropdown dropdown-mw">
                                            <button class="dropdown__button" type="button">
                                                Выберите из списка
                                            </button>
                                            <ul class="dropdown__list">
                                                <li class="dropdown__list-item" data-value="rp">
                                                    Сложность РП
                                                </li>
                                                <li class="dropdown__list-item" data-value="e">
                                                    Экономика
                                                </li>
                                                <li class="dropdown__list-item" data-value="cart">
                                                    Игровая карта
                                                </li>
                                                <li class="dropdown__list-item" data-value="pvp">
                                                    Сложность ПВП
                                                </li>
                                                <li class="dropdown__list-item" data-value="sport">
                                                    Спортивность
                                                </li>
                                                <li class="dropdown__list-item" data-value="high">
                                                    Сложность
                                                </li>
                                                <li class="dropdown__list-item" data-value="setting">
                                                    Сеттинг
                                                </li>
                                                <li class="dropdown__list-item" data-value="game">
                                                    Игровой Режим
                                                </li>
                                                <li class="dropdown__list-item" data-value="exp">
                                                    Прокачка
                                                </li>
                                                <li class="dropdown__list-item" data-value="fraction">
                                                    Фракции
                                                </li>
                                                <li class="dropdown__list-item" data-value="mods">
                                                    Моды
                                                </li>
                                                <li class="dropdown__list-item" data-value="persons">
                                                    Набор персонала
                                                </li>
                                                <li class="dropdown__list-item" data-value="gifts">
                                                    Призы
                                                </li>
                                                <li class="dropdown__list-item" data-value="var">
                                                    Свой вариант
                                                </li>
                                            </ul>
                                            <input class="dropdown__input hidden" type="text"
                                                name="select-category-1" value="" />
                                        </div>
                                    </div>
                                    <div class="form__inputs-item">
                                        <input type="text" name="desc-1" class="form__input"
                                            placeholder="Введите описание (не более 25с)">
                                    </div>
                                    <div class="form__inputs-item">
                                        <input type="text" name="title-1" class="form__input"
                                            placeholder="Введите заголовок">
                                    </div>
                                    <div class="form__inputs-item">
                                        <input type="text" name="desc-2" class="form__input"
                                            placeholder="Введите описание (не более 25с)">
                                    </div>
                                </div>
                            </div>
                            <div class="form__inputs-item form__item">
                                <div class="form__item-title">
                                    Включить автоподключение?
                                </div>
                                <div class="form__item">
                                    <label class="form__toggler">
                                        <input type="checkbox" name="autoconnect"
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
                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <div class="editor__add-server">
                            <button type="button" class="editor__add-server-btn icon-add"></button>
                        </div>
                    </div>
                    <div class="editor__card">
                        <div class="editor__add-server">
                            <button type="button" disabled class="editor__add-server-btn icon-add"></button>
                        </div>
                    </div>
                </div>
                <div class="editor__column ">
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Параметры мультисервера
                        </h2>
                        <p class="editor__card-desc">
                            Мультисервер позволяет объединить много серверов под одним названием. Удобно,
                            если у вас огромный проект. На этой странице вы можете добавить несколько серверов,
                            все они будут отображаться в расширенной карточке Вашего сервера.
                            <a href="" class="editor__card-link">Подробнее</a>
                        </p>
                        <p class="editor__card-desc">
                            Подключено серверов:
                            <span class="editor__card-value color-blue">
                                2 / 5
                            </span>
                        </p>
                        <p class="editor__card-desc">
                            Расширено на +3 /
                            <span class="editor__card-value color-red">
                                2 пропадет</span>
                            22.08.2022, потому что CStar были деактивированы
                        </p>
                        <p class="editor__card-desc">
                            <a href="" class="editor__card-link editor__card-link-gray">Управление подписками</a>
                        </p>
                        <p class="editor__card-desc">
                            Вы можете расширить количество серверов, используя CStar.
                        </p>
                        <p class="editor__card-desc">
                        <div class="editor__card-balance">
                            <div class="editor-grid__balance-value icon-rhombus">
                                1 CStar
                            </div>
                            <div class="editor-grid__balance-title">
                                = 1 Сервер
                            </div>
                            <a href="#buycstar" class="editor__card-link">Пополнить</a>
                        </div>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__row ">
                                    <input type="number" name="port" class="form__input form__input-min"
                                        placeholder="2302">
                                    <button type="submit" class="btn btn-blue btn-lg">
                                        <span class="btn__text">
                                            Добавить 1 сервер
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Параметры мультисервера
                        </h2>
                        <p class="editor__card-desc">
                            Мультисервер позволяет объединить много серверов под одним названием. Удобно,
                            если у вас огромный проект. На этой странице вы можете добавить несколько серверов,
                            все они будут отображаться в расширенной карточке Вашего сервера.
                            <a href="" class="editor__card-link">Подробнее</a>
                        </p>
                        <p class="editor__card-desc">
                            Подключено серверов:
                            <span class="editor__card-value color-blue">
                                2 / 2
                            </span>
                        </p>
                        <p class="editor__card-desc">
                            Вы можете расширить количество серверов, используя CStar.
                        </p>
                        <p class="editor__card-desc">
                        <div class="editor__card-balance">
                            <div class="editor-grid__balance-value icon-rhombus">
                                1 CStar
                            </div>
                            <div class="editor-grid__balance-title">
                                = 1 Сервер
                            </div>
                            <a href="#buycstar" class="editor__card-link">Пополнить</a>
                        </div>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__row ">
                                    <input type="number" name="port" class="form__input form__input-min"
                                        placeholder="2302">
                                    <a href="#addms" class="btn btn-blue btn-lg">
                                        <span class="btn__text">
                                            Добавить 1 MS
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Параметры мультисервера
                        </h2>
                        <p class="editor__card-desc">
                            Мультисервер позволяет объединить много серверов под одним названием. Удобно,
                            если у вас огромный проект. На этой странице вы можете добавить несколько серверов,
                            все они будут отображаться в расширенной карточке Вашего сервера.
                            <a href="" class="editor__card-link">Подробнее</a>
                        </p>
                        <p class="editor__card-desc">
                            Подключено серверов:
                            <span class="editor__card-value color-blue">
                                2 / 5
                            </span>
                        </p>
                        <p class="editor__card-desc">
                            Расширено на +3 /используется
                            <span class="editor__card-value color-blue">
                                3 CStar
                            </span>
                            <a href="" class="editor__card-link editor__card-link-gray">Управление подписками</a>
                        </p>
                        <p class="editor__card-desc">
                            Вы можете расширить количество серверов, используя CStar.
                        </p>
                        <p class="editor__card-desc">
                        <div class="editor__card-balance">
                            <div class="editor-grid__balance-value icon-rhombus">
                                1 CStar
                            </div>
                            <div class="editor-grid__balance-title">
                                = 1 Сервер
                            </div>
                            <a href="#buycstar" class="editor__card-link">Пополнить</a>
                        </div>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__row ">
                                    <input type="number" name="port" class="form__input form__input-min"
                                        placeholder="2302">
                                        <a href="#addms" class="btn btn-blue btn-lg">
                                            <span class="btn__text">
                                                Добавить 1 MS
                                            </span>
                                        </a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Игра мультисервера
                        </h2>
                        <p class="editor__card-desc">
                            Если Ваш мультисервер имеет сервера в разных играх, вы можете выбрать, в категории
                            какой игры он будет отображаться.
                        </p>

                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__options">
                                    <label class="form__option">
                                        <input type="radio" name="game" checked value="1"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/games/dayzstalker.png" class="cover-image"
                                                    alt="dayzstalker">
                                            </span>
                                            <span class="form__option-text">
                                                DayZ Stalker RP
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" checked value="1"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/games/gmod.png" class="cover-image" alt="gmod">
                                            </span>
                                            <span class="form__option-text">
                                                GMOD Legacy Gamemodes
                                            </span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div class="form__item">
                                <p class="editor__card-desc">
                                    Выбрано игр:
                                    <span class="editor__card-value color-blue">
                                        1 / 1
                                    </span>
                                </p>
                                <p class="editor__card-desc">
                                    Вы можете расширить количество серверов, используя CStar.
                                </p>
                                <p class="editor__card-desc">
                                <div class="editor__card-balance">
                                    <div class="editor-grid__balance-value icon-rhombus">
                                        4 CStar
                                    </div>
                                    <div class="editor-grid__balance-title">
                                        = 1 доп. игра
                                    </div>
                                    <a href="#buycstar" class="editor__card-link">Пополнить</a>
                                </div>
                            </div>

                            <div class="form__item">
                                <div class="form__row ">
                                    <input type="number" name="port" class="form__input form__input-min"
                                        placeholder="2302">
                                    <a href="#add-game" class="btn btn-blue btn-lg">
                                        <span class="btn__text">
                                            Добавить 1 игру
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </form>



                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Игра мультисервера
                        </h2>
                        <p class="editor__card-desc">
                            Если Ваш мультисервер имеет сервера в разных играх, вы можете выбрать, в категории
                            какой игры он будет отображаться.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__options">
                                    <label class="form__option">
                                        <input type="radio" name="game" checked value="1"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/games/dayzstalker.png" class="cover-image"
                                                    alt="dayzstalker">
                                            </span>
                                            <span class="form__option-text">
                                                DayZ Stalker RP
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" checked value="1"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/games/gmod.png" class="cover-image" alt="gmod">
                                            </span>
                                            <span class="form__option-text">
                                                GMOD Legacy Gamemodes
                                            </span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div class="form__item">
                                <p class="editor__card-desc">
                                    Выбрано игр:
                                    <span class="editor__card-value color-blue">
                                        1 / 2
                                    </span>
                                </p>
                                <p class="editor__card-desc">
                                    Расширено на +3 /используется
                                    <span class="editor__card-value color-blue">
                                        3 CStar
                                    </span>
                                    <a href="" class="editor__card-link editor__card-link-gray">
                                        Управление подписками
                                    </a>
                                </p>
                                <p class="editor__card-desc">
                                    Вы можете расширить количество серверов, используя CStar.
                                </p>
                                <p class="editor__card-desc">
                                <div class="editor__card-balance">
                                    <div class="editor-grid__balance-value icon-rhombus">
                                        4 CStar
                                    </div>
                                    <div class="editor-grid__balance-title">
                                        = 1 доп. игра
                                    </div>
                                    <a href="#buycstar" class="editor__card-link">Пополнить</a>
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__row ">
                                    <input type="number" name="port" class="form__input form__input-min"
                                        placeholder="2302">
                                        <a href="#add-game" class="btn btn-blue btn-lg">
                                            <span class="btn__text">
                                                Добавить 1 игру
                                            </span>
                                        </a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Игра мультисервера
                        </h2>
                        <p class="editor__card-desc">
                            Если Ваш мультисервер имеет сервера в разных играх, вы можете выбрать, в категории
                            какой игры он будет отображаться.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__options">
                                    <label class="form__option">
                                        <input type="radio" name="game" checked value="1"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/games/dayzstalker.png" class="cover-image"
                                                    alt="dayzstalker">
                                            </span>
                                            <span class="form__option-text">
                                                DayZ Stalker RP
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="radio" name="game" checked value="1"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/games/gmod.png" class="cover-image" alt="gmod">
                                            </span>
                                            <span class="form__option-text">
                                                GMOD Legacy Gamemodes
                                            </span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div class="form__item">
                                <p class="editor__card-desc">
                                    Выбрано игр:
                                    <span class="editor__card-value color-blue">
                                        1 / 2
                                    </span>
                                </p>
                                <p class="editor__card-desc">
                                    Расширено на +1 /
                                    <span class="editor__card-value color-red">
                                        1 пропадет</span>
                                    22.08.2022, потому что CStar были деактивированы
                                </p>
                                <p class="editor__card-desc">
                                    <a href="" class="editor__card-link editor__card-link-gray">
                                        Управление подписками
                                    </a>
                                </p>
                                <p class="editor__card-desc">
                                    Вы можете расширить количество серверов, используя CStar.
                                </p>
                                <p class="editor__card-desc">
                                <div class="editor__card-balance">
                                    <div class="editor-grid__balance-value icon-rhombus">
                                        4 CStar
                                    </div>
                                    <div class="editor-grid__balance-title">
                                        = 1 доп. игра
                                    </div>
                                    <a href="#buycstar" class="editor__card-link">Пополнить</a>
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__row ">
                                    <input type="number" name="port" class="form__input form__input-min"
                                        placeholder="2302">
                                        <a href="#add-game" class="btn btn-blue btn-lg">
                                            <span class="btn__text">
                                                Добавить 1 игру
                                            </span>
                                        </a>
                                </div>
                            </div>
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

    <div id="addms" class="popup open">
        <div class="popup__content">
            <form action="#" class="popup__body form">
                <a class="popup__close icon-close" href="#"></a>
                <div class="form__item form__title">
                    Готовы добавить 3 MS?
                </div>
                <div class="form__item form__text">
                    3 Ваши CStars будут активированы, чтобы добавить Вам 3 MS.
                </div>
                <div class="form__item editor__card-balance">
                    <div class="editor-grid__balance-value icon-rhombus">
                        3 CStar 
                    </div>
                    <div class="editor-grid__balance-title">
                        = 3 доп. сервер
                    </div>
                </div>
                <div class="form__item">
                    <div class="form__row">
                        <button type="submit" class="btn btn-blue">
                            <span class="btn__text">Расширить на 3 MS</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div id="add-game" class="popup open">
        <div class="popup__content">
            <form action="#" class="popup__body form">
                <a class="popup__close icon-close" href="#"></a>
                <div class="form__item form__title">
                    Готовы добавить 1 игру?
                </div>
                <div class="form__item form__text">
                    4 Ваши CStars будут активированы, чтобы добавить Вам 1 дополнительную игру.
                </div>
                <div class="form__item editor__card-balance">
                    <div class="editor-grid__balance-value icon-rhombus">
                        4 CStar 
                    </div>
                    <div class="editor-grid__balance-title">
                        = 1 доп. сервер
                    </div>
                </div>
                <div class="form__item">
                    <div class="form__row">
                        <button type="submit" class="btn btn-blue">
                            <span class="btn__text"> Расширить на 1 игру</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    
</div>