'use strict'

const list = document.querySelector('.message__list');
const forma = document.querySelector('form');

const names = forma.querySelector('input');
const text = forma.querySelector('textarea');
const btn = forma.querySelector('button');

btn.addEventListener('click', function(e) {
    e.preventDefault();

    const dateTime = new Date();
    const hours = `${dateTime.getHours()}`;
    const minute = `${dateTime.getMinutes()}`;
    const second = `${dateTime.getSeconds()}`;
    const day = `${dateTime.getDate()}`;
    const month = `${dateTime.getMonth()}`;


    const dateStr = `${hours.padStart(2, '0')}:
                     ${minute.padStart(2, '0')}:
                     ${second.padStart(2, '0')} 
                     ${day.padStart(2, '0')}.
                     ${month.padStart(2, '0')}.
                     ${dateTime.getFullYear()}
                    `;
    
    const msg = `
    <div class="message">
        <div class="name">${names.value}</div>
        <div class="date">${dateStr}</div>
        <div class="message__text">${text.value}</div>
    </div>
    `;

    if(names.value !== '' && text.value !== '') {
        list.insertAdjacentHTML('beforeend', msg);
    }
    names.value = ``;
    text.value = ``;
})

