function fetchData(url){
    const response = fetch(url)
        .then(response => response.json())
    return response;
}

const allItems = fetchData('/battle.json');
console.log(allItems);
console.log(allItems)
