/* eslint-disable strict */
//AQUI ESTA LA FUNCION Q PONE EVENTO A TODO


function handleClick(ev) {
    
    ev.currentTarget.classList.toggle('selected'); 
    //LUEGO ORDENAR EN FUNCIONES
    //ponemos un find porque necesito que sea individualizada la búsqueda, porque es en cada click, devuelve el primer elemento que cumple la condición
    const idSelected = ev.currentTarget.id;
    const drinkSelected = drinkListData.find((drink) => drink.drinkId === idSelected);
    const indexFavourite = favouriteListData.findIndex((drink) => drink.drinkId === idSelected);
    if(indexFavourite === -1) {
    favouriteListData.push(drinkSelected);
    }
    else {
    favouriteListData.splice(indexFavourite, 1);
   }
    renderFavouriteList(favouriteListData)
  
}

function renderFavouriteList(favouriteListData) {
    //vaciamos la lista antes para que no se vayan almacenando
    favouriteList.innerHTML = '';
    for (const favourite of favouriteListData) {
       renderFavourite(favourite);
    }
}

function renderFavourite(drinkData) {
    //esta funcion pinta un coctel//
    //con Dom crear el elemento li, crear el articulo que tiene dentro,lo q tiene dentro del articulo, ponerle atributos pegarselo a sí mismo y pegarlo al padre// 
    const liElement = document.createElement('li');
    liElement.setAttribute('class', 'drink');
    const articleElement = document.createElement('article');
    articleElement.setAttribute('class', 'js-article-drink');
    articleElement.setAttribute('id', drinkData.drinkId);
    const imgArticle = document.createElement('img');
    //a la imagen le tengo que poner atributos para poner el enlace
    imgArticle.src = drinkData.image;
    imgArticle.setAttribute('class', 'drink-img');
    imgArticle.setAttribute('alt', 'cóctel');
    const nameArticle = document.createElement('h3');
    const nameContent = document.createTextNode(drinkData.name);
    nameArticle.setAttribute('class', 'drink-name');

    //pegar elementos a sus papis//
    
    favouriteList.appendChild(liElement);
    liElement.appendChild(articleElement);
    articleElement.appendChild(imgArticle);
    articleElement.appendChild(nameArticle);
    nameArticle.appendChild(nameContent);

};




// esta función la tengo q llamar dentro del fetch que da los datos, porque como js es asíncrono si no no estaría relleno para cuando la llame, la voy a colocar dentro del renderDrinkList porque es una función que reutilizo en los varios fecth que tengo.
//he llamado a los articulos en vez de a los li porque me daba error, creo que es porque al no tener estilos se pierde en que es que
function addEventToDrink() {
    const articleList = document.querySelectorAll('.js-article-drink');
    for (const favouriteArticle of articleList) {
    favouriteArticle.addEventListener("click", handleClick)
    console.log('funciona')
   }

}