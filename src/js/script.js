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

listProducts();

const listProductsButton = document.querySelector("#productsList");
listProductsButton.addEventListener("click", listProducts);

// ----------------TOGGLE ACCORDION--------------------------
const accordion = document.querySelector(".accordion-button");

const panel = document.querySelector(".panel");

accordion.addEventListener("click", (e) => ***REMOVED***
  if (panel.style.display === "block") ***REMOVED***
    panel.style.display = "none";
  } else ***REMOVED***
    panel.style.display = "block";
  }
});
