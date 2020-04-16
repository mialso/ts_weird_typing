import { User } from './user'

interface PersonAge {
	(user: User): string
}

interface PersonName {
	(name: string): string
}

interface PersonView {
	(user: User): (string|string[])[]
}

export const personAge: PersonAge = (user) => {
	return `Age: ${user.age + 2}`
}

export const personName: PersonName = (name) => {
	return `Name: ${name + 2}`
}

export const personView: PersonView = (user) => {
	return [
		personName(user.name),
		[
			personAge(user),
		]
	]
}
