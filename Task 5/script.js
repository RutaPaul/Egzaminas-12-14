/* ------------------------------ TASK 5 --------------------------------------------
Sukurkite duomenu masyva, kuriame butu talpinami duomenys apie studentus:
1. Vardas
2. Pavarde
3. Amzius
4. Studijavimo datos pradzia

Turint siuos duomenis atlikti filtravima pagal studijavimo datos pradzia. Pavyzdziui,
norime matyti studentus kurie pradejo studijuoti nuo 2022-03-10. Si pasirinkima vartotojas atlieka
paprastu inputu. Filtravimas ivyksta tik tada kai vartotojas paspaudzia mygtuka Submit

P.S Reikalingus HTML elementus prisideti, kaip input, output ir tt
------------------------------------------------------------------------------------ */
const students = [
    {
        name: "Petras",
        surname: "Petraitis",
        age: 19,
        studyYear: "2022-03-10"
    },
    {
        name: "Jonas",
        surname: "Jonaitis",
        age: 24,
        studyYear: "2022-03-07"
    }
];

const buttonInput = document.querySelector("#inputButton");
buttonInput.addEventListener("click", buttonClick);

function buttonClick() {
  const inputYear = document.querySelector("#inputYear");
  let inputYearValue = inputYear.value;
  if(inputYearValue){
    let filteredStudents = filterStudents(inputYearValue);
    if(filteredStudents.length > 0){
         outputStudents(filteredStudents);
    }
  }
}

function outputStudents(students){
    const output = document.querySelector("#output");
    let htmlOutput = "";
    students.forEach(student => {
        htmlOutput += student.name + " " + student.surname + " " + student.age + " " + student.studyYear + "<br>";
    });
    output.innerHTML = htmlOutput;

}

function filterStudents(date){
    const filteredStudents = students.filter(student => {
        let studentYear = new Date(student.studyYear);
        let yearToFilter = new Date(date);
        return studentYear >= yearToFilter;
    }) 

    return filteredStudents;
}





