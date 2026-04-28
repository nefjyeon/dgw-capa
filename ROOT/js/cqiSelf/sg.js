		var thisH = 0, thisG = 0, thisQ = 0;
		var formValueOrg = new Object;
		
		var saveAjax = true, successAjax = false;
		var save = function(saveType, e) {
			var $form = $("form[name=frm]");
			saveType = saveType ? saveType : "COMPLETE";
	
			if(!saveAjax){
				alert("잠시만 기다려 주세요.");
				return;
			}
			
			$form.find("input[name*=tmp__").attr("disabled", "");
	
			$.ajax({
				url : "selfMAJProc.do?year=" + year + "&maj_no=" + maj_no + "&self__" + page_info + "_info_status=" + saveType,
				dataType : "json",
				type : "post",
				async : true,
				data : $form.serialize(),
				beforeSend : function(){
					saveAjax = false;
					successAjax = false;
				},
				success : function(result) {
					if (result.data) {
						alert((saveType == "TEMP" ? "임시" : "") + "저장되었습니다.")	;
						successAjax = true;
					} else {
						alert(result.msg);
					}
				},
				error : function() {
					alert("저장 중 오류가 발생했습니다.");
				},
				complete : function(data) {
					saveAjax = true;
	
					if (successAjax) {
						window.location.replace(window.location.href);
					}
				}
			});
			
			$form.find("input[name*=tmp__").removeAttr("disabled");
		}

		
		var actionFn = new Object;

		actionFn.fn_1_1_7_data2 = function(obj) {
			var a = parseInt($(obj).closest("tr").find(".calc_a").val());
			var b = parseInt($(obj).closest("tr").find(".calc_b").val());
			
			var v = (a ? a : 0) + (b ? b : 0);
			$(obj).closest("tr").find(".calc_c").val(v);
			$(obj).closest("tr").find(".calc_d").text(v);
		};

		actionFn.fn_2_1_3_data2 = function(obj) {
			var a = parseInt($(obj).closest("tr").find(".calc_a").val());
			var b = parseInt($(obj).closest("tr").find(".calc_b").val());
			
			var v = (a ? a : 0) + (b ? b : 0);
			$(obj).closest("tr").find(".calc_c").val(v);
			$(obj).closest("tr").find(".calc_d").text(v);
		};

		$(function() {
			$(".table-nav").css("height", document.body.offsetHeight - 80);
			$(window).bind("resize", function() {
				$(".table-nav").css("height", document.body.offsetHeight - 80);
			});

			$("form").each(function() {
				formValueOrg[this.name] = $(this).serialize();
			});
			
			$(".table-nav span.status.COMPLETE").text("완료");
			$(".table-nav span.status.TEMP").text("임시");
		});
		
		var resetBox = function(obj) {
			$(obj).closest("form").find(".surveyInputCheckbox").each(function() {
				for (var i = parseInt($(this).attr("data-min")); i <= parseInt($(this).attr("data-max")); ++i) {
					$(".surveyCheckbox[data-name='" + this.name + "']").removeClass("checked" + i);
					
					if ($(this).attr("data-value" + i) == this.value) {
						$(".surveyCheckbox[data-name='" + this.name + "']").addClass("checked" + i);
						$(".surveyCheckbox[data-name='" + this.name + "']").html($(this).attr("data-text" + i) == "" ? "&nbsp;" : $(this).attr("data-text" + i));
					}
				}
			});
			
			$(obj).closest("form").find(".surveyInputSelector").each(function() {
				if ($(this).attr("data-readonly") != "true") {
					$(".surveySelector[data-name='" + this.name + "']").addClass("active");
				}

				$(".surveySelector[data-name='" + this.name + "'][data-value='" + this.value + "']").removeClass("active").addClass("selected");
			});

			if (actionFn[$(obj).closest("form").get(0).name]) {
				actionFn[$(obj).closest("form").get(0).name]($(obj).closest("form").get(0).name);
			}
		};

		var selectSurveyInput = function(inputObj) {
			if (inputObj) {
				$(".surveySelector[data-name='" + inputObj.name + "']").removeClass("selected");
	
				if ($(inputObj).attr("data-readonly") != "true") {
					$(".surveySelector[data-name='" + inputObj.name + "']").addClass("active");
				}
	
				$(".surveySelector[data-name='" + inputObj.name + "'][data-value='" + inputObj.value + "']").removeClass("active").addClass("selected");
			}
		}

		var hideQ = function() {
			$(".harea").hide();
			$(".garea").hide();
			$("form").hide();
		}

		var showQ = function(h, g, q, isFirst) {
			thisH = h, thisG = g, thisQ = q;

			if (!isFirst) {
				//window.location.href = "#harea_" + h;
				$(window).scrollTop(0);
			}

			hideQ();

			$("#harea_" + h).show();
			$("#garea_" + h + "_" + g).show();
			$("form[name=frm_" + h + "_" + g + "_" + q + "]").show();

			$(".table-nav [class*=on]").removeClass("on");
			$("#showQ_" + h + "_" + g + "_" + q).addClass("on");
			$("#showQ_" + h + "_" + g).addClass("on");
			$("#showQ_" + h).addClass("on");

			$(".surveySelector, .surveyCheckbox").each(function() {
				$(this).closest("table").closest("tr").attr("data-temp-height", $(this).closest("table").closest("tr").attr("data-temp-height") != undefined && $(this).closest("table").closest("tr").attr("data-temp-height") * 1 > 0 ? $(this).closest("table").closest("tr").attr("data-temp-height") : $(this).closest("table").closest("tr").height());
				$(this).closest("table").height($(this).closest("table").closest("tr").attr("data-temp-height")).css("min-height", "54px");
			});

			if (actionFn["frm_" + h + "_" + g + "_" + q]) {
				actionFn["frm_" + h + "_" + g + "_" + q]("frm_" + h + "_" + g + "_" + q);
			}
		}

		var showQbyNav = function(nid) {
			var $form = $("form[name=frm_" + thisH + "_" + thisG + "_" + thisQ + "]");

			if ($form.length > 0 && $form.serialize() != formValueOrg[$form.get(0).name]) {
				if (!confirm("저장이 안된 내용이 있습니다.\n저장을 하지 않고 단계를 이동하시겠습니까?")) {
					return;
				}

				$form.get(0).reset();
				resetBox($form.get(0));
			}
			
			var n = nid.split("_");

			if (n.length == 4) {
				showQ(n[1], n[2], n[3]);
			} else if (n.length == 3) {
				showQ(n[1], n[2], 1);
			} else if (n.length == 2) {
				showQ(n[1], 1, 1);
			}
		}

		var showQbyForm = function(frm) {
			if (frm && frm.name) {
				var n = frm.name.split("_");

				if (n.length == 4) {
					showQ(n[1], n[2], n[3]);
				}
			}
		}


		$(document).on("click", "a.btnSave", function(e) {
			if ($(this).closest("form").find("input.cqiEval").val() == "") {
				alert("평가점수를 선택하여 주세요.");
				return;
			}

			var msg = "";
			$(this).closest("form").find("textarea[name*='_text_']").each(function() {
				if (this.value == "") {
					msg = "미입력된 내용이 있습니다. 모든 항목을 입력하세요.";
				}
			});
		
			if (msg) {
				alert(msg);
				return;
			}
			
			save(this, "COMPLETE", e);
		});
		
		$(document).on("click", "a.btnSaveTemp", function(e) {
			if (confirm("임시저장 하시겠습니까?")) {
				save(this, "TEMP", e);
			}
		});
