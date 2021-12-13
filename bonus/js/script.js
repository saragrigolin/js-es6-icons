/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.
Consigli del giorno
Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina. Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi. Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?
Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome. Solamente quando la parte logica è completa, ci dedichiamo al css.
*/

datas = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];

let container = document.querySelector('.container-ul');
let filter = document.getElementById('filter');

//filtro le verdure
let vegetables = datas.filter((element) => {
    return element.type == "vegetable";

});

//filtro gli animali
let animals = datas.filter((element) => {
    return element.type == "animal";
});

//filtro gli utenti
let users = datas.filter((element) => {
    return element.type == "user";
});

//colori casuali per ogni categoria
vegetableColor = setColor();
vegetables.forEach((element) => {
    element.color = vegetableColor;
});

userColor = setColor();
users.forEach((element) => {
    element.color = userColor;
});

animalColor = setColor();
animals.forEach((element) => {
    element.color = animalColor;
});

for (let index = 0; index < datas.length; index++) {
    //richiamo la funzione
    container.innerHTML += makeCard(datas[index]);
};

//al cambio della select
filter.addEventListener('change', function (){
    switch (filter.value) {
        case 'all':
            container.innerHTML = '';
            //richiamo la funzione per tutti gli elementi
            datas.forEach((element) => {
                container.innerHTML += makeCard(element);
            });
            break;
        case 'vegetable':
            container.innerHTML = '';
            vegetableColor = setColor();
            //richiamo la funzione per le verdure
            vegetables.forEach((element) => {
                element.color = vegetableColor;
                container.innerHTML += makeCard(element);
            });
            break;
        case 'animal':
            container.innerHTML = '';
            //richiamo la funzione per gli animali
            animals.forEach((element) => {
                container.innerHTML += makeCard(element);
            });
            break;
        case 'user':
            container.innerHTML = '';
            //richiamo la funzione per gli utenti
            users.forEach((element) => {
                container.innerHTML += makeCard(element);
            });
            break;
    }
});


//funzione per creare le card
function makeCard(element) {


    //template per le card
    const templateCard = `
        <li class="d-flex ${element.type}"><i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i><span>${element.name}</span></li>
        `;
    return templateCard;
}

//funzione per creare un colore HEX random
function setColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return color = "#" + randomColor;
}

colors = [
    {
        
    }
]