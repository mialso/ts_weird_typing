export interface Customer {
	name: string
	orders: number
}

const john = { name: 'John', orders: 48 }
const bob = { name: 'Bob', orders: 4 }

export const customers = [john, bob]
