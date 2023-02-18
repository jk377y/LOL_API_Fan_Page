let leagueOfLegendsAPI = "http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion.json"
// grabbing object containing ALL champion data from api
fetch(leagueOfLegendsAPI)
    .then(response => response.json())
    .then(data => {
    let champArray = Object.keys(data.data)   // creates array of the first key values in the data response object
    for(let i = 0; i < champArray.length; i++) {
        let champIndex = champArray[i];      //  array of just champion names
        let allChampObjects = data.data[champIndex];  // returns all 162 champion objects
        //  fully destructures each champion 
        let {data: 
                {[champIndex]: {
                    blurb,
                    id,
                    image: {full, group, sprite},
                    info: {attack, defense, difficulty, magic},
                    key,
                    name,
                    partype,
                    stats: {armor, armorperlevel, attackdamage, attackdamageperlevel, attackrange, attackspeed, attackspeedperlevel, crit, critperlevel, hp, hpperlevel, hpregen, hpregenperlevel, movespeed, mp, mpperlevel, mpregen, mpregenperlevel, spellblock, spellblockperlevel},
                    tags: {[0]: role1, [1]: role2},
                    title
                }}
            } = data;
            const champDataDiv = document.createElement('div');
            champDataDiv.setAttribute("id", id)
            const gallery = document.querySelector('.gallery');
            let fullImage = "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/" + id + ".png"
            const imgEl = document.createElement('img');
            imgEl.classList.add('thumbnail','thumbnail');
            imgEl.src = fullImage;
            imgEl.setAttribute('title', name)
            champDataDiv.appendChild(imgEl);
            gallery.appendChild(champDataDiv);
            // this grabs the thumbnail image from the url using the id concatonated into the string value, then each thumbnail pic is added via appendChild method
            

        }})
        // h1.textContent = data.data[4].name;
        