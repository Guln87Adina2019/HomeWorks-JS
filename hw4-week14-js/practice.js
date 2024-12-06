1///////////


// let student=[
//     {name:"Aly",age:28,math:85,hobby:"GAMPING",},
//     {name:"Нина",age:27,math:90,hobby:"English",},
//     {name:"Жанерке",age:18,math:60,hobby:"French",},
//     {name:"Бека",age:19,math:85,hobby:"The Medicine",},
//     {name:"Куаныш",age:26,math:85,hobby:"IT-PROGRAM",},
// ]
// //////////////////////////////
// for(let i=0; i<student.length; i++){
//     console.log("АТЫ:",student[i].name);
// };
// //////////////////////////////
// let student2 = student.filter(student=>student.age>20)
// console.log(student2);
// ///////////////////////////////
// let evaluations = student.map(student=>Number((student.math * 1.1).toFixed(0)))
// console.log(evaluations);
// ///////////////////////////////
// console.log(evaluations.reduce((total, num)=>total + num,0));
// //////////////////////////////

// let maxScore = student[0].math;
// let scoreMan = student[0].name;
// for(let i=0; i<student.length; i++){
//     if(maxScore < student[0].math){
//         maxScore = student[0].math;
//         scoreMan = student[0].name;
//     }
// };
// alert("Ең жоғары бал алған:  " + scoreMan + "\nОнын балы:  " + maxScore)


2///////////

// let product = [
//     {name:"Samsung",price:300000,},
//     {name:"Iphone",price:400000,},
//     {name:"Meizu",price:180000,},
//     {name:"Huawei",price:200000,}
// ]
// console.log(product);
// ////////////////////////////
// let evaluations2 = product.filter(product=>product.price>200000)
// console.log(evaluations2);
// //////////////////////////
// console.log(evaluations2.reduce((total, num)=>total + num,0));


// Күнделікті тапсырма массиві (атау және орындалған/орындалмаған дерегі)
let tasks = [
    { name: "Тапсырма 1", completed: false },
    { name: "Тапсырма 2", completed: true },
    { name: "Тапсырма 3", completed: false },
    { name: "Тапсырма 4", completed: true },
    { name: "Тапсырма 5", completed: false }
  ];
  
  // Орындалмаған тапсырмаларды анықтау және шығару
  let incompleteTasks = tasks.filter(task => !task.completed);
  if (incompleteTasks.length > 0) {
    alert("Орындалмаған тапсырмалар:");
    incompleteTasks.forEach(task => alert(task.name));
  } else {
    alert("Барлық тапсырмалар орындалған!");
  }
  
  // Белгілі бір тапсырманы аяқталған деп белгілеу
  let taskNumber = prompt("Аяқталған деп белгілеу үшін тапсырма нөмірін енгізіңіз:");
  taskNumber = parseInt(taskNumber) - 1; // Пайдаланушы 1-ден бастайды деп болжасақ
  if (taskNumber >= 0 && taskNumber < tasks.length) {
    tasks[taskNumber].completed = true;
    alert(${tasks[taskNumber].name} аяқталды!);
  } else {
    alert("Жарамсыз нөмір енгізілді.");
  }
  
  // Тек аяқталған тапсырмаларды шығару
  let completedTasks = tasks.filter(task => task.completed);
  console.log("Аяқталған тапсырмалар:");
  completedTasks.forEach(task => console.log(task.name));