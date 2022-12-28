let leagueOfLegendsAPI = "http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json"
let leagueOfLegendsAPI2 = "http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion/Aatrox.json"

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
    
                // create element (thumbnail pics) with the for loop using append child
            // use the click event on each thumbnail to provide input values into the champ api
            // let arr = [
            //     {
            //         id: 1, 
            //         name: 'John'
            //     }, 
            //     {
            //         id: 2, 
            //         name: 'Paul'
            //     }, 
            //     {
            //         id: 3,
            //         name: 'George'
            //     }, 
            //     {
            //         id: 4, 
            //         name: 'Ringo'
            //     }];
            //     for (let i = 0; i < arr.length; i++) {
            //         let div = document.createElement('div');
            //         div.innerHTML = '<p>' + arr[i].id + ': ' + arr[i].name + '</p>';
            //         document.body.appendChild(div);
            //       }

            // To create an HTML element and append it to the DOM using a for loop, you can use the following steps:

            // Use the document.createElement() method to create a new HTML element. For example, to create a div element:
            // Copy code
            // let div = document.createElement('div');
            // Use the for loop to iterate over the array of objects. On each iteration, you can access the current object using the loop variable.
            
            // Use the div.innerHTML property to set the content of the div element. You can use string concatenation to include the values from the current object in the element's content.
            
            // Use the appendChild() method to append the div element to the desired parent element.
            
            // Here's an example of how you could use this technique to create a div element for each object in an array and append it to the body element: