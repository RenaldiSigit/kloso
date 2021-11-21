function Tampil() {
    Event.preventDefault;
    let nama =  document.Form1.inputNama.value
    let angkatan = document.Form1.inputAngkatan.value
    let jurusan = document.Form1.jurusan.value
    let gender = document.Form1.gender.value
    let alasan = document.Form1.Alasan.value

    document.getElementById("Tampil").innerHTML = (
        "Nama Lengkap   : " + nama + "<br>" +
        "Angkatan  : " + angkatan + "<br>" +
        "Jurusan :" + jurusan + "<br>" +
        "Jenis Kelamin  : " + gender + "<br>" +
        "Alasan : " + alasan + "<br>" 
    );
}
//Function title berjalan
var txt = "Latihan Kloso Live Update Formulir ";
var speed = 500;
var refresh = null;
function action() {
  document.title = txt;
  txt = txt.substring(1, txt.length) + txt.charAt(0);
  refresh = setTimeout("action()", speed);
} action();