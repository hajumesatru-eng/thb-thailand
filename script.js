const API_KEY="YOUR_API_KEY";
const URL=`https://gnews.io/api/v4/search?q=movie&lang=en&max=10&apikey=${API_KEY}`;
async function loadNews(){
const res=await fetch(URL);const data=await res.json();
const hero=document.getElementById("hero");
const grid=document.getElementById("news-grid");
const trending=document.getElementById("trending");
const first=data.articles[0];
hero.innerHTML=`<img src="${first.image}"><h1>${first.title}</h1>`;
data.articles.slice(1).forEach(a=>{
const el=document.createElement("article");
el.innerHTML=`<img src="${a.image}"><h2>${a.title}</h2>`;
grid.appendChild(el);
const li=document.createElement("li");
li.innerHTML=a.title;
trending.appendChild(li);
});
}
loadNews();