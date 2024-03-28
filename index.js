//initialize the count as zero
//listen to the button and increment count when it is pressed
//change the count-el in the html


let countEL = document.getElementById("count-el")
let count=0;
let cust = "CU1O"
let chk = 0;

function increment(){
    count+=1
    countEL.innerText=count
}

function reset(){
    count=0
    countEL.innerText=count
}
var tabledata=[]

function save(){
    var newE = {ID: cust+chk , Count: count}
    tabledata.push(newE)
    var tablehtml = '<table><tr><th>ID</th><th>No. of people</th></tr>'
    tabledata.forEach(function(item){
        tablehtml+='<tr>'
        tablehtml+='<td>'+item.ID+'</td>'
        tablehtml+='<td>'+item.Count+'</td>'
        tablehtml+='</tr>'
    })
    tablehtml+='</table>'
    document.getElementById("tablecontainer").innerHTML=tablehtml
        // console.log(tablehtml)
    chk++;
}

function Clr(){
    var tablehtml = '<h3>All clear!</h3>'
    tabledata.length=0
    document.getElementById("tablecontainer").innerHTML=tablehtml;
}
