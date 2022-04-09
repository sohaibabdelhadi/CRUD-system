

// let courseName=document.getElementById("courseName");
// let courseCategory=document.getElementById("courseCategory");
// let coursePrice=document.getElementById("coursePrice");
// let courseDescription=document.getElementById("courseDescription");
// let data=document.getElementById("data");
// let courses=[];

// function createCourse(){

//     let course = {

//        cName:courseName.value,
//        cCategory:courseCategory.value,
//        cPrice:coursePrice.value,
//        cDescription:courseDescription.value,


//     }

//     courses.push(course);    
//     displayCourse();    
//     clearInput();
// }

// function clearInput(){

//     courseName.value="";
//     courseCategory.value="";
//     coursePrice.value="";
//     courseDescription.value="";
// }

// function displayCourse(){

//     let result=``

//     for(let i=0;i<courses.length;i++){

//         result+=`
//     <tr>
//         <td>${i}</td>
//         <td></td>
//         <td>${courses[i].cName}</td>
//         <td>${courses[i].cCategory}</td>
//         <td>${courses[i].cPrice}</td>
//         <td>${courses[i].cDescription}</td>
//         <td><button><i class="fas fa-edit"></i></button></td>
//         <td><button onclick="deleteCourse(${i})" class="delete"><i class="far fa-trash-alt"></i></button></td>

        
//     </tr>
//         `

//     }
//     console.log(courses);
//     data.innerHTML=result;
// }

// function deleteCourse(id){
//     courses.splice(id,1);
//     displayCourse();
//     console.log(id);
// }





// let courseName=document.getElementById("courseName");
// let courseCategory=document.getElementById("courseCategory");
// let coursePrice=document.getElementById("coursePrice");
// let courseDescription=document.getElementById("courseDescription");
// let data=document.getElementById("data");
// let search=document.getElementById("search");
// let courses=[];
// if(localStorage.getItem("alldata"!=null)){
//     courses=JSON.parse(localStorage.getItem("alldata"));
//     displayCourse();

// }else{
//     courses=[];
// }

    


// function createCourse(){

//     let course={
//          cName:courseName.value,
//          cCategory:courseCategory.value,
//          cPrice:coursePrice.value,
//          cDescription:courseDescription.value,

//     }
//     courses.push(course);
//     localStorage.setItem("alldata",JSON.stringify(courses));
//     displayCourse();
//     clearInput();
    
// }

// function displayCourse(){
//     let result=''

//     for(let i=0; i<courses.length;i++){
//         result+=`
//         <tr>
//     <td>${i}</td>
//     <td>${courses[i].cName}</td>
//     <td>${courses[i].cCategory}</td>
//     <td>${courses[i].cPrice}</td>
//     <td>${courses[i].cDescription}</td>
//     <td><button onclick="updateCourse(${i})"><i class="fas fa-edit"></i></button></td>
//     <td><button onclick="deleteCourse(${i})" class="delete"><i class="far fa-trash-alt"></i></button></td>
// </tr>`
//     }
//     data.innerHTML=result;
// }

// function clearInput(){
//     courseDescription.value="";
//     courseName.value="";
//     coursePrice.value="";
//     courseCategory.value="";
// }

// function updateCourse(id){
//     courses[id].cName=courseName.value;
//     courses[id].cCategory=courseCategory.value;
//     courses[id].cPrice=coursePrice.value;
//     courses[id].cDescription=courseDescription.value;
//     displayCourse();
//     clearInput();
// }


// function deleteCourse(id){
//     courses.splice(id,1);
//     localStorage.setItem("alldata",JSON.stringify(courses));
//     displayCourse();
    
    

// }


// function searchCourse(){

//     let searchValue=search.value
    
//     let result='';

//     for(let i=0; i<courses.length;i++){
//         if(courses[i].cName.toLowerCase().includes(searchValue.toLowerCase()))
//         result+=`
//         <tr>
//     <td>${i}</td>
//     <td>${courses[i].cName}</td>
//     <td>${courses[i].cCategory}</td>
//     <td>${courses[i].cPrice}</td>
//     <td>${courses[i].cDescription}</td>
//     <td><button onclick="updateCourse(${i})"><i class="fas fa-edit"></i></button></td>
//     <td><button onclick="deleteCourse(${i})" class="delete"><i class="far fa-trash-alt"></i></button></td>
// </tr>`
//     }
//     data.innerHTML=result;
// }


// let courseName=document.getElementById("courseName");
// let courseCategory=document.getElementById("courseCategory");
// let coursePrice=document.getElementById("coursePrice");
// let courseDescription=document.getElementById("courseDescription");
// let data=document.getElementById("data");
// let search=document.getElementById("search")
// let courses=[];
// if(localStorage.getItem("alldata")!=null){
//      courses=JSON.parse(localStorage.getItem("alldata"));
//      displayCourse();

// }else{
//     courses=[];
// }
// displayCourse();
// function createCourse(){

//     let course={
//         cName:courseName.value,
//         cCategory:courseCategory.value,
//         cPrice:coursePrice.value,
//         cDescription:courseDescription.value,

       
//     }
//     courses.push(course);
//     localStorage.setItem("alldata",JSON.stringify(courses))
//     displayCourse();
//     clearInput();
    
        

    
// }

// function clearInput(){
//     courseName.value=""
//     courseCategory.value=""
//     coursePrice.value=""
//     courseDescription.value=""
// }


