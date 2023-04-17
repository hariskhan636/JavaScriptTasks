products = [
  {
    id: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
    name: "Chocolate",
    price: "50",
    vendorId: "10000",
    categoryId: "12345",
  },
  {
    id: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
    name: "Bat",
    price: "5000",
    vendorId: "20000",
    categoryId: "23456",
  },
  {
    id: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
    name: "Pencil",
    price: "20",
    vendorId: "30000",
    categoryId: "34567",
  },
  {
    id: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
    name: "Candy",
    price: "30",
    vendorId: "30000",
    categoryId: "12345",
  },
  {
    id: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
    name: "Ball",
    price: "5000",
    vendorId: "40000",
    categoryId: "23456",
  },
];

category = [
  {
    id: "12345",
    name: "Sweets",
    status: "active",
  },
  {
    id: "23456",
    name: "Toys",
    status: "active",
  },
  {
    id: "34567",
    name: "Stationary",
    status: "inactive",
  },
];

vendor = [
  {
    id: "10000",
    first_name: "Ali",
    last_name: "Burhan",
    contact: "03001234567",
    status: "active",
  },
  {
    id: "20000",
    first_name: "Atif",
    last_name: "Aslam",
    contact: "03431820909",
    status: "active",
  },
  {
    id: "30000",
    first_name: "Rameez",
    last_name: "Khan",
    contact: "03337192344",
    status: "active",
  },
  {
    id: "40000",
    first_name: "Asim",
    last_name: "Shah",
    contact: "03337192354",
    status: "inactive",
  },
];

var addFlag = false;
var editFlag = false;
var addToVenFlag = false;
var addToCatFlag = false;
var delById = false;
var delByName = false;
var getCat = false;
var getVen = false;
var getProd = false;
var getCheap = false;
var venIndex = 0;

function showProducts() {
  document.getElementById("product-show").style.display = 'block'
  var table = document.getElementById("product-data");
  var heading = document.getElementById("heading");

  heading.innerHTML = "Products";
  var rows = "";

  for (let i = 0; i < products.length; i++) {
    let vendorIsActive = vendor.find(v => v.id === products[i].vendorId && v.status === "active");
    
    let categoryIsActive = category.find(c => c.id === products[i].categoryId && c.status === "active");

    if (vendorIsActive && categoryIsActive) {
      rows += `
            <tr>
                <td>${products[i].id}</td>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                <td>${products[i].vendorId}</td>
                <td>${products[i].categoryId}</td>
                <td>
                    <button class='edit' onclick="editProduct(${i})">Edit</button>
                </td>
            </tr>
        `;
    }
  }

  table.innerHTML = rows;
}

function addProduct() {
  document.getElementsByClassName("modal-back")[0].style.display = "block";

  document.getElementById("name").value = ""
  document.getElementById("price").value = ""
  
  const vendorDropdown = document.getElementById("vendorId");
  const categoryDropdown = document.getElementById("categoryId")

  vendorDropdown.innerHTML = "";
  categoryDropdown.innerHTML = "";

    vendor.forEach(function(ven) {
      if(ven.status=='active'){
        const option = document.createElement("option");
        option.value = ven.id;
        option.text = ven.first_name + " " + ven.last_name;
        vendorDropdown.add(option);
      }
    });

    category.forEach(function(cat) {
      if(cat.status=='active'){
        const option = document.createElement("option");
        option.value = cat.id;
        option.text = cat.name;
        categoryDropdown.add(option);
      }
    });

  addFlag = true;
}

