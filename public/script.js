const items = [
    {
        name: "Mephisto",
        price: 1800,
        image: "path/to/mephisto_image.jpg"
    },
    {
        name: "Legendary Skin",
        price: 2000,
        image: "path/to/image1.jpg"
    },
    {
        name: "Epic Pickaxe",
        price: 1200,
        image: "path/to/image2.jpg"
    },
    {
        name: "Epic Outfit",
        price: 1500,
        image: "path/to/image4.jpg"
    },
    {
        name: "Nightmare Before Christmas - Jack Skellington",
        price: 1600,
        image: "path/to/jack_skellington_image.jpg"
    },
    {
        name: "Nightmare Before Christmas - Sally",
        price: 1600,
        image: "path/to/sally_image.jpg"
    },
    {
        name: "Nightmare Before Christmas - Oogie Boogie",
        price: 1600,
        image: "path/to/oogie_boogie_image.jpg"
    },
    {
        name: "Nightmare Before Christmas - Zero",
        price: 800,
        image: "path/to/zero_image.jpg"
    },
    {
        name: "Legendary Glider",
        price: 1200,
        image: "path/to/image5.jpg"
    },
    {
        name: "Uncommon Wrap",
        price: 300,
        image: "path/to/image6.jpg"
    },
    {
        name: "Rare Back Bling",
        price: 800,
        image: "path/to/image7.jpg"
    },
    {
        name: "Legendary Emote",
        price: 800,
        image: "path/to/image8.jpg"
    }
];

const itemContainer = document.getElementById('item-container');

// Display Mephisto
const mephistoItem = items[0];
const mephistoDiv = document.createElement('div');
mephistoDiv.classList.add('item');
mephistoDiv.innerHTML = `
    <img src="${mephistoItem.image}" alt="${mephistoItem.name}">
    <h2>${mephistoItem.name}</h2>
    <p>${mephistoItem.price} V-Bucks</p>
`;
itemContainer.appendChild(mephistoDiv);

// Display Nightmare Before Christmas set (4 items)
const nightmareRowDiv = document.createElement('div');
nightmareRowDiv.classList.add('new-row');
itemContainer.appendChild(nightmareRowDiv);

for (let i = 1; i <= 4; i++) {
    const item = items[i];
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    
    itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p>${item.price} V-Bucks</p>
    `;
    
    nightmareRowDiv.appendChild(itemDiv);
}

// Add another row for remaining items
const newRowDiv = document.createElement('div');
newRowDiv.classList.add('new-row');
itemContainer.appendChild(newRowDiv);

// Display the remaining items below
for (let i = 5; i < items.length; i++) {
    const item = items[i];
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    
    itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p>${item.price} V-Bucks</p>
    `;
    
    newRowDiv.appendChild(itemDiv);
}