// function displayCourse(){
//     let result=``;

//     for(let i=0;i<courses.length;i++){

//         result+=`
        
//         <tr>
//                      <td>${i}</td>
//                      <td>${courses[i].cName}</td>
//                      <td>${courses[i].cCategory}</td>
//                      <td>${courses[i].cPrice}</td>
//                      <td>${courses[i].cDescription}</td>
//                      <td> <button onclick="updateCourse(${i})"><i class="fas fa-edit"></i></button></td>
//                      <td> <button onclick="deleteCourse(${i})" class="delete"><i class="far fa-trash-alt"></i></button></td>
                    
//               </tr>` ;
//     }
//     data.innerHTML=result;
    
// }

// function updateCourse(id){
//     console.log(id);
//     courses[id].cName=courseName.value;
//     courses[id].cCategory=courseCategory.value;
//     courses[id].cPrice=coursePrice.value;
//     courses[id].cDescription=courseDescription.value;
//     localStorage.setItem("alldata",JSON.stringify(courses))

//     displayCourse();
//     clearInput();
// }


// function deleteCourse(id){

//     courses.splice(id,1)
//     localStorage.setItem("alldata",JSON.stringify(courses))
//     displayCourse();


// }


// function searchCourse(){
//     let searchValue=search.value
    

//     let result=``;

//     for(let i=0;i<courses.length;i++){

//         if(courses[i].cName.toLowerCase().includes(searchValue.toLowerCase()))

//         result+=`
        
//         <tr>
//                      <td>${i}</td>
//                      <td>${courses[i].cName}</td>
//                      <td>${courses[i].cCategory}</td>
//                      <td>${courses[i].cPrice}</td>
//                      <td>${courses[i].cDescription}</td>
//                      <td> <button onclick="updateCourse(${i})"><i class="fas fa-edit"></i></button></td>
//                      <td> <button onclick="deleteCourse(${i})" class="delete"><i class="far fa-trash-alt"></i></button></td>
                    
//               </tr>` ;
//     }

//     data.innerHTML=result;
    



// }


let courseName=document.getElementById("courseName");
let coursePrice=document.getElementById("coursePrice");
let courseCategory=document.getElementById("courseCategory");
let courseDescription=document.getElementById("courseDescription");
let data=document.getElementById("data");
let search=document.getElementById("search");
let error= document.getElementsByClassName("error");
let input = document.getElementById("input");

let courses=[];
   if(localStorage.getItem("alldata")!=null){
    courses=JSON.parse(localStorage.getItem("alldata"));
    displayCourse()
   }else{
       courses=[]
   }

 
function createCourse(){

  
        if(validateCourseName()){
            let course={
                cName:courseName.value,
                cCategory:courseCategory.value,
                cPrice:coursePrice.value,
                cDescription:courseDescription.value,
            }
            courses.push(course)
            localStorage.setItem("alldata",JSON.stringify(courses))
            displayCourse();
            clearInput();

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })



        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
    
    
}


function displayCourse(){
    let result=``
    for(let i=0;i<courses.length;i++){
        result+=`
        <tr>
    <td>${i}</td>
    <td>${courses[i].cName}</td>
    <td>${courses[i].cCategory}</td>
    <td>${courses[i].cPrice}</td>
    <td>${courses[i].cDescription}</td>
    <td><button onclick="updateCourse(${i})"><i class="fas fa-edit"></i></button></td>
    <td><button class="delete" onclick="deleteCourse(${i})"><i class="far fa-trash-alt"></i></button></td>
    
</tr>`

    }
    data.innerHTML=result

}

function clearInput(){

    courseName.value=""
    courseCategory.value=""
    coursePrice.value=""
    courseDescription.value=""

}

function deleteCourse(id){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          courses.splice(id,1)
        localStorage.setItem("alldata",JSON.stringify(courses))
        displayCourse()
        }else{
            Swal.fire(
                'no items deleted'
            )
        }
        
      })
    

}

function updateCourse(id){
if(validateCourseName()){
        courses[id].cName=courseName.value;
courses[id].cCategory=courseCategory.value
courses[id].cPrice=coursePrice.value

courses[id].cDescription=courseDescription.value
localStorage.setItem("alldata",JSON.stringify(courses))

displayCourse()
clearInput()
    }

}

function searchCourse(){
    let searchValue=search.value;
    let result=``
    
    for(let i=0;i<courses.length;i++){
        if(courses[i].cName.toLowerCase().includes(searchValue.toLowerCase()))
        result+=`
        <tr>
    <td>${i}</td>
    <td>${courses[i].cName}</td>
    <td>${courses[i].cCategory}</td>
    <td>${courses[i].cPrice}</td>
    <td>${courses[i].cDescription}</td>
    <td><button onclick="updateCourse(${i})"><i class="fas fa-edit"></i></button></td>
    <td><button class="delete" onclick="deleteCourse(${i})"><i class="far fa-trash-alt"></i></button></td>
    
</tr>`
    }
data.innerHTML=result



    
    }

function validateCourseName(){
    let cnameRegex =/^[A-Z][[a-z0-9]{3,15}$/;
    if(!cnameRegex.test(courseName.value)){
        error[0].style.display="block";
        return false;
    }else{
        error[0].style.display="none";
        return true;
    }
}

courseName.addEventListener('blur',validateCourseName);