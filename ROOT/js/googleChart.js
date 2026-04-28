var browser = {
	    chk : navigator.userAgent.toLowerCase()
	}
	  
browser = {
    ie : browser.chk.indexOf('msie') != -1,
    ie6 : browser.chk.indexOf('msie 6') != -1,
    ie7 : browser.chk.indexOf('msie 7') != -1,
    ie8 : browser.chk.indexOf('msie 8') != -1,
    ie9 : browser.chk.indexOf('msie 9') != -1,
    ie10 : browser.chk.indexOf('msie 10') != -1,
    opera : !!window.opera,
    safari : browser.chk.indexOf('safari') != -1,
    safari3 : browser.chk.indexOf('applewebkir/5') != -1,
    mac : browser.chk.indexOf('mac') != -1,
    chrome : browser.chk.indexOf('chrome') != -1,
    firefox : browser.chk.indexOf('firefox') != -1
}



/************************************************************
소수점 1자리 반올림
Data : 2015.12.20
Developer : Min Wook Kim
************************************************************/
var RoundCalChart = function(val,fixNum){
	fixNum = fixNum == undefined ? 1 : fixNum;
	val += "";
	if(jQuery.isNumeric(val.replace(/,/gi,""))){
		value = val.replace(/,/gi,"") * 1;		
		return (Math.round(value * Math.pow(10, fixNum)) / Math.pow(10, fixNum));	
	}else{
		return val;
	}
}
/*
function tableDrawChart(type,obj,objData){
	
	var theadHtml = "";
	var tbodyHtml = "";
	
	if(type == "pie" || type == "bar"){
		var totalSum = 0;
		var gubunNum = 0;
		var countNum = 1;
		var ratioNum = -1;
		
		//total값 구하기
		if(countNum >= 0){
			for(var i=1;i<objData.length;i++){
				totalSum += objData[i][countNum];
			}
			objData[0].push("RATIO");
			for(var i=1;i<objData.length;i++){
				var ratio = totalSum == 0 ? 0 : (objData[i][countNum] * 100) / totalSum
				objData[i].push(RoundCalChart(ratio) + "%");
			}
			ratioNum = objData[0].indexOf("RATIO");
		}
		
		//thead데이터
		theadHtml = ""
				+ "			<tr>"	
				+ "				<th>구분</th>"
				+ "				<th>수치</th>"
				+ "				<th>비율</th>"
				+ "			</tr>";
		//tbody데이터		
		for(var i=1;i<objData.length;i++){	
			tbodyHtml += "			<tr>"
						+ "				<td>" + objData[i][gubunNum] + "</td>"
						+ "				<td class=\"right\">" + objData[i][countNum] + "</td>"
						+ "				<td class=\"right\">" + objData[i][ratioNum] + "</td>"			
						+ "			</tr>";
		}
	}else if(type == "combo"){
		gubunNum = 0;
		countNum = 1;
		
		
		//thead데이터
		theadHtml = ""
				+ "			<tr>"	
				+ "				<th colspan=\"2\">구분</th>"
				+ "				<th>수치</th>"
				+ "				<th>차이</th>"
				+ "			</tr>";
		//tbody데이터
		for(var i=1;i<objData.length;i++){	
				tbodyHtml += "			<tr>"
							+ "				<td rowspan=\"" + (objData[0].length-1) + "\">" + objData[i][gubunNum] + "</td>";
				for(var j=1; j<objData[0].length; j++){
					tbodyHtml += "				<td>" + objData[0][j] + "</td>";
					tbodyHtml += "				<td class=\"right\">" + objData[i][j] + "</td>";
					tbodyHtml += "				<td style=\"line-height:20px\">";
					for(var q=1; q<objData[0].length; q++){
						if(j != q){
							var gab = RoundCalChart(objData[i][j] - objData[i][q],2);
							gab = gab > 0 ? "+" + gab : gab; 
							tbodyHtml += "					<div>" + objData[0][q] + " : " + gab + " </div>";	
						}
							
					}	
					
					tbodyHtml += "					<div>3학년 : +0.3</div>"
					
					tbodyHtml += "				</td>";
					tbodyHtml += "			</tr>";
				}	
		}
	}else if(type == "column"){		
		var gubunData = objData[0];
		var disData = objData[1];
		var totalSum = 0;
		
		
		//total값 구하기
		for(var i=1;i<gubunData.length;i++){
			if(i%3 == 1){
				totalSum += disData[i];	
			}
		}
		
		//thead데이터
		theadHtml = ""
				+ "			<tr>"	
				+ "				<th>구분</th>"
				+ "				<th>수치</th>"
				+ "				<th>비율</th>"
				+ "			</tr>";
		//tbody데이터
		var q = 0;
		for(var i=(gubunData.length-1);i>=1;i--){
			if(i%3 == 1){
				q++;
				tbodyHtml += "			<tr>"
					+ "				<td>" + gubunData[i] + "</td>"
					+ "				<td class=\"right\">" + disData[i] + "</td>"
					+ "				<td class=\"right\">" + RoundCalChart(totalSum == 0 ? 0 : (disData[i] * 100) / totalSum) + "%" + "</td>"				
					+ "			</tr>";
			}
		}
	}
	
	
	
	
	var html = ""
			 + " <div style=\"padding-left:15px;padding-bottom:40px;\">" 
			 + "	<table id=\"" + obj + "_childTable\" class=\"chartTable\" width=\"75%\" cellpadding=\"1\" cellspacing=\"1\" border=\"1\">"
			 + "		 <colgroup>"
			 + "			<col width=\"*\">"
			 + "			<col width=\"100\">"
			 + "			<col width=\"100\">"
			 + "			<col width=\"100\">"
			 + "		</colgroup>"
			 + "		<thead>"
			 + theadHtml
			 + " 		</thead>" 
			 + "		<tbody>"
			 + tbodyHtml
			 + "		</tbody>"
			 + "	</table>"
			 + " </div>"
			+ "";
	$(html).insertAfter($("[id='" + obj + "']"));
}


*//**
 * Pie Chart
 * @param obj
 * @param title
 * @param data
 * @param tableDis
 *//*
var pieDrawChart = function(obj,title, data, tableDis) {
	
	var tableData = JSON.parse(JSON.stringify(data));
	tableDrawChart('pie',obj,tableData);
	
	data = google.visualization.arrayToDataTable(data);							
	
	var options = {
	 title: title,
	
	 titleTextStyle : {
		  fontSize : 17
	  },
	  
     legend: {
			position: (browser.ie6 || browser.ie7 || browser.ie8) ? '' : 'none'
      },
      
      pieHole: 0.4,
      pieSliceText : 'label',
	  is3D: true,
      chartArea:{left:20,top:40,width:'90%',height:'85%'}
    };

	
	var ratio = (location.search.indexOf("isPrint=Y") > -1 ? 0.87 : 1);	
	var childWidth = parseInt($("[id='" + obj + "']").width() * ratio);
	var childHeight = parseInt($("[id='" + obj + "']").height() * ratio);
	var html = "<div id=\"" + obj + "_child\" style=\"width: " + childWidth + "px; height: " + childHeight + "px;\"></div>";
	$("[id='" + obj + "']").css("width",childWidth + "px");
	$("[id='" + obj + "']").css("height",childHeight + "px");
	$("[id='" + obj + "']").html(html).addClass("chart");
	var chart = new google.visualization.PieChart(document.getElementById(obj + "_child"));
	if(!browser.ie6 && !browser.ie7 && !browser.ie8){
		google.visualization.events.addListener(chart, 'ready', function () {
			document.getElementById(obj+ "_child").innerHTML = '<img src="' + chart.getImageURI() + '">';
	      });
	}
	chart.draw(data, options);	
	if(typeof(GoogleChart) != "undefined" && GoogleChart > 0){
		GoogleChart--;
	} 
}

*//**
 * BarChart
 * @param obj
 * @param title
 * @param data
 *//*
var barDrawChart = function(obj,title, data) {
	
	var tableData = JSON.parse(JSON.stringify(data));
	tableDrawChart('bar',obj,tableData);
	
	var barcolors = ['#3366cc','#dc3912','#ff9900','#109618','#990099','#0099c6','#dd4477'];
	data[0].push({ role: 'style' });
	for(var i = 1;i<data.length; i++){
		data[i][0] = "";
		data[i].push("color : " + barcolors[(i-1) % (barcolors.length)]);		
	}
	
	var data = google.visualization.arrayToDataTable(data);
	
	var options = {												
          title: title,
          titleTextStyle : {
			  fontSize : 17
		  },										          
	      chartArea:{top:40,left:20,right:20,width:'100%',height: ($("#" + obj).height()-100) },
		  hAxis : {
			  minValue : 0,
			  maxValue : 5,
			  viewWindowMode : {
				  max : 5
			  },
			  viewWindow : {
				  max : 5
			  }
		  },		  
		  annotations : {
			  textStyle: {
				 fontName : 'Gothic',
			      fontSize: (location.search.indexOf("isPrint=Y") > -1 ? 13 : 10),
			      //bold: true,													      
			      color: '#871b47',													      
			      //auraColor: '#d799ae',													      
			    },
		  },
        };
	var ratio = (location.search.indexOf("isPrint=Y") > -1 ? 0.87 : 1);	
	var childWidth = parseInt($("[id='" + obj + "']").width() * ratio);
	var childHeight = parseInt($("[id='" + obj + "']").height() * ratio);
	var html = "<div id=\"" + obj + "_child\" style=\"width: " + childWidth + "px; height: " + childHeight + "px;\"></div>";
	$("[id='" + obj + "']").css("width",childWidth + "px");
	$("[id='" + obj + "']").css("height",childHeight + "px");
	$("[id='" + obj + "']").html(html);
	
	var chart = new google.visualization.BarChart(document.getElementById(obj + "_child"));
	if(!browser.ie6 && !browser.ie7 && !browser.ie8){
		google.visualization.events.addListener(chart, 'ready', function () {
			document.getElementById(obj + "_child").innerHTML = '<img src="' + chart.getImageURI() + '">';
		});
	}
	chart.draw(data, options);
	if(typeof(GoogleChart) != "undefined" && GoogleChart > 0){
		GoogleChart--;
	} 
}



*//**
 * BarChart
 * @param obj
 * @param title
 * @param data
 *//*
var comboDrawChart = function(obj,title, data) {
	
	var tableData = JSON.parse(JSON.stringify(data));	
	tableDrawChart('combo',obj,tableData);
	var chartData = JSON.parse(JSON.stringify(data));
	for(var i=(chartData[0].length-1); i>0; i--){
		data[0].splice((i+1),0,{ role: 'annotation' });
		for(var j=1; j<chartData.length; j++){
			data[j].splice((i+1),0,chartData[j][i]);
		}
	}
	data = google.visualization.arrayToDataTable(data);
	
	var options = {
			title: title,
			titleTextStyle : {
				fontSize : 17
			},
			seriesType: 'bars',
			chartArea:{top:40,left:50,right:100,width:'100%'},
			vAxis : {
				minValue : 0,
				maxValue : 5,											  
				viewWindow : {
					min : 0,
					max : 5
				}
			},
		};
	
	var ratio = (location.search.indexOf("isPrint=Y") > -1 ? 0.87 : 1);	
	var childWidth = parseInt($("[id='" + obj + "']").width() * ratio);
	var childHeight = parseInt($("[id='" + obj + "']").height() * ratio);
	var html = "<div id=\"" + obj + "_child\" style=\"width: " + childWidth + "px; height: " + childHeight + "px;\"></div>";
	$("[id='" + obj + "']").css("width",childWidth + "px");
	$("[id='" + obj + "']").css("height",childHeight + "px");
	$("[id='" + obj + "']").html(html);
	
	var chart = new google.visualization.ComboChart(document.getElementById(obj + "_child"));
	if(!browser.ie6 && !browser.ie7 && !browser.ie8){
		google.visualization.events.addListener(chart, 'ready', function () {
			document.getElementById(obj + "_child").innerHTML = '<img src="' + chart.getImageURI() + '">';
		});
	}
	chart.draw(data, options);
	if(typeof(GoogleChart) != "undefined" && GoogleChart > 0){
		GoogleChart--;
	} 
}




function columnDrawChart(obj,title, data) {
	
	
	var tableData = JSON.parse(JSON.stringify(data));	
	tableDrawChart('column',obj,tableData);
	var chartData = JSON.parse(JSON.stringify(data));
	
	for(var i=(data[0].length-1); i>0; i--){
		data[0].splice((i+1),0,{ role: 'style' });
		data[0].splice((i+1),0,{ role: 'annotation' });
		
		for(var j=1; j<data.length; j++){			
			if(chartData[j][i] == 0){
				data[j].splice((i+1),0,'opacity: 0');
				data[j].splice((i+1),0,"");
			}else{
				data[j].splice((i+1),0,'opacity: 1');
				
				if(i > 1 && j){
					var title = chartData[0][i];	
				}
				
				data[j].splice((i+1),0,title + " : " + chartData[j][i]);	
			}
			
		}
	}
	console.log(chartData);
	data = google.visualization.arrayToDataTable(data);
	var view = new google.visualization.DataView(data);
	
    var options = {
       	 	isStacked: 'percent',
            height: 300,
            legend: {position: 'top', maxLines: 3},
            vAxis: {minValue: 0},
            chartArea:{height:'95%'},                                       	
        };
	
	var ratio = (location.search.indexOf("isPrint=Y") > -1 ? 0.87 : 1);	
	var childWidth = parseInt($("[id='" + obj + "']").width() * ratio);
	var childHeight = parseInt($("[id='" + obj + "']").height() * ratio);
	var html = "<div id=\"" + obj + "_child\" style=\"width: " + childWidth + "px; height: " + childHeight + "px;\"></div>";
	$("[id='" + obj + "']").css("width",childWidth + "px");
	$("[id='" + obj + "']").css("height",childHeight + "px");
	$("[id='" + obj + "']").html(html);

	var chart = new google.visualization.ColumnChart(document.getElementById(obj + "_child"));
	if(!browser.ie6 && !browser.ie7 && !browser.ie8){
		google.visualization.events.addListener(chart, 'ready', function () {
			document.getElementById(obj + "_child").innerHTML = '<img src="' + chart.getImageURI() + '">';
		});
	}
	chart.draw(data, options);
	if(typeof(GoogleChart) != "undefined" && GoogleChart > 0){
		GoogleChart--;
	}
}
*/







