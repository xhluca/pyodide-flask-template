This template is useful to start serving pure JS+pyodide webpages without further dependencies.

## File structure

```
static/
    css/
        main.css
    js/
        main.js
    py/
        main.py
    index.html
app.py
```

Let's go over the files:
* `app.py`: This is an extremely simple flask app that displays `static/index.html` and serves everything else in `static` to your browser.
* `static/index.html`: This is the homepage of your "app". Loads the JS scripts, CSS styles, and create an empty div called `id="layout"`. You can edit this file to add any other static files (js, css) that you create.
* `static/main.js`: Some generic code to fetch the python file, load `pyodide`, and run the python file with `pyodide.py`. You can modify this if you want to run other python files you create, or just to fetch more python files.
* `static/main.css`: An empty stylesheet, where you can add your custom style that will be reflected in `index.html`.
* `static/main.py`: A placeholder python script that you can directly modify.

