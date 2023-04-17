var persons = [
    {
        name: "Ali",
        city: "Lahore"
    },
    {
        name: "Obaid",
        city: "Karachi"
    },
]

function person(name,city){
    this.name=name
    this.city=city
}

function showPerson() {

    var table = document.getElementById("person-data");
  
    var rows = "";
  
    persons.forEach(function (person, index) {
      rows += `
              <tr>
                  <td>${person.name}</td>
                  <td>${person.city}</td>
              </tr>
          `;
    });
  
    table.innerHTML = rows;
}

function addPerson() {

    document.getElementById("name").value = "";
    document.getElementById("city").value = "";
  
    document.getElementsByClassName("modal-back")[0].style.display = "block";

}
 
function savePerson(){
    
    document.getElementsByClassName("modal-back")[0].style.display = "none";

    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;

    var person1 = new person(name,city)
    persons.push(person1)

    showPerson();
}

function createObject(){
    
    var obj = {}

    persons.forEach(function(person){
        if(person.city in obj){
            obj[person.city].push(person.name)
        }
        else{
            obj[person.city] = [person.name]
        }
    })
    
    var table = document.getElementById("result");
    table.innerHTML = "";

    Object.keys(obj).forEach(function(city){
        var row = document.createElement("tr");
        var cityCell = document.createElement("td");
        var namesCell = document.createElement("td");
  
        cityCell.innerHTML = city;
        namesCell.innerHTML = obj[city].join(", ");
  
        row.appendChild(cityCell);
        row.appendChild(namesCell);
  
        table.appendChild(row);
    });
}