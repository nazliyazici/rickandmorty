async function getCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');

        if (!response.ok) {
            throw new Error(`Hata: ${response.status}`);
        }

        const data = await response.json();
        console.log("Rick and Morty Karakterleri:", data);

        const characterList = document.getElementById("character-list");
        characterList.innerHTML = ""; 

        data.results.forEach(character => {
            const listItem = document.createElement("div");
            listItem.classList.add("character-card");

        
            listItem.innerHTML = `
                <a href="detail.html?id=${character.id}" class="character-link">
                    <img src="${character.image}" alt="${character.name}" />
                    <h3>${character.name}</h3>
                </a>
            `;
            characterList.appendChild(listItem);
        });

    } catch (error) {
        console.error("Veri çekme hatası:", error);
    }
}


document.addEventListener("DOMContentLoaded", getCharacters);

