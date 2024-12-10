# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/active-states.jpg)
![](./design/mobile-design.jpg)

## My process

### Built with

- HTML
- CSS
- Flexbox
- Javascript

### What I learned

I learnt about making faq accordion which useful for website by using HTML, CSS, Javascript. I mostly learnt the javascript coding to build the interactive component to make it more interesting. Some highlight of code snippets belows:

```js
for (let i = 0; i < minus.length; i++) {
  question[i].addEventListener("click", function () {
    plus[i].classList.toggle("hidden");
    minus[i].classList.toggle("hidden");
    para[i].classList.toggle("hidden");
  });
}
```

## Author

- Portfolio - [Salma Adinda Nisa](https://salma-adinda-nisa-portfolio.framer.website/)
