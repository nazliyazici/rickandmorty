async function getCharacterDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const characterId = urlParams.get('id'); 

    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
        
        if (!response.ok) {
            throw new Error(`Hata: ${response.status}`);
        }

        const character = await response.json();
        console.log("Karakter Detayı:", character);

        const characterDetail = document.getElementById("character-detail");

        characterDetail.innerHTML = `
         <div style="
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 177px;
          flex-wrap: wrap;
          max-width: 1100px;
          margin: 50px auto;
        ">
          
          <!-- SOLDA GÖRSEL -->
          <div style="
            flex: 0 0 300px;
            text-align: center;
          ">
            <img 
              src="${character.image}" 
              alt="${character.name}" 
              style="border-radius: 15px; width: 400px; max-width: 400px; box-shadow: 0 4px 12px rgba(0,0,0,0.4);"
            />
          </div>
      
          <!-- SAĞDA DETAY YAZILARI -->
          <div style="
            flex: 1;
            text-align: left;
            font-size: 21px;
            color: white;
            padding: 25px 30px;
            border-radius: 20px;
            box-shadow: 0 0 20px rgba(35, 230, 187, 0.3);
          ">
            <h3 style="font-size: 37px; color:rgb(158, 44, 180); margin-bottom: 10px; text-shadow: 1px 1px 3px #000;">${character.name}</h3>
            <p><span style="color: #00ffcc;">🆔 ID:</span> ${character.id}</p>
            <p><span style="color: rgba(201, 9, 9, 0.69);">🧬 Tür:</span> ${character.species}</p>
            <p><span style="color: #ff66cc;">🚻 Cinsiyet:</span> ${character.gender}</p>
            <p><span style="color: rgb(70, 236, 70);">❤️ Durum:</span> ${character.status}</p>
            <p><span style="color: #66ccff;">📍 Konum:</span> ${character.location.name}</p>
            <p><span style="color: rgb(240, 130, 76);">🌍 Yaşadığı Gezegen:</span> ${character.origin.name}</p>
            <p><span style="color: rgb(241, 177, 241);">🎬 Göründüğü Bölüm Sayısı:</span> ${character.episode.length}</p>
            <p><span style="color: #99ffff;">📅 Oluşturulma Tarihi:</span> ${new Date(character.created).toLocaleDateString()}</p>
          </div>
      
        </div>
      `;
      
    } catch (error) {
        console.error("Veri çekme hatası:", error);
    }
}


// Sayfa yüklendiğinde karakter detayını getir
document.addEventListener("DOMContentLoaded", getCharacterDetail);

function createFallingRocks(count = 20) {
    for (let i = 0; i < count; i++) {
      const rock = document.createElement("div");
      rock.classList.add("falling-rock");
  
      // Rastgele konum, hız ve gecikme
      const left = Math.random() * window.innerWidth;
      const duration = 6 + Math.random() * 6;
      const delay = Math.random() * 6;
  
      rock.style.left = `${left}px`;
      rock.style.animationDuration = `${duration}s`;
      rock.style.animationDelay = `${delay}s`;
  
    // Rastgele dönme yönü (pozitif veya negatif)
    const direction = Math.random() > 0.5 ? 1 : -1;
    rock.style.setProperty('--rotate-direction', direction);

      document.body.appendChild(rock);
    }
  }
  
  // Sayfa yüklenince taşları oluştur
  document.addEventListener("DOMContentLoaded", () => {
    getCharacterDetail();
    createFallingRocks(15);
  });
  









  