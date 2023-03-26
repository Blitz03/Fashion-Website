import { createContext, useContext, useState, useRef, useEffect } from "react";
import { fetchProducts } from "./lib/client";
import landing01 from "./images/landing-01.jpg";
import landing02 from "./images/landing-02.jpg";
import landing03 from "./images/landing-03.jpg";
import { loadStripe } from "@stripe/stripe-js";

const AppContext = createContext();

function AppProvider({ children }) {
  const [menuActive, setMenuActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const menuElement = useRef(null);
  const cartElement = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const products = await fetchProducts();
      if (products) {
        setProducts(products);
      }
    }
    fetchData();
  }, []);

  // Cart

  const addProduct = (newProduct) => {
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + qty);
    setCartActive(true);
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );
    if (existingProduct) {
      const updatedCart = cart.map((product) => {
        if (newProduct.id === product.id) {
          return {
            ...product,
            quantity: product.quantity + qty,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...newProduct, quantity: qty }]);
    }
  };

  const removeProduct = (id) => {
    const foundProduct = cart.find((product) => product.id === id);
    const newItems = cart.filter((product) => product.id !== id);
    setCart(newItems);
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
  };

  const qtyIncrease = () => {
    setQty(qty + 1);
  };

  const qtyDecrease = () => {
    setQty(qty > 1 ? qty - 1 : 1);
  };

  const cartTotal = cart
    .reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0)
    .toFixed(2);

  const toggleProductQuantity = (id, value) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) => {
        if (product.id === id) {
          if (value === "inc") {
            setTotalQuantities(
              (prevTotalQuantities) => prevTotalQuantities + 1
            );
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          } else if (value === "dec") {
            setTotalQuantities(
              (prevTotalQuantities) => prevTotalQuantities - 1
            );
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
        }
        return product;
      });
      return updatedCart.filter((product) => product.quantity > 0);
    });
  };

  const handleProductClick = () => {
    setQty(1);
  };

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // Cart

  // Cart && Menu Slide Effect

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuElement.current && !menuElement.current.contains(event.target)) {
        setMenuActive(false);
      }
      if (cartElement && !cartElement.current.contains(event.target)) {
        setCartActive(false);
      }
    };

    if (menuActive || cartActive) {
      document.body.classList.add("slide-active");
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.classList.remove("slide-active");
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.classList.remove("slide-active");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuActive, cartActive]);

  // Cart && Menu Slide Effect

  // Landing

  const landingSlides = [
    {
      title: "Autumn Vibes",
      desc: "The cold morning air welcomes you and wrapping up in a light coat and the soft texture of wool become your only shield",
      image: landing01,
    },
    {
      title: "Elbow-Patch Leather Jacket",
      desc: "Casual line. Short design. 100% suede leather. Backstitched elbow patche",
      image: landing02,
    },
    {
      title: "Nappa Tote Bag",
      desc: "Casual line. Short design. 100% suede leather. Backstitched elbow patche",
      image: landing03,
    },
  ];

  // Landing

  // Wishlist
  const addToWish = (newProduct) => {
    if (wishlist.includes(newProduct)) {
      setWishlist((prevWish) =>
        prevWish.filter((product) => product.id !== newProduct.id)
      );
    } else {
      setWishlist((prevWish) => [...prevWish, newProduct]);
    }
  };
  const removeFromWish = (id) => {
    setWishlist((prevWish) => prevWish.filter((product) => product.id !== id));
  };
  // Wishlist

  // Search
  function handleSearchChange(e) {
    if (e.target.value === "") {
      setResults([]);
    } else {
      setResults(
        products.filter((product) =>
          product.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
    setQuery(e.target.value);
  }
  // Search

  // Stripe
  const stripeLoadedPromise = loadStripe(
    "pk_test_51MdbBUGhEXF3L7ZQDRelBWTVcdeBn1xrYqIHvkqPOfaWvYd7m18jWBRTcuAyak1d56x7WYTTlKkrkP0EFEQ4FkVx00LNjT7AHv"
  );

  function handleStripeClick() {
    const lineItems = cart.map((product) => {
      return { price: product.id, quantity: product.quantity };
    });

    stripeLoadedPromise.then((stripe) => {
      stripe
        .redirectToCheckout({
          lineItems: lineItems,
          mode: "payment",
          successUrl: "https://fashionary.netlify.app/",
          cancelUrl: "https://fashionary.netlify.app/",
        })
        .then((response) => {
          console.log(response.error);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
  // Stripe

  return (
    <AppContext.Provider
      value={{
        menuActive,
        setMenuActive,
        cartActive,
        setCartActive,
        menuElement,
        cartElement,
        landingSlides,
        products,
        addProduct,
        removeProduct,
        qty,
        qtyDecrease,
        qtyIncrease,
        cart,
        cartTotal,
        handleProductClick,
        toggleProductQuantity,
        totalQuantities,
        wishlist,
        addToWish,
        removeFromWish,
        handleScrollToTop,
        handleSearchChange,
        results,
        query,
        handleStripeClick,
      }}>
      {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
