var dict = {
	"youtube.com": {
		"Angry": 5,
		"Disgusted": 3,
		"Fear": 2,
		"Sad": 3,
		"Surprised": 3,
		"Happy": 4
	},
	"facebook.com": {
		"Angry": 3,
		"Disgusted": 2,
		"Fear": 2,
		"Sad": 7,
		"Surprised": 2,
		"Happy": 3
	}
};

var measurement = {
	"url": "haha.com",
	"data": [
		{"emotion": "Angry", value: 1},
		{"emotion": "Fear", value: 1},
		{"emotion": "Sad", value: 1},
		{"emotion": "Surprised", value: 1},
		{"emotion": "Happy", value: 1}
	]
}
var measurement2 = {
	"url": "youtube.com",
	"data": [
		{"emotion": "Angry", value: 1},
		{"emotion": "Fear", value: 1},
		{"emotion": "Sad", value: 1},
		{"emotion": "Surprised", value: 1},
		{"emotion": "Happy", value: 9}
	]
}
// Everytime you encounter a new site, you add it to the dictionary with 0 for all emotions

// Everytime you record new emotions call this function to update the dictionary
function updateEmotions(measurement) {
	if(measurement.url in dict){
		// update emotions for that url
		var emotionLevels = {};
		measurement.data.forEach(function(entry) {
    		if(entry.emotion == "Angry"){
    			if(entry.value > dict[measurement.url].Angry){
    				dict[measurement.url].Angry = entry.value;	
    			}
    		}
    		if(entry.emotion == "Disgusted"){
    			if(entry.value > dict[measurement.url].Disgusted){
    				dict[measurement.url].Disgusted = entry.value;	
    			}
    		}
    		if(entry.emotion == "Fear"){
    			if(entry.value > dict[measurement.url].Fear){
    				dict[measurement.url].Fear = entry.value;	
    			}
    		}
    		if(entry.emotion == "Sad"){
    			if(entry.value > dict[measurement.url].Sad){
    				dict[measurement.url].Sad = entry.value;	
    			}
    		}
    		if(entry.emotion == "Surprised"){
    			if(entry.value > dict[measurement.url].Surprised){
    				dict[measurement.url].Surprised = entry.value;	
    			}
    		}
    		if(entry.emotion == "Happy"){
    			if(entry.value > dict[measurement.url].Happy){
    				dict[measurement.url].Happy = entry.value;	
    			}
    		}
		});
		// console.log(dict);

	} else {
		// create a new entry in that dict and store the emotion values
		var emotionLevels = {};
		measurement.data.forEach(function(entry) {
    		if(entry.emotion == "Angry"){
    			emotionLevels.Angry = entry.value;
    		}
    		if(entry.emotion == "Disgusted"){
    			emotionLevels.Disgusted = entry.value;
    		}
    		if(entry.emotion == "Fear"){
    			emotionLevels.Fear = entry.value;
    		}
    		if(entry.emotion == "Sad"){
    			emotionLevels.Sad = entry.value;
    		}
    		if(entry.emotion == "Surprised"){
    			emotionLevels.Surprised = entry.value;
    		}
    		if(entry.emotion == "Happy"){
    			emotionLevels.Happy = entry.value;
    		}
		});
		dict[measurement.url] = emotionLevels;
		console.log(dict);
	}
}

updateEmotions(measurement);
updateEmotions(measurement2);