function editProduct(index) {
  var prod = products[index];

  const vendorDropdown = document.getElementById("vendorId1");
  const categoryDropdown = document.getElementById("categoryId1")

  vendorDropdown.innerHTML = "";
  categoryDropdown.innerHTML = "";

    vendor.forEach(function(ven) {
      if(ven.status=='active'){
        const option = document.createElement("option");
        option.value = ven.id;
        option.text = ven.first_name + " " + ven.last_name;
        vendorDropdown.add(option);
      }
    });

    category.forEach(function(cat) {
      if(cat.status=='active'){
        const option = document.createElement("option");
        option.value = cat.id;
        option.text = cat.name;
        categoryDropdown.add(option);
      }
    });

  document.getElementById("prodIndex").value = index;
  document.getElementById("name1").value = prod.name;
  document.getElementById("price1").value = prod.price;
  document.getElementById("vendorId1").value = prod.vendorId;
  document.getElementById("categoryId1").value = prod.categoryId;

  document.getElementsByClassName("modal-back2")[0].style.display = "block";

  editFlag = true;
}

function saveProduct(index) {
  if (addFlag) {
    document.getElementsByClassName("modal-back")[0].style.display = "none";


    var prod = {
      id: "",
      name: "",
      price: "",
      vendorId: "",
      categoryId: "",
    };

    prod.id = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    prod.name = document.getElementById("name").value;
    prod.price = document.getElementById("price").value;
    prod.vendorId = document.getElementById("vendorId").value;
    prod.categoryId = document.getElementById("categoryId").value;

    prod = {
      id: prod.id,
      name: prod.name,
      price: prod.price,
      vendorId: prod.vendorId,
      categoryId: prod.categoryId,
    };

    products.push(prod);
    addFlag = false;

    showProducts();
  } else if (editFlag) {
    document.getElementsByClassName("modal-back2")[0].style.display = "none";

    index = document.getElementById("prodIndex").value;
    
    var prod = products[index];

    prod.name = document.getElementById("name1").value;
    prod.price = document.getElementById("price1").value;
    prod.vendorId = document.getElementById("vendorId1").value;
    prod.categoryId = document.getElementById("categoryId1").value;

    products[index] = prod;

    editFlag = false;
    showProducts();
  } 
}

function delProduct() {
  if (delById) {
    id = document.getElementById("prod_id").value;
    var found = false;

    for (let i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        products.splice(i, 1);
        found = true;
        break;
      }
    }

    if (found == false) {
      alert("ID not found");
    } else {
      document.getElementsByClassName("modal-back3")[0].style.display = "none";
      delById = false;
      showProducts();
    }
  }

  if (delByName) {
    uname = document.getElementById("prod_name").value;
    var found = false;

    for (let i = 0; i < products.length; i++) {
      if (products[i].name == uname) {
        products.splice(i, 1);
        found = true;
      }
    }

    if (found == false) {
      alert("Name not found");
    } else {
      document.getElementsByClassName("modal-back4")[0].style.display = "none";
      delByName = false;
      showProducts();
    }
  }
}

function deleteProductByID() {
  document.getElementsByClassName("modal-back3")[0].style.display = "block";

  delById = true;
}

function deleteProductByName() {
  document.getElementsByClassName("modal-back4")[0].style.display = "block";

  delByName = true;
}

function getCategoryProducts() {
  document.getElementsByClassName("modal-back5")[0].style.display = "block";

  getCat = true;
}

function getVendorProducts() {
  document.getElementsByClassName("modal-back6")[0].style.display = "block";

  getVen = true;
}

function getProductByID() {
  document.getElementsByClassName("modal-back7")[0].style.display = "block";

  getProd = true;
}

function getCheapProducts() {
  document.getElementsByClassName("modal-back8")[0].style.display = "block";

  getCheap = true;
}

