/**
 * Añadir funcionalidad de búsqueda:
 * cuando se escriba en el input me salga lo q busco
 * evento de click en el botón buscar 
 * el evento lo que hace es meter el valor del input text en la url
 */




function handleSearchDrink(event) {
event.preventDefault();
 fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput.value}`).then((response) => response.json())
.then((data) => {
    
    console.log(data)
    drinkListData = data.drinks.map((drink) =>
    ({
        image: drink.strDrinkThumb,
        name: drink.strDrink,
    }));
    
    console.log(drinkListData);
    drinkList.innerHTML = "";
    renderDrinkList(drinkListData);
    //meter datos en la lista de cocteles
    //ver que sale en los datos
    //renderizar la lista
   
})
}

searchBtn.addEventListener('click', handleSearchDrink)