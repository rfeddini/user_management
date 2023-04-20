import bcrypt, { genSalt, getRounds } from 'bcrypt'

export class BcryptHelpers {
    async hashPassword(passwordToHash : string) : Promise<string>{
        return await  bcrypt.hash(passwordToHash , 10)
    }
} 







