const form = document.querySelector('.js-form');
const sidebar = document.getElementById('sidenav');
const button = document.getElementById('toggle');


$('#toggle').click(
  function(){
    sidebar.classList.toggle('collapsed');
    $( "#toggle" ).children().toggleClass('fa-toggle-off fa-toggle-on')
  }
)


form.addEventListener('submit', event => {
event.preventDefault();
console.log(event.target)
var $i =$(`<tr class= "record"></tr>`)
var icd  = "";
  for (var i = 0; i < event.target.length-1; i++) {
    if(i != 2){
        $i.append(`<td>${event.target[i].value}</td>`)
    }
  }
  for (var i = 0; i < symptoms.length; i++) {
    console.log($i.first().val())
    if (symptoms[i].Symptom == event.target[0].value) {
      icd = symptoms[i]["Code"]
    }
  }


$("#reviewModalMedication").append(event.target[2].value)

$i.append(`<td>${icd}</td>`)
$("#syptom").append($i)
$i.append("<i class='far fa-trash-alt'></i>")
$(".far").click(function(){
  $j= this.parentElement
  $j.remove()
})

$('#exampleModalLong').modal('show');
})




$('#todayDate').text(new Date().toLocaleDateString())
// Place Order
$('#submitMed').click(function() {
  $('#exampleModalLong').modal('show');
});
$('#easyEditor').click(function() {
  $('#modal4').modal('show');

});
$("#modalSaveChange").click(function(){
  $("#textNode").text(`Subjective
Patient complaints of low back pain. He says his pain started on December 3th. He rated his pain 7/10.
Vitals
Blood Pressure: 120/80
PulO2:98%
Blood Glucose:88%
Level of Pain: 7/10
Temperature: 98 F
Does Patient Smoke:  No
Does Patient Drink: No
How often Na
`)
$('#modal4').modal('hide')
})

$('#modalReviewChange').click(function() {
  $('#modal5').modal('show');
  $('#modal2').modal('hide');
});
$("#proccedModal").click(function() {
  $("#modal2").modal('show');
  $('#exampleModalLong').modal('hide');
  $("#modalPatientsName").text($("#patientname").text())
});


// pushing patient data
$(function(){
  pushPatientData(patients)
  var patientName = document.querySelectorAll(".patientsName")
  if(patients.length > 0){
    var firstPatientName = patients[0].Name
    $("#patientname").text(firstPatientName)
    $("#patientDOB").text(findPatient(firstPatientName)["Birthday"])
    $("#patientPhone").text(findPatient(firstPatientName)["Phone"])
    $("#patientEmail").text(findPatient(firstPatientName)["Email"])
    $("#patientAllergy").text(findPatient(firstPatientName)["Allergy"])
    $("#patientMedication").text(findPatient(firstPatientName)["Medication"])

  }
  patientName.forEach(val => val.addEventListener("click",function(){
    var name = val.innerText
     $("#patientname").text(name)
     $("#patientDOB").text(findPatient(name)["Birthday"])
     $("#patientPhone").text(findPatient(name)["Phone"])
     $("#patientEmail").text(findPatient(name)["Email"])
     $("#patientAllergy").text(findPatient(name)["Allergy"])
     $("#patientMedication").text(findPatient(name)["Medication"])

  })
  )
})



// pushing syptomdata
$(function(){
  var $symptomitems = $("<datalist id=syptomsresults></datalist>")
  for (var i = 0; i < symptoms.length; i++) {
    $.each(symptoms[i], function( key, val ) {
      if(key == "Symptom"){
        $symptomitems.append( "<option>" + val + "</option>" );
      }
    });
    $($symptomitems).appendTo("#syptomsdropdown");
  }
});


$(function(){
  var $medicationitems = $("<datalist id='medicationresults'></datalist>")
  for (var i = 0; i < symptoms.length; i++) {
    $.each(medications[i], function( key, val ) {
      if(key == "Medication"){
        $medicationitems.append( "<option>" + val + "</option>" );
      }
    });
    $($medicationitems).appendTo("#medName");
  }
});

function findPatient(name){
  var patient ={}
  for (var i = 0; i < patients.length; i++) {
    if(patients[i]["Name"] == name){
      patient = patients[i]
    }
  }
  console.log(patient)
  return patient
}

function randomDate(start, end, startHour, endHour) {
  var date = new Date(+start + Math.random() * (end - start));
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date;
}

function pushPatientData(data){
  var items = [];
  for (var i = 0; i < 10; i++) {
    var lastName =  data[i]["Name"];
     items.push(lastName);
  }

items.forEach((val, index) => $("#content").append("<div class='container patientContainer'><div class='row'><div class='patientPic'><img class='img-fluid' src='lib/randomPeo/" + index + ".jpg'></div><div class='patientAdmittedDate' class='col-md-8'><a href='#' class='patientsName'>" + val +"</a></div></div></div>") )
}
