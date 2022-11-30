import React from 'react';

/**
 * It takes in an array of categories and a function to filter items, and returns a button for each
 * category that, when clicked, calls the filterItems function with the category as an argument.
 * @returns An array of buttons.
 */
const Categories = ({ categories, filterItems }) => {
    return (
        <div className="btn-container">
            {categories?.map((category, index) => {
                return (
                    <button
                        className="filter-btn"
                        key={index}
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories;