/********************************************************************************
***********************************차트 + 결과표
********************************************************************************/



/**
 * 막대바 + 우측 표
 * title은 bar명
 * 
 * var AryData = new Array();
	AryData.push({"title":"매우만족","value" : "20","value2" : "30"});
	AryData.push({"title":"만족","value" : "10","value2" : "20"});
	AryData.push({"title":"보통","value" : "30.5","value2" : "40"});
	<div id="chart1" style="width: 800px; height: 400px;float:left"></div>
	<script type="text/javascript">
		GoogleChart++;
		google.setOnLoadCallback(function(){
			comboDrawChart1("chart1","제목", AryData);

		});
	</script>
 */
var comboDrawChart1 = function(obj,aryData,title,maxVal){
	var barcolors = ['#3366cc','#dc3912','#ff9900','#109618','#990099','#0099c6','#dd4477'];	
	var objData = new Array();
	var valCnt = 0; 
	for(var i=0 ;i<AryData.length; i++){
		var mkData = "";
		if(i == 0){			//title 등록
			mkData = "[";
			var titleObject = AryData[0];
			var data_i = 0;
			for(var key in titleObject) {
				if (Object.prototype.hasOwnProperty.call(titleObject, key)) {
					var isNum = jQuery.isNumeric(key);
					mkData += (data_i != 0 ? "," : "") + (!isNum ? "'" : "") +  key + (!isNum ? "'" : "");
					if(key != "title"){
						mkData += ",{ role: 'annotation' },{ role: 'style' }";
						valCnt++;
					}
					data_i++;
				}
			}
			mkData += "]";
			objData.push(eval(mkData));
		}
		
		//내용등록
		mkData = "["
		var data_i = 0;
		var bar_i = 0;
		for(var key in AryData[i]) {
			if (Object.prototype.hasOwnProperty.call(AryData[i], key)) {
				var isNum = jQuery.isNumeric(AryData[i][key]);
				mkData += (data_i != 0 ? "," : "") + (!isNum ? "'" : "") + AryData[i][key] + (!isNum ? "'" : "");
				if(key != "title"){
					mkData += ",'" + AryData[i][key] + "','" + barcolors[(valCnt > 1 ? bar_i : i) % (barcolors.length)] + "'";
					bar_i++;
				}
				data_i++;				
			}
		}
		mkData += "]"
		objData.push(eval(mkData));
	}
	
	data = google.visualization.arrayToDataTable(objData);
	
	var options = {
			seriesType: 'bars',
			chartArea:{top:60,left:60,right:0,bottom:20,width:'100%',height:'100%'},
			vAxis : {
				minValue : 0,
				maxValue : maxVal,
				viewWindowMode : {
					min : 0,
					max : maxVal
				},viewWindow : {
					min : 0,
					max : maxVal
				}				
			}
		};
	
	var ratio = (location.search.indexOf("isPrint=Y") > -1 ? 0.9 : 1);	
	var childWidth = parseInt($("[id='" + obj + "']").width() * ratio);
	var childHeight = parseInt($("[id='" + obj + "']").height() * ratio);
	var html = "<div id=\"" + obj + "_child1\" style=\"width: 55%;height: " + childHeight + "px;\" class=\"chartDiv1\"></div>"
	 			+ " <div id=\"" + obj + "_child2\" style=\"width:40%;height: " + childHeight + "px;\" class=\"chartDiv2\"></div>";
	//$("[id='" + obj + "']").css("width",childWidth + "px");
	$("[id='" + obj + "']").css("height",childHeight + "px");
	$("[id='" + obj + "']").html(html);
	
	var chart = new google.visualization.ComboChart(document.getElementById(obj + "_child1"));
	chart.draw(data, options);
	if(typeof(GoogleChart) != "undefined" && GoogleChart > 0){
		GoogleChart--;
	}
	
	tableDrawChart1(obj,aryData,barcolors);
}


