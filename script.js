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
]

var possibleFriends = document.getElementById('possible-friends');

for (var i = 0; i < people.length; i++) {
    var friend = document.createElement('div');
    friend.classList.add('friend');
    var row = document.createElement('div');
    row.classList.add('row');
    var image = document.createElement('img');
    image.classList.add('col-md-2');
    image.classList.add('img-responsive');
    image.setAttribute('src', people[i].image);

    var details = document.createElement('div');
    details.classList.add('col-md-10');

    var friendName = document.createElement('p');
    friendName.textContent = people[i].name;

    var address = document.createElement('p');
    address.textContent = people[i].location;

    var divider = document.createElement('hr');

    friend.appendChild(row);
    friend.appendChild(divider);

    details.appendChild(friendName);
    details.appendChild(address);

    row.appendChild(image);
    row.appendChild(details);

    possibleFriends.appendChild(friend);
}
