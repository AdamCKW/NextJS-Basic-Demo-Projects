import React from 'react';
import phoneImg from '../public/images/phone.svg';
import { useGlobalContext } from '../components/context';

const Hero = () => {
    /* Destructuring the `closeSubmenu` function from the `useGlobalContext` hook. */
    const { closeSubmenu } = useGlobalContext();

    return (
        <section className="hero" onMouseOver={closeSubmenu}>
            <div className="hero-center">
                <article className="hero-info">
                    <h1>Payments infrastructure for the internet</h1>

                    <p>
                        Millions of companies of all sizes-from startups to
                        Fortune 500s-use Stripe&apos;s software and APIs to
                        accept payments, send payouts, and manage their
                        businesses online.
                    </p>

                    <button className="btn">start now</button>
                </article>

                <article className="hero-images">
                    <picture>
                        <img src="/images/phone.svg" alt="phone" />
                    </picture>
                </article>
            </div>
        </section>
    );
};

export default Hero;
