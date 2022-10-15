import s from "./style.module.css";
import { CartsItem } from "../CartsItem/CartsItem";
import { useAppSelector } from "./../../hooks/redux";

export function Carts() {
  const { sneakers, basketIsOpen } = useAppSelector(
    (state) => state.sneakersReducer
  );

  return (
    <div className={basketIsOpen ? s.mainBlockIsClose : s.mainBlock}>
      <div className={s.sneakersBlock}>
        {sneakers.map((sneakers) => (
          <CartsItem
            key={sneakers.id}
            id={sneakers.id}
            name={sneakers.name}
            img={sneakers.img}
            imghd={sneakers.imghd}
            price={sneakers.price}
          />
        ))}
      </div>
    </div>
  );
}
