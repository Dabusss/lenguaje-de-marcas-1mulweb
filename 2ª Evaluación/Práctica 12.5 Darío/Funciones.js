function rojo(id_objeto) {
    document.getElementById(id_objeto).style.border = "2px solid red";
    document.getElementById(id_objeto).style.outline = "none";
}
function normal(id_objeto) {
    document.getElementById(id_objeto).style.border = "";
}  

function oscurecer(id_objeto) {
    document.getElementById(id_objeto).style.backgroundColor = "grey"
}
function aclarar(id_objeto) {
    document.getElementById(id_objeto).style.backgroundColor = "ivory"
}
function alerta_envio() {
    alert('Se van a enviar los datos introducidos.')
}
function alerta_reset() {
    confirm('Se van a reiniciar los datos introducidos')
}
function fecha (){
    alert(new Date().toLocaleDateString())
}