function createGrid(){
  var table =[];

  for(var i=0; i<32; i++){
  table.push(Array(32).fill(false));
}
return table;
}
//This is making 32 arrays of 32
//console.log(createGrid());
var table = createGrid();

function setCellElement(table, x, y){
  table[y][x] = !table[y][x];
  drawTable(table, setCellElement);
}

function drawTable(table, selectFn){
  var tableRef = document.querySelector('table');
  tableRef.innerHTML = '';
  var tableRows = table.map(function(row, y){
    var tr = document.createElement('tr');
    row.map(function(cell, x){
      var td = document.createElement('td');
      td.addEventListener('click', function(){
        selectFn(table, x, y);
      })
      if(cell === true){
        td.style.backgroundColor = "black";
      }else{
        td.style.backgroundColor = "white";
      }
      //Creating elements for the table and setting colors
      return td;
    })
    .forEach(function(td){
      tr.appendChild(td);
    })
    return tr;
  })
  .forEach(function(tr){
    tableRef.appendChild(tr);
  })
  //Connecting elements to the table
}

drawTable(table, setCellElement);
