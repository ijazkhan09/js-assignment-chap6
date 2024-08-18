var currentTab = 0; 
showTab(currentTab); 
var form = document.querySelector("form")
var popup = document.querySelector(".result");
var closebtn = document.querySelector(".close_btn")
closebtn.addEventListener("click", function(){
  window.location.reload()
})
form.addEventListener("submit", function(e){
    e.preventDefault()
})
function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    form.style.display = "none";
    popup.classList.remove("hidden")
  }
  ShowResultFunction()
  showTab(currentTab);
}

function ShowResultFunction(){
  var inputs = document.querySelectorAll(".inputs")
  var popup_input = document.querySelectorAll(".popup_input")
  var total_Mark = document.querySelector(".total_marks_show")
  var obtains_marks = document.querySelector(".obtains_marks")
  var percantages_end = document.querySelector(".percantages_end")
  var sub1 = inputs[0].value
  var sub2 = inputs[1].value
  var sub3 = inputs[2].value
  var sub4 = inputs[3].value
  var sub5 = inputs[4].value
  var sub6 = inputs[5].value
  // obtained mark 
  var obmark1 = parseInt(inputs[6].value)
  var obmark2 = parseInt(inputs[7].value)
  var obmark3 = parseInt(inputs[8].value)
  var obmark4 = parseInt(inputs[9].value)
  var obmark5 = parseInt(inputs[10].value)
  var obmark6 = parseInt(inputs[11].value)
  // total marks 
  var totalM1 = parseInt(inputs[12].value)
  var totalM2 = parseInt(inputs[13].value)
  var totalM3 = parseInt(inputs[14].value)
  var totalM4 = parseInt(inputs[15].value)
  var totalM5 = parseInt(inputs[16].value)
  var totalM6 = parseInt(inputs[17].value)
  inputs[6].placeholder = "Enter Obtained marks of" + " " + sub1
  inputs[7].placeholder = "Enter Obtained marks of"+ " " + sub2
  inputs[8].placeholder = "Enter Obtained marks of"+ " " + sub3
  inputs[9].placeholder = "Enter Obtained marks of"+ " " + sub4
  inputs[10].placeholder = "Enter Obtained marks of"+ " " + sub5
  inputs[11].placeholder = "Enter total marks of"+ " " + sub6
  inputs[12].placeholder = "Enter total marks of" + " " + sub1
  inputs[13].placeholder = "Enter total marks of"+ " " + sub2
  inputs[14].placeholder = "Enter total marks of"+ " " + sub3
  inputs[15].placeholder = "Enter total marks of"+ " " + sub4
  inputs[16].placeholder = "Enter total marks of"+ " " + sub5
  inputs[17].placeholder = "Enter total marks of"+ " " + sub6

  var sub1percantage = (obmark1 / totalM1) * 100 + "%"
  var sub2percantage = (obmark2 / totalM2) * 100 + "%";
  var sub3percantage = (obmark3 / totalM3) * 100 + "%";
  popup_input[0].innerHTML = sub1
  popup_input[1].innerHTML = sub2
  popup_input[2].innerHTML = sub3
  popup_input[3].innerHTML = sub1
  popup_input[4].innerHTML = sub5
  popup_input[5].innerHTML = sub6
  popup_input[6].innerHTML = obmark1
  popup_input[7].innerHTML = obmark2
  popup_input[8].innerHTML = obmark3
  popup_input[9].innerHTML = obmark4
  popup_input[10].innerHTML = obmark5
  popup_input[11].innerHTML = obmark6
  popup_input[12].innerHTML = totalM1
  popup_input[13].innerHTML = totalM2
  popup_input[14].innerHTML = totalM3
  popup_input[15].innerHTML = totalM4
  popup_input[16].innerHTML = totalM5
  popup_input[17].innerHTML = totalM6
  popup_input[18].innerHTML = sub1percantage
  popup_input[19].innerHTML = sub2percantage
  popup_input[20].innerHTML = sub3percantage
  popup_input[21].innerHTML = sub1percantage
  popup_input[22].innerHTML = sub2percantage
  popup_input[23].innerHTML = sub3percantage

  var total = totalM1 + totalM2 + totalM3 + totalM4 + totalM5 + totalM6
  var obtain_total = obmark1 + obmark2 + obmark3 + obmark4 + obmark5 + obmark6
  var percantages = (obtain_total / total) * 100
  total_Mark.innerHTML = "Total Mark" + " " + total
  obtains_marks.innerHTML = "Obtained Mark" + " " +  obtain_total
  percantages_end.innerHTML = "Your Percantages is" + " " +  percantages.toFixed(2) + "%"
  
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}