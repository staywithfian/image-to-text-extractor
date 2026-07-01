function textextractor(){
const inp = document.getElementById('input');
const btn = document.getElementById('btn');
const div = document.getElementById('div');


const inpu = inp.files[0];
if(!inpu){
    div.textContent = "No file Selected";
}

Tesseract.recognize(
    inpu,
    'eng'
).then( ({data}) =>{

div.textContent = data.text;

}).catch( (error) =>{
console.log('Error',error)
div.textContent = "An Error Occured"
});

}

