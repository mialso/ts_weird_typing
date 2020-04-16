import { User } from './user'

interface PersonAge {
	(user: User): string
}

interface PersonName {
	(user: User): string
}

interface PersonView {
	(user: User): (string|string[])[]
}

export const personAge: PersonAge = (user) => {
	return user.age + 2
}

export const personName: PersonName = (user) => {
	return user.name + 2
}

export const personView: PersonView = (user) => {
	return [
		personName(user),
		[
			personAge(user),
		]
	]
}
