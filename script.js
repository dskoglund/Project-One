var currentUser = 1;
var people = [
  {
    id: 1,
    name: "Dave Skoglund",
    location: "Mission Viejo",
    image: "dave.jpg",
    friends: [2,3,4,5,6,7,8,9]
  },
  {
    id: 2,
    name: "Skyler Skoglund",
    location: "Mission Viejo",
    image: "skyler.jpg",
    friends:[]
  },
  {
    id: 3,
    name: "Angie Dicenzo",
    location: "Mission Viejo",
    image: "angie.jpg",
    friends: []
  },
  {
    id: 4,
    name: "Riley Skoglund",
    location: "Mission Viejo",
    image: "riley.jpg",
    friends:[]
  },
  {
    id:5,
    name: "Jerry Skoglund",
    location: "Lake Forest",
    image: "jerry.jpg",
    friends:[]
  },
  {
    id:6,
    name: "Sharon Skoglund",
    location: "Lake Forest",
    image: "sharon.jpg",
    friends:[]
  },
  {
    id:7,
    name: "Kimberly Skoglund",
    location: "Lake Forest",
    image: "kim.jpg",
    friends: []
  },
  {
    id:8,
    name: "Kevin England",
    location: "Lake Forest",
    image: "kevin.jpg",
    friends:[]
  },
  {
    id:9,
    name: "Spinner Skoglund",
    location: "Foothill Ranch",
    image: "spinner.jpg",
    friends:[]
  },
  {
    id:10,
    name:"Kobe Bryant",
    location: "Los Angeles",
    image: "kobe.jpg",
    friends: []
  },
  {
    "id": 11,
    "name": "Jean Warren",
    "location": "Priyutovo",
    "image": "https://robohash.org/fugaaliquidsimilique.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 12,
    "name": "Phyllis Grant",
    "location": "Bordeaux",
    "image": "https://robohash.org/suscipitquossint.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 13,
    "name": "Denise Franklin",
    "location": "Jiuting",
    "image": "https://robohash.org/nemoinciduntid.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 14,
    "name": "Chris Bell",
    "location": "Songea",
    "image": "https://robohash.org/estautaut.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 15,
    "name": "Andrea Barnes",
    "location": "Wuxia",
    "image": "https://robohash.org/quasassumendasint.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 16,
    "name": "Joyce Walker",
    "location": "Talalora",
    "image": "https://robohash.org/estremasperiores.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 17,
    "name": "Linda Parker",
    "location": "Paris 09",
    "image": "https://robohash.org/omnisaliquamdolor.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 18,
    "name": "Fred Mccoy",
    "location": "Macabugos",
    "image": "https://robohash.org/sedsuntut.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 19,
    "name": "Martin Murphy",
    "location": "Alor Setar",
    "image": "https://robohash.org/corporistemporaea.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 20,
    "name": "Ryan Stephens",
    "location": "Bilhorod-Dnistrovs’kyy",
    "image": "https://robohash.org/consequunturoptioveritatis.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 21,
    "name": "Howard Richardson",
    "location": "Paraíso",
    "image": "https://robohash.org/quidemautemdolores.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 22,
    "name": "Ann Mills",
    "location": "Fuchun",
    "image": "https://robohash.org/etdelectuspraesentium.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 23,
    "name": "Robin Wagner",
    "location": "Guaimaca",
    "image": "https://robohash.org/autconsequunturfugit.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 24,
    "name": "Tammy Jones",
    "location": "Monte Azul Paulista",
    "image": "https://robohash.org/inducimusaut.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 25,
    "name": "William Foster",
    "location": "Quintas",
    "image": "https://robohash.org/dolorsedrepellat.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 26,
    "name": "Marie Sims",
    "location": "Korobitsyno",
    "image": "https://robohash.org/suscipitesseid.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 27,
    "name": "Teresa Riley",
    "location": "Saintes",
    "image": "https://robohash.org/cumquevelitquod.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 28,
    "name": "Irene Kennedy",
    "location": "Navashino",
    "image": "https://robohash.org/exutaut.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 29,
    "name": "Jerry Murray",
    "location": "Nancaicun",
    "image": "https://robohash.org/hiceosvero.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 30,
    "name": "Andrea Griffin",
    "location": "Krajan",
    "image": "https://robohash.org/suntdebitiset.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 31,
    "name": "Evelyn Rice",
    "location": "Srbica",
    "image": "https://robohash.org/assumendaquidemquia.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 32,
    "name": "Johnny Hall",
    "location": "Macun",
    "image": "https://robohash.org/oditnatusiure.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 33,
    "name": "Jesse Watson",
    "location": "Karlskoga",
    "image": "https://robohash.org/modiaccusamusvoluptatem.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 34,
    "name": "Gary Kim",
    "location": "Komsomol’sk",
    "image": "https://robohash.org/porrodolorumhic.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 35,
    "name": "Cynthia Brooks",
    "location": "Labelle",
    "image": "https://robohash.org/atautin.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 36,
    "name": "Joshua Hughes",
    "location": "Senanga",
    "image": "https://robohash.org/facerevitaenam.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 37,
    "name": "Harry Carter",
    "location": "Abakan",
    "image": "https://robohash.org/totamautmaxime.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 38,
    "name": "Jennifer White",
    "location": "Châtillon",
    "image": "https://robohash.org/autsequieveniet.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 39,
    "name": "Larry Richardson",
    "location": "Ribeirópolis",
    "image": "https://robohash.org/etearumvoluptas.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 40,
    "name": "Arthur Lynch",
    "location": "Quận Phú Nhuận",
    "image": "https://robohash.org/possimusdolorespraesentium.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 41,
    "name": "Douglas Harper",
    "location": "Sinarwangi",
    "image": "https://robohash.org/magnieiustotam.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 42,
    "name": "Marilyn Hughes",
    "location": "Guayaybi",
    "image": "https://robohash.org/temporeconsequaturfacere.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 43,
    "name": "Frances Bennett",
    "location": "Thị Trấn Hùng Quốc",
    "image": "https://robohash.org/doloresnonodit.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 44,
    "name": "Karen Lee",
    "location": "Rancagadog",
    "image": "https://robohash.org/praesentiumutcupiditate.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 45,
    "name": "Kimberly Hunt",
    "location": "Cornwall",
    "image": "https://robohash.org/nobisetqui.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 46,
    "name": "Craig Stone",
    "location": "Badulla",
    "image": "https://robohash.org/etculpaut.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 47,
    "name": "Diane Burke",
    "location": "Balai",
    "image": "https://robohash.org/inesseoccaecati.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 48,
    "name": "Patricia Jacobs",
    "location": "Foz Sousa",
    "image": "https://robohash.org/quisquasisuscipit.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 49,
    "name": "Anthony Parker",
    "location": "Birr",
    "image": "https://robohash.org/intemporaquo.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 50,
    "name": "Emily Frazier",
    "location": "Shamakhi",
    "image": "https://robohash.org/molestiasenimquia.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 51,
    "name": "Donald George",
    "location": "Géfyra",
    "image": "https://robohash.org/autemaccusamusnemo.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 52,
    "name": "Jonathan Nichols",
    "location": "Ampera",
    "image": "https://robohash.org/cumaliasquia.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 53,
    "name": "Edward Foster",
    "location": "Sviblovo",
    "image": "https://robohash.org/praesentiumaddolore.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 54,
    "name": "Katherine Wells",
    "location": "Jatisari",
    "image": "https://robohash.org/autquoest.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 55,
    "name": "Anne Chapman",
    "location": "Yantian",
    "image": "https://robohash.org/quitemporaet.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 56,
    "name": "Susan Pierce",
    "location": "Gressier",
    "image": "https://robohash.org/voluptatestemporibusnulla.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 57,
    "name": "Harold Young",
    "location": "Jastrzębia",
    "image": "https://robohash.org/nihilquofacilis.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 58,
    "name": "Johnny James",
    "location": "Huangmao",
    "image": "https://robohash.org/undeasperioresea.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 59,
    "name": "Jerry Campbell",
    "location": "Tanay",
    "image": "https://robohash.org/pariaturadipiscierror.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 60,
    "name": "Johnny Brooks",
    "location": "Nangan",
    "image": "https://robohash.org/perferendisoptiosequi.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 61,
    "name": "James Baker",
    "location": "Viangxai",
    "image": "https://robohash.org/dolordoloremquedolorum.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 62,
    "name": "Rachel Rodriguez",
    "location": "Slobodskoy",
    "image": "https://robohash.org/culpapossimusvoluptatem.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 63,
    "name": "Walter Wilson",
    "location": "Calceta",
    "image": "https://robohash.org/iureistevel.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 64,
    "name": "Emily Henderson",
    "location": "Quinipot",
    "image": "https://robohash.org/autsedcorrupti.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 65,
    "name": "Douglas Willis",
    "location": "Colcabamba",
    "image": "https://robohash.org/natusdoloremaspernatur.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 66,
    "name": "Brian Hart",
    "location": "Nantes",
    "image": "https://robohash.org/eaqueculpadolorem.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 67,
    "name": "Donald Nelson",
    "location": "Kamal",
    "image": "https://robohash.org/cumqueiustonon.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 68,
    "name": "William Parker",
    "location": "Qijiaxi",
    "image": "https://robohash.org/dignissimosnamveniam.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 69,
    "name": "Janet Johnson",
    "location": "Minneapolis",
    "image": "https://robohash.org/inciduntquialiquam.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 70,
    "name": "Harold Hunter",
    "location": "Évry",
    "image": "https://robohash.org/nonminimaillo.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 71,
    "name": "Jesse Hamilton",
    "location": "Aguelmous",
    "image": "https://robohash.org/suntdolorporro.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 72,
    "name": "Virginia Burton",
    "location": "Heshang",
    "image": "https://robohash.org/quasieiusut.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 73,
    "name": "Phyllis Payne",
    "location": "Pictou",
    "image": "https://robohash.org/nesciuntsitcupiditate.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 74,
    "name": "Raymond Bennett",
    "location": "Sanrao",
    "image": "https://robohash.org/etnesciuntomnis.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 75,
    "name": "Wayne Lynch",
    "location": "Tame",
    "image": "https://robohash.org/officiareprehenderitsaepe.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 76,
    "name": "Christine Butler",
    "location": "Liverpool",
    "image": "https://robohash.org/doloresetut.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 77,
    "name": "Jonathan Cox",
    "location": "Yushugou",
    "image": "https://robohash.org/dolorummodiut.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 78,
    "name": "Amy Lawson",
    "location": "Erdao",
    "image": "https://robohash.org/estreiciendisveniam.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 79,
    "name": "Judith Carpenter",
    "location": "Puerto Rico",
    "image": "https://robohash.org/etaliquamea.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 80,
    "name": "Jennifer Perez",
    "location": "Qīr Moāv",
    "image": "https://robohash.org/nequequiaid.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 81,
    "name": "Carl Harvey",
    "location": "Ochakovo-Matveyevskoye",
    "image": "https://robohash.org/molestiaepraesentiumsit.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 82,
    "name": "Willie Garza",
    "location": "Sindou",
    "image": "https://robohash.org/modifacilissequi.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 83,
    "name": "Philip Rice",
    "location": "Mueang Phuket",
    "image": "https://robohash.org/molestiaevelquisquam.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 84,
    "name": "Kathryn Cunningham",
    "location": "Uppsala",
    "image": "https://robohash.org/rerumnonvoluptatem.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 85,
    "name": "Linda Snyder",
    "location": "Baliang",
    "image": "https://robohash.org/vitaesimiliquenon.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 86,
    "name": "Johnny Cooper",
    "location": "Kylmäkoski",
    "image": "https://robohash.org/eadoloribusquod.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 87,
    "name": "Douglas Reid",
    "location": "Shuhong",
    "image": "https://robohash.org/sedveritatisaspernatur.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 88,
    "name": "Catherine Mcdonald",
    "location": "Hyrynsalmi",
    "image": "https://robohash.org/errornumquamdolorem.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 89,
    "name": "Phillip Stephens",
    "location": "Hägersten",
    "image": "https://robohash.org/sintdictaet.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 90,
    "name": "Kathleen Gray",
    "location": "Sanjiazi",
    "image": "https://robohash.org/estofficiaaccusamus.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 91,
    "name": "Betty Watkins",
    "location": "Communal",
    "image": "https://robohash.org/iurenumquamtempore.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 92,
    "name": "Phyllis Freeman",
    "location": "Phanna Nikhom",
    "image": "https://robohash.org/corporisquibusdampossimus.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 93,
    "name": "Frank Hayes",
    "location": "Amarillo",
    "image": "https://robohash.org/estmaioresquis.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 94,
    "name": "Ruth Coleman",
    "location": "Kungsbacka",
    "image": "https://robohash.org/voluptatemdoloresest.jpg?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 95,
    "name": "Russell Thompson",
    "location": "Benoy",
    "image": "https://robohash.org/errornumquamalias.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 96,
    "name": "Amanda Webb",
    "location": "Quintas",
    "image": "https://robohash.org/dolormolestiasvoluptatem.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 97,
    "name": "Alan Campbell",
    "location": "Ganping",
    "image": "https://robohash.org/nihilenimautem.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 98,
    "name": "Carlos Fuller",
    "location": "Guayabetal",
    "image": "https://robohash.org/temporibussequimagnam.bmp?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 99,
    "name": "Henry Warren",
    "location": "Viga",
    "image": "https://robohash.org/sunttemporaeum.png?size=50x50&set=set1",
    "friends": "[]"
  }, {
    "id": 100,
    "name": "Karen Vasquez",
    "location": "Kamifukuoka",
    "image": "https://robohash.org/saepeevenietqui.bmp?size=50x50&set=set1",
    "friends": "[]"
  }
];

