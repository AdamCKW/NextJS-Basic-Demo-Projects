import React, { useState } from 'react';
import people from '../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

/**
 * The Review function is a stateful component that renders a review of a person. It has a state called
 * index that is used to determine which person to render. It has a function called checkNumber that
 * checks if the index is out of bounds and returns a valid index. It has a function called nextPerson
 * that increments the index and calls checkNumber. It has a function called prevPerson that decrements
 * the index and calls checkNumber. It has a function called randPerson that generates a random number
 * and calls checkNumber. It returns a JSX element that renders the review of the person at the index.
 * @returns The Review component is being returned.
 */
const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    /**
     * If the number is greater than the length of the array, return 0. If the number is less than 0,
     * return the length of the array minus 1. Otherwise, return the number.
     * @param number - The number of the person you want to get.
     * @returns the value of the variable number.
     */
    const checkNumber = (number) => {
        if (number > people?.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people?.length - 1;
        }
        return number;
    };

    /**
     * If the index is less than the length of the array, then increment the index by 1, otherwise set
     * the index to 0.
     */
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    /**
     * If the index is greater than 0, then subtract 1 from the index, otherwise set the index to the
     * last index of the array.
     */
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    /**
     * If the random number is equal to the index, then set the random number to the index plus one.
     */
    const randPerson = () => {
        let randomNumber = Math.floor(Math.random() * (people?.length + 1));
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={randPerson}>
                surprise me
            </button>
        </article>
    );
};

export default Review;
