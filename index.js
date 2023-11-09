
startingPrice = 0;
const main = document.querySelector(`main`);
const h1 = document.createElement(`h1`);
const h2 = document.createElement(`h2`);
const h2_2 = document.createElement(`h2`);
const nameDiv = document.createElement(`div`);
const occupationDiv = document.createElement(`div`);
const priceDiv = document.createElement(`div`);
const ul = document.createElement(`ul`);
const li = document.createElement(`li`);


main.style.border = `5px solid black`;
h1.innerHTML = `Freelancer Forum`;
h2.innerHTML = `The average starting price is ${startingPrice}`;
h2_2.innerHTML = `Available Freelancers`;
h2_2.style.fontWeight =`bold`;
li.fontWeight =`bold`;


main.appendChild(h1);
main.appendChild(h2);
main.appendChild(h2_2);
ul.appendChild(li);
nameDiv.appendChild(ul);
occupationDiv.appendChild(ul);
priceDiv.appendChild(ul);



