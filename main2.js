
var nextPage = "";
var lastPage = "";
var currentApiURL = "";


function next() {
    currentApiURL =  nextPage;
   goTop();
    api();
    

}

function back() {
    currentApiURL =  lastPage;
    goTop();
    api();
    

}

function search() {
    
    currentApiURL = `https://rickandmortyapi.com/api/character`;
    


    api();
}



function api()
{
    document.getElementById("results").innerHTML = "";
   fetch(currentApiURL)
   .then(response => response.json())
   .then(data => {
     showApiData(data);
            
   })

}
function House(){

            document.getElementById("results").innerHTML = "";
            document.getElementById("buttonNext").style.display = "none";
            document.getElementById("buttonBack").style.display = "none";
            document.getElementById("buscar").style.display = "inline";
           
        }


function showApiData (data)
{
         var element =  document.getElementById("results");
         var countingHtml = document.createElement('h4');
         countingHtml.style.color = "rgba(0,176,200,255)";
         countingHtml.innerHTML = "Cantidad de personajes encontrados: " + data.info.count;
         element.appendChild(countingHtml);

        for (var i = 0; i < data.results.length; i++)
        {

            var currentItem = data.results[i];
            var personaje = document.createElement('h5');
            personaje.style.color = "white";
            var htmlStyle= ` <img src="${currentItem.image}"/>`;
            htmlStyle+= "<br>"+ currentItem.name;
            htmlStyle+="<br>Especie:" + currentItem.species;
            htmlStyle+= "<br>Status De Vida: " + currentItem.status;
            htmlStyle+="<br> <br> <br> <br> <br>"
            personaje.innerHTML = htmlStyle;
            document.getElementById('results').appendChild(personaje);
           

        }

        

       
        debugger;
        if (data.info.next != null){
            debugger;
             document.getElementById("buttonNext").style.display = "inline";
             document.getElementById("buscar").style.display = "none";
             nextPage = data.info.next
        }
        else
        {
            document.getElementById("buttonNext").style.display = "none";
            document.getElementById("buscar").style.display = "inline";
        }

        if (data.info.prev != null){
            debugger;
            document.getElementById("buttonBack").style.display = "inline";
            lastPage = data.info.prev;
        }
        else
        {
            document.getElementById("buttonBack").style.display = "none";
        }

       
   
        
}

     function BuscarNombre(){

            document.getElementById("results").innerHTML = "";
            document.getElementById("buttonNext").style.display = "none";
            document.getElementById("buttonBack").style.display = "none";
            document.getElementById("buscar").style.display = "inline";
           
            
            currentApiURL = `https://rickandmortyapi.com/api/character/?name=${id1}&status=alive`
            api();

        }

        function goTop(){
            var top=document.getElementById(`top`);
            top.scrollIntoView();
        }
