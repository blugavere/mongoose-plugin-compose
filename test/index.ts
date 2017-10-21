
import compose from '../src';
import { expect } from 'chai';
import { model, Schema } from 'mongoose';
import CatModel from './Cat';

const getSchema = () => new Schema({
  color: String
});

describe('package', () => {
  let cat;
  let dog;
  before(() => {
    const catSchema = getSchema();
    const dogSchema = getSchema();
    catSchema.plugin(compose(CatModel));
    dogSchema.plugin(compose({
      run: CatModel.prototype.run
    }));

    const Cat = model('Cat', catSchema);
    const Dog = model('Dog', dogSchema);

    cat = new Cat({
      color: 'grey'
    });
    dog = new Dog({
      color: 'brown'
    });

  });
  it('should work fo func', async () => {
    expect(cat.run).to.exist;
    const response = cat.run();
    expect(response).to.contain('grey');
  });
  it('should work fo obj', async () => {
    expect(dog.run).to.exist;
    const response = dog.run();
    expect(response).to.contain('brown');
  });
});
