"use strict";

const tabContent = document.querySelectorAll('.tab__content');

const tabContainer = document.querySelector('.tab__container');

const tabs = document.querySelectorAll('.tab__list');

const faqContainer = document.querySelector('.faq')

const faqTexts = document.querySelectorAll('.faq__text')

const errorMsg =  document.querySelector('.error__msg')
const input = document.querySelector('.footer__input')

const icon = document.querySelector('.error__icon')

input.addEventListener('invalid', (e) => {

    e.preventDefault()

    if(!input.validity.valid) {

        errorMsg.style.display = 'block'
        icon.style.display = 'inline-block'
        input.setCustomValidity = ''
        input.classList.add('invalid')

    }


})


  

input.addEventListener('input', (e) => {

    e.preventDefault()

    errorMsg.style.display = 'none'
    icon.style.display = 'none'

    input.setCustomValidity = ''
    input.classList.remove('invalid')

})

faqContainer.addEventListener('click', (e) => {

    e.preventDefault()
    const clicked = e.target.closest('.faq__list')
    
    if(!clicked) return

    faqTexts.forEach(text => text.classList.remove('faq__text--active'))
    
    
    
    if (clicked.querySelector(':nth-child(3)').classList.contains('faq__text--active')) {
     
        clicked.querySelector(':nth-child(3)').classList.remove('faq__text--active')
        clicked.querySelector(':nth-child(2)').classList.remove('my__svg')


    }else{

        clicked.querySelector(':nth-child(3)').classList.add('faq__text--active')
        clicked.querySelector(':nth-child(2)').classList.add('my__svg')


    }



})



if (tabContainer) {

    tabContainer.addEventListener('click', (e) => {



    
        
        const clicked = e.target.closest('.tab__list')
    
        console.log(clicked)
    
        if(!clicked) return
    
        tabs.forEach(tab => tab.classList.remove('tab--active'))
        tabContent.forEach(content => content.classList.remove('tab__content--active'))
    
        clicked.classList.add('tab--active')
    
        document.querySelector(`.tab__content--${clicked.dataset.tab}`).classList.add('tab__content--active')
    
    
    })
    
} else {
    
    console.error(' Problem is here  ')

}


