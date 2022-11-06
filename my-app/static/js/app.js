"use strict"

import * as devFunctions from './modules/functions.js';


document.addEventListener('DOMContentLoaded', () => {


    devFunctions.isWebp();
    devFunctions.OS();
    devFunctions.select();




    const levels = document.querySelectorAll('.level');

    levels.forEach(level => {
        level.addEventListener('mouseenter', e => handlerHover(e.target));
        level.addEventListener('mouseleave', e => handlerOut(e.relatedTarget, e.target));
    })


    // Число активных звезд у пользователя
    let currentStarValue = 3;

    function handlerHover(target) {


        const levelsWrapper = target.closest('.levels');
        if (levelsWrapper.classList.contains('levels-completed')) return;

        const levels = levelsWrapper.querySelectorAll('.level');

        const progressBar = levelsWrapper.querySelector('.levels__progress');

        const rhombuses = progressBar.querySelectorAll('.levels__progress-round');
        const third = progressBar.querySelector('.levels__progress-third');
        const twoThirds = progressBar.querySelector('.levels__progress-two-thirds');
        const total = progressBar.querySelector('.levels__progress-total');


        let activeLevel;
        levels.forEach(level => {
            if (level.classList.contains('level-active')) {
                activeLevel = level;
            }
        });



        if (target.classList.contains('level-server')) {

            if (!(activeLevel && activeLevel.classList.contains('level-team'))) {
                progressBar.style = `--precent: 66.666%;`;
                rhombuses.forEach(rhombus => {
                    rhombus.classList.remove('active');
                });
                third.classList.add('active');
            }
            if (activeLevel && activeLevel.classList.contains('level-server')) {
                progressBar.style = `--precent: ${66.666 - (currentStarValue * 33.333 / 5)}%;`;
            }


        } else if (target.classList.contains('level-team')) {

            progressBar.style = `--precent: 33.333%;`;
            rhombuses.forEach(rhombus => {
                rhombus.classList.remove('active');
            });
            third.classList.add('active');
            twoThirds.classList.add('active');

        } else {

            progressBar.style = `--precent: 0%;`;
            rhombuses.forEach(rhombus => {
                rhombus.classList.remove('active');
            });
            third.classList.add('active');
            twoThirds.classList.add('active');
            total.classList.add('active');

        }

    }

    function handlerOut(related, target) {

        if (related && related.classList.contains('levels__items')) return;

        const levelsWrapper = target.closest('.levels');
        if (levelsWrapper.classList.contains('levels-completed')) return;

        const progressBar = levelsWrapper.querySelector('.levels__progress');

        const levels = levelsWrapper.querySelectorAll('.level');

        const third = progressBar.querySelector('.levels__progress-third');
        const twoThirds = progressBar.querySelector('.levels__progress-two-thirds');
        const total = progressBar.querySelector('.levels__progress-total');

        let activeLevel;
        levels.forEach(level => {
            if (level.classList.contains('level-active')) {
                activeLevel = level;
            }
        });

        if (activeLevel) {
            if (activeLevel.classList.contains('level-server')) {
                // progressBar.style = `--precent: 66.666%;`;
                progressBar.style = `--precent: ${66.666 - (currentStarValue * 33.333 / 5)}%;`;
                twoThirds.classList.remove('active');
                total.classList.remove('active');
            } else if (activeLevel.classList.contains('level-team')) {
                // progressBar.style = `--precent: 33.333%;`;
                progressBar.style = `--precent: ${33.333 - (currentStarValue * 33.333 / 10)}%;`;
                total.classList.remove('active');
            }
        } else {
            progressBar.style = `--precent: 100%;`;
            third.classList.remove('active');
            twoThirds.classList.remove('active');
            total.classList.remove('active');
        }




    }
});







