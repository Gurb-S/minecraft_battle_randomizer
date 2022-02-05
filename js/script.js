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
const item = document.getElementById('item');
const btn = document.getElementById('btn');
const item2 = document.getElementById('item2');
const btn2 = document.getElementById('btn2');

async function getJSON(){
    const response = await fetch('/battle.json');
    const data = await response.json();
    console.log(data);
    const weaponsArray = data.weapons;
    console.log(weaponsArray)
    // console.log(weaponsArray[0].displayName);
    let weapons = [];
    weaponsArray.forEach(weapon => {
        weapons.push(weapon.displayName);
    });

    // console.log(weapons);
    const helmetArray = data.helmet;
    console.log(helmetArray);
    console.log(helmetArray[0].displayName);
    let helmets = [];
    helmetArray.forEach(helmet => {
        helmets.push(helmet.displayName);
    })
    console.log(helmets);

    const chestPlateArray = data.chestplate;
    console.log(chestPlateArray);
    console.log(chestPlateArray[0].displayName);
    let chestplates = [];
    chestPlateArray.forEach(chestplate => {
        chestplates.push(chestplate.displayName);
    })
    console.log(chestplates);

    const leggingsArray = data.leggings;
    console.log(leggingsArray);
    console.log(leggingsArray[0].displayName);
    let leggings = [];
    leggingsArray.forEach(legging => {
        leggings.push(legging.displayName);
    })
    console.log(leggings);

    const bootsArray = data.boots;
    console.log(bootsArray);
    console.log(bootsArray[0].displayName);
    let boots = [];
    bootsArray.forEach(boot => {
        boots.push(boot.displayName);
    })
    console.log(boots);

    
    getRandomItem(weapons);
    getRandomItem(helmets);
    getRandomItem(chestplates);
    getRandomItem(leggings);
    getRandomItem(boots);
    
}

function getRandomItem(arr){
    
    const randomNumber = Math.floor(Math.random() * arr.length);
    let randomItem = arr[randomNumber];
    console.log(randomItem);
    item.innerHTML += `<h2>${randomItem}</h2>`;

}
//getJSON();
btn.addEventListener('click', () => {
    item.innerHTML = '';
    getJSON();
});

btn2.addEventListener('click', () => {
    item2.innerHTML = '';
    getJSON();
});

