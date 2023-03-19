

//? USES FETCH TO RETRIEVE DATA FROM RIOT API
//? ONLY LEAVING CODE IN CASE I NEED TO USE IT AGAIN
//? DO NOT USE THIS CODE FOR DATABASE PRODUCTION

// Make a request to the Riot API to fetch the champion data
fetch("http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion.json")
	.then((response) => response.json())
	.then((data) => {
		// Extract the champion data from the response
		const championData = data.data;

		// Create an array of the champions
		const champions = Object.values(championData);

		// Loop through each champion and fetch their data
		champions.forEach((champion) => {
			const championName = champion.id;
			const championUrl = `http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion/${championName}.json`;

			// Make a request to the Riot API to fetch the champion data
			fetch(championUrl)
				.then((response) => response.json())
				.then((championData) => {
					// Extract the relevant information from the champion data
					const id = championData.data[championName].id;
					const name = championData.data[championName].name;
					const title = championData.data[championName].title;
					const fullImage = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`;
					const skinIds = Object.keys(championData.data[championName].skins).map((skin) => championData.data[championName].skins[skin].num);
					const lore = championData.data[championName].lore;
					const roles = championData.data[championName].tags;

					// Extract the relevant information from the champion's spells and passive ability
					const spells = championData.data[championName].spells.map((spell) => {
						const spellId = spell.id;
						const spellName = spell.name;
						const spellDescription = spell.description;
						const spellImage = `http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/${spellId}.png`;
						return { spellId, spellName, spellDescription, spellImage };
					});

					const passive = {
						passiveName: championData.data[championName].passive.name,
						passiveDescription: championData.data[championName].passive.description,
						passiveImage: `http://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/${championData.data[championName].passive.image.full}`,
					};

					// Generate HTML for displaying the champion information
					const championHtml = `
						<div class="champion">
							{<br>
							id: "${id}",<br>
							name: "${name}",<br>
							title: "${title}",<br>
							lore: "${lore}",<br>
							skins: "${skinIds.join(", ")}",<br>
							mainPic: "${fullImage}",<br>
							passiveName: "${passive.passiveName}",<br>
							passiveDescription: "${passive.passiveDescription}",<br>
							passiveImage: "${passive.passiveImage}",<br>
							spells: <br>[<br>
								${spells.map((spell) =>
												`
								{<br>
									spellId: "${spell.spellId}",<br>
									spellName: "${spell.spellName}",<br>
									spellDescription: "${spell.spellDescription}",<br>
									spellImage: "${spell.spellImage}",
								},
								`
											).join("")}<br>
							],<br>
							roles: "${roles.join(", ")}",<br>
							lane: ""<br>
						},
						</div>
						`;
				
					// Create a div element to hold the champion information
					const championDiv = document.createElement("div");
					championDiv.innerHTML = championHtml;

					// Append the div to the container element
					const container = document.getElementById("champion-container");
					container.appendChild(championDiv);

				});
		});
	});