/*
		var save = function(obj, saveType, e) {
			var $obj = $(obj);
			var $form = $(obj).closest("form");

			if(!SaveAjax){
				alert("잠시만 기다려 주세요.");
				return;
			}
			
			$form.find("input[name*=tmp__").attr("disabled", "");

			$.ajax({
				url : "/survey/researchSelfProc.do?year=" + year + "&term=" + term + "&maj_no=" + maj_no + "&" + $form.get(0).name.replace("frm_", "self__") + "_info_status=" + saveType,
				dataType : "json",
				type : "post",
				async   : false,
				data : $form.serialize(),
				beforeSend : function(){
					SaveAjax = false;
				},
				success : function(result) {
					if(result.data){
						if ($obj.attr("data-complete") == "true") {
							var noneSaveCnt = 0, noneSaveForm = null;
							$("form").each(function() {
								if ($(obj).serialize() != formValueOrg[obj.name]) {
									++noneSaveCnt;

									if (noneSaveForm == null) {
										noneSaveForm = obj;
									}
								}
							});

							if (noneSaveCnt == 0) {
								alert("완료되었습니다.")	;
							} else {
								if (confirm("마지막 문항을 저장하였으나, 이전 단계의 문항 중 저장되지 않는 내용이 있습니다.\n\n해당 문항으로 이동하시겠습니까?")) {
									showQbyForm(noneSaveForm);
								}
							}
						} else {
							alert((saveType == "TEMP" ? "임시" : "") + "저장되었습니다.")	;
						}
						
						if ($(".table-nav li[class*=on] span.status").length > 0) {
							$(".table-nav li[class*=on] span.status").removeClass(saveType == "COMPLETE" ? "TEMP" : "COMPLETE");
							$(".table-nav li[class*=on] span.status").addClass(saveType == "COMPLETE" ? "COMPLETE" : "TEMP");
							$(".table-nav li[class*=on] span.status").text(saveType == "COMPLETE" ? "완료" : "임시");
						} else {
							$(".table-nav li li span[class*=on]").parent().find("span.status").addClass(saveType == "COMPLETE" ? "TEMP" : "COMPLETE");
							$(".table-nav li li span[class*=on]").parent().find("span.status").addClass(saveType == "COMPLETE" ? "COMPLETE" : "TEMP");
							$(".table-nav li li span[class*=on]").parent().find("span.status").text(saveType == "COMPLETE" ? "완료" : "임시");
						}

						formValueOrg[$form.get(0).name] = $form.serialize();
					} else {
						alert(result.msg);
					}
				},
				error : function() {
					alert("저장 중 오류가 발생했습니다.");
				},
				complete : function(data) {
					SaveAjax = true;
				}
			});
			
			$form.find("input[name*=tmp__").removeAttr("disabled");
			
			jQuery.hrefStop(e);
		}
*/
		$(document).on("click", "a.btnStart", function(e) {
			showQ(1, 1, 1);
		});
