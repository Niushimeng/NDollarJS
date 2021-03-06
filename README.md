# NDollar

Implementation of the [$N Multistroke Recognizer](https://depts.washington.edu/aimgroup/proj/dollar/ndollar.html), in TypeScript/UMD package.


### Installation

simply:
```
  npm install ndollar-js
```

or for web browsers,
```html
  <script src="../dist/nDollar.js"></script>
```

---


### Example, Using as a node module
```js
    var nDollar = require("ndollar-js");
    var useBoundedRotationInvariance = true;
    var recognizer = new nDollar.Recognizer( useBoundedRotationInvariance );

    recognizer.LoadDefaultGestures( );

    var triangle = [[new nDollar.Point(30, 7),  new nDollar.Point(103, 7)],
                    [new nDollar.Point(103, 7), new nDollar.Point(66, 87)],
                    [new nDollar.Point(66, 87), new nDollar.Point(30, 7)]
                   ];

    recognizer.AddGesture( "triangle", triangle);

    var myHandDrawingOfTriangle = [ [new nDollar.Point(20, 7),   new nDollar.Point(54, 8),  new nDollar.Point(100, 10)],
                                    [new nDollar.Point(103, 7),  new nDollar.Point(82, 47), new nDollar.Point(66, 87)],
                                    [new nDollar.Point(66, 87),  new nDollar.Point(45, 45), new nDollar.Point(30, 7)]
                                   ];

    result = recognizer.recognize( myHandDrawingOfTriangle, requireSameNoOfStrokes, useProtractor);
    /*
      result = { Name: "triangle", Score: 8.076 }
    */

```

### Example, Using in the web browsers

```js
  var useBoundedRotationInvariance = true;
  var recognizer = new nDollar.Recognizer(useBoundedRotationInvariance);
  var strokes = [];
  var stroking = []

  recognizer.LoadDefaultGestures(  );

  var triangle = [[new nDollar.Point(30, 7),  new nDollar.Point(103, 7)],
                  [new nDollar.Point(103, 7), new nDollar.Point(66, 87)],
                  [new nDollar.Point(66, 87), new nDollar.Point(30, 7)]
                 ];

  recognizer.AddGesture( "triangle", triangle);

  var myHandDrawingOfTriangle = [ [new nDollar.Point(20, 7),   new nDollar.Point(54, 8),  new nDollar.Point(100, 10)],
                                  [new nDollar.Point(103, 7),  new nDollar.Point(82, 47), new nDollar.Point(66, 87)],
                                  [new nDollar.Point(66, 87),  new nDollar.Point(45, 45), new nDollar.Point(30, 7)]
                                 ];

  result = recognizer.recognize( myHandDrawingOfTriangle, requireSameNoOfStrokes, useProtractor);
    /*
      result = { Name: "triangle", Score: 8.076 }
    */

```



### Class Recognizer

You can check [https://depts.washington.edu/aimgroup/proj/dollar/ndollar.html] to get the idea of what it's can do and parameters you can play with.

The Recognizer class is the main clas who do all the works. We can just create instance by
```
var recognizer = new nDollar.Recognizer( useBoundedRotationInvariance );
```

Then we need to add knowledge to it by either loading defaults or create your own gestures.

```js
recognizer.LoadDefaultGestures( )
```

This load pre-built 16 shapes of gestures same as in the original.

![Original](https://depts.washington.edu/aimgroup/proj/dollar/multistrokes.gif).

Or you can create your own shapes  

```js
  var triangle = [[new nDollar.Point(30, 7),  new nDollar.Point(103, 7)],
                  [new nDollar.Point(103, 7), new nDollar.Point(66, 87)],
                  [new nDollar.Point(66, 87), new nDollar.Point(30, 7)]
                 ];

  recognizer.AddGesture( "triangle", triangle);
```

Then you can test your gesture to the recognizer.

```js
result = recognizer.recognize( handDrawingOfTriangle, requireSameNoOfStrokes, useProtractor);
```

### Recognize options
   * __useBoundedRotationInvariance__ : Strict the orientation of shape, If this is `true`, It's will not match the shape if it's too much different angle.
   * __requireSameNoOfStrokes__ : Match the shape only when stroke count is equal.
   * __useProtractor__ : select alghorithm to compare shape, between original Golden Section Search and Protactor search.
