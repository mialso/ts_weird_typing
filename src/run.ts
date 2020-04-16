import { render } from './render';
import { users } from './user';
import { personView } from './view';

render(users.map(personView))
