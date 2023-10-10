 let output = document.getElementById("output")
function dis(val) {
    document.getElementById("output").value += val;
  }
    
  function solve() {
    let x = document.getElementById("output").value;
   let y = document.getElementById("output").value;
    y = eval(x);

    document.getElementById("output").value = y;
  }
  function clr() {
    document.getElementById('output').value = "";
  }

  function root(){
    output.value=Math.sqrt(output.value)
  }
  
function del(){
  output.value =output.value.substr(0,output.value.length-1)
}
