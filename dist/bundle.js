/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/createTest.js":
/*!***************************!*\
  !*** ./src/createTest.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainPage */ \"./src/mainPage.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar quetionsCount;\nvar active;\nvar correctAnswers = 0;\n\nvar checkInput = function checkInput(e) {\n  if (e.target.value === '') {\n    e.target.classList.add('red');\n  } else {\n    if (e.target.classList.contains('red')) e.target.classList.remove('red');\n  }\n};\n\nvar formTest = function formTest(obj, activeQuestion) {\n  var trueAnsvers = 0;\n  var points = 0;\n  var correct;\n  var question = obj.quests.find(function (item) {\n    return item.id == activeQuestion;\n  });\n  var questNumber = document.getElementById(\"\".concat(activeQuestion));\n  questNumber.classList.add('active');\n  document.querySelectorAll('.question').forEach(function (item) {\n    if (item.id == activeQuestion) item.classList.add('active');\n  });\n  document.querySelector('.question-name').innerHTML = question.name;\n  document.querySelector('.answers').innerHTML = '';\n\n  for (var i = 0; i < question.ansvers.length; i++) {\n    if (question.ansvers[i].passive === true) {\n      if (question.ansvers[i].checked == true) {\n        document.querySelector('.answers').innerHTML += \"<div id = \".concat(question.ansvers[i].checked, \" class = 'variant green'>\").concat(question.ansvers[i].answer, \"</div>\");\n      } else {\n        document.querySelector('.answers').innerHTML += \"<div id = \".concat(question.ansvers[i].checked, \" class = 'variant red'>\").concat(question.ansvers[i].answer, \"</div>\");\n      }\n    } else {\n      document.querySelector('.answers').innerHTML += \"<div id = \".concat(question.ansvers[i].checked, \" class = 'variant'>\").concat(question.ansvers[i].answer, \"</div>\");\n    }\n\n    if (question.ansvers[i].checked === true) {\n      trueAnsvers++;\n    }\n  }\n\n  document.querySelectorAll('.variant').forEach(function (item) {\n    return item.addEventListener('click', function (e) {\n      if (points < trueAnsvers) {\n        question.ansvers.find(function (ansverName) {\n          return ansverName.answer === item.innerHTML;\n        }).passive = true;\n\n        if (e.target.id == 'true') {\n          e.target.classList.add('green');\n        } else {\n          e.target.classList.add('red');\n        }\n\n        points++;\n\n        if (points == trueAnsvers) {\n          activeQuestion++;\n          questNumber.classList.remove('active');\n          if (document.querySelectorAll('.variant').forEach(function (item) {\n            if (item.classList.contains('red')) {\n              correct = false;\n            }\n          })) ;\n\n          if (correct == false) {\n            questNumber.classList.add('red');\n          } else {\n            questNumber.classList.add('green');\n            correctAnswers++;\n          }\n\n          console.log(obj);\n\n          if (activeQuestion <= obj.count) {\n            formTest(obj, activeQuestion);\n          } else {\n            console.log(correctAnswers);\n            e.preventDefault();\n          }\n        }\n      }\n    });\n  });\n};\n\nvar Test = function Test(id, _name, count, quests) {\n  var _this = this;\n\n  _classCallCheck(this, Test);\n\n  _defineProperty(this, \"createTest\", function () {\n    if (typeof _this.quests === 'undefined') {\n      _this.quests = [];\n    }\n\n    quetionsCount = 0;\n    active = 1;\n    document.querySelector('.block').innerHTML = \"\\n        <div class = 'hat'>\\n            <h1>Edit / Create test!</h1>   \\n        </div>\\n        <div class = 'container'>\\n            <div class = 'row'>\\n                <div class = 'col-2'>\\n                    Name:\\n                </div>\\n                <div class = 'col-10'>\\n                    <input class = 'test-name' type = 'text'>\\n                </div>\\n            </div>\\n            <div class = 'row'>\\n                <div class = 'col-9 questContainer'>\\n                </div>\\n                <div class = 'col-3'>\\n                    <input type = 'button' class = 'add-question' value = 'Add question'>\\n                </div>\\n            </div>\\n        </div>\\n        <div class = 'container forQuestionName'>\\n        </div>\\n        <div class = 'container forQuestions'>\\n        </div>\\n        <div class = 'container'>\\n            <div class = 'row'>\\n                <input type = 'button' class = 'add-optiont' value = 'Add answer option'> \\n                <input type = 'button' class = 'add-save-question' value = 'Add/Save question'> \\n            </div>\\n            <div class = 'row'>\\n                <input type = 'button' class = 'save-test' value = 'Save test'> \\n            </div>\\n        </div>\\n        \";\n\n    _this.addQuestion();\n\n    document.querySelector('.test-name').addEventListener('input', checkInput);\n    document.querySelector('.quest-name').addEventListener('input', checkInput);\n    document.querySelector('.add-question').addEventListener('click', _this.addQuestion);\n    document.querySelector('.add-optiont').addEventListener('click', _this.createOption);\n    document.querySelector('.add-save-question').addEventListener('click', _this.saveQuestion);\n    document.querySelector('.save-test').addEventListener('click', _this.saveTest);\n  });\n\n  _defineProperty(this, \"addQuestion\", function () {\n    quetionsCount++;\n    active = quetionsCount;\n    var newQuestion = document.createElement('div');\n    newQuestion.className = 'question-number';\n    newQuestion.id = quetionsCount;\n    newQuestion.onclick = _this.changeQuestion;\n    newQuestion.innerHTML = \"\\n        <div class = 'question'>\\n            \".concat(quetionsCount, \"\\n        </div>\\n        \");\n    document.querySelector('.questContainer').appendChild(newQuestion);\n    document.querySelector('.forQuestionName').innerHTML = \"\\n            <div class = row>\\n                <div class = 'col-2'>\\n                    Question:\\n                </div>\\n                <div class = 'col-10'>\\n                    <input class = 'quest-name' type = 'text'>\\n                </div>\\n            </div>\\n            <div class = row>\\n                <div class = 'col-8'>\\n                    Answer options:\\n                </div>\\n                <div class = 'col-2'>\\n                    Correct:\\n                </div>\\n                <div class = 'col-2'>\\n                    Actions:\\n                </div>\\n            </div>\\n        \";\n\n    _this.changeQuestion();\n  });\n\n  _defineProperty(this, \"createOption\", function () {\n    var newOption = document.createElement('div');\n    newOption.className = 'row';\n    newOption.innerHTML = \"\\n            <div class = 'col-8'>\\n                <input type = 'text' class = 'quest-answer'>\\n            </div>\\n            <div class = 'col-2'>\\n            <input type = 'checkbox' class = 'check'> \\n            </div>\\n            <div class = 'col-2 delete' onclick = 'this.parentElement.remove(this)'>\\n                Delete\\n            </div>\\n        \";\n    document.querySelector('.forQuestions').appendChild(newOption);\n  });\n\n  _defineProperty(this, \"changeQuestion\", function (event) {\n    if (event) {\n      if (!event.target.classList.contains('question')) {\n        return;\n      } else {\n        active = parseInt(event.target.parentElement.id);\n      }\n    }\n\n    document.querySelector('.forQuestions').innerHTML = '';\n    document.querySelectorAll('.question-number').forEach(function (item) {\n      if (item.id == active) {\n        if (item.firstElementChild.classList.contains('done')) {\n          var checkQuestion = _this.quests.find(function (quest) {\n            return quest.id === active;\n          });\n\n          document.querySelector('.quest-name').value = checkQuestion.name;\n\n          for (var i = 0; i < checkQuestion.ansvers.length; i++) {\n            _this.createOption();\n\n            document.querySelectorAll('.quest-answer')[document.querySelectorAll('.quest-answer').length - 1].value = checkQuestion.ansvers[i].answer;\n\n            if (checkQuestion.ansvers[i].checked === true) {\n              document.querySelectorAll('.check')[document.querySelectorAll('.check').length - 1].checked = true;\n            }\n          }\n        } else {\n          item.firstElementChild.classList.add('active');\n          document.querySelector('.quest-name').value = '';\n        }\n      } else {\n        item.firstElementChild.classList.remove('active');\n      }\n    });\n  });\n\n  _defineProperty(this, \"saveQuestion\", function (e) {\n    var answers = document.querySelectorAll('.quest-answer');\n    var checkboxes = document.querySelectorAll('.check');\n    var name = document.querySelector('.quest-name').value;\n    var ansArray = [];\n\n    for (var i = 0; i < answers.length; i++) {\n      if (answers[i].value == '') {\n        answers[i].classList.add('red');\n        e.preventDefault();\n        return;\n      } else {\n        answers[i].classList.remove('red');\n      }\n    }\n\n    for (var _i = 0; _i < answers.length; _i++) {\n      ansArray.push({\n        answer: answers[_i].value,\n        checked: checkboxes[_i].checked\n      });\n    }\n\n    var check = _this.quests.find(function (question) {\n      return question.name === name;\n    });\n\n    var checked = false;\n\n    for (var _i2 = 0; _i2 < checkboxes.length; _i2++) {\n      if (checkboxes[_i2].checked) {\n        checked = true;\n      }\n    }\n\n    if (name.length > 0) {\n      document.querySelector('.quest-name').classList.remove('red');\n\n      if (checked) {\n        if (_this.quests.find(function (quest) {\n          return quest.id === active;\n        })) {\n          var changeQuestion = _this.quests.find(function (quest) {\n            return quest.id === active;\n          });\n\n          changeQuestion.name = name;\n          changeQuestion.ansvers = ansArray;\n        } else {\n          _this.quests.push({\n            id: active,\n            name: name,\n            ansvers: ansArray\n          });\n\n          if (document.getElementById(active).firstElementChild.classList.contains('red')) {\n            document.getElementById(active).firstElementChild.classList.remove('red');\n          }\n\n          document.getElementById(active).firstElementChild.classList.add('done');\n\n          if (document.getElementById(active + 1)) {\n            active++;\n\n            _this.changeQuestion();\n          }\n        }\n      } else {\n        e.preventDefault;\n        alert('Choose correct question!');\n      }\n    } else {\n      e.preventDefault;\n      document.querySelector('.quest-name').classList.add('red');\n    }\n  });\n\n  _defineProperty(this, \"saveTest\", function (e) {\n    var questionList = document.querySelectorAll('.question');\n    var check = true;\n\n    for (var i = 0; i < questionList.length; i++) {\n      if (!questionList[i].classList.contains('done')) {\n        questionList[i].classList.add('red');\n        check = false;\n      }\n    }\n\n    if (document.querySelector('.test-name').value !== '') {\n      if (check) {\n        _this.name = document.querySelector('.test-name').value;\n        var sameName = true;\n        var testArray = _list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getArray();\n        var changedTest;\n\n        for (var _i3 = 0; _i3 < testArray.length; _i3++) {\n          if (testArray[_i3].id === _this.id) {\n            changedTest = testArray[_i3];\n            sameName = false;\n          }\n        }\n\n        if (sameName) {\n          _this.id = _list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCounter() + 1;\n          _this.count = _this.quests.length;\n          _list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(_this);\n          Object(_mainPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        } else {\n          _this.name = document.querySelector('.test-name').value;\n          _this.count = _this.quests.length;\n          console.log(_this);\n          _list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].replace(_this);\n          console.log(_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getArray());\n          Object(_mainPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        }\n      }\n    } else {\n      document.querySelector('.test-name').classList.add('red');\n    }\n  });\n\n  _defineProperty(this, \"renderTestPage\", function () {\n    var activeQuestion = 1;\n    document.querySelector('.block').innerHTML = \"\\n        <div class = 'container'>\\n            <div class = 'row'>\\n                <h2> Passing the test: \".concat(_this.name, \"</h2>\\n            </div>\\n            <div class = 'row questions'></div>\\n            <div class = 'row question-name'></div>\\n            <div class = 'row answers'></div>\\n        </div>\\n    \");\n\n    for (var i = 0; i < _this.quests.length; i++) {\n      document.querySelector('.questions').innerHTML += \"<div id = '\".concat(_this.quests[i].id, \"' class ='question'>\").concat(_this.quests[i].id);\n    }\n\n    document.querySelectorAll('.questions').forEach(function (item) {\n      return item.addEventListener('click', function (e) {\n        if (e.target.classList.contains('question')) {\n          document.querySelectorAll('.question').forEach(function (item) {\n            if (item.id == activeQuestion) item.classList.remove('active');\n          });\n          activeQuestion = e.target.id;\n          formTest(_this, activeQuestion);\n        } else {\n          e.preventDefault();\n        }\n      });\n    });\n    formTest(_this, activeQuestion);\n  });\n\n  _defineProperty(this, \"editTest\", function () {\n    _this.createTest();\n\n    document.querySelector('.test-name').value = _this.name;\n    console.log(_this.quests);\n\n    for (var i = 0; i < _this.quests.length; i++) {\n      document.querySelector('.questContainer').lastElementChild.firstElementChild.classList.add('done');\n\n      _this.changeQuestion();\n\n      document.querySelector('.quest-name').value = _this.quests[i].name;\n      if (i < _this.quests.length - 1) _this.addQuestion();\n    }\n  });\n\n  _defineProperty(this, \"deleteTest\", function () {\n    localStorage.removeItem(_this.id.toString());\n    _list__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](_this);\n    console.log(_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getArray());\n  });\n\n  this.id = id;\n  this.name = _name;\n  this.count = count;\n  this.quests = quests;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Test);\n\n//# sourceURL=webpack:///./src/createTest.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage */ \"./src/mainPage.js\");\n/* harmony import */ var _createTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTest */ \"./src/createTest.js\");\n\n\n\nwindow.onload = function () {\n  Object(_mainPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTest */ \"./src/createTest.js\");\n\nvar _list = {\n  store: [],\n  counter: 0\n};\nvar changeList = {\n  add: function add(item) {\n    _list.store.push(item);\n\n    _list.counter++;\n    localStorage.setItem(item.id, JSON.stringify(item));\n  },\n  writeFromLocalStorage: function writeFromLocalStorage() {\n    _list.counter = 0;\n\n    for (var i = 0; i < localStorage.length; i++) {\n      var obj = JSON.parse(localStorage.getItem(localStorage.key(i)));\n      _list.store[i] = new _createTest__WEBPACK_IMPORTED_MODULE_0__[\"default\"](obj.id, obj.name, obj.count, obj.quests);\n      _list.counter++;\n    }\n  },\n  replace: function replace(item) {\n    localStorage.setItem(item.id, JSON.stringify(item));\n  },\n  \"delete\": function _delete(item) {\n    _list.store = _list.store.filter(function (elem) {\n      return elem.id !== item.id;\n    });\n    _list.counter--;\n  },\n  getCounter: function getCounter() {\n    return _list.counter;\n  },\n  getArray: function getArray() {\n    return _list.store;\n  }\n};\nObject.freeze(changeList);\n/* harmony default export */ __webpack_exports__[\"default\"] = (changeList);\n\n//# sourceURL=webpack:///./src/list.js?");

