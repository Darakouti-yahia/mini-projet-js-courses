

var el = document.querySelector('#content');
var all=document.querySelector('#all');
var cat1=document.querySelector('#html');
var cat2=document.querySelector('#css');
var cat3=document.querySelector('#php');
var cat4=document.querySelector('#js');
var enter=document.querySelector('.search');
var pr=document.querySelector('.slid');


function creationCourses(image, titre, prix) {
    let div = document.createElement('div'),
        img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');
      
    img.src = image;
    
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);
    span.appendChild(document.createTextNode(prix));
    div.setAttribute('class', 'card col-3 me-3 mb-3');
img.style.height="250 px";
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

    el.append(div);
}

courses.forEach((v) => {
    creationCourses(v.path, v.title, v.price);
})


  

cat1.addEventListener('click',function(){
    el.innerHTML="";
    var fcat=courses.filter(v => {
        return v.category === 'HTML';
    })
   
fcat.forEach((v) => {
    creationCourses(v.path, v.title, v.price);
    
})

})
cat2.addEventListener('click',function(){
    el.innerHTML="";
    var fcat2=courses.filter(v => {
        return v.category === 'css';
    })
   
fcat2.forEach((v) => {
    creationCourses(v.path, v.title, v.price);
    
})

})
cat3.addEventListener('click',function(){
    el.innerHTML="";
    var fcat3=courses.filter(v => {
        return v.category === 'php';
    })
   
fcat3.forEach((v) => {
    creationCourses(v.path, v.title, v.price);
    
})

})

cat4.addEventListener('click',function(){
    el.innerHTML="";
    var fcat=courses.filter(v => {
        return v.category === 'js';
    })
   
fcat.forEach((v) => {
    creationCourses(v.path, v.title, v.price);
    
})

})
all.addEventListener('click',function(){
    el.innerHTML="";
  
courses.forEach((v) => {
    creationCourses(v.path, v.title, v.price);
    
})

})




enter.addEventListener('input',function(){
    st=document.querySelector(".search").value;
    el.innerHTML="";
 var result= courses.filter(v => {
    return v.title.includes(st) ;
  })
  result.forEach((v) => {
    creationCourses(v.path, v.title, v.price);
    
})
}
  

)
 

function updateTextInput(val) {
    document.getElementById('textInput').value='$'+val; 
}

  val2=document.getElementById("slider");
  
    function slider(){
        el.innerHTML="";
    for(i=0;i<courses.length;i++){

        if(parseInt(courses[i].price.slice(1))<=val2.value){
           
            creationCourses(courses[i].path, courses[i].title, courses[i].price);
        }
    }
}
   