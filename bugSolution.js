The solution is to ensure that you only access the data after the promise has been resolved.  Here's an example using async/await:

```javascript
async function getData(docRef) {
  try {
    const doc = await docRef.get();
    if (doc.exists) {
      const data = doc.data();
      console.log("Data:", data);
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
}
```

For `onSnapshot`, ensure you check the existence of data within the listener:

```javascript
const unsubscribe = docRef.onSnapshot((doc) => {
  if (doc.exists) {
    console.log("Current data:", doc.data());
  } else {
    console.log("No such document!");
  }
});
```
By using async/await or carefully handling the promise resolution, you prevent errors and ensure reliable data access.