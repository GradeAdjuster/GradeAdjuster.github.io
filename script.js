function grade_ammend() {
    input_text = parseInt(document.getElementById("grade").value)
    outOf=100
    canMarks=outOf*(input_text/100)
    finalGradeIncr = (12.67*(outOf/100)) - (0.0756*(canMarks))
    totalGrade = finalGradeIncr+canMarks
    output_div = document.getElementById("output")
    output_div.textContent = Math.round((totalGrade/outOf)*100)

    totalmarks = parseInt(document.getElementById("total").value)
    if (totalmarks == null) {
        return
    }
    else {
        marks = totalmarks * (totalGrade/100)
        output1_div = document.getElementById("output1")
        output1_div.textContent = "Total marks: " + Math.round(marks)
    }
}

function showInput() {
    var checkbox = document.getElementById("check").checked

    if (checkbox == true) {
        document.getElementById("h2mark").style.display = "block"
        document.getElementById("total").style.display = "block"
    }
    else if (checkbox == false) {
        document.getElementById("h2mark").style.display = "none"
        document.getElementById("total").style.display = "none"
    }
}



fetch("./header/header.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.getElementById("myTopnav").innerHTML = data;
});