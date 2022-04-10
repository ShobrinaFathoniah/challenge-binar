import {allReducers} from './allReducers';
import {createStore} from 'redux';

export const store = createStore(allReducers);

//redux -> centralize -> mirip ram (sementara) => kill app store dari awal
//persist menyimpan store -> dg asyncstorage -> nyimpan langsung ke applikasinyaa
//asyncstorage -> masih berupa promise, default => whitelist (disimpan secara detail)
// persist ga perlu pormise, bisa atur data mana yg mau dibikin persist => metode blacklist, whitelist
