// QUERY SELECTORS
var DayDisplay = document.querySelector("#currentDay")
var Tbody = $("#Tbody")
var nine = $("#nine-text")
var ten = $("#ten-text")
var eleven = $("#eleven-text")
var twelve = $("#twelve-text")
var one = $("#one-text")
var two = $("#two-text")
var three = $("#three-text")
var four = $("#four-text")
var five = $("#five-text")

// ROWS
var rownine = document.querySelector("#nine")
var rowten = document.querySelector("#ten")
var roweleven = document.querySelector("#eleven")
var rowtwelve = document.querySelector("#twelve")
var rowone = document.querySelector("#one")
var rowtwo = document.querySelector("#two")
var rowthree = document.querySelector("#three")
var rowfour = document.querySelector("#four")
var rowfive = document.querySelector("#five")

// MOMENTS
var format = 'hh:mm:a'
var nineAM = moment("09:00:am", format)
var tenAM = moment("10:00:am", format)
var elevenAM = moment("11:00:am", format)
var twelvePM = moment("12:00:pm", format)
var onePM = moment("1:00:pm", format)
var twoPM = moment("2:00:pm", format)
var threePM = moment("3:00:pm", format)
var fourPM = moment("4:00:pm", format)
var fivePM = moment("5:00:pm", format)
var sixPM = moment("6:00:pm", format)

// Displays current day
function Day() {

    var date = moment().format("dddd, MMMM Do")
    DayDisplay.textContent = date
}

// Saves values when save button is pressed
// (called by Tbody.on("click", ".button", Save))
function Save() {

    // gets values from inputs
    var nine = $("#nine-text").val()
    var ten = $("#ten-text").val()
    var eleven = $("#eleven-text").val()
    var twelve = $("#twelve-text").val()
    var one = $("#one-text").val()
    var two = $("#two-text").val()
    var three = $("#three-text").val()
    var four = $("#four-text").val()
    var five = $("#five-text").val()  

    // sets localstorage to value
    localStorage.setItem("nine", nine)
    localStorage.setItem("ten", ten)
    localStorage.setItem("eleven", eleven)
    localStorage.setItem("twelve", twelve)
    localStorage.setItem("one", one)
    localStorage.setItem("two", two)
    localStorage.setItem("three", three)
    localStorage.setItem("four", four)
    localStorage.setItem("five", five)

    // then calls DisplayRows()
    DisplayRows()
}

// Displays rows based on localstorage
function DisplayRows() {

    // gets localstorage values
    var localnine = localStorage.getItem("nine")
    var localten = localStorage.getItem("ten")
    var localeleven = localStorage.getItem("eleven")
    var localtwelve = localStorage.getItem("twelve")
    var localone = localStorage.getItem("one")
    var localtwo = localStorage.getItem("two")
    var localthree = localStorage.getItem("three")
    var localfour = localStorage.getItem("four")
    var localfive = localStorage.getItem("five")

    // if get value is not null
    // displays value in row
    if (localnine != null) {
        nine.val(localnine)
    }
    if (localten != null) {
        ten.val(localten)
    }
    if (localeleven != null) {
        eleven.val(localeleven)
    }
    if (localtwelve != null) {
        twelve.val(localtwelve)
    }
    if (localone != null) {
        one.val(localone)
    }
    if (localtwo != null) {
        two.val(localtwo)
    }
    if (localthree != null) {
        three.val(localthree)
    }
    if (localfour != null) {
        four.val(localfour)
    }
    if (localfive != null) {
        five.val(localfive)
    }  
}

// Checks if elements in MOMENTS are before or after current time
function BeforeAfter() {

    // array holding MOMENTS
    var times = [nineAM,tenAM,elevenAM,twelvePM,onePM,twoPM,threePM,fourPM,fivePM]

    var before = []
    var after = []

    for (let i of times) {

        // if i is before current time
        // appends to [before]
        if (i.isBefore()) {
            before.push(i)

            // if i is after current time
            // appends to [after]
        } else if (i.isAfter()) {
            after.push(i)
        }
    }

    // sets class to past if in [before]
    if (before.includes(nineAM)) {
        rownine.setAttribute("class", "past")
    }if (before.includes(tenAM)) {
        rowten.setAttribute("class", "past")
    }if (before.includes(elevenAM)) {
        roweleven.setAttribute("class", "past")
    }if (before.includes(twelvePM)) {
        rowtwelve.setAttribute("class", "past")
    }if (before.includes(onePM)) {
        rowone.setAttribute("class", "past")
    }if (before.includes(twoPM)) {
        rowtwo.setAttribute("class", "past")
    }if (before.includes(threePM)) {
        rowthree.setAttribute("class", "past")
    }if (before.includes(fourPM)) {
        rowfour.setAttribute("class", "past")
    }if (before.includes(fivePM)) {
        rowfive.setAttribute("class", "past")
    }

    // sets class to future if in [after]
    if (after.includes(nineAM)) {
        rownine.setAttribute("class", "future")
    }if (after.includes(tenAM)) {
        rowten.setAttribute("class", "future")
    }if (after.includes(elevenAM)) {
        roweleven.setAttribute("class", "future")
    }if (after.includes(twelvePM)) {
        rowtwelve.setAttribute("class", "future")
    }if (after.includes(onePM)) {
        rowone.setAttribute("class", "future")
    }if (after.includes(twoPM)) {
        rowtwo.setAttribute("class", "future")
    }if (after.includes(threePM)) {
        rowthree.setAttribute("class", "future")
    }if (after.includes(fourPM)) {
        rowfour.setAttribute("class", "future")
    }if (after.includes(fivePM)) {
        rowfive.setAttribute("class", "future")
    }

    isBetween()
}

// Checks if current time is in between two MOMENTS
function isBetween() {

    // array holding MOMENTS
    var times = [nineAM,tenAM,elevenAM,twelvePM,onePM,twoPM,threePM,fourPM,fivePM,sixPM]

    var between = []

    for (let i= 0;i<9;i++) {

        var a = times[0]
        var b = times[1]
    
        // if current time is between two MOMENTS
        // appends MOMENT to [between]
        if (moment().isBetween(a, b)) {
            between.push(a)
        }

        // removes element in first index after each check
        times.shift(a)
    }

    // if MOMENTS are in [between]
    // sets class to present
    if (between.includes(nineAM)) {
        rownine.setAttribute("class", "present")
    } else if (between.includes(tenAM)) {
        rowten.setAttribute("class", "present")
    }  else if (between.includes(elevenAM)) {
        roweleven.setAttribute("class", "present")
    }  else if (between.includes(twelvePM)) {
        rowtwelve.setAttribute("class", "present")
    }  else if (between.includes(onePM)) {
        rowone.setAttribute("class", "present")
    }  else if (between.includes(twoPM)) {
        rowtwo.setAttribute("class", "present")
    } else if (between.includes(threePM)) {
        rowthree.setAttribute("class", "present")
    }  else if (between.includes(fourPM)) {
        rowfour.setAttribute("class", "present")
    }  else if (between.includes(fivePM)) {
        rowfive.setAttribute("class", "present")
    }
}

Day();
DisplayRows();
BeforeAfter();

// Event listener for save buttons
Tbody.on("click", ".button", Save);