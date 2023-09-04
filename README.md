# weakSet
The code you provided demonstrates the usage of a WeakSet in JavaScript. A WeakSet is a collection of objects where the objects must be unique, and the references to these objects are held weakly, meaning they do not prevent the objects from being garbage collected when there are no other references to them. Here's the thought process and an example of the code you provided:

    Create a Function display():
        The code defines a JavaScript function named display().

    Create a WeakSet ws:
        Inside the display() function, a new WeakSet object ws is created using the new WeakSet() constructor. This creates an empty WeakSet.

    Create Two Empty Objects obj1 and obj2:
        Two empty objects, obj1 and obj2, are created using object literal notation {}. These objects are initially not associated with any variable or container.

    Add Objects to the WeakSet:
        The ws.add(obj1) method is used to add obj1 to the WeakSet ws.
        Similarly, ws.add(obj2) is used to add obj2 to the WeakSet.

    Check If Objects Exist in the WeakSet:
        The code uses the ws.has(obj1) method to check if obj1 is present in the WeakSet ws.
        It then uses ws.has(obj2) to check if obj2 is present.

    Display Results:
        The results of the ws.has(obj1) and ws.has(obj2) checks are displayed using document.writeln().

    Invoke the display() Function:
        Finally, the display() function is invoked, triggering the execution of the code within it.
        In this example, obj1 and obj2 are added to the ws WeakSet using ws.add(). When we check if these objects exist in the WeakSet using ws.has(), both checks return true because both obj1 and obj2 have been added to the WeakSet.

One key characteristic of WeakSets is that they do not prevent objects from being garbage collected if there are no other references to those objects. This makes them useful for scenarios where you want to associate data with objects without preventing those objects from being cleaned up by the garbage collector when they are no longer needed.
