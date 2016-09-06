var currentUser = 1;
var people = [
  {
    id: 1,
    name: "Dave Skoglund",
    location: "Mission Viejo",
    image: "friend.jpg",
    friends: [2,3,4,5,6]
  },
  {
    id: 2,
    name: "Skyler Skoglund",
    location: "Mission Viejo",
    image: "friend.jpg",
    friends:[]
  },
  {
    id: 3,
    name: "Angie Dicenzo",
    location: "Mission Viejo",
    image: "friend.jpg",
    friends: []
  },
  {
    id: 4,
    name: "Riley Skoglund",
    location: "Mission Viejo",
    image: "friend.jpg",
    friends:[]
  },
  {
    id:5,
    name: "Jerry Skoglund",
    location: "Lake Forest",
    image: "friend.jpg",
    friends:[]
  },
  {
    id:6,
    name: "Sharon Skoglund",
    location: "Lake Forest",
    image: "friend.jpg",
    friends:[]
  },
  {
    id:7,
    name: "Kimberly Skoglund",
    location: "Lake Forest",
    image: "friend.jpg",
    friends: []
  },
  {
    id:8,
    name: "Kevin England",
    location: "Lake Forest",
    image: "friend.jpg",
    friends:[]
  },
  {
    id:9,
    name: "Girr Skoglund",
    location: "Foothill Ranch",
    image: "friend.jpg",
    friends:[]
  },
  {
    id:10,
    name:"Kobe Bryant",
    location: "Los Angeles",
    image: "friend.jpg",
    friends: []
  }
];

var possibleFriends = document.getElementById('possible-friends');
var currentFriends = document.getElementById('current-friends');
var user = person(currentUser);

var search= document.getElementById('search');
search.addEventListener('click',function(){
  var term = document.getElementById('term');
  var word = term.value;
  var matches = relevant(word, people)
  var results = document.getElementById('results');
  clears(results);

  for (var i = 0; i < matches.length; i++) {
    results.appendChild(searchResult(matches[i]));
  }

});

function relevant(word, people) {
  var matches = [];

  for (var i = 0; i < people.length; i++) {
    var relevance = 0;
    var person = people[i];
    var name = person.name;
    if(name.toUpperCase().indexOf(word.toUpperCase()) !== -1){
      matches.push(person);
    }
  }


  return matches;
}

function searchResult(data){
  var result = document.getElementById('results')
  var people= document.createElement('div');
  var name = document.createElement('h2');
  var description = document.createElement('p');
  name.textContent = data.name;
  description.textContent = data.name;
  people.appendChild(name);
  people.appendChild(description);
  result.appendChild(people);

  return people;

}

function clears(target){
  while(target.firstChild){
    target.removeChild(target.firstChild);
  }
}



function drawPeople() {
  for (var i = 0; i < people.length; i++) {
    var friend = makeFriend(people[i]);

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

function person(id) {
  for (var i = 0; i < people.length; i++) {
    if (people[i].id == id) {
      return people[i]
    }
  }
}

//var possibleFriends = document.getElementById('possible-friends');
possibleFriends.addEventListener('click', function (theEvent) {
  var id = theEvent.target.getAttribute('data-id');
  if (id) {
    user.friends.push(parseInt(id));
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
  image.classList.add('col-md-2');
  image.classList.add('img-responsive');
  image.setAttribute('src', person.image);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add('btn-group');
  buttonGroup.classList.add('col-md-2');

  var button = document.createElement('button');
  button.textContent = "Add Friend";
  button.setAttribute('data-id', person.id);
  button.classList.add('btn');
  button.classList.add('btn-primary');
  button.classList.add('col-md-2');

  var details = document.createElement('div');
  details.classList.add('col-md-7');

  var friendName = document.createElement('p');
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
