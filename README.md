# Halter Full Stack Developer Test


Install [nodemon](https://github.com/remy/nodemon) globally

```
npm i nodemon -g
```

Install server and client dependencies

```
yarn
cd client
yarn
```

To start the server and client at the same time (from the root of the project)

```
yarn dev
```

Notes:
I have realised in the last hour that the rc-swipeout library I have used for the swipeable rows was written in react-native using gesture hooks - this means the swipe functionality currently only works in a responsive view (f12 -> Ctrl + Shift + M). I imagine this would be a simple media query / global css fix but I haven't had the time to look into it

Rather than click on a herd to open up and view the cows please swipe right and click open instead, I thought this would be cooler than a standard click.




