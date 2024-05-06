import React, { useState } from "react";

function Item({ name, category }) {
  // State variable to determine whether the item is in the cart or not
  const [isInCart, setIsInCart] = useState(false);

  // Function to toggle the item's in-cart state
  const toggleCartStatus = () => {
    setIsInCart((prevStatus) => !prevStatus);
  };

  // Determining the class name based on the cart status
  const liClassName = isInCart ? "in-cart" : "";

  // Determining the button text based on the cart status
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Button to add/remove item from cart */}
      <button className="add" onClick={toggleCartStatus}>{buttonText}</button>
    </li>
  );
}

export default Item;
