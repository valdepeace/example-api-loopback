// Create a file named `my-basic-auth-strategy.ts` to define your strategy below
// In file 'my-basic-auth-strategy.ts'
import {StrategyAdapter} from '@loopback/authentication-passport';
import {BasicStrategy} from 'passport-http';
import {myUserProfileFactory} from './my.userprofile.factory';

function verify(username: string, password: string, cb: Function) {
  // users.find(username, password, cb);
  console.log(password + username);
  if(username === process.env.AUTH_BASIC_USERNAME && password === process.env.AUTH_BASIC_PASSWORD){
    cb(null, true);
  }else{
    cb(null, false);
  }

}
const basicStrategy = new BasicStrategy(verify);

// Apply the adapter
export const AUTH_STRATEGY_NAME = 'BasicAuth';
export const basicAuthStrategy = new StrategyAdapter(
  // The configured basic strategy instance
  basicStrategy,
  // Give the strategy a name
  // You'd better define your strategy name as a constant, like
  // `const AUTH_STRATEGY_NAME = 'basic'`.
  // You will need to decorate the APIs later with the same name.
  AUTH_STRATEGY_NAME,
  // Provide a user profile factory
  myUserProfileFactory,
);
