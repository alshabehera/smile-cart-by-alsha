import { Button } from "neetoui";

const AddToCart = ({ isInCart, toggleIsInCart }) => {
  const handleClick = event => {
    event.stopPropagation();
    event.preventDefault();
    toggleIsInCart();
  };

  return (
    <Button
      label={isInCart ? "Remove from cart" : "Add to cart"}
      size="large"
      onClick={event => {
        handleClick(event);
      }}
    />
  );
};

export default AddToCart;
