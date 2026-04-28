var lastElmt = {"cls_mode" : "", "cls1_cd" : "", "cls2_cd" : "", "cls3_cd" : "", "cls4_cd" : "", "nc_cd" : ""};
var clsTypeName = ["대분류", "중분류", "소분류", "세분류", "능력단위", "능력단위요소 "];
var edu_yr = "2017";
var pro_no = "";
var s_seq = "0";

$(function(){
	$("#depth2Box").hide();
	$("#depth3Box").hide();
	$("#depth4Box").hide();
	$("#depth5Box").hide();
	$("#depth6Box").hide();
	showClsList();
});

function showClsList(cls1_cd, cls2_cd, cls3_cd, cls4_cd) {
	var clsStep = 1;
	
	if (cls1_cd) {
		$("#depth2Box").show();
		clsStep = 2;
	} else {
		$("#depth2Box").hide();
	}
	
	if (cls2_cd) {
		$("#depth3Box").show();
		clsStep = 3;
	} else {
		$("#depth3Box").hide();
	}
	
	if (cls3_cd) {
		$("#depth4Box").show();
		clsStep = 4;
	} else {
		$("#depth4Box").hide();
	}

	if (cls4_cd) {
		$("#depth5Box").show();
		clsStep = 5;
	} else {
		$("#depth5Box").hide();
	}
	
	$("#depth6Box").hide();
	
	lastElmt.cls1_cd = cls1_cd ? cls1_cd : "";
	lastElmt.cls2_cd = cls2_cd ? cls2_cd : "";
	lastElmt.cls3_cd = cls3_cd ? cls3_cd : "";
	lastElmt.cls4_cd = cls4_cd ? cls4_cd : "";
	lastElmt.unit_cd = "";
	lastElmt.yr = "";
	lastElmt.ver = "";
	lastElmt.nc_cd = "";
	
	var list = null;
	var params = "&clsStep=" + clsStep + "&cls1_cd=" + lastElmt.cls1_cd + "&cls2_cd=" + lastElmt.cls2_cd + "&cls3_cd=" + lastElmt.cls3_cd + "&cls4_cd=" + lastElmt.cls4_cd;
	
	$.ajax({
		url : "/ncsCode/getClsList.do?edu_yr=" + edu_yr,
		dataType : "json",
		type : "post",
		async : false,
		data : params,
		success : function(result) {
			if (result.cnt > 0 && result.list[0]) {
				list = result.list;
			} else {
				alert("조회 된 " + clsTypeName[clsStep - 1] + " 정보가 없습니다.");
			}
		},
		error : function(){
			alert(clsTypeName[clsStep - 1] + " 정보 조회에 문제가 발생하였습니다.");
		}
	});
	
	var newList = "";
	
	if (list) {
		for(var i = 0; i < list.length; ++i) {
			var verNum = list[i].VER;
			
			if (clsStep == 5) {
				newList += "<li><a href=\"#cls" + clsStep + "\" onclick=\"showDtlList('" +  (list[i].NC_CD ? list[i].NC_CD : '') + "','" + (list[i].UNIT_CD ? list[i].UNIT_CD : '') + "','" + (list[i].YR ? list[i].YR : '') + "','" + (list[i].VER ? list[i].VER : '') + "');return false;\">"+list[i].CODE+". "+list[i].NAME+"(" + list[i].YR + list[i].VER +")</a>";

				if (list[i].NCS_BY == "N") {
					newList += " <a href=\"#module\" onclick=\"showNCSUnitInfo('"+cls1_cd+cls2_cd+cls3_cd+cls4_cd+list[i].CODE+'_'+list[i].YR+list[i].VER+"');return false;\"><p class='ico blue'>→학습모듈<p><a>";
				}
			} else {
				newList += "<li><a href=\"#cls" + clsStep + "\" onclick=\"showClsList('" + (list[i].CLS1_CD ? list[i].CLS1_CD : '') + "','" + (list[i].CLS2_CD ? list[i].CLS2_CD : '') + "','" + (list[i].CLS3_CD ? list[i].CLS3_CD : '') + "','" + (list[i].CLS4_CD ? list[i].CLS4_CD : '') + "');return false;\">" + list[i].CODE + ". " + list[i].NAME + "</a>";
			}
			
			newList += "</li>";
		}
	}
	
	$("#listArea" + clsStep).html(newList);

	clickFn();
	
	return false;
}

