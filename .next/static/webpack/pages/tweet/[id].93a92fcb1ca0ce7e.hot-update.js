"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tweet/[id]",{

/***/ "./pages/tweet/[id].tsx":
/*!******************************!*\
  !*** ./pages/tweet/[id].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_client_userMutation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/client/userMutation */ \"./lib/client/userMutation.tsx\");\n/* harmony import */ var _lib_client_userUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/client/userUser */ \"./lib/client/userUser.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n// components/Tweet.tsx\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Tweet = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var user = (0,_lib_client_userUser__WEBPACK_IMPORTED_MODULE_6__[\"default\"])().user;\n    var id = router.query.id;\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"../api/tweets/\".concat(id)), tweetData = ref.data, tweetError = ref.error;\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"../api/tweets/\".concat(id, \"/likes\")), likesData = ref1.data, likesError = ref1.error;\n    var ref2 = _slicedToArray((0,_lib_client_userMutation__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"../api/likes/\".concat(id)), 1), likeTweet = ref2[0];\n    if (tweetError || likesError) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"Error loading data\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\tweet\\\\[id].tsx\",\n        lineNumber: 21,\n        columnNumber: 40\n    }, _this);\n    if (!tweetData || !likesData || !likesData.likes) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\tweet\\\\[id].tsx\",\n        lineNumber: 23,\n        columnNumber: 12\n    }, _this);\n    var handleLike = function() {\n        var _ref1 = _asyncToGenerator(C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n            return C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        _ctx1.next = 2;\n                        return likeTweet(id);\n                    case 2:\n                        // Trigger revalidation of the SWR cache for tweet likes\n                        (0,swr__WEBPACK_IMPORTED_MODULE_3__.mutate)(\"../api/tweets/\".concat(id, \"/likes\"), function() {\n                            var _ref = _asyncToGenerator(C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {\n                                var response, newData;\n                                return C_Users_eoeomj_Documents_TwitterClone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            _ctx.next = 2;\n                                            return fetch(\"../api/tweets/\".concat(id, \"/likes\"));\n                                        case 2:\n                                            response = _ctx.sent;\n                                            _ctx.next = 5;\n                                            return response.json();\n                                        case 5:\n                                            newData = _ctx.sent;\n                                            return _ctx.abrupt(\"return\", _objectSpread({}, data, {\n                                                likes: newData.likes\n                                            }));\n                                        case 7:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function(data) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }(), false);\n                    case 3:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return function handleLike() {\n            return _ref1.apply(this, arguments);\n        };\n    }();\n    var userLiked = likesData.likes.some(function(like) {\n        return like.userId === user.id;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center bg-white\",\n        children: [\n            tweetData.text,\n            \"Likes \",\n            likesData.likes.length === 0 ? 0 : likesData.likes.length,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: handleLike,\n                children: userLiked ? \"Unlike\" : \"Like\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\tweet\\\\[id].tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/\",\n                    children: \"Back to Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\tweet\\\\[id].tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\tweet\\\\[id].tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\eoeomj\\\\Documents\\\\TwitterClone\\\\pages\\\\tweet\\\\[id].tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, _this);\n};\n_s(Tweet, \"28GizQfzhLl1/v9JlafTyctcb9Q=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _lib_client_userUser__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _lib_client_userMutation__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Tweet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tweet);\nvar _c;\n$RefreshReg$(_c, \"Tweet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7MEJBQ3JFLDhEQUFDUyxHQUFDOzBCQUNBLDRFQUFDL0Isa0RBQUk7b0JBQUNnQyxJQUFJLEVBQUMsR0FBRzs4QkFBQyxjQUFZOzs7Ozt5QkFBTzs7Ozs7cUJBQ2hDOzs7Ozs7YUFDQSxDQUNOO0NBQ0g7R0FqREs3QixLQUFLOztRQUNNTixrREFBUztRQUNQSyw0REFBTztRQUd1QkosMkNBQU07UUFDTkEsMkNBQU07UUFJakNHLGdFQUFXOzs7QUFWM0JFLEtBQUFBLEtBQUs7QUFtRFgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90d2VldC9baWRdLnRzeD9mM2QyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvVHdlZXQudHN4XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHVzZVNXUiwgeyBtdXRhdGUgfSBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHVzZU11dGF0aW9uIGZyb20gXCIuLi8uLi9saWIvY2xpZW50L3VzZXJNdXRhdGlvblwiO1xyXG5pbXBvcnQgdXNlVXNlciBmcm9tIFwiLi4vLi4vbGliL2NsaWVudC91c2VyVXNlclwiO1xyXG5cclxuY29uc3QgVHdlZXQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VVc2VyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBjb25zdCB7IGRhdGE6IHR3ZWV0RGF0YSwgZXJyb3I6IHR3ZWV0RXJyb3IgfSA9IHVzZVNXUihgLi4vYXBpL3R3ZWV0cy8ke2lkfWApO1xyXG4gIGNvbnN0IHsgZGF0YTogbGlrZXNEYXRhLCBlcnJvcjogbGlrZXNFcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgYC4uL2FwaS90d2VldHMvJHtpZH0vbGlrZXNgXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW2xpa2VUd2VldF0gPSB1c2VNdXRhdGlvbihgLi4vYXBpL2xpa2VzLyR7aWR9YCk7XHJcblxyXG4gIGlmICh0d2VldEVycm9yIHx8IGxpa2VzRXJyb3IpIHJldHVybiA8ZGl2PkVycm9yIGxvYWRpbmcgZGF0YTwvZGl2PjtcclxuICBpZiAoIXR3ZWV0RGF0YSB8fCAhbGlrZXNEYXRhIHx8ICFsaWtlc0RhdGEubGlrZXMpXHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG5cclxuICBjb25zdCBoYW5kbGVMaWtlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gUGVyZm9ybSB0aGUgbGlrZSBhY3Rpb25cclxuICAgIGF3YWl0IGxpa2VUd2VldChpZCk7XHJcblxyXG4gICAgLy8gVHJpZ2dlciByZXZhbGlkYXRpb24gb2YgdGhlIFNXUiBjYWNoZSBmb3IgdHdlZXQgbGlrZXNcclxuICAgIG11dGF0ZShcclxuICAgICAgYC4uL2FwaS90d2VldHMvJHtpZH0vbGlrZXNgLFxyXG4gICAgICBhc3luYyAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gRmV0Y2ggdGhlIGxhdGVzdCBsaWtlcyBkYXRhIGZyb20gdGhlIHNlcnZlclxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC4uL2FwaS90d2VldHMvJHtpZH0vbGlrZXNgKTtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdGhlIGxpa2VzIGNvdW50IGFuZCByZXR1cm4gdGhlIHVwZGF0ZWQgZGF0YVxyXG4gICAgICAgIHJldHVybiB7IC4uLmRhdGEsIGxpa2VzOiBuZXdEYXRhLmxpa2VzIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVzZXJMaWtlZCA9IGxpa2VzRGF0YS5saWtlcy5zb21lKFxyXG4gICAgKGxpa2U6IGFueSkgPT4gbGlrZS51c2VySWQgPT09IHVzZXIuaWRcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBiZy13aGl0ZVwiPlxyXG4gICAgICB7dHdlZXREYXRhLnRleHR9XHJcbiAgICAgIExpa2VzIHtsaWtlc0RhdGEubGlrZXMubGVuZ3RoID09PSAwID8gMCA6IGxpa2VzRGF0YS5saWtlcy5sZW5ndGh9XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTGlrZX0+e3VzZXJMaWtlZCA/IFwiVW5saWtlXCIgOiBcIkxpa2VcIn08L2J1dHRvbj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5CYWNrIHRvIEhvbWU8L0xpbms+XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUd2VldDtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVNXUiIsIm11dGF0ZSIsIkxpbmsiLCJ1c2VNdXRhdGlvbiIsInVzZVVzZXIiLCJUd2VldCIsInJvdXRlciIsInVzZXIiLCJpZCIsInF1ZXJ5IiwiZGF0YSIsInR3ZWV0RGF0YSIsImVycm9yIiwidHdlZXRFcnJvciIsImxpa2VzRGF0YSIsImxpa2VzRXJyb3IiLCJsaWtlVHdlZXQiLCJkaXYiLCJsaWtlcyIsImhhbmRsZUxpa2UiLCJyZXNwb25zZSIsIm5ld0RhdGEiLCJmZXRjaCIsImpzb24iLCJ1c2VyTGlrZWQiLCJzb21lIiwibGlrZSIsInVzZXJJZCIsImNsYXNzTmFtZSIsInRleHQiLCJsZW5ndGgiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});