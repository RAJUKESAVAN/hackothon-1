async function getData(){
    try{
        let response = await fetch("https://api.openbrewerydb.org/breweries")
        let data = await response.json()
        // console.log(data)
        container.innerHTML=""

        // display function
        var count = 0; 
        await data.forEach((dataObj)=>{
           display(dataObj, count++)
        })
        
        // character function
        var count1=0
        await data.forEach((dataObj)=>{
            charName(dataObj, count1++)
         })
    }catch(error) {
        (error)=>console.log(error);
    }
};
getData()

// diaplay called 10 times to create 10 books containers
const display = (obj, id)=>{
    container.innerHTML +=`
    <div id="childContainer+${id}" class="child-container">
    <p>BREWERY_TYPE: ${obj.BREWERY_TYPE}</p>
    <p>street: ${obj.street}</p>
    <p>city: ${obj.city}</p>
    <p>state: ${obj.state}</p>
    <p>postal_code: ${obj.postal_code}</p>
    <p>country: ${obj.country}</p>
    <p>website_url: ${obj.website_url}</p>
    <p>phoneno: ${obj.phoneno}</p>
    </div>
    `
}

// characters function called 10 times to add characters to each book
function charName(obj, id1){
    var charArray = obj.characters.slice(11,16)
    // console.log(charArray)
    for(let i=0;i<charArray.length;i++){
        // console.log(charArray[i])
        fetch(charArray[i])
            .then((res)=>res.json())
            .then((data)=> {
                document.getElementById("childContainer+"+id1).innerHTML += 
                `<p id="character">Character: ${data.name}</p>`
                // console.log(data.name)
            })
            .catch((error)=>console.log(error))
    }
}