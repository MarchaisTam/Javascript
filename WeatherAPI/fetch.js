/**
 * For this you will need to take a look on this website https://jsonplaceholder.typicode.com
 */



/**
 * This function is asynchronous, it will be delivered when the server respond.
 * For a fetch you need two args, url is the string that contains the url Request (https://developer.mozilla.org/en-US/docs/Web/API/Request/Request)
 * Take a few moment to look what Request represent
 * Has you can see actually, i'm doing all in one with the fetch method.
 * @param {String} url
 * @param {Obj} data
 * Obj returns contain the data
 * @returns {Obj}
 */
async function getData(url = "") {
  const response = await fetch(url, {
    //Like php or other back office language method define the action you will do
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    //cors for cross origin ressource sharing, allow or doesn't allow external ressources  see (https://developer.mozilla.org/en-US/docs/Web/API/Request/mode#value)
    mode: "cors", // no-cors, *cors, same-origin
    /**
     * Cache provides a persistent storage mechanism for request / response
     */
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //more informations here (https://developer.mozilla.org/en-US/docs/Web/API/fetch#credentials)
    credentials: "same-origin", // include, *same-origin, omit
    //more informations here (https://developer.mozilla.org/en-US/docs/Web/API/Headers)
    headers: {
      //Precision about the content (see MIME https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    //more information https://developer.mozilla.org/en-US/docs/Web/API/fetch#redirect
    redirect: "follow", // manual, *follow, error

    //more information https://w3c.github.io/webappsec-referrer-policy/#referrer-policies
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  
  /**
   * response ?
   * (https://developer.mozilla.org/en-US/docs/Web/API/Response)
   */
  return response.json();
}
/**
 * This one will POST information on the server
 * Actually in back end languages you do all in one getting the ressources controlling it
 * And POST with an SQL query
 * This below do that in the API way, you send the data at the back office, and the back language control, et send it with query
 * The steps are simple make a fetch, in the options of the Request put all the necessary
 * The methods, a POST or a PUT
 *
 * @param {String} url
 * @param {Obj} data
 * @returns
 */
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    //Change the method
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    "Content-type": "application/json; charset=UTF-8",
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    /**
          * here is the body of the request, you send an Object in args
          * this object is like that 
          * {
          *  title: "foo",
          *  body: "bar",
          *  userId: 1,
          *      }
          * it will be transform with the JSON method stringify (transform text/json into plain/text); 
          * the results will be like that
          */
    body: JSON.stringify(data), // body data type must match "Content-Type" header);
  });
  //taking a look on the original data
  console.log(data);
  //taking a look on the stringified data
  console.log(JSON.stringify(data));

  return response.json();
}

/**
 * You will get the data in the post id
 */
getData("https://jsonplaceholder.typicode.com/posts/1").then(function (data) {
  console.log("that is the response in the fetch using get has method:", data);
});

/**
 * On JSON placeholder the resource will not be written but it will fake as if
 * the first arg String url, Second one is the object you want to POST
 * you can store it before in a var
 */
postData("https://jsonplaceholder.typicode.com/posts", {
  title: "foo",
  body: "bar",
  userId: 1,
}).then(function (data) {
  console.log(data);
});















