var cards = [
  {
    name: "Flamerion",
    class: "Archer",
    url: "https://i.ibb.co/LJNbJ3f/Flamerion-Archer.png",
    attributes: {
      Strenght: 2,
      Dexterity: 10,
      Vitality: 6,
      Magic: 4
    }
  },
  {
    name: "Rufus",
    class: "Shielder",
    url: "https://i.ibb.co/2yCWJnS/Rufus-Shielder.png",
    attributes: {
      Strenght: 4,
      Dexterity: 4,
      Vitality: 10,
      Magic: 8
    }
  },
  {
    name: "Nutaluk",
    class: "Lancer",
    url: "https://i.ibb.co/GsMQrG5/Nutaluk-Lancer.png",
    attributes: {
      Strenght: 8,
      Dexterity: 7,
      Vitality: 6,
      Magic: 2
    }
  },
  {
    name: "Lonewolf",
    class: "Swordsman",
    url: "https://i.ibb.co/TLQtdwN/Lonewolf-Swordsman.png",
    attributes: {
      Strenght: 8,
      Dexterity: 6,
      Vitality: 5,
      Magic: 7
    }
  },
  {
    name: "So Yong",
    class: "Fighter",
    url: "https://i.ibb.co/02Y1z1K/So-Yong-Fighter.png",
    attributes: {
      Strenght: 10,
      Dexterity: 7,
      Vitality: 4,
      Magic: 7
    }
  },
  {
    name: "Arthur",
    class: "Duelist",
    url: "https://i.ibb.co/DwCVyDr/Arthur-Duelist.png",
    attributes: {
      Strenght: 6,
      Dexterity: 9,
      Vitality: 6,
      Magic: 3
    }
  },
  {
    name: "Haru",
    class: "Elementalist",
    url: "https://i.ibb.co/Yc7Nk36/Haru-Elementalist.png",
    attributes: {
      Strenght: 2,
      Dexterity: 6,
      Vitality: 4,
      Magic: 10
    }
  },
  {
    name: "Sir Terrance Screws",
    class: "Knight",
    url: "https://i.ibb.co/RP1C2sc/Sir-Terrance-Screws-Knight.png",
    attributes: {
      Strenght: 8,
      Dexterity: 4,
      Vitality: 8,
      Magic: 2
    }
  }
];

var playerCard = 0;
var cpuCard = 0;

function sortearCarta() {
  var tempCards = cards;
  var index = Math.floor(Math.random() * tempCards.length);
  playerCard = tempCards[index];
  tempCards.splice(index, 1);

  index = Math.floor(Math.random() * tempCards.length);
  cpuCard = tempCards[index];

  document.getElementById("btnSortear").disabled = true;

  ScreenCard(playerCard);
  ScreenForm();
  WriteOptions(playerCard);
}

function resetar() {
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("options").innerHTML = "";
  document.getElementById("cards").innerHTML = "";
}

function ScreenForm() {
  var elementHTML = "";

  elementHTML += "<div class='container-form'>";
  elementHTML += "<form id='form'>";
  elementHTML += "<h2>Escolha o seu atributo</h2>";
  elementHTML += "<div class='opcoes' id='opcoes'></div>";
  elementHTML +=
    "<button type='button' id='btnJogar' onclick='jogar()'>Jogar</button>";
  elementHTML += "<h2 class='resultado' id='resultado'></h2>";
  elementHTML += "</form>";
  elementHTML += "</div>";

  document.getElementById("options").innerHTML = elementHTML;
}

function jogar() {
  var selectedAttribute = GetAttribute();
  var playerCardValue = playerCard.attributes[selectedAttribute];
  var cpuCardValue = cpuCard.attributes[selectedAttribute];

  if (playerCardValue > cpuCardValue) {
    document.getElementById("resultado").innerHTML = "Você ganhou!";
  } else if (playerCardValue == cpuCardValue) {
    document.getElementById("resultado").innerHTML = "Você empatou!";
  } else {
    document.getElementById("resultado").innerHTML = "Você perdeu!";
  }

  document.getElementById("btnJogar").disabled = true;

  ScreenCard(cpuCard);
}

function ScreenCard(card) {
  var img = document.createElement("img");
  img.src = card.url;

  document.getElementById("cards").appendChild(img);
}

function WriteOptions(card) {
  var elementHTML = "";

  for (var attribute in card.attributes) {
    elementHTML +=
      "<input type='radio' name='attributes' value='" + attribute + "'>";
    elementHTML += attribute;
  }

  document.getElementById("opcoes").innerHTML = elementHTML;
}

function GetAttribute() {
  radioAttributes = document.getElementsByName("attributes");

  for (let i = 0; i < radioAttributes.length; i++) {
    if (radioAttributes[i].checked) {
      return radioAttributes[i].value;
    }
  }
}