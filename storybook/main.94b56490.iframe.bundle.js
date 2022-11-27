(self.webpackChunkreact_star_wars=self.webpackChunkreact_star_wars||[]).push([[179],{"./src/components/UI/UiButton/UiButton.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:function(){return Dark},Disabled:function(){return Disabled},Light:function(){return Light},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return UiButton_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),classnames=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames_default=__webpack_require__.n(classnames),UiButton_module=(__webpack_require__("./src/components/UI/index.css"),{navi__button:"UiButton_navi__button__LSPwz",dark:"UiButton_dark__x9HMG",light:"UiButton_light__rjV-e"}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UiButton=function UiButton(_ref){var onClick=_ref.onClick,disabled=_ref.disabled,text=_ref.text,_ref$theme=_ref.theme,theme=void 0===_ref$theme?"dark":_ref$theme,classes=_ref.classes;return(0,jsx_runtime.jsx)("button",{onClick:onClick,className:classnames_default()(UiButton_module.navi__button,UiButton_module[theme],classes),disabled:disabled,children:text})};UiButton.__docgenInfo={description:"",methods:[],displayName:"UiButton",props:{theme:{defaultValue:{value:"'dark'",computed:!1},description:"",type:{name:"string"},required:!1},text:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},classes:{description:"",type:{name:"string"},required:!1}}};var UiButton_UiButton=UiButton;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\UI\\UiButton\\UiButton.jsx"]={name:"UiButton",docgenInfo:UiButton.__docgenInfo,path:"src\\components\\UI\\UiButton\\UiButton.jsx"});var UiButton_stories={title:"Ui-Kit/UiButton",component:UiButton_UiButton},Template=function Template(args){return(0,jsx_runtime.jsx)(UiButton_UiButton,(0,objectSpread2.Z)({},args))},props={onClick:function onClick(){return console.log()},disabled:!1,text:"Click me",theme:"dark",classes:""},Light=Template.bind({});Light.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{theme:"light"});var Dark=Template.bind({});Dark.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{theme:"dark"});var Disabled=Template.bind({});Disabled.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{disabled:!0}),Light.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <UiButton {...args} />"}},Light.parameters),Dark.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <UiButton {...args} />"}},Dark.parameters),Disabled.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <UiButton {...args} />"}},Disabled.parameters);var __namedExportsOrder=["Light","Dark","Disabled"]},"./src/components/UI/UiInput/UiInput.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return UiInput_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),UiInput_module_input__container="UiInput_input__container__Mb37S",UiInput_module_input="UiInput_input__+27V-",UiInput_module_clear__icon="UiInput_clear__icon__hURVh",UiInput_module_clear__icon__disabled="UiInput_clear__icon__disabled__HTdT8",classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);__webpack_require__("./src/components/UI/index.css");var cancel=__webpack_require__.p+"static/media/cancel.1d37b349388167de6bd090b5731bf27e.svg",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UiInput=function UiInput(_ref){var value=_ref.value,handleInputChange=_ref.handleInputChange,placeholder=_ref.placeholder,classes=_ref.classes;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(UiInput_module_input__container,classes),children:[(0,jsx_runtime.jsx)("input",{type:"text",placeholder:placeholder,value:value,onChange:function onChange(e){return handleInputChange(e.target.value)},className:UiInput_module_input}),(0,jsx_runtime.jsx)("img",{src:cancel,alt:"cancel",className:classnames_default()(UiInput_module_clear__icon,!value&&UiInput_module_clear__icon__disabled),onClick:function onClick(){return value&&handleInputChange("")}})]})};UiInput.__docgenInfo={description:"",methods:[],displayName:"UiInput",props:{value:{description:"",type:{name:"string"},required:!1},handlerInputChange:{description:"",type:{name:"func"},required:!1},placeholder:{description:"",type:{name:"string"},required:!1},classes:{description:"",type:{name:"string"},required:!1}}};var UiInput_UiInput=UiInput;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\UI\\UiInput\\UiInput.jsx"]={name:"UiInput",docgenInfo:UiInput.__docgenInfo,path:"src\\components\\UI\\UiInput\\UiInput.jsx"});var UiInput_stories={title:"Ui-Kit/UiInput",component:UiInput_UiInput},props={value:"",handlerInputChange:console.log("input changed"),placeholder:"Placeholder",classes:""},Default=function Template(arg){var _useState=(0,react.useState)(""),_useState2=(0,slicedToArray.Z)(_useState,2),value=_useState2[0],setValue=_useState2[1];return(0,jsx_runtime.jsx)(UiInput_UiInput,(0,objectSpread2.Z)((0,objectSpread2.Z)({},arg),{},{value:value,handleInputChange:function handleInputChange(val){setValue(val)}}))}.bind({});Default.args=(0,objectSpread2.Z)({},props),Default.parameters=(0,objectSpread2.Z)({storySource:{source:"arg => {\r\n    const [value, setValue] = useState('');\r\n\r\n    const handleInputChange  = val => {\r\n        setValue(val)\r\n    }\r\n    \r\n    return (\r\n        <UiInput \r\n            {...arg}\r\n            value={value}\r\n            handleInputChange={handleInputChange}\r\n        />\r\n    )\r\n}"}},Default.parameters);var __namedExportsOrder=["Default"]},"./src/components/UI/UiLoading/UiLoading.stories.js":function(){},"./src/components/UI/UiVideo/UiVideo.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return UiVideo_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),UiVideo_module={},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UiVideo=function UiVideo(_ref){var src=_ref.src,classes=_ref.classes,_ref$playbackRate=_ref.playbackRate,playbackRate=void 0===_ref$playbackRate?1:_ref$playbackRate,videoRef=(0,react.useRef)(null);return(0,react.useEffect)((function(){videoRef.current.playbackRate=playbackRate}),[]),(0,jsx_runtime.jsx)("video",{className:classnames_default()(UiVideo_module.video,classes),loop:!0,autoPlay:!0,muted:!0,ref:videoRef,children:(0,jsx_runtime.jsx)("source",{src:src})})};UiVideo.__docgenInfo={description:"",methods:[],displayName:"UiVideo",props:{playbackRate:{defaultValue:{value:"1.0",computed:!1},description:"",type:{name:"number"},required:!1},src:{description:"",type:{name:"string"},required:!1},classes:{description:"",type:{name:"string"},required:!1}}};var UiVideo_UiVideo=UiVideo;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\UI\\UiVideo\\UiVideo.jsx"]={name:"UiVideo",docgenInfo:UiVideo.__docgenInfo,path:"src\\components\\UI\\UiVideo\\UiVideo.jsx"});var video_namespaceObject=__webpack_require__.p+"db435084c403f6b37d4d.mp4",UiVideo_stories={title:"Ui-Kit/UiVideo",component:UiVideo_UiVideo},props={src:video_namespaceObject,classes:"",playbackRate:1},Default=function Template(args){return(0,jsx_runtime.jsx)(UiVideo_UiVideo,(0,objectSpread2.Z)({},args))}.bind({});Default.args=(0,objectSpread2.Z)({},props),Default.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <UiVideo {...args} />"}},Default.parameters);var __namedExportsOrder=["Default"]},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/components/UI/index.css":function(){},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./components/UI/UiButton/UiButton.stories.js":"./src/components/UI/UiButton/UiButton.stories.js","./components/UI/UiInput/UiInput.stories.jsx":"./src/components/UI/UiInput/UiInput.stories.jsx","./components/UI/UiLoading/UiLoading.stories.js":"./src/components/UI/UiLoading/UiLoading.stories.js","./components/UI/UiVideo/UiVideo.stories.js":"./src/components/UI/UiVideo/UiVideo.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[212],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);