function isMobile() {
  return /Mobi/.test(navigator.userAgent);
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function bco() {
  $("#iTpO").prop("checked", true);
  $("#iTpO").prop("checked", true).trigger("click");
  $("#pesoSca").val("130");
  if (!isMobile()) {
    var selec = document.getElementById("pesoAni");
    selec.focus();
    selec.setSelectionRange(0, selec.value.length);
  }
  return false;
}

function bca() {
  $("#iOpO").prop("checked", true);
  $("#iOpO").prop("checked", true).trigger("click");
  $("#pesoSca").val("140");
  if (!isMobile()) {
    var selec = document.getElementById("pesoAni");
    selec.focus();
    selec.setSelectionRange(0, selec.value.length);
  }
  return false;
}

function cTotal() {
  var anim = $('input[name=animales]:checked').val();
  var sca = round(parseFloat($('input[name=scalas]:checked').val()) / 10, 2);
  var pSca = $("#pesoSca").val();
  var pAni = $("#pesoAni").val();
  var aPrec = $("#aniPrec").val();
  if (isNaN(pSca) || isNaN(pAni) || isNaN(aPrec)) {
    return false;
  }
  var nuevoP = aPrec - ((pAni - pSca) * sca)
  var tot = pAni * nuevoP;
  var arr = [anim, sca, pSca, pAni, aPrec, nuevoP, tot];

  var tableRef = document.getElementById("cvgHist").getElementsByTagName("tbody")[0];
  var newRow   = tableRef.insertRow(tableRef.rows.length);
  var newCell;
  for(i = 0; i < 7; i++) {
    newCell  = newRow.insertCell(i);
    var newText  = document.createTextNode(arr[i]);
    newCell.appendChild(newText);
  }
  newCell.classList.add("ttl");

  var sum = 0;
  // iterate through each td based on class and add the values

  $(".ttl").each(function() {

      var value = $(this).text();
      // add only if the value is number
      if(!isNaN(value) && value.length != 0) {
          sum += parseFloat(value);
      }
  });

  $("#cmtot").html(sum);

  if (!isMobile()) {
    var selec = document.getElementById("pesoAni");
    selec.focus();
    selec.setSelectionRange(0, selec.value.length);
  }

  return false;
}

$(document).keypress(function(e){
    if (e.which == 13){
        $("#calcu").click();
    }
});

onload = bco;