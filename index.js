const acceskey="xPe6ef9qoY0Y9kxCAmom1c23bK9jgxYf6MyLnkpgYKE"
const formel=document.querySelector("form");
const enputEl=document.getElementById("search-input");
const searchbtn=document.getElementById("search-button");
const searchresults=document.querySelector(".search-results");
const showmore=document.getElementById("show-more");

let inputdata="";
let page=1;

async function serachImages(){
    inputdata=enputEl.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${acceskey}`

    const response=await fetch(url);
    const data=await response.json();
    const results=data.results;
    if(page===1){
    searchresults.innerHTML=""
     
    results.map((result)=>{
        const imagewraper=document.createElement("div");
        imagewraper.classList.add("search-result");
        const image=document.createElement("img");
        image.src=result.urls.small;
        image.alt=result.alt_description;
        const imagelink=document.createElement("a");
        imagelink.href=result.link;
        imagelink.target="_blank";
        imagelink.textContent=result.alt_description;


        imagewraper.appendChild(image);
        imagewraper.appendChild(imagelink);
        searchresults.appendChild(imagewraper);
    });
    page++;
    if(page>1){
        showmore.style.display="block";
    }

    }
}

formel.addEventListener("submit",(event)=>{
  event.preventDefault();
  page=1;
  serachImages()
})

showmore.addEventListener("click",()=>{
     serachImages()
  })