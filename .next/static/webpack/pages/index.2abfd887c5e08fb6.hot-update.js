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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client_userUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/client/userUser */ \"./lib/client/userUser.ts\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_client_userMutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/client/userMutation */ \"./lib/client/userMutation.tsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    var ref;\n    _s();\n    var ref1 = (0,_lib_client_userUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), user = ref1.user, isLoading = ref1.isLoading;\n    var ref2 = _slicedToArray((0,_lib_client_userMutation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"../api/tweets/new-tweet\"), 2), tweet1 = ref2[0], ref3 = ref2[1], loading = ref3.loading, data1 = ref3.data, error = ref3.error;\n    var ref4 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)(), register = ref4.register, handleSubmit = ref4.handleSubmit, errors = ref4.formState.errors, reset = ref4.reset;\n    var ref5 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"../api/tweets/all-tweets\"), tweetsData = ref5.data;\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {\n            return C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        tweet1(data);\n                        reset();\n                        if (!loading) {\n                            alert(\"You have posted a tweet!\");\n                        }\n                        (0,swr__WEBPACK_IMPORTED_MODULE_3__.mutate)(\"../api/all-tweets\");\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSubmit(data) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleLogout = function() {\n        var _ref = _asyncToGenerator(C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        next_router__WEBPACK_IMPORTED_MODULE_5___default().replace(\"/log-in\");\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleLogout() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    if (isLoading || !user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n            lineNumber: 41,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"text-3xl mb-2\",\n                children: [\n                    \"Welcome, \",\n                    user.email,\n                    \"!!\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: \"mb-5 font-bold text-black border-2 bg-white border-black rounded-lg px-3\",\n                onClick: handleLogout,\n                children: \"Log Out\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit(onSubmit),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", _objectSpread({\n                            className: \"bg-white text-black text-center w-96 ring-2 \".concat(errors.tweet ? \"ring-red-500\" : \"ring-black\", \" rounded-lg outline-none focus:ring-black resize-none\"),\n                            id: \"tweet\",\n                            type: \"text\"\n                        }, register(\"tweet\", {\n                            required: \"No empty tweet!\",\n                            maxLength: {\n                                value: 100,\n                                message: \"No more than 100 characters allowed!\"\n                            }\n                        }), {\n                            placeholder: \"What's on your mind?\"\n                        }), void 0, false, {\n                            fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-900 rounded-md px-2 ml-2\",\n                            type: \"submit\",\n                            children: \"Tweet\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            children: errors === null || errors === void 0 ? void 0 : (ref = errors.tweet) === null || ref === void 0 ? void 0 : ref.message\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: tweetsData ? tweetsData.tweets.slice().reverse().map(function(tweet) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        href: \"/tweet/\".concat(tweet.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"bg-gray-500\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: tweet.text\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 19\n                            }, _this)\n                        }, tweet.id, false, {\n                            fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 17\n                        }, _this)\n                    }, tweet.id, false, {\n                        fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 15\n                    }, _this);\n                }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: \"No Tweets\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"85xs0/haGgAD3lgFBlZpGAL1hQo=\", false, function() {\n    return [\n        _lib_client_userUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _lib_client_userMutation__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVVzZXIgZnJvbSBcIi4uL2xpYi9jbGllbnQvdXNlclVzZXJcIjtcbmltcG9ydCB1c2VTV1IsIHsgbXV0YXRlIH0gZnJvbSBcInN3clwiO1xuaW1wb3J0IHVzZU11dGF0aW9uIGZyb20gXCIuLi9saWIvY2xpZW50L3VzZXJNdXRhdGlvblwiO1xuaW1wb3J0IHsgU3VibWl0SGFuZGxlciwgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmludGVyZmFjZSBUd2VldEZvcm0ge1xuICB0d2VldDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHVzZXIsIGlzTG9hZGluZyB9ID0gdXNlVXNlcigpO1xuICBjb25zdCBbdHdlZXQsIHsgbG9hZGluZywgZGF0YSwgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihcbiAgICBcIi4uL2FwaS90d2VldHMvbmV3LXR3ZWV0XCJcbiAgKTtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gICAgcmVzZXQsXG4gIH0gPSB1c2VGb3JtPFR3ZWV0Rm9ybT4oKTtcblxuICBjb25zdCB7IGRhdGE6IHR3ZWV0c0RhdGEgfSA9IHVzZVNXUihcIi4uL2FwaS90d2VldHMvYWxsLXR3ZWV0c1wiKTtcblxuICBjb25zdCBvblN1Ym1pdDogU3VibWl0SGFuZGxlcjxUd2VldEZvcm0+ID0gYXN5bmMgKGRhdGE6IFR3ZWV0Rm9ybSkgPT4ge1xuICAgIHR3ZWV0KGRhdGEpO1xuICAgIHJlc2V0KCk7XG4gICAgaWYgKCFsb2FkaW5nKSB7XG4gICAgICBhbGVydChcIllvdSBoYXZlIHBvc3RlZCBhIHR3ZWV0IVwiKTtcbiAgICB9XG5cbiAgICBtdXRhdGUoXCIuLi9hcGkvYWxsLXR3ZWV0c1wiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgcm91dGVyLnJlcGxhY2UoXCIvbG9nLWluXCIpO1xuICB9O1xuXG4gIGlmIChpc0xvYWRpbmcgfHwgIXVzZXIpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHAtNVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi0yXCI+V2VsY29tZSwge3VzZXIuZW1haWx9ISE8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwibWItNSBmb250LWJvbGQgdGV4dC1ibGFjayBib3JkZXItMiBiZy13aGl0ZSBib3JkZXItYmxhY2sgcm91bmRlZC1sZyBweC0zXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlTG9nb3V0fVxuICAgICAgPlxuICAgICAgICBMb2cgT3V0XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmctd2hpdGUgdGV4dC1ibGFjayB0ZXh0LWNlbnRlciB3LTk2IHJpbmctMiAke1xuICAgICAgICAgICAgICBlcnJvcnMudHdlZXQgPyBcInJpbmctcmVkLTUwMFwiIDogXCJyaW5nLWJsYWNrXCJcbiAgICAgICAgICAgIH0gcm91bmRlZC1sZyBvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibGFjayByZXNpemUtbm9uZWB9XG4gICAgICAgICAgICBpZD1cInR3ZWV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInR3ZWV0XCIsIHtcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiTm8gZW1wdHkgdHdlZXQhXCIsXG4gICAgICAgICAgICAgIG1heExlbmd0aDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAxMDAsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJObyBtb3JlIHRoYW4gMTAwIGNoYXJhY3RlcnMgYWxsb3dlZCFcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0J3Mgb24geW91ciBtaW5kP1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtOTAwIHJvdW5kZWQtbWQgcHgtMiBtbC0yXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgVHdlZXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8c3Bhbj57ZXJyb3JzPy50d2VldD8ubWVzc2FnZX08L3NwYW4+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge3R3ZWV0c0RhdGEgPyAoXG4gICAgICAgICAgdHdlZXRzRGF0YS50d2VldHNcbiAgICAgICAgICAgIC5zbGljZSgpXG4gICAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgICAubWFwKCh0d2VldDogYW55KSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdHdlZXQvJHt0d2VldC5pZH1gfSBrZXk9e3R3ZWV0LmlkfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktNTAwXCIga2V5PXt0d2VldC5pZH0+XG4gICAgICAgICAgICAgICAgICA8cD57dHdlZXQudGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICB7LyogWW91IGNhbiBhZGQgbGlrZSBidXR0b24gYW5kIG90aGVyIGZ1bmN0aW9uYWxpdHkgaGVyZSAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2Pk5vIFR3ZWV0czwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlVXNlciIsInVzZVNXUiIsIm11dGF0ZSIsInVzZU11dGF0aW9uIiwidXNlRm9ybSIsInJvdXRlciIsIkxpbmsiLCJIb21lIiwiZXJyb3JzIiwidXNlciIsImlzTG9hZGluZyIsInR3ZWV0IiwibG9hZGluZyIsImRhdGEiLCJlcnJvciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwicmVzZXQiLCJ0d2VldHNEYXRhIiwib25TdWJtaXQiLCJhbGVydCIsImhhbmRsZUxvZ291dCIsInJlcGxhY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJlbWFpbCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb3JtIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsInZhbHVlIiwibWVzc2FnZSIsInBsYWNlaG9sZGVyIiwic3BhbiIsInR3ZWV0cyIsInNsaWNlIiwicmV2ZXJzZSIsIm1hcCIsImhyZWYiLCJwIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});