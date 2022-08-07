import GUN from 'gun';
import 'gun/sea'; // sea = security, encryption, & authorization 
import 'gun/axe'; // perfromance 
import {writable } from 'svelte/store';


// database 
//
//

export const db = GUN();


export const user = db.user().recall({sessionStorage:true});



user.get('alias')


export const username = writable(''); // useful for global app state 


user.get('alias').on(v=>username.set(v))


db.on('auth', async(event))

