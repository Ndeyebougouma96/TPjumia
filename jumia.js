var slide= new Array("imog/fol1.jpg","imog/fol3.jpg","imog/fol4.jpg","imog/1.gif");
var numero = 0;


function changesSlide(sens){
    numero = numero + sens;
    if(numero < 0)
    numero = slide.length -1;
    if(numero > slide.length -1)
    numero = 0;
    document.getElementById("slide").src = slide[numero];

}
setInterval("changesSlide(1)",4000);

const che1 =document.querySelectorAll(".che1");
const che2 =document.querySelectorAll(".che2");
che1.disabled =true;

const sliderBas=()=>{
    const img1 = document.querySelectorAll('.bas1');
    const img2 = document.querySelectorAll('.bas2');

    for(let i=0; i<img1.length; i++){
        const mamy1 = img1[i];
         const mamy2 = img2[i];
         if(mamy1.style.display == 'block'){
            mamy1.style.display = 'none';
            mamy2.style.display = 'block';
            che2.disabled =true;
              che1.disabled =false;
         }
         else{
            mamy1.style.display = 'block';
            mamy2.style.display = 'none';
             che1.disabled =true;
            che2.disabled =false;
             
         }
    }
}