function showDtlList(nc_cd, unit_cd, yr, ver) {
	lastElmt.unit_cd = unit_cd ? unit_cd : "";
	lastElmt.yr = yr ? yr : "";
	lastElmt.ver = ver ? ver : "";
	lastElmt.nc_cd = nc_cd ? nc_cd : "";
	
	var list = null;
	var params = "&nc_cd=" + nc_cd;

	$.ajax({
		url : "/ncsCode/getElmtList.do?edu_yr=" + edu_yr,
		dataType : "json",
		type : "post",
		async : false,
		data : params,
		success : function(result) {
			if (result.cnt > 0 && result.list[0]) {
				list = result.list;
			} else {
				alert("조회 된 " + clsTypeName[5] + " 정보가 없습니다.\n\n미개발 또는 유보분야인지 확인하여 주세요.");
			}
		},
		error : function(){
			alert(clsTypeName[5] + " 정보 조회에 문제가 발생하였습니다.");
		}
	});

	if (list) {
		var newList = "";

		for (var i = 0; i < list.length; i++) {
			newList += '<tr>';
			newList += '	<td rowspan="4">' + (i + 1) + '</td>';
			newList += '	<td rowspan="4" class="test">';
			
			if (list[i].NCS_BY == 'N') {	//기본 능력단위요소
				newList += '			'+list[i].ELMT_NM+'<br/>('+list[i].NC_ELMT_CD+') ';
			} else if (list[i].NCS_BY == 'S') {	//사용자정의 능력단위요소
				newList += '			'+list[i].ELMT_NM+'<br/>('+list[i].NC_ELMT_CD+') ';
			}
			
			newList += '		<div class="btnBox">';
			newList += '			<div> ';
			
			if (window.top.location.pathname == "/ncsMgt/subject/detail.do" || window.top.location.pathname == "/ncsMgt/operation/subject.do" || window.top.location.pathname == "/ncsMgt/operPlan/subject.do") {
				newList += '			<a href="#none" class="btnType0" style="margin-top: 10px;" onclick="addSubjectNcs(this, \'' + list[i].ORG_NC_SEQ + '\'); return false;">선택</a> ' ;
			}
			
			newList += '			</div> ' ;
			newList += '		</div>';
			newList += '	</td>';
			newList += '	<td class="left" style="line-height: 25px;">';
			
			for (var j = 0; j < list[i].base.length; j++) {
				if (list[i].base[j].NCS_BY == "S") {
					newList += "<p class='ico self'>자체</p>";
				}
				
				newList += list[i].base[j].DTL_CONT;
				newList += ' <br/>';
			}
			
			newList += '	</td>';
			newList += '</tr>';
			newList += '<tr>';
			newList += '	<td class="left" style="line-height: 25px;">';
			newList += '		<strong>【지 식】</strong><br />';
			
			for (var j = 0; j < list[i].know.length; j++) {
				newList += 'ㅇ '+list[i].know[j].DTL_CONT;
				newList += ' <br/>';
			}

			newList += '	</td>';
			newList += '</tr>';
			newList += '<tr>';
			newList += '	<td class="left" style="line-height: 25px;">';
			newList += '		<strong>【기 술】</strong><br />';
			
			for (var j = 0; j < list[i].skill.length; j++) {
				newList += 'ㅇ '+list[i].skill[j].DTL_CONT;
				newList += ' <br/>';
			}
			
			newList += '	</td>';
			newList += '</tr>';
			newList += '<tr>';
			newList += '	<td class="left" style="line-height: 25px;">';
			newList += '		<strong>【태 도】</strong><br />';
			
			for (var j = 0; j < list[i].attent.length; j++) {
				newList += 'ㅇ '+list[i].attent[j].DTL_CONT;
				newList += ' <br/>';
			}

			newList += '	</td>';
			newList += '</tr>';
		}
	}
	
	$("#listArea6").html(newList);
	$("#depth6Box").show();
}

//능력단위요소 매칭 추가
function addSubjectNcs(obj, org_nc_seq){
	if(!confirm("NCS 매칭정보를 등록하시겠습니까?")) {
		return;
	}
	
	if (!pro_no) {
		alert("선택한 능력단위요소를 등록할 교과목 정보가 없습니다.");
		return;
	}

	var list = null;
	var params = "&org_nc_seq=" + org_nc_seq + "&pro_no=" + pro_no + "&s_seq=" + s_seq;

	$.ajax({
		url : "/ncsCode/addSubjectNcsProc.do?edu_yr=" + edu_yr,
		dataType : "json",
		type : "post",
		async : false,
		data : params,
		success : function(result) {
			if (result.cnt > 0) {
				alert("선택한 능력단위요소가 등록되었습니다.");
				window.top.addNcsCnt = result.cnt;
			} else {
				alert("능력단위요소가 선택(등록)에 실패하였습니다.");
			}
		},
		error : function(){
			alert("능력단위요소 선택(등록)에 문제가 발생하였습니다.");
		}
	});

	$(obj).remove();
}

var clickFn = function(){
	var $sysBox = $(".sysBoxType1");

	$sysBox.each(function() {
		var $li = $(this).find("ul li");
		
		$li.each(function(idx) {
			$(this).unbind("click").bind("click", function() {
				$li.each(function() {
					$(this).find("a").eq(0).css("font-weight", "").css("text-decoration", "");
				});
				
				$li.eq(idx).find("a").eq(0).css("font-weight", "bold").css("text-decoration", "underline");
			});
		});
	});
}