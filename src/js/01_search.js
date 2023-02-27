/* eslint-disable strict */
const favouriteListStored = JSON.parse(localStorage.getItem('favouriteList'));
function drawLocalStorage() {
  if (favouriteListStored) {
//Para q no se borren cada vez que se guardan hay q meterlo en la lista de favoritos
    favouriteListData = favouriteListStored;
    renderFavouriteList(favouriteListData);
  }
}
drawLocalStorage();

//Esta función es la manejadora del evento de búsqueda
function handleSearchDrink(event) {
  event.preventDefault();
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput.value}`)
  .then((response) => response.json())
  .then((data) => {
      if(data.drinks.strDrinkThumb = ''){
        drinkListData = data.drinks.map((drink) => ({
          image: alternativeImg,
          name: drink.strDrink,
          drinkId: drink.idDrink,
          alt: drink.strDrink
        }));
        renderDrinkList(drinkListData);
      }else {drinkListData = data.drinks.map((drink) => ({
        image: drink.strDrinkThumb,
        name: drink.strDrink,
        drinkId: drink.idDrink,
        alt: drink.strDrink
      }));
      renderDrinkList(drinkListData);}
    });
  drinkList.innerHTML = '';
}

searchBtn.addEventListener('click', handleSearchDrink);