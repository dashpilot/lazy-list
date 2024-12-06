# LazyList

LazyList is a vanilla js list editor that allows you to:

-   define input fields for the list items
-   add new list items
-   delete list items (with optional confim)
-   serialize the list
-   post to an enpoint to save the serialized list (optional)

## How to:

First define the layout for your list

```html
<div id="my-component" class="container mt-5">
    <!-- define the template for the list-items -->
    <template>
        <li class="list-group-item d-flex gap-3">
            <input type="text" class="form-control" name="title" placeholder="title" value="" />
            <input type="text" class="form-control" name="subtitle" placeholder="subtitle" value="" />
            <!-- the delete button has an attribute of data-action="delete" -->
            <button class="btn btn-outline-secondary" data-action="delete">-</button>
        </li>
    </template>

    <!-- the add button has an attribute of data-action="add" -->
    <button class="btn btn-outline-secondary mb-3" data-action="add">+</button>

    <ul class="list-group">
        <!-- This is where the list items will appear -->
    </ul>

    <!-- the save button has an attribute of data-action="add" -->
    <button class="btn btn-outline-secondary mt-3" data-action="serialize">Save</button>
</div>
```

Then include the js and initialize LazyList:

```html
<script src="lazy-list.js"></script>
<script>
    const myLazyList = new LazyList('#my-component', false, true);
</script>
```