function viewProduct() {
  
  if (getCat) {
    
    catName = document.getElementById("cat_name").value;
    
    var found = false;
    var arr = [];

    for (let i = 0; i < category.length; i++) {
      for(let j=0; j<products.length; j++){
        if (category[i].id == products[j].categoryId && category[i].name == catName) {
          arr.push(products[j]);
          found = true;
        }else if (found == false && i == category.length - 1) {
            console.log(catName)
            alert("Category/Products not found");
            showProducts();
        }
      }
    }

    if (found == true) {
      document.getElementsByClassName("modal-back5")[0].style.display = "none";
      //console.log(arr)
      var table = document.getElementById("product-data");
      var head = document.getElementById("head");
      var heading = document.getElementById("heading");

      heading.innerHTML = "Products by Category: " + catName;
      cols = `<th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Vendor ID</th>
            <th>Category ID</th>`;
      head.innerHTML = cols;

      var rows = "";

      arr.forEach(function (product, index) {
        rows += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.vendorId}</td>
                    <td>${product.categoryId}</td>
                </tr>
            `;
      });
      table.innerHTML = rows;
      
    }
  }

  else if (getVen) {
    
    firstName = document.getElementById("ven_fn").value;
    lastName = document.getElementById("ven_ln").value;
    var found = false;
    var arr = [];

    for (let i = 0; i < vendor.length; i++) {
      if (
        (vendor[i].first_name = firstName && vendor[i].last_name == lastName)
      ) {
        found = true;
        for (let j = 0; j < products.length; j++) {
          if (vendor[i].id == products[j].vendorId) {
            arr.push(products[j]);
          }
        }
      } else if (found == false && i == vendor.length-1) {
        alert("Vendor/Products not found");
        showProducts();
      }
    }

    if (found == true) {
      document.getElementsByClassName("modal-back6")[0].style.display = "none";
      getVen = false;
      //console.log(arr)
      var table = document.getElementById("product-data");
      var head = document.getElementById("head");
      var heading = document.getElementById("heading");

      heading.innerHTML = "Products by: " + firstName + " " + lastName;
      cols = `<th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Vendor ID</th>
            <th>Category ID</th>`;
      head.innerHTML = cols;

      var rows = "";

      arr.forEach(function (product, index) {
        rows += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.vendorId}</td>
                    <td>${product.categoryId}</td>
                </tr>
            `;
      });
      table.innerHTML = rows;
      
    }
  }

  else if (getProd) {
    id = parseInt(document.getElementById("prod_id1").value);
    var found = false;
    var arr = [];

    for (let i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        found = true;
        arr.push(products[i]);
      } else if (found == false && i == products.length - 1) {
        alert("ID not found");
        showProducts();
      }
    }
    if (found == true) {
      document.getElementsByClassName("modal-back7")[0].style.display = "none";
      getProd = false;
      //console.log(arr)
      var table = document.getElementById("product-data");
      var head = document.getElementById("head");
      var heading = document.getElementById("heading");

      heading.innerHTML = "Products by ID: " + id;
      cols = `<th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Vendor ID</th>
            <th>Category ID</th>`;
      head.innerHTML = cols;

      var rows = "";

      arr.forEach(function (product, index) {
        rows += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.vendorId}</td>
                    <td>${product.categoryId}</td>
                </tr>
            `;
      });
      table.innerHTML = rows;
   
    }
  }

  else if (getCheap) {
    maxPrice = parseInt(document.getElementById("price2").value);
    var arr = [];

    for (let i = 0; i < products.length; i++) {
      if (maxPrice > products[i].price) {
        arr.push(products[i]);
      }
    }

    document.getElementsByClassName("modal-back8")[0].style.display = "none";
    getCheap = false;

    var table = document.getElementById("product-data");
    var head = document.getElementById("head");
    var heading = document.getElementById("heading");

    heading.innerHTML = "Cheap Products";
    cols = `<th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Vendor ID</th>
            <th>Category ID</th>`;
    head.innerHTML = cols;
    var rows = "";

    arr.forEach(function (product, index) {
      rows += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.vendorId}</td>
                    <td>${product.categoryId}</td>
                </tr>
            `;
    });
    table.innerHTML = rows;
  }
}

function showVendors() {
  document.getElementById("vendor-show").style.display = 'block'
  var table = document.getElementById("vendor-data");
  var heading = document.getElementById("heading1");

  heading.innerHTML = "Vendors";
  var rows = "";

  vendor.forEach(function (ven, index) {
    rows += `
              <tr>
                  <td>${ven.id}</td>
                  <td>${ven.first_name}</td>
                  <td>${ven.last_name}</td>
                  <td>${ven.contact}</td>
                  <td>
                      <button class='toggleVen' onclick="toggleStatus(${index})">${ven.status}</button>
                  </td>
                  <td>
                    <button onclick="deleteVendor(${index})">Delete</button>
                  </td>
              </tr>
          `;
  });

  table.innerHTML = rows;
}

