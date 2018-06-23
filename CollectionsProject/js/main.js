var Vehicle = Backbone.Model.extend({

	idAttribute: "registrationNumber",

	urlRoot: "/api/vehicles",

	validate: function(attrs){
		if (!attrs.registrationNumber)
			return "Vehicle is not valid.";
	},

	start: function(){
		console.log("Vehicle started.");
	}
});

var Car = Vehicle.extend({
	start: function(){
		console.log("Car with registration number " + this.get("registrationNumber") + " started.");
	}
});

var car1 = new Car({
	registrationNumber: "XLI887",
	color: "Blue"
});

var car2 = new Car({
	registrationNumber: "ZNP887", 
	color: "Blue"
});

var car3 = new Car({
	registrationNumber: "XUV456", 
	color: "Gray"
})


var Vehicles = Backbone.Collection.extend({
	model: Vehicle
});

var vehicles = new Vehicles([
	new Car({registrationNumber: "XLI887", color: "Blue"}), 
	new Car({registrationNumber: "ZNP887", color: "Blue"}),
	new Car({registrationNumber: "XUV456", color: "Gray"})
])

var blueCars = vehicles.filter(function(vehicle){
	return vehicle.get("color") == "Blue"; 
});

console.log("These are the blue cars", blueCars);

// Find the car with the registration number XLI887 and log it in the console.

registrationCar = vehicles.findWhere({ registrationNumber: "XLI887"}); 

console.log("This is the car with reg XLI887", registrationCar);

// Remove this car from the collection.
// Convert the collection to a JSON object and log it in the console.
// Iterate the collection and log each car in the console. 

vehicles.remove(registrationCar);

console.log("This is what is left of the array", vehicles);

var converted = vehicles.toJSON();

console.log("This is the JSON array", converted);

vehicles.each(function(car){
	console.log(car);
})

// var Song = Backbone.Model.extend();

// var Songs = Backbone.Collection.extend({
//   model: Song
// });

// var songs = new Songs([
//   new Song({ title: "Song 1"}), 
//   new Song({ title: "Song 2"}), 
//   new Song({ title: "Song 3"})
// ]); 

// songs.add(new Song({ title: "Song 4", genre: "Jazz", downloads: 110}), { at: 0 });

// songs.push(new Song({ title: "Song 2", genre: "Jazz", downloads: 90 })); 

// var jazzSongs = songs.where

// var firstJazzSong = songs.findWhere({ genre: "Jazz"});

// console.log("Jazz Songs", jazzSongs); 

// console.log("First Jazz Song", firstJazzSong);

// var filteredSongs = songs.where({ genre: "Jazz", title: "Song 2"});
// console.log("FilteredSongs", filteredSongs);

// var topDownloads = songs.filter(function(song){
// 	return song.get("downloads") > 100; 
// });

// console.log("Top Downloads", topDownloads);

// // var firstSong = songs.at(0);

// // var songWithIdC1 = songs.get("c1");

// // songs.remove(firstSong);

// songs.each(function(song){
// 	console.log(song);
// })