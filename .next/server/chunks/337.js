exports.id = 337;
exports.ids = [337];
exports.modules = {

/***/ 6133:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3258, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9446, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6862, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2030, 23))

/***/ }),

/***/ 1094:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7580));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5839))

/***/ }),

/***/ 5373:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 837))

/***/ }),

/***/ 758:
/***/ (() => {



/***/ }),

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 9511:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/mymac/Desktop/Mac\xa0mini/DEVELOPE/fixadcompany/fixad 2/src/app/(service)/(_components)/Footer/FourColumns.tsx");


/***/ }),

/***/ 4358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);
/* harmony import */ var _FourColumns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9511);
/* harmony import */ var _FourColumns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FourColumns__WEBPACK_IMPORTED_MODULE_1__);
// import FourColumnsDark from './FourColumnsDark'


function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "border-t border-t-gray-200",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_FourColumns__WEBPACK_IMPORTED_MODULE_1___default()), {})
    });
}


/***/ }),

/***/ 4740:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/mymac/Desktop/Mac\xa0mini/DEVELOPE/fixadcompany/fixad 2/src/app/(service)/(_components)/Header/WithRightAlignedNav/index.tsx");


/***/ }),

/***/ 9813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);
/* harmony import */ var _WithRightAlignedNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4740);
/* harmony import */ var _WithRightAlignedNav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_WithRightAlignedNav__WEBPACK_IMPORTED_MODULE_1__);


function Header() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_WithRightAlignedNav__WEBPACK_IMPORTED_MODULE_1___default()), {});
}


/***/ }),

/***/ 7547:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/mymac/Desktop/Mac\xa0mini/DEVELOPE/fixadcompany/fixad 2/src/app/(service)/(default)/(_components)/LandingPage/index.tsx");


/***/ }),

/***/ 2862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Head)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(8499);
;// CONCATENATED MODULE: ./src/shared/const/metaData.ts
/* 
[TODO]
메타 데이터 입력 필요
- 설명
- 이미지 URL
- 시스템 URL
*/ const METADATA = {
    TITLE: "픽스애드 - FIXAD",
    DESC: "진심이 만든 전략, 오래 찾는 마케팅, 픽스애드",
    IMAGE: "/thumbnail_rectangle.jpg",
    // IMAGE_RECTANGLE: '/thumbnail_square.jpg',
    URL: "",
    IMAGE_WIDTH: "800",
    IMAGE_HEIGHT: "400"
};

;// CONCATENATED MODULE: ./src/shared/const/path.ts
const PATH = {
    HOME: "/",
    AUTH_PRESIGNUP: "/auth/pre-signup",
    AUTH_PRESIGNUP_EXTRA: "/auth/pre-signup/extra",
    AUTH_PRESIGNUP_EMAIL_SIGNUP: "/auth/pre-signup/email-signup",
    ADMIN_HOME: "/admin/home",
    ADMIN_USERS: "/admin/users",
    ADMIN_USERS_EXPLORE: "/admin/users/explore",
    API_KAKAO_PRESIGNUP: "/api/kakao-presignup",
    API_GOOGLE_PRESIGNUP: "/api/google-presignup"
};

;// CONCATENATED MODULE: ./src/shared/const/reactQueryKey.ts
const REACT_QUERY_KEY = {
    VALIDATE_SESSION: "validateSession"
};

;// CONCATENATED MODULE: ./src/shared/const/index.ts






;// CONCATENATED MODULE: ./src/app/head.tsx


function Head() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("title", {
                children: METADATA.TITLE
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:type",
                content: "website"
            }, "type"),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:title",
                content: METADATA.TITLE
            }, "title"),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:description",
                content: METADATA.DESC
            }, "description"),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:image",
                content: METADATA.IMAGE
            }, "image"),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:image:width",
                content: METADATA.IMAGE_WIDTH
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:image:height",
                content: METADATA.IMAGE_HEIGHT
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                content: "width=device-width, initial-scale=1.0, user-scalable=no",
                name: "viewport"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "icon",
                href: "/favicon.ico"
            })
        ]
    });
}


