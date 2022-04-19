import React, { useEffect, useState } from 'react'
import { Container, Wrapper, ShowButton, Ticket } from "../styles/StyledCart";
import Image from './image';
import { useSelector, useDispatch } from "react-redux";
import { getItems, removeItem, setCount, setDate } from "../redux/features/cartSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export const Cart = () => {

    const items = useSelector(getItems);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        if (!show && items.items.length > 0) setShow(true);

        // Count and calculate price 
        let total = 0;

        for (let index = 0; index < items.items.length; index++) {
            total += +items.items[index].count;
        }

        if (total > 0) {
            setPrice((total * 8.90).toFixed(2));
        } else {
            setPrice(0);
        }
    }, [items])

    return (
        <>
            <Container show={show}>
                <h3>Réservations</h3>

                <Wrapper>
                    {items.items.map((item, index) =>
                        <Ticket key={index}>
                            <div className="ticket-bg">
                                <Image placeholder="blur" blurDataURL={"/images/placeholders/movie-card.jpg"} quality={80} layout='fill' objectFit='cover' src={"https://image.tmdb.org/t/p/w500" + item.movie.backdrop_path} loading="lazy" />
                            </div>

                            <div className="ticket-content">
                                <FontAwesomeIcon icon={solid('xmark')} onClick={() => dispatch(removeItem(item.movie))} />
                                <h4>{item.movie.title}</h4>

                                {/* Just show some example */}
                                <label htmlFor="date">Date: </label>
                                <select name="date" defaultValue={item.date ? item.date : ""} onChange={(event) => { dispatch(setDate({movie: item.movie, date: event.target.value}))}}> 
                                    <option value="01/01/01-13h00">01/01/01 13h00</option>
                                    <option value="01/01/01-15h45">01/01/01 15h45</option>
                                    <option value="01/01/01-20h30">01/01/01 20h30</option>
                                    <option value="02/01/01-15h00">02/01/01 15h00</option>
                                    <option value="02/01/01-18h30">02/01/01 18h30</option>
                                    <option value="03/01/01-20h45">03/01/01 20h45</option>
                                    <option value="03/01/01-23h15">03/01/01 23h15</option>
                                </select>
                                <label htmlFor="quantity">Quantité: </label>
                                <input type="number" id="quantity" name="quantity" min="1" max="99" defaultValue={item.count ? item.count : 1} onChange={(event) => dispatch(setCount({ movie: item.movie, count: event.target.value }))}></input>
                            </div>
                        </Ticket>
                    )}
                </Wrapper>

                <span>Total: {price}€</span>
                <button>Paiement</button>

                <ShowButton onClick={() => setShow(!show)} show={show}>
                    <FontAwesomeIcon icon={solid('ticket')} />
                </ShowButton>
            </Container>
        </>
    )
}