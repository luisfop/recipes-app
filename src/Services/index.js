export async function getRecipes(url,query){
    return new Promise((resolve,rej) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data)
        })
    })
};