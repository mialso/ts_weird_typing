import { User } from './user'
import { Node } from './render'

interface PersonAge {
	(age: number): string
}

interface PersonName {
	(name: string): string
}

interface PersonView {
	(user: User): Node
}

export const personAge: PersonAge = (age) => {
	return `Age: ${age + 2}`
}

export const personName: PersonName = (name) => {
	return `Name: ${name + 2}`
}

export const personView: PersonView = (person) => {
	return [
		personName(person.name),
		[
			personAge(person.age),
		]
	]
}
