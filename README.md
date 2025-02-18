# Firebase Data Access Errors: Handling Asynchronous Operations

This repository demonstrates a common error when working with Firebase: attempting to access data from a document snapshot before it's fully populated.  The `bug.js` file shows the problematic code, while `bugSolution.js` presents the corrected version.

## Problem
The issue arises from the asynchronous nature of Firebase operations. If you access snapshot data before the promise from a `get()` or `onSnapshot` resolves, you'll encounter undefined values or errors.

## Solution
Always ensure your data access occurs within the `then()` block of a promise or after the snapshot has been successfully populated with the `onSnapshot` listener.