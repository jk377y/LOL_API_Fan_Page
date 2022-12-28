const menuBtn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobileNav')
    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });

document.getElementById('hamburger').addEventListener('click', function (){
if (document.getElementById('hamburger').classList.contains("is-active")){
    document.getElementById('main').style.display = "none";
} else {
    document.getElementById('main').style.display = "flex";
}
});

let leagueOfLegendsAPI = "http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json"


fetch(leagueOfLegendsAPI)
    .then(response => response.json())
    .then(data => {
    let champArray = Object.keys(data.data)   // creates array of the first key values in the data response object
    for(const champ of champArray) {
        let {data: 
                {[champ]: {
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
            
            //document.querySelector('#blurb').textContent = blurb
            //document.querySelector('#id').textContent = id  // sets value to zyra after the 162 loop
            //document.querySelector('#full').textContent = full
            // let fullPic = document.getElementById('pic');
            
            // fullPic.src = fullImage
            //console.log(full);
            // document.querySelector('#group').textContent = group
            // document.querySelector('#sprite').textContent = sprite
            // document.querySelector('#attack').textContent = attack
            // document.querySelector('#defense').textContent = defense
            // document.querySelector('#difficulty').textContent = difficulty
            // document.querySelector('#magic').textContent = magic
            // document.querySelector('#key').textContent = key
            // document.querySelector('#name').textContent = name
            // document.querySelector('#partype').textContent = partype
            // document.querySelector('#armor').textContent = armor
            // document.querySelector('#attackdamage').textContent = attackdamage
            // document.querySelector('#attackrange').textContent = attackrange
            // document.querySelector('#attackspeed').textContent = attackspeed
            // document.querySelector('#crit').textContent = crit
            // document.querySelector('#hp').textContent = hp
            // document.querySelector('#hpregen').textContent = hpregen
            // document.querySelector('#movespeed').textContent = movespeed
            // document.querySelector('#mp').textContent = mp
            // document.querySelector('#mpregen').textContent = mpregen
            // document.querySelector('#spellblock').textContent = spellblock
            
            // creates champion divs on thumbnail pics
            const gallery = document.querySelector('.gallery');
            const champDataDiv = document.createElement('div');

            let fullImage = "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/" + id + ".png"
            const imgEl = document.createElement('img');
            imgEl.classList.add('thumbnail','thumbnail');
            imgEl.src = fullImage;
            champDataDiv.appendChild(imgEl);
            
            const pBlurbEl = document.createElement('p');
            pBlurbEl.textContent = blurb
            pBlurbEl.classList.add('white','blurb');
            champDataDiv.appendChild(pBlurbEl);
        
            const pIdEl = document.createElement('p');
            pIdEl.textContent = id
            pIdEl.classList.add('white','id');
            champDataDiv.appendChild(pIdEl);
            
            const pgroupEl = document.createElement('p');
            pgroupEl.textContent = group
            pgroupEl.classList.add('white','group');
            champDataDiv.appendChild(pgroupEl);
            
            const pSpriteEl = document.createElement('p');
            pSpriteEl.textContent = sprite
            pSpriteEl.classList.add('white','sprite');
            champDataDiv.appendChild(pSpriteEl);

            const pAttackEl = document.createElement('p');
            pAttackEl.textContent = attack
            pAttackEl.classList.add('white','attack');
            champDataDiv.appendChild(pAttackEl);
            
            const pDefenseEl = document.createElement('p');
            pDefenseEl.textContent = defense
            pDefenseEl.classList.add('white','defense');
            champDataDiv.appendChild(pDefenseEl);

            gallery.appendChild(champDataDiv);
            //console.log(pBlurbEl);
            
        
        }});
