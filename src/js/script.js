import ***REMOVED*** ValidateEmail, validateCpf } from "./validation.helper";
import ***REMOVED*** setData } from "./firebase";

let URL =
  "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1";

// ---------------LOAD PRODUCTS FROM THE API ---------------------
const getProducts = async (url) => ***REMOVED***
  try ***REMOVED***
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data;
  } catch (error) ***REMOVED***
    console.error(error);
  }
***REMOVED***

// ----------------------------SHOW PRODUCTS-----------------------
const listProducts = async () => ***REMOVED***
  try ***REMOVED***
    const data = await getProducts(URL);

    const ***REMOVED*** products } = data;

    const productsList = document.querySelector(".products");

    products.forEach(
      (***REMOVED*** description, id, image, installments, name, oldPrice, price }) =>
        productsList.insertAdjacentHTML(
          "beforeend",
          `
  <div class="product">
    <img class='product-image' src="$***REMOVED***image}" alt="$***REMOVED***name}">
    <div class='product-block'>
      <span class="product-name">$***REMOVED***name}</span>
      <span class="product-description">$***REMOVED***description}</span>
      <span class="product-oldprice">De: R$$***REMOVED***oldPrice}</span>
      <span class="product-price">Por: R$$***REMOVED***price}</span>
      <span class="product-obs">Ou $***REMOVED***installments.count}x de Rs$$***REMOVED***installments.value}</span>
      <button class='btn product-button'>Comprar</button>
    </div>
</div>`
        )
    );

    URL = `https://$***REMOVED***data.nextPage}`;
  } catch (error) ***REMOVED***
    console.error(error.message);
  }
***REMOVED***

// ----------------- SUBSCRIBER FROM ------------------------

//Store form data in firebase database
const addSubscriber = (subscriber) => ***REMOVED***
  //validate email-input
  const validEmail = ValidateEmail(subscriber[1].value);

  if (!validEmail) ***REMOVED***
    document.getElementById("invalidEmail").style.display = "flex";
    subscriber[1].focus();
    return;
  } else ***REMOVED***
    document.getElementById("invalidEmail").style.display = "none";
  }

  //validate cpf-input
  const validCpf = validateCpf(subscriber[2].value);

  if (!validCpf) ***REMOVED***
    document.getElementById("invalidCpf").style.display = "flex";
    subscriber[2].focus();
    return;
  } else ***REMOVED***
    document.getElementById("invalidCpf").style.display = "none";
  }

  //create a new subscriber object with the form data
  const newSubscriber = ***REMOVED***
    name: subscriber[0].value,
    email: validEmail,
    cpf: validCpf,
    gender: subscriber[3].value,
    dateAdded: new Date(),
  ***REMOVED***

  //Store new subscriber
  setData(newSubscriber);
***REMOVED***

//get the data from form inputs in an array and call the addSubscribers function
const onSubscribeFormSubmit = (e) => ***REMOVED***
  e.preventDefault();
  const subscribeFormInputs = Array.from(
    document.querySelectorAll(".subscribe-form input")
  );
  addSubscriber(subscribeFormInputs);
***REMOVED***

// ----------------- SHARE WITH A FRIEND FROM ------------------------

const shareNewsletter = (shareFormInputs) => ***REMOVED***
  const validEmail = ValidateEmail(shareFormInputs[1].value);

  if (!validEmail) ***REMOVED***
    document.getElementById("invalidEmail-share").style.display = "flex";
    shareFormInputs[1].focus();
    return;
  } else ***REMOVED***
    document.getElementById("invalidEmail-share").style.display = "none";
  }

  alert("E-mail enviado com sucesso!");
***REMOVED***

const onShareFormSubmit = (e) => ***REMOVED***
  e.preventDefault();
  const shareFormInputs = document.querySelectorAll(".newsletter-form input");

  shareNewsletter(shareFormInputs);
***REMOVED***

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
accordion.addEventListener("click", (e) => ***REMOVED***
  if (panel.style.display === "block") ***REMOVED***
    panel.style.display = "none";
  } else ***REMOVED***
    panel.style.display = "block";
  }
});

// Call the function to be listed for the first time when the page loads
listProducts();
