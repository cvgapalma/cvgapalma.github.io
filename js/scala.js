function bco() {
  $("#iTpO").prop("checked", true);
  $("#iTpO").prop("checked", true).trigger("click");
  $("#pesoSca").val("130");
  var selec = document.getElementById("pesoAni");
  selec.focus();
  selec.setSelectionRange(0, selec.value.length);
}

function bca() {
  $("#iOpO").prop("checked", true);
  $("#iOpO").prop("checked", true).trigger("click");
  $("#pesoSca").val("120");
  var selec = document.getElementById("pesoAni");
  selec.focus();
  selec.setSelectionRange(0, selec.value.length);
}

function cTotal() {
  var anim = $('input[name=animales]:checked').val();
  var sca = parseFloat($('input[name=scalas]:checked').val()) / 10;
  var pSca = $("#pesoSca").val();
  var pAni = $("#pesoAni").val();
  var aPrec = $("#aniPrec").val();
  var tot = pAni * (aPrec - ((pAni - pSca) * sca));
  var arr = [anim, sca, pSca, pAni, aPrec, tot];

  var tableRef = document.getElementById("cvgHist").getElementsByTagName("tbody")[0];
  var newRow   = tableRef.insertRow(tableRef.rows.length);
  for(i = 0; i < 6; i++) {
    var newCell  = newRow.insertCell(i);
    var newText  = document.createTextNode(arr[i]);
    newCell.appendChild(newText);
  }

  var selec = document.getElementById("pesoAni");
  selec.focus();
  selec.setSelectionRange(0, selec.value.length);
  console.log(tot);
  return false;
}

$(document).keypress(function(e){
    if (e.which == 13){
        $("#calcu").click();
    }
});

onload = bco;