function tableDrawChart1(obj,objData,barcolors){
	var tbodyHtml = "";
	
	///value가 2개 이상인경우 처리
	var valCnt = 0;
	var titleObject = objData[0];
	for(var key in titleObject) {
		if (Object.prototype.hasOwnProperty.call(titleObject, key)) {
			if(key != "title"){
				tbodyHtml 	+= "<tr>"
					+ "		<td><div style=\"background-color:" + barcolors[valCnt % (barcolors.length)] + "\">&nbsp;</div></td>"
					+ "		<td>" + key + "</td>"
					+ "</tr>";				
				valCnt++;
			}
		}
	}
	
	//value 1개 짜리인경우 추가 처리
	if(valCnt <= 1){		
		tbodyHtml = "";
		for(var i =0; i<objData.length; i++){
			tbodyHtml 	+= "<tr>"
				+ "		<td><div style=\"background-color:" + barcolors[i % (barcolors.length)] + "\">&nbsp;</div></td>"
				+ "		<td>" + objData[i]["title"] + "</td>"
				+ "</tr>";
		}
	}
	
	var html = ""
			 + "	<table id=\"" + obj + "_childTable\" class=\"chartTable1\" width=\"98%\">"
			 + "		 <colgroup>"
			 + "			<col width=\"50\">"
			 + "			<col width=\"*\">"
			 + "		</colgroup>"
			 + "		<tbody>"
			 + tbodyHtml
			 + "		</tbody>"
			 + "	</table>"

			+ "";
	$("[id='" + obj  + "_child2']").append(html);
}