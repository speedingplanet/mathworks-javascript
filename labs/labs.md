# Labs

## Lab 1: Warm-up

In this (_labs_) folder, create a file `greeter.html`.  
Add a `div` with an id that you can remember, like `output`.

Add an in-line `script` block which:

- Gets a reference to the div
- Changes its content to say "Hello _your name_"

Check to make sure it works.

## Lab 2: Improvements and modules

Take the code in the in-line `script` block and move it to its own file: `greeter.js`.  
Reference the JavaScript file from the HTML file. Be sure to reference `greeter.js`
as a module, not just a plain JavaScript file.

Re-verify that everything works. Make sure you view this through the web server, e.g.
http://localhost:3000/labs/greeter.html.

## Lab 3: Event handling

### HTML

Add a button to the page that says "Greet me".

If you want to style the button nicely, add the following tag somewhere in the `<head>`
section of your HTML document:

```html
<link rel="stylesheet" href="/css/bootstrap.css" />
```

You can replace everything within the `body` (but **not** the `script` tag) with
the following:

```html
<!-- Emmet: main.container>header.row>.col>h1 -->
<main class="container">
  <header class="row">
    <div class="col">
      <h1>Greeter Labs</h1>
    </div>
  </header>
  <!-- Emmet: .row>.col>button.btn.btn-primary -->
  <div class="row">
    <div class="col"><button class="btn btn-primary">Click me</button></div>
  </div>
  <!-- Emmet: .row>.col>#output -->
  <div class="row">
    <div class="col">
      <div id="output">
        <!-- Your output content goes here -->
      </div>
    </div>
  </div>
</main>
```

Check the [Bootstrap Documentation](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
for more details. Especially look at the [buttons documentation](https://getbootstrap.com/docs/5.2/components/buttons/)

### JavaScript

In your JavaScript file, comment out the code that greets you by name.  
Hook up an event handler to the button, so that when someone clicks on the
button, they are greeted. You will have to hard-code the name for now.

You are, in essence, taking the code from the last exercise, and instead
of running it when the page loads, running it when the user clicks on a button.

Test your code and make sure it works.

## Lab 4: Form input

We will add a single-line text field to the HTML, and then capture the content there
to greet the user by their name.

### HTML

Add a single-line text field to your HTML file. Bootstrap has lots of information on
[form controls](https://getbootstrap.com/docs/5.2/forms/form-control/). Here's an example
of what you could use:

```html
<!-- Emmet: div>label.form-label+input:text.form-control#user-name -->
<div>
  <label for="user-name" class="form-label">Enter your name:</label>
  <input type="text" name="user-name" id="user-name" class="form-control" />
</div>
```

### JavaScript

Update the event handler on the button to grab the input from the text field.  
Then, use that information to render a customized greeting, using the user's
name, rather than the previously hard-coded name.

## Lab 5: More event handling

We will create a version of the greeter page that doesn't need a button
to activate.

### Files

Create copies of the greeter HTML and JavaScript files. As a suggestion, call the copies
something like `greeter-no-button.html` and `greeter-no-button.js`.

### HTML

Comment out the button in the HTML.

### JavaScript

Add an event handler to the input field. When the user enters input, update
the greeting with the input. That is, as the user types, the greeting reflects
what the user is typing:

```
Hello, J
Hello, Jo
Hello, Joh
Hello, John
```

### Improvements

Set up the event handler so that it does not render the greeting until the
input is at least two characters long.

Update the event handler so that it displays a default greeting ("Hello!"
"Greetings to you!" or similar). When the input reaches the minimum, replace
the default greeting with the customized one.

## Lab 6: A full form

Return to the version of the greeter that has a button with an event handler.
We will add a complete form to the page and grab the content from it to greet
the user.

### HTML

We have to do a few things with the text field and the button:

- Wrap them in a `form` element
- Add a single-line text field called `first-name`
- Change the existing single-line text field to `last-name`
- Change the button to be a submit button

Ultimately, the input section of the document should look like this:

```html
<form>
  <div class="row">
    <div class="col">
      <label for="first-name" class="form-label">Enter your first name:</label>
      <input type="text" name="first-name" id="first-name" class="form-control" />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <label for="last-name" class="form-label">Enter your last name:</label>
      <input type="text" name="last-name" id="last-name" class="form-control" />
    </div>
  </div>
  <div class="row mt-2">
    <div class="col"><button type="submit" class="btn btn-primary">Greet me</button></div>
  </div>
</form>
```

### JavaScript

Change the event handler to a `submit` event handler and attach it to the form.

- Turn off the default behavior (we don't actually want to submit the form)
- Capture the data from the two form fields using a `FormData` object
- Use the `FormData` object to build the greeting
- Render the greeting as usual

## Lab 7: Rendering data to the page

Now we'll add a list of students to the page. Ultimately, we will want the form data to be added to this list of students

### HTML

Add a row, col, and div with an id "student-list" below the `#output` row, col and div.

```html
<div class="row">
  <div class="col" id="output"></div>
</div>
<div class="row">
  <div class="col" id="students-list"></div>
</div>
```

### JavaScript

- Import `students` from `../data/students-module.js`
- Write a function `renderStudents`. It shuold take arguments of an array of
  students to render, and the id of an element to render the students to.
- `renderStudents` should build an unordered list, where each student's first
  and last names are list items. Like this:

```html
<ul>
  <li>John Paxton</li>
  <li>Daniel Smith</li>
  <!-- And so on -->
</ul>
```

- `renderStudents` should render this unordered list into the element with the
  id in the second argument to the function
- Call `renderStudents` when the page loads, passing it the list of students
  you imported, and the id 'student-list'

Check to see if everything works!

### Challenge

Instead of building an unordered list, build an HTML table. Here's a sample:

```html
<table>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>Paxton</td>
    </tr>
    <tr>
      <td>Daniel</td>
      <td>Kotlinski</td>
    </tr>
    <!-- And so on -->
  </tbody>
</table>
```

## Lab 8: Async

We will replace importing the data directly with fetching the data from a remote source.

- From a command prompt, make sure that you run `npm run rest-server`. This will
  start a server at http://localhost:8000. You can visit that address in your
  browser to test it.
- Comment out the `import` of `students-module.js`.
- Create a function `fetchStudents`. It should take an argument of a URL.
- In `fetchStudents`, use the `fetch` command to retrieve data from the supplied
  URL. You can assume the data will be in the right format (i.e., an array of student objects)
  - You can use async/await format
  - Or Promises
- Return the array of students/Promise of the array of students from `fetchStudents`
- In the main part of the script, call `fetchStudents` and retrieve the results
- Either using Promises or async/await, take the return value from `fetchStudents`
  and pass it to `renderStudents` from the last lab.

Test your code and see if it works!
