let apiKey= '627aa36603b94e67872919955f6d1d43';

let newsAccordion=document.getElementById('newsAccordion');

//create a get request
const xhr= new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,true);

xhr.onload=function(){
    if(this.status===200){
    let json=JSON.parse(this.responseText)
    let articles= json.articles
    // console.log(articles)
    let newsHTML="";
    articles.forEach(function(element,index){
     
        let news=  `<div class="accordion" id="newsAccordion">
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading${index}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
            <b>Breaking News ${index+1}: </b> ${element["title"]}
            </button>
          </h2>
          <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
            <div class="accordion-body">
             ${element["content"]}.<a href="${element['url']}" target="_blank" >Read More</a></div>
            </div>
          </div>
        </div>
   
      </div>`
newsHTML+=news;
})
    newsAccordion.innerHTML=newsHTML;
    }
    else{
        console.log("Some error occured")
    }
}
xhr.send()



