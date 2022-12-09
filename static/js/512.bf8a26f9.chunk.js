"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[512],{2512:function(e,r,t){t.r(r);var n=t(885),o=t(2791),a=t(7689),i=t(3602),l=t(363),s=t(5048),c=t(3978),u=t(7205),d=t(3793),m=t(9516),f=t(5953),v=t(6015),h=t(403),p=t(4565),g=t(803),Z=t(4360),x=t(7012),b=t(3329),y=(0,Z.Z)();r.default=function(){var e=(0,i.F1)(),r=(0,n.Z)(e,2),t=r[0],Z=r[1].isError,S=(0,a.s0)(),j=(0,s.v9)((function(e){return e.user})).isLoggedIn;return(0,o.useEffect)((function(){j&&(l.A.success("Congratulations! You are successfully signed up!"),S("/contacts")),Z&&l.A.error("Something went wrong, please, try again")})),(0,b.jsx)(x.Z,{theme:y,children:(0,b.jsxs)(g.Z,{component:"main",maxWidth:"xs",children:[(0,b.jsx)(d.ZP,{}),(0,b.jsxs)(v.Z,{sx:{marginTop:3,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,b.jsx)(c.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,b.jsx)(h.Z,{})}),(0,b.jsx)(p.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,b.jsxs)(v.Z,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var r=new FormData(e.currentTarget),n={name:r.get("name"),email:r.get("email").trim(),password:r.get("password")};""!==n.name&&""!==n.email&&""!==n.password||l.A.error("Please, fill all the fields!"),t(n)},sx:{mt:3},children:[(0,b.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,b.jsx)(f.ZP,{item:!0,xs:12,children:(0,b.jsx)(m.Z,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"name",label:"Name",autoFocus:!0})}),(0,b.jsx)(f.ZP,{item:!0,xs:12,children:(0,b.jsx)(m.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,b.jsx)(f.ZP,{item:!0,xs:12,children:(0,b.jsx)(m.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),(0,b.jsx)(u.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"})]})]})]})})}},403:function(e,r,t){var n=t(4836);r.Z=void 0;var o=n(t(5649)),a=t(3329),i=(0,o.default)((0,a.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");r.Z=i},3978:function(e,r,t){t.d(r,{Z:function(){return y}});var n=t(885),o=t(3366),a=t(7462),i=t(2791),l=t(8182),s=t(4419),c=t(277),u=t(5513),d=t(1245),m=t(3329),f=(0,d.Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),v=t(5878),h=t(1217);function p(e){return(0,h.Z)("MuiAvatar",e)}(0,v.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],Z=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,t=e.ownerState;return(0,a.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(r.vars||r).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,a.Z)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),x=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,c.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var y=i.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiAvatar"}),c=t.alt,d=t.children,f=t.className,v=t.component,h=void 0===v?"div":v,y=t.imgProps,S=t.sizes,j=t.src,w=t.srcSet,k=t.variant,P=void 0===k?"circular":k,C=(0,o.Z)(t,g),z=null,M=function(e){var r=e.crossOrigin,t=e.referrerPolicy,o=e.src,a=e.srcSet,l=i.useState(!1),s=(0,n.Z)(l,2),c=s[0],u=s[1];return i.useEffect((function(){if(o||a){u(!1);var e=!0,n=new Image;return n.onload=function(){e&&u("loaded")},n.onerror=function(){e&&u("error")},n.crossOrigin=r,n.referrerPolicy=t,n.src=o,a&&(n.srcset=a),function(){e=!1}}}),[r,t,o,a]),c}((0,a.Z)({},y,{src:j,srcSet:w})),A=j||w,D=A&&"error"!==M,F=(0,a.Z)({},t,{colorDefault:!D,component:h,variant:P}),R=function(e){var r=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(t,p,r)}(F);return z=D?(0,m.jsx)(x,(0,a.Z)({alt:c,src:j,srcSet:w,sizes:S,ownerState:F,className:R.img},y)):null!=d?d:A&&c?c[0]:(0,m.jsx)(b,{className:R.fallback}),(0,m.jsx)(Z,(0,a.Z)({as:h,ownerState:F,className:(0,l.Z)(R.root,f),ref:r},C,{children:z}))}))},3793:function(e,r,t){var n=t(885),o=t(7462),a=t(2791),i=t(5513),l=t(3928),s=t(3329),c=function(e,r){return(0,o.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},r&&!e.vars&&{colorScheme:e.palette.mode})},u=function(e){return(0,o.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}})};r.ZP=function(e){var r=(0,i.Z)({props:e,name:"MuiCssBaseline"}),t=r.children,d=r.enableColorScheme,m=void 0!==d&&d;return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(l.Z,{styles:function(e){return function(e){var r,t,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i={};a&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach((function(r){var t,o=(0,n.Z)(r,2),a=o[0],l=o[1];i[e.getColorSchemeSelector(a).replace(/\s*&/,"")]={colorScheme:null==(t=l.palette)?void 0:t.mode}}));var l=(0,o.Z)({html:c(e,a),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,o.Z)({margin:0},u(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},i),s=null==(r=e.components)||null==(t=r.MuiCssBaseline)?void 0:t.styleOverrides;return s&&(l=[l,s]),l}(e,m)}}),t]})}},7012:function(e,r,t){t.d(r,{Z:function(){return v}});var n=t(2791),o=t(7462),a=t(8023),i=t(9598),l="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",s=t(3329);var c=function(e){var r=e.children,t=e.theme,c=(0,i.Z)(),u=n.useMemo((function(){var e=null===c?t:function(e,r){return"function"===typeof r?r(e):(0,o.Z)({},e,r)}(c,t);return null!=e&&(e[l]=null!==c),e}),[t,c]);return(0,s.jsx)(a.Z.Provider,{value:u,children:r})},u=t(9886),d=t(3459),m={};function f(e){var r=(0,d.Z)();return(0,s.jsx)(u.T.Provider,{value:"object"===typeof r?r:m,children:e.children})}var v=function(e){var r=e.children,t=e.theme;return(0,s.jsx)(c,{theme:t,children:(0,s.jsx)(f,{children:r})})}}}]);
//# sourceMappingURL=512.bf8a26f9.chunk.js.map