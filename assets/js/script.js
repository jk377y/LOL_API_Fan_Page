let leagueOfLegendsAPI = "http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json"

fetch(leagueOfLegendsAPI)
    .then(response => response.json())
    .then(data => {
    let champArray = Object.keys(data.data)   // creates array of the first key values in the data response object
    for(let i = 0; i < champArray.length; i++) {
        let champIndex = champArray[i];      //  array of just champion names
        let allChampObjects = data.data[champIndex];  // returns all 162 champion objects
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
                
            } = data;   // fully destructures each champion 
            console.log(allChampObjects);    
    }});
    
    const menuBtn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobileNav')
    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });



    // let splashImage = (data.data[champIndex].image.full)
    // let splashImageUrl = "http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/"+splashImage
            