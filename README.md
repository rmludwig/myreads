# README for Rich Ludwig's MyReads Project


## Installing the Application
1. Clone the repo from https://github.com/rmludwig/myreads.git.
   Example: `git clone https://github.com/rmludwig/myreads.git`
2. Change to the new directory `cd myreads`.
3. Run `npm install`.


## Running the Application
1. Run the development server with `npm start`.
2. Open the app in a browser using URL like http://localhost:3000/


## Using the application
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there.

The main page also has a link to /search, a search page that allows you to find books to add to your library. The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. If the searched book is on a bookshelf, it will have the same location on the search page.

The search page also has a link to / (the root URL), which leads back to the main page. When you navigate back to the main page from the search page, you will see all of the selections you made on the search page in your library.


## Added Features
- Added CSS for the "home" or "back" button on the search page.
- Added a "No books found" message if there are no books in the library.
- Allowed display of empty shelf only if at least one book is found on other shelves.
- Added Throttling for smoother behavior in search page.


## Components
Below is a map of the components I used in my app.

```bash
App.js                        # React Application
├── SearchForBooks.js         # Search component manages search and results
│   └── SearchResults.js      # Used for presenting a group of books (like shelf)
│       └── Book.js           # Instance of a book (reused below)
│           └── ManageBook.js # control for a book instance (reused below)
└── BookCase.js               # A collection of book shelves
    └── BookShelf.js          # A collection of books aka a shelf
        └── Book.js           # Instance of a book (same as above)
            └── ManageBook.js # control for a book instance (same as above)
```


---------------------------------------------------------------------
*All info below was a part of initial README for the MyReads project*

# MyReads Project

This is the starter template for the final assessment project for Udacity's React Fundamentals course. The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
