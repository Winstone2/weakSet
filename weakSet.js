function display() {
    var ws = new WeakSet();
    var obj1 = {};
    var obj2 = {};
    ws.add(obj1);
    ws.add(obj2);

    // Check if objects exist in the WeakSet
    document.writeln(ws.has(obj1) + "<br>"); // true
    document.writeln(ws.has(obj2));          // true
}

display();
