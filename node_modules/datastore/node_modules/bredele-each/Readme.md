# each

  Iteration utility.

## Installation

with component:

    $ component install bredele/each

with nodejs:

    $ npm install bredele-each

## API

You'll find lots of iteration components out there (like [component-each](https://github.com/component/each)). However, `each` exposes a consistent API for both arrays and objects (the first argument is the object's key - or index for an array -).


### each(array, fn, [scope])

  Iterate an array:

```js
each(['olivier', 'bredele'], function(key, val){
  //key is the array's index
})
```

### each(object, fn, [scope])

  Iterate an object;

```js
each(conf, function(key, val){
  //key is the object's key
})
```


## License

  MIT
