		var thisH = 0, thisG = 0, thisQ = 0;
		var formValueOrg = new Object;
		var actionFn = new Object;

		actionFn.frm_1_1_2 = function(formName) {
			var $form = $("form[name='" + formName + "']");
			
			var v1 = $form.find("tbody.dataBody .surveyInputCheckbox[value!=1]").length;

			if (v1 == 0) {
				$form.find("input.cqiEval").val(3);
			} else if (v1 == 1) {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			selectSurveyInput($form.find("input.cqiEval").get(0));
		};

		actionFn.frm_1_1_6 = function(formName) {
			var $form = $("form[name='" + formName + "']");

			if ($form.find(".surveyInputCheckbox[value=1]").length == 3) {
				$form.find("input.cqiEval").val(3);
			} else if ($form.find(".surveyInputCheckbox[value=1]").length == 2 && $form.find(".surveyInputCheckbox").eq(0).val() == '1') {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			selectSurveyInput($form.find("input.cqiEval").get(0));
		};

		actionFn.frm_1_1_7 = function(formName) {
			var $form = $("form[name='" + formName + "']");

			var a = $form.find("input.checkedTarget").length;
			var b = 0;

			$form.find("input[name^='self__1_1_7_yn_1_']").each(function() {
				b += ($(this).closest("tr").find("input[name^='self__1_1_7_yn'][value=1]").length == 12 ? 1 : 0);
			});

			var v = a > 0 ? (b / a * 100) : 0;

			if (v >= 90) {
				$form.find("input.cqiEval").val(3);
			} else if (v >= 80) {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			$("#text_1_1_7").text(roundCal(v));

			selectSurveyInput($form.find("input.cqiEval").get(0));
		};

		actionFn.frm_1_2_1 = function(formName) {
			/*var $form = $("form[name='" + formName + "']");

			var a = sbjLength;
			var b = 0;

			$form.find("input[name^='self__1_2_1_yn_1_']").each(function() {
				b += ($(this).closest("tr").find("input[name^='self__1_2_1_yn'][value=1]").length == 6 ? 1 : 0);
			});

			var v = a > 0 ? (b / a * 100) : 0;

			if (v >= 100) {
				$form.find("input.cqiEval").val(3);
			} else if (v >= 80) {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			$("#text_1_2_1").text(roundCal(v));

			selectSurveyInput($form.find("input.cqiEval").get(0));*/
		};

		actionFn.frm_1_2_2 = function(formName) {
			var $form = $("form[name='" + formName + "']");

			var v1 = $form.find("input[name^='self__1_2_2_yn_'][value!='2']").length;
			var v2 = $form.find("input[name^='self__1_2_2_yn_'][value='1']").length;

			var v3 = v1 > 0 ? (v2 / v1 * 100) : 0;

			if (v3 >= 80) {
				$form.find("input.cqiEval").val(3);
			} else if (v3 >= 50) {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			$("#text_1_2_2").text(roundCal(v3));

			selectSurveyInput($form.find("input.cqiEval").get(0));
		};

		actionFn.frm_1_2_3 = function(formName) {
			/*var $form = $("form[name='" + formName + "']");

			var v1 = sbjLength;
			var v2 = 0;

			$form.find("input[name^='self__1_2_3_data_2']").each(function() {
				v2 += $(this).val() * 1;
			});

			var v3 = v1 > 0 ? (v2 / v1) : 0;

			if (v3 >= 3) {
				$form.find("input.cqiEval").val(3);
			} else if (v3 >= 2) {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			$("#text_1_2_3").text(roundCal(v3));

			selectSurveyInput($form.find("input.cqiEval").get(0));*/
		};

		actionFn.frm_1_2_4 = function(formName) {
			var $form = $("form[name='" + formName + "']");

			var v1 = $form.find(".dataBody > tr").length;
			var v2 = $form.find(".surveyInputCheckbox[value='1']").length;

			var v3 = v1 > 0 ? (v2 / v1 * 100) : 0;

			if (v3 >= 90) {
				$form.find("input.cqiEval").val(3);
			} else if (v3 >= 80) {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			$("#text_1_2_4").text(roundCal(v3));

			selectSurveyInput($form.find("input.cqiEval").get(0));
		};

		actionFn.frm_1_2_5 = function(formName) {
			var $form = $("form[name='" + formName + "']");

			var v1 = $form.find(".targetInput[value!='']").length;

			if (v1 >= 4) {
				$form.find("input.cqiEval").val(3);
			} else if (v1 >= 2) {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			selectSurveyInput($form.find("input.cqiEval").get(0));
		};

		actionFn.frm_1_2_6 = function(formName) {
			var $form = $("form[name='" + formName + "']");

			var v1 = 0;
			$form.find(".td_1_2_6_stdt_cnt1").each(function() {
				v1 += $(this).text() * 1;
			});

			var v2 = 0;
			$form.find(".td_1_2_6_stdt_cnt2").each(function() {
				v2 += $(this).text() * 1;
			});
			
			var v3 = v2 * 100 / v1;
			$form.find(".td_1_2_6_stdt_cnt3").text(roundCal(v3));

			if (v3 >= 80) {
				$form.find("input.cqiEval").val(3);
			} else if (v3 >= 60) {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			selectSurveyInput($form.find("input.cqiEval").get(0));
		};

		actionFn.frm_1_2_7 = function(formName) {
			/*var $form = $("form[name='" + formName + "']");

			var n = sbjLength;
			var a = 0;
			var b = 0;
			var c = 0;

			$form.find("input[name^='self__1_2_7_data_1_']").each(function() {
				a += $(this).val() * 1;
			});

			$form.find("input[name^='self__1_2_7_data_2_']").each(function() {
				b += $(this).val() * 1;
			});

			$form.find("input[name^='self__1_2_7_data_3_']").each(function() {
				c += $(this).val() * 1;
			});

			var v = n > 0 ? ((a + b + c) / 3 / n) : 0;

			if (v >= 80) {
				$form.find("input.cqiEval").val(3);
			} else if (v >= 50) {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			$("#text_1_2_7").text(roundCal(v));

			selectSurveyInput($form.find("input.cqiEval").get(0));*/
		};

		actionFn.frm_1_2_8 = function(formName) {
			var $form = $("form[name='" + formName + "']");

			var n = $form.find("input[name^='self__1_2_8_yn_1_'][value='1']").length;
			var a = 0, b = 0, c = 0;
			
			$form.find("input[name^='self__1_2_8_yn_1_'][value='1']").each(function() {
				if ($(this).closest("tr").find("input[name^='self__1_2_8_yn_2_'][value='1']").length > 0) {
					++a;
				}
				if ($(this).closest("tr").find("input[name^='self__1_2_8_yn_3_'][value='1']").length > 0) {
					++b;
				}
				if ($(this).closest("tr").find("input[name^='self__1_2_8_yn_4_'][value='1']").length > 0) {
					++c;
				}
			});

			var v = n > 0 ? (((a / n) + (b / n) + (c / n)) / 3 * 100) : 0;

			if (v >= 100) {
				$form.find("input.cqiEval").val(3);
			} else if (v >= 80) {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			$("#text_1_2_8").text(roundCal(v));

			selectSurveyInput($form.find("input.cqiEval").get(0));
		};

		actionFn.frm_2_1_1 = function(formName) {
			var $form = $("form[name='" + formName + "']");

			var a = $form.find("input[name^='self__2_1_1_yn_']").length;
			var b = $form.find("input[name^='self__2_1_1_yn_'][value='1']").length;

			var v = a > 0 ? (b / a * 100) : 0;

			if (v >= 90) {
				$form.find("input.cqiEval").val(3);
			} else if (v >= 80) {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			$("#text_2_1_1").text(roundCal(v));

			selectSurveyInput($form.find("input.cqiEval").get(0));
		};

		actionFn.frm_2_1_2 = function(formName) {
			var $form = $("form[name='" + formName + "']");

			var a = $form.find("input[name^='self__2_1_2_yn_']").length;
			var b = $form.find("input[name^='self__2_1_2_yn_'][value='1']").length;

			var v = a > 0 ? (b / a * 100) : 0;

			if (v >= 90) {
				$form.find("input.cqiEval").val(3);
			} else if (v >= 80) {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			$("#text_2_1_2").text(roundCal(v));

			selectSurveyInput($form.find("input.cqiEval").get(0));
		};

		actionFn.frm_2_2_1 = function(formName) {
			var $form = $("form[name='" + formName + "']");

			var v1 = $form.find(".targetInput[value!='']").length;

			if (v1 >= 2) {
				$form.find("input.cqiEval").val(3);
			} else if (v1 >= 1) {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			selectSurveyInput($form.find("input.cqiEval").get(0));
		};

		actionFn.frm_3_1_1 = function(formName) {
			var $form = $("form[name='" + formName + "']");

			var v1 = $form.find("input[name=self__3_1_1_data_1]").val() * 1;
			var v2 = $form.find("input[name=self__3_1_1_data_2]").val() * 1;
			v1 = v1 ? v1 : 0;
			v2 = v2 ? v2 : 0;

			if (v1 > 0 && v2 > 0 && v2 / v1 * 100 >= 95) {
				$form.find("input.cqiEval").val(3);
			} else if (v1 > 0 && v2 > 0 && v2 / v1 * 100 >= 90) {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			$form.find("input[name=self__3_1_1_data_3]").val(roundCal(v1 > 0 ? v2 / v1 * 100 : 0));
			$("#text__3_1_1_data_3").text(roundCal(v1 > 0 ? v2 / v1 * 100 : 0));

			selectSurveyInput($form.find("input.cqiEval").get(0));
		};

		actionFn.frm_3_2_1 = function(formName) {
			var $form = $("form[name='" + formName + "']");

			var v1 = $form.find("input[name=self__3_2_1_data_1]").val() * 1;
			var v2 = $form.find("input[name=self__3_2_1_data_2]").val() * 1;
			v1 = v1 ? v1 : 0;
			v2 = v2 ? v2 : 0;

			if (v1 > 0 && v2 > 0 && v2 / v1 * 100 >= 100) {
				$form.find("input.cqiEval").val(3);
			} else if (v1 > 0 && v2 > 0 && v2 / v1 * 100 >= 90) {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			$form.find("input[name=self__3_2_1_data_3]").val(roundCal(v1 > 0 ? v2 / v1 * 100 : 0));
			$("#text__3_2_1_data_3").text(roundCal(v1 > 0 ? v2 / v1 * 100 : 0));

			selectSurveyInput($form.find("input.cqiEval").get(0));
		};

		actionFn.frm_3_3_1 = function(formName) {
			var $form = $("form[name='" + formName + "']");

			var v1 = $form.find("input[name=self__3_3_1_data_1]").val() * 1;
			var v2 = $form.find("input[name=self__3_3_1_data_2]").val() * 1;
			v1 = v1 ? v1 : 0;
			v2 = v2 ? v2 : 0;

			if (v1 > 0 && v2 > 0 && v2 / v1 * 100 >= 90) {
				$form.find("input.cqiEval").val(3);
			} else if (v1 > 0 && v2 > 0 && v2 / v1 * 100 >= 80) {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			$form.find("input[name=self__3_3_1_data_3]").val(roundCal(v1 > 0 ? v2 / v1 * 100 : 0));
			$("#text__3_3_1_data_3").text(roundCal(v1 > 0 ? v2 / v1 * 100 : 0));

			selectSurveyInput($form.find("input.cqiEval").get(0));
		};

		actionFn.frm_3_4_1 = function(formName) {
			var $form = $("form[name='" + formName + "']");

			var v1 = $form.find("input[name=self__3_4_1_data_1]").val() * 1;
			var v2 = $form.find("input[name=self__3_4_1_data_2]").val() * 1;
			v1 = v1 ? v1 : 0;
			v2 = v2 ? v2 : 0;

			if (v1 > 0 && v2 > 0 && v2 / v1 * 100 >= 100) {
				$form.find("input.cqiEval").val(3);
			} else if (v1 > 0 && v2 > 0 && v2 / v1 * 100 >= 90) {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			//$form.find("input[name=self__3_4_1_data_3]").val(roundCal(v1 > 0 ? v2 / v1 * 100 : 0));
			//$form.find("input[name=self__3_4_1_data_3]").parent().find("span").text(roundCal(v1 > 0 ? v2 / v1 * 100 : 0));

			selectSurveyInput($form.find("input.cqiEval").get(0));
		};

		actionFn.frm_3_4_2 = function(formName) {
			var $form = $("form[name='" + formName + "']");

			if ($form.find(".surveyInputCheckbox[value=1]").length >= 2) {
				$form.find("input.cqiEval").val(3);
			} else if ($form.find(".surveyInputCheckbox[value=1]").length >= 1) {
				$form.find("input.cqiEval").val(2);
			} else {
				$form.find("input.cqiEval").val(1);
			}

			selectSurveyInput($form.find("input.cqiEval").get(0));
		};

		actionFn.frm_4_4_1 = function(formName) {
			var $form = $("form[name='" + formName + "']");
			/* 작업필요
			$form.find("input[name^='tmp__'][name*='_use_']").each(function() {
				if (this.checked) {}
			});
			 */
			var collegeFormId = formName+"_college";
			if($form.attr("id") != collegeFormId)
				$form.find(".sbjContArea").addClass("close");
		};

		actionFn.frm_5_1_1 = function() {
			$("input.cqiEval[name^='self__1_']").each(function() {
				$(".result_" + $(this).closest("form").get(0).name).html($(this).val() == 3 ? 'A' : ($(this).val() == 2 ? 'B' : ($(this).val() == 3 ? 'C' : '-')));
			});
			
			$("[id^='result__1_'][name*='_text_']").hide();
			$("textarea[name^='self__1_'][name*='_text_']").each(function() {
				var $obj = $("#" + this.name.replace("self__", "result__"));
				
				if ($obj.length > 0) {
					$obj.text($(this).val());
				}
				
				$obj.show();
			});
		}

		actionFn.frm_5_2_1 = function() {
			$("input.cqiEval[name^='self__2_']").each(function() {
				$(".result_" + $(this).closest("form").get(0).name).html($(this).val() == 3 ? 'A' : ($(this).val() == 2 ? 'B' : ($(this).val() == 3 ? 'C' : '-')));
			});
			
			$("[id^='result__2_'][name*='_text_']").hide();
			$("textarea[name^='self__2_'][name*='_text_']").each(function() {
				var $obj = $("#" + this.name.replace("self__", "result__"));
				
				if ($obj.length > 0) {
					$obj.text($(this).val());
				}
				
				$obj.show();
			});
		}

		actionFn.frm_5_3_1 = function() {
			$("input.cqiEval[name^='self__3_']").each(function() {
				$(".result_" + $(this).closest("form").get(0).name).html($(this).val() == 3 ? 'A' : ($(this).val() == 2 ? 'B' : ($(this).val() == 3 ? 'C' : '-')));
			});
			
			$("[id^='result__3_'][name*='_text_']").hide();
			$("textarea[name^='self__3_'][name*='_text_']").each(function() {
				var $obj = $("#" + this.name.replace("self__", "result__"));
				
				if ($obj.length > 0) {
					$obj.text($(this).val());
				}
				
				$obj.show();
			});
		}

		actionFn.frm_5_4_1 = function() {
			$("input.cqiEval[name^='self__4_']").each(function() {
				$(".result_" + $(this).closest("form").get(0).name).html($(this).val() == 3 ? 'A' : ($(this).val() == 2 ? 'B' : ($(this).val() == 3 ? 'C' : '-')));
			});
			
			$("[id^='result__4_'][name*='_text_']").hide();
			$("textarea[name^='self__4_'][name*='_text_']").each(function() {
				var $obj = $("#" + this.name.replace("self__", "result__"));
				
				if ($obj.length > 0) {
					$obj.text($(this).val());
				}
				
				$obj.show();
			});
			$("input[name^='self__4_'][name*='_use_']").each(function() {
				var $obj = $("#" + this.name.replace("self__", "result__"));
				
				if ($obj.length > 0) {
					if (this.value == "Y") {
						$obj.show();
					} else {
						$obj.hide();
					}
				}
			});
		}

		$(function() {
			$(".table-nav").css("height", document.body.offsetHeight - 80);
			
			$(window).bind("resize", function() {
				$(".table-nav").css("height", document.body.offsetHeight - 80);
			});

			showQ(0, 1, 1, true);

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

		var SaveAjax = true;
		var save = function(obj, saveType, e) {
			var $obj = $(obj);
			var $form = $(obj).closest("form");

			if(!SaveAjax){
				alert("잠시만 기다려 주세요.");
				return;
			}
			
			$form.find("input[name*=tmp__").attr("disabled", "");

			$.ajax({
				url : "/survey/researchSelfCollegeProc.do?year=" + year + "&term=" + term + "&maj_no=" + maj_no + "&" + $form.get(0).name.replace("frm_", "self__") + "_info_status=" + saveType,
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

		$(document).on("click", "a.btnStart", function(e) {
			showQ(1, 1, 1);
		});

		$(document).on("click", "a.btnPrev", function(e) {
			var $form = $(this).closest("form");

			if ($form.serialize() != formValueOrg[$form.get(0).name]) {
				if (!confirm("저장이 안된 내용이 있습니다.\n저장을 하지 않고 이전 단계로 이동하시겠습니까?")) {
					return;
				}

				$form.get(0).reset();
				resetBox($form.get(0));
			}

			$("form").each(function(idx) {
				if (this == $form.get(0) && idx > 0) {
					showQbyForm($("form").get(idx - 1));
				}
			});
		});

		$(document).on("click", "a.btnNext", function(e) {
			var $form = $(this).closest("form");

			if ($form.serialize() != formValueOrg[$form.get(0).name]) {
				if (!confirm("저장이 안된 내용이 있습니다.\n저장을 하지 않고 다음 단계로 이동하시겠습니까?")) {
					return;
				}

				$form.get(0).reset();
				resetBox($form.get(0));
			}

			$("form").each(function(idx) {
				if (this == $form.get(0) && idx < $("form").length - 1) {
					showQbyForm($("form").get(idx + 1));
				}
			});
		});
		
		var addRow = function(obj) {
			$(obj).closest('form').find('tbody.dataBody').append(
					$(obj).closest('form').find('tbody.dataSample').html()
					.replace(/{data-no}/g, $(obj).closest('form').find('tbody.dataBody > tr').last().attr("data-no") * 1 > 0 ? $(obj).closest('form').find('tbody.dataBody > tr').last().attr("data-no") * 1 + 1 : 1)
						.replace(/{no[+]1}/g, $(obj).closest('form').find('tbody.dataBody > tr').length + 2)
						.replace(/{no}/g, $(obj).closest('form').find('tbody.dataBody > tr').length + 1)
						.replace(/ disabled/g, '')
				);
			
			if (actionFn[$(obj).closest("form").get(0).name]) {
				actionFn[$(obj).closest("form").get(0).name]($(obj).closest("form").get(0).name);
			}
			
			$(obj).closest("form").find(".temp_bodycnt").val($(obj).closest('form').find('tbody.dataBody > tr').length);
		}
		
		var delRow = function(obj) {
			if ($(obj).closest('form').find('tbody.dataBody > tr').last().attr("data-no") * 1 == 1) {
				alert("이미 삭제 가능한 항목이 모두 삭제되었습니다.");
				return;
			}
			
			$(obj).closest('form').find('tbody.dataBody > tr[data-no=' + ($(obj).closest('form').find('tbody.dataBody > tr').last().attr("data-no") * 1) + ']').remove();
			
			$(obj).closest("form").find(".temp_bodycnt").val($(obj).closest('form').find('tbody.dataBody > tr').length);
		}
		
		var checkedAll = function(obj) {
			if ($(obj).closest("form").find("input.checkedTarget:checked").length == 0) {
				alert("선택된 항목이 없습니다.");
				return;
			}
			
			$(obj).closest("form").find("input.checkedTarget:checked").closest("tr").find(".surveyInputCheckbox").val("1");
			resetBox(obj);
		}
		
		var uncheckedAll = function(obj) {
			if ($(obj).closest("form").find("input.checkedTarget:checked").length == 0) {
				alert("선택된 항목이 없습니다.");
				return;
			}
			
			$(obj).closest("form").find("input.checkedTarget:checked").closest("tr").find(".surveyInputCheckbox").val("0");
			resetBox(obj);
		}
		

		var fileSave = function(obj) {
			var $form = $(obj).closest("form");
			var frm = $form.get(0);
			
			if (frm) {			
				if (confirm(frm.fileName.value ? (frm.fileName.value.match(/[^\\]+$/)[0] + " 파일을 저장하시겠습니까?") : "파일을 삭제하시겠습니까?")) {
					frm.returnLocation.value = window.location.href;
					frm.submit();
				} else {
					frm.reset();
				}
			}
		}
		