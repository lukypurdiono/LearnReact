import axios from 'axios';
import { atom, selector } from 'recoil'

const theme = atom({
    key: 'switch-theme',
    default: 'dark'
})

const authenticated = atom({
    key: 'authenticated',
    default: {
        check: false,
        user: {name: "Luky Purdiono"}
    }
})

const authUser = selector({
 key: 'authUser',
 get: async () => {
     let user = null;

     try{
        let {data} = await axios.get('https://jsonplaceholder.typicode.com/users/2')
        user = {user: data}
     }
     catch(e){
        user = {user: e.message}
     }

     return user;
 }
})

export { authUser, theme, authenticated }