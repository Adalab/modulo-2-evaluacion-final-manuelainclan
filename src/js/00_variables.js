'use strict';

const searchInput = document.querySelector('.js-search-input');
const searchBtn = document.querySelector('.js-search-btn');
const logBtn = document.querySelector('.js-log-btn');
const drinkList = document.querySelector('.js-drink-list');
const favouriteList = document.querySelector('.js-favourite-list');



const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
const alternativeImg = `https://via.placeholder.com/210x295/ffffff/666666/?text=TV`;

//lista que va a guardar los datos de la Api//
let drinkListData = [];
let favouriteListData = [];


