// créer la fonction avec "async"
// créer une variable response
// utiliser await et fetch
// passer l'url en parametre de fetch
// créer une variable data en appelant .json() sur response
// ne pas oublier await
// retourner la data

async function fetchData() { 
    const response = await fetch('https://dummyjson.com/posts')
    const data = await response.json()
    console.log(data)
}
fetchData()