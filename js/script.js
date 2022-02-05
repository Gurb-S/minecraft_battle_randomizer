// function getJSON(url){
//     try{
//       const response = fetch(url);
//       return response.json();
//     } catch (error) {
//       throw error;
//     }
//   }

// let items = [];
// let allItems = items[0];

// getJSON('/battle.json')
//   .then(data => items.push(data));

// console.log(items);

async function getJSON(){
    const response = await fetch('/battle.json');
    const data = await response.json();
    console.log(data);
    const weaponsArray = data.weapons;
    console.log(weaponsArray)
    console.log(weaponsArray[0].displayName);
    let weapons = [];
    weaponsArray.forEach(weapon => {
        weapons.push(weapon.displayName);
    });
    console.log(weapons);
}

getJSON();