# 🌟 Shiny-dex 🌟

A dynamic web application that leverages the **PokeAPI** to fetch, display, and manage Pokémon data in an appealing card format. Catch a glimpse of your favorite Pokémon, filter the collection, and try your luck at finding a rare **Shiny** version!

## Features

* **Extensive Collection:** Fetches and displays Pokémon from **ID 1 to 251** (Generation I and II) using the PokeAPI.
* **Detailed Card View:** Each Pokémon is rendered in a stylish card showing its **ID, Name, Image, and Type(s)**.
* **Random Shiny Chance:** Each time the cards are loaded, there's a **1/77 chance** for any given Pokémon to appear in its rare **Shiny** form.
* **Live Filtering:** Easily find any Pokémon by typing its name into the search bar, with results updating instantly.
* **Responsive Design:** Optimized for a smooth experience across different devices.


### 1. Main Card View

The main interface displays the fetched Pokémon cards. Notice the clean layout and the dedicated search bar at the top.

![Main Interface of the Pokémon Card Explorer with the Search Bar highlighted.](image/page1.png)

### 2. Live Filtering in Action

As you type into the search bar, the card collection updates dynamically, making it easy to zero in on specific Pokémon. The user settings section (where the image originally pointed) is replaced by the actual feature of this app: **The Shiny Counter and Search input**.

![The application showing the filtering process and the location of the Shiny counter.](image/page2.png)

## How it Works (Code Snippets)

### Fetching Pokémon Data

The core data is asynchronously retrieved from the PokeAPI.

```javascript
// Fetches Pokémon from base ID up to the limit
const getPokemons = async (base = 1, limit = 9) => {
    // ... loader management ...
    for (base; base <= limit; base++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${base}`)
        const data = await response.json()
        packPokemon.push(data)
    }
    // ...
}
