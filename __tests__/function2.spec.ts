var underTest = require('../function2.js');
import { Callback, Context } from 'aws-lambda';

jest.useFakeTimers();

const myMock = jest.fn();



// var lambdaContextSpy;

var lambdaContextSpy = {
  done: jest.fn().mockImplementation(() => 'done')
};

beforeAll( () => {
  // plan = new Plan('demo');
  // lambdaContextSpy = jasmine.createSpyObj('lambdaContext', ['done']);
});

it('test plan greeting', () => {
    expect(true).toBe(true);
});

it('returns hub challenge if the tokens match', (done) => {
    underTest.proxyRouter({
      requestContext: {
        resourcePath: '/rate',
        httpMethod: 'GET'
      },
      queryStringParameters: {
        'hub.verify_token': '12345',
        'hub.challenge': 'XHCG'
      }
    }, lambdaContextSpy).then(() => {
        // expect(myMock.done).toHaveBeenCalledWith(null, jasmine.objectContaining({body:'XHCG'}));
        expect(lambdaContextSpy.done).toBeCalled();
        console.log(JSON.stringify(lambdaContextSpy));
        // expect(myMock.done).toBeCalled();

    }).then(done, done.fail);
  });



