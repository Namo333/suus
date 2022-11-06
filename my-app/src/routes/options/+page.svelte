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
            <a href="/options" class="menu__link icon-people active">Тезисы</a>
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
                            Выберите тезисы
                        </h2>
                        <p class="editor__card-desc">
                            Выберите любые тезисы, лучшим образом описывающие Ваш сервер. Это
                            поможет Вам заинтересовать новых игроков. Например, РП сервера чаще всего
                            выбирают отображать сложность регистрации и уровень РП отыгрыша, а
                            ПВЕ или РПГ - карту и сложность экономики. Не знаете что выбрать?
                            <a href="" class="editor__card-link">Рекомендации</a>
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Выберите представления
                                </div>
                                <div class="form__options">
                                    <label class="form__option">
                                        <input type="checkbox" checked name="thesis-1" value="1"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/icons/palette.svg" alt="icon palette">
                                            </span>
                                            <span class="form__option-text">
                                                Сложность РП
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="checkbox" name="thesis-2" value="2"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/icons/cash.svg" alt="icon cash">
                                            </span>
                                            <span class="form__option-text">
                                                Экономика
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="checkbox" name="thesis-3" value="3"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/icons/paper.svg" alt="icon paper">
                                            </span>
                                            <span class="form__option-text">
                                                Регистрация
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="checkbox" checked name="thesis-4" value="4"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/icons/compass.svg" alt="icon compass">
                                            </span>
                                            <span class="form__option-text">
                                                Игровая Карта
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="checkbox" name="thesis-5" value="5"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/icons/pistol.svg" alt="icon pistol">
                                            </span>
                                            <span class="form__option-text">
                                                Сложность ПВП
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="checkbox" name="thesis-6" value="6"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/icons/medal.svg" alt="icon medal">
                                            </span>
                                            <span class="form__option-text">
                                                Спортивность
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="checkbox" name="thesis-7" value="7"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/icons/bones.svg" alt="icon bones">
                                            </span>
                                            <span class="form__option-text">
                                                Сложность
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="checkbox" name="thesis-8" value="8"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/icons/milkyway.svg" alt="icon milkyway">
                                            </span>
                                            <span class="form__option-text">
                                                Сеттинг
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="checkbox" name="thesis-9" value="9"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/icons/gamepad.svg" alt="icon gamepad">
                                            </span>
                                            <span class="form__option-text">
                                                Игровой Режим
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="checkbox" name="thesis-10" value="10"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/icons/graph.svg" alt="icon graph">
                                            </span>
                                            <span class="form__option-text">
                                                Прокачка
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="checkbox" name="thesis-11" value="11"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/icons/flag.svg" alt="icon flag">
                                            </span>
                                            <span class="form__option-text">
                                                Фракции
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="checkbox" name="thesis-12" value="12"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/icons/gear.svg" alt="icon gear">
                                            </span>
                                            <span class="form__option-text">
                                                Моды
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="checkbox" name="thesis-13" value="13"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/icons/costume.svg" alt="icon costume">
                                            </span>
                                            <span class="form__option-text">
                                                Набор персонала
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="checkbox" name="thesis-14" value="14"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/icons/prize.svg" alt="icon prize">
                                            </span>
                                            <span class="form__option-text">
                                                Призы
                                            </span>
                                        </span>
                                    </label>
                                    <label class="form__option">
                                        <input type="checkbox" name="thesis-15" value="15"
                                            class="form__option-input hidden">
                                        <span class="form__option-content">
                                            <span class="form__option-icon">
                                                <img src="img/icons/rhombus.svg" alt="icon rhombus">
                                            </span>
                                            <span class="form__option-text">
                                                Свой вариант
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <div class="form__quantity">
                                    <div class="form__quantity-value">
                                        <span class="form__quantity-current">
                                            2
                                        </span>
                                        /
                                        <span class="form__quantity-total">
                                            2
                                        </span>
                                    </div>
                                    <a href="" class="form__quantity-link">Расширить</a>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Сложность РП
                        </h2>
                        <p class="editor__card-desc">
                            Расскажите потенциальным игрокам, какого уровня ролевой игры вы ожидаете, и
                            пытаетесь поддерживать на своем игровом сервере. Выберите один из предзаполненых
                            вариантов или настройте свое определение.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__dropdown dropdown">
                                    <button class="dropdown__button" type="button">
                                        Выберите вариант
                                    </button>
                                    <ul class="dropdown__list">
                                        <li class="dropdown__list-item" data-value="no">
                                            <div class="dropdown__list-title">
                                                Нет Ролевой игры
                                            </div>
                                            <div class="dropdown__list-desc">
                                                Этот сервер не для ролевой игры. Правила не обязывают игроков
                                                соблюдать
                                                ролевые рамки.
                                            </div>
                                        </li>
                                        <li class="dropdown__list-item" data-value="lite">
                                            <div class="dropdown__list-title">
                                                Уровень Lite
                                            </div>
                                            <div class="dropdown__list-desc">
                                                На сервере установлены рамки ролевой игры. Отклонения от квенты или
                                                анкеты не проверяются. Изредка появляющийся неролевой сленг не
                                                наказывается, или наказывается только по жалобе. Члены группировки
                                                не обязаны играть РП внутри фракции или РП внутри фракции не
                                                контролируется. Игрокам разрешено неролевое общение, пока никто не
                                                слышит.
                                            </div>
                                        </li>
                                        <li class="dropdown__list-item" data-value="semi">
                                            <div class="dropdown__list-title">
                                                Semi-Serious
                                            </div>
                                            <div class="dropdown__list-desc">
                                                На сервере установлены рамки ролевой игры. Отклонения от квенты или
                                                анкеты не проверяются. Администрация следит за неролевым сленгом и
                                                пресекает его появления. Члены группировки обязаны играть РП внутри
                                                фракции, но это не контролируется администрацией. Неролевое общение
                                                разрешено только в дискорде, только со своими.
                                            </div>
                                        </li>
                                        <li class="dropdown__list-item" data-value="serious">
                                            <div class="dropdown__list-title">
                                                Serious
                                            </div>
                                            <div class="dropdown__list-desc">
                                                На сервере установлены рамки ролевой игры. Не допускаются отклонения
                                                от описанного в анкете или квенте персонажа. Усиленный контроль за
                                                качеством РП и неролевым сленгом.Игрокам запрещено любое неролевое
                                                общение во время нахождения на сервере.
                                            </div>
                                        </li>
                                    </ul>
                                    <input class="dropdown__input hidden" type="text" name="select-category"
                                        value="" />
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title icon-info">
                                    Редактировать описание
                                </div>
                                <div class="form__inputs">
                                    <textarea name="description" class="form__textarea"
                                        placeholder="Расскажите, как на Вашем сервере летают бабочки..."></textarea>
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title icon-info">
                                    Редактировать описание
                                </div>
                                <div class="form__inputs">
                                    <textarea name="description" class="form__textarea form__textarea-error"
                                        placeholder="Расскажите, как на Вашем сервере летают бабочки..."></textarea>
                                    <span class="form__error color-red">
                                        Разрешено не более 150 символов
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="editor__column">
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Регистрация
                        </h2>
                        <p class="editor__card-desc">
                            Расскажите потенциальным игрокам, как проходит регистрация на ваш сервер.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__dropdown dropdown">
                                    <button class="dropdown__button" type="button">
                                        Выберите вариант
                                    </button>
                                    <ul class="dropdown__list">
                                        <li class="dropdown__list-item" data-value="no">
                                            Нет Ролевой игры
                                        </li>
                                        <li class="dropdown__list-item" data-value="lite">
                                            Уровень Lite
                                        </li>
                                        <li class="dropdown__list-item" data-value="semi">
                                            Semi-Serious
                                        </li>
                                        <li class="dropdown__list-item" data-value="serious">
                                            Serious
                                        </li>
                                    </ul>
                                    <input class="dropdown__input hidden" type="text" name="select-category-2"
                                        value="" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="editor__card">
                        <h2 class="editor__card-title title">
                            Свой вариант
                        </h2>
                        <p class="editor__card-desc">
                            Создайте свое собственное представление о вашем сервере. Выберите эмодзи,
                            название и задайте собственное описание.
                        </p>
                        <form action="#" class="editor__card-form form">
                            <div class="form__item">
                                <div class="form__item-title">
                                    Выберите эмодзи и составьте заголовок
                                </div>
                                <div class="form__inputs form__inputs-emodji">
                                    <input type="text" name="emodji" class="form__input" placeholder="Windows + Ю">
                                    <input type="text" name="title" class="form__input" placeholder="Введите текст">
                                </div>
                            </div>
                            <div class="form__item">
                                <div class="form__item-title">
                                    Добавьте описание вашего представления
                                </div>
                                <div class="form__inputs">
                                    <textarea name="description" class="form__textarea"
                                        placeholder="Введите описание"></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
</div>