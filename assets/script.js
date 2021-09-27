// WHEN I open the planner                                     \
// THEN the current day is displayed at the top of the calendar/ - DONE

// WHEN I scroll down                                             \
// THEN I am presented with timeblocks for standard business hours/ - DONE

// WHEN I view the timeblocks for that day                                                     \
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future/ - DONE

// WHEN I click into a timeblock\
// THEN I can enter an event    / - DONE

// WHEN I click the save button for that timeblock       \
// THEN the text for that event is saved in local storage/ - DONE

// WHEN I refresh the page      \
// THEN the saved events persist/ - DONE


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

function Day() {

    var date = moment().format("dddd, MMMM Do")
    DayDisplay.textContent = date
}

function DisplayRows() {

    var localnine = localStorage.getItem("nine")
    var localten = localStorage.getItem("ten")
    var localeleven = localStorage.getItem("eleven")
    var localtwelve = localStorage.getItem("twelve")
    var localone = localStorage.getItem("one")
    var localtwo = localStorage.getItem("two")
    var localthree = localStorage.getItem("three")
    var localfour = localStorage.getItem("four")
    var localfive = localStorage.getItem("five")

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

function Save() {

    var nine = $("#nine-text").val()
    var ten = $("#ten-text").val()
    var eleven = $("#eleven-text").val()
    var twelve = $("#twelve-text").val()
    var one = $("#one-text").val()
    var two = $("#two-text").val()
    var three = $("#three-text").val()
    var four = $("#four-text").val()
    var five = $("#five-text").val()  

    localStorage.setItem("nine", nine)
    localStorage.setItem("ten", ten)
    localStorage.setItem("eleven", eleven)
    localStorage.setItem("twelve", twelve)
    localStorage.setItem("one", one)
    localStorage.setItem("two", two)
    localStorage.setItem("three", three)
    localStorage.setItem("four", four)
    localStorage.setItem("five", five)

    DisplayRows()
}

function Clear() {

}

function isBetween() {

    var times = [nineAM,tenAM,elevenAM,twelvePM,onePM,twoPM,threePM,fourPM,fivePM]
    var between = []

    for (let i= 0;i<8;i++) {

        var a = times[0]
        var b = times[1]
    
        if (moment().isBetween(a, b)) {
            between.push(a)
        }

        times.shift(a)
    }

    if (between.includes(nineAM)) {
        rownine.setAttribute("style", "background-color: blue")
    } else if (between.includes(tenAM)) {
        rowten.setAttribute("style", "background-color: blue")
    }  else if (between.includes(elevenAM)) {
        roweleven.setAttribute("style", "background-color: blue")
    }  else if (between.includes(twelvePM)) {
        rowtwelve.setAttribute("style", "background-color: blue")
    }  else if (between.includes(onePM)) {
        rowone.setAttribute("style", "background-color: blue")
    }  else if (between.includes(twoPM)) {
        rowtwo.setAttribute("style", "background-color: blue")
    } else if (between.includes(threePM)) {
        rowthree.setAttribute("style", "background-color: blue")
    }  else if (between.includes(fourPM)) {
        rowfour.setAttribute("style", "background-color: blue")
    }  else if (between.includes(fivePM)) {
        rowfive.setAttribute("style", "background-color: blue")
    }
}

function Moment() {

    var times = [nineAM,tenAM,elevenAM,twelvePM,onePM,twoPM,threePM,fourPM,fivePM]

    var before = []
    var after = []

    for (let i of times) {

        if (i.isBefore()) {
            before.push(i)
        } else if (i.isAfter()) {
            after.push(i)
        }
    }

    if (before.includes(nineAM)) {
        rownine.setAttribute("style", "background-color: gray")
    }if (before.includes(tenAM)) {
        rowten.setAttribute("style", "background-color: gray")
    }if (before.includes(elevenAM)) {
        roweleven.setAttribute("style", "background-color: gray")
    }if (before.includes(twelvePM)) {
        rowtwelve.setAttribute("style", "background-color: gray")
    }if (before.includes(onePM)) {
        rowone.setAttribute("style", "background-color: gray")
    }if (before.includes(twoPM)) {
        rowtwo.setAttribute("style", "background-color: gray")
    }if (before.includes(threePM)) {
        rowthree.setAttribute("style", "background-color: gray")
    }if (before.includes(fourPM)) {
        rowfour.setAttribute("style", "background-color: gray")
    }if (before.includes(fivePM)) {
        rowfive.setAttribute("style", "background-color: gray")
    }

    if (after.includes(nineAM)) {
        rownine.setAttribute("style", "background-color: green")
    }if (after.includes(tenAM)) {
        rowten.setAttribute("style", "background-color: green")
    }if (after.includes(elevenAM)) {
        roweleven.setAttribute("style", "background-color: green")
    }if (after.includes(twelvePM)) {
        rowtwelve.setAttribute("style", "background-color: green")
    }if (after.includes(onePM)) {
        rowone.setAttribute("style", "background-color: green")
    }if (after.includes(twoPM)) {
        rowtwo.setAttribute("style", "background-color: green")
    }if (after.includes(threePM)) {
        rowthree.setAttribute("style", "background-color: green")
    }if (after.includes(fourPM)) {
        rowfour.setAttribute("style", "background-color: green")
    }if (after.includes(fivePM)) {
        rowfive.setAttribute("style", "background-color: green")
    }

    isBetween()
}

Tbody.on("click", ".button", Save);

Day();
DisplayRows();
Moment();

