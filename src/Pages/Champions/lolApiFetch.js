
export async function fetchChampionsAvatars() {
	const response = await fetch("http://ddragon.leagueoflegends.com/cdn/13.12.1/data/en_US/champion.json");
	const data = await response.json();
	return data;
}

export async function fetchChampionInfo(championName) {
	const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.12.1/data/en_US/champion/${championName}.json`);
	const data = await response.json();
	return data;
}