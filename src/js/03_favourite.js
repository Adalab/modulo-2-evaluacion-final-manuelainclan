/* eslint-disable strict */

function handleClick(ev) {
  ev.preventDefault();
  //ponemos un find porque necesito que sea individualizada la búsqueda, porque es en cada click, devuelve el primer elemento que cumple la condición
  const idSelected = ev.currentTarget.id;
  const drinkSelected = drinkListData.find((drink) => drink.drinkId === idSelected);
  const indexFavourite = favouriteListData.findIndex((drink) => drink.drinkId === idSelected);
  if(indexFavourite === -1) {
    ev.currentTarget.classList.add('selected');
    favouriteListData.push(drinkSelected);
  }
  else {
    favouriteListData.splice(indexFavourite, 1);
    ev.currentTarget.classList.remove('selected');
  }
  localStorage.setItem('favouriteList', JSON.stringify(favouriteListData));
  renderFavouriteList(favouriteListData);
}

function renderFavouriteList(favouriteListData) {
  favouriteList.innerHTML = '';
  for (const favourite of favouriteListData) {
    const liElement = renderDrink(favourite);
    const cancelDiv = document.createElement('div');
    cancelDiv.setAttribute('class', 'div--prueba js-btn-favorite');
    cancelDiv.setAttribute('id', liElement.id);
    const x = document.createElement('i');
    x.setAttribute('class','fa-solid fa-circle-xmark');
    favouriteList.appendChild(liElement);
    liElement.appendChild(cancelDiv);
    cancelDiv.appendChild(x);
  }
  const btnborrar = document.createElement('div');
  btnborrar.setAttribute('class', 'js-btn-remove');
  const resetText = document.createTextNode('Reset');
  btnborrar.appendChild(resetText);
  favouriteList.appendChild(btnborrar);
  addEventToReset();
  addEventToFavorite();
}
// esta función la tengo q llamar dentro del fetch que da los datos, porque como js es asíncrono si no no estaría relleno para cuando la llame, la voy a colocar dentro del renderDrinkList porque es una función que reutilizo en los varios fecth que tengo.
function addEventToDrink() {
  const articleList = document.querySelectorAll('.js-article-drink');
  for (const favouriteArticle of articleList) {
    favouriteArticle.addEventListener('click', handleClick);
    const haveSelected = favouriteListData.find((coctail) => coctail.drinkId === favouriteArticle.id);
    if (haveSelected) {
      favouriteArticle.classList.add('selected');
    }
  }

}

function addEventToFavorite() {
  const divList = document.querySelectorAll('.js-btn-favorite');
  for (const favouriteArticle of divList) {
    favouriteArticle.addEventListener('click', handleDelete);
  }
}

function handleDelete(ev) {
  ev.preventDefault();
  const favIdSelected = ev.currentTarget.id;
  const indexBoton = favouriteListData.findIndex((fav) => fav.drinkId === favIdSelected);
  favouriteListData.splice(indexBoton, 1);
  localStorage.removeItem('favouriteList');
  localStorage.setItem('favouriteList', JSON.stringify(favouriteListData));
  renderFavouriteList(favouriteListData);
}

function handleAllDelete(ev) {
  ev.preventDefault();
  localStorage.removeItem('favouriteList');
  favouriteList.innerHTML = '';
  favouriteListData = [];
  drinkList.innerHTML = '';
  renderDrinkList(drinkListData);
}

function addEventToReset(){
  const removeBtn = document.querySelector('.js-btn-remove');
  removeBtn.addEventListener('click', handleAllDelete);
}