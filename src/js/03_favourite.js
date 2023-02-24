
function handleClick(ev) {
    console.log(ev.currentTarget.id)
    ev.currentTarget.classList.toggle('selected') 
   
}

// esta función la tengo q llamar dentro del fetch que da los datos, porque como js es asíncrono si no no estaría relleno, la voy a colocar dentro del renderDrinkList porque es una función q reutilizo en los varios fecth q tengo.
//he llamado a los articulos en vez de a los li porque me daba error, creo que es porque no estaba muy
function addEventToDrink() {
    const favouriteList = document.querySelectorAll('.js-article-drink');
    for (const favouriteArticle of favouriteList) {
    favouriteArticle.addEventListener("click", handleClick)
    console.log('funciona')
   }

}