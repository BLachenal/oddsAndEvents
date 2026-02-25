// === State ===
/** Empty array  */
let numBank = [];
let evenBank = [];
let oddBank = [];

/**
 * @param {number} n - the number of sheep to add
 */
function addToBank(n) {
  // TODO 
  numBank.push(n);
}

function UnsortedBank(numArr){
    const $section = document.createElement('section');
    $section.innerHTML = `
    <h2>Bank</h2>
    `;
    return $section;
}

function OddBank(){
    const $section = document.createElement('section');
    $section.innerHTML = `
    <h2>Odds</h2>
    `;
    return $section;
}

function EvenBank(){
    const $section = document.createElement('section');
    $section.innerHTML = `
    <h2>Evens</h2>
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
  `;
  //add a listener to the form currently working in
  $form.addEventListener("submit", (event) =>{
    event.preventDefault(); //prevent the default refreshing stuff
    let data = new FormData($form); //put all the data from $form into variable
    let countString = data.get("count"); //take the data from the name 'count' (above) store it as string
    let countNum = parseInt(countString); //convert string to number
    addToBank(countNum);
    render();
  });
  return $form;
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