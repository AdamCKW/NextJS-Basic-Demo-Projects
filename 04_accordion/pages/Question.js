import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

/**
 * It's a function that takes in a title and info and returns a question component that displays the
 * title and info.
 *
 * The question component has a header and a paragraph. The header displays the title and a button. The
 * paragraph displays the info.
 *
 * The button toggles the paragraph on and off.
 *
 * The paragraph is only displayed if the showInfo state is true.
 *
 * The showInfo state is toggled by clicking the button.
 *
 * The button displays a plus sign if the showInfo state is false and a minus sign if the showInfo
 * state is true.
 *
 * The showInfo state is initially set to false.
 * @returns A React component that renders a question with a title and info.
 */
const Question = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    );
};

export default Question;