/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _createTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTest */ \"./src/createTest.js\");\n\n\n\nvar createMainPage = function createMainPage() {\n  var block = document.querySelector('.block');\n  var tests = 0;\n  block.innerHTML = \"\\n            <div class = 'hat'>\\n                <h1>Super tests!</h1>   \\n                <input type='button' class = 'create-test' value='Create test'> \\n            </div>\\n            <div class='container'>\\n                <div class = 'row'>\\n                    <div class='col-5'>\\n                        Name\\n                    </div>\\n                    <div class = 'col-3'>\\n                        Count of questions\\n                    </div>\\n                    <div class = 'col-3'>\\n                        Actions\\n                    </div>\\n                </div>\\n            </div>\";\n\n  if (_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCounter() < 1 && localStorage.length === 0) {\n    document.querySelector('.container').innerHTML = 'No tests!';\n  } else {\n    _list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].writeFromLocalStorage();\n\n    for (var i = 0; i < _list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCounter(); i++) {\n      document.querySelector('.container').innerHTML += \"\\n                <div class = 'row' id = '\".concat(_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getArray()[i].id, \"'>\\n                    <div class = 'col-5 quest'>\\n                        \").concat(_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getArray()[i].name, \"\\n                    </div>\\n                    <div class = 'col-3'>\\n                        \").concat(_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getArray()[i].count, \"\\n                    </div>\\n                    <div class = 'col-1 edit'>\\n                        Edit\\n                    </div>\\n                    <div class = 'col-3 delete'>\\n                        Delete\\n                    </div>\\n                </div>\\n            \");\n    }\n  }\n\n  document.querySelector('.create-test').addEventListener('click', function () {\n    var test = new _createTest__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    test.createTest();\n  });\n  document.querySelectorAll('.edit').forEach(function (item) {\n    item.addEventListener('click', function (e) {\n      var test = _list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getArray().find(function (item) {\n        return item.id === parseInt(e.target.parentNode.id);\n      });\n      test.editTest();\n    });\n  });\n  document.querySelectorAll('.quest').forEach(function (item) {\n    return item.addEventListener('click', function (e) {\n      var test = _list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getArray().find(function (item) {\n        return item.id === parseInt(e.target.parentNode.id);\n      });\n      test.renderTestPage();\n    });\n  });\n  document.querySelectorAll('.delete').forEach(function (item) {\n    return item.addEventListener('click', function (e) {\n      var test = _list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getArray().find(function (item) {\n        return item.id === parseInt(e.target.parentNode.id);\n      });\n      e.target.parentNode.remove(e.target);\n      test.deleteTest();\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createMainPage);\n\n//# sourceURL=webpack:///./src/mainPage.js?");

/***/ })

/******/ });