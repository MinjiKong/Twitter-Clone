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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client_userUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/client/userUser */ \"./lib/client/userUser.ts\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_client_userMutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/client/userMutation */ \"./lib/client/userMutation.tsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    var ref;\n    _s();\n    var ref1 = (0,_lib_client_userUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), user = ref1.user, isLoading = ref1.isLoading;\n    var ref2 = _slicedToArray((0,_lib_client_userMutation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"../api/tweets/new-tweet\"), 2), tweet1 = ref2[0], ref3 = ref2[1], loading = ref3.loading, data1 = ref3.data, error = ref3.error;\n    var ref4 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)(), register = ref4.register, handleSubmit = ref4.handleSubmit, errors = ref4.formState.errors, reset = ref4.reset;\n    var ref5 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"../api/tweets/all-tweets\"), tweetsData = ref5.data;\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {\n            return C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        tweet1(data);\n                        reset();\n                        if (!loading) {\n                            alert(\"You have posted a tweet!\");\n                        }\n                        (0,swr__WEBPACK_IMPORTED_MODULE_3__.mutate)(\"../api/all-tweets\");\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSubmit(data) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleLogout = function() {\n        var _ref = _asyncToGenerator(C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        next_router__WEBPACK_IMPORTED_MODULE_5___default().replace(\"/log-in\");\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleLogout() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    if (isLoading || !user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n            lineNumber: 41,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"text-3xl mb-2\",\n                children: [\n                    \"Welcome, \",\n                    user.email,\n                    \"!!\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: \"mb-5 font-bold text-black border-2 bg-white border-black rounded-lg px-3\",\n                onClick: handleLogout,\n                children: \"Log Out\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit(onSubmit),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", _objectSpread({\n                            className: \"bg-white text-black text-center w-96 ring-2 \".concat(errors.tweet ? \"ring-red-500\" : \"ring-black\", \" rounded-lg outline-none focus:ring-black resize-none\"),\n                            id: \"tweet\",\n                            type: \"text\"\n                        }, register(\"tweet\", {\n                            required: \"No empty tweet!\",\n                            maxLength: {\n                                value: 100,\n                                message: \"No more than 100 characters allowed!\"\n                            }\n                        }), {\n                            placeholder: \"What's on your mind?\"\n                        }), void 0, false, {\n                            fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-900 rounded-md px-2 ml-2\",\n                            type: \"submit\",\n                            children: \"Tweet\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            children: errors === null || errors === void 0 ? void 0 : (ref = errors.tweet) === null || ref === void 0 ? void 0 : ref.message\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: tweetsData ? tweetsData.tweets.slice().reverse().map(function(tweet) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        href: \"/tweet/\".concat(tweet.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"bg-white text-black border border-black rounded-lg p-4 m-5\",\n                                children: tweet.text\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 19\n                            }, _this)\n                        }, tweet.id, false, {\n                            fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 17\n                        }, _this)\n                    }, tweet.id, false, {\n                        fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 15\n                    }, _this);\n                }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: \"No Tweets\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\index.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"85xs0/haGgAD3lgFBlZpGAL1hQo=\", false, function() {\n    return [\n        _lib_client_userUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _lib_client_userMutation__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VVc2VyIGZyb20gXCIuLi9saWIvY2xpZW50L3VzZXJVc2VyXCI7XG5pbXBvcnQgdXNlU1dSLCB7IG11dGF0ZSB9IGZyb20gXCJzd3JcIjtcbmltcG9ydCB1c2VNdXRhdGlvbiBmcm9tIFwiLi4vbGliL2NsaWVudC91c2VyTXV0YXRpb25cIjtcbmltcG9ydCB7IFN1Ym1pdEhhbmRsZXIsIHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbnRlcmZhY2UgVHdlZXRGb3JtIHtcbiAgdHdlZXQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyB1c2VyLCBpc0xvYWRpbmcgfSA9IHVzZVVzZXIoKTtcbiAgY29uc3QgW3R3ZWV0LCB7IGxvYWRpbmcsIGRhdGEsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oXG4gICAgXCIuLi9hcGkvdHdlZXRzL25ldy10d2VldFwiXG4gICk7XG4gIGNvbnN0IHtcbiAgICByZWdpc3RlcixcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICAgIHJlc2V0LFxuICB9ID0gdXNlRm9ybTxUd2VldEZvcm0+KCk7XG5cbiAgY29uc3QgeyBkYXRhOiB0d2VldHNEYXRhIH0gPSB1c2VTV1IoXCIuLi9hcGkvdHdlZXRzL2FsbC10d2VldHNcIik7XG5cbiAgY29uc3Qgb25TdWJtaXQ6IFN1Ym1pdEhhbmRsZXI8VHdlZXRGb3JtPiA9IGFzeW5jIChkYXRhOiBUd2VldEZvcm0pID0+IHtcbiAgICB0d2VldChkYXRhKTtcbiAgICByZXNldCgpO1xuICAgIGlmICghbG9hZGluZykge1xuICAgICAgYWxlcnQoXCJZb3UgaGF2ZSBwb3N0ZWQgYSB0d2VldCFcIik7XG4gICAgfVxuXG4gICAgbXV0YXRlKFwiLi4vYXBpL2FsbC10d2VldHNcIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHJvdXRlci5yZXBsYWNlKFwiL2xvZy1pblwiKTtcbiAgfTtcblxuICBpZiAoaXNMb2FkaW5nIHx8ICF1c2VyKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWItMlwiPldlbGNvbWUsIHt1c2VyLmVtYWlsfSEhPC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTUgZm9udC1ib2xkIHRleHQtYmxhY2sgYm9yZGVyLTIgYmctd2hpdGUgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbGcgcHgtM1wiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cbiAgICAgID5cbiAgICAgICAgTG9nIE91dFxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGJnLXdoaXRlIHRleHQtYmxhY2sgdGV4dC1jZW50ZXIgdy05NiByaW5nLTIgJHtcbiAgICAgICAgICAgICAgZXJyb3JzLnR3ZWV0ID8gXCJyaW5nLXJlZC01MDBcIiA6IFwicmluZy1ibGFja1wiXG4gICAgICAgICAgICB9IHJvdW5kZWQtbGcgb3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmxhY2sgcmVzaXplLW5vbmVgfVxuICAgICAgICAgICAgaWQ9XCJ0d2VldFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJ0d2VldFwiLCB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkOiBcIk5vIGVtcHR5IHR3ZWV0IVwiLFxuICAgICAgICAgICAgICBtYXhMZW5ndGg6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogMTAwLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTm8gbW9yZSB0aGFuIDEwMCBjaGFyYWN0ZXJzIGFsbG93ZWQhXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCdzIG9uIHlvdXIgbWluZD9cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTkwMCByb3VuZGVkLW1kIHB4LTIgbWwtMlwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIFR3ZWV0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHNwYW4+e2Vycm9ycz8udHdlZXQ/Lm1lc3NhZ2V9PC9zcGFuPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHt0d2VldHNEYXRhID8gKFxuICAgICAgICAgIHR3ZWV0c0RhdGEudHdlZXRzXG4gICAgICAgICAgICAuc2xpY2UoKVxuICAgICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgICAgLm1hcCgodHdlZXQ6IGFueSkgPT4gKFxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3R3ZWV0LyR7dHdlZXQuaWR9YH0ga2V5PXt0d2VldC5pZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3R3ZWV0LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtYmxhY2sgYm9yZGVyIGJvcmRlci1ibGFjayByb3VuZGVkLWxnIHAtNCBtLTVcIj5cbiAgICAgICAgICAgICAgICAgICAge3R3ZWV0LnRleHR9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5ObyBUd2VldHM8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVVzZXIiLCJ1c2VTV1IiLCJtdXRhdGUiLCJ1c2VNdXRhdGlvbiIsInVzZUZvcm0iLCJyb3V0ZXIiLCJMaW5rIiwiSG9tZSIsImVycm9ycyIsInVzZXIiLCJpc0xvYWRpbmciLCJ0d2VldCIsImxvYWRpbmciLCJkYXRhIiwiZXJyb3IiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsInJlc2V0IiwidHdlZXRzRGF0YSIsIm9uU3VibWl0IiwiYWxlcnQiLCJoYW5kbGVMb2dvdXQiLCJyZXBsYWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZW1haWwiLCJidXR0b24iLCJvbkNsaWNrIiwiZm9ybSIsImlucHV0IiwiaWQiLCJ0eXBlIiwicmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJwbGFjZWhvbGRlciIsInNwYW4iLCJ0d2VldHMiLCJzbGljZSIsInJldmVyc2UiLCJtYXAiLCJocmVmIiwicCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});