	// <!-- 차트1 -->


  $(document).ready(function() {
	var exampleBarChartData = {
		"datasets": {
			"values": [5, 10, 30, 50, 20],
			"labels": [
				"Apples", 
				"Oranges", 
				"Berries", 
				"Peaches", 
				"Bananas"
			],
			"color": "blue"
		},
		"title": "Example Bar Chart",
		"noY": true,
		"height": "300px",
		"width": "500px",
		"background": "#FFFFFF",
		"shadowDepth": "1"
	};

	MaterialCharts.bar("#bar-chart-example", exampleBarChartData)

	var pieChartData1 = {
		"dataset": {
			"values": [5, 30, 5, 20, 40],
			"labels": [
				"Apples", 
				"Oranges", 
				"Berries", 
				"Peaches", 
				"Bananas"
			],
		},
		"title": "Example Pie Chart",
		"height": "300px",
		"width": "500px",
		"background": "#FFFFFF",
		"shadowDepth": "1"
	};

	MaterialCharts.pie("#main-chart1", pieChartData1)
});


// var pieChartData1 = {
// 	"datasets": {
// 			"values": [5, 30, 5, 20, 40],
// 			"labels": [
// 					"Apples", 
// 					"Oranges", 
// 					"Berries", 
// 					"Peaches", 
// 					"Bananas"
// 			], "color": "blue", "color": "orange", "color": "purple", "color": "yellow", "color": "grape", "color": "orange",
// 	},
// 	"title": "Example Pie Chart",
// 	"height": "300px",
// 	"width": "500px",
// 	//"background": "#FFFFFF",
// 	"shadowDepth": "1"
// };

// MaterialCharts.pie("#main-chart1", pieChartData1);