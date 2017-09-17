// var dict = {
//   "youtube.com": {
//     "Angry": 5,
//     "Disgusted": 3,
//     "Fear": 2,
//     "Sad": 3,
//     "Surprised": 3,
//     "Happy": 4
//   },
//   "facebook.com": {
//     "Angry": 3,
//     "Disgusted": 2,
//     "Fear": 2,
//     "Sad": 5,
//     "Surprised": 2,
//     "Happy": 3
//   },
//   "9gag.com": {
//     "Angry": 3,
//     "Disgusted": 4,
//     "Fear": 4,
//     "Sad": 7,
//     "Surprised": 2,
//     "Happy": 3
//   },
//   "haha.com": {
//     "Angry": 3,
//     "Disgusted": 4,
//     "Fear": 5,
//     "Sad": 2,
//     "Surprised": 2,
//     "Happy": 3
//   }
// };

var labels = [];
var angrylevel = [];
var disgustedlevel = [];
var fearlevel = [];
var sadlevel = [];
var surprisedlevel = [];
var happylevel = [];

for (var key in dict) {
  console.log(key);
  labels.push(key);
  angrylevel.push(dict[key].Angry);
  disgustedlevel.push(dict[key].Disgusted);
  fearlevel.push(dict[key].Fear);
  sadlevel.push(dict[key].Sad);
  surprisedlevel.push(dict[key].Surprised);
  happylevel.push(dict[key].Happy);
}

console.log(angrylevel);
console.log(disgustedlevel);
console.log(fearlevel);
console.log(sadlevel);
console.log(surprisedlevel);
console.log(happylevel);





var ctx = document.getElementById("myChart");
new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: "Angry",
          backgroundColor: "red",
          data: angrylevel
        }, {
          label: "Disgusted",
          backgroundColor: "green",
          data: disgustedlevel
        },
        {
          label: "Fear",
          backgroundColor:"purple",
          data: fearlevel
        },
        {
          label: "Sad",
          backgroundColor:"blue",
          data: sadlevel
        },
        {
          label: "Surprised",
          backgroundColor:"orange",
          data: surprisedlevel
        },
        {
          label: "Happy",
          backgroundColor:"yellow",
          data: happylevel
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Websites'
      }
    }
});
