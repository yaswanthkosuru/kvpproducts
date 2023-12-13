import { ObjectId } from "mongodb"

export type addressType = {
    _id?: ObjectId
    street: string
    city: string
    state: 'Andrapradesh'
    postalCode: '521125' | '521126' | '521127'
    phoneNumber: string

}

