import firestore from "./firebase";

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
// Call the function to be listed for the first time when the page loads
listProducts();

// listen to the "mais produtos" button click event
const listProductsButton = document.querySelector("#productsList");
listProductsButton.addEventListener("click", listProducts);

// ----------------TOGGLE ACCORDION--------------------------

//Select accordion and text panel
const accordion = document.querySelector(".accordion-button");
const panel = document.querySelector(".panel");

//Listen to the accordion- button click event
accordion.addEventListener("click", (e) => ***REMOVED***
  if (panel.style.display === "block") ***REMOVED***
    panel.style.display = "none";
  } else ***REMOVED***
    panel.style.display = "block";
  }
});

// ----------------- SUBSCRIBER FROM ------------

//Store form data in firebase database
const addSubscriber = (subscriber) => ***REMOVED***
  //validate cpf-input
  const validCpf = testaCPF(subscriber[2].value);

  if (!validCpf) ***REMOVED***
    document.getElementById("invalidCpf").style.display = "flex";
    return;
  } else ***REMOVED***
    document.getElementById("invalidCpf").style.display = "none";
  }

  const newSubscriber = ***REMOVED***
    name: subscriber[0].value,
    email: subscriber[1].value,
    cpf: validCpf,
    gender: subscriber[3].value,
  ***REMOVED***

  //get the collection reference from firestore
  const ref = firestore.collection("subscribers");
  const batch = firestore.batch();
  const newRef = ref.doc();
  //Store new subscriber
  batch.set(newRef, newSubscriber);
  batch.commit();
***REMOVED***

//get the data from form inputs in an array and call the addSubscribers function
const formSubmit = (e) => ***REMOVED***
  e.preventDefault();

  const subscribeFormInputs = Array.from(
    document.querySelectorAll(".subscribe-form input")
  );

  addSubscriber(subscribeFormInputs);
***REMOVED***

// ------------- CPF VALIDATION-----------------

//code from Receita Federal
const testaCPF = (cpf) => ***REMOVED***
  cpf = cpf.replace(/[^\d]+/g, "");

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  let soma = 0,
    resto;
  for (let i = 1; i <= 9; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) return false;
  soma = 0;
  for (let i = 1; i <= 10; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))) return false;
  return cpf;
***REMOVED***

//Select subscribe-form and add the event listener onsubmit
const subscribeForm = document.querySelector(".subscribe-form ");
subscribeForm.addEventListener("submit", formSubmit);

const cpfMask = IMask(document.getElementById("cpf-input"), ***REMOVED***
  mask: "000.000.000-00",
});
