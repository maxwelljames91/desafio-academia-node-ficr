var axios = require("axios");

axios.get("https://api.github.com/users/maxwelljames91").then(function(resposta){
    console.log(resposta.data);
}).catch(function(error){
    if(error){
        console.log("status 404");
    }
})