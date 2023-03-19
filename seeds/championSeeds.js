const Champion = require("../models/champion");

const championData = [
	{
		id: "Aatrox",
		name: "Aatrox",
		title: "the Darkin Blade",
		lore: "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.",
		skins: "0, 1, 2, 3, 7, 8, 9, 11, 20, 21",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg",
		passiveName: "Deathbringer Stance",
		passiveDescription: "Periodically, Aatrox's next basic attack deals bonus physical damage and heals him, based on the target's max health.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Aatrox_Passive.png",
		spells:
			[
				{
					spellId: "AatroxQ",
					spellName: "The Darkin Blade",
					spellDescription: "Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AatroxQ.png",
				}, {
					spellId: "AatroxW",
					spellName: "Infernal Chains",
					spellDescription: "Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AatroxW.png",
				}, {
					spellId: "AatroxE",
					spellName: "Umbral Dash",
					spellDescription: "Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AatroxE.png",
				}, {
					spellId: "AatroxR",
					spellName: "World Ender",
					spellDescription: "Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and Move Speed. If he gets a takedown, this effect is extended.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AatroxR.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Ahri",
		name: "Ahri",
		title: "the Nine-Tailed Fox",
		lore: "Innately connected to the magic of the spirit realm, Ahri is a fox-like vastaya who can manipulate her prey's emotions and consume their essence—receiving flashes of their memory and insight from each soul she consumes. Once a powerful yet wayward predator, Ahri is now traveling the world in search of remnants of her ancestors while also trying to replace her stolen memories with ones of her own making.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 14, 15, 16, 17, 27, 28, 42, 65, 66",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg",
		passiveName: "Essence Theft",
		passiveDescription: "After killing 9 minions or monsters, Ahri heals. After taking down an enemy champion, Ahri heals for a greater amount.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Ahri_SoulEater2.png",
		spells:
			[
				{
					spellId: "AhriQ",
					spellName: "Orb of Deception",
					spellDescription: "Ahri sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way back. ",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AhriQ.png",
				}, {
					spellId: "AhriW",
					spellName: "Fox-Fire",
					spellDescription: "Ahri gains a brief burst of Move Speed and releases three fox-fires, that lock onto and attack nearby enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AhriW.png",
				}, {
					spellId: "AhriE",
					spellName: "Charm",
					spellDescription: "Ahri blows a kiss that damages and charms an enemy it encounters, instantly stopping movement abilities and causing them to walk harmlessly towards her.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AhriE.png",
				}, {
					spellId: "AhriR",
					spellName: "Spirit Rush",
					spellDescription: "Ahri dashes forward and fires essence bolts, damaging nearby enemies. Spirit Rush can be cast up to three times before going on cooldown, and gains additional recasts when taking down enemy champions.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AhriR.png",
				},
			],
		roles: "Mage, Assassin",
		lane: ""
	},
	{
		id: "Akali",
		name: "Akali",
		title: "the Rogue Assassin",
		lore: "Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 15, 32, 50, 60, 61",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akali_0.jpg",
		passiveName: "Assassin's Mark",
		passiveDescription: "Dealing spell damage to a champion creates a ring of energy around them. Exiting that ring empowers Akali's next Attack with bonus range and damage.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Akali_P.png",
		spells:
			[
				{
					spellId: "AkaliQ",
					spellName: "Five Point Strike",
					spellDescription: "Akali throws out five kunai, dealing damage based on her bonus Attack Damage and Ability Power and slowing.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AkaliQ.png",
				}, {
					spellId: "AkaliW",
					spellName: "Twilight Shroud",
					spellDescription: "Akali drops a cover of smoke and briefly gains Move Speed. While inside the shroud, Akali becomes invisible and unable to be selected by enemy spells and attacks. Attacking or using abilities will briefly reveal her. ",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AkaliW.png",
				}, {
					spellId: "AkaliE",
					spellName: "Shuriken Flip",
					spellDescription: "Flip backward and fire a shuriken forward, dealing magic damage. The first enemy or smoke cloud hit is marked. Re-cast to dash to the marked target, dealing additional damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AkaliE.png",
				}, {
					spellId: "AkaliR",
					spellName: "Perfect Execution",
					spellDescription: "Akali leaps in a direction, damaging enemies she strikes. Re-cast: Akali dashes in a direction, executing all enemies she strikes.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AkaliR.png",
				},
			],
		roles: "Assassin",
		lane: ""
	},
	{
		id: "Akshan",
		name: "Akshan",
		title: "the Rogue Sentinel",
		lore: "Raising an eyebrow in the face of danger, Akshan fights evil with dashing charisma, righteous vengeance, and a conspicuous lack of shirts. He is highly skilled in the art of stealth combat, able to evade the eyes of his enemies and reappear when they least expect him. With a keen sense of justice and a legendary death-reversing weapon, he rights the wrongs of Runeterra's many scoundrels while living by his own moral code: “Don't be an ass.”",
		skins: "0, 1, 10",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akshan_0.jpg",
		passiveName: "Dirty Fighting",
		passiveDescription: "Every three hits from Akshan's Attacks and Abilities deals bonus damage and grants him a Shield if the target was a champion. When Akshan Attacks, he fires an additional Attack for reduced damage. If he cancels the additional Attack, he instead gains Move Speed.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/akshan_p.png",
		spells:
			[
				{
					spellId: "AkshanQ",
					spellName: "Avengerang",
					spellDescription: "Akshan throws a boomerang that deals damage going out and coming back, extending its range each time it hits an enemy.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AkshanQ.png",
				}, {
					spellId: "AkshanW",
					spellName: "Going Rogue",
					spellDescription: "Akshan passively marks enemy champions as Scoundrels when they kill his ally champions. If Akshan kills a Scoundrel, he resurrects the allies they killed, gains bonus gold, and clears all marks. When activated, Akshan enters camouflage and gains Move Speed and Mana Regen while moving towards Scoundrels. Akshan loses the camouflage quickly while he is not in brush or near terrain.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AkshanW.png",
				}, {
					spellId: "AkshanE",
					spellName: "Heroic Swing",
					spellDescription: "Akshan fires a grappling hook into terrain then swings around it, repeatedly firing at the nearest enemy while swinging. He can jump off early or gets knocked off when colliding with champions or terrain.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AkshanE.png",
				}, {
					spellId: "AkshanR",
					spellName: "Comeuppance",
					spellDescription: "Akshan locks onto an enemy champion and starts storing bullets. When released, he fires all stored bullets, dealing damage based on missing health to the first champion, minion, or structure hit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AkshanR.png",
				},
			],
		roles: "Marksman, Assassin",
		lane: ""
	},
	{
		id: "Alistar",
		name: "Alistar",
		title: "the Minotaur",
		lore: "Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly becoming a beast. Now, free of the chains of his former masters, he fights in the name of the downtrodden and the disadvantaged, his rage as much a weapon as his horns, hooves and fists.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 19, 20, 22, 29",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Alistar_0.jpg",
		passiveName: "Triumphant Roar",
		passiveDescription: "Alistar charges his roar by stunning or displacing enemy champions or when nearby enemies die. When fully charged he heals himself all nearby allied champions.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Alistar_E.png",
		spells:
			[
				{
					spellId: "Pulverize",
					spellName: "Pulverize",
					spellDescription: "Alistar smashes the ground, dealing damage to nearby enemies and tossing them into the air.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Pulverize.png",
				}, {
					spellId: "Headbutt",
					spellName: "Headbutt",
					spellDescription: "Alistar rams a target with his head, dealing damage and knocking the target back.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Headbutt.png",
				}, {
					spellId: "AlistarE",
					spellName: "Trample",
					spellDescription: "Alistar tramples nearby enemy units, ignoring unit collision and gaining stacks if he damages an enemy champion. At full stacks Alistar's next basic attack against an enemy champion deals additional magic damage and stuns them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AlistarE.png",
				}, {
					spellId: "FerociousHowl",
					spellName: "Unbreakable Will",
					spellDescription: "Alistar lets out a wild roar, removing all crowd control effects on himself, and reducing incoming physical and magical damage for the duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/FerociousHowl.png",
				},
			],
		roles: "Tank, Support",
		lane: ""
	},
	{
		id: "Amumu",
		name: "Amumu",
		title: "the Sad Mummy",
		lore: "Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe a living cadaver, small in stature and wrapped in creeping bandages. Amumu has inspired myths, songs, and folklore told and retold for generations—such that it is impossible to separate truth from fiction.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 17, 23, 24, 34, 44",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Amumu_0.jpg",
		passiveName: "Cursed Touch",
		passiveDescription: "Amumu's basic attacks Curse his enemies, causing them to take bonus true damage from incoming magic damage.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Amumu_Passive.png",
		spells:
			[
				{
					spellId: "BandageToss",
					spellName: "Bandage Toss",
					spellDescription: "Amumu tosses a sticky bandage at a target, stunning and damaging the target while he pulls himself to them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BandageToss.png",
				}, {
					spellId: "AuraofDespair",
					spellName: "Despair",
					spellDescription: "Overcome by anguish, nearby enemies lose a percentage of their maximum Health each second and have their Curses refreshed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AuraofDespair.png",
				}, {
					spellId: "Tantrum",
					spellName: "Tantrum",
					spellDescription: "Permanently reduces the physical damage Amumu would take. Amumu can unleash his rage, dealing damage to surrounding enemies. Each time Amumu is hit, the cooldown on Tantrum is reduced.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Tantrum.png",
				}, {
					spellId: "CurseoftheSadMummy",
					spellName: "Curse of the Sad Mummy",
					spellDescription: "Amumu entangles surrounding enemy units in bandages, applying his Curse, damaging and stunning them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CurseoftheSadMummy.png",
				},
			],
		roles: "Tank, Mage",
		lane: ""
	},
	{
		id: "Anivia",
		name: "Anivia",
		title: "the Cryophoenix",
		lore: "Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland. Anivia guides and protects the tribes of the harsh north, who revere her as a symbol of hope, and a portent of great change. She fights with every ounce of her being, knowing that through her sacrifice, her memory will endure, and she will be reborn into a new tomorrow.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 17, 27, 37",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Anivia_0.jpg",
		passiveName: "Rebirth",
		passiveDescription: "Upon taking fatal damage, Anivia reverts to an egg and is reborn with full health.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Anivia_P.png",
		spells:
			[
				{
					spellId: "FlashFrost",
					spellName: "Flash Frost",
					spellDescription: "Anivia brings her wings together and summons a sphere of ice that flies towards her opponents, chilling and damaging anyone in its path. When the sphere explodes it does moderate damage in a radius, stunning anyone in the area.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/FlashFrost.png",
				}, {
					spellId: "Crystallize",
					spellName: "Crystallize",
					spellDescription: "Anivia condenses the moisture in the air into an impassable wall of ice to block all movement. The wall only lasts a short duration before it melts.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Crystallize.png",
				}, {
					spellId: "Frostbite",
					spellName: "Frostbite",
					spellDescription: "With a flap of her wings, Anivia blasts a freezing gust of wind at her target, dealing damage. If the target was recently hit by Flash Frost or damaged by a fully formed Glacial Storm, the damage they take is doubled.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Frostbite.png",
				}, {
					spellId: "GlacialStorm",
					spellName: "Glacial Storm",
					spellDescription: "Anivia summons a driving rain of ice and hail to damage her enemies and slow their advance.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GlacialStorm.png",
				},
			],
		roles: "Mage, Support",
		lane: ""
	},
	{
		id: "Annie",
		name: "Annie",
		title: "the Dark Child",
		lore: "Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable, emotional outbursts, though she eventually learned to control these “playful tricks.” Her favorite includes the summoning of her beloved teddy bear, Tibbers, as a fiery protector. Lost in the perpetual innocence of childhood, Annie wanders the dark forests, always looking for someone to play with.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 22, 31",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Annie_0.jpg",
		passiveName: "Pyromania",
		passiveDescription: "After casting 4 spells, Annie's next offensive spell will stun the target. Annie begins the game and respawns with Pyromania available.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Annie_Passive.png",
		spells:
			[
				{
					spellId: "AnnieQ",
					spellName: "Disintegrate",
					spellDescription: "Annie hurls a Mana infused fireball, dealing damage and refunding the Mana cost if it destroys the target.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AnnieQ.png",
				}, {
					spellId: "AnnieW",
					spellName: "Incinerate",
					spellDescription: "Annie casts a blazing cone of fire, dealing damage to all enemies in the area.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AnnieW.png",
				}, {
					spellId: "AnnieE",
					spellName: "Molten Shield",
					spellDescription: "Grants Annie or an ally a shield, a burst of Move Speed, and damages enemies who strike her with attacks or spells.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AnnieE.png",
				}, {
					spellId: "AnnieR",
					spellName: "Summon: Tibbers",
					spellDescription: "Annie wills her bear Tibbers to life, dealing damage to units in the area. Tibbers can attack and also burns enemies that stand near him.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AnnieR.png",
				},
			],
		roles: "Mage",
		lane: ""
	},
	{
		id: "Aphelios",
		name: "Aphelios",
		title: "the Weapon of the Faithful",
		lore: "Emerging from moonlight's shadow with weapons drawn, Aphelios kills the enemies of his faith in brooding silence—speaking only through the certainty of his aim, and the firing of each gun. Though fueled by a poison that renders him mute, he is guided by his sister Alune. From her distant temple sanctuary, she pushes an arsenal of moonstone weapons into his hands. For as long as the moon shines overhead, Aphelios will never be alone.",
		skins: "0, 1, 9, 18, 20",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aphelios_0.jpg",
		passiveName: "The Hitman and the Seer",
		passiveDescription: "Aphelios wields 5 Lunari Weapons made by his sister Alune. He has access to two at a time: one main-hand and one off-hand. Each weapon has a unique Basic Attack and Ability. Attacks and abilities consume a weapon's ammo. When out of ammo, Aphelios discards the weapon and Alune summons the next of the 5. ",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/ApheliosP.png",
		spells:
			[
				{
					spellId: "ApheliosQ_ClientTooltipWrapper",
					spellName: "Weapon Abilites",
					spellDescription: "Aphelios has 5 different activated abilities, based on his main-hand weapon: Calibrum (Rifle): Long range shot that marks its target for a long-range follow-up attack. Severum (Scythe Pistol): Run fast while attacking nearby enemies with both weapons. Gravitum (Cannon): Root all enemies slowed by this weapon. Infernum (Flamethrower): Blast enemies in a cone and attack them with your off-hand weapon. Crescendum (Chakram): Deploy a sentry that shoots your off-hand weapon.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ApheliosQ_ClientTooltipWrapper.png",
				}, {
					spellId: "ApheliosW",
					spellName: "Phase",
					spellDescription: "Aphelios swaps his main-hand gun with his off-hand gun, replacing his basic attack and activated ability.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ApheliosW.png",
				}, {
					spellId: "ApheliosE_ClientTooltipWrapper",
					spellName: "Weapon Queue System",
					spellDescription: "Aphelios has no third ability. This slot shows the next weapon Alune will give him. Weapon order begins fixed but may change over game time -- when a weapon is out of ammo it goes to the end of the order.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ApheliosE_ClientTooltipWrapper.png",
				}, {
					spellId: "ApheliosR",
					spellName: "Moonlight Vigil",
					spellDescription: "Fire a concentrated blast of moonlight that explodes on enemy champions. Applies the unique effect of Aphelios' main-hand gun.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ApheliosR.png",
				},
			],
		roles: "Marksman",
		lane: ""
	},
	{
		id: "Ashe",
		name: "Ashe",
		title: "the Frost Archer",
		lore: "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice. With her people's belief that she is the mythological hero Avarosa reincarnated, Ashe hopes to unify the Freljord once more by retaking their ancient, tribal lands.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 17, 23, 32, 43, 52",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_0.jpg",
		passiveName: "Frost Shot",
		passiveDescription: "Ashe's attacks slow their target, causing her to deal increased damage to these targets. Ashe's critical strikes deal no bonus damage but apply an empowered slow to the target.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Ashe_P.png",
		spells:
			[
				{
					spellId: "AsheQ",
					spellName: "Ranger's Focus",
					spellDescription: "Ashe builds up Focus by attacking. At maximum Focus, Ashe can cast Ranger's Focus to consume all stacks of Focus, temporarily increasing her Attack Speed and transforming her basic attack into a powerful flurry attack for the duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AsheQ.png",
				}, {
					spellId: "Volley",
					spellName: "Volley",
					spellDescription: "Ashe fires arrows in a cone for increased damage. Also applies Frost Shot.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Volley.png",
				}, {
					spellId: "AsheSpiritOfTheHawk",
					spellName: "Hawkshot",
					spellDescription: "Ashe sends her Hawk Spirit on a scouting mission anywhere on the map.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AsheSpiritOfTheHawk.png",
				}, {
					spellId: "EnchantedCrystalArrow",
					spellName: "Enchanted Crystal Arrow",
					spellDescription: "Ashe fires a missile of ice in a straight line. If the arrow collides with an enemy Champion, it deals damage and stuns the Champion, stunning for longer the farther arrow has traveled. In addition, surrounding enemy units take damage and are slowed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/EnchantedCrystalArrow.png",
				},
			],
		roles: "Marksman, Support",
		lane: ""
	},
	{
		id: "AurelionSol",
		name: "Aurelion Sol",
		title: "The Star Forger",
		lore: "Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his star-forging ways, Aurelion Sol will drag the very stars from the sky, if he must, in order to regain his freedom.",
		skins: "0, 1, 2, 11",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/AurelionSol_0.jpg",
		passiveName: "",
		passiveDescription: "",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/AurelionSolP.ASolGU.png",
		spells:
			[
				{
					spellId: "AurelionSolQ",
					spellName: "Breath of Light",
					spellDescription: "",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AurelionSolQ.png",
				}, {
					spellId: "AurelionSolW",
					spellName: "Astral Flight",
					spellDescription: "",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AurelionSolW.png",
				}, {
					spellId: "AurelionSolE",
					spellName: "Singularity",
					spellDescription: "",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AurelionSolE.png",
				}, {
					spellId: "AurelionSolR",
					spellName: "Falling Star / The Skies Descend",
					spellDescription: "",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AurelionSolR.png",
				},
			],
		roles: "Mage",
		lane: ""
	},
	{
		id: "Azir",
		name: "Azir",
		title: "the Emperor of the Sands",
		lore: "Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended being of immense power. With his buried city risen from the sand, Azir seeks to restore Shurima to its former glory.",
		skins: "0, 1, 2, 3, 4, 5, 14",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Azir_0.jpg",
		passiveName: "Shurima's Legacy",
		passiveDescription: "Azir can summon the Disc of the Sun from the ruins of allied or enemy turrets.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Azir_Passive.png",
		spells:
			[
				{
					spellId: "AzirQWrapper",
					spellName: "Conquering Sands",
					spellDescription: "Azir sends all Sand Soldiers towards a location. Sand Soldiers deal magic damage to enemies they pass through and apply a slow for 1 second.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AzirQWrapper.png",
				}, {
					spellId: "AzirW",
					spellName: "Arise!",
					spellDescription: "Azir summons a Sand Soldier to attack nearby targets for him, replacing his basic attack against targets within the soldier's range. Their attacks deal magic damage to enemies in a line. Arise! also passively grants attack speed to Azir and his Sand Soldiers.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AzirW.png",
				}, {
					spellId: "AzirEWrapper",
					spellName: "Shifting Sands",
					spellDescription: "Azir shields himself briefly and dashes to one of his Sand Soldiers, damaging enemies. If he hits an enemy champion, he instantly readies a new Sand Soldier for deployment and halts his dash.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AzirEWrapper.png",
				}, {
					spellId: "AzirR",
					spellName: "Emperor's Divide",
					spellDescription: "Azir summons a wall of soldiers which charge forward, knocking back and damaging enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AzirR.png",
				},
			],
		roles: "Mage, Marksman",
		lane: ""
	},
	{
		id: "Bard",
		name: "Bard",
		title: "the Wandering Caretaker",
		lore: "A traveler from beyond the stars, Bard is an agent of serendipity who fights to maintain a balance where life can endure the indifference of chaos. Many Runeterrans sing songs that ponder his extraordinary nature, yet they all agree that the cosmic vagabond is drawn to artifacts of great magical power. Surrounded by a jubilant choir of helpful spirit meeps, it is impossible to mistake his actions as malevolent, as Bard always serves the greater good... in his own odd way.",
		skins: "0, 1, 5, 6, 8, 17",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Bard_0.jpg",
		passiveName: "Traveler's Call",
		passiveDescription: "Meeps: Bard attracts lesser spirits that assist with his basic attacks to deal extra magic damage. When Bard has collected enough Chimes, his meeps will also deal damage in an area and slow enemies hit. Chimes: Ancient chimes randomly appear for Bard to collect. These grant experience, restore mana, and provide out of combat Move Speed.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Bard_Passive.png",
		spells:
			[
				{
					spellId: "BardQ",
					spellName: "Cosmic Binding",
					spellDescription: "Bard fires a missile which will slow the first enemy struck, and continue onward. If it strikes a wall, it will stun the initial target; if it strikes another enemy, it will stun them both.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BardQ.png",
				}, {
					spellId: "BardW",
					spellName: "Caretaker's Shrine",
					spellDescription: "Reveals a healing shrine which powers up over a short time, disappearing after healing and speeding up the first ally that touches it.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BardW.png",
				}, {
					spellId: "BardE",
					spellName: "Magical Journey",
					spellDescription: "Bard opens a portal in nearby terrain. Allies and enemies alike can take a one-way trip through that terrain by moving into the portal.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BardE.png",
				}, {
					spellId: "BardR",
					spellName: "Tempered Fate",
					spellDescription: "Bard sends spirit energy arcing to a location, putting all champions, minions, monsters, and turrets hit into stasis for a brief time.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BardR.png",
				},
			],
		roles: "Support, Mage",
		lane: ""
	},
	{
		id: "Belveth",
		name: "Bel'Veth",
		title: "the Empress of the Void",
		lore: "A nightmarish empress created from the raw material of an entire devoured city, Bel'Veth is the end of Runeterra itself... and the beginning of a monstrous reality of her own design. Driven by epochs of repurposed history, knowledge, and memories from the world above, she voraciously feeds an ever-expanding need for new experiences and emotions, consuming all that crosses her path. Yet her wants could never be sated by only one world as she turns her hungry eyes toward the Void's old masters...",
		skins: "0, 1",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Belveth_0.jpg",
		passiveName: "Death in Lavender ",
		passiveDescription: "Bel'Veth gains permanent attack speed stacks after taking down large minions and monsters and champions. She also gains temporary bonus attack speed after using an ability.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Belveth_Passive.Belveth.png",
		spells:
			[
				{
					spellId: "BelvethQ",
					spellName: "Void Surge",
					spellDescription: "Bel'Veth dashes in a chosen direction and damages all enemies she passes through.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BelvethQ.png",
				}, {
					spellId: "BelvethW",
					spellName: "Above and Below",
					spellDescription: "Bel'Veth slams her tail to the ground, damaging, knocking up, and slowing her enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BelvethW.png",
				}, {
					spellId: "BelvethE",
					spellName: "Royal Maelstrom",
					spellDescription: "Bel'Veth roots herself in place, channeling a storm of slashes around her that targets the lowest-health enemy and grants her lifesteal and damage reduction.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BelvethE.png",
				}, {
					spellId: "BelvethR",
					spellName: "Endless Banquet",
					spellDescription: "Bel'Veth consumes Void coral remnants, transforming into her true form and increasing her max health, attack range, attack speed, and out-of-combat move speed. Consuming the Void coral remnants of a Void epic monster will grant her a longer ultimate duration, as well as the power to summon Void remora.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BelvethR.png",
				},
			],
		roles: "Fighter",
		lane: ""
	},
	{
		id: "Blitzcrank",
		name: "Blitzcrank",
		title: "the Great Steam Golem",
		lore: "Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found this primary purpose too restricting, and modified his own form to better serve the fragile people of the Sump. Blitzcrank selflessly uses his strength and durability to protect others, extending a helpful metal fist or burst of energy to subdue any troublemakers.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 11, 20, 21, 22, 29, 36, 47",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Blitzcrank_0.jpg",
		passiveName: "Mana Barrier",
		passiveDescription: "Blitzcrank gains a shield based on their mana when dropping to low health.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Blitzcrank_ManaBarrier.png",
		spells:
			[
				{
					spellId: "RocketGrab",
					spellName: "Rocket Grab",
					spellDescription: "Blitzcrank fires their right hand to grab an opponent on its path, dealing damage and dragging it back to them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RocketGrab.png",
				}, {
					spellId: "Overdrive",
					spellName: "Overdrive",
					spellDescription: "Blitzcrank super charges themself to get dramatically increased Move and Attack Speed. They are temporarily slowed after the effect ends.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Overdrive.png",
				}, {
					spellId: "PowerFist",
					spellName: "Power Fist",
					spellDescription: "Blitzcrank charges up their fist to make the next attack deal double damage and pop their target up in the air.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PowerFist.png",
				}, {
					spellId: "StaticField",
					spellName: "Static Field",
					spellDescription: "Enemies attacked by Blitzcrank are marked and take lightning damage after 1 second. Additionally, Blitzcrank can activate this ability to remove nearby enemies' shields, damage them, and silence them briefly.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/StaticField.png",
				},
			],
		roles: "Tank, Fighter",
		lane: ""
	},
	{
		id: "Brand",
		name: "Brand",
		title: "the Burning Vengeance",
		lore: "Once a tribesman of the icy Freljord named Kegan Rodhe, the creature known as Brand is a lesson in the temptation of greater power. Seeking one of the legendary World Runes, Kegan betrayed his companions and seized it for himself—and, in an instant, the man was no more. His soul burned away, his body a vessel of living flame, Brand now roams Valoran in search of other Runes, swearing revenge for wrongs he could never possibly have suffered in a dozen mortal lifetimes.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 21, 22",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Brand_0.jpg",
		passiveName: "Blaze",
		passiveDescription: "Brand's spells light his targets ablaze, dealing damage over 4 seconds, stacking up to 3 times. If Brand kills an enemy while it is ablaze he regains mana. When Blaze reaches max stacks on a Champion or large monster, it becomes unstable. It detonates in 2 seconds, applying spell effects and dealing massive damage in an area around the victim.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/BrandP.png",
		spells:
			[
				{
					spellId: "BrandQ",
					spellName: "Sear",
					spellDescription: "Brand launches a ball of fire forward that deals magic damage. If the target is ablaze, Sear will stun the target for 1.5 seconds.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BrandQ.png",
				}, {
					spellId: "BrandW",
					spellName: "Pillar of Flame",
					spellDescription: "After a short delay, Brand creates a Pillar of Flame at a target area, dealing magic damage to enemy units within the area. Units that are ablaze take an additional 25% damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BrandW.png",
				}, {
					spellId: "BrandE",
					spellName: "Conflagration",
					spellDescription: "Brand conjures a powerful blast at his target that spreads to nearby enemies, dealing magic damage. If the target is ablaze, Conflagration's spread is doubled.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BrandE.png",
				}, {
					spellId: "BrandR",
					spellName: "Pyroclasm",
					spellDescription: "Brand unleashes a devastating torrent of fire that bounces up to 5 times off of Brand and nearby enemies, dealing magic damage to enemies each time bounce. Bounces prioritize stacking Blaze to max on Champions. If a target is ablaze, Pyroclasm will briefly slow them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BrandR.png",
				},
			],
		roles: "Mage",
		lane: ""
	},
	{
		id: "Braum",
		name: "Braum",
		title: "the Heart of the Freljord",
		lore: "Blessed with massive biceps and an even bigger heart, Braum is a beloved hero of the Freljord. Every mead hall north of Frostheld toasts his legendary strength, said to have felled a forest of oaks in a single night, and punched an entire mountain into rubble. Bearing an enchanted vault door as his shield, Braum roams the frozen north sporting a mustachioed smile as big as his muscles—a true friend to all those in need.",
		skins: "0, 1, 2, 3, 10, 11, 24, 33",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Braum_0.jpg",
		passiveName: "Concussive Blows",
		passiveDescription: "Braum's basic attacks apply Concussive Blows. Once the first stack is applied, ally basic attacks also stack Concussive Blows. Upon reaching 4 stacks, the target is stunned and takes magic damage. For the next few seconds they cannot receive new stacks, but take bonus magic damage from Braum's attacks.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Braum_Passive.png",
		spells:
			[
				{
					spellId: "BraumQ",
					spellName: "Winter's Bite",
					spellDescription: "Braum propels freezing ice from his shield, slowing and dealing magic damage. Applies a stack of Concussive Blows.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BraumQ.png",
				}, {
					spellId: "BraumW",
					spellName: "Stand Behind Me",
					spellDescription: "Braum leaps to a target allied champion or minion. On arrival, Braum and the ally gain Armor and Magic Resist for a few seconds.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BraumW.png",
				}, {
					spellId: "BraumE",
					spellName: "Unbreakable",
					spellDescription: "Braum raises his shield in a direction for several seconds, intercepting all projectiles causing them to hit him and be destroyed. He negates the damage of the first attack completely and reduces the damage of all subsequent attacks from this direction.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BraumE.png",
				}, {
					spellId: "BraumRWrapper",
					spellName: "Glacial Fissure",
					spellDescription: "Braum slams the ground, knocking up enemies nearby and in a line in front of him. A fissure is left along the line that slows enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BraumRWrapper.png",
				},
			],
		roles: "Support, Tank",
		lane: ""
	},
	{
		id: "Caitlyn",
		name: "Caitlyn",
		title: "the Sheriff of Piltover",
		lore: "Renowned as its finest peacekeeper, Caitlyn is also Piltover's best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner's more impetuous nature. Even though she carries a one-of-a-kind hextech rifle, Caitlyn's most powerful weapon is her superior intellect, allowing her to lay elaborate traps for any lawbreakers foolish enough to operate in the City of Progress.",
		skins: "0, 1, 2, 3, 4, 5, 6, 10, 11, 13, 19, 20, 22, 28, 29, 30, 39",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Caitlyn_0.jpg",
		passiveName: "Headshot",
		passiveDescription: "Every few basic attacks, or against a target she has trapped or netted, Caitlyn will fire a headshot dealing bonus damage that scales with her critical strike chance. On trapped or netted targets, Caitlyn's Headshot attack range is doubled.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Caitlyn_Headshot.png",
		spells:
			[
				{
					spellId: "CaitlynQ",
					spellName: "Piltover Peacemaker",
					spellDescription: "Caitlyn revs up her rifle for 1 second to unleash a penetrating shot that deals physical damage (deals less damage to subsequent targets).",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CaitlynQ.png",
				}, {
					spellId: "CaitlynW",
					spellName: "Yordle Snap Trap",
					spellDescription: "Caitlyn sets a trap that, when sprung, reveals and immobilizes the enemy champion for 1.5 seconds, granting Caitlyn an empowered Headshot.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CaitlynW.png",
				}, {
					spellId: "CaitlynE",
					spellName: "90 Caliber Net",
					spellDescription: "Caitlyn fires a heavy net to slow her target. The recoil knocks Caitlyn back.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CaitlynE.png",
				}, {
					spellId: "CaitlynR",
					spellName: "Ace in the Hole",
					spellDescription: "Caitlyn takes time to line up the perfect shot, dealing massive damage to a single target at a huge range. Enemy champions can intercept the bullet for their ally.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CaitlynR.png",
				},
			],
		roles: "Marksman",
		lane: ""
	},
	{
		id: "Camille",
		name: "Camille",
		title: "the Steel Shadow",
		lore: "Weaponized to operate outside the boundaries of the law, Camille is the Principal Intelligencer of Clan Ferros—an elegant and elite agent who ensures the Piltover machine and its Zaunite underbelly runs smoothly. Adaptable and precise, she views sloppy technique as an embarrassment that must be put to order. With a mind as sharp as the blades she bears, Camille's pursuit of superiority through hextech body augmentation has left many to wonder if she is now more machine than woman.",
		skins: "0, 1, 2, 10, 11, 21",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Camille_0.jpg",
		passiveName: "Adaptive Defenses",
		passiveDescription: "Basic attacks on champions grant a shield equal to a percentage of Camille's maximum health against their damage type (Physical or Magic) for a brief duration.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Camille_Passive.png",
		spells:
			[
				{
					spellId: "CamilleQ",
					spellName: "Precision Protocol",
					spellDescription: "Camille's next attack deals bonus damage and grants bonus Move Speed. This spell can be recast for a short period of time, doing significantly increased bonus damage if Camille delays a period of time between the two attacks.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CamilleQ.png",
				}, {
					spellId: "CamilleW",
					spellName: "Tactical Sweep",
					spellDescription: "Camille blasts in a cone after a delay, dealing damage. Enemies in the outer half are slowed and take extra damage, while also healing Camille.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CamilleW.png",
				}, {
					spellId: "CamilleE",
					spellName: "Hookshot",
					spellDescription: "Camille pulls herself to a wall, leaping off and knocking up enemy champions upon landing.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CamilleE.png",
				}, {
					spellId: "CamilleR",
					spellName: "The Hextech Ultimatum",
					spellDescription: "Camille dashes to target champion, anchoring them to the area. She also deals bonus magic damage to the target with her basic attacks.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CamilleR.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Cassiopeia",
		name: "Cassiopeia",
		title: "the Serpent's Embrace",
		lore: "Cassiopeia is a deadly creature bent on manipulating others to her sinister will. Youngest and most beautiful daughter of the noble Du Couteau family of Noxus, she ventured deep into the crypts beneath Shurima in search of ancient power. There, she was bitten by a gruesome tomb guardian, whose venom transformed her into a viper-like predator. Cunning and agile, Cassiopeia now slithers under the veil of night, petrifying her enemies with her baleful gaze.",
		skins: "0, 1, 2, 3, 4, 8, 9, 18, 28",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Cassiopeia_0.jpg",
		passiveName: "Serpentine Grace",
		passiveDescription: "Cassiopeia gains Move Speed per level, but she cannot purchase Boots items.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Cassiopeia_Passive.png",
		spells:
			[
				{
					spellId: "CassiopeiaQ",
					spellName: "Noxious Blast",
					spellDescription: "Cassiopeia blasts an area with Poison after a brief delay, granting her increased Move Speed if she hits an enemy champion.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CassiopeiaQ.png",
				}, {
					spellId: "CassiopeiaW",
					spellName: "Miasma",
					spellDescription: "Cassiopeia releases several clouds of poison, slowing, grounding, and lightly damaging enemies that pass through them. Grounded enemies cannot use Movement abilities.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CassiopeiaW.png",
				}, {
					spellId: "CassiopeiaE",
					spellName: "Twin Fang",
					spellDescription: "Cassiopeia lets loose an attack that deals increased damage to Poisoned targets and heals her for a percentage of the damage dealt. If the target dies from this attack, Cassiopeia regains Mana.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CassiopeiaE.png",
				}, {
					spellId: "CassiopeiaR",
					spellName: "Petrifying Gaze",
					spellDescription: "Cassiopeia releases a swirl of magical energy from her eyes, stunning any enemies in front of her that are facing her and slowing any others with their back turned.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CassiopeiaR.png",
				},
			],
		roles: "Mage",
		lane: ""
	},
	{
		id: "Chogath",
		name: "Cho'Gath",
		title: "the Terror of the Void",
		lore: "From the moment Cho'Gath first emerged into the harsh light of Runeterra's sun, the beast was driven by the most pure and insatiable hunger. A perfect expression of the Void's desire to consume all life, Cho'Gath's complex biology quickly converts matter into new bodily growth—increasing its muscle mass and density, or hardening its outer carapace like organic diamond. When growing larger does not suit the Void-spawn's needs, it vomits out the excess material as razor-sharp spines, leaving prey skewered and ready to feast upon later.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 14",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Chogath_0.jpg",
		passiveName: "Carnivore",
		passiveDescription: "Whenever Cho'Gath kills a unit, he recovers Health and Mana. The values restored increase with Cho'Gath's level.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/GreenTerror_TailSpike.png",
		spells:
			[
				{
					spellId: "Rupture",
					spellName: "Rupture",
					spellDescription: "Ruptures the ground at target location, popping enemy units into the air, dealing damage and slowing them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Rupture.png",
				}, {
					spellId: "FeralScream",
					spellName: "Feral Scream",
					spellDescription: "Cho'Gath unleashes a terrible scream at enemies in a cone, dealing magic damage and Silencing enemies for a few seconds.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/FeralScream.png",
				}, {
					spellId: "VorpalSpikes",
					spellName: "Vorpal Spikes",
					spellDescription: "Cho'Gath's attacks release deadly spikes, dealing damage and slowing all enemy units in front of him.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VorpalSpikes.png",
				}, {
					spellId: "Feast",
					spellName: "Feast",
					spellDescription: "Devours an enemy unit, dealing a high amount of true damage. If the target is killed, Cho'Gath grows, gaining maximum Health.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Feast.png",
				},
			],
		roles: "Tank, Mage",
		lane: ""
	},
	{
		id: "Corki",
		name: "Corki",
		title: "the Daring Bombardier",
		lore: "The yordle pilot Corki loves two things above all others: flying, and his glamorous mustache... though not necessarily in that order. After leaving Bandle City, he settled in Piltover and fell in love with the wondrous machines he found there. He dedicated himself to the development of flying contraptions, leading an aerial defense force of seasoned veterans known as the Screaming Yipsnakes. Calm under fire, Corki patrols the skies around his adopted home, and has never encountered a problem that a good missile barrage couldn't solve.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 18, 26",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Corki_0.jpg",
		passiveName: "Hextech Munitions",
		passiveDescription: "A percentage of Corki's basic attack damage is converted into magic damage. Corki can occasionally retrieve The Package inside his base, granting him Move Speed and an empowered cast of Valkyrie.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Corki_RapidReload.png",
		spells:
			[
				{
					spellId: "PhosphorusBomb",
					spellName: "Phosphorus Bomb",
					spellDescription: "Corki fires a flash bomb at a target location, dealing magic damage to enemies in the area. This attack additionally reveals units in the area for a duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PhosphorusBomb.png",
				}, {
					spellId: "CarpetBomb",
					spellName: "Valkyrie",
					spellDescription: "Corki flies a short distance, dropping bombs that create a trail of fire that damages opponents who remain in it.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CarpetBomb.png",
				}, {
					spellId: "GGun",
					spellName: "Gatling Gun",
					spellDescription: "Corki's gatling gun rapidly fires in a cone in front of him, dealing damage and reducing enemy Armor and Magic Resist.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GGun.png",
				}, {
					spellId: "MissileBarrage",
					spellName: "Missile Barrage",
					spellDescription: "Corki fires a missile toward his target location that explodes on impact, dealing damage to enemies in an area. Corki stores missiles over time, up to a maximum. Every 3rd missile fired will be a Big One, dealing extra damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MissileBarrage.png",
				},
			],
		roles: "Marksman",
		lane: ""
	},
	{
		id: "Darius",
		name: "Darius",
		title: "the Hand of Noxus",
		lore: "There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened commander. Rising from humble origins to become the Hand of Noxus, he cleaves through the empire's enemies—many of them Noxians themselves. Knowing that he never doubts his cause is just, and never hesitates once his axe is raised, those who stand against the leader of the Trifarian Legion can expect no mercy.",
		skins: "0, 1, 2, 3, 4, 8, 14, 15, 16, 24, 33, 43",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Darius_0.jpg",
		passiveName: "Hemorrhage",
		passiveDescription: "Darius' attacks and damaging abilities cause enemies to bleed for physical damage over 5 seconds, stacking up to 5 times. Darius enrages and gains massive Attack Damage when his target reaches max stacks.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Darius_Icon_Hemorrhage.png",
		spells:
			[
				{
					spellId: "DariusCleave",
					spellName: "Decimate",
					spellDescription: "Darius winds up and swings his axe in a wide circle. Enemies struck by the blade take more damage than those struck by the handle. Darius heals based on enemy champions and large monsters hit by the blade.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/DariusCleave.png",
				}, {
					spellId: "DariusNoxianTacticsONH",
					spellName: "Crippling Strike",
					spellDescription: "Darius's next attack strikes an enemy's crucial artery. As they bleed out, their Move Speed is slowed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/DariusNoxianTacticsONH.png",
				}, {
					spellId: "DariusAxeGrabCone",
					spellName: "Apprehend",
					spellDescription: "Darius hones his axe, passively causing his physical damage to ignore a percentage of his target's Armor. When activated, Darius sweeps up his enemies with his axe's hook and pulls them to him.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/DariusAxeGrabCone.png",
				}, {
					spellId: "DariusExecute",
					spellName: "Noxian Guillotine",
					spellDescription: "Darius leaps to an enemy champion and strikes a lethal blow, dealing true damage. This damage is increased for each stack of Hemorrhage on the target. If Noxian Guillotine is a killing blow, its cooldown is refreshed for a brief duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/DariusExecute.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Diana",
		name: "Diana",
		title: "Scorn of the Moon",
		lore: "Bearing her crescent moonblade, Diana fights as a warrior of the Lunari—a faith all but quashed in the lands around Mount Targon. Clad in shimmering armor the color of winter snow at night, she is a living embodiment of the silver moon's power. Imbued with the essence of an Aspect from beyond Targon's towering summit, Diana is no longer wholly human, and struggles to understand her power and purpose in this world.",
		skins: "0, 1, 2, 3, 11, 12, 18, 25, 26, 27, 37, 47",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Diana_0.jpg",
		passiveName: "Moonsilver Blade",
		passiveDescription: "Every third strike cleaves nearby enemies for an additional magic damage. After casting a spell, Diana gains Attack Speed for her next 3 attacks.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Diana_Passive_LunarBlade.png",
		spells:
			[
				{
					spellId: "DianaQ",
					spellName: "Crescent Strike",
					spellDescription: "Unleashes a bolt of lunar energy in an arc dealing magic damage. Afflicts enemies struck with Moonlight, revealing them if they are not stealthed for 3 seconds.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/DianaQ.png",
				}, {
					spellId: "DianaOrbs",
					spellName: "Pale Cascade",
					spellDescription: "Diana creates three orbiting spheres that detonate on contact with enemies to deal damage in an area. She also gains a temporary shield that absorbs damage. If her third sphere detonates, the shield gains additional strength.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/DianaOrbs.png",
				}, {
					spellId: "DianaTeleport",
					spellName: "Lunar Rush",
					spellDescription: "Becomes the living embodiment of the vengeful moon, dashing to an enemy and dealing magic damage. Lunar Rush has no cooldown when used to dash to an enemy afflicted with Moonlight. All other enemies will have the Moonlight debuff removed regardless of whether they were the target of Lunar Rush.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/DianaTeleport.png",
				}, {
					spellId: "DianaR",
					spellName: "Moonfall",
					spellDescription: "Diana reveals and draws in all nearby enemies and slows them. If Diana pulls in one or more enemy champions, the moonlight crashes down onto her after a short delay, dealing magic damage in an area around her, increased for each target beyond the first pulled.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/DianaR.png",
				},
			],
		roles: "Fighter, Mage",
		lane: ""
	},
	{
		id: "Draven",
		name: "Draven",
		title: "the Glorious Executioner",
		lore: "In Noxus, warriors known as Reckoners face one another in arenas where blood is spilled and strength tested—but none has ever been as celebrated as Draven. A former soldier, he found that the crowds uniquely appreciated his flair for the dramatic, and his unparalleled skill with his spinning axes. Addicted to the spectacle of his own brash perfection, Draven has sworn to defeat whomever he must to ensure that his name is chanted throughout the empire forever more.",
		skins: "0, 1, 2, 3, 4, 5, 6, 12, 13, 20, 29, 39",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Draven_0.jpg",
		passiveName: "League of Draven",
		passiveDescription: "Draven gains his fans' Adoration when he catches a Spinning Axe or kills a minion, monster, or tower. Killing enemy champions grants Draven bonus gold based on how much Adoration he has.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Draven_passive.png",
		spells:
			[
				{
					spellId: "DravenSpinning",
					spellName: "Spinning Axe",
					spellDescription: "Draven's next attack will deal bonus physical damage. This axe will ricochet off the target high up into the air. If Draven catches it, he automatically readies another Spinning Axe. Draven can have two Spinning Axes at once.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/DravenSpinning.png",
				}, {
					spellId: "DravenFury",
					spellName: "Blood Rush",
					spellDescription: "Draven gains increased Move Speed and Attack Speed. The Move Speed bonus decreases rapidly over its duration. Catching a Spinning Axe will refresh the cooldown of Blood Rush.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/DravenFury.png",
				}, {
					spellId: "DravenDoubleShot",
					spellName: "Stand Aside",
					spellDescription: "Draven throws his axes, dealing physical damage to targets hit and knocking them aside. Targets hit are slowed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/DravenDoubleShot.png",
				}, {
					spellId: "DravenRCast",
					spellName: "Whirling Death",
					spellDescription: "Draven hurls two massive axes to deal physical damage to each unit struck. Whirling Death slowly reverses direction and returns to Draven after striking an enemy champion. Draven may also activate this ability while the axes are in flight to cause it to return early. Deals less damage for each unit hit and resets when the axes reverse direction. Executes enemies who have less health than Draven's number of Adoration stacks.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/DravenRCast.png",
				},
			],
		roles: "Marksman",
		lane: ""
	},
	{
		id: "DrMundo",
		name: "Dr. Mundo",
		title: "the Madman of Zaun",
		lore: "Utterly mad, tragically homicidal, and horrifyingly purple, Dr. Mundo is what keeps many of Zaun's citizens indoors on particularly dark nights. Now a self-proclaimed physician, he was once a patient of Zaun's most infamous asylum. After 'curing' the entire staff, Dr. Mundo established his practice in the empty wards that once treated him and began mimicking the highly unethical procedures he had so often experienced himself. With a full cabinet of medicines and zero medical knowledge, he now makes himself more monstrous with each injection and terrifies the hapless 'patients' who wander near his office.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/DrMundo_0.jpg",
		passiveName: "Goes Where He Pleases",
		passiveDescription: "Dr. Mundo resists the first Immobilizing effect that hits him, instead losing Health and dropping a chemical cannister nearby. Dr. Mundo can pick it up by walking over it, restoring Health and reducing this Ability's Cooldown. Dr. Mundo also has significantly increased Health regeneration.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/DrMundo_P.png",
		spells:
			[
				{
					spellId: "DrMundoQ",
					spellName: "Infected Bonesaw",
					spellDescription: "Dr. Mundo throws an infected bonesaw, dealing damage to the first enemy hit based on their current health and slowing them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/DrMundoQ.png",
				}, {
					spellId: "DrMundoW",
					spellName: "Heart Zapper",
					spellDescription: "Dr. Mundo electrocutes himself, dealing persistent damage to nearby enemies and storing a portion of damage he takes. At the end of the duration or on Recast, Dr. Mundo deals a burst of damage to nearby enemies. If the burst hit an enemy, he heals a percentage of the stored damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/DrMundoW.png",
				}, {
					spellId: "DrMundoE",
					spellName: "Blunt Force Trauma",
					spellDescription: "Passive - Dr. Mundo gains bonus Attack Damage, increasing based on his missing Health. Active - Dr. Mundo slams his “medical” bag into an enemy, dealing additional damage based on his missing Health. If the enemy dies they are swatted away, dealing damage to enemies they pass through.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/DrMundoE.png",
				}, {
					spellId: "DrMundoR",
					spellName: "Maximum Dosage",
					spellDescription: "Dr. Mundo pumps himself with chemicals, instantly healing a percent of his missing Health. He then gains bonus Attack Damage and Move Speed, and regenerates a portion of his maximum Health over a long duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/DrMundoR.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Ekko",
		name: "Ekko",
		title: "the Boy Who Shattered Time",
		lore: "A prodigy from the rough streets of Zaun, Ekko manipulates time to twist any situation to his advantage. Using his own invention, the Zero Drive, he explores the branching possibilities of reality to craft the perfect moment. Though he revels in this freedom, when there's a threat to his friends he'll do anything to defend them. To outsiders, Ekko seems to achieve the impossible the first time, every time.",
		skins: "0, 1, 2, 3, 11, 12, 19, 28, 36, 45, 46",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ekko_0.jpg",
		passiveName: "Z-Drive Resonance",
		passiveDescription: "Every third attack or damaging spell on the same target deals bonus magic damage, and grants Ekko a burst of speed if the target is a champion.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Ekko_P.png",
		spells:
			[
				{
					spellId: "EkkoQ",
					spellName: "Timewinder",
					spellDescription: "Ekko throws a temporal grenade that expands into a time-distortion field upon hitting an enemy champion, slowing and damaging anyone caught inside. After a delay, the grenade rewinds back to Ekko, dealing damage on its return.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/EkkoQ.png",
				}, {
					spellId: "EkkoW",
					spellName: "Parallel Convergence",
					spellDescription: "Ekko's basic attacks deal bonus magic damage to low health enemies. He can cast Parallel Convergence to split the timeline, creating an anomaly after a few seconds that slows enemies caught inside. If Ekko enters the anomaly, he gains shielding and stuns enemies by suspending them in time.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/EkkoW.png",
				}, {
					spellId: "EkkoE",
					spellName: "Phase Dive",
					spellDescription: "Ekko rolls evasively while charging up his Z-Drive. His next attack deals bonus damage and warps reality, teleporting him to his target.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/EkkoE.png",
				}, {
					spellId: "EkkoR",
					spellName: "Chronobreak",
					spellDescription: "Ekko shatters his timeline, becoming untargetable and rewinding to a more favorable point in time. He returns to whenever he was a few seconds ago, and heals for a percentage of the damage received in that duration. Enemies near his arrival zone take massive damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/EkkoR.png",
				},
			],
		roles: "Assassin, Fighter",
		lane: ""
	},
	{
		id: "Elise",
		name: "Elise",
		title: "the Spider Queen",
		lore: "Elise is a deadly predator who dwells in a shuttered, lightless palace, deep within the oldest city of Noxus. Once mortal, she was the mistress of a powerful house, but the bite of a vile demigod transformed her into something beautiful, yet utterly inhuman—a spider-like creature, drawing unsuspecting prey into her web. To maintain her eternal youth, Elise now prefers to feed upon the naive and the faithless, and there are few who can resist her seductions.",
		skins: "0, 1, 2, 3, 4, 5, 6, 15",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Elise_0.jpg",
		passiveName: "Spider Queen",
		passiveDescription: "Human Form: When Elise's abilities hit an enemy, she gains a dormant Spiderling. Spider Form: Basic attacks deal bonus magic damage and restore health to Elise.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/ElisePassive.png",
		spells:
			[
				{
					spellId: "EliseHumanQ",
					spellName: "Neurotoxin / Venomous Bite",
					spellDescription: "Human Form: Deals damage based upon how high the target's Health is. Spider Form: Lunges at an enemy and deals damage based upon how low their Health is.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/EliseHumanQ.png",
				}, {
					spellId: "EliseHumanW",
					spellName: "Volatile Spiderling / Skittering Frenzy",
					spellDescription: "Human Form: Releases a venom-gorged Spiderling that explodes when it nears a target. Spider Form: Elise and her Spiderlings gain Attack Speed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/EliseHumanW.png",
				}, {
					spellId: "EliseHumanE",
					spellName: "Cocoon / Rappel",
					spellDescription: "Human Form: Stuns the first enemy unit hit and reveals them if they are not stealthed. Spider Form: Elise and her Spiderlings ascend into the air and then descend upon target enemy. After descending on an enemy target, Elise's bonus damage and healing from Spider Queen is increased.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/EliseHumanE.png",
				}, {
					spellId: "EliseR",
					spellName: "Spider Form",
					spellDescription: "Transforms into a menacing spider, reducing her attack range in exchange for Move Speed, new abilities, and a Spiderling swarm that will attack her foes.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/EliseR.png",
				},
			],
		roles: "Mage, Fighter",
		lane: ""
	},
	{
		id: "Evelynn",
		name: "Evelynn",
		title: "Agony's Embrace",
		lore: "Within the dark seams of Runeterra, the demon Evelynn searches for her next victim. She lures in prey with the voluptuous façade of a human female, but once a person succumbs to her charms, Evelynn's true form is unleashed. She then subjects her victim to unspeakable torment, gratifying herself with their pain. To the demon, these liaisons are innocent flings. To the rest of Runeterra, they are ghoulish tales of lust gone awry and horrific reminders of the cost of wanton desire.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 24, 31, 32",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Evelynn_0.jpg",
		passiveName: "Demon Shade",
		passiveDescription: "When out of combat, Evelynn enters Demon Shade. Demon Shade heals Evelynn when she is low on health and grants Camouflage after level 6.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Evelynn_Passive.png",
		spells:
			[
				{
					spellId: "EvelynnQ",
					spellName: "Hate Spike",
					spellDescription: "Evelynn strikes out with her Lasher, dealing damage to the first unit hit. Then, Evelynn can shoot a line of spikes at nearby foes up to 3 times.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/EvelynnQ.png",
				}, {
					spellId: "EvelynnW",
					spellName: "Allure",
					spellDescription: "Evelynn curses her target, causing her next attack or spell after a delay to charm her target and reduce their magic resist.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/EvelynnW.png",
				}, {
					spellId: "EvelynnE",
					spellName: "Whiplash",
					spellDescription: "Evelynn whips her target with her Lasher, dealing damage. She then gains Move Speed for a short duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/EvelynnE.png",
				}, {
					spellId: "EvelynnR",
					spellName: "Last Caress",
					spellDescription: "Evelynn briefly goes untargetable and decimates the area in front of her before warping backwards a long distance.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/EvelynnR.png",
				},
			],
		roles: "Assassin, Mage",
		lane: ""
	},
	{
		id: "Ezreal",
		name: "Ezreal",
		title: "the Prodigal Explorer",
		lore: "A dashing adventurer, unknowingly gifted in the magical arts, Ezreal raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease. His courage and bravado knowing no bounds, he prefers to improvise his way out of any situation, relying partially on his wits, but mostly on his mystical Shuriman gauntlet, which he uses to unleash devastating arcane blasts. One thing is for sure—whenever Ezreal is around, trouble isn't too far behind. Or ahead. Probably everywhere.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 19, 20, 21, 22, 23, 25",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ezreal_0.jpg",
		passiveName: "Rising Spell Force",
		passiveDescription: "Ezreal gains increasing Attack Speed each time he successfully hits a spell, stacking up to 5 times.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Ezreal_RisingSpellForce.png",
		spells:
			[
				{
					spellId: "EzrealQ",
					spellName: "Mystic Shot",
					spellDescription: "Ezreal fires a damaging bolt of energy which reduces all of his cooldowns slightly if it strikes an enemy unit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/EzrealQ.png",
				}, {
					spellId: "EzrealW",
					spellName: "Essence Flux",
					spellDescription: "Ezreal fires an orb that sticks to the first champion or objective hit. If Ezreal hits an enemy with the orb, it detonates and deals damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/EzrealW.png",
				}, {
					spellId: "EzrealE",
					spellName: "Arcane Shift",
					spellDescription: "Ezreal teleports to a target nearby location and fires a homing bolt which strikes the nearest enemy unit. Prioritizes enemies stuck with Essence Flux.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/EzrealE.png",
				}, {
					spellId: "EzrealR",
					spellName: "Trueshot Barrage",
					spellDescription: "Ezreal winds up before firing a powerful barrage of energy that deals massive damage to each unit it passes through (damage is reduced for minions and non-epic monsters).",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/EzrealR.png",
				},
			],
		roles: "Marksman, Mage",
		lane: ""
	},
	{
		id: "Fiddlesticks",
		name: "Fiddlesticks",
		title: "the Ancient Fear",
		lore: "Something has awoken in Runeterra. Something ancient. Something terrible. The ageless horror known as Fiddlesticks stalks the edges of mortal society, drawn to areas thick with paranoia where it feeds upon terrorized victims. Wielding a jagged scythe, the haggard, makeshift creature reaps fear itself, shattering the minds of those unlucky enough to survive in its wake. Beware the sounding of the crow, or the whispering of the shape that appears almost human… Fiddlesticks has returned.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 27",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Fiddlesticks_0.jpg",
		passiveName: "A Harmless Scarecrow",
		passiveDescription: "Fiddlesticks' trinket is replaced by scarecrow effigies.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/FiddleSticks_Passive.png",
		spells:
			[
				{
					spellId: "FiddleSticksQ",
					spellName: "Terrify",
					spellDescription: "Fiddlesticks damaging enemies with spells while unseen or targeting an enemy with Terrify's activation strikes a target unit with fear, causing it to flee in terror for a duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/FiddleSticksQ.png",
				}, {
					spellId: "FiddleSticksW",
					spellName: "Bountiful Harvest",
					spellDescription: "Fiddlesticks drains health from nearby enemies, dealing bonus execute damage at the end of the duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/FiddleSticksW.png",
				}, {
					spellId: "FiddleSticksE",
					spellName: "Reap",
					spellDescription: "Fiddlesticks slashes an area with its scythe, slowing all enemies hit and silencing enemies hit in the center of the slash.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/FiddleSticksE.png",
				}, {
					spellId: "FiddleSticksR",
					spellName: "Crowstorm",
					spellDescription: "A murder of crows flock wildly around Fiddlesticks, dealing damage per second to all enemy units in the area.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/FiddleSticksR.png",
				},
			],
		roles: "Mage, Support",
		lane: ""
	},
	{
		id: "Fiora",
		name: "Fiora",
		title: "the Grand Duelist",
		lore: "The most feared duelist in all Valoran, Fiora is as renowned for her brusque manner and cunning mind as she is for the speed of her bluesteel rapier. Born to House Laurent in the kingdom of Demacia, Fiora took control of the family from her father in the wake of a scandal that nearly destroyed them. House Laurent's reputation was sundered, but Fiora bends her every effort to restore her family's honor and return them to their rightful place among the great and good of Demacia.",
		skins: "0, 1, 2, 3, 4, 5, 22, 23, 31, 41, 50, 51, 60",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Fiora_0.jpg",
		passiveName: "Duelist's Dance",
		passiveDescription: "Fiora has revealed a Vital on this Champion. If she hits the Vital, she restores Health and gains Move Speed.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Fiora_P.png",
		spells:
			[
				{
					spellId: "FioraQ",
					spellName: "Lunge",
					spellDescription: "Fiora lunges in a direction and stabs a nearby enemy, dealing physical damage and applying on-hit effects.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/FioraQ.png",
				}, {
					spellId: "FioraW",
					spellName: "Riposte",
					spellDescription: "Fiora parries all incoming damage and disables for a short time, then stabs in a direction. This stab slows the first enemy champion hit, or stuns them if Fiora blocked an immobilizing effect with this ability.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/FioraW.png",
				}, {
					spellId: "FioraE",
					spellName: "Bladework",
					spellDescription: "Fiora has increased attack speed for the next two attacks. The first attack slows the target, and the second attack will critically strike.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/FioraE.png",
				}, {
					spellId: "FioraR",
					spellName: "Grand Challenge",
					spellDescription: "Fiora reveals all four Vitals on an enemy champion and gains Move Speed while near them. If Fiora hits all four Vitals or if the target dies after she has hit at least one, Fiora and her allies in the area are healed over the next few seconds.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/FioraR.png",
				},
			],
		roles: "Fighter, Assassin",
		lane: ""
	},
	{
		id: "Fizz",
		name: "Fizz",
		title: "the Tidal Trickster",
		lore: "Fizz is an amphibious yordle, who dwells among the reefs surrounding Bilgewater. He often retrieves and returns the tithes cast into the sea by superstitious captains, but even the saltiest of sailors know better than to cross him—for many are the tales of those who have underestimated this slippery character. Often mistaken for some manner of capricious ocean spirit, he seems able to command the beasts of the deep, and delights in confounding his allies and enemies alike.",
		skins: "0, 1, 2, 3, 4, 8, 9, 10, 14, 15, 16, 25",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Fizz_0.jpg",
		passiveName: "Nimble Fighter",
		passiveDescription: "Fizz can move through units and takes a flat amount of reduced damage from all sources",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Fizz_P.png",
		spells:
			[
				{
					spellId: "FizzQ",
					spellName: "Urchin Strike",
					spellDescription: "Fizz dashes through his target, dealing magic damage and applying on hit effects.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/FizzQ.png",
				}, {
					spellId: "FizzW",
					spellName: "Seastone Trident",
					spellDescription: "Fizz's attacks bleed his enemies, dealing magic damage over several seconds. Fizz can empower his next attack to deal bonus damage and empower his further attacks for a short time.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/FizzW.png",
				}, {
					spellId: "FizzE",
					spellName: "Playful / Trickster",
					spellDescription: "Fizz hops into the air, landing gracefully upon his spear and becoming untargetable. From this position, Fizz can either slam the ground or choose to jump again before smashing back down.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/FizzE.png",
				}, {
					spellId: "FizzR",
					spellName: "Chum the Waters",
					spellDescription: "Fizz tosses a fish in a direction that attaches to any champion that touches it, slowing the target. After a short delay, a shark erupts from the ground, knocking up the target and knocking any nearby enemies aside. All enemies hit are dealt magic damage and slowed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/FizzR.png",
				},
			],
		roles: "Assassin, Fighter",
		lane: ""
	},
	{
		id: "Galio",
		name: "Galio",
		title: "the Colossus",
		lore: "Outside the gleaming city of Demacia, the stone colossus Galio keeps vigilant watch. Built as a bulwark against enemy mages, he often stands motionless for decades until the presence of powerful magic stirs him to life. Once activated, Galio makes the most of his time, savoring the thrill of a fight and the rare honor of defending his countrymen. But his triumphs are always bittersweet, for the magic he destroys is also his source of reanimation, and each victory leaves him dormant once again.",
		skins: "0, 1, 2, 3, 4, 5, 6, 13, 19, 28",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Galio_0.jpg",
		passiveName: "Colossal Smash",
		passiveDescription: "Every few seconds, Galio's next basic attack deals bonus magic damage in an area.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Galio_Passive.png",
		spells:
			[
				{
					spellId: "GalioQ",
					spellName: "Winds of War",
					spellDescription: "Galio fires two windblasts that converge into a large tornado that deals damage over time.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GalioQ.png",
				}, {
					spellId: "GalioW",
					spellName: "Shield of Durand",
					spellDescription: "Galio charges a defensive stance, moving slowly. Upon releasing the charge, Galio will taunt and damage nearby enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GalioW.png",
				}, {
					spellId: "GalioE",
					spellName: "Justice Punch",
					spellDescription: "Galio will briefly step back and charge, knocking up the first enemy champion he encounters.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GalioE.png",
				}, {
					spellId: "GalioR",
					spellName: "Hero's Entrance",
					spellDescription: "Galio designates an ally's position as his landing spot, granting all allies in the area a magic shield. After a delay Galio smashes down location, knocking up nearby enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GalioR.png",
				},
			],
		roles: "Tank, Mage",
		lane: ""
	},
	{
		id: "Gangplank",
		name: "Gangplank",
		title: "the Saltwater Scourge",
		lore: "As unpredictable as he is brutal, the dethroned reaver king Gangplank is feared far and wide. Once, he ruled the port city of Bilgewater, and while his reign is over, there are those who believe this has only made him more dangerous. Gangplank would see Bilgewater bathed in blood once more before letting someone else take it—and now with pistol, cutlass, and barrels of gunpowder, he is determined to reclaim what he has lost.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 14, 21, 23",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Gangplank_0.jpg",
		passiveName: "Trial by Fire",
		passiveDescription: "Every few seconds, Gangplank's melee strike will set his opponent on fire.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Gangplank_Passive.png",
		spells:
			[
				{
					spellId: "GangplankQWrapper",
					spellName: "Parrrley",
					spellDescription: "Shoots target, plundering Gold for each enemy unit killed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GangplankQWrapper.png",
				}, {
					spellId: "GangplankW",
					spellName: "Remove Scurvy",
					spellDescription: "Eats citrus to cure crowd control effects and restore Health.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GangplankW.png",
				}, {
					spellId: "GangplankE",
					spellName: "Powder Keg",
					spellDescription: "Gangplank uncovers a powder keg at target location. If he attacks it, it explodes, spreading the attack's damage to enemies in the area, slowing them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GangplankE.png",
				}, {
					spellId: "GangplankR",
					spellName: "Cannon Barrage",
					spellDescription: "Gangplank signals his ship to bombard an area, slowing and damaging enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GangplankR.png",
				},
			],
		roles: "Fighter",
		lane: ""
	},
	{
		id: "Garen",
		name: "Garen",
		title: "The Might of Demacia",
		lore: "A proud and noble warrior, Garen fights as one of the Dauntless Vanguard. He is popular among his fellows, and respected well enough by his enemies—not least as a scion of the prestigious Crownguard family, entrusted with defending Demacia and its ideals. Clad in magic-resistant armor and bearing a mighty broadsword, Garen stands ready to confront mages and sorcerers on the field of battle, in a veritable whirlwind of righteous steel.",
		skins: "0, 1, 2, 3, 4, 5, 6, 10, 11, 13, 14, 22, 23, 24, 33",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Garen_0.jpg",
		passiveName: "Perseverance",
		passiveDescription: "If Garen has not recently been struck by damage or enemy abilities, he regenerates a percentage of his total health each second.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Garen_Passive.png",
		spells:
			[
				{
					spellId: "GarenQ",
					spellName: "Decisive Strike",
					spellDescription: "Garen gains a burst of Move Speed, breaking free of all slows affecting him. His next attack strikes a vital area of his foe, dealing bonus damage and silencing them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GarenQ.png",
				}, {
					spellId: "GarenW",
					spellName: "Courage",
					spellDescription: "Garen passively increases his armor and magic resist by killing enemies. He may also activate this ability to give him a shield and tenacity for a brief moment followed by a lesser amount of damage reduction for a longer duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GarenW.png",
				}, {
					spellId: "GarenE",
					spellName: "Judgment",
					spellDescription: "Garen rapidly spins his sword around his body, dealing physical damage to nearby enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GarenE.png",
				}, {
					spellId: "GarenR",
					spellName: "Demacian Justice",
					spellDescription: "Garen calls upon the might of Demacia to attempt to execute an enemy champion.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GarenR.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Gnar",
		name: "Gnar",
		title: "the Missing Link",
		lore: "Gnar is a primeval yordle whose playful antics can erupt into a toddler's outrage in an instant, transforming him into a massive beast bent on destruction. Frozen in True Ice for millennia, the curious creature broke free and now hops about a changed world he sees as exotic and wondrous. Delighted by danger, Gnar flings whatever he can at his enemies, be it his bonetooth boomerang, or a nearby building.",
		skins: "0, 1, 2, 3, 4, 13, 14, 15, 22",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Gnar_0.jpg",
		passiveName: "Rage Gene",
		passiveDescription: "While in combat Gnar generates Rage. At maximum Rage his next ability will transform him into Mega Gnar, granting increased survivability and access to new spells.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Gnar_Passive.png",
		spells:
			[
				{
					spellId: "GnarQ",
					spellName: "Boomerang Throw / Boulder Toss",
					spellDescription: "Gnar throws a boomerang that damages and slows enemies it hits before returning to him. If he catches the boomerang its cooldown is reduced. Mega Gnar instead throws a boulder that stops on the first unit hit, damaging and slowing everything nearby. It can then be picked up to reduce the cooldown.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GnarQ.png",
				}, {
					spellId: "GnarW",
					spellName: "Hyper / Wallop",
					spellDescription: "Gnar's attacks and spells hype him up, dealing bonus damage and granting him Move Speed. Mega Gnar is too enraged to be hyper and instead can rear up on his hind legs and smash down on the area in front of him, stunning enemies in an area.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GnarW.png",
				}, {
					spellId: "GnarE",
					spellName: "Hop / Crunch",
					spellDescription: "Gnar leaps to a location and bounces off the head of any unit he lands on, traveling further. Mega Gnar is too large to bounce and instead lands with earth-shattering force, dealing damage in an area around him.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GnarE.png",
				}, {
					spellId: "GnarR",
					spellName: "GNAR!",
					spellDescription: "Mega Gnar throws everything around him in a chosen direction, dealing damage and slowing them. Any enemy that hits a wall is stunned and takes bonus damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GnarR.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Gragas",
		name: "Gragas",
		title: "the Rabble Rouser",
		lore: "Equal parts jolly and imposing, Gragas is a massive, rowdy brewmaster on his own quest for the perfect pint of ale. Hailing from parts unknown, he now searches for rare ingredients among the unblemished wastes of the Freljord, trying each recipe as he goes. Often intoxicated and extremely impulsive, he is legendary for the brawls he starts, which often end in all-night parties and widespread property damage. Any appearance from Gragas must surely foreshadow drinking and destruction—in that order.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Gragas_0.jpg",
		passiveName: "Happy Hour",
		passiveDescription: "Gragas periodically heals upon using a skill.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/GragasPassiveHeal.png",
		spells:
			[
				{
					spellId: "GragasQ",
					spellName: "Barrel Roll",
					spellDescription: "Gragas rolls his cask to a location, which can be activated to explode or will explode on its own after 4 seconds. The potency of the explosion increases over time. Enemies struck by the blast have their Move Speed slowed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GragasQ.png",
				}, {
					spellId: "GragasW",
					spellName: "Drunken Rage",
					spellDescription: "Gragas guzzles down brew from his cask for 1 second. After finishing, he becomes drunkenly empowered, dealing magic damage to all nearby enemies on his next basic attack and reducing damage received.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GragasW.png",
				}, {
					spellId: "GragasE",
					spellName: "Body Slam",
					spellDescription: "Gragas charges to a location and collides with the first enemy unit he comes across, dealing damage to all nearby enemy units and stunning them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GragasE.png",
				}, {
					spellId: "GragasR",
					spellName: "Explosive Cask",
					spellDescription: "Gragas hurls his cask to a location, dealing damage and knocking back enemies caught in the blast radius.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GragasR.png",
				},
			],
		roles: "Fighter, Mage",
		lane: ""
	},
	{
		id: "Graves",
		name: "Graves",
		title: "the Outlaw",
		lore: "Malcolm Graves is a renowned mercenary, gambler, and thief—a wanted man in every city and empire he has visited. Even though he has an explosive temper, he possesses a strict sense of criminal honor, often enforced at the business end of his double-barreled shotgun Destiny. In recent years, he has reconciled a troubled partnership with Twisted Fate, and together they have prospered once more in the turmoil of Bilgewater's criminal underbelly.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 14, 18, 25, 35, 42",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Graves_0.jpg",
		passiveName: "New Destiny",
		passiveDescription: "Graves' shotgun has some unique properties. He must reload when he runs out of ammo. Attacks fire 4 bullets, which cannot pass through units. Non-champions struck by multiple bullets are knocked back.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/GravesTrueGrit.png",
		spells:
			[
				{
					spellId: "GravesQLineSpell",
					spellName: "End of the Line",
					spellDescription: "Graves fires an explosive shell that detonates after 2 seconds, or 0.2 seconds if it strikes terrain.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GravesQLineSpell.png",
				}, {
					spellId: "GravesSmokeGrenade",
					spellName: "Smoke Screen",
					spellDescription: "Graves fires a smoke canister at the target area creating a cloud of smoke that reduces sight range. Enemies caught in the initial impact are dealt magic damage and have their Move Speed reduced briefly.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GravesSmokeGrenade.png",
				}, {
					spellId: "GravesMove",
					spellName: "Quickdraw",
					spellDescription: "Graves dashes forward gaining an Armor boost for several seconds. If Graves dashes towards an enemy champion, gain two stacks of True Grit instead. Hitting enemies with basic attacks lowers the cooldown of this skill and refreshes the resistance boost.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GravesMove.png",
				}, {
					spellId: "GravesChargeShot",
					spellName: "Collateral Damage",
					spellDescription: "Graves fires an explosive shell dealing heavy damage to the first champion it hits. After hitting a champion or reaching the end of its range, the shell explodes dealing damage in a cone.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GravesChargeShot.png",
				},
			],
		roles: "Marksman",
		lane: ""
	},
	{
		id: "Heimerdinger",
		name: "Heimerdinger",
		title: "the Revered Inventor",
		lore: "A brilliant yet eccentric yordle scientist, Professor Cecil B. Heimerdinger is one of the most innovative and esteemed inventors Piltover has ever known. Relentless in his work to the point of neurotic obsession, he thrives on answering the universe's most impenetrable questions. Though his theories often appear opaque and esoteric, Heimerdinger has crafted some of Piltover's most miraculous—not to mention lethal—machinery, and constantly tinkers with his inventions to make them even more efficient.",
		skins: "0, 1, 2, 3, 4, 5, 6, 15, 24",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Heimerdinger_0.jpg",
		passiveName: "Hextech Affinity",
		passiveDescription: "Gain Move Speed while near allied towers and turrets deployed by Heimerdinger.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Heimerdinger_Passive.png",
		spells:
			[
				{
					spellId: "HeimerdingerQ",
					spellName: "H-28 G Evolution Turret",
					spellDescription: "Heimerdinger lays down a rapid-fire cannon turret equipped with a secondary pass-through beam attack (turrets deal half damage to towers).",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/HeimerdingerQ.png",
				}, {
					spellId: "HeimerdingerW",
					spellName: "Hextech Micro-Rockets",
					spellDescription: "Heimerdinger fires long-range rockets that converge on his cursor.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/HeimerdingerW.png",
				}, {
					spellId: "HeimerdingerE",
					spellName: "CH-2 Electron Storm Grenade",
					spellDescription: "Heimerdinger lobs a grenade at a location, dealing damage to enemy units, as well as stunning anyone directly hit and slowing surrounding units.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/HeimerdingerE.png",
				}, {
					spellId: "HeimerdingerR",
					spellName: "UPGRADE!!!",
					spellDescription: "Heimerdinger invents an upgrade, causing his next spell to have increased effects. ",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/HeimerdingerR.png",
				},
			],
		roles: "Mage, Support",
		lane: ""
	},
	{
		id: "Hecarim",
		name: "Hecarim",
		title: "the Shadow of War",
		lore: "Hecarim is a spectral fusion of man and beast, cursed to ride down the souls of the living for all eternity. When the Blessed Isles fell into shadow, this proud knight was obliterated by the destructive energies of the Ruination, along with all his cavalry and their mounts. Now, whenever the Black Mist reaches out across Runeterra, he leads their devastating charge, reveling in the slaughter and crushing the foe beneath his armored hooves.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 14, 22",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Hecarim_0.jpg",
		passiveName: "Warpath",
		passiveDescription: "Hecarim gains Attack Damage equal to a percentage of his bonus Move Speed.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Hecarim_Passive.png",
		spells:
			[
				{
					spellId: "HecarimRapidSlash",
					spellName: "Rampage",
					spellDescription: "Hecarim cleaves nearby enemies dealing physical damage. If Hecarim damages at least one enemy, he increases the damage and lowers the cooldown of subsequent Rampages.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/HecarimRapidSlash.png",
				}, {
					spellId: "HecarimW",
					spellName: "Spirit of Dread",
					spellDescription: "Hecarim gains Armor and Magic Resist. Hecarim deals magic damage to nearby enemies, and gains Health equal to a percentage of any damage those enemies suffer.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/HecarimW.png",
				}, {
					spellId: "HecarimRamp",
					spellName: "Devastating Charge",
					spellDescription: "Hecarim gains increasing Move Speed and can move through units for a short duration. His next attack knocks the target back and deals additional physical damage based on the distance he has traveled since activating the ability.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/HecarimRamp.png",
				}, {
					spellId: "HecarimUlt",
					spellName: "Onslaught of Shadows",
					spellDescription: "Hecarim summons spectral riders and charges forward, dealing magic damage in a line. Hecarim creates a shockwave when he finishes his charge, causing nearby enemies to flee in terror.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/HecarimUlt.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Gwen",
		name: "Gwen",
		title: "The Hallowed Seamstress",
		lore: "A former doll transformed and brought to life by magic, Gwen wields the very tools that once created her. She carries the weight of her maker's love with every step, taking nothing for granted. At her command is the Hallowed Mist, an ancient and protective magic that has blessed Gwen's scissors, needles, and sewing thread. So much is new to her, but Gwen remains joyfully determined to fight for the good that survives in a broken world.",
		skins: "0, 1, 11",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Gwen_0.jpg",
		passiveName: "A Thousand Cuts",
		passiveDescription: "Gwen's attacks deal bonus magic damage based on the targets health. She heals for a portion of the damage dealt to champions by this effect. ",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Gwen_Passive.png",
		spells:
			[
				{
					spellId: "GwenQ",
					spellName: "Snip Snip!",
					spellDescription: "Gwen snips her scissors in a cone up to 6 times dealing magic damage. Gwen deals true damage to units in the center and applies her passive to them on each snip.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GwenQ.png",
				}, {
					spellId: "GwenW",
					spellName: "Hallowed Mist",
					spellDescription: "Gwen summons mist that protects her from enemies outside of it. She can only be targeted by enemies who enter the mist.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GwenW.png",
				}, {
					spellId: "GwenE",
					spellName: "Skip 'n Slash",
					spellDescription: "Gwen dashes a short distance then gains Attack Speed, attack range, and magic damage On-Hit for a few seconds. If she hits an enemy during that time, this Ability's cooldown is partially refunded. ",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GwenE.png",
				}, {
					spellId: "GwenR",
					spellName: "Needlework",
					spellDescription: "Gwen hurls a needle that slows enemies hit, deals magic damage, and applies A Thousand Cuts to champions hit. This ability can be cast up to two more times, with each cast throwing additional needles and dealing more damage. Gwen must hit an enemy between each cast to unlock the next one. ",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GwenR.png",
				},
			],
		roles: "Fighter, Assassin",
		lane: ""
	},
	{
		id: "Illaoi",
		name: "Illaoi",
		title: "the Kraken Priestess",
		lore: "Illaoi's powerful physique is dwarfed only by her indomitable faith. As the prophet of the Great Kraken, she uses a huge, golden idol to rip her foes' spirits from their bodies and shatter their perception of reality. All who challenge the “Truth Bearer of Nagakabouros” soon discover Illaoi never battles alone—the god of the Serpent Isles fights by her side.",
		skins: "0, 1, 2, 10, 18",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Illaoi_0.jpg",
		passiveName: "Prophet of an Elder God",
		passiveDescription: "Illaoi and the Vessels she creates spawn Tentacles on nearby impassible terrain. Tentacles swing at spirits, Vessels, and victims of Illaoi's Harsh lesson. Tentacles deal physical damage to enemies hit, and will heal Illaoi if they damage a champion.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Illaoi_P.png",
		spells:
			[
				{
					spellId: "IllaoiQ",
					spellName: "Tentacle Smash",
					spellDescription: "Increases the damage dealt by Tentacles. When activated, Illaoi smashes down a Tentacle that deals physical damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/IllaoiQ.png",
				}, {
					spellId: "IllaoiW",
					spellName: "Harsh Lesson",
					spellDescription: "Illaoi leaps to her target, dealing physical damage and causing nearby Tentacles to also swing at the target.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/IllaoiW.png",
				}, {
					spellId: "IllaoiE",
					spellName: "Test of Spirit",
					spellDescription: "Illaoi rips the spirit from a foe's body, forcing it to stand before her. Spirits echo a percentage of the damage they take to the original target. If killed, or if the target gets too far from the spirit, the target will become a Vessel and begin spawning Tentacles.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/IllaoiE.png",
				}, {
					spellId: "IllaoiR",
					spellName: "Leap of Faith",
					spellDescription: "Illaoi smashes her idol into the ground, dealing physical damage to nearby enemies. A Tentacle spawns for each enemy champion hit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/IllaoiR.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Irelia",
		name: "Irelia",
		title: "the Blade Dancer",
		lore: "The Noxian occupation of Ionia produced many heroes, none more unlikely than young Irelia of Navori. Trained in the ancient dances of her province, she adapted her art for war, using the graceful and carefully practised movements to levitate a host of deadly blades. After proving herself as a fighter, she was thrust into the role of resistance leader and figurehead, and to this day remains dedicated to the preservation of her homeland.",
		skins: "0, 1, 2, 3, 4, 5, 6, 15, 16, 17, 18, 26, 36, 37",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Irelia_0.jpg",
		passiveName: "Ionian Fervor",
		passiveDescription: "When Irelia strikes enemies with spells she gains stacking bonus Attack Speed. At maximum stacks she also gains bonus damage on hit.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Irelia_Passive.png",
		spells:
			[
				{
					spellId: "IreliaQ",
					spellName: "Bladesurge",
					spellDescription: "Irelia dashes forward to strike her target, healing herself. If the target is Marked or dies to Bladesurge, its cooldown refreshes.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/IreliaQ.png",
				}, {
					spellId: "IreliaW",
					spellName: "Defiant Dance",
					spellDescription: "Irelia charges a strike that deals more damage as she charges. She takes reduced physical damage during the charge.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/IreliaW.png",
				}, {
					spellId: "IreliaE",
					spellName: "Flawless Duet",
					spellDescription: "Irelia sends out two blades which converge on each other. Enemies caught in between are damaged, stunned and Marked.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/IreliaE.png",
				}, {
					spellId: "IreliaR",
					spellName: "Vanguard's Edge",
					spellDescription: "Irelia fires a massive number of blades that explode outward upon hitting an enemy champion. Enemies hit by the blades are damaged and Marked. Afterwards the blades form a wall that will damage and slow enemies that walk through it.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/IreliaR.png",
				},
			],
		roles: "Fighter, Assassin",
		lane: ""
	},
	{
		id: "Ivern",
		name: "Ivern",
		title: "the Green Father",
		lore: "Ivern Bramblefoot, known to many as the Green Father, is a peculiar half man, half tree who roams Runeterra's forests, cultivating life everywhere he goes. He knows the secrets of the natural world, and holds deep friendships with all things that grow, fly, and scuttle. Ivern wanders the wilderness, imparting strange wisdom to any he meets, enriching the forests, and occasionally entrusting loose-lipped butterflies with his secrets.",
		skins: "0, 1, 2, 11",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ivern_0.jpg",
		passiveName: "Friend of the Forest",
		passiveDescription: "Ivern cannot attack or be attacked by non-epic monsters. Ivern can create magical groves on jungle camps which grow over time. When the grove is fully grown, Ivern may free the monsters to receive gold and experience. After level 5 Ivern can share jungle buffs with allies.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/IvernP.png",
		spells:
			[
				{
					spellId: "IvernQ",
					spellName: "Rootcaller",
					spellDescription: "Ivern conjures a vine, dealing damage and rooting enemy targets hit. Ivern's allies can dash to the rooted target.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/IvernQ.png",
				}, {
					spellId: "IvernW",
					spellName: "Brushmaker",
					spellDescription: "In brush, Ivern's attacks deal bonus magic damage. Ivern can activate this ability to create a patch of brush.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/IvernW.png",
				}, {
					spellId: "IvernE",
					spellName: "Triggerseed",
					spellDescription: "Ivern places a shield on an ally which explodes after a short duration slowing and damaging enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/IvernE.png",
				}, {
					spellId: "IvernR",
					spellName: "Daisy!",
					spellDescription: "Ivern summons his Sentinel friend Daisy to fight with him. Daisy will send out a shockwave if she attacks the same champion three times in a row.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/IvernR.png",
				},
			],
		roles: "Support, Mage",
		lane: ""
	},
	{
		id: "Janna",
		name: "Janna",
		title: "the Storm's Fury",
		lore: "Armed with the power of Runeterra's gales, Janna is a mysterious, elemental wind spirit who protects the dispossessed of Zaun. Some believe she was brought into existence by the pleas of Runeterra's sailors who prayed for fair winds as they navigated treacherous waters and braved rough tempests. Her favor and protection has since been called into the depths of Zaun, where Janna has become a beacon of hope to those in need. No one knows where or when she will appear, but more often than not, she's come to help.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 13, 20, 27, 36, 45, 46",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Janna_0.jpg",
		passiveName: "Tailwind",
		passiveDescription: "Janna gains bonus Move Speed moving towards allied champions and nearby allied champions gain this bonus when moving toward her.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Janna_Tailwind.png",
		spells:
			[
				{
					spellId: "HowlingGale",
					spellName: "Howling Gale",
					spellDescription: "By creating a localized change in pressure and temperature, Janna is able to create a small storm that grows in size with time. She can activate the spell again to release the storm. On release this storm will fly towards the direction it was cast in, dealing damage and knocking away any enemies in its path.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/HowlingGale.png",
				}, {
					spellId: "SowTheWind",
					spellName: "Zephyr",
					spellDescription: "Janna summons an air elemental that passively increases her Move Speed and enables her to pass through units. She may also activate this ability to deal damage and slow an enemy's Move Speed. The passive is lost while this ability is on cooldown.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SowTheWind.png",
				}, {
					spellId: "EyeOfTheStorm",
					spellName: "Eye Of The Storm",
					spellDescription: "Janna conjures a defensive gale that shields an ally champion or turret from incoming damage and increases their Attack Damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/EyeOfTheStorm.png",
				}, {
					spellId: "ReapTheWhirlwind",
					spellName: "Monsoon",
					spellDescription: "Janna surrounds herself in a magical storm, throwing enemies back. After the storm has settled, soothing winds heal nearby allies while the ability is active.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ReapTheWhirlwind.png",
				},
			],
		roles: "Support, Mage",
		lane: ""
	},
	{
		id: "Jax",
		name: "Jax",
		title: "Grandmaster at Arms",
		lore: "Unmatched in both his skill with unique armaments and his biting sarcasm, Jax is the last known weapons master of Icathia. After his homeland was laid low by its own hubris in unleashing the Void, Jax and his kind vowed to protect what little remained. As magic now rises in the world, this slumbering threat stirs once more, and Jax roams Valoran, wielding the last light of Icathia and testing all warriors he meets to see if any are strong enough to stand beside him...",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 12, 13, 14, 20, 21, 22",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jax_0.jpg",
		passiveName: "Relentless Assault",
		passiveDescription: "Jax's consecutive basic attacks continuously increase his Attack Speed.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Armsmaster_MasterOfArms.png",
		spells:
			[
				{
					spellId: "JaxLeapStrike",
					spellName: "Leap Strike",
					spellDescription: "Jax leaps toward a unit. If they are an enemy, he strikes them with his weapon.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JaxLeapStrike.png",
				}, {
					spellId: "JaxEmpowerTwo",
					spellName: "Empower",
					spellDescription: "Jax charges his weapon with energy, causing his next attack to deal additional damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JaxEmpowerTwo.png",
				}, {
					spellId: "JaxCounterStrike",
					spellName: "Counter Strike",
					spellDescription: "Jax's combat prowess allows him to dodge all incoming attacks for a short duration and then quickly counterattack, stunning all surrounding enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JaxCounterStrike.png",
				}, {
					spellId: "JaxRApexForm",
					spellName: "Grandmaster-at-Arms",
					spellDescription: "Every third consecutive attack deals additional Magic Damage. Additionally, Jax can activate this ability to deal damage around himself and strengthen his resolve, increasing his Armor and Magic Resist for a short duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JaxRApexForm.png",
				},
			],
		roles: "Fighter, Assassin",
		lane: ""
	},
	{
		id: "JarvanIV",
		name: "Jarvan IV",
		title: "the Exemplar of Demacia",
		lore: "Prince Jarvan, scion of the Lightshield dynasty, is heir apparent to the throne of Demacia. Raised to be a paragon of his nation's greatest virtues, he is forced to balance the heavy expectations placed upon him with his own desire to fight on the front lines. Jarvan inspires his troops with his fearsome courage and selfless determination, raising his family's colors high and revealing his true strength as a future leader of his people.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 21, 30",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/JarvanIV_0.jpg",
		passiveName: "Martial Cadence",
		passiveDescription: "Jarvan's first basic attack on an enemy deals bonus physical damage based on their current Health. This effect cannot occur again on the same enemy for a few seconds.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/JarvanIV_MartialCadence.png",
		spells:
			[
				{
					spellId: "JarvanIVDragonStrike",
					spellName: "Dragon Strike",
					spellDescription: "Jarvan IV extends his lance, dealing physical damage and lowering the Armor of enemies in its path. Additionally, this will pull Jarvan to his Demacian Standard, knocking up enemies in his path.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JarvanIVDragonStrike.png",
				}, {
					spellId: "JarvanIVGoldenAegis",
					spellName: "Golden Aegis",
					spellDescription: "Jarvan IV calls upon the ancient kings of Demacia to shield him from harm and slow surrounding enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JarvanIVGoldenAegis.png",
				}, {
					spellId: "JarvanIVDemacianStandard",
					spellName: "Demacian Standard",
					spellDescription: "Jarvan IV carries the pride of Demacia, passively granting him bonus Attack Speed. Activating Demacian Standard allows Jarvan IV to place a Demacian flag that deals magic damage on impact and grants Attack Speed to nearby allied champions.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JarvanIVDemacianStandard.png",
				}, {
					spellId: "JarvanIVCataclysm",
					spellName: "Cataclysm",
					spellDescription: "Jarvan IV heroically leaps into battle at a target with such force that he terraforms the surrounding area to create an arena around them. Nearby enemies are damaged at the moment of impact.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JarvanIVCataclysm.png",
				},
			],
		roles: "Tank, Fighter",
		lane: ""
	},
	{
		id: "Jinx",
		name: "Jinx",
		title: "the Loose Cannon",
		lore: "A manic and impulsive criminal from Zaun, Jinx lives to wreak havoc without care for the consequences. With an arsenal of deadly weapons, she unleashes the loudest blasts and brightest explosions to leave a trail of mayhem and panic in her wake. Jinx despises boredom, and gleefully brings her own chaotic brand of pandemonium wherever she goes.",
		skins: "0, 1, 2, 3, 4, 12, 13, 20, 29, 37, 38, 40",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jinx_0.jpg",
		passiveName: "Get Excited!",
		passiveDescription: "Jinx receives massively increased Move Speed and Attack Speed whenever she helps kill or destroy an enemy champions epic jungle monster, or structure.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Jinx_Passive.png",
		spells:
			[
				{
					spellId: "JinxQ",
					spellName: "Switcheroo!",
					spellDescription: "Jinx modifies her basic attacks by swapping between Pow-Pow, her minigun and Fishbones, her rocket launcher. Attacks with Pow-Pow grant Attack Speed, while attacks with Fishbones deal area of effect damage, gain increased range, but drain Mana and attack slower.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JinxQ.png",
				}, {
					spellId: "JinxW",
					spellName: "Zap!",
					spellDescription: "Jinx uses Zapper, her shock pistol, to fire a blast that deals damage to the first enemy hit, slowing and revealing it.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JinxW.png",
				}, {
					spellId: "JinxE",
					spellName: "Flame Chompers!",
					spellDescription: "Jinx throws out a line of snare grenades that explode after 5 seconds, lighting enemies on fire. Flame Chompers will bite enemy champions who walk over them, rooting them in place.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JinxE.png",
				}, {
					spellId: "JinxR",
					spellName: "Super Mega Death Rocket!",
					spellDescription: "Jinx fires a super rocket across the map that gains damage as it travels. The rocket will explode upon colliding with an enemy champion, dealing damage to it and surrounding enemies based on their missing Health.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JinxR.png",
				},
			],
		roles: "Marksman",
		lane: ""
	},
	{
		id: "Jhin",
		name: "Jhin",
		title: "the Virtuoso",
		lore: "Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy elements within Ionia's ruling council, the serial killer now works as their cabal's assassin. Using his gun as his paintbrush, Jhin creates works of artistic brutality, horrifying victims and onlookers. He gains a cruel pleasure from putting on his gruesome theater, making him the ideal choice to send the most powerful of messages: terror.",
		skins: "0, 1, 2, 3, 4, 5, 14, 23, 25",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jhin_0.jpg",
		passiveName: "Whisper",
		passiveDescription: "Jhin's hand cannon, Whisper, is a precise instrument designed to deal superior damage. It fires at a fixed rate and carries only four shots. Jhin imbues the final bullet with dark magics to critically strike and deal bonus execute damage. Whenever Whisper crits, it inspires Jhin with a burst of Move Speed.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Jhin_P.png",
		spells:
			[
				{
					spellId: "JhinQ",
					spellName: "Dancing Grenade",
					spellDescription: "Jhin launches a magical cartridge at an enemy. It can hit up to four targets and gains damage each time it kills.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JhinQ.png",
				}, {
					spellId: "JhinW",
					spellName: "Deadly Flourish",
					spellDescription: "Jhin brandishes his cane, firing a single shot with incredible range. It pierces through minions and monsters, but stops on the first champion hit. If the target was recently struck by Jhin's allies, lotus traps, or damaged by Jhin, they are rooted.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JhinW.png",
				}, {
					spellId: "JhinE",
					spellName: "Captive Audience",
					spellDescription: "Jhin places an invisible lotus trap that blooms when walked over. It slows nearby enemies before dealing damage with an explosion of serrated petals. Beauty in Death - When Jhin kills an enemy champion, a lotus trap will bloom near their corpse.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JhinE.png",
				}, {
					spellId: "JhinR",
					spellName: "Curtain Call",
					spellDescription: "Jhin channels, transforming Whisper into a shoulder-mounted mega-cannon. It is able to fire 4 super shots at extreme range that pierce through minions and monsters, but stop on the first champion impacted. Whisper cripples enemies hit, which slows them and deals execute damage. The 4th shot is perfectly crafted, epically powerful, and guaranteed to critically strike.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JhinR.png",
				},
			],
		roles: "Marksman, Mage",
		lane: ""
	},
	{
		id: "Jayce",
		name: "Jayce",
		title: "the Defender of Tomorrow",
		lore: "Jayce is a brilliant inventor who has pledged his life to the defense of Piltover and its unyielding pursuit of progress. With his transforming hextech hammer in hand, Jayce uses his strength, courage, and considerable intelligence to protect his hometown. While revered throughout the city as a hero, he hasn't taken well to the attention heroism brings. Still, Jayce's heart is in the right place, and even those who envy his natural skills are grateful for his protection in the City of Progress.",
		skins: "0, 1, 2, 3, 4, 5, 15, 24, 25",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jayce_0.jpg",
		passiveName: "Hextech Capacitor",
		passiveDescription: "When Jayce swaps weapons he gains Move Speed for a short duration.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Jayce_Passive.png",
		spells:
			[
				{
					spellId: "JayceToTheSkies",
					spellName: "To the Skies! / Shock Blast",
					spellDescription: "Hammer Stance: Leaps to an enemy dealing physical damage and slowing enemies. Cannon Stance: Fires an orb of electricity that detonates upon hitting an enemy (or reaching the end of its path) dealing physical damage to all enemies hit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JayceToTheSkies.png",
				}, {
					spellId: "JayceStaticField",
					spellName: "Lightning Field / Hyper Charge",
					spellDescription: "Hammer Stance: Passive: Restores Mana per strike. Active: Creates a field of lightning damaging nearby enemies for several seconds. Cannon Stance: Gains a burst of energy, increasing Attack Speed to maximum for several attacks.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JayceStaticField.png",
				}, {
					spellId: "JayceThunderingBlow",
					spellName: "Thundering Blow / Acceleration Gate",
					spellDescription: "Hammer Stance: Deals magic damage to an enemy and knocks them back a short distance. Cannon Stance: Deploys an Acceleration Gate increasing the Move Speed of all allied champions who pass through it. If Shock Blast is fired through the gate the missile speed, range, and damage will increase.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JayceThunderingBlow.png",
				}, {
					spellId: "JayceStanceHtG",
					spellName: "Mercury Cannon / Mercury Hammer",
					spellDescription: "Hammer Stance: Transforms the Mercury Hammer into the Mercury Cannon gaining new abilities and increased range. The first attack in this form reduces the target's Armor and Magic Resist. Cannon Stance: Transforms the Mercury Cannon into the Mercury Hammer gaining new abilities and increasing Armor and Magic Resist. The first attack in this form deals additional magic damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JayceStanceHtG.png",
				},
			],
		roles: "Fighter, Marksman",
		lane: ""
	},
	{
		id: "Karma",
		name: "Karma",
		title: "the Enlightened One",
		lore: "No mortal exemplifies the spiritual traditions of Ionia more than Karma. She is the living embodiment of an ancient soul reincarnated countless times, carrying all her accumulated memories into each new life, and blessed with power that few can comprehend. She has done her best to guide her people in recent times of crisis, though she knows that peace and harmony may come only at a considerable cost—both to her, and to the land she holds most dear.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 19, 26, 27, 44",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Karma_0.jpg",
		passiveName: "Gathering Fire",
		passiveDescription: "Karma's damaging abilities will reduce the cooldown of Mantra.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Karma_Passive.png",
		spells:
			[
				{
					spellId: "KarmaQ",
					spellName: "Inner Flame",
					spellDescription: "Karma sends forth a ball of spirit energy that explodes and deals damage upon hitting an enemy unit. Mantra Bonus: In addition to the explosion, Mantra increases the destructive power of her Inner Flame, creating a cataclysm which deals damage after a short delay.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KarmaQ.png",
				}, {
					spellId: "KarmaSpiritBind",
					spellName: "Focused Resolve",
					spellDescription: "Karma creates a tether between herself and a targeted enemy, dealing damage and revealing them. If the tether is not broken, the enemy will be rooted and damaged again. Mantra Bonus: Karma strengthens the link, healing herself and extending the root duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KarmaSpiritBind.png",
				}, {
					spellId: "KarmaSolKimShield",
					spellName: "Inspire",
					spellDescription: "Karma summons a protective shield that absorbs incoming damage and increases the Move Speed of the protected ally. Mantra Bonus: Energy radiates out from her target, strengthening the initial shield and applying Inspire to nearby allied champions.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KarmaSolKimShield.png",
				}, {
					spellId: "KarmaMantra",
					spellName: "Mantra",
					spellDescription: "Karma empowers her next ability to do an additional effect. Mantra is available at level 1 and does not require a skill point.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KarmaMantra.png",
				},
			],
		roles: "Mage, Support",
		lane: ""
	},
	{
		id: "Kalista",
		name: "Kalista",
		title: "the Spear of Vengeance",
		lore: "A specter of wrath and retribution, Kalista is the undying spirit of vengeance, an armored nightmare summoned from the Shadow Isles to hunt deceivers and traitors. The betrayed may cry out in blood to be avenged, but Kalista only answers those willing to pay with their very souls. Those who become the focus of Kalista's wrath should make their final peace, for any pact sealed with this grim hunter can only end with the cold, piercing fire of her soul-spears.",
		skins: "0, 1, 2, 3, 5",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kalista_0.jpg",
		passiveName: "Martial Poise",
		passiveDescription: "Enter a movement command while winding up Kalista's basic attack or Pierce to lunge a short distance when she launches her attack.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Kalista_Passive.png",
		spells:
			[
				{
					spellId: "KalistaMysticShot",
					spellName: "Pierce",
					spellDescription: "Throw a fast moving spear that passes through enemies it kills.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KalistaMysticShot.png",
				}, {
					spellId: "KalistaW",
					spellName: "Sentinel",
					spellDescription: "Gain bonus damage when Kalista and her Oathsworn strike the same target. Activate to send a soul to scout out the path, revealing the area in front of it.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KalistaW.png",
				}, {
					spellId: "KalistaExpungeWrapper",
					spellName: "Rend",
					spellDescription: "Attacks impale their targets with spears. Activate to rip the spears out, slowing and dealing escalating damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KalistaExpungeWrapper.png",
				}, {
					spellId: "KalistaRx",
					spellName: "Fate's Call",
					spellDescription: "Kalista teleports the Oathsworn ally to herself. They gain the ability to dash toward a position, knocking enemy champions back.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KalistaRx.png",
				},
			],
		roles: "Marksman",
		lane: ""
	},
	{
		id: "Kaisa",
		name: "Kai'Sa",
		title: "Daughter of the Void",
		lore: "Claimed by the Void when she was only a child, Kai'Sa managed to survive through sheer tenacity and strength of will. Her experiences have made her a deadly hunter and, to some, the harbinger of a future they would rather not live to see. Having entered into an uneasy symbiosis with a living Void carapace, the time will soon come when she must decide whether to forgive those mortals who would call her a monster, and defeat the coming darkness together… or simply to forget, as the Void consumes the world that left her behind.",
		skins: "0, 1, 14, 15, 16, 17, 26, 27, 29, 39, 40",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kaisa_0.jpg",
		passiveName: "Second Skin",
		passiveDescription: "Kai'Sa's basic attacks stack Plasma, dealing increasing bonus magic damage. Allies' immobilizing effects help stack Plasma. Additionally, Kai'Sa's item purchases upgrade her basic spells to have more powerful properties.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Kaisa_Passive.png",
		spells:
			[
				{
					spellId: "KaisaQ",
					spellName: "Icathian Rain",
					spellDescription: "Kai'Sa shoots a swarm of missiles that seek out nearby targets. Living Weapon: Icathian Rain is upgraded to shoot more missiles.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KaisaQ.png",
				}, {
					spellId: "KaisaW",
					spellName: "Void Seeker",
					spellDescription: "Kai'Sa shoots a long range missile, marking enemies with her passive. Living Weapon: Void Seeker is upgraded to apply more passive marks and reduce cooldown on champion hit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KaisaW.png",
				}, {
					spellId: "KaisaE",
					spellName: "Supercharge",
					spellDescription: "Kai'Sa briefly increases her Move Speed, then increases her Attack Speed. Living Weapon: Supercharge is upgraded to briefly grant Invisibility.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KaisaE.png",
				}, {
					spellId: "KaisaR",
					spellName: "Killer Instinct",
					spellDescription: "Kai'Sa dashes near an enemy champion.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KaisaR.png",
				},
			],
		roles: "Marksman",
		lane: ""
	},
	{
		id: "Karthus",
		name: "Karthus",
		title: "the Deathsinger",
		lore: "The harbinger of oblivion, Karthus is an undying spirit whose haunting songs are a prelude to the horror of his nightmarish appearance. The living fear the eternity of undeath, but Karthus sees only beauty and purity in its embrace, a perfect union of life and death. When Karthus emerges from the Shadow Isles, it is to bring the joy of death to mortals, an apostle of the unliving.",
		skins: "0, 1, 2, 3, 4, 5, 9, 10, 17",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Karthus_0.jpg",
		passiveName: "Death Defied",
		passiveDescription: "Upon dying, Karthus enters a spirit form that allows him to continue casting spells.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Karthus_Passive.png",
		spells:
			[
				{
					spellId: "KarthusLayWasteA1",
					spellName: "Lay Waste",
					spellDescription: "Karthus unleashes a delayed blast at a location, dealing damage to nearby enemies. Deals increased damage to isolated enemies. ",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KarthusLayWasteA1.png",
				}, {
					spellId: "KarthusWallOfPain",
					spellName: "Wall of Pain",
					spellDescription: "Karthus creates a passable screen of leeching energy. Any enemy units that walk through the screen have their Move Speed and Magic Resist reduced for a period.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KarthusWallOfPain.png",
				}, {
					spellId: "KarthusDefile",
					spellName: "Defile",
					spellDescription: "Karthus passively steals energy from his victims, gaining Mana on each kill. Alternatively, Karthus can surround himself in the souls of his prey, dealing damage to nearby enemies, but quickly draining his own Mana.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KarthusDefile.png",
				}, {
					spellId: "KarthusFallenOne",
					spellName: "Requiem",
					spellDescription: "After channeling for 3 seconds, Karthus deals damage to all enemy champions.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KarthusFallenOne.png",
				},
			],
		roles: "Mage",
		lane: ""
	},
	{
		id: "Kassadin",
		name: "Kassadin",
		title: "the Void Walker",
		lore: "Cutting a burning swath through the darkest places of the world, Kassadin knows his days are numbered. A widely traveled Shuriman guide and adventurer, he had chosen to raise a family among the peaceful southern tribes—until the day his village was consumed by the Void. He vowed vengeance, combining a number of arcane artifacts and forbidden technologies for the struggle ahead. Finally, Kassadin set out for the wastelands of Icathia, ready to face any monstrous Void-construct in his search for their self-proclaimed prophet, Malzahar.",
		skins: "0, 1, 2, 3, 4, 5, 6, 14, 15",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kassadin_0.jpg",
		passiveName: "Void Stone",
		passiveDescription: "Kassadin takes reduced magic damage and ignores unit collision.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Kassadin_Passive.png",
		spells:
			[
				{
					spellId: "NullLance",
					spellName: "Null Sphere",
					spellDescription: "Kassadin fires an orb of void energy at a target, dealing damage and interrupting channels. The excess energy forms around himself, granting a temporary shield that absorbs magic damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NullLance.png",
				}, {
					spellId: "NetherBlade",
					spellName: "Nether Blade",
					spellDescription: "Passive: Kassadin's basic attacks deal bonus magic damage. Active: Kassadin's next basic attack deals significant bonus magic damage and restores Mana.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NetherBlade.png",
				}, {
					spellId: "ForcePulse",
					spellName: "Force Pulse",
					spellDescription: "Kassadin draws energy from spells cast in his vicinity. Upon charging up, Kassadin can use Force Pulse to damage and slow enemies in a cone in front of him.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ForcePulse.png",
				}, {
					spellId: "RiftWalk",
					spellName: "Riftwalk",
					spellDescription: "Kassadin teleports to a nearby location dealing damage to nearby enemy units. Multiple Riftwalks in a short period of time cost additional Mana but also deal additional damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RiftWalk.png",
				},
			],
		roles: "Assassin, Mage",
		lane: ""
	},
	{
		id: "Kennen",
		name: "Kennen",
		title: "the Heart of the Tempest",
		lore: "More than just the lightning-quick enforcer of Ionian balance, Kennen is the only yordle member of the Kinkou. Despite his small, furry stature, he is eager to take on any threat with a whirling storm of shuriken and boundless enthusiasm. Alongside his master Shen, Kennen patrols the spirit realm, employing devastating electrical energy to strike down his enemies.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 23",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kennen_0.jpg",
		passiveName: "Mark of the Storm",
		passiveDescription: "Kennen stuns enemies he hits 3 times with his abilities.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Kennen_Passive.png",
		spells:
			[
				{
					spellId: "KennenShurikenHurlMissile1",
					spellName: "Thundering Shuriken",
					spellDescription: "Kennen throws a fast moving shuriken towards a location, causing damage and adding a Mark of the Storm to any opponent that it hits.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KennenShurikenHurlMissile1.png",
				}, {
					spellId: "KennenBringTheLight",
					spellName: "Electrical Surge",
					spellDescription: "Kennen passively deals extra damage and adds a Mark of the Storm to his target every few attacks, and he can activate this ability to damage and add another Mark of the Storm to targets who are already marked.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KennenBringTheLight.png",
				}, {
					spellId: "KennenLightningRush",
					spellName: "Lightning Rush",
					spellDescription: "Kennen morphs into a lightning form, enabling him to pass through units and apply a Mark of the Storm. Kennen gains Move Speed when entering this form, and attack speed when leaving it.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KennenLightningRush.png",
				}, {
					spellId: "KennenShurikenStorm",
					spellName: "Slicing Maelstrom",
					spellDescription: "Kennen summons a storm that strikes at nearby enemy champions for magical damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KennenShurikenStorm.png",
				},
			],
		roles: "Mage, Marksman",
		lane: ""
	},
	{
		id: "Katarina",
		name: "Katarina",
		title: "the Sinister Blade",
		lore: "Decisive in judgment and lethal in combat, Katarina is a Noxian assassin of the highest caliber. Eldest daughter to the legendary General Du Couteau, she made her talents known with swift kills against unsuspecting enemies. Her fiery ambition has driven her to pursue heavily-guarded targets, even at the risk of endangering her allies—but no matter the mission, Katarina will not hesitate to execute her duty amid a whirlwind of serrated daggers.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 21, 29, 37",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Katarina_0.jpg",
		passiveName: "Voracity",
		passiveDescription: "Whenever an enemy champion dies that Katarina has damaged recently, her remaining ability cooldowns are dramatically reduced. If Katarina picks up a Dagger, she uses it to slash through all nearby enemies, dealing magic damage.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Katarina_Passive.png",
		spells:
			[
				{
					spellId: "KatarinaQ",
					spellName: "Bouncing Blade",
					spellDescription: "Katarina throws a Dagger at the target that then bounces to nearby enemies before ricocheting onto the ground.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KatarinaQ.png",
				}, {
					spellId: "KatarinaW",
					spellName: "Preparation",
					spellDescription: "Katarina gains a burst of Move Speed, tossing a Dagger into the air directly above herself.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KatarinaW.png",
				}, {
					spellId: "KatarinaEWrapper",
					spellName: "Shunpo",
					spellDescription: "Katarina blinks to the target, striking it if its an enemy, or striking the nearest enemy otherwise.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KatarinaEWrapper.png",
				}, {
					spellId: "KatarinaR",
					spellName: "Death Lotus",
					spellDescription: "Katarina becomes a flurry of blades, dealing massive magic damage while she channels to the 3 nearest enemy champions.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KatarinaR.png",
				},
			],
		roles: "Assassin, Mage",
		lane: ""
	},
	{
		id: "Kayn",
		name: "Kayn",
		title: "the Shadow Reaper",
		lore: "A peerless practitioner of lethal shadow magic, Shieda Kayn battles to achieve his true destiny—to one day lead the Order of Shadow into a new era of Ionian supremacy. He wields the sentient darkin weapon Rhaast, undeterred by its creeping corruption of his body and mind. There are only two possible outcomes: either Kayn bends the weapon to his will... or the malevolent blade consumes him completely, paving the way for the destruction of all Runeterra.",
		skins: "0, 1, 2, 8, 9, 15",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kayn_0.jpg",
		passiveName: "The Darkin Scythe",
		passiveDescription: "Kayn wields an ancient weapon and fights Rhaast, the darkin within it, for control. Either the Darkin will triumph, or Kayn will master Rhaast and become the Shadow Assassin. Darkin: Heal for a percentage of spell damage dealt to champions. Shadow Assassin: For the first few seconds in combat with enemy champions, deal bonus damage.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Kayn_Passive_Primary.png",
		spells:
			[
				{
					spellId: "KaynQ",
					spellName: "Reaping Slash",
					spellDescription: "Kayn dashes, then slashes. Both deal damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KaynQ.png",
				}, {
					spellId: "KaynW",
					spellName: "Blade's Reach",
					spellDescription: "Kayn damages and slows targets in a line.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KaynW.png",
				}, {
					spellId: "KaynE",
					spellName: "Shadow Step",
					spellDescription: "Kayn can walk through terrain.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KaynE.png",
				}, {
					spellId: "KaynR",
					spellName: "Umbral Trespass",
					spellDescription: "Kayn hides in an enemy's body, dealing massive damage when he bursts out.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KaynR.png",
				},
			],
		roles: "Fighter, Assassin",
		lane: ""
	},
	{
		id: "Kayle",
		name: "Kayle",
		title: "the Righteous",
		lore: "Born to a Targonian Aspect at the height of the Rune Wars, Kayle honored her mother's legacy by fighting for justice on wings of divine flame. She and her twin sister Morgana were the protectors of Demacia for many years—until Kayle became disillusioned with the repeated failings of mortals, and abandoned this realm altogether. Still, legends are told of her punishing the unjust with her fiery swords, and many hope that she will one day return…",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 24, 33, 42",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kayle_0.jpg",
		passiveName: "Divine Ascent",
		passiveDescription: "Kayle's attacks are empowered by the heavens as she levels up and spends skill points. Her wings are lit aflame as she progressively gains Attack Speed, Move Speed, Attack Range, and waves of fire on her attacks.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Kayle_P.png",
		spells:
			[
				{
					spellId: "KayleQ",
					spellName: "Radiant Blast",
					spellDescription: "Kayle conjures a portal, summoning a celestial sword that pierces through enemies, slowing, damaging, and reducing the resistances of all hit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KayleQ.png",
				}, {
					spellId: "KayleW",
					spellName: "Celestial Blessing",
					spellDescription: "Blessed by the divine, Kayle heals and grants Move Speed to herself and the nearest ally.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KayleW.png",
				}, {
					spellId: "KayleE",
					spellName: "Starfire Spellblade",
					spellDescription: "Passive: Kayle's celestial sword, Virtue, deals bonus magic damage to enemies she attacks. Active: Kayle's next attack smites her target with celestial fire, dealing bonus damage proportionate to their missing health.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KayleE.png",
				}, {
					spellId: "KayleR",
					spellName: "Divine Judgment",
					spellDescription: "Kayle makes an ally invulnerable and calls upon former Aspects of Justice to purify the area around her target with a holy rain of swords.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KayleR.png",
				},
			],
		roles: "Fighter, Support",
		lane: ""
	},
	{
		id: "Khazix",
		name: "Kha'Zix",
		title: "the Voidreaver",
		lore: "The Void grows, and the Void adapts—in none of its myriad spawn are these truths more apparent than Kha'Zix. Evolution drives the core of this mutating horror, born to survive and to slay the strong. Where it struggles to do so, it grows new, more effective ways to counter and kill its prey. Initially a mindless beast, Kha'Zix's intelligence has developed as much as its form. Now, the creature plans out its hunts, and even utilizes the visceral terror it engenders in its victims.",
		skins: "0, 1, 2, 3, 4, 11, 60, 69",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Khazix_0.jpg",
		passiveName: "Unseen Threat",
		passiveDescription: "Nearby enemies that are Isolated from their allies are marked. Kha'Zix's abilities have interactions with Isolated targets. When Kha'Zix is not visible to the enemy team, he gains Unseen Threat, causing his next basic attack against an enemy champion to deal bonus magic damage and slow them for a few seconds.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Khazix_P.png",
		spells:
			[
				{
					spellId: "KhazixQ",
					spellName: "Taste Their Fear",
					spellDescription: "Deals physical damage to the target. Damage increased on Isolated targets. If he chooses to Evolve Reaper Claws, this refunds a percent of it's cooldown against Isolated targets. Kha'Zix also gains increased range on his basic attacks and Taste Their Fear.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KhazixQ.png",
				}, {
					spellId: "KhazixW",
					spellName: "Void Spike",
					spellDescription: "Kha'Zix fires exploding spikes that deal physical damage to enemies hit. Kha'Zix is healed if he is also within the explosion radius. If he chooses to Evolve Spike Racks, Void Spike now fires three spikes in a cone, slow enemies hit, and reveals enemy champions hit for 2 seconds. Isolated targets are slowed for extra.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KhazixW.png",
				}, {
					spellId: "KhazixE",
					spellName: "Leap",
					spellDescription: "Kha'Zix leaps to an area, dealing physical damage upon landing. If he chooses to Evolve Wings, Leap's range increases by 200 and the cooldown resets on champion kill or assist.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KhazixE.png",
				}, {
					spellId: "KhazixR",
					spellName: "Void Assault",
					spellDescription: "Each rank allows Kha'Zix to evolve one of his abilities, giving it a unique additional effect. When activated, Kha'Zix becomes Invisible, triggering Unseen Threat and increasing Move Speed. If he chooses to Evolve Adaptive Cloaking, Void Assault gains increased Invisibility duration, and an additional use.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KhazixR.png",
				},
			],
		roles: "Assassin",
		lane: ""
	},
	{
		id: "Kled",
		name: "Kled",
		title: "the Cantankerous Cavalier",
		lore: "A warrior as fearless as he is ornery, the yordle Kled embodies the furious bravado of Noxus. He is an icon beloved by the empire's soldiers, distrusted by its officers, and loathed by the nobility. Many claim Kled has fought in every campaign the legions have waged, has “acquired” every military title, and has never once backed down from a fight. Though the truth of the matter is often questionable, one part of his legend is undeniable: Charging into battle on his un-trusty steed, Skaarl, Kled fights to protect what's his… and to take whatever he can get.",
		skins: "0, 1, 2, 9",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kled_0.jpg",
		passiveName: "Skaarl, the Cowardly Lizard",
		passiveDescription: "Kled rides his trusty steed, Skaarl, who takes damage for him. When Skaarl's health depletes, Kled dismounts. While dismounted, Kled's abilities change and he deals less damage to champions. Kled can restore Skaarl's courage by fighting enemies. At maximum courage, Kled remounts with a portion of Skaarl's health.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Kled_P.png",
		spells:
			[
				{
					spellId: "KledQ",
					spellName: "Bear Trap on a Rope",
					spellDescription: "Kled throws a bear trap that damages and hooks an enemy champion. If shackled for a short duration, the target takes additional physical damage and is yanked toward Kled. When dismounted, this ability is replaced by Pocket Pistol, a ranged gun blast that knocks back Kled and restores courage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KledQ.png",
				}, {
					spellId: "KledW",
					spellName: "Violent Tendencies",
					spellDescription: "Kled gains massive attack speed for four attacks. The fourth attack deals more damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KledW.png",
				}, {
					spellId: "KledE",
					spellName: "Jousting",
					spellDescription: "Kled dashes, dealing physical damage and gaining a short burst of speed. Kled can cast this ability again to dash back through his initial target, dealing the same damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KledE.png",
				}, {
					spellId: "KledR",
					spellName: "Chaaaaaaaarge!!!",
					spellDescription: "Kled and Skaarl charge to a location, leaving a speed-granting trail behind them and gaining a shield. Skaarl locks onto and rams the first enemy champion encountered.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KledR.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "KogMaw",
		name: "Kog'Maw",
		title: "the Mouth of the Abyss",
		lore: "Belched forth from a rotting Void incursion deep in the wastelands of Icathia, Kog'Maw is an inquisitive yet putrid creature with a caustic, gaping mouth. This particular Void-spawn needs to gnaw and drool on anything within reach to truly understand it. Though not inherently evil, Kog'Maw's beguiling naiveté is dangerous, as it often precedes a feeding frenzy—not for sustenance, but to satisfy its unending curiosity.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 19, 28, 37",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/KogMaw_0.jpg",
		passiveName: "Icathian Surprise",
		passiveDescription: "4 seconds after dying, Kogmaw explodes, dealing true damage to surrounding enemies.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/KogMaw_IcathianSurprise.png",
		spells:
			[
				{
					spellId: "KogMawQ",
					spellName: "Caustic Spittle",
					spellDescription: "Kog'Maw launches a corrosive projectile which deals magic damage and corrodes the target's armor and magic resist for a short time. Kog'Maw also gains additional attack speed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KogMawQ.png",
				}, {
					spellId: "KogMawBioArcaneBarrage",
					spellName: "Bio-Arcane Barrage",
					spellDescription: "Kog'Maw's attacks gain range and deal a percent of the target's maximum health as magic damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KogMawBioArcaneBarrage.png",
				}, {
					spellId: "KogMawVoidOoze",
					spellName: "Void Ooze",
					spellDescription: "Kog'Maw launches a peculiar ooze which damages all enemies it passes through and leaves a trail which slows enemies who stand on it.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KogMawVoidOoze.png",
				}, {
					spellId: "KogMawLivingArtillery",
					spellName: "Living Artillery",
					spellDescription: "Kog'Maw fires an artillery shell at a great distance dealing magic damage (increased significantly on low health enemies) and revealing non-stealthed targets. Additionally, multiple Living Artilleries in a short period of time cause them to cost additional Mana.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KogMawLivingArtillery.png",
				},
			],
		roles: "Marksman, Mage",
		lane: ""
	},
	{
		id: "Kindred",
		name: "Kindred",
		title: "The Eternal Hunters",
		lore: "Separate, but never parted, Kindred represents the twin essences of death. Lamb's bow offers a swift release from the mortal realm for those who accept their fate. Wolf hunts down those who run from their end, delivering violent finality within his crushing jaws. Though interpretations of Kindred's nature vary across Runeterra, every mortal must choose the true face of their death.",
		skins: "0, 1, 2, 3, 12",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kindred_0.jpg",
		passiveName: "Mark of the Kindred",
		passiveDescription: "Kindred can mark targets to Hunt. Successfully completing a Hunt permanently empowers Kindred's basic abilities. Every 4 hunts completed also increases Kindred's basic attack range.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Kindred_Passive.png",
		spells:
			[
				{
					spellId: "KindredQ",
					spellName: "Dance of Arrows",
					spellDescription: "Kindred tumbles and shoots up to three arrows at nearby targets.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KindredQ.png",
				}, {
					spellId: "KindredW",
					spellName: "Wolf's Frenzy",
					spellDescription: "Wolf enrages and attacks enemies around him. Lamb passively gains stacks by moving and attacking. When fully charged, Lamb's next attack restores health.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KindredW.png",
				}, {
					spellId: "KindredEWrapper",
					spellName: "Mounting Dread",
					spellDescription: "Lamb fires a carefully placed shot, slowing the target. If Lamb attacks the target two more times, her third attack instead directs Wolf to pounce on the enemy, savaging them for massive damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KindredEWrapper.png",
				}, {
					spellId: "KindredR",
					spellName: "Lamb's Respite",
					spellDescription: "Lamb grants all living things inside a zone a respite from death. Until the effect ends, nothing can die. At the end, units are healed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KindredR.png",
				},
			],
		roles: "Marksman",
		lane: ""
	},
	{
		id: "KSante",
		name: "K'Sante",
		title: "the Pride of Nazumah",
		lore: "Defiant and courageous, K'Sante battles colossal beasts and ruthless Ascended to protect his home of Nazumah, a coveted oasis amid the sands of Shurima. But after a falling-out with his former partner, K'Sante realizes that in order to become a warrior worthy of leading his city, he must temper his single-minded drive for success. Only then can he avoid falling prey to his own pride and find the wisdom he needs to defeat the vicious monsters threatening his people.",
		skins: "0, 1, 2",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/KSante_0.jpg",
		passiveName: "Dauntless Instinct",
		passiveDescription: "K'Sante's Abilities mark targets to take more damage on his next Attack.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Icons_KSante_P.png",
		spells:
			[
				{
					spellId: "KSanteQ",
					spellName: "Ntofo Strikes",
					spellDescription: "Strike a weapon forward, damaging and slowing all enemies in a short line. On hit, grants a stack for a few seconds. At 2 stacks, this skill fires a shockwave that pulls enemies in.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KSanteQ.png",
				}, {
					spellId: "KSanteW",
					spellName: "Path Maker",
					spellDescription: "K'Sante charges up before dashing. K'Sante is unstoppable and takes less damage while charging. Any targets hit by the dash are knocked to the end of the dash and stunned.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KSanteW.png",
				}, {
					spellId: "KSanteE",
					spellName: "Footwork",
					spellDescription: "K'Sante will dash to an ally and both will gain a shield. If there is no ally, K'Sante will still dash to the location at a reduced range and gain a shield.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KSanteE.png",
				}, {
					spellId: "KSanteR",
					spellName: "All Out",
					spellDescription: "K'Sante smashes an enemy away. If the enemy hits a wall they will go through the wall taking more damage. K'Sante will appear behind the target and goes All Out by shredding his defenses but greatly increasing his damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/KSanteR.png",
				},
			],
		roles: "Tank, Fighter",
		lane: ""
	},
	{
		id: "Leblanc",
		name: "LeBlanc",
		title: "the Deceiver",
		lore: "Mysterious even to other members of the Black Rose cabal, LeBlanc is but one of many names for a pale woman who has manipulated people and events since the earliest days of Noxus. Using her magic to mirror herself, the sorceress can appear to anyone, anywhere, and even be in many places at once. Always plotting just out of sight, LeBlanc's true motives are as inscrutable as her shifting identity.",
		skins: "0, 1, 2, 3, 4, 5, 12, 19, 20, 29, 33, 35, 45",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Leblanc_0.jpg",
		passiveName: "Mirror Image",
		passiveDescription: "When LeBlanc drops below 40% Health, she becomes invisible for 1 second and creates a Mirror Image that deals no damage and lasts for up to 8 seconds.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/LeBlancP.png",
		spells:
			[
				{
					spellId: "LeblancQ",
					spellName: "Sigil of Malice",
					spellDescription: "LeBlanc projects a sigil, dealing damage and marking the target for 3.5 seconds. Damaging the marked target with an ability detonates the sigil, dealing additional damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LeblancQ.png",
				}, {
					spellId: "LeblancW",
					spellName: "Distortion",
					spellDescription: "LeBlanc dashes to a location, dealing damage to enemies near her destination. For the next 4 seconds, activate Distortion again to return LeBlanc to her starting location.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LeblancW.png",
				}, {
					spellId: "LeblancE",
					spellName: "Ethereal Chains",
					spellDescription: "LeBlanc launches a chain that shackles the first enemy hit. If the target remains shackled for 1.5 seconds, LeBlanc roots them and deals additional damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LeblancE.png",
				}, {
					spellId: "LeblancR",
					spellName: "Mimic",
					spellDescription: "LeBlanc casts a mimicked version of one of her basic spells.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LeblancR.png",
				},
			],
		roles: "Assassin, Mage",
		lane: ""
	},
	{
		id: "LeeSin",
		name: "Lee Sin",
		title: "the Blind Monk",
		lore: "A master of Ionia's ancient martial arts, Lee Sin is a principled fighter who channels the essence of the dragon spirit to face any challenge. Though he lost his sight many years ago, the warrior-monk has devoted his life to protecting his homeland against any who would dare upset its sacred balance. Enemies who underestimate his meditative demeanor will endure his fabled burning fists and blazing roundhouse kicks.",
		skins: "0, 1, 2, 3, 4, 5, 6, 10, 11, 12, 27, 28, 29, 31, 39, 41",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/LeeSin_0.jpg",
		passiveName: "Flurry",
		passiveDescription: "After Lee Sin uses an ability, his next 2 basic attacks gain Attack Speed and return Energy.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/LeeSinPassive.png",
		spells:
			[
				{
					spellId: "BlindMonkQOne",
					spellName: "Sonic Wave / Resonating Strike",
					spellDescription: "Sonic Wave: Lee Sin projects a discordant wave of sound to locate his enemies, dealing physical damage to the first enemy it encounters. If Sonic Wave hits, Lee Sin can cast Resonating Strike for the next 3 seconds. Resonating Strike: Lee Sin dashes to the enemy hit by Sonic Wave, dealing physical damage based on the target's missing Health.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BlindMonkQOne.png",
				}, {
					spellId: "BlindMonkWOne",
					spellName: "Safeguard / Iron Will",
					spellDescription: "Safeguard: Lee Sin rushes to target ally, shielding himself from damage. If the ally is a champion, they are also shielded. After using Safeguard, Lee Sin can cast Iron Will for the next 3 seconds. Iron Will: Lee Sin's intense training allows him to thrive in battle. For 4 seconds, Lee Sin gains Life Steal and Spell Vamp.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BlindMonkWOne.png",
				}, {
					spellId: "BlindMonkEOne",
					spellName: "Tempest / Cripple",
					spellDescription: "Tempest: Lee Sin smashes the ground, sending out a shockwave that deals magic damage and reveals enemy units hit. If Tempest hits an enemy, Lee Sin can cast cripple for the next 3 seconds. Cripple: Lee Sin cripples nearby enemies damaged by Tempest, reducing their Move Speed for 4 seconds. Move Speed recovers gradually over the duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BlindMonkEOne.png",
				}, {
					spellId: "BlindMonkRKick",
					spellName: "Dragon's Rage",
					spellDescription: "Lee Sin performs a powerful roundhouse kick launching his target back, dealing physical damage to the target and any enemies they collide with. Enemies the target collides with are knocked into the air for a short duration. This technique was taught to him by Jesse Perring, although Lee Sin does not kick players off the map.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BlindMonkRKick.png",
				},
			],
		roles: "Fighter, Assassin",
		lane: ""
	},
	{
		id: "Leona",
		name: "Leona",
		title: "the Radiant Dawn",
		lore: "Imbued with the fire of the sun, Leona is a holy warrior of the Solari who defends Mount Targon with her Zenith Blade and the Shield of Daybreak. Her skin shimmers with starfire while her eyes burn with the power of the celestial Aspect within her. Armored in gold and bearing a terrible burden of ancient knowledge, Leona brings enlightenment to some, death to others.",
		skins: "0, 1, 2, 3, 4, 8, 9, 10, 11, 12, 21, 22, 23, 33, 34",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Leona_0.jpg",
		passiveName: "Sunlight",
		passiveDescription: "Damaging spells afflict enemies with Sunlight for 1.5 seconds. When allied Champions deal damage to those targets, they consume the Sunlight to deal additional magic damage.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/LeonaSunlight.png",
		spells:
			[
				{
					spellId: "LeonaShieldOfDaybreak",
					spellName: "Shield of Daybreak",
					spellDescription: "Leona uses her shield to perform her next basic attack, dealing bonus magic damage and stunning the target.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LeonaShieldOfDaybreak.png",
				}, {
					spellId: "LeonaSolarBarrier",
					spellName: "Eclipse",
					spellDescription: "Leona raises her shield to gain Damage Reduction, Armor, and Magic Resist. When the duration first ends, if there are nearby enemies, she will deal magic damage to them and prolong the duration of the effect.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LeonaSolarBarrier.png",
				}, {
					spellId: "LeonaZenithBlade",
					spellName: "Zenith Blade",
					spellDescription: "Leona projects a solar image of her sword, dealing magic damage to all enemies in a line. When the image fades, the last enemy champion struck will be briefly immobilized and Leona will dash to them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LeonaZenithBlade.png",
				}, {
					spellId: "LeonaSolarFlare",
					spellName: "Solar Flare",
					spellDescription: "Leona calls down a beam of solar energy, dealing damage to enemies in an area. Enemies in the center of the area are stunned, while enemies on the outside are slowed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LeonaSolarFlare.png",
				},
			],
		roles: "Tank, Support",
		lane: ""
	},
	{
		id: "Lucian",
		name: "Lucian",
		title: "the Purifier",
		lore: "Lucian, a Sentinel of Light, is a grim hunter of undying spirits, pursuing them relentlessly and annihilating them with his twin relic pistols. After the wraith Thresh slew his wife, Lucian embarked on the path of vengeance—but even with her return to life, his rage is undiminished. Merciless and single-minded, Lucian will stop at nothing to protect the living from the long-dead horrors of the Black Mist.",
		skins: "0, 1, 2, 6, 7, 8, 9, 18, 19, 25, 31, 40",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lucian_0.jpg",
		passiveName: "Lightslinger",
		passiveDescription: "Whenever Lucian uses an ability, his next attack becomes a double-shot. When Lucian is empowered by another Ally, his next 2 basic attacks will deal bonus magic damage.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Lucian_Passive.png",
		spells:
			[
				{
					spellId: "LucianQ",
					spellName: "Piercing Light",
					spellDescription: "Lucian shoots a bolt of piercing light through a target.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LucianQ.png",
				}, {
					spellId: "LucianW",
					spellName: "Ardent Blaze",
					spellDescription: "Lucian shoots a missile that explodes in a star shape, marking and briefly revealing enemies. Lucian gains Move Speed for attacking marked enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LucianW.png",
				}, {
					spellId: "LucianE",
					spellName: "Relentless Pursuit",
					spellDescription: "Lucian quickly dashes a short distance. Lightslinger attacks reduce Relentless Pursuit's cooldown.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LucianE.png",
				}, {
					spellId: "LucianR",
					spellName: "The Culling",
					spellDescription: "Lucian unleashes a torrent of shots from his weapons.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LucianR.png",
				},
			],
		roles: "Marksman",
		lane: ""
	},
	{
		id: "Lillia",
		name: "Lillia",
		title: "the Bashful Bloom",
		lore: "Intensely shy, the fae fawn Lillia skittishly wanders Ionia's forests. Hiding just out of sight of mortals—whose mysterious natures have long captivated, but intimidated, her—Lillia hopes to discover why their dreams no longer reach the ancient Dreaming Tree. She now travels Ionia with a magical branch in hand, in an effort to find people's unrealized dreams. Only then can Lillia herself bloom and help others untangle their fears to find the sparkle within. Eep!",
		skins: "0, 1, 10",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lillia_0.jpg",
		passiveName: "Dream-Laden Bough",
		passiveDescription: "Hitting a champion or monster with a skill will deal additional max Health damage over time.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Lillia_Icon_Passive.png",
		spells:
			[
				{
					spellId: "LilliaQ",
					spellName: "Blooming Blows",
					spellDescription: "Passively, Lillia gains stacking Move Speed when hitting enemies with spells. She can activate this to deal magic damage to nearby enemies, dealing extra true damage on the edge.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LilliaQ.png",
				}, {
					spellId: "LilliaW",
					spellName: "Watch Out! Eep!",
					spellDescription: "Lillia deals damage in a nearby area, dealing heavy damage in the center.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LilliaW.png",
				}, {
					spellId: "LilliaE",
					spellName: "Swirlseed",
					spellDescription: "Lillia hurls a seed that damages and slows those it lands on. If it doesn't hit anything, it will continue rolling until it hits a wall or target.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LilliaE.png",
				}, {
					spellId: "LilliaR",
					spellName: "Lilting Lullaby",
					spellDescription: "Lillia causes all enemies with Dream Dust on them to become Drowsy before falling asleep. Those enemies will take extra damage on being forcibly woken up.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LilliaR.png",
				},
			],
		roles: "Fighter, Mage",
		lane: ""
	},
	{
		id: "Lissandra",
		name: "Lissandra",
		title: "the Ice Witch",
		lore: "Lissandra's magic twists the pure power of ice into something dark and terrible. With the force of her black ice, she does more than freeze—she impales and crushes those who oppose her. To the terrified denizens of the north, she is known only as ''The Ice Witch.'' The truth is much more sinister: Lissandra is a corruptor of nature who plots to unleash an ice age on the world.",
		skins: "0, 1, 2, 3, 4, 12, 23, 33, 34",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lissandra_0.jpg",
		passiveName: "Iceborn Subjugation",
		passiveDescription: "When an enemy champion dies near Lissandra they become a Frozen Thrall. Frozen Thralls slow nearby enemies and then, after a delay, shatter from the intense cold, dealing magic damage to nearby targets.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Lissandra_Passive.png",
		spells:
			[
				{
					spellId: "LissandraQ",
					spellName: "Ice Shard",
					spellDescription: "Throws a spear of ice that shatters when it hits an enemy, dealing magic damage and slowing Move Speed. Shards pass through the target, dealing the same damage to other enemies hit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LissandraQ.png",
				}, {
					spellId: "LissandraW",
					spellName: "Ring of Frost",
					spellDescription: "Freezes nearby enemies in ice, dealing magic damage and rooting them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LissandraW.png",
				}, {
					spellId: "LissandraE",
					spellName: "Glacial Path",
					spellDescription: "Lissandra creates an ice claw that deals magic damage. Reactivating this ability transports Lissandra to the claw's current location.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LissandraE.png",
				}, {
					spellId: "LissandraR",
					spellName: "Frozen Tomb",
					spellDescription: "If cast on an enemy champion, the target is frozen solid, stunning it. If cast on Lissandra, she encases herself in dark ice, healing herself while becoming untargetable and invulnerable. Dark ice then emanates from the target dealing magic damage to enemies and slowing Move Speed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LissandraR.png",
				},
			],
		roles: "Mage",
		lane: ""
	},
	{
		id: "Lulu",
		name: "Lulu",
		title: "the Fae Sorceress",
		lore: "The yordle mage Lulu is known for conjuring dreamlike illusions and fanciful creatures as she roams Runeterra with her fairy companion Pix. Lulu shapes reality on a whim, warping the fabric of the world, and what she views as the constraints of this mundane, physical realm. While others might consider her magic at best unnatural, and at worst dangerous, she believes everyone could use a touch of enchantment.",
		skins: "0, 1, 2, 3, 4, 5, 6, 14, 15, 26, 27, 37",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lulu_0.jpg",
		passiveName: "Pix, Faerie Companion",
		passiveDescription: "Pix fires magical bolts of energy whenever the champion he's following attacks another enemy unit. These bolts are homing, but can be intercepted by other units.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Lulu_PixFaerieCompanion.png",
		spells:
			[
				{
					spellId: "LuluQ",
					spellName: "Glitterlance",
					spellDescription: "Pix and Lulu each fire a bolt of magical energy that damages and heavily slows all enemies it hits.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LuluQ.png",
				}, {
					spellId: "LuluW",
					spellName: "Whimsy",
					spellDescription: "If cast on an ally, grants them Attack Speed and Move Speed for a short time. If cast on an enemy, turns them into an adorable critter that can't attack or cast spells.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LuluW.png",
				}, {
					spellId: "LuluE",
					spellName: "Help, Pix!",
					spellDescription: "If cast on an ally, commands Pix to jump to an ally and shield them. He then follows them and aids their attacks. If cast on an enemy, commands Pix to jump to an enemy and damage them. He then follows them and grants you vision of that enemy.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LuluE.png",
				}, {
					spellId: "LuluR",
					spellName: "Wild Growth",
					spellDescription: "Lulu enlarges an ally, knocking nearby enemies into the air and granting the ally a large amount of bonus health. For the next few seconds, that ally gains an aura that slows nearby enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LuluR.png",
				},
			],
		roles: "Support, Mage",
		lane: ""
	},
	{
		id: "Lux",
		name: "Lux",
		title: "the Lady of Luminosity",
		lore: "Luxanna Crownguard hails from Demacia, an insular realm where magical abilities are viewed with fear and suspicion. Able to bend light to her will, she grew up dreading discovery and exile, and was forced to keep her power secret, in order to preserve her family's noble status. Nonetheless, Lux's optimism and resilience have led her to embrace her unique talents, and she now covertly wields them in service of her homeland.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 14, 15, 16, 17, 18, 19, 29, 39, 40, 42",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lux_0.jpg",
		passiveName: "Illumination",
		passiveDescription: "Lux's damaging spells charge the target with energy for a few seconds. Lux's next attack ignites the energy, dealing bonus magic damage (depending on Lux's level) to the target.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/LuxIlluminatingFraulein.png",
		spells:
			[
				{
					spellId: "LuxLightBinding",
					spellName: "Light Binding",
					spellDescription: "Lux releases a sphere of light that binds and deals damage to up to two enemy units.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LuxLightBinding.png",
				}, {
					spellId: "LuxPrismaticWave",
					spellName: "Prismatic Barrier",
					spellDescription: "Lux throws her wand and bends the light around any friendly target it touches, protecting them from enemy damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LuxPrismaticWave.png",
				}, {
					spellId: "LuxLightStrikeKugel",
					spellName: "Lucent Singularity",
					spellDescription: "Fires an anomaly of twisted light to an area, which slows nearby enemies. Lux can detonate it to damage enemies in the area of effect.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LuxLightStrikeKugel.png",
				}, {
					spellId: "LuxR",
					spellName: "Final Spark",
					spellDescription: "After gathering energy, Lux fires a beam of light that deals damage to all targets in the area. In addition, triggers Lux's passive ability and refreshes the Illumination debuff duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/LuxR.png",
				},
			],
		roles: "Mage, Support",
		lane: ""
	},
	{
		id: "MasterYi",
		name: "Master Yi",
		title: "the Wuju Bladesman",
		lore: "Master Yi has tempered his body and sharpened his mind, so that thought and action have become almost as one. Though he chooses to enter into violence only as a last resort, the grace and speed of his blade ensures resolution is always swift. As one of the last living practitioners of the Ionian art of Wuju, Yi has devoted his life to continuing the legacy of his people—scrutinizing potential new disciples with the Seven Lenses of Insight to identify the most worthy among them.",
		skins: "0, 1, 2, 3, 4, 5, 9, 10, 11, 17, 24, 33, 42, 52, 53",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/MasterYi_0.jpg",
		passiveName: "Double Strike",
		passiveDescription: "Every few consecutive basic attack, Master Yi strikes twice.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/MasterYi_Passive1.png",
		spells:
			[
				{
					spellId: "AlphaStrike",
					spellName: "Alpha Strike",
					spellDescription: "Master Yi teleports across the battlefield with blinding speed, dealing physical damage to multiple units in his path, while simultaneously becoming untargetable. Alpha Strike can critically strike and deals bonus physical damage to monsters. Basic attacks reduce Alpha Strike's cooldown.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AlphaStrike.png",
				}, {
					spellId: "Meditate",
					spellName: "Meditate",
					spellDescription: "Master Yi rejuvenates his body by focus of mind, restoring Health and taking reduced damage for a short time. In addition, Master Yi will gain stacks of Double Strike and pause the remaining duration on Wuju Style and Highlander for each second he channels.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Meditate.png",
				}, {
					spellId: "WujuStyle",
					spellName: "Wuju Style",
					spellDescription: "Grants bonus true damage on basic attacks.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/WujuStyle.png",
				}, {
					spellId: "Highlander",
					spellName: "Highlander",
					spellDescription: "Master Yi moves with unparalleled agility, temporarily increasing his Move Speed and Attack Speed as well as making him immune to all slowing effects. While active, Champion kills or assists extend Highlander's duration. Passively reduces cooldown for his other abilities on a kill or assist.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Highlander.png",
				},
			],
		roles: "Assassin, Fighter",
		lane: ""
	},
	{
		id: "Maokai",
		name: "Maokai",
		title: "the Twisted Treant",
		lore: "Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical cataclysm destroyed his home, surviving undeath only through the Waters of Life infused within his heartwood. Once a peaceful nature spirit, Maokai now furiously battles to banish the scourge of unlife from the Shadow Isles and restore his home to its former beauty.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 16, 24",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Maokai_0.jpg",
		passiveName: "Sap Magic",
		passiveDescription: "Maokai's basic attack also heals him and deals additional damage on a moderate cooldown. Each time Maokai casts a spell or is struck by an enemy's spell, this cooldown is reduced.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Maokai_Passive.png",
		spells:
			[
				{
					spellId: "MaokaiQ",
					spellName: "Bramble Smash",
					spellDescription: "Maokai knocks back nearby enemies with a shockwave, dealing magic damage and slowing them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MaokaiQ.png",
				}, {
					spellId: "MaokaiW",
					spellName: "Twisted Advance",
					spellDescription: "Maokai contorts into a mass of moving roots, becoming untargetable and dashing to the target. Upon arrival, he roots the target.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MaokaiW.png",
				}, {
					spellId: "MaokaiE",
					spellName: "Sapling Toss",
					spellDescription: "Maokai flings a sapling to the target area to stand guard. More effective in brush.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MaokaiE.png",
				}, {
					spellId: "MaokaiR",
					spellName: "Nature's Grasp",
					spellDescription: "Maokai summons a colossal wall of brambles and thorns that slowly advances forwards, damaging and rooting any enemies in the path.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MaokaiR.png",
				},
			],
		roles: "Tank, Mage",
		lane: ""
	},
	{
		id: "Malzahar",
		name: "Malzahar",
		title: "the Prophet of the Void",
		lore: "A zealous seer dedicated to the unification of all life, Malzahar truly believes the newly emergent Void to be the path to Runeterra's salvation. In the desert wastes of Shurima, he followed the voices that whispered in his mind, all the way to ancient Icathia. Amidst the ruins of that land, he gazed into the dark heart of the Void itself, and was gifted new power and purpose. Malzahar now sees himself as a shepherd, empowered to bring others into the fold… or to release the voidling creatures that dwell beneath.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 9, 18, 28, 38",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Malzahar_0.jpg",
		passiveName: "Void Shift",
		passiveDescription: "When he hasn't recently taken damage or been crowd controlled, Malzahar gains massive damage reduction and crowd control immunity, lingering for a short period after taking damage.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Malzahar_Passive.png",
		spells:
			[
				{
					spellId: "MalzaharQ",
					spellName: "Call of the Void",
					spellDescription: "Malzahar opens up two portals to the Void. After a short delay, they fire projectiles that deal Magic Damage and silence enemy champions.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MalzaharQ.png",
				}, {
					spellId: "MalzaharW",
					spellName: "Void Swarm",
					spellDescription: "Malzahar summons Voidlings to attack nearby enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MalzaharW.png",
				}, {
					spellId: "MalzaharE",
					spellName: "Malefic Visions",
					spellDescription: "Malzahar infects his target's mind with cruel visions of their demise, dealing damage over time. Using Malzahar's other spells on the target will refresh the visions. If the target dies while afflicted by the visions, they pass on to a nearby enemy unit and Malzahar gains Mana. Malzahar's Voidlings are attracted to affected units.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MalzaharE.png",
				}, {
					spellId: "MalzaharR",
					spellName: "Nether Grasp",
					spellDescription: "Malzahar channels the essence of the Void to suppress an enemy champion over a zone of damaging negative energy.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MalzaharR.png",
				},
			],
		roles: "Mage, Assassin",
		lane: ""
	},
	{
		id: "MissFortune",
		name: "Miss Fortune",
		title: "the Bounty Hunter",
		lore: "A Bilgewater captain famed for her looks but feared for her ruthlessness, Sarah Fortune paints a stark figure among the hardened criminals of the port city. As a child, she witnessed the reaver king Gangplank murder her family—an act she brutally avenged years later, blowing up his flagship while he was still aboard. Those who underestimate her will face a beguiling and unpredictable opponent… and, likely, a bullet or two in their guts.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 20, 21, 31, 33",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/MissFortune_0.jpg",
		passiveName: "Love Tap",
		passiveDescription: "Miss Fortune deals bonus physical damage whenever she basic attacks a new target.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/MissFortune_W.png",
		spells:
			[
				{
					spellId: "MissFortuneRicochetShot",
					spellName: "Double Up",
					spellDescription: "Miss Fortune fires a bullet at an enemy, damaging them and a target behind them. Both strikes can also apply Love Tap.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MissFortuneRicochetShot.png",
				}, {
					spellId: "MissFortuneViciousStrikes",
					spellName: "Strut",
					spellDescription: "Miss Fortune passively gains Move Speed when not attacked. This ability can be activated to grant bonus Attack Speed for a short duration. While it's on cooldown, Love Taps reduce the remaining cooldown of Strut.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MissFortuneViciousStrikes.png",
				}, {
					spellId: "MissFortuneScattershot",
					spellName: "Make It Rain",
					spellDescription: "Miss Fortune reveals an area with a flurry of bullets, dealing waves of damage to opponents and slowing them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MissFortuneScattershot.png",
				}, {
					spellId: "MissFortuneBulletTime",
					spellName: "Bullet Time",
					spellDescription: "Miss Fortune channels a barrage of bullets into a cone in front of her, dealing large amounts of damage to enemies. Each wave of Bullet Time can critically strike",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MissFortuneBulletTime.png",
				},
			],
		roles: "Marksman",
		lane: ""
	},
	{
		id: "MonkeyKing",
		name: "Wukong",
		title: "the Monkey King",
		lore: "Wukong is a vastayan trickster who uses his strength, agility, and intelligence to confuse his opponents and gain the upper hand. After finding a lifelong friend in the warrior known as Master Yi, Wukong became the last student of the ancient martial art known as Wuju. Armed with an enchanted staff, Wukong seeks to prevent Ionia from falling to ruin.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/MonkeyKing_0.jpg",
		passiveName: "Stone Skin",
		passiveDescription: "Wukong gains stacking armor and max health regeneration while fighting champions and monsters.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/MonkeyKingStoneSkin.png",
		spells:
			[
				{
					spellId: "MonkeyKingDoubleAttack",
					spellName: "Crushing Blow",
					spellDescription: "Wukong's next attack gains attack range, deals bonus damage, and reduces the target's armor for a few seconds.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MonkeyKingDoubleAttack.png",
				}, {
					spellId: "MonkeyKingDecoy",
					spellName: "Warrior Trickster",
					spellDescription: "Wukong becomes Invisible and dashes in a direction, leaving behind a clone that will attack nearby enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MonkeyKingDecoy.png",
				}, {
					spellId: "MonkeyKingNimbus",
					spellName: "Nimbus Strike",
					spellDescription: "Wukong dashes to a targeted enemy and sends out images to attack enemies near his target, dealing damage to each enemy struck.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MonkeyKingNimbus.png",
				}, {
					spellId: "MonkeyKingSpinToWin",
					spellName: "Cyclone",
					spellDescription: "Wukong's extends his staff and spins it around repeatedly, gaining Move Speed. Enemies struck take damage and are knocked up.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MonkeyKingSpinToWin.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Mordekaiser",
		name: "Mordekaiser",
		title: "the Iron Revenant",
		lore: "Twice slain and thrice born, Mordekaiser is a brutal warlord from a foregone epoch who uses his necromantic sorcery to bind souls into an eternity of servitude. Few now remain who remember his earlier conquests, or know the true extent of his powers—but there are some ancient souls that do, and they fear the day when he may return to claim dominion over both the living and the dead.",
		skins: "0, 1, 2, 3, 4, 5, 6, 13, 23, 32, 42",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Mordekaiser_0.jpg",
		passiveName: "Darkness Rise",
		passiveDescription: "Mordekaiser gains a powerful damage aura and Move Speed after landing 3 attacks or spells against champions or monsters.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/MordekaiserPassive.png",
		spells:
			[
				{
					spellId: "MordekaiserQ",
					spellName: "Obliterate",
					spellDescription: "Mordekaiser smashes the ground with his mace dealing damage to each enemy struck. Damage is increased when hitting a single enemy.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MordekaiserQ.png",
				}, {
					spellId: "MordekaiserW",
					spellName: "Indestructible",
					spellDescription: "Mordekaiser stores damage he deals and takes to create a shield. He may consume the shield to heal.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MordekaiserW.png",
				}, {
					spellId: "MordekaiserE",
					spellName: "Death's Grasp",
					spellDescription: "Mordekaiser pulls all enemies in an area.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MordekaiserE.png",
				}, {
					spellId: "MordekaiserR",
					spellName: "Realm of Death",
					spellDescription: "Mordekaiser drags his victim to a different dimension with him and steals a portion of their stats. If he kills them, he keeps the stats until the victim respawns.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MordekaiserR.png",
				},
			],
		roles: "Fighter",
		lane: ""
	},
	{
		id: "Nami",
		name: "Nami",
		title: "the Tidecaller",
		lore: "A headstrong young vastaya of the seas, Nami was the first of the Marai tribe to leave the waves and venture onto dry land, when their ancient accord with the Targonians was broken. With no other option, she took it upon herself to complete the sacred ritual that would ensure the safety of her people. Amidst the chaos of this new age, Nami faces an uncertain future with grit and determination, using her Tidecaller staff to summon the strength of the oceans themselves.",
		skins: "0, 1, 2, 3, 7, 8, 9, 15, 24, 32, 41, 42",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nami_0.jpg",
		passiveName: "Surging Tides",
		passiveDescription: "When Nami's Abilities hit allied champions they gain Move Speed for a short duration.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/NamiPassive.png",
		spells:
			[
				{
					spellId: "NamiQ",
					spellName: "Aqua Prison",
					spellDescription: "Sends a bubble to a target area, dealing damage and stunning all enemies on impact.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NamiQ.png",
				}, {
					spellId: "NamiW",
					spellName: "Ebb and Flow",
					spellDescription: "Unleashes a stream of water that bounces back and forth between allied and enemy champions, healing allies and damaging enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NamiW.png",
				}, {
					spellId: "NamiE",
					spellName: "Tidecaller's Blessing",
					spellDescription: "Empowers an allied champion for a short duration. The ally's basic attacks and spells deal bonus magic damage and slow the target.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NamiE.png",
				}, {
					spellId: "NamiR",
					spellName: "Tidal Wave",
					spellDescription: "Summons a massive Tidal Wave that knocks up, slows, and damages enemies. Allies hit gain double the effect of Surging Tides.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NamiR.png",
				},
			],
		roles: "Support, Mage",
		lane: ""
	},
	{
		id: "Morgana",
		name: "Morgana",
		title: "the Fallen",
		lore: "Conflicted between her celestial and mortal natures, Morgana bound her wings to embrace humanity, and inflicts her pain and bitterness upon the dishonest and the corrupt. She rejects laws and traditions she believes are unjust, and fights for truth from the shadows of Demacia—even as others seek to repress it—by casting shields and chains of dark fire. More than anything else, Morgana truly believes that even the banished and outcast may one day rise again.",
		skins: "0, 1, 2, 3, 4, 5, 6, 10, 11, 17, 26, 39, 41, 50",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Morgana_0.jpg",
		passiveName: "Soul Siphon",
		passiveDescription: "Morgana drains spirit from her enemies, healing as she deals damage to champions, large minions, and medium and larger jungler monsters.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/FallenAngel_Empathize.png",
		spells:
			[
				{
					spellId: "MorganaQ",
					spellName: "Dark Binding",
					spellDescription: "Morgana binds an enemy in place with dark magic, forcing them to feel the pain they've caused and dealing magic damage. ",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MorganaQ.png",
				}, {
					spellId: "MorganaW",
					spellName: "Tormented Shadow",
					spellDescription: "Morgana casts a cursed shadow on an area, damaging enemies who dare stand in her dark circle. They receive magic damage over time, which increases the lower health they are.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MorganaW.png",
				}, {
					spellId: "MorganaE",
					spellName: "Black Shield",
					spellDescription: "Morgana anoints an ally with a protective barrier of starfire, which absorbs magical damage and disabling effects until it is broken.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MorganaE.png",
				}, {
					spellId: "MorganaR",
					spellName: "Soul Shackles",
					spellDescription: "Morgana unleashes the full force of her Celestial power as she unbinds her wings and hovers above the ground. She lashes chains of dark pain onto nearby enemy champions, gaining Move Speed towards them. The chains slow and deal initial damage and, after a delay, stun those who are unable to break them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MorganaR.png",
				},
			],
		roles: "Mage, Support",
		lane: ""
	},
	{
		id: "Nasus",
		name: "Nasus",
		title: "the Curator of the Sands",
		lore: "Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert. Fiercely intelligent, he was a guardian of knowledge and peerless strategist whose wisdom guided the ancient empire of Shurima to greatness for many centuries. After the fall of the empire, he went into self-imposed exile, becoming little more than a legend. Now that the ancient city of Shurima has risen once more, he has returned, determined to ensure it never falls again.",
		skins: "0, 1, 2, 3, 4, 5, 6, 10, 11, 16, 25, 35",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nasus_0.jpg",
		passiveName: "Soul Eater",
		passiveDescription: "Nasus drains his foe's spiritual energy, giving him bonus Life Steal.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Nasus_Passive.png",
		spells:
			[
				{
					spellId: "NasusQ",
					spellName: "Siphoning Strike",
					spellDescription: "Nasus strikes his foe, dealing damage and increasing the power of his future Siphoning Strikes if he slays his target.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NasusQ.png",
				}, {
					spellId: "NasusW",
					spellName: "Wither",
					spellDescription: "Nasus ages an enemy champion, decelerating their Move Speed and Attack Speed over time.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NasusW.png",
				}, {
					spellId: "NasusE",
					spellName: "Spirit Fire",
					spellDescription: "Nasus unleashes a spirit flame at a location, dealing damage and reducing the Armor of enemies who stand on it.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NasusE.png",
				}, {
					spellId: "NasusR",
					spellName: "Fury of the Sands",
					spellDescription: "Nasus unleashes a mighty sandstorm that batters nearby enemies. While the storm rages, he gains increased Health, Attack Range, damages nearby enemies, has a reduced cooldown on Siphoning Strike, and gains bonus Armor and Magic Resistance.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NasusR.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Nautilus",
		name: "Nautilus",
		title: "the Titan of the Depths",
		lore: "A lonely legend as old as the first piers sunk in Bilgewater, the armored goliath known as Nautilus roams the dark waters off the coast of the Blue Flame Isles. Driven by a forgotten betrayal, he strikes without warning, swinging his enormous anchor to save the wretched, and drag the greedy to their doom. It is said he comes for those who forget to pay the “Bilgewater tithe”, pulling them down beneath the waves with him—an iron-clad reminder that none can escape the depths.",
		skins: "0, 1, 2, 3, 4, 5, 6, 9, 18",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nautilus_0.jpg",
		passiveName: "Staggering Blow",
		passiveDescription: "Nautilus' first Attack against a target deals increased physical damage and roots them briefly.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Nautilus_StaggeringBlow.png",
		spells:
			[
				{
					spellId: "NautilusAnchorDrag",
					spellName: "Dredge Line",
					spellDescription: "Nautilus hurls his anchor forward. Colliding with an enemy pulls them and Nautilus together, dealing magic damage. Colliding with terrain pulls Nautilus towards it.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NautilusAnchorDrag.png",
				}, {
					spellId: "NautilusPiercingGaze",
					spellName: "Titan's Wrath",
					spellDescription: "Nautilus gains a temporary Shield. While it persists, his Attacks deal damage over time to his target and surrounding enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NautilusPiercingGaze.png",
				}, {
					spellId: "NautilusSplashZone",
					spellName: "Riptide",
					spellDescription: "Nautilus creates three exploding waves around himself. Each explosion damages and slows enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NautilusSplashZone.png",
				}, {
					spellId: "NautilusGrandLine",
					spellName: "Depth Charge",
					spellDescription: "Nautilus fires a shockwave into the earth that chases an opponent. This shockwave rips up the earth above it, knocking enemies into the air. When it reaches the opponent, the shockwave erupts, knocking his target into the air and stunning them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NautilusGrandLine.png",
				},
			],
		roles: "Tank, Support",
		lane: ""
	},
	{
		id: "Neeko",
		name: "Neeko",
		title: "the Curious Chameleon",
		lore: "Hailing from a long lost tribe of vastaya, Neeko can blend into any crowd by borrowing the appearances of others, even absorbing something of their emotional state to tell friend from foe in an instant. No one is ever sure where—or who—Neeko might be, but those who intend to do her harm will soon witness her true colors revealed, and feel the full power of her primordial spirit magic unleashed upon them.",
		skins: "0, 1, 10, 11, 12, 21, 22",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Neeko_0.jpg",
		passiveName: "Inherent Glamour",
		passiveDescription: "Neeko can look like an ally champion. Taking damage from enemy Champions or casting damaging spells breaks the disguise.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Neeko_P.png",
		spells:
			[
				{
					spellId: "NeekoQ",
					spellName: "Blooming Burst",
					spellDescription: "Neeko throws a seed dealing magic damage. The seed blooms again on hitting champions or killing units.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NeekoQ.png",
				}, {
					spellId: "NeekoW",
					spellName: "Shapesplitter",
					spellDescription: "Neeko passively deals bonus magic damage every third attack. Neeko can activate to send a clone in a direction.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NeekoW.png",
				}, {
					spellId: "NeekoE",
					spellName: "Tangle-Barbs",
					spellDescription: "Neeko slings a tangle that damage and root everything it passes through. If the tangle kills an enemy or passes through a champion, it becomes larger, faster, and roots for longer.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NeekoE.png",
				}, {
					spellId: "NeekoR",
					spellName: "Pop Blossom",
					spellDescription: "After a short preparation, Neeko leaps into the air and gains a shield. Upon landing, nearby enemies are damaged and stunned. The preparation is hidden if Neeko is disguised.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NeekoR.png",
				},
			],
		roles: "Mage, Support",
		lane: ""
	},
	{
		id: "Nidalee",
		name: "Nidalee",
		title: "the Bestial Huntress",
		lore: "Raised in the deepest jungle, Nidalee is a master tracker who can shapeshift into a ferocious cougar at will. Neither wholly woman nor beast, she viciously defends her territory from any and all trespassers, with carefully placed traps and deft spear throws. She cripples her quarry before pouncing on them in feline form—the lucky few who survive tell tales of a wild woman with razor-sharp instincts, and even sharper claws...",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 18, 27, 29",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nidalee_0.jpg",
		passiveName: "Prowl",
		passiveDescription: "Moving through brush increases Nidalee's Move Speed by 10% for 2 seconds, increased to 30% toward visible enemy champions within 1400 range. Hitting champions or monsters with Javelin Toss or Bushwhack triggers a Hunt, granting True Sight of them for 4 seconds. During this time, Nidalee gains 10% Move Speed (increased to 30% toward the Hunted target) and her Takedown and Pounce are enhanced against them.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Nidalee_Passive.png",
		spells:
			[
				{
					spellId: "JavelinToss",
					spellName: "Javelin Toss / Takedown",
					spellDescription: "In human form, Nidalee throws a spiked javelin at her target that gains damage as it flies. As a cougar, her next attack will attempt to fatally wound her target, dealing more damage the less life they have.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JavelinToss.png",
				}, {
					spellId: "Bushwhack",
					spellName: "Bushwhack / Pounce",
					spellDescription: "In human form, Nidalee lays a trap for unwary opponents that, when sprung, damages and reveals its target. As a cougar, she jumps in a direction, dealing damage in an area where she lands.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Bushwhack.png",
				}, {
					spellId: "PrimalSurge",
					spellName: "Primal Surge / Swipe",
					spellDescription: "In human form, Nidalee channels the spirit of the cougar to heal her allies and imbue them with Attack Speed for a short duration. As a cougar, she claws in a direction, dealing damage to enemies in front of her.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PrimalSurge.png",
				}, {
					spellId: "AspectOfTheCougar",
					spellName: "Aspect Of The Cougar",
					spellDescription: "Nidalee transforms into a cougar, gaining new abilities.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AspectOfTheCougar.png",
				},
			],
		roles: "Assassin, Mage",
		lane: ""
	},
	{
		id: "Malphite",
		name: "Malphite",
		title: "Shard of the Monolith",
		lore: "A massive creature of living stone, Malphite struggles to impose blessed order on a chaotic world. Birthed as a servitor-shard to an otherworldly obelisk known as the Monolith, he used his tremendous elemental strength to maintain and protect his progenitor, but ultimately failed. The only survivor of the destruction that followed, Malphite now endures Runeterra's soft folk and their fluid temperaments, while struggling to find a new role worthy of the last of his kind.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 16, 23, 24, 25, 27, 37",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Malphite_0.jpg",
		passiveName: "Granite Shield",
		passiveDescription: "Malphite is shielded by a layer of rock which absorbs damage up to 10% of his maximum Health. If Malphite has not been hit for a few seconds, this effect recharges.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Malphite_GraniteShield.png",
		spells:
			[
				{
					spellId: "SeismicShard",
					spellName: "Seismic Shard",
					spellDescription: "Malphite sends a shard of the earth through the ground at his foe, dealing damage upon impact and stealing Move Speed for 3 seconds.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SeismicShard.png",
				}, {
					spellId: "Obduracy",
					spellName: "Thunderclap",
					spellDescription: "Malphite attacks with such force that it creates a sonic boom. For the next few seconds, his attacks create aftershocks in front of him.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Obduracy.png",
				}, {
					spellId: "Landslide",
					spellName: "Ground Slam",
					spellDescription: "Malphite slams the ground, sending out a shockwave that deals magic damage based on his Armor and reduces the Attack Speed of enemies for a short duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Landslide.png",
				}, {
					spellId: "UFSlash",
					spellName: "Unstoppable Force",
					spellDescription: "Malphite launches himself to a location at high speed, damaging enemies and knocking them into the air.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/UFSlash.png",
				},
			],
		roles: "Tank, Fighter",
		lane: ""
	},
	{
		id: "Nilah",
		name: "Nilah",
		title: "the Joy Unbound",
		lore: "Nilah is an ascetic warrior from a distant land, seeking the world's deadliest, most titanic opponents so that she might challenge and destroy them. Having won her power through an encounter with the long-imprisoned demon of joy, she has no emotions other than unceasing jubilation—a small price to pay for the vast strength she now possesses. Channeling the demon's liquid form into a blade of unparalleled might, she stands defiant against ancient threats long forgotten.",
		skins: "0, 1",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nilah_0.jpg",
		passiveName: "Joy Unending",
		passiveDescription: "Nilah gains increased experience from last-hitting minions along with the ability to enhance and share nearby healing and shielding from her allies.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/NIlahP.Nilah.png",
		spells:
			[
				{
					spellId: "NilahQ",
					spellName: "Formless Blade",
					spellDescription: "With a snap of her whip-blade, Nilah damages any enemies she hits in a straight line in her chosen direction. This action extends her attack range for a short duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NilahQ.png",
				}, {
					spellId: "NilahW",
					spellName: "Jubilant Veil",
					spellDescription: "Nilah envelops herself in mist, increasing her movement speed and allowing her to gracefully dodge all incoming attacks. Any allies she touches during the mist's duration will also gain this effect.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NilahW.png",
				}, {
					spellId: "NilahE",
					spellName: "Slipstream",
					spellDescription: "Nilah enthusiastically dashes toward her target, dealing damage to any enemies she passes through on the way.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NilahE.png",
				}, {
					spellId: "NilahR",
					spellName: "Apotheosis",
					spellDescription: "Twirling her whip-blade in joyful exuberance, Nilah deals damage to enemies around her before pulling them closer with her weapon.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NilahR.png",
				},
			],
		roles: "Fighter, Assassin",
		lane: ""
	},
	{
		id: "Nocturne",
		name: "Nocturne",
		title: "the Eternal Nightmare",
		lore: "A demonic amalgamation drawn from the nightmares that haunt every sentient mind, the thing known as Nocturne has become a primordial force of pure evil. It is liquidly chaotic in aspect, a faceless shadow with cold eyes and armed with wicked-looking blades. After freeing itself from the spirit realm, Nocturne descended upon the waking world, to feed upon the kind of terror that can only thrive in true darkness.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 16",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nocturne_0.jpg",
		passiveName: "Umbra Blades",
		passiveDescription: "Every few seconds, Nocturne's next attack strikes surrounding enemies for bonus physical damage and heals himself. Nocturne's basic attacks reduce this cooldown.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Nocturne_UmbraBlades.png",
		spells:
			[
				{
					spellId: "NocturneDuskbringer",
					spellName: "Duskbringer",
					spellDescription: "Nocturne throws a shadow blade that deals damage, leaves a Dusk Trail, and causes champions to leave a Dusk Trail. While on the trail, Nocturne can move through units and has increased Move Speed and Attack Damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NocturneDuskbringer.png",
				}, {
					spellId: "NocturneShroudofDarkness",
					spellName: "Shroud of Darkness",
					spellDescription: "Nocturne empowers his blades, passively gaining Attack Speed. Activating Shroud of Darkness allows Nocturne to fade into the shadows, creating a magical barrier which blocks a single enemy ability and doubles his passive Attack Speed if successful.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NocturneShroudofDarkness.png",
				}, {
					spellId: "NocturneUnspeakableHorror",
					spellName: "Unspeakable Horror",
					spellDescription: "Nocturne plants a nightmare into his target's mind, dealing damage each second and applying fear to the target if they do not get out of range by the end of the duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NocturneUnspeakableHorror.png",
				}, {
					spellId: "NocturneParanoia",
					spellName: "Paranoia",
					spellDescription: "Nocturne reduces the sight radius of all enemy champions and removes their ally vision in the process. He can then launch himself at a nearby enemy champion.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NocturneParanoia.png",
				},
			],
		roles: "Assassin, Fighter",
		lane: ""
	},
	{
		id: "Nunu",
		name: "Nunu & Willump",
		title: "the Boy and His Yeti",
		lore: "Once upon a time, there was a boy who wanted to prove he was a hero by slaying a fearsome monster—only to discover that the beast, a lonely and magical yeti, merely needed a friend. Bound together by ancient power and a shared love of snowballs, Nunu and Willump now ramble wildly across the Freljord, breathing life into imagined adventures. They hope that somewhere out there, they will find Nunu's mother. If they can save her, maybe they will be heroes after all…",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 26",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nunu_0.jpg",
		passiveName: "Call of the Freljord",
		passiveDescription: "Nunu increases the attack speed and Move Speed of Willump and a nearby ally, and causes Willump's basic attacks to damage enemies around the target.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/NunuPassive.png",
		spells:
			[
				{
					spellId: "NunuQ",
					spellName: "Consume",
					spellDescription: "Willump takes a bite out of a minion, monster, or enemy champion, dealing damage and healing himself.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NunuQ.png",
				}, {
					spellId: "NunuW",
					spellName: "Biggest Snowball Ever!",
					spellDescription: "Willump creates a snowball that grows in size and speed as he rolls it. The snowball damages and knocks up enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NunuW.png",
				}, {
					spellId: "NunuE",
					spellName: "Snowball Barrage",
					spellDescription: "Nunu throws multiple snowballs that damage enemies. When he's finished, Willump roots any champions or large monsters that were hit by a snowball.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NunuE.png",
				}, {
					spellId: "NunuR",
					spellName: "Absolute Zero",
					spellDescription: "Nunu & Willump create a powerful blizzard in an area that slows enemies and deals massive damage at the end.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/NunuR.png",
				},
			],
		roles: "Tank, Fighter",
		lane: ""
	},
	{
		id: "Olaf",
		name: "Olaf",
		title: "the Berserker",
		lore: "An unstoppable force of destruction, the axe-wielding Olaf wants nothing but to die in glorious combat. Hailing from the brutal Freljordian peninsula of Lokfar, he once received a prophecy foretelling his peaceful passing—a coward's fate, and a great insult among his people. Seeking death, and fueled by rage, he rampaged across the land, slaughtering scores of great warriors and legendary beasts in search of any opponent who could stop him. Now a brutal enforcer for the Winter's Claw, he seeks his end in the great wars to come.",
		skins: "0, 1, 2, 3, 4, 5, 6, 15, 16, 25, 35",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Olaf_0.jpg",
		passiveName: "Berserker Rage",
		passiveDescription: "Olaf gains Attack Speed and Life Steal based on his missing Health.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Olaf_Passive.png",
		spells:
			[
				{
					spellId: "OlafAxeThrowCast",
					spellName: "Undertow",
					spellDescription: "Olaf throws an axe into the ground at a target location, dealing damage to enemies it passes through and reducing their Armor and Move Speed. If Olaf picks up the axe, the ability's cooldown is reset.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/OlafAxeThrowCast.png",
				}, {
					spellId: "OlafFrenziedStrikes",
					spellName: "Tough It Out",
					spellDescription: "Olaf's Attack Speed is increased, he reduces incoming damage, and he gains a Shield.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/OlafFrenziedStrikes.png",
				}, {
					spellId: "OlafRecklessStrike",
					spellName: "Reckless Swing",
					spellDescription: "Olaf attacks with such force that it deals true damage to his target and himself, refunding the Health cost if he destroys the target.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/OlafRecklessStrike.png",
				}, {
					spellId: "OlafRagnarok",
					spellName: "Ragnarok",
					spellDescription: "Olaf passively gains increased armor and magic resist. He can activate this ability to become immune to disables for as long as he keeps attacking.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/OlafRagnarok.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Ornn",
		name: "Ornn",
		title: "The Fire below the Mountain",
		lore: "Ornn is the Freljordian spirit of forging and craftsmanship. He works in the solitude of a massive smithy, hammered out from the lava caverns beneath the volcano Hearth-Home. There he stokes bubbling cauldrons of molten rock to purify ores and fashion items of unsurpassed quality. When other deities—especially Volibear—walk the earth and meddle in mortal affairs, Ornn arises to put these impetuous beings back in their place, either with his trusty hammer or the fiery power of the mountains themselves.",
		skins: "0, 1, 2, 11",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ornn_0.jpg",
		passiveName: "Living Forge",
		passiveDescription: "Ornn gains an additional bonus Armor and Magic Resistance from all sources. Ornn can spend gold to forge non-consumable items anywhere. Additionally, he can create masterwork items for himself and for his allies.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/OrnnP.png",
		spells:
			[
				{
					spellId: "OrnnQ",
					spellName: "Volcanic Rupture",
					spellDescription: "Ornn slams the ground, sending out a fissure dealing damage and slowing enemies hit. After a small delay, a magma pillar forms at the end location.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/OrnnQ.png",
				}, {
					spellId: "OrnnW",
					spellName: "Bellows Breath",
					spellDescription: "Ornn advances, breathing fire. Enemies hit by the final gout of flame become Brittle.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/OrnnW.png",
				}, {
					spellId: "OrnnE",
					spellName: "Searing Charge",
					spellDescription: "Ornn charges, dealing damage to enemies he passes through. If Ornn collides with terrain while charging, the impact creates a shockwave around him which deals damage and knocks up enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/OrnnE.png",
				}, {
					spellId: "OrnnR",
					spellName: "Call of the Forge God",
					spellDescription: "Ornn summons a massive elemental at a location which travels toward him with increasing speed. Enemies run over by the elemental take damage, are slowed and are made Brittle. Ornn can recast the ability to charge into the elemental, redirecting it in the direction he hits it, causing the elemental to affect any enemies it runs over to be knocked up, dealing the same damage and re-applying Brittle.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/OrnnR.png",
				},
			],
		roles: "Tank, Fighter",
		lane: ""
	},
	{
		id: "Orianna",
		name: "Orianna",
		title: "the Lady of Clockwork",
		lore: "Once a curious girl of flesh and blood, Orianna is now a technological marvel comprised entirely of clockwork. She became gravely ill after an accident in the lower districts of Zaun, and her failing body had to be replaced with exquisite artifice, piece by piece. Accompanied by an extraordinary brass sphere she built for companionship and protection, Orianna is now free to explore the wonders of Piltover, and beyond.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 20",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Orianna_0.jpg",
		passiveName: "Clockwork Windup",
		passiveDescription: "Orianna's Attacks deal additional magic damage. This damage increases the more Orianna Attacks the same target.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/OriannaPassive.png",
		spells:
			[
				{
					spellId: "OrianaIzunaCommand",
					spellName: "Command: Attack",
					spellDescription: "Orianna commands her Ball to fire toward a target location, dealing magic damage to targets along the way (deals less damage to subsequent targets). Her Ball remains at the target location after.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/OrianaIzunaCommand.png",
				}, {
					spellId: "OrianaDissonanceCommand",
					spellName: "Command: Dissonance",
					spellDescription: "Orianna commands her Ball to release a pulse of energy, dealing magic damage around it. This leaves a field behind that speeds up allies and slows enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/OrianaDissonanceCommand.png",
				}, {
					spellId: "OrianaRedactCommand",
					spellName: "Command: Protect",
					spellDescription: "Orianna commands her Ball to attach to an allied champion, Shielding them and dealing magic damage to any enemies it passes through on the way. Additionally, the Ball grants additional Armor and Magic Resist to the champion it is attached to.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/OrianaRedactCommand.png",
				}, {
					spellId: "OrianaDetonateCommand",
					spellName: "Command: Shockwave",
					spellDescription: "Orianna commands her Ball to unleash a shockwave, dealing magic damage and launching nearby enemies towards the Ball after a short delay.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/OrianaDetonateCommand.png",
				},
			],
		roles: "Mage, Support",
		lane: ""
	},
	{
		id: "Pantheon",
		name: "Pantheon",
		title: "the Unbreakable Spear",
		lore: "Once an unwilling host to the Aspect of War, Atreus survived when the celestial power within him was slain, refusing to succumb to a blow that tore stars from the heavens. In time, he learned to embrace the power of his own mortality, and the stubborn resilience that goes along with it. Atreus now opposes the divine as Pantheon reborn, his unbreakable will fueling the fallen Aspect's weapons on the field of battle.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 25, 26, 36",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Pantheon_0.jpg",
		passiveName: "Mortal Will",
		passiveDescription: "Every few spells or attacks, Pantheon's next spell is empowered.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Pantheon_Passive.png",
		spells:
			[
				{
					spellId: "PantheonQ",
					spellName: "Comet Spear",
					spellDescription: "Pantheon either thrusts his spear or throws his spear in the chosen direction.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PantheonQ.png",
				}, {
					spellId: "PantheonW",
					spellName: "Shield Vault",
					spellDescription: "Pantheon dashes to a target, damaging and stunning them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PantheonW.png",
				}, {
					spellId: "PantheonE",
					spellName: "Aegis Assault",
					spellDescription: "Pantheon sets his shield, becoming invulnerable to damage from the front and striking repeatedly with his spear.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PantheonE.png",
				}, {
					spellId: "PantheonR",
					spellName: "Grand Starfall",
					spellDescription: "Pantheon composes himself and then leaps into the air, landing at a chosen location as a comet.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PantheonR.png",
				},
			],
		roles: "Fighter, Assassin",
		lane: ""
	},
	{
		id: "Poppy",
		name: "Poppy",
		title: "Keeper of the Hammer",
		lore: "Runeterra has no shortage of valiant champions, but few are as tenacious as Poppy. Bearing the legendary hammer of Orlon, a weapon twice her size, this determined yordle has spent untold years searching in secret for the fabled “Hero of Demacia,” said to be its rightful wielder. Until then, she dutifully charges into battle, pushing back the kingdom's enemies with every whirling strike.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 14, 15, 16, 24",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Poppy_0.jpg",
		passiveName: "Iron Ambassador",
		passiveDescription: "Poppy throws her buckler that bounces off the target. Poppy can pick it up to gain a temporary shield.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Poppy_Passive.png",
		spells:
			[
				{
					spellId: "PoppyQ",
					spellName: "Hammer Shock",
					spellDescription: "Poppy swings her hammer, dealing damage and creating a zone that will slow enemies and explode after a delay.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PoppyQ.png",
				}, {
					spellId: "PoppyW",
					spellName: "Steadfast Presence",
					spellDescription: "Poppy passively gains Armor and Magic Resist. This bonus increases when she is low on Health. Poppy can activate Steadfast Presence to gain Move Speed and stop enemy dashes around her. If a dash is stopped, the enemy is slowed and grounded.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PoppyW.png",
				}, {
					spellId: "PoppyE",
					spellName: "Heroic Charge",
					spellDescription: "Poppy dashes to the target and pushes it back. If the target is pushed into a wall, it is stunned.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PoppyE.png",
				}, {
					spellId: "PoppyR",
					spellName: "Keeper's Verdict",
					spellDescription: "Poppy channels a hammer strike that knocks enemies very far away.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PoppyR.png",
				},
			],
		roles: "Tank, Fighter",
		lane: ""
	},
	{
		id: "Pyke",
		name: "Pyke",
		title: "the Bloodharbor Ripper",
		lore: "A renowned harpooner from the slaughter docks of Bilgewater, Pyke should have met his death in the belly of a gigantic jaull-fish… and yet, he returned. Now, stalking the dank alleys and backways of his former hometown, he uses his new supernatural gifts to bring a swift and gruesome end to those who make their fortune by exploiting others—and a city that prides itself on hunting monsters now finds a monster hunting them.",
		skins: "0, 1, 9, 16, 25, 34, 44, 45",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Pyke_0.jpg",
		passiveName: "Gift of the Drowned Ones",
		passiveDescription: "When Pyke is hidden from enemies, he regenerates damage that he has recently taken from champions. Pyke also cannot gain extra Maximum Health from any source, and instead gains Bonus AD.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/PykePassive.png",
		spells:
			[
				{
					spellId: "PykeQ",
					spellName: "Bone Skewer",
					spellDescription: "Pyke either stabs an enemy in front of him or pulls an enemy towards him.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PykeQ.png",
				}, {
					spellId: "PykeW",
					spellName: "Ghostwater Dive",
					spellDescription: "Pyke enters Camouflage and gains significant Move Speed that decays over time.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PykeW.png",
				}, {
					spellId: "PykeE",
					spellName: "Phantom Undertow",
					spellDescription: "Pyke dashes and leaves behind a phantom that will return to him, stunning enemy champions along its path.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PykeE.png",
				}, {
					spellId: "PykeR",
					spellName: "Death From Below",
					spellDescription: "Pyke blinks to and executes low health enemies, allowing him to cast this spell again and granting additional gold to an ally who assists.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PykeR.png",
				},
			],
		roles: "Support, Assassin",
		lane: ""
	},
	{
		id: "Qiyana",
		name: "Qiyana",
		title: "Empress of the Elements",
		lore: "In the jungle city of Ixaocan, Qiyana plots her own ruthless path to the high seat of the Yun Tal. Last in line to succeed her parents, she faces those who stand in her way with brash confidence and unprecedented mastery over elemental magic. With the land itself obeying her every command, Qiyana sees herself as the greatest elementalist in the history of Ixaocan—and by that right, deserving of not only a city, but an empire.",
		skins: "0, 1, 2, 10, 11, 20, 21, 30",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Qiyana_0.jpg",
		passiveName: "Royal Privilege",
		passiveDescription: "Qiyana's first basic attack or ability against each enemy deals bonus damage.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Qiyana_Passive.png",
		spells:
			[
				{
					spellId: "QiyanaQ",
					spellName: "Elemental Wrath / Edge of Ixtal",
					spellDescription: "Qiyana swings her weapon, dealing damage with a bonus effect based on her element.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/QiyanaQ.png",
				}, {
					spellId: "QiyanaW",
					spellName: "Terrashape",
					spellDescription: "Qiyana dashes to a location and enchants her weapon with an element. Her attacks and abilities deal bonus damage while her weapon is enchanted. ",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/QiyanaW.png",
				}, {
					spellId: "QiyanaE",
					spellName: "Audacity",
					spellDescription: "Qiyana dashes to an enemy, damaging them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/QiyanaE.png",
				}, {
					spellId: "QiyanaR",
					spellName: "Supreme Display of Talent",
					spellDescription: "Qiyana sends out a shockwave that detonates whatever elements she hits with it, stunning and damaging nearby enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/QiyanaR.png",
				},
			],
		roles: "Assassin, Fighter",
		lane: ""
	},
	{
		id: "Rammus",
		name: "Rammus",
		title: "the Armordillo",
		lore: "Idolized by many, dismissed by some, mystifying to all, the curious being Rammus is an enigma. Protected by a spiked shell, he inspires increasingly disparate theories on his origin wherever he goes—from demigod, to sacred oracle, to a mere beast transformed by magic. Whatever the truth may be, Rammus keeps his own counsel and stops for no one as he roams the Shuriman desert.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rammus_0.jpg",
		passiveName: "Spiked Shell",
		passiveDescription: "Rammus' basic attacks deal bonus magic damage, scaling with his Armor.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Armordillo_ScavengeArmor.png",
		spells:
			[
				{
					spellId: "PowerBall",
					spellName: "Powerball",
					spellDescription: "Rammus accelerates in a ball towards his enemies, dealing damage and slowing targets affected by the impact.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PowerBall.png",
				}, {
					spellId: "DefensiveBallCurl",
					spellName: "Defensive Ball Curl",
					spellDescription: "Rammus goes into a defensive formation, vastly increasing his Armor and Magic Resistance, amplifying Spiked Shells' damage, and returning damage to enemies that basic attack him.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/DefensiveBallCurl.png",
				}, {
					spellId: "PuncturingTaunt",
					spellName: "Frenzying Taunt",
					spellDescription: "Rammus taunts an enemy champion or monster into a reckless assault against him. Additionally, he gains increased Attack Speed for a short time, but this bonus is extended by having any of his other spells active.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PuncturingTaunt.png",
				}, {
					spellId: "Tremors2",
					spellName: "Soaring Slam",
					spellDescription: "Rammus hops into the air and slams down at a target area, dealing magic damage and slowing enemies. If cast while Rammus is in Powerball, Rammus knocks up enemies near the center as well.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Tremors2.png",
				},
			],
		roles: "Tank, Fighter",
		lane: ""
	},
	{
		id: "Quinn",
		name: "Quinn",
		title: "Demacia's Wings",
		lore: "Quinn is an elite ranger-knight of Demacia, who undertakes dangerous missions deep in enemy territory. She and her legendary eagle, Valor, share an unbreakable bond, and their foes are often slain before they realize they are fighting not one, but two of the kingdom's greatest heroes. Nimble and acrobatic when required, Quinn takes aim with her crossbow while Valor marks their elusive targets from above, making them a deadly pair on the battlefield.",
		skins: "0, 1, 2, 3, 4, 5, 14",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Quinn_0.jpg",
		passiveName: "Harrier",
		passiveDescription: "Valor, Quinn's Demacian eagle, periodically marks enemies as Vulnerable. Quinn's first basic attack against Vulnerable targets will deal bonus physical damage.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Quinn_Passive.png",
		spells:
			[
				{
					spellId: "QuinnQ",
					spellName: "Blinding Assault",
					spellDescription: "Quinn calls Valor to mark an enemy and hinder its vision before damaging all enemies in the immediate area.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/QuinnQ.png",
				}, {
					spellId: "QuinnW",
					spellName: "Heightened Senses",
					spellDescription: "Passively grants Quinn Attack Speed and Move Speed after she attacks a Vulnerable target. Activate to have Valor reveal a large area nearby.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/QuinnW.png",
				}, {
					spellId: "QuinnE",
					spellName: "Vault",
					spellDescription: "Quinn dashes to an enemy, dealing physical damage and slowing the target's Move Speed. Upon reaching the target, she leaps off the target, briefly interrupting it, and lands near her maximum Attack Range away from the target.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/QuinnE.png",
				}, {
					spellId: "QuinnR",
					spellName: "Behind Enemy Lines",
					spellDescription: "Quinn and Valor team up to fly around at great speed. Ending the ability casts Skystrike, which deals damage to nearby enemies and marks champions as Vulnerable.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/QuinnR.png",
				},
			],
		roles: "Marksman, Assassin",
		lane: ""
	},
	{
		id: "Rakan",
		name: "Rakan",
		title: "The Charmer",
		lore: "As mercurial as he is charming, Rakan is an infamous vastayan troublemaker and the greatest battle-dancer in Lhotlan tribal history. To the humans of the Ionian highlands, his name has long been synonymous with wild festivals, uncontrollable parties, and anarchic music. Few would suspect this energetic, traveling showman is also partner to the rebel Xayah, and is dedicated to her cause.",
		skins: "0, 1, 2, 3, 4, 5, 9, 18",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rakan_0.jpg",
		passiveName: "Fey Feathers",
		passiveDescription: "Rakan periodically gains a shield.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Rakan_P.png",
		spells:
			[
				{
					spellId: "RakanQ",
					spellName: "Gleaming Quill",
					spellDescription: "Flings a magical feather that deals magic damage. Striking a champion or epic monster enables Rakan to heal his allies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RakanQ.png",
				}, {
					spellId: "RakanW",
					spellName: "Grand Entrance",
					spellDescription: "Dashes to a location, knocking up nearby enemies on arrival.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RakanW.png",
				}, {
					spellId: "RakanE",
					spellName: "Battle Dance",
					spellDescription: "Flies to an allied champion granting them a shield. Can be re-cast for free for a short duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RakanE.png",
				}, {
					spellId: "RakanR",
					spellName: "The Quickness",
					spellDescription: "Gains Move Speed, charming and dealing magic damage to enemies touched.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RakanR.png",
				},
			],
		roles: "Support",
		lane: ""
	},
	{
		id: "Rell",
		name: "Rell",
		title: "the Iron Maiden",
		lore: "The product of brutal experimentation at the hands of the Black Rose, Rell is a defiant, living weapon determined to topple Noxus. Her childhood was one of misery and horror, enduring unspeakable procedures to perfect and weaponize her magical control over metal... until she staged a violent escape, killing many of her captors in the process. Now branded as a criminal, Rell attacks Noxian soldiers on sight as she searches for survivors of her old “academy,” defending the meek while delivering violent death to her former overseers.",
		skins: "0, 1, 10",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rell_0.jpg",
		passiveName: "Break the Mold",
		passiveDescription: "Rell attacks slowly but steals her target's Armor and Magic Resist on hit, dealing bonus damage based on the amount stolen.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/RellP.png",
		spells:
			[
				{
					spellId: "RellQ",
					spellName: "Shattering Strike",
					spellDescription: "Rell thrusts her lance to deal magic damage to units in a line, breaking their Shields. The first unit hit additionally suffers Break the Mold's defense steal. If Rell is bound to an ally with Attract and Repel, they both recover health for each enemy champion hit by this spell.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RellQ.png",
				}, {
					spellId: "RellW_Dismount",
					spellName: "Ferromancy: Crash Down",
					spellDescription: "Passive: Rell gains additional Move Speed while mounted and additional Armor and Magic Resist while armored. Active: Rell changes forms, casting a different spell based on form. Mounted: Rell crashes down in her armor, knocking enemies up and gaining a large shield. Armored: Rell forms her mount, gaining a burst of speed and flipping the next enemy she attacks.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RellW_Dismount.png",
				}, {
					spellId: "RellE",
					spellName: "Attract and Repel",
					spellDescription: "Rell binds a piece of her Armor to another allied champion to grant them Armor and Magic Resist while near. While she has an ally bound in this way, Rell can cast this ability without targeting an allied champion to snap the binding and Stun enemies caught in it.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RellE.png",
				}, {
					spellId: "RellR",
					spellName: "Magnet Storm",
					spellDescription: "Rell explodes in a magnetic fury, violently Pulling nearby enemies towards herself. Then Rell constantly Drags nearby enemies towards herself for a short while, dealing magic damage over time.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RellR.png",
				},
			],
		roles: "Tank, Support",
		lane: ""
	},
	{
		id: "RekSai",
		name: "Rek'Sai",
		title: "the Void Burrower",
		lore: "An apex predator, Rek'Sai is a merciless Void-spawn that tunnels beneath the ground to ambush and devour unsuspecting prey. Her insatiable hunger has laid waste to entire regions of the once-great empire of Shurima—merchants, traders, even armed caravans, will go hundreds of miles out of their way to avoid her and her offspring's hunting grounds. All know that once Rek'Sai is seen on the horizon, death from below is all but guaranteed.",
		skins: "0, 1, 2, 9, 17",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/RekSai_0.jpg",
		passiveName: "Fury of the Xer'Sai",
		passiveDescription: "Rek'sai generates Fury by Attack and hitting with basic abilities. She consumes this Fury while Burrowed to restore health.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/RekSai_Passive.png",
		spells:
			[
				{
					spellId: "RekSaiQ",
					spellName: "Queen's Wrath / Prey Seeker",
					spellDescription: "Rek'Sai's next 3 basic attacks deal bonus Physical Damage to nearby enemies. While Burrowed, Rek'Sai launches a burst of void-charged earth that deals Physical Damage and reveals enemies hit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RekSaiQ.png",
				}, {
					spellId: "RekSaiW",
					spellName: "Burrow / Un-burrow",
					spellDescription: "Rek'Sai burrows into the ground, gaining new abilities and increased Move Speed. Her vision range is reduced and she cannot use basic attacks. While Burrowed, Rek'Sai may cast Un-burrow to knock up and damage nearby enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RekSaiW.png",
				}, {
					spellId: "RekSaiE",
					spellName: "Furious Bite / Tunnel",
					spellDescription: "Rek'Sai bites her target, dealing double and True Damage if she has max Fury. While Burrowed, Rek'Sai creates a re-usable, long lasting tunnel. Enemies can destroy it by standing on top of either entrance.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RekSaiE.png",
				}, {
					spellId: "RekSaiRWrapper",
					spellName: "Void Rush",
					spellDescription: "Rek'sai passively marks targets by damaging them. She can activate this ability to become briefly untargetable and lunge at a marked target for heavy damage based on their missing health.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RekSaiRWrapper.png",
				},
			],
		roles: "Fighter",
		lane: ""
	},
	{
		id: "Renata",
		name: "Renata Glasc",
		title: "the Chem-Baroness",
		lore: "Renata Glasc rose from the ashes of her childhood home with nothing but her name and her parents' alchemical research. In the decades since, she has become Zaun's wealthiest chem-baron, a business magnate who built her power by tying everyone's interests to her own. Work with her, and be rewarded beyond measure. Work against her, and live to regret it. But everyone comes to her side, eventually.",
		skins: "0, 1, 10",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Renata_0.jpg",
		passiveName: "Leverage",
		passiveDescription: "Renata's Attacks deal bonus damage and mark enemies. Renata's allies can damage marked enemies to deal bonus damage.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Renata_P.png",
		spells:
			[
				{
					spellId: "RenataQ",
					spellName: "Handshake",
					spellDescription: "Renata sends out a missile rooting the first enemy hit, and can recast the ability to throw the unit in a direction.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RenataQ.png",
				}, {
					spellId: "RenataW",
					spellName: "Bailout",
					spellDescription: "Renata buffs an allied champion to fight harder, delaying their death and potentially saving them if they get a takedown.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RenataW.png",
				}, {
					spellId: "RenataE",
					spellName: "Loyalty Program",
					spellDescription: "Renata sends out a pair of chemtech missiles, shielding allies and damaging and slowing enemies hit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RenataE.png",
				}, {
					spellId: "RenataR",
					spellName: "Hostile Takeover",
					spellDescription: "Renata sends out a wave of chemicals, causing any enemies hit to go Berserk.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RenataR.png",
				},
			],
		roles: "Support, Mage",
		lane: ""
	},
	{
		id: "Renekton",
		name: "Renekton",
		title: "the Butcher of the Sands",
		lore: "Renekton is a terrifying, rage-fueled Ascended being from the scorched deserts of Shurima. Once, he was his empire's most esteemed warrior, leading the nation's armies to countless victories. However, after the empire's fall, Renekton was entombed beneath the sands, and slowly, as the world turned and changed, he succumbed to insanity. Now free once more, he is utterly consumed with finding and killing his brother, Nasus, who he blames, in his madness, for the centuries he spent in darkness.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 17, 18, 26",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Renekton_0.jpg",
		passiveName: "Reign of Anger",
		passiveDescription: "Renekton's attacks generate Fury, increased when he is low on life. This Fury can empower his abilities with bonus effects.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Renekton_Passive.png",
		spells:
			[
				{
					spellId: "RenektonCleave",
					spellName: "Cull the Meek",
					spellDescription: "Renekton swings his blade, dealing moderate physical damage to all targets around him, and heals for a small portion of the damage dealt. If he has more than 50 Fury, his damage and heal are increased.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RenektonCleave.png",
				}, {
					spellId: "RenektonPreExecute",
					spellName: "Ruthless Predator",
					spellDescription: "Renekton slashes his target twice, dealing moderate physical damage and stuns them for 0.75 seconds. If Renekton has more than 50 Fury, he slashes his target three times, destroying damage shields on the target, dealing high physical damage, and stunning them for 1.5 seconds.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RenektonPreExecute.png",
				}, {
					spellId: "RenektonSliceAndDice",
					spellName: "Slice and Dice",
					spellDescription: "Renekton dashes, dealing damage to units along the way. Empowered, Renekton deals bonus damage and reduces the Armor of units hit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RenektonSliceAndDice.png",
				}, {
					spellId: "RenektonReignOfTheTyrant",
					spellName: "Dominus",
					spellDescription: "Renekton transforms into the Tyrant form, gaining bonus Health and dealing damage to enemies around him. While in this form, Renekton gains Fury periodically.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RenektonReignOfTheTyrant.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Rengar",
		name: "Rengar",
		title: "the Pridestalker",
		lore: "Rengar is a ferocious vastayan trophy hunter who lives for the thrill of tracking down and killing dangerous creatures. He scours the world for the most fearsome beasts he can find, especially seeking any trace of Kha'Zix, the void creature who scratched out his eye. Rengar stalks his prey neither for food nor glory, but for the sheer beauty of the pursuit.",
		skins: "0, 1, 2, 3, 8, 15, 23, 30",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rengar_0.jpg",
		passiveName: "Unseen Predator",
		passiveDescription: "While in Brush, Rengar leaps at his target with his basic attack. Rengar generates Ferocity whenever he casts an ability. At Max Ferocity, his next ability is empowered. Killing enemy champions awards trophies on Rengar's Bonetooth Necklace, granting bonus attack damage.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Rengar_P.png",
		spells:
			[
				{
					spellId: "RengarQ",
					spellName: "Savagery",
					spellDescription: "Rengar's next attack brutally stabs his target for bonus damage. Ferocity effect: deals increased damage and grants Attack Speed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RengarQ.png",
				}, {
					spellId: "RengarW",
					spellName: "Battle Roar",
					spellDescription: "Rengar lets out a battle roar, damaging enemies and healing for some of the recent damage he has taken. Ferocity effect: additionally breaks crowd control effects.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RengarW.png",
				}, {
					spellId: "RengarE",
					spellName: "Bola Strike",
					spellDescription: "Rengar throws a bola, slowing the first target hit for a short duration. Ferocity effect: roots the target.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RengarE.png",
				}, {
					spellId: "RengarR",
					spellName: "Thrill of the Hunt",
					spellDescription: "Rengar's predatory instincts take over, Camouflaging him and revealing the nearest enemy champion in a large radius around him. During Thrill of the Hunt, Rengar gains Move Speed and he can leap to the tracked enemy without being in brush, reducing their armor.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RengarR.png",
				},
			],
		roles: "Assassin, Fighter",
		lane: ""
	},
	{
		id: "Riven",
		name: "Riven",
		title: "the Exile",
		lore: "Once a swordmaster in the warhosts of Noxus, Riven is an expatriate in a land she previously tried to conquer. She rose through the ranks on the strength of her conviction and brutal efficiency, and was rewarded with a legendary runic blade and a warband of her own. However, on the Ionian front, Riven's faith in her homeland was tested and ultimately broken. Having severed all ties to the empire, she now seeks to find her place in a shattered world, even as rumors abound that Noxus itself has been reforged...",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 16, 18, 20, 22, 23, 34, 44, 45",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Riven_0.jpg",
		passiveName: "Runic Blade",
		passiveDescription: "Riven's abilities charge her blade, and her basic attacks expend charges to deal an additional damage.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/RivenRunicBlades.png",
		spells:
			[
				{
					spellId: "RivenTriCleave",
					spellName: "Broken Wings",
					spellDescription: "Riven lashes out in a series of strikes. This ability can be reactivated three times in a short time frame with the third hit knocking back nearby enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RivenTriCleave.png",
				}, {
					spellId: "RivenMartyr",
					spellName: "Ki Burst",
					spellDescription: "Riven emits a Ki Burst, damaging and stunning nearby enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RivenMartyr.png",
				}, {
					spellId: "RivenFeint",
					spellName: "Valor",
					spellDescription: "Riven steps forward a short distance and blocks incoming damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RivenFeint.png",
				}, {
					spellId: "RivenFengShuiEngine",
					spellName: "Blade of the Exile",
					spellDescription: "Riven empowers her keepsake weapon with energy, and gains Attack Damage and Range. During this time, she also gains the ability to use Wind Slash, a powerful ranged attack, once.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RivenFengShuiEngine.png",
				},
			],
		roles: "Fighter, Assassin",
		lane: ""
	},
	{
		id: "Rumble",
		name: "Rumble",
		title: "the Mechanized Menace",
		lore: "Rumble is a young inventor with a temper. Using nothing more than his own two hands and a heap of scrap, the feisty yordle constructed a colossal mech suit outfitted with an arsenal of electrified harpoons and incendiary rockets. Though others may scoff and sneer at his junkyard creations, Rumble doesn't mind—after all, he's the one with the flamespitter.",
		skins: "0, 1, 2, 3, 4, 13",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rumble_0.jpg",
		passiveName: "Junkyard Titan",
		passiveDescription: "Every spell Rumble casts gives him Heat. When he reaches 50% Heat he reaches Danger Zone, granting all his basic abilities bonus effects. When he reaches 100% Heat, he starts Overheating, gaining bonus Attack Speed and granting his basic attacks bonus damage, but making him unable to cast spells for a few seconds.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Rumble_JunkyardTitan1.png",
		spells:
			[
				{
					spellId: "RumbleFlameThrower",
					spellName: "Flamespitter",
					spellDescription: "Rumble torches opponents in front of him, dealing magic damage in a cone for 3 seconds. While in Danger Zone this damage is increased.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RumbleFlameThrower.png",
				}, {
					spellId: "RumbleShield",
					spellName: "Scrap Shield",
					spellDescription: "Rumble pulls up a shield, protecting him from damage and granting him a quick burst of speed. While in Danger Zone, the shield strength and speed bonus is increased.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RumbleShield.png",
				}, {
					spellId: "RumbleGrenade",
					spellName: "Electro Harpoon",
					spellDescription: "Rumble launches a harpoon, electrocuting his target with magic damage, slowing their Move Speed, and reducing their Magic Resist. Rumble can carry 2 harpoons at a time. While in Danger Zone the damage and slow percentage is increased.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RumbleGrenade.png",
				}, {
					spellId: "RumbleCarpetBomb",
					spellName: "The Equalizer",
					spellDescription: "Rumble fires off a group of rockets, creating a wall of flames that damages and slows enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RumbleCarpetBomb.png",
				},
			],
		roles: "Fighter, Mage",
		lane: ""
	},
	{
		id: "Ryze",
		name: "Ryze",
		title: "the Rune Mage",
		lore: "Widely considered one of the most adept sorcerers on Runeterra, Ryze is an ancient, hard-bitten archmage with an impossibly heavy burden to bear. Armed with immense arcane power and a boundless constitution, he tirelessly hunts for World Runes—fragments of the raw magic that once shaped the world from nothingness. He must retrieve these artifacts before they fall into the wrong hands, for Ryze understands the horrors they could unleash on Runeterra.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 20",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ryze_0.jpg",
		passiveName: "Arcane Mastery",
		passiveDescription: "Ryze's spells deal extra damage based on his Bonus Mana, and he gains a percentage increase to his maximum Mana based on his Ability Power.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Ryze_P.png",
		spells:
			[
				{
					spellId: "RyzeQWrapper",
					spellName: "Overload",
					spellDescription: "Passively, Ryze's other basic abilities reset the cooldown of Overload and charge a rune. When Ryze casts Overload with 2 runes charged, he gains a brief burst of Move Speed. On cast, Ryze throws a charge of pure energy in a line, dealing damage to the first enemy struck. If the target has Flux on it, Overload deals extra damage and bounces to nearby enemies with Flux.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RyzeQWrapper.png",
				}, {
					spellId: "RyzeW",
					spellName: "Rune Prison",
					spellDescription: "Ryze traps a target in a cage of runes, damaging them and slowing their movement. If the target has Flux on it, they are instead rooted.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RyzeW.png",
				}, {
					spellId: "RyzeE",
					spellName: "Spell Flux",
					spellDescription: "Ryze releases an orb of pure magical power that damages an enemy and debuffs all nearby enemies. Ryze's spells have additional effects against the debuffed enemy.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RyzeE.png",
				}, {
					spellId: "RyzeR",
					spellName: "Realm Warp",
					spellDescription: "Passively, Overload deals even more damage against targets with Flux. On cast, Ryze creates a portal to a nearby location. After a few seconds, allies standing near the portal are teleported to the target location.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/RyzeR.png",
				},
			],
		roles: "Mage, Fighter",
		lane: ""
	},
	{
		id: "Samira",
		name: "Samira",
		title: "the Desert Rose",
		lore: "Samira stares death in the eye with unyielding confidence, seeking thrill wherever she goes. After her Shuriman home was destroyed as a child, Samira found her true calling in Noxus, where she built a reputation as a stylish daredevil taking on dangerous missions of the highest caliber. Wielding black-powder pistols and a custom-engineered blade, Samira thrives in life-or-death circumstances, eliminating any who stand in her way with flash and flair.",
		skins: "0, 1, 10, 20",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Samira_0.jpg",
		passiveName: "Daredevil Impulse",
		passiveDescription: "Samira builds a combo by hitting attacks or abilities unique from the previous hit. Samira's attacks in melee range deal additional magic damage. Samira's attacks against enemies affected by Immobilizing effects will dash her to her attack range. If the enemy is Knocked Up, she also keeps them Knocked Up briefly.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/SamiraP.png",
		spells:
			[
				{
					spellId: "SamiraQ",
					spellName: "Flair",
					spellDescription: "Samira fires a shot or swings her sword, dealing damage. If cast during Wild Rush, strike all enemies in her path upon completion.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SamiraQ.png",
				}, {
					spellId: "SamiraW",
					spellName: "Blade Whirl",
					spellDescription: "Samira slashes around her, damaging enemies and destroying enemy missiles.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SamiraW.png",
				}, {
					spellId: "SamiraE",
					spellName: "Wild Rush",
					spellDescription: "Samira dashes through an enemy (including structures), slashing enemies she passes through and gaining Attack Speed. Killing an enemy champion refreshes this ability's cooldown.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SamiraE.png",
				}, {
					spellId: "SamiraR",
					spellName: "Inferno Trigger",
					spellDescription: "Samira unleashes a torrent of shots from her weapons, wildly shooting all enemies surrounding her.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SamiraR.png",
				},
			],
		roles: "Marksman",
		lane: ""
	},
	{
		id: "Senna",
		name: "Senna",
		title: "the Redeemer",
		lore: "Cursed from childhood to be haunted by the supernatural Black Mist, Senna joined a sacred order known as the Sentinels of Light, and fiercely fought back—only to be killed, her soul imprisoned in a lantern by the cruel wraith Thresh. But refusing to lose hope, within the lantern Senna learned to use the Mist, and reemerged to new life, forever changed. Now wielding darkness along with light, Senna seeks to end the Black Mist by turning it against itself—with every blast of her relic weapon, redeeming the souls lost within.",
		skins: "0, 1, 9, 10, 16, 26, 27, 36",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Senna_0.jpg",
		passiveName: "Absolution",
		passiveDescription: "When units die near Senna, their souls are periodically trapped by the Black Mist. Senna can attack these souls to free them, absorbing the Mist that held them in death. Mist fuels her Relic Cannon's power with increased Attack Damage, Attack Range, and Critical Strike Chance. Attacks from Senna's Relic Cannon take longer to fire, deal bonus damage, and briefly grant her a portion of her target's Move Speed.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Senna_Passive.png",
		spells:
			[
				{
					spellId: "SennaQ",
					spellName: "Piercing Darkness",
					spellDescription: "From the twin barrels of her Relic Cannon, Senna fires a unified beam of light and shadow through a target, healing allies and damaging enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SennaQ.png",
				}, {
					spellId: "SennaW",
					spellName: "Last Embrace",
					spellDescription: "Senna sends forth a wave of Black Mist. If it hits an enemy it latches onto them hungrily, rooting them and everything nearby after a brief delay.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SennaW.png",
				}, {
					spellId: "SennaE",
					spellName: "Curse of the Black Mist",
					spellDescription: "Senna draws the Mist she has stored in her weapon into a storm around her, embracing darkness and becoming a wraith within. Allies who enter the area are camouflaged and also appear as wraiths as the Mist shrouds them. Wraiths gain increased Move Speed, are unselectable, and hide their identities.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SennaE.png",
				}, {
					spellId: "SennaR",
					spellName: "Dawning Shadow",
					spellDescription: "Senna calls upon the relic stones of fallen Sentinels, splitting her relic cannon into a holy array of shadow and light. She then fires a global beam that shields allies from harm, while damaging enemies caught in the center.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SennaR.png",
				},
			],
		roles: "Marksman, Support",
		lane: ""
	},
	{
		id: "Sejuani",
		name: "Sejuani",
		title: "Fury of the North",
		lore: "Sejuani is the brutal, unforgiving Iceborn warmother of the Winter's Claw, one of the most feared tribes of the Freljord. Her people's survival is a constant, desperate battle against the elements, forcing them to raid Noxians, Demacians, and Avarosans alike to survive the harsh winters. Sejuani herself spearheads the most dangerous of these attacks from the saddle of her drüvask boar Bristle, using her True Ice flail to freeze and shatter her enemies.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 16, 26, 36",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sejuani_0.jpg",
		passiveName: "Fury of the North",
		passiveDescription: "After being out of combat, Sejuani gains Frost Armor which grants Armor and Magic Resist and immunity to slows. Frost Armor persists for a short time after Sejuani takes damage. Sejuani can damage a stunned enemy to shatter it, dealing massive magic damage.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Sejuani_passive.png",
		spells:
			[
				{
					spellId: "SejuaniQ",
					spellName: "Arctic Assault",
					spellDescription: "Sejuani charges forward, knocking enemies into the air. The charge stops after hitting an enemy champion.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SejuaniQ.png",
				}, {
					spellId: "SejuaniW",
					spellName: "Winter's Wrath",
					spellDescription: "Sejuani swings her mace twice, dealing damage, slowing enemies and applying Frost stacks.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SejuaniW.png",
				}, {
					spellId: "SejuaniE",
					spellName: "Permafrost",
					spellDescription: "Sejuani freezes and stuns an enemy champion that has maximum Frost stacks.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SejuaniE.png",
				}, {
					spellId: "SejuaniR",
					spellName: "Glacial Prison",
					spellDescription: "Sejuani throws her bola that freezes and stuns the first champion hit and creates an ice storm that slows other enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SejuaniR.png",
				},
			],
		roles: "Tank, Fighter",
		lane: ""
	},
	{
		id: "Shaco",
		name: "Shaco",
		title: "the Demon Jester",
		lore: "Crafted long ago as a plaything for a lonely prince, the enchanted marionette Shaco now delights in murder and mayhem. Corrupted by dark magic and the loss of his beloved charge, the once-kind puppet finds pleasure only in the misery of the poor souls he torments. He uses toys and simple tricks to deadly effect, finding the results of his bloody “games” hilarious—and for those who hear a dark chuckle in the dead of night, the Demon Jester may have marked them as his next plaything.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 23, 33",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Shaco_0.jpg",
		passiveName: "Backstab",
		passiveDescription: "Shaco's basic attacks and Two-Shiv Poison deal additional damage when striking from behind.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Jester_CarefulStrikes.png",
		spells:
			[
				{
					spellId: "Deceive",
					spellName: "Deceive",
					spellDescription: "Shaco becomes Invisible and teleports to target location. His first attack while Invisible is empowered, dealing bonus damage and critically striking if he attacks from behind.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Deceive.png",
				}, {
					spellId: "JackInTheBox",
					spellName: "Jack In The Box",
					spellDescription: "Shaco creates a hidden animated Jack-in-the-Box. When triggered, it will fear and attack nearby enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/JackInTheBox.png",
				}, {
					spellId: "TwoShivPoison",
					spellName: "Two-Shiv Poison",
					spellDescription: "Shaco's Shivs passively poison targets on hit, slowing their Move Speed. He can throw his Shivs to deal damage and poison the target. The thrown Shiv deals bonus damage if the target is below 30% health.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TwoShivPoison.png",
				}, {
					spellId: "HallucinateFull",
					spellName: "Hallucinate",
					spellDescription: "Shaco creates an illusion of himself near him, which can attack nearby enemies (Deals reduced damage to turrets). Upon death, it explodes, spawning three mini Jack in the Boxes and dealing damage to nearby enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/HallucinateFull.png",
				},
			],
		roles: "Assassin",
		lane: ""
	},
	{
		id: "Sett",
		name: "Sett",
		title: "the Boss",
		lore: "A leader of Ionia's growing criminal underworld, Sett rose to prominence in the wake of the war with Noxus. Though he began as a humble challenger in the fighting pits of Navori, he quickly gained notoriety for his savage strength, and his ability to take seemingly endless amounts of punishment. Now, having climbed through the ranks of local combatants, Sett has muscled to the top, reigning over the pits he once fought in.",
		skins: "0, 1, 8, 9, 10, 19, 38",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sett_0.jpg",
		passiveName: "Pit Grit",
		passiveDescription: "Sett's basic attacks alternate between left and right punch. Right punch is slightly stronger and faster. Sett also hates losing, gaining additional health regeneration based off of his missing health.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Sett_P.png",
		spells:
			[
				{
					spellId: "SettQ",
					spellName: "Knuckle Down",
					spellDescription: "Sett's next two attacks deal additional damage based off of the target's max health. Sett also gains Move Speed while moving towards enemy champions.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SettQ.png",
				}, {
					spellId: "SettW",
					spellName: "Haymaker",
					spellDescription: "Sett passively stores damage he takes as Grit. On cast, Sett expends all stored Grit to gain a shield and punch an area, dealing true damage in the center and physical damage on the sides.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SettW.png",
				}, {
					spellId: "SettE",
					spellName: "Facebreaker",
					spellDescription: "Sett pulls in all enemies on opposite sides of him, dealing damage and stunning them. If enemies were only on one side, they are slowed instead of stunned.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SettE.png",
				}, {
					spellId: "SettR",
					spellName: "The Show Stopper",
					spellDescription: "Sett carries an enemy champion through the air and slams them into the ground, dealing damage and slowing all enemies near where they land.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SettR.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Seraphine",
		name: "Seraphine",
		title: "the Starry-Eyed Songstress",
		lore: "Born in Piltover to Zaunite parents, Seraphine can hear the souls of others—the world sings to her, and she sings back. Though these sounds overwhelmed her in her youth, she now draws on them for inspiration, turning the chaos into a symphony. She performs for the sister cities to remind their citizens that they're not alone, that they're stronger together, and that, in her eyes, their potential is limitless.",
		skins: "0, 1, 2, 3, 4, 14, 15",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Seraphine_0.jpg",
		passiveName: "Stage Presence",
		passiveDescription: "Every third basic spell will cast twice from Seraphine. Additionally, casting spells near allies grants her bonus magic damage and range on her next basic attack.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Seraphine_Passive.png",
		spells:
			[
				{
					spellId: "SeraphineQ",
					spellName: "High Note",
					spellDescription: "Seraphine deals damage in an area.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SeraphineQ.png",
				}, {
					spellId: "SeraphineW",
					spellName: "Surround Sound",
					spellDescription: "Seraphine Shields and Hastes nearby allies. If she is already Shielded she will Heal nearby allies as well.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SeraphineW.png",
				}, {
					spellId: "SeraphineE",
					spellName: "Beat Drop",
					spellDescription: "Seraphine deals damage and impairs the movement of enemies in a line.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SeraphineE.png",
				}, {
					spellId: "SeraphineR",
					spellName: "Encore",
					spellDescription: "Seraphine deals damage and charms enemies hit, refreshing the range with every allied or enemy champion hit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SeraphineR.png",
				},
			],
		roles: "Mage, Support",
		lane: ""
	},
	{
		id: "Shen",
		name: "Shen",
		title: "the Eye of Twilight",
		lore: "Among the secretive, Ionian warriors known as the Kinkou, Shen serves as their leader, the Eye of Twilight. He longs to remain free from the confusion of emotion, prejudice, and ego, and walks the unseen path of dispassionate judgment between the spirit realm and the physical world. Tasked with enforcing the equilibrium between them, Shen wields blades of steel and arcane energy against any who would threaten it.",
		skins: "0, 1, 2, 3, 4, 5, 6, 15, 16, 22, 40",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Shen_0.jpg",
		passiveName: "Ki Barrier",
		passiveDescription: "After casting a spell, Shen gets a shield. Affecting other champions reduces the cooldown of this effect.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Shen_Passive.png",
		spells:
			[
				{
					spellId: "ShenQ",
					spellName: "Twilight Assault",
					spellDescription: "Shen recalls his spirit blade to attack with it, dealing damage based on the target's max health. The attacks are greatly empowered if it collides with an enemy champion, and all collided enemies are slowed while running away from Shen.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ShenQ.png",
				}, {
					spellId: "ShenW",
					spellName: "Spirit's Refuge",
					spellDescription: "Attacks that would hit Shen or his allies near his spirit blade are blocked.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ShenW.png",
				}, {
					spellId: "ShenE",
					spellName: "Shadow Dash",
					spellDescription: "Shen dashes in a direction, taunting enemies in his path.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ShenE.png",
				}, {
					spellId: "ShenR",
					spellName: "Stand United",
					spellDescription: "Shen shields target allied champion from incoming damage, and soon after teleports to their location.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ShenR.png",
				},
			],
		roles: "Tank",
		lane: ""
	},
	{
		id: "Shyvana",
		name: "Shyvana",
		title: "the Half-Dragon",
		lore: "Shyvana is a creature with the magic of a rune shard burning within her heart. Though she often appears humanoid, she can take her true form as a fearsome dragon, incinerating her foes with fiery breath. Having saved the life of the crown prince Jarvan IV, Shyvana now serves uneasily in his royal guard, struggling to find acceptance among the suspicious people of Demacia.",
		skins: "0, 1, 2, 3, 4, 5, 6, 8",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Shyvana_0.jpg",
		passiveName: "Fury of the Dragonborn",
		passiveDescription: "Shyvana deals bonus damage to dragons and gains Armor and Magic Resistance. As Shyvana and her allies slay more dragons, she gains more bonus Armor and Magic Resistance.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/ShyvanaReinforcedScales.png",
		spells:
			[
				{
					spellId: "ShyvanaDoubleAttack",
					spellName: "Twin Bite",
					spellDescription: "Shyvana strikes twice on her next attack. Basic attacks reduce the cooldown of Twin Bite by 0.5 seconds. Dragon Form: Twin Bite cleaves all units in front of Shyvana.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ShyvanaDoubleAttack.png",
				}, {
					spellId: "ShyvanaImmolationAura",
					spellName: "Burnout",
					spellDescription: "Shyvana surrounds herself in fire, dealing magic damage per second to nearby enemies and moving faster for 3 seconds, part of this damage is applied again when Shyvana basic attacks an enemy with Burnout active. The Move Speed reduces over the duration of the spell. Basic attacks extend the duration of Burnout. Dragon Form: Burnout grows in size.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ShyvanaImmolationAura.png",
				}, {
					spellId: "ShyvanaFireball",
					spellName: "Flame Breath",
					spellDescription: "Shyvana unleashes a fireball that deals damage to all enemies it encounters and leaves cinders on the target, marking them for 5 seconds. Shyvana's basic attacks on marked targets deal a percentage of their maximum Health as damage on-hit. Dragon Form: Flame Breath explodes on impact or at target location, dealing bonus damage and scorching the earth for a short duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ShyvanaFireball.png",
				}, {
					spellId: "ShyvanaTransformCast",
					spellName: "Dragon's Descent",
					spellDescription: "Shyvana transforms into a dragon and takes flight to a target location. Enemies along her path take damage and are knocked toward her target location. Shyvana passively gains Fury per second and gains 2 Fury on basic attack.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ShyvanaTransformCast.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Singed",
		name: "Singed",
		title: "the Mad Chemist",
		lore: "Singed is a Zaunite alchemist of unmatched intellect, who has devoted his life to pushing the boundaries of knowledge—with no price, even his own sanity, too high to pay. Is there a method to his madness? His concoctions rarely fail, but it appears to many that Singed has lost all sense of humanity, leaving a toxic trail of misery and terror in his wake.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Singed_0.jpg",
		passiveName: "Noxious Slipstream",
		passiveDescription: "Singed drafts off nearby champions, gaining a burst of Move Speed when passing them.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Singed_Passive.png",
		spells:
			[
				{
					spellId: "PoisonTrail",
					spellName: "Poison Trail",
					spellDescription: "Leaves a trail of poison behind Singed, dealing damage to enemies caught in the path.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PoisonTrail.png",
				}, {
					spellId: "MegaAdhesive",
					spellName: "Mega Adhesive",
					spellDescription: "Throws a vial of mega adhesive on the ground, slowing and grounding enemies who walk on it.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MegaAdhesive.png",
				}, {
					spellId: "Fling",
					spellName: "Fling",
					spellDescription: "Damages target enemy unit and flings them into the air behind Singed. If the target Singed flings lands in his Mega Adhesive, they are also rooted.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Fling.png",
				}, {
					spellId: "InsanityPotion",
					spellName: "Insanity Potion",
					spellDescription: "Singed drinks a potent brew of chemicals, granting him increased combat stats, and making his Poison Trail apply Grievous Wounds.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/InsanityPotion.png",
				},
			],
		roles: "Tank, Fighter",
		lane: ""
	},
	{
		id: "Sivir",
		name: "Sivir",
		title: "the Battle Mistress",
		lore: "Sivir is a renowned fortune hunter and mercenary captain who plies her trade in the deserts of Shurima. Armed with her legendary jeweled crossblade, she has fought and won countless battles for those who can afford her exorbitant price. Known for her fearless resolve and endless ambition, she prides herself on recovering buried treasures from the perilous tombs of Shurima—for a generous bounty. With ancient forces stirring the very bones of Shurima, Sivir finds herself torn between conflicting destinies.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16, 25, 34, 43, 50, 51",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sivir_0.jpg",
		passiveName: "Fleet of Foot",
		passiveDescription: "Sivir gains a short burst of Move Speed when she attacks an enemy champion.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Sivir_Passive.png",
		spells:
			[
				{
					spellId: "SivirQ",
					spellName: "Boomerang Blade",
					spellDescription: "Sivir hurls her crossblade like a boomerang, dealing damage each way.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SivirQ.png",
				}, {
					spellId: "SivirW",
					spellName: "Ricochet",
					spellDescription: "Sivir's next few basic attacks gain additional attack speed and bounce to nearby targets, dealing reduced damage while bouncing.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SivirW.png",
				}, {
					spellId: "SivirE",
					spellName: "Spell Shield",
					spellDescription: "Creates a magical barrier that blocks a single enemy ability cast on Sivir. She receives health and a burst of movement speed if a spell is blocked.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SivirE.png",
				}, {
					spellId: "SivirR",
					spellName: "On The Hunt",
					spellDescription: "Sivir leads her allies in battle, granting them a surge of Move Speed for a period of time. In addition, Sivir's attacks reduce her spell cooldowns.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SivirR.png",
				},
			],
		roles: "Marksman",
		lane: ""
	},
	{
		id: "Skarner",
		name: "Skarner",
		title: "the Crystal Vanguard",
		lore: "Skarner is an immense crystalline scorpion from a hidden valley in Shurima. Part of the ancient Brackern race, Skarner and his kin are known for their great wisdom and deep connection to the land, as their souls are fused with powerful life crystals which hold the living thoughts and memories of their ancestors. In an age long past, the Brackern entered hibernation to avoid untold magical destruction, but recent, threatening events have roused Skarner. As the only Brackern awake, he strives to protect his kind from those who seek to harm them.",
		skins: "0, 1, 2, 3, 4, 5",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Skarner_0.jpg",
		passiveName: "Crystal Spires",
		passiveDescription: "Skarner's presence causes crystals to spawn in set locations around the map. Crystals can be captured by either team by standing close to them. When near crystals his team owns, Skarner gains Move Speed, attack speed, and increased mana regeneration.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Skarner_Passive.png",
		spells:
			[
				{
					spellId: "SkarnerVirulentSlash",
					spellName: "Crystal Slash",
					spellDescription: "Skarner lashes out with his claws, dealing physical damage to all nearby enemies and charging himself with Crystal Energy for several seconds if a unit is struck. If he casts Crystal Slash again while powered by Crystal Energy, he deals bonus magic damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SkarnerVirulentSlash.png",
				}, {
					spellId: "SkarnerExoskeleton",
					spellName: "Crystalline Exoskeleton",
					spellDescription: "Skarner gains a shield and has increased Move Speed while the shield persists.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SkarnerExoskeleton.png",
				}, {
					spellId: "SkarnerFracture",
					spellName: "Fracture",
					spellDescription: "Skarner summons a blast of crystalline energy which deals damage to enemies struck and slows them. Basic attacking these enemies within a short window will stun them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SkarnerFracture.png",
				}, {
					spellId: "SkarnerImpale",
					spellName: "Impale",
					spellDescription: "Skarner suppresses an enemy champion and deals damage to it. During this time, Skarner can move freely and will drag his helpless victim around with him. When the effect ends, the target will be dealt additional damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SkarnerImpale.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Sona",
		name: "Sona",
		title: "Maven of the Strings",
		lore: "Sona is Demacia's foremost virtuoso of the stringed etwahl, speaking only through her graceful chords and vibrant arias. This genteel manner has endeared her to the highborn, though others suspect her spellbinding melodies to actually emanate magic—a Demacian taboo. Silent to outsiders but somehow understood by close companions, Sona plucks her harmonies not only to soothe injured allies, but also to strike down unsuspecting enemies.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 9, 17, 26, 35",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sona_0.jpg",
		passiveName: "Power Chord",
		passiveDescription: "Accelerando: Sona gains non-Ultimate ability haste permanently for her basic abilities as she uses her abilities well, up to a cap. Beyond that cap, further successful uses reduce her ultimate's remaining cooldown instead. Power Chord: Every few spell casts, Sona's next attack will deal bonus magic damage in addition to an additional effect based on what basic Ability Sona last activated.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Sona_Passive_Charged.png",
		spells:
			[
				{
					spellId: "SonaQ",
					spellName: "Hymn of Valor",
					spellDescription: "Sona plays the Hymn of Valor, sends out bolts of sound, dealing magic damage to two nearby enemies, prioritizing champions and monsters. Sona gains a temporary aura that grants allies tagged by the zone bonus damage on their next attack against enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SonaQ.png",
				}, {
					spellId: "SonaW",
					spellName: "Aria of Perseverance",
					spellDescription: "Sona plays the Aria of Perseverance, sending out protective melodies, healing Sona and a nearby wounded ally. Sona gains a temporary aura that grants allies tagged by the zone a temporary shield.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SonaW.png",
				}, {
					spellId: "SonaE",
					spellName: "Song of Celerity",
					spellDescription: "Sona plays the Song of Celerity, granting nearby allies bonus Move Speed. Sona gains a temporary aura that grants allied champions tagged by the zone bonus Move Speed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SonaE.png",
				}, {
					spellId: "SonaR",
					spellName: "Crescendo",
					spellDescription: "Sona plays her ultimate chord, stunning enemy champions and forcing them to dance and dealing magic damage to them. Each rank reduces the base cooldown of Sona's basic abilities.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SonaR.png",
				},
			],
		roles: "Support, Mage",
		lane: ""
	},
	{
		id: "Swain",
		name: "Swain",
		title: "the Noxian Grand General",
		lore: "Jericho Swain is the visionary ruler of Noxus, an expansionist nation that reveres only strength. Though he was cast down and crippled in the Ionian wars, his left arm severed, he seized control of the empire with ruthless determination… and a new, demonic hand. Now, Swain commands from the front lines, marching against a coming darkness that only he can see—in glimpses gathered by shadowy ravens from the corpses all around him. In a swirl of sacrifice and secrets, the greatest secret of all is that the true enemy lies within.",
		skins: "0, 1, 2, 3, 4, 11, 12, 21",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Swain_0.jpg",
		passiveName: "Ravenous Flock",
		passiveDescription: "Swain's ravens collect Soul Fragments that heal him and permanently increase his maximum health.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Swain_P.png",
		spells:
			[
				{
					spellId: "SwainQ",
					spellName: "Death's Hand",
					spellDescription: "Swain unleashes several bolts of eldritch power that pierce through enemies. Enemies hit take more damage for each bolt they are struck by.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SwainQ.png",
				}, {
					spellId: "SwainW",
					spellName: "Vision of Empire",
					spellDescription: "Swain opens a demon eye that deals damage and slows enemies. Champions hit are revealed and also grant Swain a Soul Fragment.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SwainW.png",
				}, {
					spellId: "SwainE",
					spellName: "Nevermove",
					spellDescription: "Swain launches a wave of demonic power forward. It then returns to Swain and roots enemies it hits. Swain can then choose to pull all rooted champions closer. This ability has a shorter cooldown during Demonic Ascension.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SwainE.png",
				}, {
					spellId: "SwainR",
					spellName: "Demonic Ascension",
					spellDescription: "Swain transforms into a demon and drains health from nearby enemy champions, minions, and neutral monsters. Swain can cast Demonflare to decimate and slow nearby enemies with a nova of soulfire. This form is indefinite as long as Swain drains enemy champions.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SwainR.png",
				},
			],
		roles: "Mage, Fighter",
		lane: ""
	},
	{
		id: "Soraka",
		name: "Soraka",
		title: "the Starchild",
		lore: "A wanderer from the celestial dimensions beyond Mount Targon, Soraka gave up her immortality to protect the mortal races from their own more violent instincts. She endeavors to spread the virtues of compassion and mercy to everyone she meets—even healing those who would wish harm upon her. And, for all Soraka has seen of this world's struggles, she still believes the people of Runeterra have yet to reach their full potential.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 27",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Soraka_0.jpg",
		passiveName: "Salvation",
		passiveDescription: "Soraka runs faster towards nearby low health allies.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Soraka_Passive.png",
		spells:
			[
				{
					spellId: "SorakaQ",
					spellName: "Starcall",
					spellDescription: "A star falls from the sky at the target location dealing magic damage and slowing enemies. If an enemy champion is hit by Starcall, Soraka recovers Health.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SorakaQ.png",
				}, {
					spellId: "SorakaW",
					spellName: "Astral Infusion",
					spellDescription: "Soraka sacrifices a portion of her own health to heal another friendly champion.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SorakaW.png",
				}, {
					spellId: "SorakaE",
					spellName: "Equinox",
					spellDescription: "Creates a zone at a location that silences all enemies inside. When the zone expires, all enemies still inside are rooted.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SorakaE.png",
				}, {
					spellId: "SorakaR",
					spellName: "Wish",
					spellDescription: "Soraka fills her allies with hope, instantly restoring health to herself and all allied champions.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SorakaR.png",
				},
			],
		roles: "Support, Mage",
		lane: ""
	},
	{
		id: "Syndra",
		name: "Syndra",
		title: "the Dark Sovereign",
		lore: "Syndra is a fearsome Ionian mage with incredible power at her command. As a child, she disturbed the village elders with her reckless and wild magic. She was sent away to be taught greater control, but eventually discovered her supposed mentor was restraining her abilities. Forming her feelings of betrayal and hurt into dark spheres of energy, Syndra has sworn to destroy all who would try to control her.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 16, 25, 34, 44",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Syndra_0.jpg",
		passiveName: "Transcendent",
		passiveDescription: "Syndra collects Splinters of Wrath from gaining levels and damaging enemies which upgrade her abilities. Dark Sphere: Syndra can hold an additional charge. Force of Will: Bonus true damage. Scatter the Weak: Increased width and slows all targets. Unleashed Power: Executes low health targets",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/SyndraPassive.png",
		spells:
			[
				{
					spellId: "SyndraQ",
					spellName: "Dark Sphere",
					spellDescription: "Syndra conjures a Dark Sphere dealing magic damage. The sphere remains and can be manipulated by her other powers.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SyndraQ.png",
				}, {
					spellId: "SyndraW",
					spellName: "Force of Will",
					spellDescription: "Syndra picks up and throws a Dark Sphere or enemy minion dealing magic damage and slowing the Move Speed of enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SyndraW.png",
				}, {
					spellId: "SyndraE",
					spellName: "Scatter the Weak",
					spellDescription: "Syndra knocks enemies and Dark Spheres back dealing magic damage. Enemies hit by Dark Spheres become stunned.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SyndraE.png",
				}, {
					spellId: "SyndraR",
					spellName: "Unleashed Power",
					spellDescription: "Syndra bombards an enemy Champion with all of her Dark Spheres.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SyndraR.png",
				},
			],
		roles: "Mage",
		lane: ""
	},
	{
		id: "Sylas",
		name: "Sylas",
		title: "the Unshackled",
		lore: "Raised in one of Demacia's lesser quarters, Sylas of Dregbourne has come to symbolize the darker side of the Great City. As a boy, his ability to root out hidden sorcery caught the attention of the notorious mageseekers, who eventually imprisoned him for turning those same powers against them. Having now broken free, Sylas lives as a hardened revolutionary, using the magic of those around him to destroy the kingdom he once served… and his band of outcast mage followers seems to grow by the day.",
		skins: "0, 1, 8, 13, 14, 24, 34",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sylas_0.jpg",
		passiveName: "Petricite Burst",
		passiveDescription: "After casting a spell, Sylas stores a charge of Petricite Burst. Sylas's basic attacks will expend a charge and whirl his energized chains around him dealing bonus magic damage to enemies hit. While Sylas has a charge of Petricite Burst, he gains attack speed. ",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/SylasP.png",
		spells:
			[
				{
					spellId: "SylasQ",
					spellName: "Chain Lash",
					spellDescription: "Sylas lashes his chains out, intersecting at his targeted location dealing damage to and slowing enemies. After a delay, magical energy explodes from the intersection point dealing damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SylasQ.png",
				}, {
					spellId: "SylasW",
					spellName: "Kingslayer",
					spellDescription: "Sylas lunges at an enemy with magical force dealing damage and healing himself against enemy champions.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SylasW.png",
				}, {
					spellId: "SylasE",
					spellName: "Abscond / Abduct",
					spellDescription: "Sylas dashes to a location. Sylas can recast the ability to throw his chains out, pulling himself to an enemy he hits.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SylasE.png",
				}, {
					spellId: "SylasR",
					spellName: "Hijack",
					spellDescription: "Sylas steals the enemy's ultimate ability and can cast it freely.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SylasR.png",
				},
			],
		roles: "Mage, Assassin",
		lane: ""
	},
	{
		id: "TahmKench",
		name: "Tahm Kench",
		title: "The River King",
		lore: "Known by many names throughout history, the demon Tahm Kench travels the waterways of Runeterra, feeding his insatiable appetite with the misery of others. Though he may appear singularly charming and proud, he swaggers through the physical realm like a vagabond in search of unsuspecting prey. His lashing tongue can stun even a heavily armored warrior from a dozen paces, and to fall into his rumbling belly is to tumble into an abyss from which there is little hope of return.",
		skins: "0, 1, 2, 3, 11, 20",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/TahmKench_0.jpg",
		passiveName: "An Acquired Taste",
		passiveDescription: "Tahm Kench puts the heft of his immense body behind his attacks, gaining extra damage based on his total health. Damaging enemy champions builds stacks of An Acquired Taste. At three stacks, he can use Devour on an enemy champion.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/TahmKenchP.png",
		spells:
			[
				{
					spellId: "TahmKenchQ",
					spellName: "Tongue Lash",
					spellDescription: "Tahm Kench lashes out with his tongue, damaging and slowing the first unit hit and healing himself if he strikes an enemy champion. Applies a stack of An Acquired Taste to enemy champions. If the champion already has 3 stacks of An Acquired Taste, they are stunned and the stacks are consumed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TahmKenchQ.png",
				}, {
					spellId: "TahmKenchW",
					spellName: "Abyssal Dive",
					spellDescription: "Dive down and then re-appear at target location, damaging and knocking up all enemies in an area.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TahmKenchW.png",
				}, {
					spellId: "TahmKenchE",
					spellName: "Thick Skin",
					spellDescription: "Passive: Tahm Kench stores a percent of the damage he takes and heals based on it while out of combat. Active: Convert all stored damage into a temporary shield.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TahmKenchE.png",
				}, {
					spellId: "TahmKenchRWrapper",
					spellName: "Devour",
					spellDescription: "Tahm Kench devours a champion for a few seconds, dealing magic damage if they are an enemy, or shielding them if they are an ally.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TahmKenchRWrapper.png",
				},
			],
		roles: "Support, Tank",
		lane: ""
	},
	{
		id: "Taliyah",
		name: "Taliyah",
		title: "the Stoneweaver",
		lore: "Taliyah is a nomadic mage from Shurima, torn between teenage wonder and adult responsibility. She has crossed nearly all of Valoran on a journey to learn the true nature of her growing powers, though more recently she has returned to protect her tribe. Some have mistaken her compassion for weakness and paid the ultimate price—for beneath Taliyah's youthful demeanor is a will strong enough to move mountains, and a spirit fierce enough to make the earth itself tremble.",
		skins: "0, 1, 2, 3, 11",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Taliyah_0.jpg",
		passiveName: "Rock Surfing",
		passiveDescription: "Taliyah gains Move Speed near walls.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Taliyah_Passive.png",
		spells:
			[
				{
					spellId: "TaliyahQ",
					spellName: "Threaded Volley",
					spellDescription: "Taliyah throws a volley of rocks in a target direction, moving freely as she casts. This creates Worked Ground below her. If Taliyah casts Threaded Volley on Worked Ground, she consumes the ground to throw a stronger boulder that slows enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TaliyahQ.png",
				}, {
					spellId: "TaliyahWVC",
					spellName: "Seismic Shove",
					spellDescription: "Taliyah causes an area of ground to erupt and throws enemies within it in a direction of her choosing.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TaliyahWVC.png",
				}, {
					spellId: "TaliyahE",
					spellName: "Unraveled Earth",
					spellDescription: "Taliyah creates a slowing minefield. If enemies dash through it or are knocked through it, the mines explode and stun them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TaliyahE.png",
				}, {
					spellId: "TaliyahR",
					spellName: "Weaver's Wall",
					spellDescription: "Taliyah creates a very long wall and then surfs it.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TaliyahR.png",
				},
			],
		roles: "Mage, Support",
		lane: ""
	},
	{
		id: "Talon",
		name: "Talon",
		title: "the Blade's Shadow",
		lore: "Talon is the knife in the darkness, a merciless killer able to strike without warning and escape before any alarm is raised. He carved out a dangerous reputation on the brutal streets of Noxus, where he was forced to fight, kill, and steal to survive. Adopted by the notorious Du Couteau family, he now plies his deadly trade at the empire's command, assassinating enemy leaders, captains, and heroes… as well as any Noxian foolish enough to earn the scorn of their masters.",
		skins: "0, 1, 2, 3, 4, 5, 12, 20, 29, 38, 39",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Talon_0.jpg",
		passiveName: "Blade's End",
		passiveDescription: "Talon's spells Wound champions and large monsters, stacking up to 3 times. When Talon attacks a champion with 3 stacks of Wound, they bleed for heavy damage over time.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/TalonP.png",
		spells:
			[
				{
					spellId: "TalonQ",
					spellName: "Noxian Diplomacy",
					spellDescription: "Talon stabs the target unit. If they are within melee range, this attack deals critical damage. If they are outside melee range, Talon will leap at his target before stabbing them. Talon refunds some health and cooldown if this ability kills the target.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TalonQ.png",
				}, {
					spellId: "TalonW",
					spellName: "Rake",
					spellDescription: "Talon sends out a volley of daggers that then return back to him, dealing physical damage every time it passes through an enemy. The returning blades deal bonus damage and slow units hit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TalonW.png",
				}, {
					spellId: "TalonE",
					spellName: "Assassin's Path",
					spellDescription: "Talon vaults over any terrain or structure, up to a max distance. This ability has a low cooldown, but puts the used terrain on a long cooldown.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TalonE.png",
				}, {
					spellId: "TalonR",
					spellName: "Shadow Assault",
					spellDescription: "Talon disperses a ring of blades and becomes Invisible while gaining additional Move Speed. When Talon emerges from Invisibility, the blades converge on his location. Each time the blades move, Shadow Assault deals physical damage to enemies hit by at least one blade.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TalonR.png",
				},
			],
		roles: "Assassin",
		lane: ""
	},
	{
		id: "Teemo",
		name: "Teemo",
		title: "the Swift Scout",
		lore: "Undeterred by even the most dangerous and threatening of obstacles, Teemo scouts the world with boundless enthusiasm and a cheerful spirit. A yordle with an unwavering sense of morality, he takes pride in following the Bandle Scout's Code, sometimes with such eagerness that he is unaware of the broader consequences of his actions. Though some say the existence of the Scouts is questionable, one thing is for certain: Teemo's conviction is nothing to be trifled with.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 14, 18, 25, 27, 37, 47",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Teemo_0.jpg",
		passiveName: "Guerrilla Warfare",
		passiveDescription: "If Teemo stands still and takes no actions for a short duration, he becomes Invisible indefinitely. If he's in brush, Teemo can enter and maintain his Invisibility while moving. After leaving Invisibility, Teemo gains the Element of Surprise, increasing his Attack Speed for a few seconds.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Teemo_P.png",
		spells:
			[
				{
					spellId: "BlindingDart",
					spellName: "Blinding Dart",
					spellDescription: "Obscures an enemy's vision with a powerful venom, dealing damage to the target unit and blinding it for the duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BlindingDart.png",
				}, {
					spellId: "MoveQuick",
					spellName: "Move Quick",
					spellDescription: "Teemo scampers around, passively increasing his Move Speed until he is struck by an enemy champion or turret. Teemo can sprint to gain bonus Move Speed that isn't stopped by being struck for a short time.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MoveQuick.png",
				}, {
					spellId: "ToxicShot",
					spellName: "Toxic Shot",
					spellDescription: "Each of Teemo's attacks will poison the target, dealing damage on impact and each second after for 4 seconds.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ToxicShot.png",
				}, {
					spellId: "TeemoRCast",
					spellName: "Noxious Trap",
					spellDescription: "Teemo throws an explosive poisonous trap using one of the mushrooms stored in his pack. If an enemy steps on the trap, it will release a poisonous cloud, slowing enemies and damaging them over time. If Teemo throws a mushroom onto another mushroom it will bounce, gaining additional range.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TeemoRCast.png",
				},
			],
		roles: "Marksman, Assassin",
		lane: ""
	},
	{
		id: "Taric",
		name: "Taric",
		title: "the Shield of Valoran",
		lore: "Taric is the Aspect of the Protector, wielding incredible power as Runeterra's guardian of life, love, and beauty. Shamed by a dereliction of duty and exiled from his homeland Demacia, Taric ascended Mount Targon to find redemption, only to discover a higher calling among the stars. Imbued with the might of ancient Targon, the Shield of Valoran now stands ever vigilant against the insidious corruption of the Void.",
		skins: "0, 1, 2, 3, 4, 9, 18",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Taric_0.jpg",
		passiveName: "Bravado",
		passiveDescription: "Spellcasts empower Taric's next 2 basic attacks to deal bonus magic damage, reduce his spell cooldowns, and attack in quick succession.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Taric_Passive.png",
		spells:
			[
				{
					spellId: "TaricQ",
					spellName: "Starlight's Touch",
					spellDescription: "Heals nearby allied champions based on charges stored. Bravado-empowered attacks grant a charge of Starlight's Touch.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TaricQ.png",
				}, {
					spellId: "TaricW",
					spellName: "Bastion",
					spellDescription: "Passively increase the Armor of Taric and any allied champion with Bastion. Actively shields an ally and grants them Bastion for as long as they remain near Taric. Taric's spells also cast off the ally with Bastion.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TaricW.png",
				}, {
					spellId: "TaricE",
					spellName: "Dazzle",
					spellDescription: "Taric readies a beam of starlight that, after a brief delay, deals magic damage and stuns enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TaricE.png",
				}, {
					spellId: "TaricR",
					spellName: "Cosmic Radiance",
					spellDescription: "Pulses cosmic energy onto nearby allied champions after a delay, making them invulnerable for a short duration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TaricR.png",
				},
			],
		roles: "Support, Fighter",
		lane: ""
	},
	{
		id: "Sion",
		name: "Sion",
		title: "The Undead Juggernaut",
		lore: "A war hero from a bygone era, Sion was revered in Noxus for choking the life out of a Demacian king with his bare hands—but, denied oblivion, he was resurrected to serve his empire even in death. His indiscriminate slaughter claimed all who stood in his way, regardless of allegiance, proving he no longer retained his former humanity. Even so, with crude armor bolted onto rotten flesh, Sion continues to charge into battle with reckless abandon, struggling to remember his true self between the swings of his mighty axe.",
		skins: "0, 1, 2, 3, 4, 5, 14, 22, 30",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sion_0.jpg",
		passiveName: "Glory in Death",
		passiveDescription: "After being killed, Sion will temporarily reanimate with rapidly decaying Health. His attacks become very rapid, heal him, and deal bonus damage based on his target's maximum Health.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Sion_Passive1.png",
		spells:
			[
				{
					spellId: "SionQ",
					spellName: "Decimating Smash",
					spellDescription: "Sion charges a powerful swing in an area in front of himself that will deal damage to enemies when released. If he charges for enough time, enemies hit by the swing will also be knocked up and stunned.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SionQ.png",
				}, {
					spellId: "SionW",
					spellName: "Soul Furnace",
					spellDescription: "Sion shields himself and can reactivate after 3 seconds to deal Magic Damage to enemies nearby. When Sion kills enemies, he passively gains maximum Health.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SionW.png",
				}, {
					spellId: "SionE",
					spellName: "Roar of the Slayer",
					spellDescription: "Sion fires a short range shockwave that damages and slows and reduces the Armor of the first enemy hit. If the shockwave hits a minion or monster, it will be knocked back, damaging, slowing, and reducing the Armor of all enemies that it passes through.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SionE.png",
				}, {
					spellId: "SionR",
					spellName: "Unstoppable Onslaught",
					spellDescription: "Sion charges in a direction, ramping up speed over time. He can steer his charge slightly with the mouse cursor location. When he collides with an enemy he deals damage and knocks them up based on the distance he has charged.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SionR.png",
				},
			],
		roles: "Tank, Fighter",
		lane: ""
	},
	{
		id: "Thresh",
		name: "Thresh",
		title: "the Chain Warden",
		lore: "Sadistic and cunning, Thresh is an ambitious and restless spirit of the Shadow Isles. Once the custodian of countless arcane secrets, he was undone by a power greater than life or death, and now sustains himself by tormenting and breaking others with slow, excruciating inventiveness. His victims suffer far beyond their brief mortal coil as Thresh wreaks agony upon their souls, imprisoning them in his unholy lantern to torture for all eternity.",
		skins: "0, 1, 2, 3, 4, 5, 6, 13, 14, 15, 17, 27, 28, 38, 39",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Thresh_0.jpg",
		passiveName: "Damnation",
		passiveDescription: "Thresh can harvest the souls of enemies that die near him, permanently granting him Armor and Ability Power.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Thresh_Passive.png",
		spells:
			[
				{
					spellId: "ThreshQ",
					spellName: "Death Sentence",
					spellDescription: "Thresh binds an enemy in chains and pulls them toward him. Activating this ability a second time pulls Thresh to the enemy.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ThreshQ.png",
				}, {
					spellId: "ThreshW",
					spellName: "Dark Passage",
					spellDescription: "Thresh throws out a lantern that shields nearby allied Champions from damage. Allies can click the lantern to dash to Thresh.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ThreshW.png",
				}, {
					spellId: "ThreshE",
					spellName: "Flay",
					spellDescription: "Thresh's attacks wind up, dealing more damage the longer he waits between attacks. When activated, Thresh sweeps his chain, knocking all enemies hit in the direction of the blow.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ThreshE.png",
				}, {
					spellId: "ThreshRPenta",
					spellName: "The Box",
					spellDescription: "A prison of walls that slow and deal damage if broken.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ThreshRPenta.png",
				},
			],
		roles: "Support, Fighter",
		lane: ""
	},
	{
		id: "Tristana",
		name: "Tristana",
		title: "the Yordle Gunner",
		lore: "While many other yordles channel their energy into discovery, invention, or just plain mischief-making, Tristana was always inspired by the adventures of great warriors. She had heard much about Runeterra, its factions, and its wars, and believed her kind could become worthy of legend too. Setting foot in the world for the first time, she took up her trusty cannon Boomer, and now leaps into battle with steadfast courage and optimism.",
		skins: "0, 1, 2, 3, 4, 5, 6, 10, 11, 12, 24, 33, 40, 41, 51",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Tristana_0.jpg",
		passiveName: "Draw a Bead",
		passiveDescription: "Increases Tristana's Attack Range as she levels.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Tristana_Passive.png",
		spells:
			[
				{
					spellId: "TristanaQ",
					spellName: "Rapid Fire",
					spellDescription: "Tristana fires her weapon rapidly, increasing her Attack Speed for a short time.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TristanaQ.png",
				}, {
					spellId: "TristanaW",
					spellName: "Rocket Jump",
					spellDescription: "Tristana fires at the ground to propel her to a distant location, dealing damage and slowing surrounding units for a brief period where she lands.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TristanaW.png",
				}, {
					spellId: "TristanaE",
					spellName: "Explosive Charge",
					spellDescription: "When Tristana kills a unit, her cannonballs burst into shrapnel, dealing damage to surrounding enemies. Can be activated to place a bomb on a target enemy that explodes after a short duration dealing damage to surrounding units.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TristanaE.png",
				}, {
					spellId: "TristanaR",
					spellName: "Buster Shot",
					spellDescription: "Tristana loads a massive cannonball into her weapon and fires it at an enemy unit. This deals Magic Damage and knocks the target back. If the target is carrying the Explosive Charge bomb, the bomb detonation radius is doubled.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TristanaR.png",
				},
			],
		roles: "Marksman, Assassin",
		lane: ""
	},
	{
		id: "Trundle",
		name: "Trundle",
		title: "the Troll King",
		lore: "Trundle is a hulking and devious troll with a particularly vicious streak, and there is nothing he cannot bludgeon into submission—not even the Freljord itself. Fiercely territorial, he chases down anyone foolish enough to enter his domain. Then, his massive club of True Ice at the ready, he chills his enemies to the bone and impales them with jagged, frozen pillars, laughing as they bleed out onto the tundra.",
		skins: "0, 1, 2, 3, 4, 5, 6, 12",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Trundle_0.jpg",
		passiveName: "King's Tribute",
		passiveDescription: "When an enemy unit dies near Trundle, he heals for a percent of its maximum Health.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Trundle_Passive.png",
		spells:
			[
				{
					spellId: "TrundleTrollSmash",
					spellName: "Chomp",
					spellDescription: "Trundle bites his opponent, dealing damage, briefly slowing and sapping some of their Attack Damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TrundleTrollSmash.png",
				}, {
					spellId: "trundledesecrate",
					spellName: "Frozen Domain",
					spellDescription: "Trundle turns target location into his domain, gaining Attack Speed, Move Speed, and increased healing from all sources while on it.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/trundledesecrate.png",
				}, {
					spellId: "TrundleCircle",
					spellName: "Pillar of Ice",
					spellDescription: "Trundle creates an ice pillar at target location, becoming impassable terrain and slowing all nearby enemy units.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TrundleCircle.png",
				}, {
					spellId: "TrundlePain",
					spellName: "Subjugate",
					spellDescription: "Trundle immediately steals a percent of his target's Health, Armor and Magic Resistance. Over the next 4 seconds the amount of Health, Armor, and Magic Resistance stolen is doubled.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TrundlePain.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "TwistedFate",
		name: "Twisted Fate",
		title: "the Card Master",
		lore: "Twisted Fate is an infamous cardsharp and swindler who has gambled and charmed his way across much of the known world, earning the enmity and admiration of the rich and foolish alike. He rarely takes things seriously, greeting each day with a mocking smile and an insouciant swagger. In every possible way, Twisted Fate always has an ace up his sleeve.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 23, 25, 36",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/TwistedFate_0.jpg",
		passiveName: "Loaded Dice",
		passiveDescription: "Upon killing a unit, Twisted Fate rolls his 'lucky' dice receiving 1 to 6 bonus gold.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Cardmaster_SealFate.png",
		spells:
			[
				{
					spellId: "WildCards",
					spellName: "Wild Cards",
					spellDescription: "Twisted Fate throws three cards, dealing damage to each enemy unit they pass through.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/WildCards.png",
				}, {
					spellId: "PickACard",
					spellName: "Pick a Card",
					spellDescription: "Twisted Fate chooses a magic card from his deck, and uses that for his next attack, causing bonus effects.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/PickACard.png",
				}, {
					spellId: "CardmasterStack",
					spellName: "Stacked Deck",
					spellDescription: "Every 4 attacks, Twisted Fate deals bonus damage. In addition, his Attack Speed is increased.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CardmasterStack.png",
				}, {
					spellId: "Destiny",
					spellName: "Destiny",
					spellDescription: "Twisted Fate predicts the fortunes of his foes, revealing all enemy champions and enabling the use of Gate, which teleports Twisted Fate to any target location in 1.5 seconds.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Destiny.png",
				},
			],
		roles: "Mage",
		lane: ""
	},
	{
		id: "Tryndamere",
		name: "Tryndamere",
		title: "the Barbarian King",
		lore: "Fueled by unbridled fury and rage, Tryndamere once carved his way through the Freljord, openly challenging the greatest warriors of the north to prepare himself for even darker days ahead. The wrathful barbarian has long sought revenge for the annihilation of his clan, though more recently he has found companionship with Ashe, the Avarosan warmother, and a home with her people. His almost inhuman strength and fortitude is legendary, and has delivered him and his new allies countless victories against the greatest of odds.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 18",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Tryndamere_0.jpg",
		passiveName: "Battle Fury",
		passiveDescription: "Tryndamere gains Fury for each attack, critical strike, and killing blow he makes. Fury passively increases his Critical Strike Chance and can be consumed with his Bloodlust spell.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Tryndamere_Passive.png",
		spells:
			[
				{
					spellId: "TryndamereQ",
					spellName: "Bloodlust",
					spellDescription: "Tryndamere thrives on the thrills of combat, increasing his Attack Damage as he is more and more wounded. He can cast Bloodlust to consume his Fury and heal himself.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TryndamereQ.png",
				}, {
					spellId: "TryndamereW",
					spellName: "Mocking Shout",
					spellDescription: "Tryndamere lets out an insulting cry, decreasing surrounding champions' Attack Damage. Enemies with their backs turned to Tryndamere also have their Move Speed reduced.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TryndamereW.png",
				}, {
					spellId: "TryndamereE",
					spellName: "Spinning Slash",
					spellDescription: "Tryndamere slices toward a target unit, dealing damage to enemies in his path.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TryndamereE.png",
				}, {
					spellId: "UndyingRage",
					spellName: "Undying Rage",
					spellDescription: "Tryndamere's lust for battle becomes so strong that he is unable to die, no matter how wounded he becomes.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/UndyingRage.png",
				},
			],
		roles: "Fighter, Assassin",
		lane: ""
	},
	{
		id: "Udyr",
		name: "Udyr",
		title: "the Spirit Walker",
		lore: "The most powerful spirit walker alive, Udyr communes with all the spirits of the Freljord, whether by empathically understanding their needs, or by channeling and transforming their ethereal energy into his own primal fighting style. He seeks balance within, so that his mind does not get lost amidst others, but he also seeks balance without—for the Freljord's mystical landscape can only thrive with the growth that comes from conflict and struggle, and Udyr knows that sacrifices must be made to keep peaceful stagnance at bay.",
		skins: "0, 1, 2, 3, 4, 5",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Udyr_0.jpg",
		passiveName: "Bridge Between",
		passiveDescription: "Udyr has four basic Abilities that swap between Stances and can Recast an Ability to renew it with additional benefits. Additionally, after using an Ability, Udyr's next two Attacks gain Attack Speed.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Udyr_P.UdyrVGU.png",
		spells:
			[
				{
					spellId: "UdyrQ",
					spellName: "Wilding Claw",
					spellDescription: "Udyr gains attack speed and his next two attacks deal bonus physical damage. Recast: Gain even more attack speed, and the next two attacks call lightning to strike the target.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/UdyrQ.png",
				}, {
					spellId: "UdyrW",
					spellName: "Iron Mantle",
					spellDescription: "Udyr gains a shield and his next two attacks heal him. Recast: Gain an even bigger shield and heal based on max health over the next couple seconds.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/UdyrW.png",
				}, {
					spellId: "UdyrE",
					spellName: "Blazing Stampede",
					spellDescription: "Udyr gains movement speed and his first attack against each target will Stun them. Recast: Gain even more movement speed and immunity to immobilizing effects for a couple seconds. ",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/UdyrE.png",
				}, {
					spellId: "UdyrR",
					spellName: "Wingborne Storm",
					spellDescription: "Udyr surrounds himself in a glacial storm, damaging and slowing nearby enemies. Recast: Empower and unleash the storm, causing it to track enemies and deal additional damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/UdyrR.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Twitch",
		name: "Twitch",
		title: "the Plague Rat",
		lore: "A Zaunite plague rat by birth, but a connoisseur of filth by passion, Twitch is not afraid to get his paws dirty. Aiming a chem-powered crossbow at the gilded heart of Piltover, he has vowed to show those in the city above just how filthy they really are. Always a sneaky sneak, when he's not rooting around in the Sump, he's digging deep into other people's garbage for discarded treasures… and perhaps a moldy sandwich.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 12, 27, 36, 45",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Twitch_0.jpg",
		passiveName: "Deadly Venom",
		passiveDescription: "Twitch's basic attacks infect the target, dealing true damage each second.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Twitch_Passive.png",
		spells:
			[
				{
					spellId: "TwitchHideInShadows",
					spellName: "Ambush",
					spellDescription: "Twitch becomes Camouflaged for a short duration and gains Move Speed. When leaving Camouflage, Twitch gains Attack Speed for a short duration. When an enemy champion with Deadly Venom dies, Ambush's cooldown is reset.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TwitchHideInShadows.png",
				}, {
					spellId: "TwitchVenomCask",
					spellName: "Venom Cask",
					spellDescription: "Twitch hurls a cask of venom that explodes in an area, slowing targets and applying deadly venom to the target.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TwitchVenomCask.png",
				}, {
					spellId: "TwitchExpunge",
					spellName: "Contaminate",
					spellDescription: "Twitch wreaks further havoc on poisoned enemies with a blast of his vile diseases.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TwitchExpunge.png",
				}, {
					spellId: "TwitchFullAutomatic",
					spellName: "Spray and Pray",
					spellDescription: "Twitch unleashes the full power of his crossbow, shooting bolts over a great distance that pierce all enemies caught in their path.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TwitchFullAutomatic.png",
				},
			],
		roles: "Marksman, Assassin",
		lane: ""
	},
	{
		id: "Urgot",
		name: "Urgot",
		title: "the Dreadnought",
		lore: "Once a powerful Noxian headsman, Urgot was betrayed by the empire for which he had killed so many. Bound in iron chains, he was forced to learn the true meaning of strength in the Dredge—a prison mine deep beneath Zaun. Emerging in a disaster that spread chaos throughout the city, he now casts an imposing shadow over its criminal underworld. Raising his victims on the very chains that once enslaved him, he will purge his new home of the unworthy, making it a crucible of pain.",
		skins: "0, 1, 2, 3, 9, 15, 23",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Urgot_0.jpg",
		passiveName: "Echoing Flames",
		passiveDescription: "Urgot's basic attacks and Purge periodically trigger blasts of flame from his legs, dealing physical damage.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Urgot_Passive.png",
		spells:
			[
				{
					spellId: "UrgotQ",
					spellName: "Corrosive Charge",
					spellDescription: "Fires an explosive charge at the target location, dealing physical damage and slowing enemies caught in the explosion.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/UrgotQ.png",
				}, {
					spellId: "UrgotW",
					spellName: "Purge",
					spellDescription: "Urgot slows himself while he unloads his weapon on nearby enemies. Prioritizes enemy champions Urgot has recently struck with other abilities and triggers Echoing Flames.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/UrgotW.png",
				}, {
					spellId: "UrgotE",
					spellName: "Disdain",
					spellDescription: "Urgot charges in a direction, shielding himself and trampling non-champion enemies. If he catches an enemy champion, he will stop and hurl them out of his way.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/UrgotE.png",
				}, {
					spellId: "UrgotR",
					spellName: "Fear Beyond Death",
					spellDescription: "Urgot fires a chem-drill that impales the first enemy champion hit. If that champion falls below a health threshold, Urgot judges them weak and can execute them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/UrgotR.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Varus",
		name: "Varus",
		title: "the Arrow of Retribution",
		lore: "One of the ancient darkin, Varus was a deadly killer who loved to torment his foes, driving them almost to insanity before delivering the killing arrow. He was imprisoned at the end of the Great Darkin War, but escaped centuries later in the remade flesh of two Ionian hunters—they had unwittingly released him, cursed to bear the bow containing his bound essence. Varus now seeks out those who trapped him, in order to enact his brutal vengeance, but the mortal souls within still resist him every step of the way.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 9, 16, 17, 34",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Varus_0.jpg",
		passiveName: "Living Vengeance",
		passiveDescription: "On kill or assist, Varus temporarily gains Attack Speed. This bonus is larger if the enemy is a champion.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/VarusPassive.png",
		spells:
			[
				{
					spellId: "VarusQ",
					spellName: "Piercing Arrow",
					spellDescription: "Varus readies and then fires a powerful shot that gains extra range and damage the longer he spends preparing to fire.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VarusQ.png",
				}, {
					spellId: "VarusW",
					spellName: "Blighted Quiver",
					spellDescription: "Passive: Varus' basic attacks deal bonus magic damage and apply Blight. Varus' other abilities detonate Blight, dealing magic damage based on the target's maximum Health. Active: Varus empowers his next Piercing Arrow.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VarusW.png",
				}, {
					spellId: "VarusE",
					spellName: "Hail of Arrows",
					spellDescription: "Varus fires a hail of arrows that deal physical damage and desecrate the ground. Desecrated ground slows enemies' Move Speed and reduces their self healing and regeneration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VarusE.png",
				}, {
					spellId: "VarusR",
					spellName: "Chain of Corruption",
					spellDescription: "Varus flings out a damaging tendril of corruption that immobilizes the first enemy champion hit and then spreads towards nearby uninfected champions, immobilizing them too on contact.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VarusR.png",
				},
			],
		roles: "Marksman, Mage",
		lane: ""
	},
	{
		id: "Veigar",
		name: "Veigar",
		title: "the Tiny Master of Evil",
		lore: "An enthusiastic master of dark sorcery, Veigar has embraced powers that few mortals dare approach. As a free-spirited inhabitant of Bandle City, he longed to push beyond the limitations of yordle magic, and turned instead to arcane texts that had been hidden away for thousands of years. Now a stubborn creature with an endless fascination for the mysteries of the universe, Veigar is often underestimated by others—but even though he believes himself truly evil, he possesses an inner morality that leads some to question his deeper motivations.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 23, 32, 41",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Veigar_0.jpg",
		passiveName: "Phenomenal Evil Power",
		passiveDescription: "Veigar is the greatest Evil to ever strike at the hearts of Runeterra - and he's only getting bigger! Striking an enemy Champion with a spell or scoring a takedown grants Veigar permanently increased Ability Power.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/VeigarEntropy.png",
		spells:
			[
				{
					spellId: "VeigarBalefulStrike",
					spellName: "Baleful Strike",
					spellDescription: "Veigar unleashes a bolt of dark energy that deals magic damage to the first two enemies hit. Units killed by this bolt grant Veigar some ability power permanently.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VeigarBalefulStrike.png",
				}, {
					spellId: "VeigarDarkMatter",
					spellName: "Dark Matter",
					spellDescription: "Veigar calls a great mass of dark matter to fall from the sky to the target location, dealing magic damage when it lands. Stacks of Phenomenal Evil reduce Dark Matter's cooldown.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VeigarDarkMatter.png",
				}, {
					spellId: "VeigarEventHorizon",
					spellName: "Event Horizon",
					spellDescription: "Veigar twists the edges of space, creating a cage that Stuns enemies that pass through.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VeigarEventHorizon.png",
				}, {
					spellId: "VeigarR",
					spellName: "Primordial Burst",
					spellDescription: "Blasts target enemy champion, dealing a large amount of magic damage, increasing based on the target's missing health.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VeigarR.png",
				},
			],
		roles: "Mage",
		lane: ""
	},
	{
		id: "Vayne",
		name: "Vayne",
		title: "the Night Hunter",
		lore: "Shauna Vayne is a deadly, remorseless Demacian monster hunter, who has dedicated her life to finding and destroying the demon that murdered her family. Armed with a wrist-mounted crossbow and a heart full of vengeance, she is only truly happy when slaying practitioners or creations of the dark arts, striking from the shadows with a flurry of silver bolts.",
		skins: "0, 1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 25, 32, 33",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Vayne_0.jpg",
		passiveName: "Night Hunter",
		passiveDescription: "Vayne ruthlessly hunts evil-doers, gaining 30 Move Speed when moving toward nearby enemy champions.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Vayne_NightHunter.png",
		spells:
			[
				{
					spellId: "VayneTumble",
					spellName: "Tumble",
					spellDescription: "Vayne tumbles, maneuvering to carefully place her next shot. Her next attack deals bonus damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VayneTumble.png",
				}, {
					spellId: "VayneSilveredBolts",
					spellName: "Silver Bolts",
					spellDescription: "Vayne tips her bolts with a rare metal, toxic to evil things. The third consecutive attack or ability against the same target deals a percentage of the target's max health as bonus true damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VayneSilveredBolts.png",
				}, {
					spellId: "VayneCondemn",
					spellName: "Condemn",
					spellDescription: "Vayne draws a heavy crossbow from her back, and fires a huge bolt at her target, knocking them back and dealing damage. If they collide with terrain, they are impaled, dealing bonus damage and stunning them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VayneCondemn.png",
				}, {
					spellId: "VayneInquisition",
					spellName: "Final Hour",
					spellDescription: "Readying herself for an epic confrontation, Vayne gains increased Attack Damage, Invisibility during Tumble, reduced Tumble cooldown, and more bonus Move Speed from Night Hunter",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VayneInquisition.png",
				},
			],
		roles: "Marksman, Assassin",
		lane: ""
	},
	{
		id: "Velkoz",
		name: "Vel'Koz",
		title: "the Eye of the Void",
		lore: "It is unclear if Vel'Koz was the first Void-spawn to emerge on Runeterra, but there has certainly never been another to match his level of cruel, calculating sentience. While his kin devour or defile everything around them, he seeks instead to scrutinize and study the physical realm—and the strange, warlike beings that dwell there—for any weakness the Void might exploit. But Vel'Koz is far from a passive observer, striking back at threats with deadly plasma, or by disrupting the very fabric of the world itself.",
		skins: "0, 1, 2, 3, 4, 11",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Velkoz_0.jpg",
		passiveName: "Organic Deconstruction",
		passiveDescription: "Vel'Koz's abilities apply Organic Deconstruction to enemies on hit. If 3 stacks are accumulated, the enemy will take a burst of true damage.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/VelKoz_Passive.png",
		spells:
			[
				{
					spellId: "VelkozQ",
					spellName: "Plasma Fission",
					spellDescription: "Vel'Koz shoots a bolt of plasma that splits in two on reactivation or upon hitting an enemy. The bolt slows and damages on hit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VelkozQ.png",
				}, {
					spellId: "VelkozW",
					spellName: "Void Rift",
					spellDescription: "Vel'Koz opens a rift to the void that deals an initial burst of damage, then explodes for a second burst of damage after a delay.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VelkozW.png",
				}, {
					spellId: "VelkozE",
					spellName: "Tectonic Disruption",
					spellDescription: "Vel'Koz causes an area to explode, knocking up enemies, and knocking close enemies slightly away.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VelkozE.png",
				}, {
					spellId: "VelkozR",
					spellName: "Life Form Disintegration Ray",
					spellDescription: "Vel'Koz unleashes a channelled beam that follows the cursor for 2.5 seconds that deals magic damage. Organic Deconstruction Researches enemy champions causing them to take true damage instead.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VelkozR.png",
				},
			],
		roles: "Mage",
		lane: ""
	},
	{
		id: "Vex",
		name: "Vex",
		title: "the Gloomist",
		lore: "In the black heart of the Shadow Isles, a lone yordle trudges through the spectral fog, content in its murky misery. With an endless supply of teen angst and a powerful shadow in tow, Vex lives in her own self-made slice of gloom, far from the revolting cheer of the “normie” world. Though she lacks ambition, she is quick to strike down color and happiness, stopping all would-be interlopers with her magical malaise.",
		skins: "0, 1, 10",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Vex_0.jpg",
		passiveName: "Doom 'n Gloom",
		passiveDescription: "Vex periodically becomes empowered, causing her next basic Ability to fear enemies and interrupt dashes. Whenever a nearby enemy dashes, Vex applies a mark that can be consumed for bonus damage that also reduces the cooldown of her empowered state.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Icons_Vex_Passive.png",
		spells:
			[
				{
					spellId: "VexQ",
					spellName: "Mistral Bolt",
					spellDescription: "Launch a damaging missile that accelerates mid-flight.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VexQ.png",
				}, {
					spellId: "VexW",
					spellName: "Personal Space",
					spellDescription: "Gain a shield and damage nearby enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VexW.png",
				}, {
					spellId: "VexE",
					spellName: "Looming Darkness",
					spellDescription: "Summon a damaging and slowing zone that applies Gloom to enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VexE.png",
				}, {
					spellId: "VexR",
					spellName: "Shadow Surge",
					spellDescription: "Fire a missile that marks an enemy champion. Recast to dash to them and deal damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VexR.png",
				},
			],
		roles: "Mage",
		lane: ""
	},
	{
		id: "Vi",
		name: "Vi",
		title: "the Piltover Enforcer",
		lore: "Once a criminal from the mean streets of Zaun, Vi is a hotheaded, impulsive, and fearsome woman with only a very loose respect for authority figures. Growing up all but alone, Vi developed finely honed survival instincts as well as a wickedly abrasive sense of humor. Now working with the Wardens of Piltover to keep the peace, she wields mighty hextech gauntlets that can punch through walls and suspects with equal ease.",
		skins: "0, 1, 2, 3, 4, 5, 11, 12, 20, 29, 30",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Vi_0.jpg",
		passiveName: "Blast Shield",
		passiveDescription: "Vi charges a shield over time. The shield can be activated by hitting an enemy with an ability.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/ViPassive.png",
		spells:
			[
				{
					spellId: "ViQ",
					spellName: "Vault Breaker",
					spellDescription: "Vi charges her gauntlets and unleashes a vault shattering punch, carrying her forward. Enemies she hits are knocked back and receive a stack of Denting Blows.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ViQ.png",
				}, {
					spellId: "ViW",
					spellName: "Denting Blows",
					spellDescription: "Vi's punches break her opponent's Armor, dealing bonus damage and granting her Attack Speed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ViW.png",
				}, {
					spellId: "ViE",
					spellName: "Relentless Force",
					spellDescription: "Vi's next attack blasts through her target, dealing damage to enemies behind it.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ViE.png",
				}, {
					spellId: "ViR",
					spellName: "Cease and Desist",
					spellDescription: "Vi runs down an enemy, knocking aside anyone in the way. When she reaches her target she knocks it into the air, jumps after it, and slams it back into the ground.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ViR.png",
				},
			],
		roles: "Fighter, Assassin",
		lane: ""
	},
	{
		id: "Viego",
		name: "Viego",
		title: "The Ruined King",
		lore: "Once ruler of a long-lost kingdom, Viego perished over a thousand years ago when his attempt to bring his wife back from the dead triggered the magical catastrophe known as the Ruination. Transformed into a powerful, unliving wraith tortured by an obsessive longing for his centuries-dead queen, Viego now stands as the Ruined King, controlling the deadly Harrowings as he scours Runeterra for anything that might one day restore her, and destroying all in his path as the Black Mist pours endlessly from his cruel, broken heart.",
		skins: "0, 1, 10, 19, 21",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Viego_0.jpg",
		passiveName: "Sovereign's Domination",
		passiveDescription: "Enemies who fall before Viego become wraiths. By attacking a wraith, Viego temporarily seizes control of the dead enemy's body, healing for a percentage of his target's max health and gaining access to their basic abilities and items. He replaces their Ultimate with a free cast of his own.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Viego_Passive.png",
		spells:
			[
				{
					spellId: "ViegoQ",
					spellName: "Blade of the Ruined King",
					spellDescription: "Viego's spectral blade passively deals bonus percent current Health damage On-Hit and strikes twice vs. enemies he recently hit with an Ability, stealing Health. Viego can activate this Ability to thrust his zweihander forward, impaling enemies in front of him.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ViegoQ.png",
				}, {
					spellId: "ViegoW",
					spellName: "Spectral Maw",
					spellDescription: "Viego charges up before dashing forward, releasing a ball of concentrated Black Mist that stuns the first enemy hit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ViegoW.png",
				}, {
					spellId: "ViegoE",
					spellName: "Harrowed Path",
					spellDescription: "Viego commands the Black Mist to haunt and surround a piece of terrain. Viego can hide in the Mist as a wraith, gaining camouflage, Move Speed, and Attack Speed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ViegoE.png",
				}, {
					spellId: "ViegoR",
					spellName: "Heartbreaker",
					spellDescription: "Viego teleports to a nearby location and executes an enemy champion on arrival, piercing their heart and causing a destructive shockwave around them that knocks away their allies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ViegoR.png",
				},
			],
		roles: "Assassin, Fighter",
		lane: ""
	},
	{
		id: "Warwick",
		name: "Warwick",
		title: "the Uncaged Wrath of Zaun",
		lore: "Warwick is a monster who hunts the gray alleys of Zaun. Transformed by agonizing experiments, his body is fused with an intricate system of chambers and pumps, machinery filling his veins with alchemical rage. Bursting out of the shadows, he preys upon those criminals who terrorize the city's depths. Warwick is drawn to blood, and driven mad by its scent. None who spill it can escape him.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16, 35, 45, 46",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Warwick_0.jpg",
		passiveName: "Eternal Hunger",
		passiveDescription: "Warwick's basic attacks deal bonus magic damage. If Warwick is below 50% health, he heals the same amount. If Warwick is below 25% health, this healing triples.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/WarwickP.png",
		spells:
			[
				{
					spellId: "WarwickQ",
					spellName: "Jaws of the Beast",
					spellDescription: "Warwick lunges forward and bites his target, dealing damage based on their maximum health and healing for damage dealt.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/WarwickQ.png",
				}, {
					spellId: "WarwickW",
					spellName: "Blood Hunt",
					spellDescription: "Warwick senses enemies below 50% health, gaining Move Speed toward and attack speed against them. When they fall below 20% health, he frenzies and these bonuses triple.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/WarwickW.png",
				}, {
					spellId: "WarwickE",
					spellName: "Primal Howl",
					spellDescription: "Warwick gains damage reduction for 2.5 seconds. At the end, or if re-activated, he howls, causing nearby enemies to flee for 1 second.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/WarwickE.png",
				}, {
					spellId: "WarwickR",
					spellName: "Infinite Duress",
					spellDescription: "Warwick leaps in a direction (scaling with his bonus Move Speed), suppressing the first champion he collides with for 1.5 seconds.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/WarwickR.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Viktor",
		name: "Viktor",
		title: "the Machine Herald",
		lore: "The herald of a new age of technology, Viktor has devoted his life to the advancement of humankind. An idealist who seeks to lift the people of Zaun to a new level of understanding, he believes that only by embracing a glorious evolution of technology can humanity's full potential be realized. With a body augmented by steel and science, Viktor is zealous in his pursuit of this bright future.",
		skins: "0, 1, 2, 3, 4, 5, 14",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Viktor_0.jpg",
		passiveName: "Glorious Evolution",
		passiveDescription: "Viktor can augment his basic abilities when he gets kills on enemies.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Viktor_Passive.png",
		spells:
			[
				{
					spellId: "ViktorPowerTransfer",
					spellName: "Siphon Power",
					spellDescription: "Viktor blasts an enemy unit dealing magic damage, gaining a shield and empowering his next basic attack. Augment: Siphon Power's shield is increased by 60% and Viktor gains bonus Move Speed after casting.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ViktorPowerTransfer.png",
				}, {
					spellId: "ViktorGravitonField",
					spellName: "Gravity Field",
					spellDescription: "Viktor conjures a heavy gravitational field that slows enemies in its radius. Enemies who stay within the device for too long are stunned. Augment: Viktor's non-periodic spells apply a slow to enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ViktorGravitonField.png",
				}, {
					spellId: "ViktorDeathRay",
					spellName: "Death Ray",
					spellDescription: "Viktor uses his robotic arm to fire a chaos beam that cuts across the field in a line, dealing damage to all enemies in its path. Augment: An explosion follows the Death Ray's wake, dealing magic damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ViktorDeathRay.png",
				}, {
					spellId: "ViktorChaosStorm",
					spellName: "Chaos Storm",
					spellDescription: "Viktor conjures a singularity on the field which deals magic damage and interrupts enemy channels. The singularity then periodically does magic damage to all nearby enemies. Viktor can redirect the singularity. Augment: The Chaos Storm moves 25% faster.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ViktorChaosStorm.png",
				},
			],
		roles: "Mage",
		lane: ""
	},
	{
		id: "Volibear",
		name: "Volibear",
		title: "the Relentless Storm",
		lore: "To those who still revere him, the Volibear is the storm made manifest. Destructive, wild, and stubbornly resolute, he existed before mortals walked the Freljord's tundra, and is fiercely protective of the lands that he and his demi-god kin created. Cultivating a deep hatred of civilization and the weakness it brought with it, he now fights to return to the old ways—when the land was untamed, and blood spilled freely—and eagerly battles all who oppose him, with tooth, claw, and thundering domination.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 9",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Volibear_0.jpg",
		passiveName: "The Relentless Storm",
		passiveDescription: "Volibear's Attacks and abilities grant Attack Speed, and eventually cause his Attacks to deal bonus magic damage to nearby enemies.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Volibear_Icon_P.png",
		spells:
			[
				{
					spellId: "VolibearQ",
					spellName: "Thundering Smash",
					spellDescription: "Volibear gains speed towards enemies, Stunning and damaging the first one he Attacks.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VolibearQ.png",
				}, {
					spellId: "VolibearW",
					spellName: "Frenzied Maul",
					spellDescription: "Volibear damages an enemy, applying on-hit effects and marking them. Casting this ability again on the same target deals bonus damage and Heals Volibear.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VolibearW.png",
				}, {
					spellId: "VolibearE",
					spellName: "Sky Splitter",
					spellDescription: "Volibear summons a lightning bolt at a location, dealing damage and Slowing enemies while granting Volibear a Shield if he's inside the blast radius.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VolibearE.png",
				}, {
					spellId: "VolibearR",
					spellName: "Stormbringer",
					spellDescription: "Volibear leaps to a target location, Slowing and damaging enemies beneath him while gaining bonus Health. Enemy towers near his landing location become temporarily disabled.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VolibearR.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "Vladimir",
		name: "Vladimir",
		title: "the Crimson Reaper",
		lore: "A fiend with a thirst for mortal blood, Vladimir has influenced the affairs of Noxus since the empire's earliest days. In addition to unnaturally extending his life, his mastery of hemomancy allows him to control the minds and bodies of others as easily as his own. In the flamboyant salons of the Noxian aristocracy, this has enabled him to build a fanatical cult of personality around himself—while in the lowest back alleys, it allows him to bleed his enemies dry.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 8, 14, 21, 30",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Vladimir_0.jpg",
		passiveName: "Crimson Pact",
		passiveDescription: "Every 30 points of bonus Health gives Vladimir 1 Ability Power and every 1 point of Ability Power gives Vladimir 1.6 bonus Health (does not stack with itself).",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/VladimirP.png",
		spells:
			[
				{
					spellId: "VladimirQ",
					spellName: "Transfusion",
					spellDescription: "Vladimir steals life from the target enemy. When Vladimir's resource is full, Transfusion will benefit from massively increased damage and healing for a brief time.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VladimirQ.png",
				}, {
					spellId: "VladimirSanguinePool",
					spellName: "Sanguine Pool",
					spellDescription: "Vladimir sinks into a pool of blood, becoming untargetable for 2 seconds. Additionally, enemies on the pool are slowed and Vladimir siphons life from them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VladimirSanguinePool.png",
				}, {
					spellId: "VladimirE",
					spellName: "Tides of Blood",
					spellDescription: "Vladimir pays his own health to charge up a reservoir of blood which, when released, deals damage in the area around him but can be blocked by enemy units.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VladimirE.png",
				}, {
					spellId: "VladimirHemoplague",
					spellName: "Hemoplague",
					spellDescription: "Vladimir infects an area with a virulent plague. Affected enemies take increased damage for the duration. After a few seconds, Hemoplague deals magic damage to infected enemies and heals Vladimir for each enemy Champion hit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/VladimirHemoplague.png",
				},
			],
		roles: "Mage",
		lane: ""
	},
	{
		id: "Xayah",
		name: "Xayah",
		title: "the Rebel",
		lore: "Deadly and precise, Xayah is a vastayan revolutionary waging a personal war to save her people. She uses her speed, guile, and razor-sharp feather blades to cut down anyone who stands in her way. Xayah fights alongside her partner and lover, Rakan, to protect their dwindling tribe, and restore their race to her vision of its former glory.",
		skins: "0, 1, 2, 3, 4, 8, 17, 26, 28",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Xayah_0.jpg",
		passiveName: "Clean Cuts",
		passiveDescription: "After using an ability, Xayah's next basic attacks will hit all targets along their path and leave a Feather.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/XayahPassive.png",
		spells:
			[
				{
					spellId: "XayahQ",
					spellName: "Double Daggers",
					spellDescription: "Xayah throws two damaging daggers that also drop Feathers she can recall.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/XayahQ.png",
				}, {
					spellId: "XayahW",
					spellName: "Deadly Plumage",
					spellDescription: "Xayah creates a storm of blades that increase her Attack Speed and damage while also granting her Move Speed if she attacks a champion.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/XayahW.png",
				}, {
					spellId: "XayahE",
					spellName: "Bladecaller",
					spellDescription: "Xayah calls back all her dropped Feathers dealing damage and rooting enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/XayahE.png",
				}, {
					spellId: "XayahR",
					spellName: "Featherstorm",
					spellDescription: "Xayah leaps into the air becoming untargetable and throwing out a fan of daggers, dropping Feathers she can recall.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/XayahR.png",
				},
			],
		roles: "Marksman",
		lane: ""
	},
	{
		id: "Xerath",
		name: "Xerath",
		title: "the Magus Ascendant",
		lore: "Xerath is an Ascended Magus of ancient Shurima, a being of arcane energy writhing in the broken shards of a magical sarcophagus. For millennia, he was trapped beneath the desert sands, but the rise of Shurima freed him from his ancient prison. Driven insane with power, he now seeks to take what he believes is rightfully his and replace the upstart civilizations of the world with one fashioned in his image.",
		skins: "0, 1, 2, 3, 4, 5, 12",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Xerath_0.jpg",
		passiveName: "Mana Surge",
		passiveDescription: "Xerath's basic attacks periodically restore Mana.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Xerath_Passive1.png",
		spells:
			[
				{
					spellId: "XerathArcanopulseChargeUp",
					spellName: "Arcanopulse",
					spellDescription: "Fires a long-range beam of energy, dealing magic damage to all targets hit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/XerathArcanopulseChargeUp.png",
				}, {
					spellId: "XerathArcaneBarrage2",
					spellName: "Eye of Destruction",
					spellDescription: "Calls down a barrage of arcane energy, slowing and dealing magic damage to all enemies in an area. Targets in the middle receive additional damage and a stronger slow.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/XerathArcaneBarrage2.png",
				}, {
					spellId: "XerathMageSpear",
					spellName: "Shocking Orb",
					spellDescription: "Deals magic damage to an enemy and stuns them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/XerathMageSpear.png",
				}, {
					spellId: "XerathLocusOfPower2",
					spellName: "Rite of the Arcane",
					spellDescription: "Xerath immobilizes himself and gains numerous long-range barrages.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/XerathLocusOfPower2.png",
				},
			],
		roles: "Mage",
		lane: ""
	},
	{
		id: "Yasuo",
		name: "Yasuo",
		title: "the Unforgiven",
		lore: "An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self defense. Even after his master's true killer was revealed, Yasuo still could not forgive himself for all he had done, and now wanders his homeland with only the wind to guide his blade.",
		skins: "0, 1, 2, 3, 9, 10, 17, 18, 35, 36, 45, 54, 55",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_0.jpg",
		passiveName: "Way of the Wanderer",
		passiveDescription: "Yasuo's Critical Strike Chance is increased. Additionally, Yasuo builds toward a shield whenever he is moving. The shield triggers when he takes damage from a champion or monster.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Yasuo_Passive.png",
		spells:
			[
				{
					spellId: "YasuoQ1Wrapper",
					spellName: "Steel Tempest",
					spellDescription: "Thrusts forward, damaging all enemies in a line. On hit, grants a stack of Gathering Storm for a few seconds. At 2 stacks, Steel Tempest fires a whirlwind that knocks Airborne. Steel Tempest is treated as a basic attack and scales with all the same things.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/YasuoQ1Wrapper.png",
				}, {
					spellId: "YasuoW",
					spellName: "Wind Wall",
					spellDescription: "Creates a moving wall that blocks all enemy projectiles for 4 seconds.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/YasuoW.png",
				}, {
					spellId: "YasuoE",
					spellName: "Sweeping Blade",
					spellDescription: "Dashes through target enemy, dealing magic damage. Each cast increases your next dash's base Damage, up to a max amount. Cannot be re-cast on the same enemy for a few seconds. If Steel Tempest is cast while dashing, it will strike as a circle.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/YasuoE.png",
				}, {
					spellId: "YasuoR",
					spellName: "Last Breath",
					spellDescription: "Blinks to an Airborne enemy champion, dealing physical damage and holding all Airborne enemies in the area in the air. Grants maximum Flow but resets all stacks of Gathering Storm. For a moderate time afterwards, Yasuo's critical strikes gain significant Bonus Armor Penetration.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/YasuoR.png",
				},
			],
		roles: "Fighter, Assassin",
		lane: ""
	},
	{
		id: "Yone",
		name: "Yone",
		title: "the Unforgotten",
		lore: "In life, he was Yone—half-brother of Yasuo, and renowned student of his village's sword school. But upon his death at the hands of his brother, he found himself hunted by a malevolent entity of the spirit realm, and was forced to slay it with its own sword. Now, cursed to wear its demonic mask upon his face, Yone tirelessly hunts all such creatures in order to understand what he has become.",
		skins: "0, 1, 10, 19, 26",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yone_0.jpg",
		passiveName: "Way of the Hunter",
		passiveDescription: "Yone deals magic damage with every second Attack. In addition, his critical strike chance is increased.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/YonePassive.png",
		spells:
			[
				{
					spellId: "YoneQ",
					spellName: "Mortal Steel",
					spellDescription: "Thrusts forward, damaging all enemies in a line. On hit, grants a stack of Gathering Storm for a few seconds. At 2 stacks, Mortal Steel dashes Yone forward with a gust of wind knocking enemies Airborne. Mortal Steel is treated as a basic attack and scales with all the same things.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/YoneQ.png",
				}, {
					spellId: "YoneW",
					spellName: "Spirit Cleave",
					spellDescription: "Cleaves forward, damaging all enemies in a cone. Grants a shield to Yone, the value is increased by the number of champions hit by the swipe. Spirit Cleave's cooldown and cast time scale with attack speed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/YoneW.png",
				}, {
					spellId: "YoneE",
					spellName: "Soul Unbound",
					spellDescription: "Yone's spirit leaves his body behind, gaining Move Speed. When this skill ends, Yone's spirit is forced back to his body and he repeats a portion of the damage he dealt as a spirit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/YoneE.png",
				}, {
					spellId: "YoneR",
					spellName: "Fate Sealed",
					spellDescription: "Yone blinks behind the last champion in a line with a slash so powerful it pulls all enemies hit towards him.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/YoneR.png",
				},
			],
		roles: "Assassin, Fighter",
		lane: ""
	},
	{
		id: "Yorick",
		name: "Yorick",
		title: "Shepherd of Souls",
		lore: "The last survivor of a long-forgotten religious order, Yorick is both blessed and cursed with power over the dead. Trapped on the Shadow Isles, his only companions are the rotting corpses and shrieking spirits that he gathers to him. Yorick's monstrous actions belie his noble purpose: to free his home from the curse of the Ruination.",
		skins: "0, 1, 2, 3, 4, 12, 21, 30",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yorick_0.jpg",
		passiveName: "Shepherd of Souls",
		passiveDescription: "The Cursed Horde: Yorick can summon Mist Walkers to swarm and attack nearby enemies.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Yorick_P.png",
		spells:
			[
				{
					spellId: "YorickQ",
					spellName: "Last Rites",
					spellDescription: "Yorick deals bonus damage on his next attack and heals himself. If the target dies a grave will be dug.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/YorickQ.png",
				}, {
					spellId: "YorickW",
					spellName: "Dark Procession",
					spellDescription: "Yorick summons a destructible wall at target location that will block enemy movement.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/YorickW.png",
				}, {
					spellId: "YorickE",
					spellName: "Mourning Mist",
					spellDescription: "Yorick throws a globule of Black Mist that damages, slows and marks enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/YorickE.png",
				}, {
					spellId: "YorickR",
					spellName: "Eulogy of the Isles",
					spellDescription: "Yorick summons the Maiden of the Mist that causes Yorick's attacks against the Maiden's target to deal bonus damage. The Maiden will also automatically raise Walkers from dead enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/YorickR.png",
				},
			],
		roles: "Fighter, Tank",
		lane: ""
	},
	{
		id: "XinZhao",
		name: "Xin Zhao",
		title: "the Seneschal of Demacia",
		lore: "Xin Zhao is a resolute warrior loyal to the ruling Lightshield dynasty. Once condemned to the fighting pits of Noxus, he survived countless gladiatorial bouts, but after being freed by Demacian forces, he swore his life and allegiance to these brave liberators. Armed with his favored three-talon spear, Xin Zhao now fights for his adopted kingdom, audaciously challenging any foe, no matter the odds.",
		skins: "0, 1, 2, 3, 4, 5, 6, 13, 20, 27, 36",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/XinZhao_0.jpg",
		passiveName: "Determination",
		passiveDescription: "Every third attack deals bonus damage and heals Xin Zhao.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/XinZhaoP.png",
		spells:
			[
				{
					spellId: "XinZhaoQ",
					spellName: "Three Talon Strike",
					spellDescription: "Xin Zhao's next 3 standard attacks deal increased damage with the third attack knocking an opponent into the air.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/XinZhaoQ.png",
				}, {
					spellId: "XinZhaoW",
					spellName: "Wind Becomes Lightning",
					spellDescription: "Xin Zhao slashes in front of himself with his spear, then thrusts it forward, slowing affected enemies and marking them as Challenged.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/XinZhaoW.png",
				}, {
					spellId: "XinZhaoE",
					spellName: "Audacious Charge",
					spellDescription: "Xin Zhao charges to an enemy, gaining increased Attack Speed and dealing damage to all enemies in the area, slowing them briefly. Audacious Charge gains increased range against Challenged targets.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/XinZhaoE.png",
				}, {
					spellId: "XinZhaoR",
					spellName: "Crescent Guard",
					spellDescription: "Xin Zhao challenges an enemy he damaged recently. Xin Zhao deals damage to nearby enemies based on their current Health and knocks non-challenged targets back, becoming impervious to damage dealt by champions outside of the circle created.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/XinZhaoR.png",
				},
			],
		roles: "Fighter, Assassin",
		lane: ""
	},
	{
		id: "Yuumi",
		name: "Yuumi",
		title: "the Magical Cat",
		lore: "A magical cat from Bandle City, Yuumi was once the familiar of a yordle enchantress, Norra. When her master mysteriously disappeared, Yuumi became the Keeper of Norra's sentient Book of Thresholds, traveling through portals in its pages to search for her. Yearning for affection, Yuumi seeks friendly companions to partner with on her journey, protecting them with luminous shields and fierce resolve. While Book strives to keep her on task, Yuumi is often drawn to worldly comforts, such as naps and fish. In the end, however, she always returns to her quest to find her friend.",
		skins: "0, 1, 11, 19, 28, 37",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yuumi_0.jpg",
		passiveName: "Bop 'n' Block",
		passiveDescription: "Periodically, when Yuumi attacks a champion, she restores mana and gains a shield that follows her, protecting her and the ally she's attached to.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/YuumiP.png",
		spells:
			[
				{
					spellId: "YuumiQ",
					spellName: "Prowling Projectile",
					spellDescription: "Yuumi fires a missile, dealing damage to the first target hit. It deals bonus damage and slows if it takes at least 1 second to get to its target. While Attached, the missile can be controlled with your cursor.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/YuumiQ.png",
				}, {
					spellId: "YuumiW",
					spellName: "You and Me!",
					spellDescription: "Passively, Yuumi increases her ally's Adaptive Force and her own. Actively, Yuumi dashes to a target ally, becoming untargetable from everything except turrets.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/YuumiW.png",
				}, {
					spellId: "YuumiE",
					spellName: "Zoomies",
					spellDescription: "Heals Yuumi and boosts Move Speed and Attack Speed. If she's attached, she passes it to her ally instead.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/YuumiE.png",
				}, {
					spellId: "YuumiR",
					spellName: "Final Chapter",
					spellDescription: "Yuumi channels seven waves of damage, rooting anyone hit by three or more. Yuumi can move, attach, and cast Zoomies! while channeling.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/YuumiR.png",
				},
			],
		roles: "Support, Mage",
		lane: ""
	},
	{
		id: "Zeri",
		name: "Zeri",
		title: "The Spark of Zaun",
		lore: "A headstrong, spirited young woman from Zaun's working-class, Zeri channels her electric magic to charge herself and her custom-crafted gun. Her volatile power mirrors her emotions, its sparks reflecting her lightning-fast approach to life. Deeply compassionate toward others, Zeri carries the love of her family and her home into every fight. Though her eagerness to help can sometimes backfire, Zeri believes one truth to be certain: stand up for your community, and it will stand up with you.",
		skins: "0, 1, 10",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zeri_0.jpg",
		passiveName: "Living Battery",
		passiveDescription: "Zeri gains Move Speed whenever she receives a shield. When she damages an enemy shield she absorbs its energy, shielding herself.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/ZeriP.png",
		spells:
			[
				{
					spellId: "ZeriQ",
					spellName: "Burst Fire",
					spellDescription: "Zeri's Attacks are treated as Abilities and Burst Fire is treated as an Attack. Moving and casting Burst Fire stores up energy in Zeri's Sparkpack. When fully charged her next Attack will slow and deal bonus damage. Burst Fire shoots a burst of 7 rounds that deal attack damage to the first enemy hit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZeriQ.png",
				}, {
					spellId: "ZeriW",
					spellName: "Ultrashock Laser",
					spellDescription: "Zeri fires an electric pulse that slows and damages the first enemy hit. If the pulse hits a wall it expands into a long range laser.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZeriW.png",
				}, {
					spellId: "ZeriE",
					spellName: "Spark Surge",
					spellDescription: "Zeri dashes a short distance and energizes her next 3 shots of Burst Fire, causing them to pierce through enemies. She will vault and grind over any terrain she touches.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZeriE.png",
				}, {
					spellId: "ZeriR",
					spellName: "Lightning Crash",
					spellDescription: "Zeri discharges a nova of electricity and overcharges herself, gaining increased damage and stacking Move Speed that refreshes and gets stronger every time she hits an enemy champion. While overcharged, Burst fire becomes a faster triple shot that chains lightning between enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZeriR.png",
				},
			],
		roles: "Marksman",
		lane: ""
	},
	{
		id: "Zed",
		name: "Zed",
		title: "the Master of Shadows",
		lore: "Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia's magical and martial traditions to drive out Noxian invaders. During the war, desperation led him to unlock the secret shadow form—a malevolent spirit magic as dangerous and corrupting as it is powerful. Zed has mastered all of these forbidden techniques to destroy anything he sees as a threat to his nation, or his new order.",
		skins: "0, 1, 2, 3, 10, 11, 13, 15, 30, 31, 38",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zed_0.jpg",
		passiveName: "Contempt for the Weak",
		passiveDescription: "Zed's basic attacks against low health targets deals bonus Magic Damage. This effect can only occur once every few seconds against the same enemy champion.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/shadowninja_P.png",
		spells:
			[
				{
					spellId: "ZedQ",
					spellName: "Razor Shuriken",
					spellDescription: "Zed and his shadows throw their shurikens. Each shuriken deals damage to every enemy hit.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZedQ.png",
				}, {
					spellId: "ZedW",
					spellName: "Living Shadow",
					spellDescription: "Passive: Zed gains energy whenever he and his shadows strike an enemy with the same ability. Energy can only be gained once per cast ability. Active: Zed's shadow dashes forward, remaining in place for a few seconds. Reactivating Living Shadow will cause Zed to switch positions with this shadow.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZedW.png",
				}, {
					spellId: "ZedE",
					spellName: "Shadow Slash",
					spellDescription: "Zed and his Shadows slash, dealing damage to nearby enemies. Enemies hit by a Shadow's slash are slowed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZedE.png",
				}, {
					spellId: "ZedR",
					spellName: "Death Mark",
					spellDescription: "Zed becomes untargetable and dashes to an enemy champion, marking them. After 3 seconds the mark triggers, repeating a portion of all the damage Zed dealt to the target while they were marked.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZedR.png",
				},
			],
		roles: "Assassin",
		lane: ""
	},
	{
		id: "Zac",
		name: "Zac",
		title: "the Secret Weapon",
		lore: "Zac is the product of a toxic spill that ran through a chemtech seam and pooled in an isolated cavern deep in Zaun's Sump. Despite such humble origins, Zac has grown from primordial ooze into a thinking being who dwells in the city's pipes, occasionally emerging to help those who cannot help themselves or to rebuild the broken infrastructure of Zaun.",
		skins: "0, 1, 2, 6, 7, 14",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zac_0.jpg",
		passiveName: "Cell Division",
		passiveDescription: "Each time Zac hits an enemy with an ability, he sheds a chunk of himself that can be reabsorbed to restore Health. Upon taking fatal damage, Zac splits into 4 bloblets that attempt to recombine. If any bloblets remain, he will revive with an amount of Health depending on the Health of the surviving bloblets. Each bloblet has a percentage of Zac's maximum Health, Armor and Magic Resistance. This ability has a 5 minute cooldown.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/ZacPassive.png",
		spells:
			[
				{
					spellId: "ZacQ",
					spellName: "Stretching Strikes",
					spellDescription: "Zac stretches an arm, grabbing an enemy. Attacking a different enemy will cause him to throw both targets towards each other.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZacQ.png",
				}, {
					spellId: "ZacW",
					spellName: "Unstable Matter",
					spellDescription: "Zac explodes outward towards nearby enemies, dealing a percentage of their maximum health as magic damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZacW.png",
				}, {
					spellId: "ZacE",
					spellName: "Elastic Slingshot",
					spellDescription: "Zac attaches his arms to the ground and stretches back, launching himself forward.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZacE.png",
				}, {
					spellId: "ZacR",
					spellName: "Let's Bounce!",
					spellDescription: "Zac bounces four times, knocking up enemies hit and slowing them.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZacR.png",
				},
			],
		roles: "Tank, Fighter",
		lane: ""
	},
	{
		id: "Ziggs",
		name: "Ziggs",
		title: "the Hexplosives Expert",
		lore: "With a love of big bombs and short fuses, the yordle Ziggs is an explosive force of nature. As an inventor's assistant in Piltover, he was bored by his predictable life and befriended a mad, blue-haired bomber named Jinx. After a wild night on the town, Ziggs took her advice and moved to Zaun, where he now explores his fascinations more freely, terrorizing the chem-barons and regular citizens alike in his never ending quest to blow stuff up.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 14, 23, 24",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ziggs_0.jpg",
		passiveName: "Short Fuse",
		passiveDescription: "Periodically, Ziggs' next basic attack deals bonus magic damage. This cooldown is reduced whenever Ziggs uses an ability.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/ZiggsPassiveReady.png",
		spells:
			[
				{
					spellId: "ZiggsQ",
					spellName: "Bouncing Bomb",
					spellDescription: "Ziggs throws a bouncing bomb that deals magic damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZiggsQ.png",
				}, {
					spellId: "ZiggsW",
					spellName: "Satchel Charge",
					spellDescription: "Ziggs flings an explosive charge that detonates after 4 seconds, or when this ability is activated again. The explosion deals magic damage to enemies, knocking them away. Ziggs is also knocked away, but takes no damage. Ziggs can use the Satchel to hexplode vulnerable enemy turrets.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZiggsW.png",
				}, {
					spellId: "ZiggsE",
					spellName: "Hexplosive Minefield",
					spellDescription: "Ziggs scatters proximity mines that detonate on enemy contact, dealing magic damage and slowing. Successive mine detonations on the same target deal reduced damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZiggsE.png",
				}, {
					spellId: "ZiggsR",
					spellName: "Mega Inferno Bomb",
					spellDescription: "Ziggs deploys his ultimate creation, the Mega Inferno Bomb, hurling it an enormous distance. Enemies in the primary blast zone take more damage than those farther away.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZiggsR.png",
				},
			],
		roles: "Mage",
		lane: ""
	},
	{
		id: "Zilean",
		name: "Zilean",
		title: "the Chronokeeper",
		lore: "Once a powerful Icathian mage, Zilean became obsessed with the passage of time after witnessing his homeland's destruction by the Void. Unable to spare even a minute to grieve the catastrophic loss, he called upon ancient temporal magic to divine all possible outcomes. Having become functionally immortal, Zilean now drifts through the past, present, and future, bending and warping the flow of time around him, always searching for that elusive moment that will turn back the clock and undo Icathia's destruction.",
		skins: "0, 1, 2, 3, 4, 5, 6, 14",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zilean_0.jpg",
		passiveName: "Time In A Bottle",
		passiveDescription: "Zilean stores time as Experience and can grant it to his allies. When he has enough Experience to finish an ally's level up, he can right-click them to impart it. Zilean receives as much Experience as he gives.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Zilean_Passive.png",
		spells:
			[
				{
					spellId: "ZileanQ",
					spellName: "Time Bomb",
					spellDescription: "Tosses a bomb to target area that sticks to units that come near it (prioritizes Champions). It detonates after 3 seconds, dealing area of effect damage. If a Time Bomb is detonated early by another Time Bomb, it also stuns enemies.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZileanQ.png",
				}, {
					spellId: "ZileanW",
					spellName: "Rewind",
					spellDescription: "Zilean can prepare himself for future confrontations, reducing the cooldowns of his other basic abilities.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZileanW.png",
				}, {
					spellId: "TimeWarp",
					spellName: "Time Warp",
					spellDescription: "Zilean bends time around any unit, decreasing an enemy's Move Speed or increasing an ally's Move Speed for a short time.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/TimeWarp.png",
				}, {
					spellId: "ChronoShift",
					spellName: "Chronoshift",
					spellDescription: "Zilean places a protective time rune on an allied champion, teleporting the champion back in time if they take lethal damage.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ChronoShift.png",
				},
			],
		roles: "Support, Mage",
		lane: ""
	},
	{
		id: "Zoe",
		name: "Zoe",
		title: "the Aspect of Twilight",
		lore: "As the embodiment of mischief, imagination, and change, Zoe acts as the cosmic messenger of Targon, heralding major events that reshape worlds. Her mere presence warps the arcane mathematics governing realities, sometimes causing cataclysms without conscious effort or malice. This perhaps explains the breezy nonchalance with which Zoe approaches her duties, giving her plenty of time to focus on playing games, tricking mortals, or otherwise amusing herself. An encounter with Zoe can be joyous and life affirming, but it is always more than it appears and often extremely dangerous.",
		skins: "0, 1, 2, 9, 18, 19, 20, 22",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zoe_0.jpg",
		passiveName: "More Sparkles!",
		passiveDescription: "Zoe's next basic attack after casting a spell deals bonus magic damage.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Zoe_P.png",
		spells:
			[
				{
					spellId: "ZoeQ",
					spellName: "Paddle Star!",
					spellDescription: "Zoe fires a missile that she can redirect in flight. Deals more damage the longer it flies in a straight line.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZoeQ.png",
				}, {
					spellId: "ZoeW",
					spellName: "Spell Thief",
					spellDescription: "Zoe can pick up the remnants of enemy summoner spell and active item casts and cast them once herself. Whenever she casts a summoner spell, she gains 3 missiles that fire at the nearest target.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZoeW.png",
				}, {
					spellId: "ZoeE",
					spellName: "Sleepy Trouble Bubble",
					spellDescription: "Causes the target to become drowsy, then fall asleep. The first source of damage that breaks the sleep is doubled, up to a cap.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZoeE.png",
				}, {
					spellId: "ZoeR",
					spellName: "Portal Jump",
					spellDescription: "Blink to a nearby position for 1 second. Then blink back.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZoeR.png",
				},
			],
		roles: "Mage, Support",
		lane: ""
	},
	{
		id: "Zyra",
		name: "Zyra",
		title: "Rise of the Thorns",
		lore: "Born in an ancient, sorcerous catastrophe, Zyra is the wrath of nature given form—an alluring hybrid of plant and human, kindling new life with every step. She views the many mortals of Valoran as little more than prey for her seeded progeny, and thinks nothing of slaying them with flurries of deadly spines. Though her true purpose has not been revealed, Zyra wanders the world, indulging her most primal urges to colonize, and strangle all other life from it.",
		skins: "0, 1, 2, 3, 4, 5, 6, 7, 16, 36",
		mainPic: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zyra_0.jpg",
		passiveName: "Garden of Thorns",
		passiveDescription: "Seeds spawn around Zyra periodically, becoming faster with level. Zyra can cast Deadly Spines or Grasping Roots near seeds to grow plants, who fight for Zyra.",
		passiveImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/ZyraP.png",
		spells:
			[
				{
					spellId: "ZyraQ",
					spellName: "Deadly Spines",
					spellDescription: "Thick vines spread through the ground and explode into spines, dealing magic damage to enemies within the area. If cast near a seed, Deadly Spines grows a Thorn Spitter plant, which fires at enemies from afar.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZyraQ.png",
				}, {
					spellId: "ZyraW",
					spellName: "Rampant Growth",
					spellDescription: "Zyra plants a seed, lasting up to 60 seconds. Deadly Spines and Grasping Roots cast near seeds will turn them into plants who fight for Zyra. Zyra can store multiple seeds at once, and killing enemies reduces Rampant Growth's recharge time.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZyraW.png",
				}, {
					spellId: "ZyraE",
					spellName: "Grasping Roots",
					spellDescription: "Zyra sends forth vines through the ground to ensnare her target, dealing damage and rooting enemies they come across. If cast near a seed, Grasping Roots grows a Vine Lasher, whose short range attacks reduce enemy Move Speed.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZyraE.png",
				}, {
					spellId: "ZyraR",
					spellName: "Stranglethorns",
					spellDescription: "Zyra summons a twisted thicket at her target location, dealing damage to enemies as it expands and knocking them airborne as it contracts. Plants within the thicket are enraged.",
					spellImage: "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ZyraR.png",
				},
			],
		roles: "Mage, Support",
		lane: ""
	},
];
async function seedChampions() {
	try {
		await Champion.bulkCreate(championData);
		console.log("Seed data for Champion table inserted successfully.");
	} catch (error) {
		console.error("Error seeding data for Champion table:", error);
	}
}
module.exports = seedChampions;
