# Clickemon Gotta Click em All!
Memory game build using React JS library.
Components state is managed to respond to user events.
1. The application renders 12 different Pokemon images to the screen. Each image listens for click events.
2. The application keeps track of the player's score. The user's score is incremented on clicking an image for the first time. The user's score resets to 0 if they click the same image more than once and if the player's score is greater that the previously set High Score then the High Score is updated to that score.
3. Every time an image is clicked, the images rendered to the page shuffle themselves in a random order.
4. Once the user's makes an incorrect guess or the player correctly guesses all 12 images an alert is triggerd and the game restarts.

Game is deployed to heroku. Here is the link [clickemon](https://pacific-basin-64724.herokuapp.com/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).