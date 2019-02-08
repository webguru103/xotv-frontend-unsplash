# XOTV - Frontend Test

## Introduction
Stack - React, Redux
Third-party API - unsplash API


## Some Libraries that have been used

#### styled-components

There are many libraries to handle style in React. One of the best libraries is [styled-component](https://www.styled-components.com/) since you can manage style of components base on behaviors.

#### Redux Persist

[Redux](https://redux.js.org/) was used as store management Since we don't want to lose user informations such as user profile or access token. [Redux Persist](https://github.com/rt2zz/redux-persist) was used to store user state into local storage. The configuration is easier than you would think!


*For more information please see the [create-react-app documentation](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables).*

constants/service-info.js for unsplash API
```
API_ROOT = 'https://api.unsplash.com';

CLIENT_ID = 'xxxxxxxxxxx';

CLIENT_SECRET = 'xxxxxxxxxxxxx';
```

## Project Commands

#### Install App
```
yarn or npm install
```

#### Start App
```
yarn start or npm run start
```

#### Features

- After running app, the photos come from unsplash backend `/photos?`
- The pagination based on mouse scrolling.
- On the right sidebar, the dynamic search users feature and user list with username
- When to select one user, the photos come from `/users/:username/photos`
- Not Found component.
- Redux store and state management.
