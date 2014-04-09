# con

  > JSON in your console

 Con is a french bad word but it's also a shell command line to manipulate JSON directly from your console. 


## Installation

 Install with [nodejs](http://nodejs.org):

    $ npm install -g con

## Usage

 ```
Usage: con [<file>]

Examples:

  # get name attribute:
  $ con file.json get name

  # set name attribute:
  $ con file.json set name bredele

  # enable awesome attribute:
  $ con file.json enable awesome

  # disable awesome attribute:
  $ con file.json disable awesome

  # bump version
  $ con file.json bump
  
```

### Bump

 Con use [node-semver](https://github.com/isaacs/node-semver), the semantic versioner of npm.

minor:
```
  con file.json bump minor
```

major:
```
  con file.json bump major
```

patch:
```
  con file.json bump patch
```

prerelease:
```
  con file.json bump patch
```

custom:
```
  con file.json bump 0.1.1
```

## License

  The MIT License (MIT)

  Copyright (c) 2014 <olivier.wietrich@gmail.com>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.