function date() {
  var today = new Date();
  document.getElementById('date').innerHTML = today.toDateString();
}

function pics(hour) {
  var body = document.body;
  var morningPic = "./5.png";
  var afternoonPic = "./2.png";
  var eveningPic = "./3.png";
  var nightPic = "./4png";

  if ((hour >= 4 && hour < 11) || (hour >= 20 && hour <= 23)) {
    body.style.backgroundImage = "url('" + morningPic + "')";
  } else if (hour >= 11 && hour < 16) {
    body.style.backgroundImage = "url('" + afternoonPic + "')";
  } else if (hour >= 16 && hour < 20) {
    body.style.backgroundImage = "url('" + eveningPic + "')";
  } else {
    body.style.backgroundImage = "url('" + nightPic + "')";
  }
}

function clock() {
  var today = new Date();
  var hour = twelveHour(today.getHours());
  var minutes = zeros(today.getMinutes());
  var seconds = zeros(today.getSeconds());
  document.getElementById('hour').innerHTML = hour;
  document.getElementById('min').innerHTML = minutes;
  document.getElementById('sec').innerHTML = seconds;

  pics(today.getHours());
}

function twelveHour(hour) {
  var period = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour === 0 ? 12 : hour;
  return hour + ' ' + period;
}

function zeros(num) {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}

function dateTime() {
  date();
  clock();
  setTimeout(dateTime, 500);
}

dateTime();
