function addnw(){
    

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder','Enter here');
 
    let weOb=document.getElementById("we");
    let weADDButtonOb=document.getElementById("weADDButton");

    weOb.insertBefore(newNode,weADDButtonOb);
}

function added(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder','Enter here');

    let edOb=document.getElementById("ed");
    let EADDButton=document.getElementById("EADDButton");

    edOb.insertBefore(newNode,EADDButton);
}

function addsk(){
    let newNode=document.createElement('input');
    newNode.classList.add("form-control");
    newNode.classList.add("skfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder','Enter here');
    let skob=document.getElementById("sk");
    let skadd=document.getElementById("skadd");

    skob.insertBefore(newNode,skadd);

}

function addpr(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder','Enter here');
    
    let projob=document.getElementById("proj");
    let addproj=document.getElementById("addproj");

    projob.insertBefore(newNode,addproj);

}


//Generate CV

function generateCV(){

    let namefield=document.getElementById("namefield").value;

    let n1=document.getElementById("n1");
    n1.innerHTML=namefield;
//contact
    document.getElementById('ph').innerHTML=document.getElementById('phone').value;

//gmail
 document.getElementById('gm').innerHTML=document.getElementById('gmail').value;
 //git
 document.getElementById('git1').innerHTML=document.getElementById('git').value;
 //linkedin
 document.getElementById('lin').innerHTML=document.getElementById('ldin').value;
 //award
 document.getElementById('awd1').innerHTML=document.getElementById('awd').value;

    
//workexperience

 let woe=document.getElementsByClassName('wefield');  
 let str=""
 for( let e of woe)
 {
    str=str+`<li> ${e.value} </li>`;

 }
  document.getElementById('we1').innerHTML=str;

  //education

  let eoe=document.getElementsByClassName('eqfield');  
 let str1=""
 for( let a of eoe)
 {
    str1=str1+`<li> ${a.value} </li>`;

 }
  document.getElementById('ed1').innerHTML=str1;

  //skill
  let soe=document.getElementsByClassName('skfield');  
 let str2=""
 for( let b of soe)
 {
    str2=str2+`<li> ${b.value} </li>`;

 }
  document.getElementById('sk1').innerHTML=str2;

  //project
  let poe=document.getElementsByClassName('pfield');  
 let str3=""
 for( let c of poe)
 {
    str3=str3+`<li> ${c.value} </li>`;

 }
  document.getElementById('pro1').innerHTML=str3;


  document.getElementById('cv-form').style.display='none';
  document.getElementById('cv-temp').style.display='block';

  



}

function printCV()
{
    window.print();
   
}