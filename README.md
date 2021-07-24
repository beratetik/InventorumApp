# Inventorum App 

This project was bootstrapped with CRA with typescript template.

[![Netlify Status](https://api.netlify.com/api/v1/badges/af01f9cc-adf7-480f-ad17-015c1e95fc98/deploy-status)](https://app.netlify.com/sites/inventorum/deploys)

You can try Inventorum App [here](https://inventorum.netlify.app/contacts)

## Installation

### `npm install`

Installs all the dependencies for this project

Project has only external packages(3rd Party) below:
- Styled Components
- React Router

I didn't want to use any other because of

### `npm start`

Runs the app locally


## Folder Structure

    app
    └── src 
        ├── components
        ├── pages
        ├── routes
        └── shared
              ├── assets (It stores logo/icons/images)
              ├── components
              ├── config
              ├── hooks
              ├── store
              ├── styles
              ├── types
              ├── styles
              └── utils 


- src/components

    It contains general components of the app. These components are also using `shared/components` in order to avoid redeclaring styles or types for the atomic components.
    Also These components may have inner `components` folder inside of it which has small components that are using. In this way it is easier to manage components


- src/pages

    It contains pages of the app


- src/routes

    It creates app routes with given config file under config/routes

- src/shared/assets

  assets (It stores logo/icons/images)


- src/shared/components

    This folder has common usage components such as Navbar, SideMenu and also atomic components
    Atomic components make it easier to manage and style in one place for the whole app.
    For instance; we may need to update 'input' styles. In this scenerio the only thing that we need to do is update styles fot this atomic components. It will automatically update the components' styles that are using this


- src/shared/config
  
  It stores static config files for 'forms', 'side menu items', 'routes' and 'styles' 


- src/shared/hooks

  It stores custom hooks that may provide us to solve more conceise way.
  I was also planning to create a hook called as 'useForm' to make easier to manage
  custom forms, but no time left to complete it


- src/shared/services

  It stores api calls for now. For later, I mean while the project is growing, we may create different kind of services here like 'LocalStorageService' or 'BroadcastService' etc.


- src/shared/store

  It stores contexts. We can create new contexts into this folder to manage other parts of the app. I also created a helper function(createContextHelper) that dynamically generates context and returns hook and provider. In this way we got rid of import needed `Context` and `React's useContext`. We can just calling 'useMyContext()'

  For instance, 'GlobalStorage' simply manages SideMenu state and it can be call 'useGlobalContext()' in any place


- src/shared/styles

  This folder has global styles of the app and common styles


- src/shared/types

  This folder contains common using types



### Notes

  I used Create-React-App template but if the project will become bigger, I would use custom build with using webpack. Beucase it has lots of plugins to make it easier developers workload and also increase the performance of the app.
