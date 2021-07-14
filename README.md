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
* `app.py`: An extremely simple flask app that displays `static/index.html` and serves everything else in `static` to your browser.
* `static/index.html`: The homepage. It loads the JS scripts, CSS styles, and creates an empty div called `id="layout"`. You can edit this file to add any other static files (js, css) that you created.
* `static/main.js`: Generic code to fetch the python file, load `pyodide`, and run the python file with `pyodide.py`. You can modify this if you want to fetch and run other python files you added.
* `static/main.css`: An empty stylesheet, where you can add your custom styles for `index.html`.
* `static/main.py`: A placeholder python script that you can directly modify.

