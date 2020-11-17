function makeTable(data){
  let table = document.createElement("table")
  let tbody = document.createElement("tbody")
  let thead = document.createElement("thead")
  let htr = document.createElement("tr")
  Object.keys(data[0]).forEach(h=>{
    let cell = document.createElement("th")
    cell.appendChild(document.createTextNode(h))
    htr.appendChild(cell)
  })
  thead.appendChild(htr)
  table.appendChild(thead)
  data.forEach(x=>{
    let row = document.createElement("tr")
    Object.keys(x).forEach(yy=>{
      let y = x[yy]
      let cell = document.createElement("td")
      cell.appendChild(document.createTextNode(y))
      row.appendChild(cell)
    })
    tbody.appendChild(row)
  })
  table.appendChild(tbody)
  document.getElementById("table").innerHTML = ""
  document.getElementById("table").appendChild(table)
}
