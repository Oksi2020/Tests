import changeList from './list';
import createMainPage from './mainPage';

let quetionsCount;
let active;
let correctAnswers = 0;

const checkInput = (e) =>{
    if(e.target.value ==='') {
        e.target.classList.add('red');
    } else { if(e.target.classList.contains('red')) e.target.classList.remove('red')}
}

const formTest = (obj, activeQuestion) => {
    let trueAnsvers = 0;
    let points = 0;
    let correct;
    let question = obj.quests.find(item => item.id==activeQuestion);
    let questNumber = document.getElementById(`${activeQuestion}`);
    questNumber.classList.add('active');
    document.querySelectorAll('.question').forEach(item => {if(item.id==activeQuestion)item.classList.add('active')});

    document.querySelector('.question-name').innerHTML = question.name;
    document.querySelector('.answers').innerHTML='';
    for(let i = 0; i<question.ansvers.length;i++) {
        if(question.ansvers[i].passive === true) {
            if(question.ansvers[i].checked==true) {
                document.querySelector('.answers').innerHTML +=`<div id = ${question.ansvers[i].checked} class = 'variant green'>${question.ansvers[i].answer}</div>`
            } else {document.querySelector('.answers').innerHTML +=`<div id = ${question.ansvers[i].checked} class = 'variant red'>${question.ansvers[i].answer}</div>`}
        } else {document.querySelector('.answers').innerHTML +=`<div id = ${question.ansvers[i].checked} class = 'variant'>${question.ansvers[i].answer}</div>`;}
        if(question.ansvers[i].checked===true) {trueAnsvers++}
    }

    document.querySelectorAll('.variant').forEach( item => item.addEventListener('click', e => {
        if(points < trueAnsvers) {
            question.ansvers.find(ansverName=>ansverName.answer === item.innerHTML).passive = true;

            if(e.target.id=='true') {
                e.target.classList.add('green')
            } else {e.target.classList.add('red')}

            points++;
            if(points==trueAnsvers) {
                activeQuestion++;
                questNumber.classList.remove('active');
                if(document.querySelectorAll('.variant').forEach(item=>{
                    if(item.classList.contains('red')) {
                        correct = false;
                    }
                }));

                if(correct == false) {
                    questNumber.classList.add('red');
                } else { questNumber.classList.add('green'); correctAnswers++ }

                console.log(obj);

                if(activeQuestion <= obj.count) {
                    formTest(obj, activeQuestion);
                } else { console.log(correctAnswers); 
                    e.preventDefault();
                }
            } 
        }
    }))

}

class Test {
    constructor(id, name, count, quests) {
        this.id = id;
        this.name = name;
        this.count = count; 
        this.quests = quests;
    }

    createTest = () => {
        if(typeof this.quests === 'undefined') {this.quests = [];}
        quetionsCount = 0;
        active = 1;
        document.querySelector('.block').innerHTML = `
        <div class = 'hat'>
            <h1>Edit / Create test!</h1>   
        </div>
        <div class = 'container'>
            <div class = 'row'>
                <div class = 'col-2'>
                    Name:
                </div>
                <div class = 'col-10'>
                    <input class = 'test-name' type = 'text'>
                </div>
            </div>
            <div class = 'row'>
                <div class = 'col-9 questContainer'>
                </div>
                <div class = 'col-3'>
                    <input type = 'button' class = 'add-question' value = 'Add question'>
                </div>
            </div>
        </div>
        <div class = 'container forQuestionName'>
        </div>
        <div class = 'container forQuestions'>
        </div>
        <div class = 'container'>
            <div class = 'row'>
                <input type = 'button' class = 'add-optiont' value = 'Add answer option'> 
                <input type = 'button' class = 'add-save-question' value = 'Add/Save question'> 
            </div>
            <div class = 'row'>
                <input type = 'button' class = 'save-test' value = 'Save test'> 
            </div>
        </div>
        `;
        this.addQuestion();
        document.querySelector('.test-name').addEventListener('input', checkInput);
        document.querySelector('.quest-name').addEventListener('input', checkInput);
        document.querySelector('.add-question').addEventListener('click', this.addQuestion);
        document.querySelector('.add-optiont').addEventListener('click', this.createOption);
        document.querySelector('.add-save-question').addEventListener('click', this.saveQuestion);
        document.querySelector('.save-test').addEventListener('click', this.saveTest);
    }

    addQuestion = () => {
        quetionsCount++;
        active = quetionsCount;
        let newQuestion = document.createElement('div');
        newQuestion.className = 'question-number';
        newQuestion.id = quetionsCount;
        newQuestion.onclick = this.changeQuestion;
        newQuestion.innerHTML = `
        <div class = 'question'>
            ${quetionsCount}
        </div>
        `;
        document.querySelector('.questContainer').appendChild(newQuestion);
        document.querySelector('.forQuestionName').innerHTML= `
            <div class = row>
                <div class = 'col-2'>
                    Question:
                </div>
                <div class = 'col-10'>
                    <input class = 'quest-name' type = 'text'>
                </div>
            </div>
            <div class = row>
                <div class = 'col-8'>
                    Answer options:
                </div>
                <div class = 'col-2'>
                    Correct:
                </div>
                <div class = 'col-2'>
                    Actions:
                </div>
            </div>
        `
       this.changeQuestion();
    }
    
    createOption = () => {
        let newOption = document.createElement('div');
        newOption.className = 'row';
        newOption.innerHTML = `
            <div class = 'col-8'>
                <input type = 'text' class = 'quest-answer'>
            </div>
            <div class = 'col-2'>
            <input type = 'checkbox' class = 'check'> 
            </div>
            <div class = 'col-2 delete' onclick = 'this.parentElement.remove(this)'>
                Delete
            </div>
        `
       document.querySelector('.forQuestions').appendChild(newOption);   
    }