function deleteVendor(index){

  const confirmed = confirm(`Are you sure you want to delete Vendor: ${vendor[index].id}? 
  This will delete all of their products as well.`);
  
  if(confirmed){
    for(let i=0;i<products.length;i++){
      if(products[i].vendorId==vendor[index].id){
        products.splice(i,1)
      }
    }
    vendor.splice(index,1)
    showVendors()
    showProducts()
  }
}

function addVendor() {
  document.getElementsByClassName("vendor-back")[0].style.display = "block";
}

function saveVendor() {
  document.getElementsByClassName("vendor-back")[0].style.display = "none";

  var ven = {
    id: "",
    first_name: "",
    last_name: "",
    contact: "",
    status: "",
  };

  ven.id = document.getElementById("ven_id").value;
  ven.first_name = document.getElementById("ven_fname").value;
  ven.last_name = document.getElementById("ven_lname").value;
  ven.contact = document.getElementById("contact").value;
  ven.status = document.getElementById("status").value;

  ven = {
    id: ven.id,
    first_name: ven.first_name,
    last_name: ven.last_name,
    contact: ven.contact,
    status: ven.status,
  };

  vendor.push(ven);
  showVendors();
}

function showCategory() {
  document.getElementById("cat-show").style.display = 'block'
  var table = document.getElementById("cat-data");
  var heading = document.getElementById("heading2");

  heading.innerHTML = "Categories";
  var rows = "";

  category.forEach(function (cat, index) {
    rows += `
              <tr>
                  <td>${cat.id}</td>
                  <td>${cat.name}</td>
                  <td>
                      <button class='toggleCat' onclick="toggleStatus1(${index})">${cat.status}</button>
                  </td>
                  <td>
                    <button onclick="deleteCategory(${index})">Delete</button>
                  </td>
              </tr>
          `;
  });

  table.innerHTML = rows;
}

function deleteCategory(index){

  const confirmed = confirm(`Are you sure you want to delete ${category[index].name}? 
  This will delete all of their products as well.`);

  if(confirmed){
    for(let i=0;i<products.length;i++){
      if(products[i].categoryId==category[index].id){
        products.splice(i,1)
      }
    }
    category.splice(index,1)
    showCategory()
    showProducts()
  }
}

function addCategory() {
  document.getElementsByClassName("cat-back")[0].style.display = "block";
}

function saveCategory() {
  document.getElementsByClassName("cat-back")[0].style.display = "none";

  var cat = {
    id: "",
    name: "",
    status: "",
  };

  cat.id = document.getElementById("cat_id").value;
  cat.name = document.getElementById("cat_name").value;
  cat.status = document.getElementById("cat_status").value;

  cat = {
    id: cat.id,
    name: cat.name,
    status: cat.status,
  };

  category.push(cat);
  showCategory();
}

function toggleStatus(index) {

  const confirmed = confirm(`Are you sure you want to change status from ${vendor[index].status}?`);

  if(confirmed){
    if (vendor[index].status == "active") {
      vendor[index].status = "inactive";
    } else {
      vendor[index].status = "active";
    }
    showProducts()
    showVendors();
  }
}

function toggleStatus1(index) {

  const confirmed = confirm(`Are you sure you want to change status from ${category[index].status}?`);

  if(confirmed){
    if (category[index].status == "active") {
      category[index].status = "inactive";
    } else {
      category[index].status = "active";
    }
    showProducts()
    showCategory();
  }
}

function cancel(){
  addFlag = false;
  editFlag = false;
  addToVenFlag = false;
  addToCatFlag = false;
  delById = false;
  delByName = false;
  getCat = false;
  getVen = false;
  getProd = false;
  getCheap = false;
}