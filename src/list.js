import Test from './createTest';

const _list = {
    store:[],
    counter:0,
}

const changeList = {
    add: item => {
        _list.store.push(item);
        _list.counter++;
        localStorage.setItem(item.id, JSON.stringify(item));
    },
    writeFromLocalStorage: () => {
        _list.counter = 0;
        for(let i = 0;i<localStorage.length;i++) {
            let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
            _list.store[i] = new Test(obj.id, obj.name, obj.count, obj.quests);
            _list.counter++;
        }
    },
    replace: item => {localStorage.setItem(item.id, JSON.stringify(item));},
    delete: item => {_list.store = _list.store.filter(elem => elem.id!==item.id);_list.counter--},
    getCounter: () => _list.counter,
    getArray: () => _list.store
}

Object.freeze(changeList);

export default changeList;