var possibleFriends = document.getElementById('possible-friends');
var currentFriends = document.getElementById('current-friends');
var user = person(currentUser);
var search = document.getElementById('search');

var profilePicture = document.getElementById('user-picture');
var profileName = document.getElementById('user-name');

//var friendCount = document.getElementById('friend-count');
//var count = user.friends.length;
//console.log(parseInt(count));
//friendCount.appendChild(count);
//friendCount.appendChild(parseInt(count));

search.addEventListener('click',function(){
  swap('search-view', 'result');
  var title = document.getElementById('result-title');
  var titleSlogan = document.createElement('h5');
  titleSlogan.textContent = "Here are the people that match your search";
  var divider = document.createElement('hr');
  title.appendChild(titleSlogan);
  title.appendChild(divider);
  var term = document.getElementById('term');
  var word = term.value;
  var matches = relevant(word, people)
  var results = document.getElementById('results');
  //clear(results);

  for (var i = 0; i < matches.length; i++) {

    results.appendChild(searchResult(matches[i]));
  }
  var searchAdd = document.getElementById('search-button');

  results.addEventListener('click', function(theEvent) {
    swap('search-view','search-result');
    var id = theEvent.target.getAttribute('data-id');
    if (id) {
      user.friends.unshift(parseInt(id));//using unshift vs push to push to front of array
      clear(currentFriends);
      currentFriend(id);
      clear(possibleFriends);
      drawPeople();
      //clears(title);
    //  clears(results);
    };




  });
});