    changeQuestion = (event) => {
        if(event) {
            if(!event.target.classList.contains('question')) {
                return;
            } else { active = parseInt(event.target.parentElement.id); }
        }
        document.querySelector('.forQuestions').innerHTML = '';
        document.querySelectorAll('.question-number').forEach(item=>{ 
            if(item.id==active){
                if(item.firstElementChild.classList.contains('done')) {
                    let checkQuestion = this.quests.find(quest => quest.id === active);
                    document.querySelector('.quest-name').value = checkQuestion.name;
                    for(let i = 0;i < checkQuestion.ansvers.length;i++) {
                        this.createOption();
                        document.querySelectorAll('.quest-answer')[document.querySelectorAll('.quest-answer').length-1].value = checkQuestion.ansvers[i].answer;
                        if(checkQuestion.ansvers[i].checked===true) {
                            document.querySelectorAll('.check')[document.querySelectorAll('.check').length-1].checked = true;
                        }
                    }
                } else { item.firstElementChild.classList.add('active');
                    document.querySelector('.quest-name').value = '';
                    }
            } else {item.firstElementChild.classList.remove('active'); }
        });
    }
    
    saveQuestion = (e) => {
        let answers = document.querySelectorAll('.quest-answer');
        let checkboxes = document.querySelectorAll('.check');
        let name = document.querySelector('.quest-name').value;
        let ansArray = [];

        for(let i = 0;i<answers.length;i++) {
            if(answers[i].value==''){
                answers[i].classList.add('red');
                e.preventDefault();
                return;
            } else {
                answers[i].classList.remove('red');
            }
        }
        for(let i = 0;i<answers.length;i++) {
            ansArray.push({answer:answers[i].value, checked:checkboxes[i].checked});
        }
        let check = this.quests.find(question => question.name === name);
        let checked = false;

        for(let i = 0; i<checkboxes.length;i++) {
            if(checkboxes[i].checked) {
                checked = true;
            }
        }
        if(name.length>0) {
            document.querySelector('.quest-name').classList.remove('red');

            if(checked){      
                if(this.quests.find(quest=>quest.id === active)) {
                    let changeQuestion = this.quests.find(quest=>quest.id === active);
                    changeQuestion.name = name;
                    changeQuestion.ansvers = ansArray; 
                } else {
                    this.quests.push({id: active,name:name, ansvers: ansArray})
                    if(document.getElementById(active).firstElementChild.classList.contains('red')) {document.getElementById(active).firstElementChild.classList.remove('red')}
                    document.getElementById(active).firstElementChild.classList.add('done');
                    if(document.getElementById(active+1)) {
                        active++;
                        this.changeQuestion();
                    }
                }
            } else { e.preventDefault; alert('Choose correct question!')}
        } else { e.preventDefault; document.querySelector('.quest-name').classList.add('red')}
    }

    saveTest = (e) => {
        let questionList = document.querySelectorAll('.question');
        let check = true;
        for(let i = 0;i<questionList.length;i++) {
            if(!questionList[i].classList.contains('done')) {
                questionList[i].classList.add('red');
                check = false;
            }
        }
        if(document.querySelector('.test-name').value!=='') {
            if(check) {
                this.name = document.querySelector('.test-name').value;
                let sameName = true;
                let testArray = changeList.getArray();
                let changedTest;
                for(let i = 0; i < testArray.length;i++) {
                    if(testArray[i].id===this.id) {
                        changedTest = testArray[i];
                        sameName = false;
                    }
                }
                if(sameName) {
                    this.id = changeList.getCounter()+1;
                    this.count = this.quests.length;
                    changeList.add(this);
                    createMainPage();
                } else {
                    this.name = document.querySelector('.test-name').value;
                    this.count = this.quests.length;
                    console.log(this);
                    changeList.replace(this);
                    console.log(changeList.getArray());
                    createMainPage();
                }
            }
        } else{document.querySelector('.test-name').classList.add('red')}
    }

    renderTestPage = () => {
        let activeQuestion = 1;

        document.querySelector('.block').innerHTML= `
        <div class = 'container'>
            <div class = 'row'>
                <h2> Passing the test: ${this.name}</h2>
            </div>
            <div class = 'row questions'></div>
            <div class = 'row question-name'></div>
            <div class = 'row answers'></div>
        </div>
    `;

    for(let i = 0;i<this.quests.length;i++) {
        document.querySelector('.questions').innerHTML+=`<div id = '${this.quests[i].id}' class ='question'>${this.quests[i].id}`
        }
        document.querySelectorAll('.questions').forEach(item => item.addEventListener('click', (e) => {
            if(e.target.classList.contains('question')) {
                document.querySelectorAll('.question').forEach(item => {if(item.id==activeQuestion)item.classList.remove('active')});

                activeQuestion = e.target.id;
                formTest(this, activeQuestion);
            } else{ e.preventDefault(); }
        
        }))
        formTest(this, activeQuestion);

    }

    editTest = () => {
        this.createTest();
        document.querySelector('.test-name').value = this.name;
        console.log(this.quests);
        for(let i = 0;i<this.quests.length;i++) {
            document.querySelector('.questContainer').lastElementChild.firstElementChild.classList.add('done');
            this.changeQuestion();
            document.querySelector('.quest-name').value = this.quests[i].name;
            if(i<this.quests.length-1) this.addQuestion();
        } 
    }

    deleteTest = () => {
        localStorage.removeItem(this.id.toString());
        changeList.delete(this);
        console.log(changeList.getArray());
    }

}


export default Test;