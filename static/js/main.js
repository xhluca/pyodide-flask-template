async function main() {
    await loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.17.0/full/"
    });

    const script = await fetch("/static/py/main.py");
    const scriptText = await script.text();
    pyodide.runPython(scriptText);
}

main();