[![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

# Mongoose Plugin Compose

Defer commitment to the ORM. Separate your domain models from your persistence models.

```js

const compose = require('mongoose-plugin-compose').default;

class Animal {
  speak(){
    console.log(this.name)
  }
}

const Cat = mongoose.model('Cat', new mongoose.Schema({
  name: String
}));

Cat.schema.plugin(compose(Animal));

const cat = new Cat({ name: 'fido'});

cat.speak(); // fido

```
[travis-image]: https://travis-ci.org/blugavere/mongoose-plugin-compose.svg?branch=master
[travis-url]: https://travis-ci.org/blugavere/mongoose-plugin-compose

[coveralls-image]: https://coveralls.io/repos/blugavere/mongoose-plugin-compose/badge.svg
[coveralls-url]: https://coveralls.io/r/blugavere/mongoose-plugin-compose
