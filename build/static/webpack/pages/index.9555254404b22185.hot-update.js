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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_vijayankith_projects_crypto_nft_mint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_vijayankith_projects_crypto_nft_mint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_vijayankith_projects_crypto_nft_mint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_PHN_sol_PlaceHolder_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../artifacts/contracts/PHN.sol/PlaceHolder.json */ \"./artifacts/contracts/PHN.sol/PlaceHolder.json\");\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    var walletConnect = function walletConnect() {\n        function mint() {\n            return _mint.apply(this, arguments);\n        }\n        function _mint() {\n            _mint = _asyncToGenerator(_Users_vijayankith_projects_crypto_nft_mint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var performMint;\n                return _Users_vijayankith_projects_crypto_nft_mint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return contract.safeMint();\n                        case 3:\n                            performMint = _ctx.sent;\n                            _ctx.next = 6;\n                            return performMint.wait();\n                        case 6:\n                            loadMyNfts();\n                            _ctx.next = 12;\n                            break;\n                        case 9:\n                            _ctx.prev = 9;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.log(_ctx.t0);\n                        case 12:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        9\n                    ]\n                ]);\n            }));\n            return _mint.apply(this, arguments);\n        }\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"col-span-4\",\n            children: !loading ? active ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: mint,\n                className: \"py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800\",\n                children: \"MINT\"\n            }, void 0, false, {\n                fileName: \"/Users/vijayankith/projects/crypto/nft-mint/pages/index.js\",\n                lineNumber: 105,\n                columnNumber: 21\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: connect,\n                className: \"py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800\",\n                children: \"Connect to MetaMask\"\n            }, void 0, false, {\n                fileName: \"/Users/vijayankith/projects/crypto/nft-mint/pages/index.js\",\n                lineNumber: 105,\n                columnNumber: 163\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: \"py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/vijayankith/projects/crypto/nft-mint/pages/index.js\",\n                lineNumber: 106,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/vijayankith/projects/crypto/nft-mint/pages/index.js\",\n            lineNumber: 103,\n            columnNumber: 7\n        }, this));\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), active = ref[0], setActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), account = ref1[0], setAccount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), nfts = ref3[0], setNfts = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), contract = ref4[0], setContract = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), chainId = ref5[0], setChainId = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (loading == true) {\n            connect();\n        }\n        if (contract != null) {\n            loadMyNfts();\n        }\n    }, [\n        loading\n    ]);\n    function loadMyNfts() {\n        return _loadMyNfts.apply(this, arguments);\n    }\n    function _loadMyNfts() {\n        _loadMyNfts = _asyncToGenerator(_Users_vijayankith_projects_crypto_nft_mint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tokensOwned, tokenIds, i, tokenId;\n            return _Users_vijayankith_projects_crypto_nft_mint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return contract.balanceOf(account);\n                    case 2:\n                        tokensOwned = _ctx.sent;\n                        tokenIds = [];\n                        i = 0;\n                    case 5:\n                        if (!(i < tokensOwned)) {\n                            _ctx.next = 13;\n                            break;\n                        }\n                        _ctx.next = 8;\n                        return contract.tokenOfOwnerByIndex(account, i);\n                    case 8:\n                        tokenId = _ctx.sent;\n                        tokenIds.push(tokenId.toString());\n                    case 10:\n                        i++;\n                        _ctx.next = 5;\n                        break;\n                    case 13:\n                        setNfts(tokenIds);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _loadMyNfts.apply(this, arguments);\n    }\n    function connect() {\n        return _connect.apply(this, arguments);\n    }\n    function _connect() {\n        _connect = _asyncToGenerator(_Users_vijayankith_projects_crypto_nft_mint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, network, signer, address, phnContract;\n            return _Users_vijayankith_projects_crypto_nft_mint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!window.ethereum) {\n                            _ctx.next = 29;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_4___default())();\n                        _ctx.next = 5;\n                        return web3Modal.connect();\n                    case 5:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(connection);\n                        _ctx.next = 9;\n                        return provider.getNetwork();\n                    case 9:\n                        network = _ctx.sent;\n                        setChainId(network.chainId);\n                        if (chainId != 3) {\n                            window.ethereum.request({\n                                method: \"wallet_addEthereumChain\",\n                                params: [\n                                    {\n                                        chainId: \"0x3\",\n                                        rpcUrls: [\n                                            \"https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161\"\n                                        ],\n                                        chainName: \"Ropsten Test Network\",\n                                        nativeCurrency: {\n                                            name: \"ETHER\",\n                                            symbol: \"ETH\",\n                                            decimals: 18\n                                        },\n                                        blockExplorerUrls: [\n                                            \"https://polygonscan.com/\"\n                                        ]\n                                    }\n                                ]\n                            });\n                        }\n                        signer = provider.getSigner();\n                        _ctx.next = 15;\n                        return signer.getAddress();\n                    case 15:\n                        address = _ctx.sent;\n                        phnContract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.phnAddress, _artifacts_contracts_PHN_sol_PlaceHolder_json__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n                        setContract(phnContract);\n                        setActive(true);\n                        setAccount(address);\n                        setLoading(false);\n                        _ctx.next = 27;\n                        break;\n                    case 23:\n                        _ctx.prev = 23;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                        setLoading(false);\n                    case 27:\n                        _ctx.next = 30;\n                        break;\n                    case 29:\n                        {\n                            alert(\"no metamask wallets found!\");\n                        }\n                    case 30:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    23\n                ]\n            ]);\n        }));\n        return _connect.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"PlaceHolder NFT\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vijayankith/projects/crypto/nft-mint/pages/index.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated PlaceHolder NFT\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vijayankith/projects/crypto/nft-mint/pages/index.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vijayankith/projects/crypto/nft-mint/pages/index.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vijayankith/projects/crypto/nft-mint/pages/index.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: \"Welcome to PlaceHolder NFT\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vijayankith/projects/crypto/nft-mint/pages/index.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this),\n                    walletConnect(),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-semibold mb-2\",\n                        children: \"My NFTs\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vijayankith/projects/crypto/nft-mint/pages/index.js\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                        className: \"grid grid-cols-4 gap-6\",\n                        children: nfts.map(function(nft) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"bg-gray-100 p-4 h-24 lg:h-28 flex justify-center items-center text-lg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    src: \"http://placehold.jp/3d4070/ffffff/150x150.png?text=\" + nft\n                                }, void 0, false, {\n                                    fileName: \"/Users/vijayankith/projects/crypto/nft-mint/pages/index.js\",\n                                    lineNumber: 129,\n                                    columnNumber: 127\n                                }, _this)\n                            }, nft, false, {\n                                fileName: \"/Users/vijayankith/projects/crypto/nft-mint/pages/index.js\",\n                                lineNumber: 129,\n                                columnNumber: 30\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/vijayankith/projects/crypto/nft-mint/pages/index.js\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vijayankith/projects/crypto/nft-mint/pages/index.js\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vijayankith/projects/crypto/nft-mint/pages/index.js\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"MPEyViBNY7Vhvp5M6GQ6cOLaHR4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Rzs7Ozs7OytCQUE1SkEsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVMUMsQ0FBQztHQWhJdUJ4RSxJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiO1xuaW1wb3J0IHsgQmlnTnVtYmVyLCBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHtcbiAgcGhuQWRkcmVzc1xufSBmcm9tICcuLi9jb25maWcnO1xuXG5pbXBvcnQgUEhOIGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvUEhOLnNvbC9QbGFjZUhvbGRlci5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtuZnRzLCBzZXROZnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NoYWluSWQsIHNldENoYWluSWRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9hZGluZyA9PSB0cnVlKSB7XG4gICAgICBjb25uZWN0KCk7XG4gICAgfVxuICAgIGlmIChjb250cmFjdCAhPSBudWxsKSB7XG4gICAgICBsb2FkTXlOZnRzKCk7XG4gICAgfVxuICB9LCBbbG9hZGluZ10pO1xuXG5cblxuICBhc3luYyBmdW5jdGlvbiBsb2FkTXlOZnRzKCkge1xuICAgIGNvbnN0IHRva2Vuc093bmVkID0gYXdhaXQgY29udHJhY3QuYmFsYW5jZU9mKGFjY291bnQpO1xuICAgIGNvbnN0IHRva2VuSWRzID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2Vuc093bmVkOyBpKyspIHtcbiAgICAgIGNvbnN0IHRva2VuSWQgPSBhd2FpdCBjb250cmFjdC50b2tlbk9mT3duZXJCeUluZGV4KGFjY291bnQsIGkpXG4gICAgICB0b2tlbklkcy5wdXNoKHRva2VuSWQudG9TdHJpbmcoKSlcbiAgICB9XG4gICAgc2V0TmZ0cyh0b2tlbklkcylcbiAgfVxuXG5cbiAgYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICBpZih3aW5kb3cuZXRoZXJldW0pe1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCgpO1xuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKTtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbik7XG4gICAgICAgIGNvbnN0IG5ldHdvcmsgPSBhd2FpdCBwcm92aWRlci5nZXROZXR3b3JrKCk7XG4gICAgICAgIHNldENoYWluSWQobmV0d29yay5jaGFpbklkKTtcbiAgICAgICAgaWYgKGNoYWluSWQgIT0gMykge1xuICAgICAgICAgIHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJ3YWxsZXRfYWRkRXRoZXJldW1DaGFpblwiLFxuICAgICAgICAgICAgcGFyYW1zOiBbe1xuICAgICAgICAgICAgICBjaGFpbklkOiBcIjB4M1wiLFxuICAgICAgICAgICAgICBycGNVcmxzOiBbXCJodHRwczovL3JvcHN0ZW4uaW5mdXJhLmlvL3YzLzlhYTNkOTViM2JjNDQwZmE4OGVhMTJlYWE0NDU2MTYxXCJdLFxuICAgICAgICAgICAgICBjaGFpbk5hbWU6IFwiUm9wc3RlbiBUZXN0IE5ldHdvcmtcIixcbiAgICAgICAgICAgICAgbmF0aXZlQ3VycmVuY3k6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkVUSEVSXCIsXG4gICAgICAgICAgICAgICAgc3ltYm9sOiBcIkVUSFwiLFxuICAgICAgICAgICAgICAgIGRlY2ltYWxzOiAxOFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBibG9ja0V4cGxvcmVyVXJsczogW1wiaHR0cHM6Ly9wb2x5Z29uc2Nhbi5jb20vXCJdXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKTtcbiAgICAgICAgY29uc3QgcGhuQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KHBobkFkZHJlc3MsIFBITi5hYmksIHNpZ25lcik7XG4gICAgICAgIHNldENvbnRyYWN0KHBobkNvbnRyYWN0KTtcbiAgICAgICAgc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICBzZXRBY2NvdW50KGFkZHJlc3MpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgLy8gbG9hZE15TmZ0cygpO1xuXG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIGFsZXJ0KFwibm8gbWV0YW1hc2sgd2FsbGV0cyBmb3VuZCFcIik7XG4gICAgfVxuICAgXG4gIH1cblxuICBmdW5jdGlvbiB3YWxsZXRDb25uZWN0KCkge1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gbWludCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBlcmZvcm1NaW50ID0gYXdhaXQgY29udHJhY3Quc2FmZU1pbnQoKTtcbiAgICAgICAgYXdhaXQgcGVyZm9ybU1pbnQud2FpdCgpO1xuICAgICAgICBsb2FkTXlOZnRzKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuXG4gICAgfVxuXG5cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XG4gICAgICAgIHshbG9hZGluZyA/XG4gICAgICAgICAgKGFjdGl2ZSA/IDxidXR0b24gb25DbGljaz17bWludH0gY2xhc3NOYW1lPVwicHktMiBtdC0yMCBtYi00IHRleHQtbGcgZm9udC1ib2xkIHRleHQtd2hpdGUgcm91bmRlZC1sZyB3LTU2IGJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtODAwXCI+TUlOVDwvYnV0dG9uPiA6IDxidXR0b24gb25DbGljaz17Y29ubmVjdH0gY2xhc3NOYW1lPVwicHktMiBtdC0yMCBtYi00IHRleHQtbGcgZm9udC1ib2xkIHRleHQtd2hpdGUgcm91bmRlZC1sZyB3LTU2IGJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtODAwXCI+Q29ubmVjdCB0byBNZXRhTWFzazwvYnV0dG9uPilcbiAgICAgICAgICA6IDxidXR0b24gY2xhc3NOYW1lPVwicHktMiBtdC0yMCBtYi00IHRleHQtbGcgZm9udC1ib2xkIHRleHQtd2hpdGUgcm91bmRlZC1sZyB3LTU2IGJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtODAwXCI+TG9hZGluZy4uLjwvYnV0dG9uPn1cbiAgICAgICAgey8qIHthY3RpdmUgPyA8c3Bhbj5Db25uZWN0ZWQgd2l0aCA8Yj57YWNjb3VudH08L2I+PC9zcGFuPiA6IDxzcGFuPk5vdCBjb25uZWN0ZWQ8L3NwYW4+fSAqL31cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UGxhY2VIb2xkZXIgTkZUPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBQbGFjZUhvbGRlciBORlRcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgV2VsY29tZSB0byBQbGFjZUhvbGRlciBORlRcbiAgICAgICAgPC9oMT5cblxuICAgICAgICB7d2FsbGV0Q29ubmVjdCgpfVxuXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTJcIj5NeSBORlRzPC9oMj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTZcIj5cbiAgICAgICAgICB7bmZ0cy5tYXAoKG5mdCkgPT4gPGRpdiBrZXk9e25mdH0gY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgcC00IGgtMjQgbGc6aC0yOCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWxnXCI+PGltZyBzcmM9e1wiaHR0cDovL3BsYWNlaG9sZC5qcC8zZDQwNzAvZmZmZmZmLzE1MHgxNTAucG5nP3RleHQ9XCIgKyBuZnR9IC8+PC9kaXY+KX1cbiAgICAgICAgPC91bD5cblxuXG4gICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCI+TUlOVDwvYnV0dG9uPiAqL31cblxuICAgICAgPC9tYWluPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJXZWIzTW9kYWwiLCJCaWdOdW1iZXIiLCJldGhlcnMiLCJwaG5BZGRyZXNzIiwiUEhOIiwiSG9tZSIsIndhbGxldENvbm5lY3QiLCJtaW50IiwicGVyZm9ybU1pbnQiLCJjb250cmFjdCIsInNhZmVNaW50Iiwid2FpdCIsImxvYWRNeU5mdHMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibG9hZGluZyIsImFjdGl2ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjb25uZWN0Iiwic2V0QWN0aXZlIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJzZXRMb2FkaW5nIiwibmZ0cyIsInNldE5mdHMiLCJzZXRDb250cmFjdCIsImNoYWluSWQiLCJzZXRDaGFpbklkIiwidG9rZW5zT3duZWQiLCJ0b2tlbklkcyIsImkiLCJ0b2tlbklkIiwiYmFsYW5jZU9mIiwidG9rZW5PZk93bmVyQnlJbmRleCIsInB1c2giLCJ0b1N0cmluZyIsIndlYjNNb2RhbCIsImNvbm5lY3Rpb24iLCJwcm92aWRlciIsIm5ldHdvcmsiLCJzaWduZXIiLCJhZGRyZXNzIiwicGhuQ29udHJhY3QiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldE5ldHdvcmsiLCJyZXF1ZXN0IiwibWV0aG9kIiwicGFyYW1zIiwicnBjVXJscyIsImNoYWluTmFtZSIsIm5hdGl2ZUN1cnJlbmN5IiwibmFtZSIsInN5bWJvbCIsImRlY2ltYWxzIiwiYmxvY2tFeHBsb3JlclVybHMiLCJnZXRTaWduZXIiLCJnZXRBZGRyZXNzIiwiQ29udHJhY3QiLCJhYmkiLCJhbGVydCIsInRpdGxlIiwibWV0YSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsImgyIiwidWwiLCJtYXAiLCJuZnQiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});