# Advice Generator

This is a simple React application that fetches random pieces of advice from the [Advice Slip API](https://api.adviceslip.com/). The app displays the advice on the screen and allows users to fetch new advice with a button click. Additionally, it keeps track of the number of advice pieces the user has received.

## Features

- **Random Advice**: Fetches random advice from an API.
- **Dynamic Updates**: Each time the button is clicked, new advice is displayed, and the counter increments.
- **State Management**: The app uses React's `useState` and `useEffect` hooks for managing state and side effects.

## Tech Stack

- **React**: JavaScript library for building the user interface.
- **CSS**: Styling the components (included in `Advice.css`).
- **Advice Slip API**: Provides random pieces of advice.

## How to Use

1. Open the application.
2. The app will initially display a default advice: "Have a good Day :)"
3. Click the **Get Free Advice** button to fetch a random piece of advice.
4. The number of advice pieces you have read will be displayed below the button.

## Installation

If you'd like to run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/advice-generator.git
