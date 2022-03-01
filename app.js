
$(document).ready(function () {
    var friends = ["Laura", "James", "Michael", "Erica", "Thomas"];
    var weapons = ["Knife", "Gun", " Sword", " Bat", "Poison", "Car", "Dogs", "Fish", "Banana", "Rope", "Spear", "Crossbow", "Sling", "Spear", "Pack of wild piranhas", "Hotdog Bun", "Fire", "Cannon", "Basketball", "Oil"];
    var locations = ["Home", "Break room", "Office", "Sidewalk", "Lobby", "Cafeteria", "Swimming Pool", "Roof", "Balcony", "Suite"];
 
 for (var i=1; i <101;i++){
    var h3 = $("<h3></h3>").text(`Accusation${i}`);
    $("body").append(h3);
    $(h3).attr('id', 'h3');
    $(h3).click(mainAlert(i));
    };

    function mainAlert(i){
    var location1 = locations[i % 10]
    var friend = friends[i % 5];
    var weapon = weapons[i % 20];
    function notify(){
    alert(`Accusation ${i} : I accuse ${friend}, with the ${weapon} in the ${location1} !`); 
    }
    return notify;
    }
});