/***/ }),

/***/ 7647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5553);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);


function Layout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "kr",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("head", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "픽스애드 - FIXAD"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "진심이 만든 전략, 오래 찾는 마케팅. 픽스애드는 SEO, 퍼포먼스 마케팅, 콘텐츠 전략으로 비즈니스의 지속 가능한 성장을 만듭니다."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "naver-site-verification",
                        content: "632ee8d841c3e6fc51d7a0324d9671535e7f2ef3"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "root",
                    children: children
                })
            })
        ]
    });
}


/***/ }),

/***/ 5839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FourColumns)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const navigation = {
    solutions: [
        {
            name: "Marketing",
            href: "#"
        },
        {
            name: "Analytics",
            href: "#"
        },
        {
            name: "Commerce",
            href: "#"
        },
        {
            name: "Insights",
            href: "#"
        }
    ],
    support: [
        {
            name: "Pricing",
            href: "#"
        },
        {
            name: "Documentation",
            href: "#"
        },
        {
            name: "Guides",
            href: "#"
        },
        {
            name: "API Status",
            href: "#"
        }
    ],
    company: [
        {
            name: "About",
            href: "#"
        },
        {
            name: "Blog",
            href: "#"
        },
        {
            name: "Jobs",
            href: "#"
        },
        {
            name: "Press",
            href: "#"
        },
        {
            name: "Partners",
            href: "#"
        }
    ],
    legal: [
        {
            name: "Claim",
            href: "#"
        },
        {
            name: "Privacy",
            href: "#"
        },
        {
            name: "Terms",
            href: "#"
        }
    ],
    social: [
        {
            name: "Facebook",
            href: "#",
            icon: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    ...props,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                        clipRule: "evenodd"
                    })
                })
        },
        {
            name: "Instagram",
            href: "#",
            icon: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    ...props,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                        clipRule: "evenodd"
                    })
                })
        },
        {
            name: "Twitter",
            href: "#",
            icon: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    ...props,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    })
                })
        },
        {
            name: "GitHub",
            href: "#",
            icon: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    ...props,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                        clipRule: "evenodd"
                    })
                })
        },
        {
            name: "YouTube",
            href: "#",
            icon: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    ...props,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        d: "M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z",
                        clipRule: "evenodd"
                    })
                })
        }
    ]
};
function FourColumns() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "bg-white",
        "aria-labelledby": "footer-heading",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                id: "footer-heading",
                className: "sr-only",
                children: "Footer"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "mx-auto h-28",
                            src: "/hero/logo.png",
                            alt: "FIXAD"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center text-sm mt-8 text-gray-700",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "픽스애드(FIXAD) | 주식회사 주식회사 진심픽스(JINSIMFIX Co., Ltd.)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "대표이사: 김예진"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "사업자등록번호: 349-87-03693"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "서울특별시 금천구 디지털로 178, 가산퍼블릭 A동 15층 1503호"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-4 border-gray-900/10 pt-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-xs text-center leading-5 text-gray-500",
                            children: "\xa9 2025 JINSIMFIX, Co. All rights reserved."
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 7580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Example)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/Bars3Icon.js
var Bars3Icon = __webpack_require__(6501);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/XMarkIcon.js
var XMarkIcon = __webpack_require__(7231);
;// CONCATENATED MODULE: ./src/shared/utils/scroll.ts
function getIntoViewElement(elementId) {
    const about = document.getElementById(elementId);
    about && about.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
;// CONCATENATED MODULE: ./src/app/(service)/(_components)/Header/WithRightAlignedNav/index.tsx





const WithRightAlignedNav_navigation = [
    {
        name: "SERVICES",
        href: "services"
    },
    // { name: 'WORKS', href: 'works' },
    {
        name: "COMPANY",
        href: "company"
    },
    {
        name: "CONTACT",
        href: "contact"
    }
];
const languages = [
    {
        code: "ko",
        flag: "kor.svg",
        name: "KOR"
    },
    {
        code: "en",
        flag: "usa.svg",
        name: "ENG"
    },
    // { code: 'zh-TW', flag: 'tpe.svg', name: 'TWN' },
    {
        code: "ja",
        flag: "jpn.svg",
        name: "JPN"
    }
];
function Example() {
    const router = (0,navigation.useRouter)();
    const [mobileMenuOpen, setMobileMenuOpen] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "bg-white fixed z-10 w-full border-b border-b-gray-100",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "mx-auto flex max-w-7xl items-center justify-between p-5 xl:px-0",
                "aria-label": "Global",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "#hero",
                        className: "-m-1.5 p-1.5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sr-only",
                                children: "FIXAD"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "h-10 w-auto",
                                src: "/main_logo.png",
                                alt: "logo"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex lg:hidden",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            type: "button",
                            className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
                            onClick: ()=>setMobileMenuOpen(true),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sr-only",
                                    children: "Open main menu"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Bars3Icon, {
                                    className: "h-6 w-6",
                                    "aria-hidden": "true"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden lg:flex lg:gap-x-12",
                        children: WithRightAlignedNav_navigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: (e)=>{
                                    e.preventDefault();
                                    getIntoViewElement(item.href);
                                },
                                className: "text-xl font-semibold leading-6 text-black",
                                children: item.name
                            }, item.name))
                    })
                ]
            }),
            mobileMenuOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#hero",
                                className: "-m-1.5 p-1.5",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sr-only",
                                        children: "FIXAD"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "h-10 w-auto",
                                        src: "/main_logo.png",
                                        alt: "logo"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                type: "button",
                                className: "-m-2.5 rounded-md p-2.5 text-gray-700",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sr-only",
                                        children: "Close menu"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(XMarkIcon, {
                                        className: "h-6 w-6",
                                        "aria-hidden": "true"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-6 flow-root",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "-my-6 divide-y divide-gray-500/10",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "space-y-2 py-6",
                                children: WithRightAlignedNav_navigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            getIntoViewElement(item.href);
                                            setMobileMenuOpen(false);
                                        },
                                        className: "-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                                        children: item.name
                                    }, item.name))
                            })
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LandingPage)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/app/(service)/(default)/(_components)/LandingPage/Hero.tsx

