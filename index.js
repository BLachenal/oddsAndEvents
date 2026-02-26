// === State ===
/** Empty array  */
let numBank = [42, 7, 100, 23, 0, 55, 88, 11, 34, 99, 2, 67, 14, 81, 50];
let evenBank = [];
let oddBank = [];

function addToBank(n) {
  // TODO 
  if(!isNaN(n)){
    numBank.push(n);
  }else{
    alert("Not a Number");
    return;
  }
}

function UnsortedBank(){
    const $section = document.createElement('section');
    $section.innerHTML = `
    <h2>Bank</h2>
    <p>${numBank}</p>
    `;
    
    return $section;
}

function OddBank(){
    const $section = document.createElement('section');
    $section.innerHTML = `
    <h2>Odds</h2>
    <p>${oddBank} </p>

    `;
    return $section;
}

function EvenBank(){
    const $section = document.createElement('section');
    $section.innerHTML = `
    <h2>Evens</h2>
    <p>${evenBank} </p>
    `;
    return $section;
}

/** Form that allows user to add a number to the number bank */
function BankForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label>
      Add number to Number Bank!
      <input name="count" type="number" min="1" />
    </label>
    <button>Add Number</button>
    <button id = "sort1">Sort 1</button>
    <button id = "sortAll">Sort All</button>
  `;
  //add a listener to the form currently working in
  $form.addEventListener("submit", (event) =>{
    event.preventDefault();                     //prevent the default refreshing stuff
    let data = new FormData($form);             //put all the data from $form into variable
    let countString = data.get("count");        //take the data from the name 'count' (above) store it as string
    let countNum = parseInt(countString);       //convert string to number
    if(!isNaN(countNum)){
      addToBank(countNum);
    }else{
      alert("Not a Number");
      return;
    }       
    render();
  });
  //Add a listener for button Sort 1 click
  const buttonSort1 = $form.querySelector("#sort1");
  buttonSort1.addEventListener("click", (event) => {
    SortOne();
  });
  //Add a listener for button Sort All click
  const buttonSortAll = $form.querySelector("#sortAll");
  buttonSortAll.addEventListener("click", (event) => {
    SortAll();
  })
  return $form;
}

//Function to sort one number from Number Bank to either Even or Odd bank.
function SortOne(){
  if(numBank.length === 0){
    alert("Number Bank is empty!");
  }else if(numBank[0] % 2 === 0){
    evenBank.push(numBank[0]);
    numBank.shift();
    evenBank.sort(compareNumbers);
  }else{
    oddBank.push(numBank[0]);
    numBank.shift();
    oddBank.sort(compareNumbers);
  }
  render();
}

function SortAll(){
  if(numBank.length === 0){
    alert("Number Bank is empty!");
    return;
  }
  while(numBank.length !== 0){
    SortOne(); 
    /* if(numBank[0] % 2 === 0){
      evenBank.push(numBank[0]);
      numBank.shift();
    }else{
      oddBank.push(numBank[0]);
      numBank.shift();
    } */
    render();
  }
  
}
function compareNumbers(a, b) {
  return a - b;
}

//function to render everything on screen.
function render(){
    const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Odds & Events</h1>
    <BankForm></BankForm>
    <UnsortedBank></UnsortedBank>
    <OddBank></OddBank>
    <EvenBank></EvenBank>
  `;
  $app.querySelector("BankForm").replaceWith(BankForm());
  $app.querySelector("UnsortedBank").replaceWith(UnsortedBank());
  $app.querySelector("OddBank").replaceWith(OddBank());
  $app.querySelector("EvenBank").replaceWith(EvenBank());
  
}
render();