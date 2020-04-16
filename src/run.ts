import { render } from './render';
import { users } from './user';
import { customers } from './customer';
import { personView, personName } from './view';

render(
	'users:',
	users.map(personView),
)
render(
	'customers:',
	customers.map(({ name }) => personName(name)),
)