const VIDEO_SRC = "/redesign/main/fixadVid.mp4";
function Hero({ lang  } = {}) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "hero",
        className: "bg-gray-100 h-screen relative overflow-hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("video", {
                autoPlay: true,
                loop: true,
                muted: true,
                playsInline: true,
                className: "absolute inset-0 w-full h-full object-cover",
                children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                    src: VIDEO_SRC,
                    type: "video/mp4"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute inset-x-1/2 inset-y-1/2 w-32 lg:w-48 h-auto z-20",
                style: {
                    transform: "translateX(-50%)",
                    pointerEvents: "none",
                    mixBlendMode: "difference"
                }
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/(service)/(default)/(_components)/LandingPage/CEO.tsx

const navigation = [
    {
        name: "Product",
        href: "#"
    },
    {
        name: "Features",
        href: "#"
    },
    {
        name: "Marketplace",
        href: "#"
    },
    {
        name: "Company",
        href: "#"
    }
];
const LS = {
    ceo: {
        ko: "김선우",
        ja: "金 宣雨（キム•ソヌ）",
        en: "Kim Sunwoo"
    },
    position: {
        ko: "빅지 엔터테인먼트 대표",
        ja: "BIG-G ENTERTAINMENT 代表取締役",
        en: "BIG-G ENTERTAINMENT CEO"
    },
    history1: {
        ko: "2022 Hot place gym CEO",
        ja: "2022 Hot Place Gym CEO",
        en: "2022 Hot Place Gym CEO"
    },
    history2: {
        ko: "2023 투초이스 법인 총괄",
        ja: "2023 Two Choice Consunting 法人総括",
        en: "2023 Two Choice Consulting Corporation General Manager"
    },
    history3: {
        ko: "2023 빅지 엔터테인먼트 설립",
        ja: "2023 BIG-G ENTERTAINMENT 設立",
        en: "2023 BIG-G ENTERTAINMENT Establishment"
    },
    ideology: {
        ko: "회사이념",
        ja: "企業理念",
        en: "Company Ideology"
    },
    companyIdeology1: {
        ko: `" 광고주와 크리에이터를 잇다 "`,
        ja: `" 広告主とクリエイターとの結び "`,
        en: `" Connecting Advertisers and Creators "`
    },
    companyIdeology2: {
        ko: "빅지 엔터테이먼트는 광고주의 니즈와 크리에이터의 가치를 최우선으로 생각하며, 광고주 크리에이터 빅지엔터테이먼트 모두가 함께 성장할 수 있는 시장을 만들어가고 있습니다.",
        ja: "BIG-G ENTERTAINMENTは、広告主様のニーズとクリエイター様の価値を最優先で考え、広告主様、クリエイター様、そしてBIG-Gまで共に成長できるマーケットを創り上げております。",
        en: "BIG-G ENTERTAINMENT is a company that prioritizes the needs of advertisers and the value of creators, and is creating a market where advertisers, creators, and BIG-G can all grow together."
    },
    companyIdeology3: {
        ko: "단순한 광고가 아닌 모두가 찾아가고 싶은 집을 만들고 싶습니다.",
        ja: "単なるコマーシャルではなく、皆様から「行きたい」思われる所が創りたいです。",
        en: "We want to create a home that everyone wants to find."
    },
    companyIdeology4: {
        ko: "크리에이터들이 품고 있는 가능성과 업주들이 펼쳐나가는 꿈 이 두가지 가치 사이를 잇는 징검다리로 빅지 엔터테이먼트가 항상 서있겠습니다.",
        ja: "クリエイター様のそれぞれの可能性と、広告主様が抱いている夢を繋ぐ「架け橋」として、BIG-Gが尽力いたします。",
        en: "As a bridge connecting the potential of creators and the dreams of owners, BIG-G ENTERTAINMENT is always here."
    }
};
function CEO({ lang  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "company",
        className: "py-32 max-w-7xl border-t border-t-gray-400 mx-5 xl:mx-auto",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-5xl font-bold tracking-tight text-black sm:text-6xl text-center ",
                style: {
                    color: "#f47963"
                },
                children: "COMPANY"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-16 grid grid-template lg:grid-cols-[2fr_1fr]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "lg:border-r border-l-black border-r-gray-400 w-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full bg-gray-100 aspect-[1/1] overflow-hidden",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "bg-red-500 aspect-square overflow-hidden",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/ceo/1.jpeg",
                                                    alt: "ceo",
                                                    loading: "lazy",
                                                    className: "w-full h-full object-cover"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "bg-red-500 aspect-square overflow-hidden",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/ceo/2.jpeg",
                                                    alt: "ceo",
                                                    loading: "lazy",
                                                    className: "w-full h-full object-cover"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "bg-red-500 aspect-square overflow-hidden",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/ceo/3.jpeg",
                                                    alt: "ceo",
                                                    loading: "lazy",
                                                    className: "w-full h-full object-cover"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "bg-red-500 aspect-square overflow-hidden",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/ceo.jpeg",
                                                    alt: "ceo",
                                                    loading: "lazy",
                                                    className: "w-full h-full object-cover"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h-[1px] bg-gray-400 mb-4 hidden lg:block"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "py-12 pt-10 lg:py-4 lg:px-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-4xl lg:text-5xl tracking-widest",
                                        children: "김예진"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "text-2xl mt-3",
                                        children: "픽스애드 대표"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text-lg mt-8 text-gray-600 text-right",
                                        children: [
                                            "진심이 만든 전략,",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "오래 찾는 마케팅,",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "픽스애드",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "lg:pl-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "py-8 lg:py-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: "text-2xl lg:text-2xl font-bold",
                                    children: [
                                        '"진심이 만든 전략, 증명하는 성과,',
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        '오래 찾는 픽스애드"'
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "text-base mt-4 text-gray-600",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "안녕하세요.",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "픽스애드 | JINSIMFIX Co., Ltd. 대표이사 김예진입니다.",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "처음엔 일개 광고회사 사원으로 시작했습니다. 수많은 고객을 만나고, 그들의 브랜드를 함께 키워 오며 저 역시 몇 년 동안 끊임없이 배우고 성장해 왔습니다.",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "고객 한 분 한 분의 성과는 제게 단순한 결과가 아닌, 진심을 담은 마케팅의 가치를 다시금 깨닫게 해 주는 동력이었습니다. 그러한 경험들이 쌓여 더 많은 분들과 진정성 있게 일하고 싶다는 마음으로 픽스애드 | JINSIMFIX Co., Ltd. 를 설립하게 되었습니다.",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "SNS 플랫폼은 이제 언어와 문화를 넘어 브랜드를 연결하는 도구가 되었고, 디지털 광고는 단순 노출이 아닌 글로벌 신뢰의 시작점이 되었습니다.",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "픽스애드 | JINSIMFIX Co., Ltd. 는 N사 출신 개발자들과 함께 다른 곳에 없는 마케팅 솔루션을 직접 개발하며 시장을 선도합니다.",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "고객의 브랜드가 오래 사랑받을 수 있도록, 진심을 담아 함께하겠습니다."
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 45 modules
var axios = __webpack_require__(5085);
;// CONCATENATED MODULE: ./src/app/(service)/(default)/(_components)/LandingPage/Contact.tsx



/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/ const Contact_LS = {
    name: {
        ko: "이름",
        ja: "名前",
        en: "Name"
    },
    email: {
        ko: "이메일 주소",
        ja: "メールアドレス",
        en: "Email Address"
    },
    tel: {
        ko: "휴대폰 번호",
        ja: "電話番号",
        en: "Phone Number"
    },
    company: {
        ko: "회사",
        ja: "会社",
        en: "Company"
    },
    message: {
        ko: "문의 내용",
        ja: "お問い合わせ内容",
        en: "Message"
    },
    submit: {
        ko: "문의하기",
        ja: "お問い合わせ",
        en: "Contact"
    }
};
const initState = {
    name: "",
    email: "",
    tel: "",
    company: "",
    message: ""
};
function Contact({ lang  }) {
    const [formState, setFormState] = (0,react_.useState)({
        ...initState
    });
    async function onSubmit(e) {
        e.preventDefault();
        axios/* default.post */.Z.post("/api/contact", {
            ...formState
        }).then((res)=>{
            if (res.data.success === "true") {
                alert("문의를 성공적으로 전달하였습니다.");
                setFormState({
                    ...initState
                });
            } else {
                alert("문의에 실패하였습니다.");
            }
        }).catch(()=>{
            alert("문의에 실패하였습니다.");
        });
    }
    function handleInputChange(e) {
        e.preventDefault();
        const { name , value  } = e.target;
        setFormState((prev)=>({
                ...prev,
                [name]: value
            }));
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "contact",
        className: "py-32 mx-5 border-t border-t-gray-400 xl:mx-auto relative",
        style: {
            backgroundImage: "url(/contact4.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute inset-0 bg-gray-400 bg-opacity-40",
                style: {
                    zIndex: 1
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-4xl font-bold tracking-tight sm:text-6xl text-center",
                        style: {
                            color: "#f47963"
                        },
                        children: "CONTACT"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mx-auto max-w-xl lg:max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-xl lg:text-2xl font-medium tracking-tight text-center mt-16",
                                style: {
                                    lineHeight: "1.6",
                                    color: "white",
                                    textShadow: "2px 2px 4px rgba(0,0,0,0.7)"
                                },
                                children: [
                                    '" 브랜드에 진심을 담아, 성과로 이어드립니다. "',
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "지금 상담 받기"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex justify-center mt-16 font-medium",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "http://pf.kakao.com/_eCxoxoxj",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-flex items-center px-6 py-3 bg-[#FEE500] hover:bg-yellow-400 text-black font-medium text-sm rounded-lg shadow transition-colors duration-200",
                                    style: {
                                        fontSize: "1.25rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/kakao.png",
                                            alt: "카카오톡",
                                            className: "w-7 h-7 mr-4",
                                            style: {
                                                display: "inline-block",
                                                verticalAlign: "middle"
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-lg",
                                            children: "카카오톡 문의하기"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__(58);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/hooks/use-scroll-animation.ts

function useScrollAnimation() {
    return (0,react_.useRef)(null);
}

// EXTERNAL MODULE: ./node_modules/embla-carousel-react/embla-carousel-react.umd.js
var embla_carousel_react_umd = __webpack_require__(9124);
var embla_carousel_react_umd_default = /*#__PURE__*/__webpack_require__.n(embla_carousel_react_umd);
// EXTERNAL MODULE: ./node_modules/embla-carousel-autoplay/embla-carousel-autoplay.umd.js
var embla_carousel_autoplay_umd = __webpack_require__(7886);
var embla_carousel_autoplay_umd_default = /*#__PURE__*/__webpack_require__.n(embla_carousel_autoplay_umd);
;// CONCATENATED MODULE: ./src/app/(service)/(default)/(_components)/LandingPage/Services.tsx






const services = [
    {
        number: "01",
        title: "Google",
        subtitle: "구글",
        description: "구글맵, 비즈니스 프로필 관리 및 세팅 등",
        image: "/services/google.jpeg"
    },
    {
        number: "02",
        title: "Naver",
        subtitle: "네이버",
        description: "플레이스, 블로그, 퍼포먼스 솔루션 등",
        image: "/services/naver.jpeg"
    },
    {
        number: "03",
        title: "Instagram",
        subtitle: "인스타그램",
        description: "콘텐츠 기획, CPC 등",
        image: "/services/instagram.jpg"
    },
    {
        number: "04",
        title: "Xiaohongshu",
        subtitle: "중국마케팅",
        description: "왕홍 체험단, 기업 인증, 계정 관리 대행 등",
        image: "/services/xiao.jpeg"
    },
    {
        number: "05",
        title: "따종디엔핑",
        subtitle: "따종디엔핑",
        description: "매장 등록, CPC 등",
        image: "/services/xiao.jpeg"
    },
    {
        number: "06",
        title: "Influencer",
        subtitle: "인플루언서",
        description: "인플루언서, 셀럽, 키워드 세팅, 채널 운영 등",
        image: "/services/tiktok.jpeg"
    }
];
function Services({ lang  } = {}) {
    const sectionRef = useScrollAnimation();
    const [emblaRef] = embla_carousel_react_umd_default()({
        loop: true,
        align: "center",
        skipSnaps: false
    }, [
        embla_carousel_autoplay_umd_default()({
            delay: 3000,
            stopOnInteraction: false
        })
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "services",
        ref: sectionRef,
        className: "jsx-6639e4eac6b78d61" + " " + "py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-white text-[#0a0a0a]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-6639e4eac6b78d61" + " " + "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-6639e4eac6b78d61",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                "data-animate": "fade-up",
                                style: {
                                    transitionDelay: "0s"
                                },
                                className: "jsx-6639e4eac6b78d61" + " " + "text-neutral-400 text-sm tracking-widest uppercase mb-4",
                                children: "company"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                "data-animate": "fade-up",
                                style: {
                                    transitionDelay: "0.1s"
                                },
                                className: "jsx-6639e4eac6b78d61" + " " + "text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0a0a0a]",
                                children: "SERVICE"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        "data-animate": "fade-up",
                        style: {
                            transitionDelay: "0.2s"
                        },
                        className: "jsx-6639e4eac6b78d61" + " " + "text-neutral-500 text-base md:text-lg leading-relaxed max-w-md",
                        children: "브랜드의 목표에 가장 정확히 맞는 방식으로, 결과 중심의 마케팅 성장 전략을 설계합니다."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-6639e4eac6b78d61" + " " + "md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6 hidden md:block",
                children: services.map((service, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "data-animate": "fade-up",
                        style: {
                            transitionDelay: `${0.1 + index * 0.1}s`
                        },
                        className: "jsx-6639e4eac6b78d61" + " " + "relative border border-neutral-200 border-t-0 group hover:border-neutral-400 hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[380px] md:min-h-[420px] rounded-lg",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-6639e4eac6b78d61" + " " + "absolute inset-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: service.image,
                                        alt: `${service.title} 서비스 이미지`,
                                        fill: true,
                                        className: "object-cover group-hover:scale-110 transition-transform duration-700"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "jsx-6639e4eac6b78d61" + " " + "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-6639e4eac6b78d61" + " " + "relative h-full flex flex-col justify-between p-6 md:p-8 z-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "jsx-6639e4eac6b78d61" + " " + "flex justify-end"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-6639e4eac6b78d61" + " " + "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6639e4eac6b78d61" + " " + "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "jsx-6639e4eac6b78d61" + " " + "text-[#E26263] text-xs font-mono tracking-wider font-medium",
                                                        children: service.number
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6639e4eac6b78d61" + " " + "h-px flex-1 bg-[#E26263]/30"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "jsx-6639e4eac6b78d61" + " " + "text-2xl md:text-3xl font-bold text-white tracking-tight",
                                                children: service.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "jsx-6639e4eac6b78d61" + " " + "text-[#E26263] text-sm font-medium tracking-wide",
                                                children: service.subtitle
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "jsx-6639e4eac6b78d61" + " " + "text-white/80 text-xs md:text-sm leading-relaxed",
                                                children: service.description
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, service.number))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: emblaRef,
                className: "jsx-6639e4eac6b78d61" + " " + "md:hidden overflow-hidden -mx-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "jsx-6639e4eac6b78d61" + " " + "flex",
                    children: services.map((service)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "jsx-6639e4eac6b78d61" + " " + "flex-[0_0_85%] min-w-0 pl-6 pr-2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-6639e4eac6b78d61" + " " + "relative border border-neutral-200 border-t-0 group hover:border-neutral-400 hover:shadow-xl transition-all duration-500 overflow-hidden h-[420px] rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-6639e4eac6b78d61" + " " + "absolute inset-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: service.image,
                                                alt: `${service.title} 서비스 이미지`,
                                                fill: true,
                                                className: "object-cover group-hover:scale-110 transition-transform duration-700"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "jsx-6639e4eac6b78d61" + " " + "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-6639e4eac6b78d61" + " " + "relative h-full flex flex-col justify-between p-6 z-10",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "jsx-6639e4eac6b78d61" + " " + "flex justify-end"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6639e4eac6b78d61" + " " + "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-6639e4eac6b78d61" + " " + "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "jsx-6639e4eac6b78d61" + " " + "text-[#E26263] text-xs font-mono tracking-wider font-medium",
                                                                children: service.number
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6639e4eac6b78d61" + " " + "h-px flex-1 bg-[#E26263]/30"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "jsx-6639e4eac6b78d61" + " " + "text-2xl font-bold text-white tracking-tight",
                                                        children: service.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "jsx-6639e4eac6b78d61" + " " + "text-[#E26263] text-sm font-medium tracking-wide",
                                                        children: service.subtitle
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "jsx-6639e4eac6b78d61" + " " + "text-white/80 text-sm leading-relaxed",
                                                        children: service.description
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, service.number))
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "6639e4eac6b78d61",
                children: ".scrollbar-hide.jsx-6639e4eac6b78d61::-webkit-scrollbar{display:none}.scrollbar-hide.jsx-6639e4eac6b78d61{-ms-overflow-style:none;scrollbar-width:none}"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/(service)/(default)/(_components)/LandingPage/index.tsx






// const FULLPAGE_LICENSE_KEY = '0L36I-3JVBI-OHZ87-IJR3H-QNIWN'
function LandingPage({ lang ="ko"  }) {
    const [activeSectionNo, setActiveSectionNo] = (0,react_.useState)(0);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero, {
                lang: lang
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Services, {
                lang: lang
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CEO, {
                lang: lang
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Contact, {
                lang: lang
            })
        ]
    });
}


/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;