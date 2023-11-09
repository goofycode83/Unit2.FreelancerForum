
const renderAd = () => {

const main = document.querySelector(`main`);
const content = `
<h1>Freelancer Forum</h1>
<h3>The average starting price is $30</h3>
<h2>Available Freelancers</h2>
<div>
<h2>Name</h2>
<ul>
<li>Alice</li>
<li>Bob</li>
<li>Carol</li>
</ul>
</div>
<div>
<h2>Occupation</h2>
<ul>
<li>Writer</li>
<li>Teacher</li>
<li>Programmer</li>
</ul>
</div>
<div>
<h2>Starting Price</h2>
<ul>
<li>$30</li>
<li>$50</li>
<li>$70</li>
</ul>
</div>`;

main.appendChild(content);
};

renderAd();