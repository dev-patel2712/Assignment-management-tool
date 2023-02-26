let arr = []
let obj = {}





function displayaddassignment() {
  let ta = document.getElementById("ta");
  document.getElementById("submitbutton").classList.remove("submitbuttonenable")
  ta.className = "beforepress"
}

function submit() {

  let t = document.getElementById("title")
  let batchname = document.getElementById("batchname")
  let duedate = document.getElementById("duedate")
  let description = document.getElementById("description")
  if (t.value.trim() == "" || batchname.value.trim() == "" || duedate.value == "" || description.value.trim() == "") {
    alert("ANY OF THE VALUES CANNOT BE BLANK ! ENTER ALL OF THEM")
  }
  else {
    obj = {
      title: t.value,
      batchname: batchname.value,
      duedate: duedate.value,
      description: description.value
    }


    arr.push(obj)
    let ta = document.getElementById("ta");

    let row = document.createElement("TR");

    arr.forEach((item) => {
      row.innerHTML = ""


      document.getElementById("ta").appendChild(row);
      //FIRST COLUMN APPEND
      let titlecolumn = document.createElement("TD");
      var t1 = document.createTextNode(item.title);
      titlecolumn.appendChild(t1);
      row.appendChild(titlecolumn);

      //SECOND COLUMN APPEND

      let batchnamecolumn = document.createElement("TD");
      var t2 = document.createTextNode(item.batchname);
      batchnamecolumn.appendChild(t2);
      row.appendChild(batchnamecolumn);


      //THIRD COLUMN APPEND

      let descriptioncolumn = document.createElement("TD");
      var t3 = document.createTextNode(item.description);
      descriptioncolumn.appendChild(t3);
      row.appendChild(descriptioncolumn);


      //FOURTH COLUMN APPEND

      let duedatecolumn = document.createElement("TD");
      var t4 = document.createTextNode(item.duedate);
      duedatecolumn.appendChild(t4);
      row.appendChild(duedatecolumn);

    })
    alert("ASSIGNMENT ADDED SUCCESSFULLY")

  }
  t.value = ""
  batchname.value = ""
  description.value = ""
  duedate.value = ""

}




function futureassignment() {


  document.getElementById("submitbutton").classList.add("submitbuttonenable")

  let newdate = new Date();

  let newdatewithouttime = newdate.getFullYear() + "-" + (newdate.getMonth() + 1) + "-" + newdate.getDate();

  let t = document.getElementById("ta")
  t.className = "afterpress"
  for (let j = 1; j < t.rows.length; j++) {
    if (newdatewithouttime > t.rows[j].cells[3].innerHTML) {
      t.rows[j].className = "rownovi"
    }
    else {
      t.rows[j].className = "rowvi"
    }

  }
}


function pastassignment() {



  document.getElementById("submitbutton").classList.add("submitbuttonenable")

  let newdate = new Date();

  let newdatewithouttime = newdate.getFullYear() + "-" + (newdate.getMonth() + 1) + "-" + newdate.getDate();

  let t = document.getElementById("ta")




  t.className = "afterpress"
  for (let j = 1; j < t.rows.length; j++) {
    if (newdatewithouttime < t.rows[j].cells[3].innerHTML || newdatewithouttime == t.rows[j].cells[3].innerHTML) {
      t.rows[j].className = "rownovi"
    }
    else {
      t.rows[j].className = "rowvi"
    }


  }
}
