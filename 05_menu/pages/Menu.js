import React from 'react';

/**
 * It takes in an array of objects, and returns a div with a bunch of article tags inside of it.
 *
 * Each article tag has a bunch of stuff inside of it, but the important thing to note is that each
 * article tag has a key prop, and that key prop is equal to the id of the object that it's rendering.
 *
 *
 * So, if we were to pass in an array of objects that looked like this:
 *
 * [
 *     {
 *         id: 1,
 *         title: 'title',
 *         price: 'price',
 *         img: 'img',
 *         desc: 'desc'
 *     },
 *     {
 *         id: 2,
 *         title: 'title',
 *         price: 'price',
 *         img: 'img',
 *         desc: 'desc'
 *     },
 * @returns An array of objects.
 */
const Menu = ({ items }) => {
    return (
        <div className="section-center">
            {items?.map((menuItem) => {
                const { id, title, price, img, desc } = menuItem;
                return (
                    <article key={id} className="menu-item">
                        <picture>
                            <img src={img} alt="title" className="photo" />
                        </picture>
                        <div className="item-info">
                            <header>
                                <h4>{title}</h4>
                                <h4 className="price">{price}</h4>
                            </header>
                            <p className="item-text">{desc}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Menu;
