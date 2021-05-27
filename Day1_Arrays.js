//Day 1 : Arrays
var arr = [
  [72, 79, 75, 79, 81, 81],
  [81, 79, 75, 75, 73, 73],
];

const day1 = arr[0];
const day2 = arr[1];

const temperAvg =
  (day1.reduce((a, b) => a + b) + day2.reduce((a, b) => a + b)) /
  (day1.length + day2.length);

function CalMatrix() {
  Avg = '';
  for (var i = 0; i < day1.length; i++) {
    Avg = (day1[i] + day2[i]) / arr.length;
    console.log(Avg);
  }
}

CalMatrix();

//[New] Day 1 : Arrays

// day 1
averageTemp = [];
averageTemp[0] = [];
averageTemp[0][0] = [];
averageTemp[0][0][0] = '10:00';
averageTemp[0][0][1] = '11:00';
averageTemp[0][0][2] = '12:00';
averageTemp[0][0][3] = '13:00';
averageTemp[0][0][4] = '14:00';
averageTemp[0][0][5] = '15:00';
averageTemp[0][1] = [];
averageTemp[0][1][0] = 72;
averageTemp[0][1][1] = 79;
averageTemp[0][1][2] = 75;
averageTemp[0][1][3] = 79;
averageTemp[0][1][4] = 81;
averageTemp[0][1][5] = 81;

// day 2
averageTemp[1] = [];
averageTemp[1][0] = [];
averageTemp[1][0][0] = '10:00';
averageTemp[1][0][1] = '11:00';
averageTemp[1][0][2] = '12:00';
averageTemp[1][0][3] = '13:00';
averageTemp[1][0][4] = '14:00';
averageTemp[1][0][5] = '15:00';
averageTemp[1][1] = [];
averageTemp[1][1][0] = 81;
averageTemp[1][1][1] = 79;
averageTemp[1][1][2] = 75;
averageTemp[1][1][3] = 75;
averageTemp[1][1][4] = 73;
averageTemp[1][1][5] = 73;

function CalMatrix2() {
  for (var i = 0; i < averageTemp[0][0].length; i++) {
    a = averageTemp[0][1][i];
    b = averageTemp[1][1][i];
    console.log(
      `The average temperature of ${averageTemp[0][0][i]} = ${
        (a + b) / averageTemp[0].length
      }`
    );
  }
}

CalMatrix2();
