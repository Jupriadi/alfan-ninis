const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {},
    },
    plugins: [
        iconsPlugin({
            // Select the icon collections you want to use
            collections: getIconCollections(["mdi", "uil", "ri"]),
        }),
    ],
}