var profileButton = document.getElementById('user-profile-btn');
profileButton.addEventListener('click', function(){
  swap('view','profile-header');
});
var findButton = document.getElementById('find-people-btn');
findButton.addEventListener('click', function(){
  swap('view','add-friends');
});

var timelineButton = document.getElementById('timeline-btn');
timelineButton.addEventListener('click',function(){
  swap('pro-content', 'pro-timeline');
});

var friendsButton = document.getElementById('friends-btn');
friendsButton.addEventListener('click',function(){
  swap('pro-content', 'pro-friends');
});

var photosButton = document.getElementById('photos-btn');
photosButton.addEventListener('click', function(){
  swap('pro-content','pro-photos');
});

var aboutButton = document.getElementById('about-btn');
aboutButton.addEventListener('click', function(){
  swap('pro-content','pro-about');
});


function relevant(word, people) {
  var matches = [];

  for (var i = 0; i < people.length; i++) {
    var relevance = 0;
    var person = people[i];
    var name = person.name;
    if(name.toUpperCase().indexOf(word.toUpperCase()) !== -1){
      matches.unshift(person);
    }
  }


  return matches;
}

function searchResult(person){
  var friend = document.createElement('div');
  friend.classList.add('friend');
  var row = document.createElement('div');
  row.classList.add('row');
  var image = document.createElement('img');
  image.classList.add('col-xs-2');
  //image.classList.add('img-responsive');
  image.setAttribute('src', person.image);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add('btn-group');
  buttonGroup.classList.add('col-xs-2');

  var button = document.createElement('button');
  button.textContent = "Add Friend";
  button.setAttribute('data-id', person.id);
  button.classList.add('btn');
  button.classList.add('btn-primary');
  button.classList.add('col-md-4');
  button.id="search-button";

  var details = document.createElement('div');
  details.classList.add('col-xs-6');

  var friendName = document.createElement('h5');
  friendName.textContent = person.name;

  var address = document.createElement('p');
  address.textContent = person.location;

  var divider = document.createElement('hr');

  friend.appendChild(row);
  friend.appendChild(divider);

  details.appendChild(friendName);
  details.appendChild(address);

  row.appendChild(image);
  row.appendChild(details);
  row.appendChild(button);

  return friend;
  /*var result = document.getElementById('results')
  var people= document.createElement('div');
  var name = document.createElement('h2');
  var description = document.createElement('p');
  name.textContent = data.name;
  description.textContent = data.name;
  people.appendChild(name);
  people.appendChild(description);
  result.appendChild(people);

  return people;*/

}


