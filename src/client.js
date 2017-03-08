var ws = new WebSocket("ws://" + window.location.host);

ws.onopen = function(event) {
	console.log("Connected !");
};

selectedSensor = null;

var display = document.querySelector('#display');
var manager = new SensorManager();

ws.onmessage = function(event) {
	var sensor = SensorFactory.create(JSON.parse(event.data));
	manager.manage(sensor);
	render();
};


