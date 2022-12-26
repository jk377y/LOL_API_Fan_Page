let leagueOfLegendsAPI = "http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json"

fetch(leagueOfLegendsAPI)
    .then(response => {
        // console.log(response);
        return response.json()
        
    }).then (data => {
        
        let champArray = Object.keys(data.data)
        for(let i = 0; i < champArray.length; i++) {
            let champIndex = champArray[i]
            let firstAttempt = (data.data[champIndex])
            let splashImage = (data.data[champIndex].image.full)
            let splashImageUrl = "http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/"+splashImage
            // console.log(champArray);
            //console.log(champIndex);
            console.log(firstAttempt, splashImageUrl);
            // console.log(firstAttempt);
        }

        // console.log(champArray[2]);
       
        
        
        // 
        // 
        // let secondAttempt = 
        // console.log(firstAttempt);
        // console.log(champIndex);
        // console.log(secondAttempt);
        // }
    })
    