import CartList from "./CartList";
import CartMainHeader from "./CartMainHeader";
import CartTotal from "./CartTotal";
import CartFooter from "./CartFooter";
import CartEmpty from "./CartEmpty";
import { useStore } from "../../store/store";

const CartMain = () => {
  const { cart } = useStore();
  return (
    <div className="flex h-full flex-col items-center gap-8 p-10">
      <CartMainHeader />{" "}
      {!cart.length ? (
        <CartEmpty />
      ) : (
        <>
          <CartList />
          <CartTotal />
          <CartFooter />
        </>
      )}
    </div>
  );
};

export default CartMain;
