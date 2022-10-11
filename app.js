function tablePrint() {
    let start = +(document.getElementById('s').value);
    let end = +(document.getElementById('e').value);
    let from = +(document.getElementById('f').value);
    let upto = +(document.getElementById('u').value);

    let myHTML = document.getElementById('out');
    let help = "";

    for (let index = start; index <= end; index++) {

        help += `<div class=" border-2 border-black p-2 rounded shadow-2xl bg-yellow-200 shadow-black ">`;
        for (let index2 = from; index2 <= upto; index2++) {
            help += `<div> ${index} * ${index2}  =  ${index * index2} </div> `;
        }
        help += `</div>`;

    }
    myHTML.innerHTML = help;


}
