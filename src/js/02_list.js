/* eslint-disable strict */
/*
pintar lista de cocteles
-coger los datos del api con un fetch
dom

 */
//  const favouriteListStored = JSON.parse(localStorage.getItem('favouriteList'));
//     renderFavouriteList(favouriteListStored);
const favoriteStored = localStorage.getItem('favouriteList')
if (favoriteStored) {
    let listFavoriteData = JSON.parse(favoriteStored);
    renderFavouriteList(listFavoriteData);
}

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
})


function renderDrink(drinkData) {
    //esta funcion pinta un coctel//
    //con Dom crear el elemento li, crear el articulo que tiene dentro,lo q tiene dentro del articulo, ponerle atributos pegarselo a sí mismo y pegarlo al padre// 
    const liElement = document.createElement('li');
    liElement.setAttribute('class', 'section--ul--li drink');
    const articleElement = document.createElement('article');
    articleElement.setAttribute('class', 'section--ul--li--article js-article-drink');
    articleElement.setAttribute('id', drinkData.drinkId);
    const imgArticle = document.createElement('img');
    //a la imagen le tengo que poner atributos para poner el enlace
    imgArticle.src = drinkData.image;
    imgArticle.setAttribute('class', 'section--ul--li--article--img drink-img');
    imgArticle.setAttribute('alt', `Cóctel ${drinkData.alt}`);
    const nameArticle = document.createElement('h3');
    const nameContent = document.createTextNode(drinkData.name);
    nameArticle.setAttribute('class', 'section--ul--li--article--title drink-name');

    //pegar elementos a sus papis//
    
    // aqui no lo pego al ul porque luego quiero reutilizar la función,entonces lo pego en la función de render list, para eso no me tengo q olvidar de llamar a li dentro de la función y aquí poner el return
    liElement.appendChild(articleElement);
    articleElement.appendChild(imgArticle);
    articleElement.appendChild(nameArticle);
    nameArticle.appendChild(nameContent);  
    
    
    return liElement; 
    
};


function renderDrinkList(drinkListData) {
    //esta función es una bucle para hacer una lista con todos las bebidas, rellena el renderDrink con los datos del drinkListaData
    for (const drinkItem of drinkListData) {
        const liElement = renderDrink(drinkItem);
        drinkList.appendChild(liElement);
        
       
    }
    addEventToDrink()
}



