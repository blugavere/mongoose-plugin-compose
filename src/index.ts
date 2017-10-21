
import { Schema } from 'mongoose';

/*
 * Mongoose Plugin Compose
 * Copyright(c) 2017 Ben Lugavere <b.lugavere@gmail.com>
 * Original work Copyright(c) 2017 Ben Lugavere
 * MIT Licensed
 */

function isClass(model: typeof Function | object): model is Function {
  return typeof model === 'function';
}

const composePlugin = (Model: typeof Function | object) => (schema: Schema, options: Object): Schema => {
  if (isClass(Model)) {
    Object.getOwnPropertyNames(Model.prototype)
      .slice(1) // remove constructor
      .forEach(key => {
        schema.methods[key] = Model.prototype[key];
      });
  } else {
    Object.keys(Model)
      .forEach(key => {
        schema.methods[key] = Model[key];
      });
  }
  return schema;
};

export default composePlugin;
