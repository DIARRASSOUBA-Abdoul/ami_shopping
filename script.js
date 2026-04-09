const articles = [
  {
    nom: "Coffret MOUSUF",
    image: "https://ci.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/81/611913/1.jpg?8176",
    nbr_etoile: 3,
    description:
      "Une fragrance orientale envoûtante aux notes boisées et fleuries.",
    prix: "10 000 FCFA",
    pass_prix: "15 000 FCFA",
  },
  {
    nom: "Hayyati Rose",
    image: "./img/parfum/hayyati.png",
    nbr_etoile: 3,
    description:
      "Une fragrance orientale envoûtante aux notes boisées et fleuries.",
    prix: "10 000 FCFA",
    pass_prix: "15 000 FCFA",
  },
  {
    nom: "Rose Oud",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400",
    nbr_etoile: 5,
    description:
      "Un parfum de luxe mêlant la rose et l'oud pour une élégance absolue.",
    prix: "18 000 FCFA",
    pass_prix: "25 000 FCFA",
  },
  {
    nom: "Amber Night",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
    nbr_etoile: 4,
    description:
      "Notes d'ambre chaud et de vanille pour une soirée inoubliable.",
    prix: "12 000 FCFA",
    pass_prix: "20 000 FCFA",
  },
  {
    nom: "Jasmin Doré",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400",
    nbr_etoile: 4,
    description: "Floral et frais, idéal pour une femme moderne et raffinée.",
    prix: "9 000 FCFA",
    pass_prix: "14 000 FCFA",
  },
  {
    nom: "Musc Élite",
    image: "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?w=400",
    nbr_etoile: 2,
    description: "Un musc blanc délicat et pur, subtil et envoûtant.",
    prix: "8 000 FCFA",
    pass_prix: "12 000 FCFA",
  },
  {
    nom: "Velvet Rose",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
    nbr_etoile: 5,
    description:
      "La rose la plus douce sublimée par des notes de bois précieux.",
    prix: "22 000 FCFA",
    pass_prix: "30 000 FCFA",
  },
  {
    nom: "Oud Royal",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400",
    nbr_etoile: 5,
    description:
      "L'oud le plus raffiné pour une présence royale et majestueuse.",
    prix: "35 000 FCFA",
    pass_prix: "45 000 FCFA",
  },
  {
    nom: "Santal Blanc",
    image: "https://www.envie2parfum.fr/img/parfums/thumbs/van-cleef-arpels-santal-blanc-1620296103_1000x0.jpg",
    nbr_etoile: 4,
    description:
      "Boisé et crémeux, le santal blanc apaise et enveloppe la peau.",
    prix: "14 000 FCFA",
    pass_prix: "19 000 FCFA",
  },
  {
    nom: "Fleur de Nuit",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400",
    nbr_etoile: 3,
    description:
      "Un bouquet floral mystérieux qui s'épanouit à la tombée de la nuit.",
    prix: "11 000 FCFA",
    pass_prix: "16 000 FCFA",
  },
  {
    nom: "Gold Intense",
    image: "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?w=400",
    nbr_etoile: 4,
    description: "Une fragrance dorée aux accents épicés et chaleureux.",
    prix: "20 000 FCFA",
    pass_prix: "28 000 FCFA",
  },
  {
    nom: "Pivoine Sauvage",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
    nbr_etoile: 3,
    description:
      "Fraîche et florale, la pivoine sauvage évoque la nature en fleurs.",
    prix: "9 500 FCFA",
    pass_prix: "13 000 FCFA",
  },
  {
    nom: "Bois de Cèdre",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400",
    nbr_etoile: 4,
    description: "Un parfum masculin au bois de cèdre intense et raffiné.",
    prix: "13 000 FCFA",
    pass_prix: "18 000 FCFA",
  },
  {
    nom: "Miel Sauvage",
    image: "https://www.lamaisonduparfum.com/cdn/shop/files/AMOUROUD_29_1500x1500.png?v=1772728142",
    nbr_etoile: 2,
    description: "Doux et gourmand, ce parfum rappelle les prairies fleuries.",
    prix: "7 500 FCFA",
    pass_prix: "11 000 FCFA",
  },
  {
    nom: "Iris Perle",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400",
    nbr_etoile: 5,
    description:
      "L'iris le plus précieux sublimé par des notes perlées et poudrées.",
    prix: "25 000 FCFA",
    pass_prix: "33 000 FCFA",
  },
  {
    nom: "Safran Rouge",
    image: "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?w=400",
    nbr_etoile: 4,
    description: "Épicé et sensuel, le safran rouge embrase les sens.",
    prix: "16 000 FCFA",
    pass_prix: "22 000 FCFA",
  },
  {
    nom: "Aqua Marine",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
    nbr_etoile: 3,
    description: "Frais et marin, idéal pour les journées ensoleillées.",
    prix: "10 500 FCFA",
    pass_prix: "15 000 FCFA",
  },
  {
    nom: "Cannelle Dorée",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400",
    nbr_etoile: 4,
    description:
      "Épicé et chaleureux, ce parfum réchauffe comme un feu de bois.",
    prix: "12 500 FCFA",
    pass_prix: "17 000 FCFA",
  },
  {
    nom: "Magnolia Blanc",
    image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.52943.avif",
    nbr_etoile: 5,
    description:
      "Délicat et pur, le magnolia blanc incarne la féminité absolue.",
    prix: "19 000 FCFA",
    pass_prix: "26 000 FCFA",
  },
  {
    nom: "Bergamote Intense",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400",
    nbr_etoile: 3,
    description: "Agrumes frais et toniques pour une journée pleine d'énergie.",
    prix: "8 500 FCFA",
    pass_prix: "12 000 FCFA",
  },
  {
    nom: "Nuit Étoilée",
    image: "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?w=400",
    nbr_etoile: 5,
    description:
      "Mystérieux et profond, ce parfum évoque les nuits étoilées du désert.",
    prix: "28 000 FCFA",
    pass_prix: "38 000 FCFA",
  },
  {
    nom: "Vanille Créole",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
    nbr_etoile: 4,
    description:
      "Gourmand et chaud, la vanille créole enveloppe d'une douceur exotique.",
    prix: "11 500 FCFA",
    pass_prix: "16 000 FCFA",
  },
  {
    nom: "Patchouli Noir",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400",
    nbr_etoile: 3,
    description:
      "Terreux et sensuel, le patchouli noir séduit par sa profondeur.",
    prix: "13 500 FCFA",
    pass_prix: "19 000 FCFA",
  },
  {
    nom: "Lilas Frais",
    image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.89005.avif",
    nbr_etoile: 4,
    description:
      "Floral et léger, le lilas frais rappelle les matins de printemps.",
    prix: "9 000 FCFA",
    pass_prix: "13 500 FCFA",
  },
  {
    nom: "Cacao Noir",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400",
    nbr_etoile: 2,
    description:
      "Gourmand et intense, le cacao noir pour les amateurs de douceur.",
    prix: "7 000 FCFA",
    pass_prix: "10 000 FCFA",
  },
  {
    nom: "Thé Vert Imperial",
    image: "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?w=400",
    nbr_etoile: 4,
    description:
      "Frais et délicat, le thé vert impérial apporte sérénité et raffinement.",
    prix: "10 000 FCFA",
    pass_prix: "14 500 FCFA",
  },
  {
    nom: "Cerisier Japonais",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
    nbr_etoile: 5,
    description:
      "Inspiré du hanami, ce parfum capture la beauté éphémère des cerisiers.",
    prix: "21 000 FCFA",
    pass_prix: "29 000 FCFA",
  },
  {
    nom: "Musc Arabique",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400",
    nbr_etoile: 5,
    description:
      "Le musc arabique traditionnel, doux et persistant sur la peau.",
    prix: "17 000 FCFA",
    pass_prix: "24 000 FCFA",
  },
  {
    nom: "Grenade Rouge",
    image: "https://www.universcosmetix.com/wp-content/uploads/2025/10/solinotes-eau-de-parfum-grenade-50ml-dakar-universosmetix.jpg",
    nbr_etoile: 3,
    description:
      "Fruité et acidulé, la grenade rouge pour une touche de vivacité.",
    prix: "9 000 FCFA",
    pass_prix: "13 000 FCFA",
  },
  {
    nom: "Encens Sacré",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400",
    nbr_etoile: 4,
    description:
      "Spirituel et enveloppant, l'encens sacré purifie et élève l'âme.",
    prix: "15 000 FCFA",
    pass_prix: "21 000 FCFA",
  },
  {
    nom: "Mimosa Soleil",
    image: "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?w=400",
    nbr_etoile: 4,
    description:
      "Lumineux et joyeux, le mimosa soleil illumine chaque journée.",
    prix: "11 000 FCFA",
    pass_prix: "15 500 FCFA",
  },
  {
    nom: "Ambre Gris",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
    nbr_etoile: 5,
    description:
      "Rare et précieux, l'ambre gris offre une sensualité incomparable.",
    prix: "40 000 FCFA",
    pass_prix: "55 000 FCFA",
  },
  {
    nom: "Tubéreuse Noire",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400",
    nbr_etoile: 3,
    description:
      "Envoûtante et mystérieuse, la tubéreuse noire captive les esprits.",
    prix: "14 000 FCFA",
    pass_prix: "20 000 FCFA",
  },
  {
    nom: "Rococo Eau de Parfum",
    image: "https://ci.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/46/154713/1.jpg?1944",
    nbr_etoile: 3,
    description:
      "Pétillant et frais, le citron frappé réveille les sens dès le matin.",
    prix: "8 000 FCFA",
    pass_prix: "11 500 FCFA",
  },
  {
    nom: "Bois d'Ébène",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400",
    nbr_etoile: 4,
    description:
      "Sombre et élégant, le bois d'ébène pour une personnalité affirmée.",
    prix: "16 500 FCFA",
    pass_prix: "23 000 FCFA",
  },
  {
    nom: "Fleur d'Oranger",
    image: "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?w=400",
    nbr_etoile: 5,
    description:
      "Frais et nuptial, la fleur d'oranger évoque la pureté et la douceur.",
    prix: "18 500 FCFA",
    pass_prix: "25 000 FCFA",
  },
  {
    nom: "Poivre Noir",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
    nbr_etoile: 4,
    description:
      "Piquant et viril, le poivre noir insuffle une énergie masculine puissante.",
    prix: "13 000 FCFA",
    pass_prix: "18 500 FCFA",
  },
  {
    nom: "Lotus Bleu",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400",
    nbr_etoile: 5,
    description:
      "Aquatique et floral, le lotus bleu incarne la sérénité asiatique.",
    prix: "23 000 FCFA",
    pass_prix: "32 000 FCFA",
  },
  {
    nom: "Smart Collection N°352",
    image: "https://ci.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/37/377103/1.jpg?1985",
    nbr_etoile: 3,
    description:
      "Chaleureux et fumé, le tabac blond pour un charme vintage assumé.",
    prix: "12 000 FCFA",
    pass_prix: "17 500 FCFA",
  },
  {
    nom: "Caramel Sucré",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400",
    nbr_etoile: 2,
    description:
      "Gourmand et irrésistible, le caramel sucré pour les douces envies.",
    prix: "7 500 FCFA",
    pass_prix: "11 000 FCFA",
  },
  {
    nom: "Gardénia Blanc",
    image: "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?w=400",
    nbr_etoile: 4,
    description:
      "Crémeux et floral, le gardénia blanc incarne la féminité douce.",
    prix: "15 500 FCFA",
    pass_prix: "21 000 FCFA",
  },
  {
    nom: "Vétiver Fumé",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
    nbr_etoile: 4,
    description:
      "Terreux et élégant, le vétiver fumé pour une sophistication naturelle.",
    prix: "14 500 FCFA",
    pass_prix: "20 000 FCFA",
  },
  {
    nom: "Fraise Sauvage",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400",
    nbr_etoile: 3,
    description:
      "Fruité et printanier, la fraise sauvage pour une touche de fraîcheur.",
    prix: "8 500 FCFA",
    pass_prix: "12 500 FCFA",
  },
  {
    nom: "Pivoine Rose",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400",
    nbr_etoile: 4,
    description:
      "Tendre et romantique, la pivoine rose pour les cœurs sensibles.",
    prix: "10 500 FCFA",
    pass_prix: "15 000 FCFA",
  },
  {
    nom: "Benjoin Doux",
    image: "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?w=400",
    nbr_etoile: 3,
    description:
      "Balsamique et réconfortant, le benjoin doux apaise et enveloppe.",
    prix: "11 000 FCFA",
    pass_prix: "15 500 FCFA",
  },
  {
    nom: "Mandarine Pétillante",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
    nbr_etoile: 3,
    description:
      "Acidulée et joyeuse, la mandarine pétillante pour une humeur légère.",
    prix: "9 000 FCFA",
    pass_prix: "13 000 FCFA",
  },
  {
    nom: "Rose de Damas",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400",
    nbr_etoile: 5,
    description:
      "La reine des roses, symbole de luxe et de beauté intemporelle.",
    prix: "30 000 FCFA",
    pass_prix: "40 000 FCFA",
  },
  {
    nom: "Myrrhe Précieuse",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400",
    nbr_etoile: 4,
    description:
      "Ancienne et mystique, la myrrhe précieuse pour une âme aventurière.",
    prix: "19 500 FCFA",
    pass_prix: "27 000 FCFA",
  },
];

const container = document.querySelector('.card_container');
console.log("hello")

// Vider le container d'abord (supprimer les cards statiques du HTML)
container.innerHTML = '';

articles.forEach(article => {

    // Générer les étoiles
    let etoiles = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= article.nbr_etoile) {
            etoiles += `<img src="./img/icon/star (2).png" alt="étoile pleine">`;
        } else {
            etoiles += `<img src="./img/icon/star.png" alt="étoile vide">`;
        }
    }

    // Créer la card
    container.innerHTML += `
        <div class="card">
            <div class="image">
                <img src="${article.image}" alt="${article.nom}">
            </div>
            <div class="info">
                <h3>${article.nom}</h3>
                <div class="etoiles">${etoiles}</div>
                <p>${article.description}</p>
            </div>
            <div class="bas">
                <div class="prix">
                    <img src="./img/icon/tag.png" alt="">
                    <p class="act_price">${article.prix}</p>
                    <p class="pass_price">${article.pass_prix}</p>
                </div>
                <div class="payer">
                    <img src="./img/icon/basket.png" alt="">
                </div>
            </div>
        </div>
    `;
});