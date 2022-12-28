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
            //console.log(allChampObjects);
            
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
            champDataDiv.setAttribute("id", id)
            let fullImage = "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/" + id + ".png"
            //console.log(this.id);
            const imgEl = document.createElement('img');
            imgEl.classList.add('thumbnail','thumbnail');
            imgEl.src = fullImage;
            imgEl.setAttribute('title', name)
            champDataDiv.appendChild(imgEl);
            

            const pBlurbEl = document.createElement('p');
            pBlurbEl.textContent = blurb
            pBlurbEl.classList.add('white','blurb','hide');
            champDataDiv.appendChild(pBlurbEl);
            
            const pIdEl = document.createElement('p');
            pIdEl.textContent = id
            pIdEl.classList.add('white','id','hide');
            champDataDiv.appendChild(pIdEl);
            
            const pgroupEl = document.createElement('p');
            pgroupEl.textContent = group
            pgroupEl.classList.add('white','group','hide');
            champDataDiv.appendChild(pgroupEl);
            
            const pSpriteEl = document.createElement('p');
            pSpriteEl.textContent = sprite
            pSpriteEl.classList.add('white','sprite','hide');
            champDataDiv.appendChild(pSpriteEl);

            const pAttackEl = document.createElement('p');
            pAttackEl.textContent = attack
            pAttackEl.classList.add('white','attack','hide');
            champDataDiv.appendChild(pAttackEl);
            
            const pDefenseEl = document.createElement('p');
            pDefenseEl.textContent = defense
            pDefenseEl.classList.add('white','defense','hide');
            champDataDiv.appendChild(pDefenseEl);

            const pDifficultyEl = document.createElement('p');
            pDifficultyEl.textContent = difficulty
            pDifficultyEl.classList.add('white','difficulty','hide');
            champDataDiv.appendChild(pDifficultyEl);

            const pMagicEl = document.createElement('p');
            pMagicEl.textContent = magic
            pMagicEl.classList.add('white','magic','hide');
            champDataDiv.appendChild(pMagicEl);

            const pKeyEl = document.createElement('p');
            pKeyEl.textContent = key
            pKeyEl.classList.add('white','key','hide');
            champDataDiv.appendChild(pKeyEl);

            const pNameEl = document.createElement('p');
            pNameEl.textContent = name
            pNameEl.classList.add('white','name','hide');
            champDataDiv.appendChild(pNameEl);

            const pPartypeEl = document.createElement('p');
            pPartypeEl.textContent = partype
            pPartypeEl.classList.add('white','partype','hide');
            champDataDiv.appendChild(pPartypeEl);
            
            const pArmorEl = document.createElement('p');
            pArmorEl.textContent = armor
            pArmorEl.classList.add('white','armor','hide');
            champDataDiv.appendChild(pArmorEl);

            const pAttackDamageEl = document.createElement('p');
            pAttackDamageEl.textContent = attackdamage
            pAttackDamageEl.classList.add('white','attackdamage','hide');
            champDataDiv.appendChild(pAttackDamageEl);

            const pAttackRangeEl = document.createElement('p');
            pAttackRangeEl.textContent = attackrange
            pAttackRangeEl.classList.add('white','attackrange','hide');
            champDataDiv.appendChild(pAttackRangeEl);

            const pAttackSpeedEl = document.createElement('p');
            pAttackSpeedEl.textContent = attackspeed
            pAttackSpeedEl.classList.add('white','attackspeed','hide');
            champDataDiv.appendChild(pAttackSpeedEl);

            const pCritEl = document.createElement('p');
            pCritEl.textContent = crit
            pCritEl.classList.add('white','crit','hide');
            champDataDiv.appendChild(pCritEl);

            const pHpEl = document.createElement('p');
            pHpEl.textContent = hp
            pHpEl.classList.add('white','hp','hide');
            champDataDiv.appendChild(pHpEl);

            const pHpRegenEl = document.createElement('p');
            pHpRegenEl.textContent = hpregen
            pHpRegenEl.classList.add('white','hpregen','hide');
            champDataDiv.appendChild(pHpRegenEl);

            const pMpEl = document.createElement('p');
            pMpEl.textContent = mp
            pMpEl.classList.add('white','mp','hide');
            champDataDiv.appendChild(pMpEl);

            const pMpRegenEl = document.createElement('p');
            pMpRegenEl.textContent = mpregen
            pMpRegenEl.classList.add('white','mpregen','hide');
            champDataDiv.appendChild(pMpRegenEl);

            const pMoveSpeedEl = document.createElement('p');
            pMoveSpeedEl.textContent = movespeed
            pMoveSpeedEl.classList.add('white','movespeed','hide');
            champDataDiv.appendChild(pMoveSpeedEl);

            const pSpellBlockEl = document.createElement('p');
            pSpellBlockEl.textContent = spellblock
            pSpellBlockEl.classList.add('white','spellblock','hide');
            champDataDiv.appendChild(pSpellBlockEl);

            const pRole1El = document.createElement('p');
            pRole1El.textContent = role1
            pRole1El.classList.add('white','role1','hide');
            champDataDiv.appendChild(pRole1El);

            const pRole2El = document.createElement('p');
            pRole2El.textContent = role2
            pRole2El.classList.add('white','role2','hide');
            champDataDiv.appendChild(pRole2El);

            const pTitleEl = document.createElement('p');
            pTitleEl.textContent = title
            pTitleEl.classList.add('white','title','hide');
            champDataDiv.appendChild(pTitleEl);
            // adds all champDataDivs to the gallery
            gallery.appendChild(champDataDiv);
            //console.log(champDataDiv);
            // event listener for click on thumbnails
            let allChampIds = champDataDiv.querySelectorAll('.id')
            for (let i = 0; i < allChampIds.length; i++) {
                allChampIds[i].addEventListener('click', function() {
                    let id = this.querySelector('.id').textContent;
                    console.log(id);
                })
            }console.log(allChampIds[i]);
        }
    });