function clears(target){
  while(target.firstChild){
    target.removeChild(target.firstChild);
  }
}

function swap(location, next){
  var current = document.getElementById(location);
  var active = current.getElementsByClassName('active');
  active[0].classList.add('hide');
  active[0].classList.remove('active');
  var pending = document.getElementById(next);
  pending.classList.add('active');
  pending.classList.remove('hide');

};



function drawPeople() {
  for (var i = 1; i < people.length; i++) {
    var friend = makePeople(people[i]);

    if (user.friends.indexOf(people[i].id) === -1) {

      possibleFriends.appendChild(friend);
    };
  };
}

drawPeople();

function currentFriend() {
  for (var k = 0; k < user.friends.length; k++) {
    var friend = person(user.friends[k]);
    var theFriend = makeFriend(friend);
    currentFriends.appendChild(theFriend);
  };
}
currentFriend();

var proTimeline = document.getElementById('pro-timeline');


function person(id) {
  for (var i = 0; i < people.length; i++) {
    if (people[i].id == id) {
      return people[i]
    }
  }
}


possibleFriends.addEventListener('click', function (theEvent) {
  var id = theEvent.target.getAttribute('data-id');
  if (id) {
    user.friends.unshift(parseInt(id));
    clear(currentFriends);
    currentFriend(id);
    clear(possibleFriends);
    drawPeople();

  }

});

