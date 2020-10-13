import changeList from './list';
import Test from './createTest';

const createMainPage = () => {

    let block = document.querySelector('.block');
    let tests = 0;
    block.innerHTML=`
            <div class = 'hat'>
                <h1>Super tests!</h1>   
                <input type='button' class = 'create-test' value='Create test'> 
            </div>
            <div class='container'>
                <div class = 'row'>
                    <div class='col-5'>
                        Name
                    </div>
                    <div class = 'col-3'>
                        Count of questions
                    </div>
                    <div class = 'col-3'>
                        Actions
                    </div>
                </div>
            </div>`

    if(changeList.getCounter() < 1 && localStorage.length===0) {
        document.querySelector('.container').innerHTML = 'No tests!'
    } else {
        changeList.writeFromLocalStorage();

        for(let i = 0;i< changeList.getCounter();i++) {
            document.querySelector('.container').innerHTML += `
                <div class = 'row' id = '${changeList.getArray()[i].id}'>
                    <div class = 'col-5 quest'>
                        ${changeList.getArray()[i].name}
                    </div>
                    <div class = 'col-3'>
                        ${changeList.getArray()[i].count}
                    </div>
                    <div class = 'col-1 edit'>
                        Edit
                    </div>
                    <div class = 'col-3 delete'>
                        Delete
                    </div>
                </div>
            `;
        }
    }

    document.querySelector('.create-test').addEventListener('click', () => {let test = new Test(); test.createTest()});
    document.querySelectorAll('.edit').forEach(item => {item.addEventListener('click',(e)=>{
        let test = changeList.getArray().find(item => item.id === parseInt(e.target.parentNode.id));
        test.editTest();
    })})
    document.querySelectorAll('.quest').forEach(item => item.addEventListener('click',(e) => {
        let test = changeList.getArray().find(item => item.id === parseInt(e.target.parentNode.id));
        test.renderTestPage();
    }))
    document.querySelectorAll('.delete').forEach(item => item.addEventListener('click', (e) => {
        let test = changeList.getArray().find(item => item.id === parseInt(e.target.parentNode.id));
        e.target.parentNode.remove(e.target);
        test.deleteTest();
    }));
}

export default createMainPage;