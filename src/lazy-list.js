class LazyList {
    constructor(container, url = false, confirmDelete = false) {
        this.container = document.querySelector(container);
        this.url = url;
        this.confirmDelete = confirmDelete;
        this.init();
    }

    init() {
        this.container.addEventListener('click', (event) => {
            const action = event.target.getAttribute('data-action');
            if (action) {
                this[action](event);
            }
        });
    }

    add(event) {
        const template = this.container.querySelector('template');
        if (template) {
            const newItem = template.content.firstElementChild.cloneNode(true);
            // Clear the values of input fields in the cloned item
            const inputs = newItem.querySelectorAll('input, textarea, select');
            inputs.forEach((input) => {
                if (input.type === 'checkbox' || input.type === 'radio') {
                    input.checked = false;
                } else {
                    input.value = '';
                }
            });
            this.container.querySelector('ul').appendChild(newItem);
        }
    }

    delete(event) {
        const item = event.target.closest('li');
        if (this.confirmDelete) {
            if (confirm('Are you sure you wish to delete this item?')) {
                if (item) {
                    item.remove();
                }
            }
        } else {
            if (item) {
                item.remove();
            }
        }
    }

    serialize() {
        const items = this.container.querySelectorAll('li');
        const data = Array.from(items).map((item) => {
            const fields = item.querySelectorAll('[name]');
            const itemData = {};
            fields.forEach((field) => {
                itemData[field.name] = field.value;
            });
            return itemData;
        });
        console.log(data);
        if (this.url) {
            fetch(this.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((responseData) => {
                    console.log('Success:', responseData);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }
}