function clear(area) {
  while(area.firstChild) {
    area.removeChild(area.firstChild);
  }
}

function makeFriend(person) {
  var friend = document.createElement('div');
  friend.classList.add('friend');
  var row = document.createElement('div');
  row.classList.add('row');
  var image = document.createElement('img');
  image.classList.add('col-xs-2');
  image.classList.add('img-responsive');
  image.setAttribute('src', person.image);

  /*var buttonGroup = document.createElement('div');
  buttonGroup.classList.add('btn-group');
  buttonGroup.classList.add('col-xs-2');

  var button = document.createElement('button');
  button.textContent = "Add Friend";
  button.setAttribute('data-id', person.id);
  button.classList.add('btn');
  //button.classList.add('btn-primary');
  button.classList.add('col-xs-10');
  button.classList.add('col-sm-3')
  button.classList.add('col-md-3');
  button.id= "button-attribs";
  */
  var details = document.createElement('div');
  details.classList.add('col-md-4');

  var friendName = document.createElement('h5');
  friendName.textContent = person.name;

  var address = document.createElement('p');
  address.textContent = person.location;

  var divider = document.createElement('hr');

  friend.appendChild(row);
  friend.appendChild(divider);

  details.appendChild(friendName);
  details.appendChild(address);

  row.appendChild(image);
  row.appendChild(details);
  //row.appendChild(button);
  return friend;
};

function makePeople(person){
  var friend = document.createElement('div');
  friend.classList.add('friend');
  var row = document.createElement('div');
  row.classList.add('row');
  var image = document.createElement('img');
  image.classList.add('col-xs-2');
  image.classList.add('img-responsive');
  image.setAttribute('src', person.image);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add('btn-group');
  buttonGroup.classList.add('col-xs-2');

  var button = document.createElement('button');
  button.textContent = "Add Friend";
  button.setAttribute('data-id', person.id);
  button.classList.add('btn');
  //button.classList.add('btn-primary');
  button.classList.add('col-xs-10');
  button.classList.add('col-sm-3')
  button.classList.add('col-md-3');
  button.id= "button-attribs";

  var details = document.createElement('div');
  details.classList.add('col-md-4');

  var friendName = document.createElement('h5');
  friendName.textContent = person.name;

  var address = document.createElement('p');
  address.textContent = person.location;

  var divider = document.createElement('hr');

  friend.appendChild(row);
  friend.appendChild(divider);

  details.appendChild(friendName);
  details.appendChild(address);

  row.appendChild(image);
  row.appendChild(details);
  row.appendChild(button);
  return friend;
};
