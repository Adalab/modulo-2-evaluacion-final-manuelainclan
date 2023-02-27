/* eslint-disable strict */
fetch(URL).then((response) => response.json())
  .then((data) => {
    drinkListData = data.drinks.map((drink) =>
      ({
        image: drink.strDrinkThumb,
        name: drink.strDrink,
        drinkId: drink.idDrink,
        alt: drink.strDrink
      }));
    renderDrinkList(drinkListData);
    //meter datos en la lista de cocteles
    //ver que sale en los datos
    //renderizar la lista
  });

//esta funcion pinta un coctel
function renderDrink(drinkData) {
  const liElement = document.createElement('li');
  liElement.setAttribute('class', 'section--ul--li drink');
  liElement.setAttribute('id', drinkData.drinkId);
  const articleElement = document.createElement('article');
  articleElement.setAttribute('class', 'section--ul--li--article js-article-drink');
  articleElement.setAttribute('id', drinkData.drinkId);
  const imgArticle = document.createElement('img');
  imgArticle.src = drinkData.image;
  imgArticle.setAttribute('class', 'section--ul--li--article--img drink-img');
  imgArticle.setAttribute('alt', `Cóctel ${drinkData.alt}`);
  const nameArticle = document.createElement('h3');
  const nameContent = document.createTextNode(drinkData.name);
  nameArticle.setAttribute('class', 'section--ul--li--article--title drink-name');

  liElement.appendChild(articleElement);
  articleElement.appendChild(imgArticle);
  articleElement.appendChild(nameArticle);
  nameArticle.appendChild(nameContent);
  return liElement;
}

//Esta función pinta una lista de cócteles
function renderDrinkList(drinkListData) {
//Un bucle para hacer una lista con todos las bebidas, rellena el renderDrink con los datos del drinkListaData y les pega
  for (const drinkItem of drinkListData) {
    const liElement = renderDrink(drinkItem);
    drinkList.appendChild(liElement);
    //si hay un favorito entonces pintame la clase
    if(favouriteListData === drinkListData) {
      ev.currentTarget.classList.add('selected');
    }
  }
  addEventToDrink();
}



