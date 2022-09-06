export const getMainRecipes = () => {
    return mainRecipes;
}   

export const getOtherRecipes = () => {
    return otherRecipes;
}

const mainRecipes = [
    {
        "id": 39003,
        "name": "Midsommartacos", 
        "type": "recipe",
        "url": "/midsommartacos", 
        "sponsored": null,
        "description": "Sommarens tacos är fylld med gubbröra, hummerröraeller kall potatis och sill!", 
        "image": {
            "name": "Midsommartacos", 
            "photographer": "Tv4",
            "url": "https://img.koket.se/standard-large/midsommartacos.png"
        }
    },
        
    {
        "id": 28241,
        "name": "Cheesecake med räkor och kavring i glas", "type": "recipe",
        "url": "/cheesecake-med-rakor-och-kavring-i-glas",
        "sponsored": null,
        "description": "Att smörsteka kavring med kryddor är en riktig höjdare. Det låter kanske konstigt, men jag brukar använda precis samma kavring till äppelkaka. Fega inte ur utan låt brödet bli rejält rostat och riktigt knaprigt. Lätt och snygg förrätt till två eller 200 – det spelar ingen roll. /Tina",
        "image": {
            "name": "Cheesecake med räkor och kavring i glas", 
            "photographer": "Charlie Drevstam",
            "url": "https://img.koket.se/standard-large/cheesecake-med-rakor-och-kavring-i-glas.jpg"
        }
    },
]

const otherRecipes = [
    {
        "id": 4607,
        "name": "Midsommartårta på 7 sätt", 
        "type": "article",
        "url": "/midsommartarta-pa-7-satt", 
        "sponsored": null,
        "description": "Marängtårta, gräddtårta, cheesecake, naked cake eller rulltårta. Det finns många sätt att fira midsommar på! Här är 7 frestande tårtor att inspireras av:",
        "image": {
            "name": "Sommartårta med jordgubbsmousse och citronkräm", 
            "photographer": "TV4",
            "url": "https://img.koket.se/standard-large/sommartarta-med-jordgubbsmousse-och-citronkram.jpg"
        }
    },
    {
        "id": 30819,
        "name": "Sill- och potatispaj", 
        "type": "recipe",
        "url": "/sill-och-potatispaj", 
        "sponsored": true,
        "description": "En smaskig paj fylld med matjessill, färskpotatis och lök. Ingredienser som hör midsommaren till.",
        "image": {
            "name": "Sill- och potatispaj", 
            "photographer": "WW ViktVäktarna",
            "url": "https://img.koket.se/standard-large/sill-och-potatispaj.jpg"
        }
    },
    {
        "id": 1292,
        "name": "Midsommarmeny", 
        "type": "article", 
        "url": "/midsommarmeny",
        "sponsored": null,
        "description": "Här samlar vi tips på midsommarmenyer från sill till grill med Kökets och TV-kockarnas bästa recept!",
        "image": {
            "name": "Sommartårta i glas med jordgubbar och brynt smör", 
            "photographer": "Jessica Frej",
            "url": "https://img.koket.se/standard-large/sommartarta-i-glas-med-jordgubbar-och-brynt-smor.jpg"
        }
    },
    {
        "id": 33322,
        "name": "Sommarkimchi", 
        "type": "recipe",
        "url": "/vit-kimchi", 
        "sponsored": null,
        "description": "Sommarkimchi är en mildare variant av klassisk kimchi, den får en härlig fräsch smak från äpple och ingefära. Receptet kommer ur boken _Kimchi och kombuca_ av Soki Choi", 
        "image": {
            "name": "Vit kimchi", 
            "photographer": "Roland Persson",
            "url": "https://img.koket.se/standard-large/vit-kimchi-2.jpg"
        }
    },
]