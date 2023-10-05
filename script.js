document.addEventListener("DOMContentLoaded", function () {
    const mainEpisodes = [
        "Episódio 1 - Aventura Começa! Monkey D. Luffy",
        "Episódio 2 - O Grande Caçador de Piratas! Roronoa Zoro",
        "Episódio 3 - Morgan VS. Luffy! Quem É essa Beleza Misteriosa?",
        "Episódio 4 - Luffy Foge! A Garota Mágica e o Bando de Piratas Usopp",
        "Episódio 5 - Pirata Luffy VS Cápita Morgan! Quem é o Vencedor?",
        "Episódio 6 - Desafio na Montanha da Morte! Apontando para o Grand Line",
        "Episódio 7 - Reúnam-se! A Bando dos Chapéus de Palha",
        "Episódio 8 - Quem é esse Pirata? Homem-Peixe Arlong",
        "Episódio 9 - Justiça Seja Feita! Chapéu de Palha Luffy",
        "Episódio 10 - Acredite em Mim! O Juramento de Zoro e Kuina!",
        "Episódio 11 - Luffy Desaparece! O Caso do Sequestro de Coby",
        "Episódio 12 - Anunciando uma Nova Tripulação! A Garota Marin!",
        "Episódio 13 - O Que Vai Acontecer? Os Marinheiros em Pânico!",
        "Episódio 14 - Luffy Declarado Morto! A Grande Mentira dos Marines!",
        "Episódio 15 - Você é Meu Alvo! A Determinação de Usopp, o Atirador!",
        "Episódio 16 - Protejam a Aldeia de Usopp! Episódio 16",
        "Episódio 17 - Protejam a Aldeia de Usopp! Episódio 17",
        "Episódio 18 - Chegamos! A Cidade de Shells!",
        "Episódio 19 - Um homem com uma recompensa de 8 milhões de Berries! O Capitão Usopp!",
        "Episódio 20 - Caça à Menina Pirata! As Aventuras de Usopp e Yasopp!",
        "Episódio 21 - Lágrimas de Kaya e a Determinação de Usopp",
        "Episódio 22 - Zoro o Caçador de Piratas VS. Cabaji o Acrobata",
        "Episódio 23 - O Prometido Ouro da Aldeia de Marion!",
        "Episódio 24 - Nada Além de Gritos! A Alma de Luffy Despedaçada",
        "Episódio 25 - A Ameaça Mortal! A Espada do Capitão Kuro",
        "Episódio 26 - A Promessa quebrada! O passado de Usopp revelado",
        "Episódio 27 - Ataque Pirata! A Vingança de Klahadore",
        "Episódio 28 - Explosão de Raiva! Kuro VS. Luffy! A Batalha Final",
        "Episódio 29 - O Juramento do Vencedor: O Final da Batalha",
        "Episódio 30 - Deixem a Neve Continuar a Cair em Alabasta",
        "Episódio 31 - Batalha Mortal em Alubarna! As Areias Correm Vermelhas",
        "Episódio 32 - Koza VS. Cobra! O Credo de um Homem",
        "Episódio 33 - As Lágrimas de Vivi! O Juramento dos Chapéus de Palha",
        "Episódio 34 - O Colapso do Governo Real! As Forças Secretas de Baroque Works",
        "Episódio 35 - 100 Mil Contra 10! Eixo de Dança Real!",
        "Episódio 36 - Zoro's Desperate Fight! O Juramento de Luffy Com seus Amigos",
        "Episódio 37 - Epílogo", // Este episódio é um resumo do arco East Blue
        "Episódio 38 - O Relatório de Buggy o Palhaço!",
        "Episódio 39 - O Rei dos Piratas e o Caçador de Piratas",
        "Episódio 40 - Episódio 40",
        "Episódio 41 - A Cidade dos Desaparecimentos: A Grande Véspera!",
        "Episódio 42 - O Grito do Sino Negro! Adeus para Sempre ao Inimigo",
        "Episódio 43 - Enter Usopp, Atirador dos Chapéus de Palha",
        "Episódio 44 - O Rei da Selva, o Capitão Kuro!",
        "Episódio 45 - Você Não é o Capitão dos Piratas, Kuro!",
        "Episódio 46 - Tudo Acabou! Golpes de Colisão! Luffy VS. Kuro, o Gato Negro!",
        "Episódio 47 - Kaya Agradece, Partindo do Porto! Adeus meu Amigo!",
        "Episódio 48 - Deixe O Céu! É a Hora do Duelo: Zoro VS. Mihawk",
        "Episódio 49 - O Contra-Ataque do Pirata, Kuro!",
        "Episódio 50 - Usopp vs. Daddy The Parent! Hissatsu de Trump e Sharpshooter",
        "Episódio 51 - A Cidade dos Piratas: Waters'7",
        "Episódio 52 - A Promessa de Vivi e o Balão Carnavalesco",
        "Episódio 53 - Jacko Oferece a Cabeça de Luffy",
        "Episódio 54 - Zero e Zoro - A Pequena Batalha",
        "Episódio 55 - Episódio 55",
        "Episódio 56 - Tocando no Porão! O Segredo do Baratie",
        "Episódio 57 - O Chef: Sanji do Mar",
        "Episódio 58 - Apanhe Baroque Works! Os Chapéus de Palha em Território Inimigo!",
        "Episódio 59 - Episódio 59",
        "Episódio 60 - Episódio 60",
        "Episódio 61 - Luffy vs. Warship Island - A Batalha Final"


        // Continuar com os episódios principais
    ];

    document.addEventListener("DOMContentLoaded", function () {
        const fillerEpisodesList = document.querySelector("#filler-episodes-list");
        const toggleFillersButton = document.getElementById("toggleFillersButton");
    
        // Função para ocultar/revelar episódios fillers
        function toggleFillerEpisodes() {
            if (fillerEpisodesList.classList.contains("hidden")) {
                fillerEpisodesList.classList.remove("hidden");
            } else {
                fillerEpisodesList.classList.add("hidden");
            }
        }
    
        // Adicione um evento de clique ao botão
        toggleFillersButton.addEventListener("click", toggleFillerEpisodes);
        
        // Resto do seu código...
    });
    



    const mainEpisodesList = document.querySelector("#main-episodes");

    // Função para exibir os episódios principais na lista
    function displayMainEpisodes() {
        mainEpisodes.forEach((episode) => {
            const listItem = document.createElement("li");
            listItem.textContent = episode;
            mainEpisodesList.appendChild(listItem);
        });
    }

    // Chama a função para exibir os episódios principais
    displayMainEpisodes();

    const toggleFillersButton = document.getElementById("toggleFillersButton");
    

// Função para ocultar/revelar episódios fillers
function toggleFillerEpisodes() {
    if (fillerEpisodesList.style.display === "none") {
        fillerEpisodesList.style.display = "block";
    } else {
        fillerEpisodesList.style.display = "none";
    }
}




// Adicione um evento de clique ao botão
toggleFillersButton.addEventListener("click", toggleFillerEpisodes);


const fillerEpisodes = [
    "Episódio 54 - A Montanha da Solidão - Os Choros de Coby",
    "Episódio 55 - O Passado de Don Krieg - A Traição de Gin",
    "Episódio 56 - Explosão! A Arma Secreta da Baratie",
    "Episódio 57 - O Chef: Sanji do Mar",
    "Episódio 58 - Apanhe Baroque Works! Os Chapéus de Palha em Território Inimigo!",
    "Episódio 59 - Episódio 59",
    "Episódio 60 - Episódio 60"
    // Continuar com os episódios fillers
];

const fillerEpisodesList = document.querySelector("#filler-episodes-list");

// Função para exibir os episódios fillers
function displayFillerEpisodes() {
    fillerEpisodes.forEach((episode) => {
        const listItem = document.createElement("li");
        listItem.textContent = episode;
        fillerEpisodesList.appendChild(listItem);
    });
}

// Chama a função para exibir os episódios fillers
displayFillerEpisodes();



});
