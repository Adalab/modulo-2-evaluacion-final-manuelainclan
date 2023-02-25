'use strict';

const searchInput = document.querySelector('.js-search-input');
const searchBtn = document.querySelector('.js-search-btn');
const resetBtn = document.querySelector('.js-reset-btn');
const drinkList = document.querySelector('.js-drink-list');
const favouriteList = document.querySelector('.js-favourite-list');


const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;

//lista que va a guardar los datos de la Api//
let drinkListData = [];
let favouriteListData = [];