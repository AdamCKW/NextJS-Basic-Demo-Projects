import React from 'react';

/**
 * A component that renders a list of people.
 * @param {Person[]} people - the list of people to render
 * @returns Render the list of people
 */
const List = ({ people }) => {
    return (
        <>
            {people?.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <article key={id} className="person">
                        <img src={image} alt={name + '.png'} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default List;
