# Chapter - 7, Finding the Path

## Q. What are the various ways to add images

Ans. Add using CDN links directly, using the full path of the image
Example:

```
<img src="https://logo.png" alt="image" />
```

**OR**
Downloading that image and default importing into your project

```
import Logo from "./Logo.png";
export default function App() {
  return <img src={Logo} alt="react logo" />
}
```

Its a good way to arrange all your images into `assets` folder under img folder.

```
import Logo from "../../assets/images/Logo.png";
export default function App() {
  return <img src={Logo} alt="react logo" />
}
```

## Q: What will happen if we do console.log(useState()) ?

Ans : It will give us an array `[undefined, f()]` whose first item will be state variable, and 2nd item will be the function
to `setState` of that state variable.

## Q: How will `useEffect` behave if we `don't add` a `dependency array`?

Ans : useEffect hook is a function which takes 2 arguments, 1st is the callback function and 2nd is the dependency array.
useEffect(()=> {}, []);
There are 3 cases

`Case 1`: If we do not `dependency array`, it will be called on `every render and re-render` of the component.

```
useEffect(() => {
   // Do something
})
```

`Case 2`: If we pass `dependency array` and there is nothing in the array. It will be executed only once after the initial render.

```
useEffect(() => {
  console.log("I will run once after the initial render/ when the component is mounted.")
}, [])
```

`Case 3`: When we pass something in the `dependency array`, the callback function will be executed `one time` during the initial render of the component and it will be executed everytime when the value passed in the array changes.

```
useEffect(() => {
 console.log("I will run once after the initial render/ when the component is mounted.")
}, [searchText])
```

## Q: What is SPA - Single Page Application ?

Ans: SPA is a `web implementation` which allows to load data dynamically on website without reloading/ refreshing the whole application. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.

An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.

This therefore allows users to use websites without loading whole new pages from the server, which can result in performance gains and a more dynamic experience, with some tradeoff disadvantages such as SEO, more effort required to maintain state, implement navigation, and do meaningful performance monitoring.

## Q: What is the difference between `Client Side Routing` and `Server Side Routing`?

A: In `Server-side routing or rendering (SSR)`, every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All `Single Page Applications uses client-side routing`

So using react-router this would enable us to rerender our application with client-side javascript that is going to allow us to create a `**single page application**` that would enable us to swap out application simulating the page change.
The difference between this two routing have been stated above server sides needs to keep making requests to the server in order for the application to rerender, but client side does not need to keep make request to the server, it just does it once when the application is being loaded into the browser any other navigation or page change is just being rendered from the already saved application, so a client side application can still function without the internet as long as it has already being loaded in with the internet.
