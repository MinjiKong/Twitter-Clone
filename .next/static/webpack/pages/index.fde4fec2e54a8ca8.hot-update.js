"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client_userUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/client/userUser */ \"./lib/client/userUser.ts\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_client_userMutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/client/userMutation */ \"./lib/client/userMutation.tsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    var ref;\n    _s();\n    var ref1 = (0,_lib_client_userUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), user = ref1.user, isLoading = ref1.isLoading;\n    var ref2 = _slicedToArray((0,_lib_client_userMutation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"../api/tweets/new-tweet\"), 2), tweet1 = ref2[0], loading = ref2[1].loading;\n    var ref3 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)(), register = ref3.register, handleSubmit = ref3.handleSubmit, errors = ref3.formState.errors, reset = ref3.reset;\n    var ref4 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"../api/tweets/all-tweets\"), tweetsData = ref4.data;\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {\n            return C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        tweet1(data);\n                        reset();\n                        if (!loading) {\n                            alert(\"You have posted a tweet!\");\n                        }\n                        (0,swr__WEBPACK_IMPORTED_MODULE_3__.mutate)(\"../api/tweets/all-tweets\");\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSubmit(data) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleLogout = function() {\n        var _ref = _asyncToGenerator(C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        next_router__WEBPACK_IMPORTED_MODULE_5___default().replace(\"/log-in\");\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleLogout() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    if (isLoading || !user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n            lineNumber: 39,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"text-3xl mb-2\",\n                children: [\n                    \"Welcome, \",\n                    user.email,\n                    \"!!\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: \"mb-5 font-bold text-black border-2 bg-white border-black rounded-lg px-3\",\n                onClick: handleLogout,\n                children: \"Log Out\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center mb-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit(onSubmit),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", _objectSpread({\n                            className: \"bg-white text-black text-center w-96 ring-2 \".concat(errors.tweet ? \"ring-red-500\" : \"ring-black\", \" rounded-lg outline-none focus:ring-black resize-none\"),\n                            id: \"tweet\",\n                            type: \"text\"\n                        }, register(\"tweet\", {\n                            required: \"No empty tweet!\",\n                            maxLength: {\n                                value: 100,\n                                message: \"No more than 100 characters allowed!\"\n                            }\n                        }), {\n                            placeholder: \"What's on your mind?\"\n                        }), void 0, false, {\n                            fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-800 rounded-md px-2 ml-2\",\n                            type: \"submit\",\n                            children: \"Tweet\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            children: errors === null || errors === void 0 ? void 0 : (ref = errors.tweet) === null || ref === void 0 ? void 0 : ref.message\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: tweetsData ? tweetsData.tweets.slice().reverse().map(function(tweet) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        href: \"/tweet/\".concat(tweet.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"bg-white text-black border border-black rounded-lg p-4 m-5 cursor-pointer\",\n                                children: tweet.text\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 19\n                            }, _this)\n                        }, tweet.id, false, {\n                            fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 17\n                        }, _this)\n                    }, tweet.id, false, {\n                        fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 15\n                    }, _this);\n                }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: \"No Tweets\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"X2RsamEAWMcFZqaUKChsCKd5Jy0=\", false, function() {\n    return [\n        _lib_client_userUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _lib_client_userMutation__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlVXNlciBmcm9tIFwiLi4vbGliL2NsaWVudC91c2VyVXNlclwiO1xuaW1wb3J0IHVzZVNXUiwgeyBtdXRhdGUgfSBmcm9tIFwic3dyXCI7XG5pbXBvcnQgdXNlTXV0YXRpb24gZnJvbSBcIi4uL2xpYi9jbGllbnQvdXNlck11dGF0aW9uXCI7XG5pbXBvcnQgeyBTdWJtaXRIYW5kbGVyLCB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW50ZXJmYWNlIFR3ZWV0Rm9ybSB7XG4gIHR3ZWV0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgdXNlciwgaXNMb2FkaW5nIH0gPSB1c2VVc2VyKCk7XG4gIGNvbnN0IFt0d2VldCwgeyBsb2FkaW5nIH1dID0gdXNlTXV0YXRpb24oXCIuLi9hcGkvdHdlZXRzL25ldy10d2VldFwiKTtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gICAgcmVzZXQsXG4gIH0gPSB1c2VGb3JtPFR3ZWV0Rm9ybT4oKTtcblxuICBjb25zdCB7IGRhdGE6IHR3ZWV0c0RhdGEgfSA9IHVzZVNXUihcIi4uL2FwaS90d2VldHMvYWxsLXR3ZWV0c1wiKTtcblxuICBjb25zdCBvblN1Ym1pdDogU3VibWl0SGFuZGxlcjxUd2VldEZvcm0+ID0gYXN5bmMgKGRhdGE6IFR3ZWV0Rm9ybSkgPT4ge1xuICAgIHR3ZWV0KGRhdGEpO1xuICAgIHJlc2V0KCk7XG4gICAgaWYgKCFsb2FkaW5nKSB7XG4gICAgICBhbGVydChcIllvdSBoYXZlIHBvc3RlZCBhIHR3ZWV0IVwiKTtcbiAgICB9XG5cbiAgICBtdXRhdGUoXCIuLi9hcGkvdHdlZXRzL2FsbC10d2VldHNcIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHJvdXRlci5yZXBsYWNlKFwiL2xvZy1pblwiKTtcbiAgfTtcblxuICBpZiAoaXNMb2FkaW5nIHx8ICF1c2VyKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWItMlwiPldlbGNvbWUsIHt1c2VyLmVtYWlsfSEhPC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTUgZm9udC1ib2xkIHRleHQtYmxhY2sgYm9yZGVyLTIgYmctd2hpdGUgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbGcgcHgtM1wiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cbiAgICAgID5cbiAgICAgICAgTG9nIE91dFxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmctd2hpdGUgdGV4dC1ibGFjayB0ZXh0LWNlbnRlciB3LTk2IHJpbmctMiAke1xuICAgICAgICAgICAgICBlcnJvcnMudHdlZXQgPyBcInJpbmctcmVkLTUwMFwiIDogXCJyaW5nLWJsYWNrXCJcbiAgICAgICAgICAgIH0gcm91bmRlZC1sZyBvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibGFjayByZXNpemUtbm9uZWB9XG4gICAgICAgICAgICBpZD1cInR3ZWV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInR3ZWV0XCIsIHtcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiTm8gZW1wdHkgdHdlZXQhXCIsXG4gICAgICAgICAgICAgIG1heExlbmd0aDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAxMDAsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJObyBtb3JlIHRoYW4gMTAwIGNoYXJhY3RlcnMgYWxsb3dlZCFcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0J3Mgb24geW91ciBtaW5kP1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtODAwIHJvdW5kZWQtbWQgcHgtMiBtbC0yXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgVHdlZXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8c3Bhbj57ZXJyb3JzPy50d2VldD8ubWVzc2FnZX08L3NwYW4+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge3R3ZWV0c0RhdGEgPyAoXG4gICAgICAgICAgdHdlZXRzRGF0YS50d2VldHNcbiAgICAgICAgICAgIC5zbGljZSgpXG4gICAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgICAubWFwKCh0d2VldDogYW55KSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdHdlZXQvJHt0d2VldC5pZH1gfSBrZXk9e3R3ZWV0LmlkfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17dHdlZXQuaWR9PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1ibGFjayBib3JkZXIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbGcgcC00IG0tNSBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7dHdlZXQudGV4dH1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2Pk5vIFR3ZWV0czwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlVXNlciIsInVzZVNXUiIsIm11dGF0ZSIsInVzZU11dGF0aW9uIiwidXNlRm9ybSIsInJvdXRlciIsIkxpbmsiLCJIb21lIiwiZXJyb3JzIiwidXNlciIsImlzTG9hZGluZyIsInR3ZWV0IiwibG9hZGluZyIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwicmVzZXQiLCJkYXRhIiwidHdlZXRzRGF0YSIsIm9uU3VibWl0IiwiYWxlcnQiLCJoYW5kbGVMb2dvdXQiLCJyZXBsYWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZW1haWwiLCJidXR0b24iLCJvbkNsaWNrIiwiZm9ybSIsImlucHV0IiwiaWQiLCJ0eXBlIiwicmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJwbGFjZWhvbGRlciIsInNwYW4iLCJ0d2VldHMiLCJzbGljZSIsInJldmVyc2UiLCJtYXAiLCJocmVmIiwicCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});