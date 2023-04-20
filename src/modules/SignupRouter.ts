import {  Request, Response, Router } from 'express';
import { User } from '../entities/User';

const signin = Router();
import { v4 as uuidv4 } from 'uuid';
import { BcryptHelpers } from '../helpers/BcryptHelpers';

const bcryptHelpers = new BcryptHelpers();  
signin.post('/signup',async (req : Request, res: Response) => {
   try{
    const hashedPassword = await bcryptHelpers.hashPassword(req.body.password);
    const user : User = {
    id : uuidv4(),    
    email : req.body.email,
    password : hashedPassword ,
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    }

    return res.status(200).send(user)

      }catch(error){
    res.status(400).send("something wrong");
   }
})

