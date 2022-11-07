const shopList = ['pane', 'pasta', 'verdura', 'carne', 'frutta', 'confort food'];
const ulEl = document.querySelector('ul');

let x = 0;

while (x < shopList.length){
    const itemEl = document.createElement('li');
    itemEl.innerText = shopList[x];
    ulEl.append(itemEl);
    x++
};