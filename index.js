
    const quote=document.getElementById("quote");
    const author=document.getElementById("author");
    const button=document.getElementById("quotechangebutton");
    let rad="";
    function random(){
         rad=Math.floor(Math.random()*1600);
        console.log(rad);
    }
    const getquotes=async ()=>{
        const Api="https://type.fit/api/quotes";
        const data=await fetch(Api);
        const realdata=await data.json();
        random();
        if (realdata[rad].author==null) {
            
            quote.innerHTML="unKnown";
        }
        else{
            author.innerHTML='~ "'+realdata[rad].author +'"';
        }
        quote.innerHTML=realdata[rad].text;
    }
    getquotes();
    button.addEventListener("click",getquotes);