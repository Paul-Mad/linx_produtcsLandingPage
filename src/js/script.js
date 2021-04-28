import { ValidateEmail, validateCpf } from "./validation.helper";
import { setData } from "./firebase";

let URL =
  "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1";

// ---------------LOAD PRODUCTS FROM THE API ---------------------
const getProducts = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    console.error(error);
  }
};

// ----------------------------SHOW PRODUCTS-----------------------
const listProducts = async () => {
  try {
    const data = await getProducts(URL);

    const { products } = data;

    const productsList = document.querySelector(".products");

    products.forEach(
      ({ description, id, image, installments, name, oldPrice, price }) =>
        productsList.insertAdjacentHTML(
          "beforeend",
          `
  <div class="product">
    <img class='product-image' src="${image}" alt="${name}">
    <div class='product-block'>
      <span class="product-name">${name}</span>
      <span class="product-description">${description}</span>
      <span class="product-oldprice">De: R$${oldPrice}</span>
      <span class="product-price">Por: R$${price}</span>
      <span class="product-obs">Ou ${installments.count}x de Rs$${installments.value}</span>
      <button class='btn product-button'>Comprar</button>
    </div>
</div>`
        )
    );

    URL = `https://${data.nextPage}`;
  } catch (error) {
    console.error(error.message);
  }
};

// ----------------- SUBSCRIBER FROM ------------------------

//Store form data in firebase database
const addSubscriber = (subscriber) => {
  console.log(subscriber);
  //validate email-input
  const validEmail = ValidateEmail(subscriber[1].value);

  if (!validEmail) {
    document.getElementById("invalidEmail").style.display = "flex";
    subscriber[1].focus();
    return;
  } else {
    document.getElementById("invalidEmail").style.display = "none";
  }

  //validate cpf-input
  const validCpf = validateCpf(subscriber[2].value);

  if (!validCpf) {
    document.getElementById("invalidCpf").style.display = "flex";
    subscriber[2].focus();
    return;
  } else {
    document.getElementById("invalidCpf").style.display = "none";
  }

  //create a new subscriber object with the form data
  const newSubscriber = {
    name: subscriber[0].value,
    email: validEmail,
    cpf: validCpf,
    gender: subscriber[3].value && subscriber[4].value,
    dateAdded: new Date(),
  };

  //Store new subscriber
  setData(newSubscriber);
};

//get the data from form inputs in an array and call the addSubscribers function
const onSubscribeFormSubmit = (e) => {
  e.preventDefault();
  const subscribeFormInputs = Array.from(
    document.querySelectorAll(".subscribe-form input")
  );
  addSubscriber(subscribeFormInputs);
};

// ----------------- SHARE WITH A FRIEND FROM ------------------------

const shareNewsletter = (shareFormInputs) => {
  const validEmail = ValidateEmail(shareFormInputs[1].value);

  if (!validEmail) {
    document.getElementById("invalidEmail-share").style.display = "flex";
    shareFormInputs[1].focus();
    return;
  } else {
    document.getElementById("invalidEmail-share").style.display = "none";
  }

  alert("E-mail enviado com sucesso!");
};

const onShareFormSubmit = (e) => {
  e.preventDefault();
  const shareFormInputs = document.querySelectorAll(".newsletter-form input");

  shareNewsletter(shareFormInputs);
};

//-----------------ELEMENT SELECTORS ----------------------------------------

// select shareForm
const shareForm = document.querySelector(".newsletter-form");
//Select subscribe-form
const subscribeForm = document.querySelector(".subscribe-form ");
//Select accordion and text panel
const accordion = document.querySelector(".accordion-button");
const panel = document.querySelector(".panel");
// Select "mais produtos" button
const listProductsButton = document.querySelector("#productsList");

//------------------------ EVENTS---------------------------------------------

//shareForm Button Submit Event
shareForm.addEventListener("submit", onShareFormSubmit);
//subscribeForm Button submit Event
subscribeForm.addEventListener("submit", onSubscribeFormSubmit);
//'Mais Produtos' Button click Event
listProductsButton.addEventListener("click", listProducts);
//Accordion- button click event
accordion.addEventListener("click", (e) => {
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
});

// Call the function to be listed for the first time when the page loads
listProducts();
