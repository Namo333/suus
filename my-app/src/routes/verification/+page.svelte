<script>
    import { page } from '$app/stores';
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
            <a href="/promotion" class="menu__link icon-promotion">Продвижение</a>
        </li>
        <li class="menu__list-item" class:active={$page.url.pathname === '/verification'}>
            <a href="/verification" class="menu__link icon-verified active">Верификация</a>
        </li>
    </ul>
</nav>
</aside>
            <div class="server-editor__content editor">
                <div class="editor__column">
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Название не задано
                        </h2>
                        <ul class="editor__card-list">
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Статус:
                                </div>
                                <div class="editor__card-value editor__card-value-gray icon-hide">
                                    Скрыт
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Сервер:
                                </div>
                                <div class="editor__card-value color-red">
                                    N/A
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Онлайн сейчас:
                                </div>
                                <div class="editor__card-value color-red">
                                    N/A
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Пик за сегодня:
                                </div>
                                <div class="editor__card-value color-red">
                                    N/A
                                </div>
                            </li>
                        </ul>
                        <p class="editor__card-desc">Server ID: 88792121</p>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Namalsk Stalker Classic
                        </h2>
                        <ul class="editor__card-list">
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Статус:
                                </div>
                                <div class="editor__card-value editor__card-value-gray icon-hide">
                                    Скрыт
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Сервер:
                                </div>
                                <div class="editor__card-value color-green">
                                    Онлайн
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Онлайн сейчас:
                                </div>
                                <div class="editor__card-value color-red">
                                    11 из 80
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Пик за сегодня:
                                </div>
                                <div class="editor__card-value color-green">
                                    78 из 80
                                </div>
                            </li>
                        </ul>
                        <p class="editor__card-desc">Server ID: 88792121</p>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Namalsk Stalker Classic
                        </h2>
                        <ul class="editor__card-list">
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Статус:
                                </div>
                                <div class="editor__card-value icon-views">
                                    Отображается
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Сервер:
                                </div>
                                <div class="editor__card-value color-green">
                                    Онлайн
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Онлайн сейчас:
                                </div>
                                <div class="editor__card-value color-red">
                                    11 из 80
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Пик за сегодня:
                                </div>
                                <div class="editor__card-value color-green">
                                    78 из 80
                                </div>
                            </li>
                        </ul>
                        <p class="editor__card-desc">Server ID: 88792121</p>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Namalsk Stalker Classic
                        </h2>
                        <ul class="editor__card-list">
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Статус:
                                </div>
                                <div class="editor__card-value color-blue icon-verified">
                                    Верифицирован
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Сервер:
                                </div>
                                <div class="editor__card-value color-green">
                                    Онлайн
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Онлайн сейчас:
                                </div>
                                <div class="editor__card-value color-red">
                                    11 из 80
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Пик за сегодня:
                                </div>
                                <div class="editor__card-value color-green">
                                    78 из 80
                                </div>
                            </li>
                        </ul>
                        <p class="editor__card-desc">Server ID: 88792121</p>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Namalsk Stalker Classic
                        </h2>
                        <ul class="editor__card-list">
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Статус:
                                </div>
                                <div class="editor__card-value color-violet icon-handshake">
                                    Партнер
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Сервер:
                                </div>
                                <div class="editor__card-value color-green">
                                    Онлайн
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Онлайн сейчас:
                                </div>
                                <div class="editor__card-value color-red">
                                    11 из 80
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Пик за сегодня:
                                </div>
                                <div class="editor__card-value color-green">
                                    78 из 80
                                </div>
                            </li>
                        </ul>
                        <p class="editor__card-desc">Server ID: 88792121</p>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Namalsk Stalker Classic
                        </h2>
                        <ul class="editor__card-list">
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Статус:
                                </div>
                                <div class="editor__card-value color-red icon-handshake">
                                    Официальный
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Сервер:
                                </div>
                                <div class="editor__card-value color-green">
                                    Онлайн
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Онлайн сейчас:
                                </div>
                                <div class="editor__card-value color-red">
                                    11 из 80
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Пик за сегодня:
                                </div>
                                <div class="editor__card-value color-green">
                                    78 из 80
                                </div>
                            </li>
                        </ul>
                        <p class="editor__card-desc">Server ID: 88792121</p>
                    </div>



                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Среднее пиковое значение (APV)
                        </h2>
                        <p class="editor__card-desc">
                            Среднее пиковое значение (APV) влияет на статус отображения сервера. Чтобы перевести
                            статус сервера в “Отображается”, среднее пиковое значение за каждую из трех
                            последних недель должно превышать 15 человек онлайн.
                            <a href="#popup" class="editor__card-link icon-info">
                                <span>Подробнее</span>
                            </a>
                        </p>
                        <ul class="editor__card-list editor__card-list-lg">
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Последние 7 дней:
                                </div>
                                <div class="editor__card-value color-green">
                                    34 из 80
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Прошлые 7 дней:
                                </div>
                                <div class="editor__card-value color-yellow">
                                    16 из 80
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Две недели назад:
                                </div>
                                <div class="editor__card-value color-red">
                                    14 из 80
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Три последние дня:
                                </div>
                                <div class="editor__card-value color-red">
                                    14 из 80
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Среднее пиковое значение (APV)
                        </h2>
                        <p class="editor__card-desc">
                            Среднее пиковое значение (APV) влияет на статус отображения сервера. Чтобы перевести
                            статус сервера в “Отображается”, среднее пиковое значение за каждую из трех
                            последних недель должно превышать 15 человек онлайн.
                            <a href="#popup" class="editor__card-link icon-info">
                                <span>Подробнее</span>
                            </a>
                        </p>
                        <p class="editor__card-desc">
                            <span class="editor__card-quantity">
                                Количество серверов: <span class="editor__card-quantity-value">3</span>
                            </span>
                            ,
                            <span class="editor__card-apv">
                                Ваш минимальный APV: <span class="editor__card-apv-value">30 игроков</span>
                            </span>
                            .
                        </p>
                        <ul class="editor__card-list editor__card-list-lg">
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Последние 7 дней:
                                </div>
                                <div class="editor__card-value color-green">
                                    55 из 300
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Прошлые 7 дней:
                                </div>
                                <div class="editor__card-value color-yellow">
                                    32 из 300
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Две недели назад:
                                </div>
                                <div class="editor__card-value color-red">
                                    29 из 200
                                </div>
                            </li>
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Три последние дня:
                                </div>
                                <div class="editor__card-value color-red">
                                    100 из 200
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Статус Discord
                        </h2>
                        <p class="editor__card-desc">
                            В SUS отображаются только сервера, набравшие в своем Discord сервере не менее,
                            чем 300 участников.
                        </p>
                        <ul class="editor__card-list editor__card-list-lg">
                            <li class="editor__card-list-item">
                                <div class="editor__card-specification">
                                    Участников сейчас:
                                </div>
                                <div class="editor__card-value color-green">
                                    625
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Статус Discord
                        </h2>
                        <p class="editor__card-desc">
                            В SUS отображаются только сервера, набравшие в своем Discord сервере не менее,
                            чем 300 участников.
                        </p>
                        <p class="editor__card-desc editor__card-desc-lg">
                            Вы не подключили сервер Discord к вашему серверу. Подключите сервер
                            на странице <a href="" class="editor__card-link">&lt;Настройки сервера&gt;</a>
                        </p>
                    </div>

                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Верификация сервера
                        </h2>
                        <p class="editor__card-desc">
                            Верификация - знак качества для сервера. Верифицированные сервера пользуются
                            доверием среди пользователей SUS и находятся в авангарде сообщества. Верификация
                            сервера происходит при выполнении сервером определенных условий.
                            <a href="#popup2" class="editor__card-link icon-info">
                                <span>Подробнее</span>
                            </a>
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Чеклист верификации сервера
                                </div>
                                <div class="form__statuses">
                                    <div class="form__status form__status-succes">
                                        Нет непримененных изменений
                                    </div>
                                    <div class="form__status form__status-succes">
                                        Сервер отображается
                                    </div>
                                    <div class="form__status form__status-completed">
                                        FAIRSCORE не активен
                                    </div>
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title">
                                    Чеклист активности
                                </div>
                                <div class="form__statuses">
                                    <div class="form__status form__status-succes">
                                        Более 500 участников в Discord
                                    </div>
                                    <div class="form__status form__status-succes">
                                        APV на необходимом уровне
                                    </div>
                                </div>
                            </div>
                            <div class="form__item form__btns">
                                <button type="submit" class="btn btn-red">Отправить заявку</button>
                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Опубликовать сервер
                        </h2>
                        <p class="editor__card-desc">
                            Сейчас сервер имеет статус “скрыт”. Чтобы сервер попал в публичные списки SUS,
                            вы должны опубликовать его. Перед публикацией убедитесь, что все поля заполнены
                            и не нарушают правила сообщества. Сервер пройдет модерацию перед тем, как попадет
                            в наш список.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Чеклист публикации сервера
                                </div>
                                <div class="form__statuses">
                                    <div class="form__status form__status-succes">
                                        Логотип установлен
                                    </div>
                                    <div class="form__status form__status-succes">
                                        Баннер установлен
                                    </div>
                                    <div class="form__status form__status-succes">
                                        Название установлено
                                    </div>
                                    <div class="form__status form__status-completed">
                                        Минимум два представления заполнены
                                    </div>
                                    <div class="form__status form__status-succes">
                                        Краткое описание установлено
                                    </div>
                                    <div class="form__status form__status-completed">
                                        Полное описание не установлено
                                    </div>
                                    <div class="form__status form__status-succes">
                                        Выбрана игра
                                    </div>
                                    <div class="form__status form__status-fail">
                                        Автоподключение не доступно
                                    </div>
                                    <div class="form__status form__status-succes">
                                        Discord - подключен
                                    </div>
                                    <div class="form__status form__status-process">
                                        FAIRSCORE не активен
                                    </div>
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title icon-info">
                                    Чеклист активности
                                </div>
                                <div class="form__statuses">
                                    <div class="form__status form__status-succes">
                                        Более 500 участников в Discord
                                    </div>
                                    <div class="form__status form__status-completed">
                                        APV ниже необходимого
                                    </div>
                                </div>
                            </div>
                            <div class="form__item form__btns">
                                <button type="submit" disabled class="btn btn-red">Опубликовать сервер</button>
                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Опубликовать мультисервер
                        </h2>
                        <p class="editor__card-desc">
                            Сейчас мультисервер имеет статус “скрыт”. Чтобы сервер попал в публичные списки SUS,
                            вы должны опубликовать его. Перед публикацией убедитесь, что все поля заполнены
                            и не нарушают правила сообщества.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Чеклист публикации сервера
                                </div>
                                <div class="form__statuses">
                                    <div class="form__status form__status-succes">
                                        Логотип установлен
                                    </div>
                                    <div class="form__status form__status-succes">
                                        Баннер установлен
                                    </div>
                                    <div class="form__status form__status-succes">
                                        Название установлено
                                    </div>
                                    <div class="form__status form__status-completed">
                                        Минимум два представления заполнены
                                    </div>
                                    <div class="form__status form__status-succes">
                                        Краткое описание установлено
                                    </div>
                                    <div class="form__status form__status-completed">
                                        Полное описание не установлено
                                    </div>
                                    <div class="form__status form__status-succes">
                                        Выбрана игра
                                    </div>
                                    <div class="form__status form__status-succes">
                                        Минимум два представления заполнены
                                    </div>
                                    <div class="form__status form__status-succes">
                                        Discord - подключен
                                    </div>
                                    <div class="form__status form__status-process">
                                        FAIRSCORE не активен
                                    </div>
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title icon-info">
                                    Чеклист активности
                                </div>
                                <div class="form__statuses">
                                    <div class="form__status form__status-succes">
                                        Более 500 участников в Discord
                                    </div>
                                    <div class="form__status form__status-completed">
                                        APV ниже необходимого
                                    </div>
                                </div>
                            </div>
                            <div class="form__item form__btns">
                                <button type="submit" disabled class="btn btn-red ">Опубликовать сервер</button>
                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Применить изменения
                        </h2>
                        <p class="editor__card-desc">
                            Вы применили изменения в одном или нескольких полях Вашего сервера. Преимущества
                            статуса партнера позволяют Вам применять изменения без предварительной модерации.
                            Если Вы педерумали, Вы можете отменить изменения.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Примеренные изменения
                                </div>
                                <div class="form__statuses">
                                    <div class="form__status form__status-completed">
                                        Изменен логотип
                                    </div>
                                    <div class="form__status form__status-completed">
                                        Изменен баннер
                                    </div>
                                    <div class="form__status form__status-completed">
                                        Изменено краткое описание
                                    </div>
                                    <div class="form__status form__status-completed">
                                        Изменены представления
                                    </div>
                                    <div class="form__status form__status-completed">
                                        Изменены настройки FAIRSCORE
                                    </div>
                                </div>
                            </div>
                            <div class="form__item form__btns">
                                <button type="submit" class="btn btn-red btn-sm">Применить изменения</button>
                                <button type="button" class="btn btn-border btn-sm">Отменить изменения</button>
                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Применить изменения
                        </h2>
                        <p class="editor__card-desc">
                            Вы применили изменения в одном или нескольких полях Вашего сервера. Перед тем,
                            как изменения будут применены, они должны пройти проверку командой модерации. Убедитесь,
                            что вы применили все необходимые изменения, и отправьте их на проверку,
                            или отмените все действия.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Примеренные изменения
                                </div>
                                <div class="form__statuses">
                                    <div class="form__status form__status-process">
                                        Изменен логотип
                                    </div>
                                    <div class="form__status form__status-process">
                                        Изменен баннер
                                    </div>
                                    <div class="form__status form__status-process">
                                        Изменено краткое описание
                                    </div>
                                    <div class="form__status form__status-process">
                                        Изменены представления
                                    </div>
                                    <div class="form__status form__status-process">
                                        Изменены настройки FAIRSCORE
                                    </div>
                                </div>
                            </div>
                            <div class="form__item form__btns">
                                <button type="submit" class="btn btn-red btn-sm">Применить изменения</button>
                                <button type="button" class="btn btn-border btn-sm">Отменить изменения</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="editor__column">
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Опубликовать сервер
                        </h2>
                        <p class="editor__card-desc">
                            Сейчас сервер имеет статус “скрыт”. Чтобы сервер попал в публичные списки SUS,
                            вы должны опубликовать его. Перед публикацией убедитесь, что все поля заполнены
                            и не нарушают правила сообщества. Сервер пройдет модерацию перед тем, как попадет
                            в наш список.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Чеклист публикации сервера
                                </div>
                                <div class="form__statuses">
                                    <div class="form__status form__status-succes">
                                        Логотип установлен
                                    </div>
                                    <div class="form__status form__status-succes">
                                        Баннер установлен
                                    </div>
                                    <div class="form__status form__status-succes">
                                        Название установлено
                                    </div>
                                    <div class="form__status form__status-completed">
                                        Минимум два представления заполнены
                                    </div>
                                    <div class="form__status form__status-succes">
                                        Краткое описание установлено
                                    </div>
                                    <div class="form__status form__status-completed">
                                        Полное описание не установлено
                                    </div>
                                    <div class="form__status form__status-succes">
                                        Выбрана игра
                                    </div>
                                    <div class="form__status form__status-fail">
                                        Автоподключение не доступно
                                    </div>
                                    <div class="form__status form__status-succes">
                                        Discord - подключен
                                    </div>
                                    <div class="form__status form__status-process">
                                        FAIRSCORE не активен
                                    </div>
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title icon-info">
                                    Чеклист активности
                                </div>
                                <div class="form__statuses">
                                    <div class="form__status form__status-succes">
                                        Более 500 участников в Discord
                                    </div>
                                    <div class="form__status form__status-completed">
                                        APV ниже необходимого
                                    </div>
                                </div>
                            </div>
                            <div class="form__item form__btns">
                                <button type="submit" disabled class="btn btn-red">Опубликовать сервер</button>
                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Применить изменения
                        </h2>
                        <p class="editor__card-desc">
                            Вы применили изменения в одном или нескольких полях Вашего сервера. Перед тем,
                            как изменения будут применены, они должны пройти проверку командой модерации. Убедитесь,
                            что вы применили все необходимые изменения, и отправьте их на проверку,
                            или отмените все действия.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Примеренные изменения
                                </div>
                                <div class="form__statuses">
                                    <div class="form__status form__status-process">
                                        Изменен логотип
                                    </div>
                                    <div class="form__status form__status-process">
                                        Изменен баннер
                                    </div>
                                    <div class="form__status form__status-process">
                                        Изменено краткое описание
                                    </div>
                                    <div class="form__status form__status-process">
                                        Изменены представления
                                    </div>
                                    <div class="form__status form__status-process">
                                        Изменены настройки FAIRSCORE
                                    </div>
                                </div>
                            </div>
                            <div class="form__item form__btns">
                                <button type="submit" class="btn btn-red btn-sm">Применить изменения</button>
                                <button type="button" class="btn btn-border btn-sm">Отменить изменения</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <div id="popup" class="popup open">
        <div class="popup__content">
            <form action="#" class="popup__body form ">
                <a class="popup__close icon-close" href="#"></a>
                <div class="form__title form__item">
                    Как среднее пиковое влияет на отображение сервера
                </div>
                <div class="form__item">
                    В Servers User Score добавляются только актуальные сервера. Для мониторинга актуальности мы
                    считаем среднее
                    пиковое значение онлайна вашего сервера (APV - average peak value). Чтобы подать заявку на
                    отображение сервера,
                    вам необходимо иметь среднее пиковое значение не менее 15 за каждую из трёх последних недель.
                </div>
                <div class="form__item">
                    <div class="form__item-title">
                        Что если мой сервер очень активный? Тоже ждать?
                    </div>
                    <div class="form__text">
                        Допуск к публикации считается прогрессивно. Если за 2 дня после добавления сервера в
                        систему, среднее
                        пиковое больше 40 - вы сразу сможете подать заявку. Если среднее пиковое за первую неделю
                        более 30, Вы
                        тоже сможете подать заявку сразу. И если средний пик за две недели более 23 - вы тоже
                        сможете подать заявку.Также, если вдруг онлайн на Вашем сервере резко вырос до 50, и вы
                        удерживаете его на протяжении 3х дней - ваш
                        сервер тоже получит возможность опубликоваться.
                    </div>
                </div>
                <div class="form__item">
                    <div class="form__item-title">
                        Что, если мой средний пик упадет?
                    </div>
                    <div class="form__text">
                        Если Ваш сервер уже отображается в SUS, и за последние три недели средний пик менее 15
                        человек - сервер
                        получит статус скрыт, и будет удален из системы через три месяца неактивности.
                    </div>
                </div>
                <div class="form__item">
                    <div class="form__item-title">
                        Как я узнаю, что мой APV - достаточен?
                    </div>
                    <div class="form__text">
                        Как только Ваш APV, или количество пользователей в Discord станет достаточным - мы отправим
                        Вам уведомление
                        в ЛС Discord и на электронну почту, привязанную к вашему Discord аккаунту. Не закрывайте
                        личку - наш бот не
                        добавляется в друзья.
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div id="popup2" class="popup open">
        <div class="popup__content">
            <form action="#" class="popup__body form ">
                <a class="popup__close icon-close" href="#"></a>
                <div class="form__title form__item">
                    Верификация сервера
                </div>
                <div class="form__item">
                    Верификация сервера - важный процесс для поддержания доверия между админицией сервера и
                    пользователями
                    SUS. Команда модерации серверов постоянно наблюдает за верифицированными серверами, чтобы наши
                    игроки
                    могли быть уверены: они проводят время в хорошем месте. Для выполнения верификации требуется
                    выполнить
                    несколько условий.
                </div>
                <div class="form__item">
                    <div class="form__item-title">
                        Системные требования
                    </div>
                    <div class="form__text">
                        Верифицированный сервер должен иметь не менее 500 пользователей в своем Discord сервере. APV
                        за последнюю
                        неделю должно составлять не менее 35 для одиночных серверов, и 25 на сервер для
                        мультисерверов, или за
                        последние три недели не менее 25 для одиночных, и 20 на сервер для мультисерверов. Если
                        сервер по игре DayZ, на
                        сервере обязательно должен быть включен FAIRSCORE.
                    </div>
                </div>
                <div class="form__item">
                    <div class="form__item-title">
                        Требования к сообществу
                    </div>
                    <div class="form__text">
                        Сообщество Вашего сервера должно отвечать определенным критериям: <br>
                        1 - Содержание сервера Discord не должно нарушать правил Discord. <br>
                        2 - Сервер не нарушает политику SUS “по работе с аудиторией”, “по отношении к отзывам” и
                        “принципы отображения серверов”. <br>
                        3 - Администрация активно работает над улучшением игрового опыта на сервере, публично
                        представлена перед своими игроками и сообществом SUS и активно идет на контакт. <br>
                        4 - Администрация сервера не допускает публичных высказываний или действий, нарушающих
                        правила сообщества “Discord”, сообщества “SUS”, или законов РФ на <i>любых ресурсах</i>.
                        <br>
                        5 - Уникальность
                        будет плюсом. Если Ваш сервер уникален, отличается хорошей сборкой модов или смелой
                        идеей - у Вас больше шансов получить верификацию.
                    </div>
                </div>
                <div class="form__item">
                    Верифицируя сервер мы полноценно принимаем всю его администрацию в дружное сообщество SUS. Мы
                    хотим
                    создать удобное сообщество для всех: как для игроков, так и для администраторов. Мы пристально
                    следим за
                    верифицированными серверами потому, что верифицируя сервер, мы награждаем Вас “знаком качества”.
                    Этот
                    знак должен гарантировать, что Ваш сервер действительно заслуживает внимания, а игрокам не
                    следует бояться
                    “бана за отзыв” или “мошенничества с донатом”.
                </div>
                <div class="form__item">
                    <div class="form__item-title">
                        Кто-то просит меня дать роль на сервере, кто это?
                    </div>
                    <div class="form__text">
                        Вероятно, с Вами на связи один из наших модераторов. Если Ваш сервер закрыт от лишних глаз (например, на
                        сервере установлена закрытая регистрация) - модератор может попросить Вас выдать ему роль, позволяющую 
                        видеть все разделы, которые видят обычные игроки. Если вы сомневаетесь в том, что на связи наш модератор,
                        попросите его пингануть Вас в чате в SUS. Модераторы, уполномоченые работать с верификацией, имеют роль
                        <span class="color-green">Verification Moderator</span> или <span class="color-blue">Server Master</span>. Если у Вас возник вопрос к работе модератора, обратитесь в поддержку.
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
