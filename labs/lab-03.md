# Lab 03

A series of labs covering classes and object-oriented JavaScript.

## Lab 03-1

Create a class called DataTable in a separate file, DataTable.js. Use a config-style constructor. Properties should include `records` and `el`.  

* `records` will store the records of the DataTable. Default is an empty array.
* `el` is going to store the parent element of the data table. Default is `document.body`.

Create getter and setter methods for records and el.
Create a `render` method that creates some HTML (placeholder HTML is fine for now) and adds it as the only child of el.

Import DataTable.js into lab-03.js. Create an instance of it and assign it somewhere in lab-03.html. Make sure that it renders correctly. (That is, after configuring it, call the `render` method and make sure that it shows up in the page)

## Lab 03-2

Create a class, UsersTable, with an appropriate filename. UsersTable should inherit from DataTable and add the following features:  

* A `columns` configuration. Empty array as a default.
  * Should be an array of column configurations, like this:

```javascript
const columns = [
  {
    field: 'displayName',
    label: 'Name',
  },
  {
    field: 'address.city',
    label: 'City'
  }
  // And so on
]
```
* An `onSort` property, no-op function as a default.
* As part of the `render` method (which still uses placeholder HTML), print out a list of the columns. You can fully override `render` or try to use the super version, as you see fit.