# LazyList

LazyList is a vanilla js list editor that allows you to:

-   define input fields for the list items
-   add new list items
-   delete list items (with optional confim)
-   serialize the list
-   post to an enpoint to save the serialized list (optional)

LazyList works with your existing html, so you have a lot of freedom in the design and fields. The example uses simple Bootstrap styling.

## How to:

First define the layout for your list

```html
<div id="my-component" class="container mt-5">
    <!-- use a template tag to define the template for the list-items -->
    <template>
        <li class="list-group-item d-flex gap-3">
            <!-- fields can be anything you like, type: input, textarea or select -->
            <input type="text" class="form-control" name="title" placeholder="title" value="" />
            <input type="text" class="form-control" name="subtitle" placeholder="subtitle" value="" />
            <!-- the delete button has an attribute of data-action="delete" -->
            <button class="btn btn-outline-secondary" data-action="delete">-</button>
        </li>
    </template>

    <!-- the add button has an attribute of data-action="add" -->
    <button class="btn btn-outline-secondary mb-3" data-action="add">+</button>

    <ul class="list-group">
        <!-- This is where the list items will appear, the element should be a 'ul' -->
    </ul>

    <!-- the save button has an attribute of data-action="add" -->
    <button class="btn btn-outline-secondary mt-3" data-action="serialize">Save</button>
</div>
```

Then include the js and initialize LazyList:

```html
<script src="lazy-list.js"></script>
<script>
    // first parameter is the id of the wrapper
    // second parameter is an optional url to POST the serialized list to
    // set the third parameter to true, if you want a confirmation before deleting
    const myLazyList = new LazyList('#my-component', false, true);
</script>
```

## How to build

To build a minified version of the script, run:

```bash
npm run build
```

This will output a minified version in the `public` folder

## Live demo

https://lazy-list.vercel.app/
