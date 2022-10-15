import s from "./style.module.css";
import { useAppSelector } from "./../../hooks/redux";
import { BasketItem } from "../BasketItem/BasketItem";
import { useRef } from "react";
import React from "react";

export function Basket() {
  const { basket, basketIsOpen } = useAppSelector(
    (state) => state.sneakersReducer
  );
  const isMounted = useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(basket);
      localStorage.setItem("basket", json);
    }
    isMounted.current = true;
  }, [basket]);

  const subTotal = basket.reduce(
    (acc: any, el: any) => acc + el.price * el.counter,
    0
  );

  const totalPrice = subTotal == 0 ? subTotal : subTotal + 250;

  return (
    <section className={basketIsOpen ? s.sneakBasketIsOpen : s.sneakBasket}>
      <h3>My basket</h3>
      <div className={s.snikers}>
        {basket.map((basket) => (
          <BasketItem
            key={basket.id}
            id={basket.id}
            name={basket.name}
            img={basket.img}
            price={basket.price}
            counter={basket.counter}
          />
        ))}
      </div>
      <div className={s.totalPrice}>
        <div className={s.namePrice}>
          <p className={s.defTotal}>Subtotal</p>
          <p className={s.defTotal}>Tax</p>
          <p className={s.defTotal}>Shipping</p>
          <strong className={s.strongTotal}>Total</strong>
        </div>
        <div className={s.countPrice}>
          <p className={s.defPrice}>$ {subTotal.toLocaleString("ru")}</p>
          <p className={s.defPrice}>$ 100</p>
          <p className={s.defPrice}>$ 150</p>
          <strong className={s.strongTotal}>
            $ {totalPrice.toLocaleString("ru")}
          </strong>
        </div>
      </div>
    </section>
  );
}
