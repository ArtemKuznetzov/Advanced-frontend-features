"use strict";(self.webpackChunkUlbiCourse=self.webpackChunkUlbiCourse||[]).push([[207],{"./src/widgets/Navbar/ui/Navbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Dark:()=>Dark,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Navbar_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),classNames=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/shared/lib/classNames/classNames.ts")),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),AppLink_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AppLink_module.A,options);const AppLink_AppLink_module=AppLink_module.A&&AppLink_module.A.locals?AppLink_module.A.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var AppLinkTheme;!function(AppLinkTheme){AppLinkTheme.PRIMARY="primary",AppLinkTheme.SECONDARY="secondary"}(AppLinkTheme||(AppLinkTheme={}));var AppLink=function(props){var to=props.to,className=props.className,_props_theme=props.theme,theme=void 0===_props_theme?"primary":_props_theme,children=props.children,otherProps=_object_without_properties(props,["to","className","theme","children"]);return(0,jsx_runtime.jsx)(dist.N_,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({to,className:(0,classNames.x)(AppLink_AppLink_module.AppLink,{},[className,AppLink_AppLink_module[theme]])},otherProps),{children}))};const AppLink_AppLink=AppLink;AppLink.__docgenInfo={description:"",methods:[],displayName:"AppLink",props:{className:{required:!1,tsType:{name:"string"},description:""},theme:{required:!1,tsType:{name:"AppLinkTheme"},description:""}},composes:["LinkProps"]};var useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),Navbar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Navbar/ui/Navbar.module.scss"),Navbar_module_options={};Navbar_module_options.styleTagTransform=styleTagTransform_default(),Navbar_module_options.setAttributes=setAttributesWithoutAttributes_default(),Navbar_module_options.insert=insertBySelector_default().bind(null,"head"),Navbar_module_options.domAPI=styleDomAPI_default(),Navbar_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Navbar_module.A,Navbar_module_options);const ui_Navbar_module=Navbar_module.A&&Navbar_module.A.locals?Navbar_module.A.locals:void 0;var Navbar=function(param){var className=param.className,t=(0,useTranslation.B)(["main","about"]).t;return(0,jsx_runtime.jsx)("div",{className:(0,classNames.x)(ui_Navbar_module.Navbar,{},[className]),children:(0,jsx_runtime.jsxs)("div",{className:ui_Navbar_module.links,children:[(0,jsx_runtime.jsx)(AppLink_AppLink,{theme:AppLinkTheme.SECONDARY,to:"/",className:ui_Navbar_module.mainLink,children:t("Главная страница")}),(0,jsx_runtime.jsx)(AppLink_AppLink,{theme:AppLinkTheme.SECONDARY,to:"/about",children:t("О сайте")})]})})};const ui_Navbar=Navbar;Navbar.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{className:{required:!1,tsType:{name:"string"},description:""}}},ui_Navbar.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{className:{required:!1,tsType:{name:"string"},description:""}}};var ThemeDecorator=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),ThemeProvider=__webpack_require__("./src/app/providers/ThemeProvider/index.ts");const Navbar_stories={component:ui_Navbar,title:"widgets/Navbar"};var Basic={args:{},decorators:[(0,ThemeDecorator.n)(ThemeProvider.Sx.LIGHT)]},Dark={args:{},decorators:[(0,ThemeDecorator.n)(ThemeProvider.Sx.DARK)]};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {},\n  decorators: [ThemeDecorator(Theme.LIGHT)]\n}",...Basic.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  args: {},\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",...Dark.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Dark"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-AppLink-AppLink-module__AppLink{color:var(--primary-color)}.src-shared-ui-AppLink-AppLink-module__primary{color:var(--primary-color)}.src-shared-ui-AppLink-AppLink-module__secondary{color:var(--inverted-primary-color)}","",{version:3,sources:["webpack://./src/shared/ui/AppLink/AppLink.module.scss"],names:[],mappings:"AAAA,+CACI,0BAAA,CAGJ,+CACI,0BAAA,CAGJ,iDACI,mCAAA",sourcesContent:[".AppLink {\r\n    color: var(--primary-color);\r\n}\r\n\r\n.primary {\r\n    color: var(--primary-color);\r\n}\r\n\r\n.secondary {\r\n    color: var(--inverted-primary-color);\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={AppLink:"src-shared-ui-AppLink-AppLink-module__AppLink",primary:"src-shared-ui-AppLink-AppLink-module__primary",secondary:"src-shared-ui-AppLink-AppLink-module__secondary"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Navbar/ui/Navbar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-widgets-Navbar-ui-Navbar-module__Navbar{width:100%;height:var(--navbar-height);background-color:var(--inverted-bg-color);display:flex;align-items:center;padding:20px}.src-widgets-Navbar-ui-Navbar-module__links{margin-left:auto}.src-widgets-Navbar-ui-Navbar-module__mainLink{margin-right:15px}","",{version:3,sources:["webpack://./src/widgets/Navbar/ui/Navbar.module.scss"],names:[],mappings:"AAAA,6CACI,UAAA,CACA,2BAAA,CACA,yCAAA,CACA,YAAA,CACA,kBAAA,CACA,YAAA,CAGJ,4CACI,gBAAA,CAGJ,+CACI,iBAAA",sourcesContent:[".Navbar {\r\n    width: 100%;\r\n    height: var(--navbar-height);\r\n    background-color: var(--inverted-bg-color);\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 20px;\r\n}\r\n\r\n.links {\r\n    margin-left: auto;\r\n}\r\n\r\n.mainLink {\r\n    margin-right: 15px;\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Navbar:"src-widgets-Navbar-ui-Navbar-module__Navbar",links:"src-widgets-Navbar-ui-Navbar-module__links",mainLink:"src-widgets-Navbar-ui-Navbar-module__mainLink"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>ThemeDecorator});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=function(theme){return function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"app ".concat(theme),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}}}}]);