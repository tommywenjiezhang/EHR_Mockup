const form = document.querySelector('.js-form');


form.addEventListener('submit', event => {
event.preventDefault();
console.log(event.target)
var $i =$(`<tr class= "record"></tr>`)
var icd  = "";
  for (var i = 0; i < event.target.length-1; i++) {
    $i.append(`<td>${event.target[i].value}</td>`)
  }
  for (var i = 0; i < symptoms.length; i++) {
    console.log($i.first().val())
    if (symptoms[i].Symptom == event.target[0].value) {
      icd = symptoms[i]["Code"]
    }
  }
$i.append(`<td>${icd}</td>`)
$("#syptom").append($i)
$i.append("<button>remove</button>")
$("button").click(function(){
  $j= this.parentElement
  $j.remove()
})
})

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
  }
  patientName.forEach(val => val.addEventListener("click",function(){
    var name = val.innerText
     $("#patientname").text(name)
     $("#patientDOB").text(findPatient(name)["Birthday"])
     $("#patientPhone").text(findPatient(name)["Phone"])
     $("#patientEmail").text(findPatient(name)["Email"])
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


function pushPatientData(data){
  var items = [];
  for (var i = 0; i < 10; i++) {
    var lastName =  data[i]["Name"];
     items.push(lastName);
  }
items.forEach(val => $(".sidenav").append("<a class='patientsName' href='#''>" + val +"</a>") )



  // for (var i = 0; i < 10; i++) {
  //   var iter = data[i];
  //   $.each(symptoms[i], function( key, val ) {
  //     if(key == "name"){
  //       $(".sidenav").append( "<a>" + val.last + "," + val.first + "</a>" );
  //       console.log(val.last)
  //     }
  //   });
  // }
}
