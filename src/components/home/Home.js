import React from 'react';
import RecipesWrapper from '../recipes-wrapper/RecipesWrapper';

const Home = () => {
    const someArr = [
        {
            url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6879705.jpg&w=596&h=596&c=sc&poi=face&q=85",
            title: "1Lemon-Ricotta Cornmeal Waffles",
            description: "Preheat a waffle iron according to manufacturer's instructions.Whisk flour, cornmeal, sugar, baking powder, baking soda, and salt together in a large mixing bowl.",
        },
        {
            url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6879705.jpg&w=596&h=596&c=sc&poi=face&q=85",
            title: "2Lemon-Ricotta Cornmeal Waffles",
            description: "Preheat a waffle iron according to manufacturer's instructions.Whisk flour, cornmeal, sugar, baking powder, baking soda, and salt together in a large mixing bowl.",
        },
        {
            url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6879705.jpg&w=596&h=596&c=sc&poi=face&q=85",
            title: "3Lemon-Ricotta Cornmeal Waffles",
            description: "Preheat a waffle iron according to manufacturer's instructions.Whisk flour, cornmeal, sugar, baking powder, baking soda, and salt together in a large mixing bowl.",
        },
        {
            url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6879705.jpg&w=596&h=596&c=sc&poi=face&q=85",
            title: "4Lemon-Ricotta Cornmeal Waffles",
            description: "Preheat a waffle iron according to manufacturer's instructions.Whisk flour, cornmeal, sugar, baking powder, baking soda, and salt together in a large mixing bowl.",
        },
        {
            url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6879705.jpg&w=596&h=596&c=sc&poi=face&q=85",
            title: "5Lemon-Ricotta Cornmeal Waffles",
            description: "Preheat a waffle iron according to manufacturer's instructions.Whisk flour, cornmeal, sugar, baking powder, baking soda, and salt together in a large mixing bowl.",
        },
        {
            url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6879705.jpg&w=596&h=596&c=sc&poi=face&q=85",
            title: "6Lemon-Ricotta Cornmeal Waffles",
            description: "Preheat a waffle iron according to manufacturer's instructions.Whisk flour, cornmeal, sugar, baking powder, baking soda, and salt together in a large mixing bowl.",
        },
        {
            url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6879705.jpg&w=596&h=596&c=sc&poi=face&q=85",
            title: "7Lemon-Ricotta Cornmeal Waffles",
            description: "Preheat a waffle iron according to manufacturer's instructions.Whisk flour, cornmeal, sugar, baking powder, baking soda, and salt together in a large mixing bowl.",
        },
        {
            url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6879705.jpg&w=596&h=596&c=sc&poi=face&q=85",
            title: "8Lemon-Ricotta Cornmeal Waffles",
            description: "Preheat a waffle iron according to manufacturer's instructions.Whisk flour, cornmeal, sugar, baking powder, baking soda, and salt together in a large mixing bowl.",
        },

    ]

    return (
        <>
            <RecipesWrapper recipes={someArr} limit="4"/>
        </>
    )
}

export default Home