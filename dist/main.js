/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//import './style.css';\r\n/*import Tasks from './modules/tasks.js';\r\nconst myTasks = new Tasks();\r\nmyTasks.LoadTasksFromLocal();*/\r\n\r\nlet counter = -1;\r\n\r\n//HTML Management\r\nconst container = document.querySelector('.myListContainer');\r\ncontainer.innerHTML= `<h1>Today's To-Do's</h>`;\r\nconst list = document.createElement('ol');\r\nlist.classList.add('list');\r\nconst input = document.createElement('div');\r\ninput.classList.add('input');\r\ncontainer.appendChild(input);\r\ncontainer.appendChild(list);  \r\n\r\ninput.innerHTML=`\r\n<input type=\"text\" id=\"toDo\" placeholder=\"Add to your list...\" required>\r\n`;\r\n\r\nlet eachList = [];\r\n\r\nclass NewItemList {\r\n    constructor(listInfo, mybool, listIndex) {\r\n      this.listInfo = listInfo;\r\n      this.myBool = mybool;\r\n      this.listIndex = listIndex;\r\n    }\r\n}\r\n\r\nconst printDynamic = (input) => {\r\n  let x = document.getElementsByClassName('list')[0].innerHTML = input.map((items, index) => `\r\n  <li id=\"${index}\"><input type=\"checkbox\">${items.listInfo}</li>`).join('');\r\n}\r\n\r\nconst addNewList = () => {\r\n    counter += 1;\r\n    const toDo = document.getElementById('toDo').value;\r\n    const eachItemList = new NewItemList(toDo, false, counter);\r\n    eachList.push(eachItemList);\r\n    console.log('aqui esta', eachItemList);\r\n    //print in the HTML file.\r\n    printDynamic(eachList);\r\n    console.log(eachList);\r\n    return eachList;\r\n}\r\n\r\ndocument.getElementById('toDo').addEventListener('keypress', (e) => {\r\n    const toDo = document.getElementById('toDo').value;\r\n    if (e.key === 'Enter' && toDo !==\"\") {\r\n      addNewList();\r\n      document.getElementById('toDo').value = '';\r\n    }\r\n});\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;