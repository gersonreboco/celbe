"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14754],{95549:function(e,n,t){t.d(n,{z:function(){return f},D:function(){return i}});var r=t(18993),o=t(41645),a=t(67294),i=function(e){var n=e.cookieName,t=void 0===n?"zendesk-gate-open":n,i=e.isGated,s=(0,a.useState)(!(void 0===i||i)),c=s[0],d=s[1],l=function(){d(!0),(0,r.d7)(t,!0)};return(0,a.useEffect)(function(){if(window){var e=(0,o._K)("ungated");((0,r.Do)(t)||e&&"true"===e)&&d(!0)}},[]),{isOpen:function(){return c},open:l}},s=t(26042),c=t(69396),d=t(99534),l=t(85893),u=t(46714),h=t(45697),m=t.n(h),g=function(e){var n=e.children,t=e.gate,r=e.modalChildren,o=e.modalProps,i=e.theme,h=void 0===i?u.greenhouse:i,m=(0,d.Z)(e,["children","gate","modalChildren","modalProps","theme"]),g=(0,a.useState)(!1),f=g[0],p=g[1],x=function(e){t.isOpen()||(e.preventDefault(),p(!0))},b=(0,s.Z)({onClick:x},m),j=(0,s.Z)({onClose:function(){return p(!1)}},o);return(0,l.jsxs)("div",{"data-nmw-id":"components.global.GatedContent.GatedLink",children:[1===h.version?(0,l.jsx)(u.Link,(0,c.Z)((0,s.Z)({},b),{children:n})):(0,l.jsx)(u.Button2,(0,c.Z)((0,s.Z)({},b),{children:n})),f&&(0,l.jsx)(u.Modal,(0,c.Z)((0,s.Z)({},j),{children:r}))]})};g.propTypes={children:m().oneOfType([m().string,m().node]),gate:m().object.isRequired,modalChildren:m().node.isRequired,modalProps:m().object,theme:m().any};var f=g},14314:function(e,n,t){t.d(n,{Jf:function(){return a},Oj:function(){return s},bF:function(){return c},bQ:function(){return i}});var r=t(65067),o=t(65119),a=function(e){var n=e.attributes;return r.C.instance.isLocale("jp")?{body:(0,o.QA)(n["zen-cxt24-report"]),cta:n["zen-cxt24-report-cta"],cookieName:"zendesk-cxt24-report",url:"https://cxtrends.zendesk.com/jp?utm_source=homepage&utm_medium=webpromo&utm_campaign=2024_q1_cx_trends_eyebrowpromo"}:null},i=function(){return{heading:"CXトレンド 2024 ウェビナー",body:"最新調査から紐解く、生成AIをはじめとした2024年のCX10大トレンドとは？",cta:"今すぐ登録",cookieName:"zendesk-cxt24-report",url:"https://virtualevents.zendesk.com/series/cx-trends-japan-2024/landing_page?utm_source=webeyebrow"}},s=function(e){var n=e.attributes;return r.C.instance.isLocale("us")?{body:(0,o.QA)(n["zen-relate24-apr1-promo-body"]),cta:n["zen-relate24-apr1-promo-cta"],cookieName:"zendesk-relate24-apr1-promo",url:"https://virtualevents.zendesk.com/series/relate-24/landing_page?utm_source=eyebrowpromoamer"}:null},c=function(e){var n=e.attributes;if(!r.C.instance.isLocaleIn(["gb","de","es","fr","it","nl","mx","br","au","in","sg","se","dk","tw","hk","th",]))return null;var t="https://virtualevents.zendesk.com/series/relate-24/landing_page",a="".concat(t,"?utm_source=eyebrowpromoamer"),i="".concat(t,"?utm_source=eyebrowpromoapac"),s="".concat(t,"?utm_source=eyebrowpromoemea"),c="".concat(t,"?utm_source=eyebrowpromolatam");return{body:(0,o.QA)(n["zen-relate24-event-eyebrow-body"]),cta:n["zen-relate24-event-eyebrow-cta"],cookieName:"zendesk-relate-event",url:r.C.instance.getL10nVariant({default:i,us:a,gb:s,de:s,fr:s,nl:s,es:s,it:s,dk:s,se:s,mx:c,br:c})}}},36738:function(e,n,t){t.d(n,{F:function(){return f}});var r=t(26042),o=t(69396),a=t(99534),i=t(85893),s=t(67294),c=t(45697),d=t.n(c),l=t(46714),u=t(18993),h=t(67351),m=t(19521),g=function(e){var n,t,c=e.variant,d=e.heading,g=e.body,f=e.data,p=void 0===f?{location:"body"}:f,x=e.linkData,b=e.otherTrackingData,j=(0,a.Z)(e,["variant","heading","body","data","linkData","otherTrackingData"]),v=p.location,k=p.cookieName,y=(0,m.useTheme)(),w=2===y.version?l.Link2:l.Link,C=2===y.version?l.Button2:l.Button,Z=(0,r.Z)({variant:c,heading:d,body:g},j),P=(0,s.useState)("eyebrow"===c&&(0,u.Do)(k)),_=P[0],S=P[1],A="body"===c?d:"".concat(d," ").concat(g),F="".concat(v,"-promo-").concat(k),T=function(){(0,u.d7)(k,!0),S(!0)},z=function(e){(0,h.createAndSendData)((0,r.Z)({event:"click",location:v,title:A,destination:e},b))};return(0,s.useEffect)(function(){if("eyebrow"!==c||!(0,u.Do)(k)){var e=x?x[0].href:"";(0,h.createAndSendData)((0,r.Z)({event:"impression",location:v,title:A,destination:e},b))}}),("eyebrow"!==c||!(0,u.Do)(k)||!_)&&(0,i.jsx)(l.Promo,(0,r.Z)({role:"complementary","aria-label":F,"data-cookie-name":"eyebrow"===c&&k,"data-location":v,promoEyebrowCloseHandler:function(){T()},links:x&&(t=[],"eyebrow"===c?(0,i.jsx)(w,(0,o.Z)((0,r.Z)({},x[0]),{onClick:function(){return z(x[0].href)},children:x[0].children})):(x.forEach(function(e){var n=e.component||C;t.push((0,i.jsx)(n,(0,o.Z)((0,r.Z)({onClick:function(){return z(e.href)}},e),{children:e.children}),e.href))}),(0,i.jsx)(l.LinkGroup,{children:t})))},Z))};g.propTypes={heading:d().string,body:d().node,variant:d().oneOf(["eyebrow","body"]),data:d().shape({location:d().string,cookieName:d().string}),linkData:d().array};var f=g},88843:function(e,n,t){t.d(n,{Jv:function(){return b},Q_:function(){return C},SR:function(){return w},_P:function(){return y},_d:function(){return j},hs:function(){return k},q8:function(){return Z},w:function(){return v}});var r=t(7297),o=t(19521),a=t(46714),i=t(44915),s=t(8164),c=t(27771);function d(){var e=(0,r.Z)(["\n      h2 {\n        font-size: 1.75rem;\n      }\n\n      p,\n      ul,\n      ol,\n      dl {\n        line-height: 1.8em;\n      }\n    "]);return d=function(){return e},e}function l(){var e=(0,r.Z)(["\n  justify-content: center;\n\n  ul.bordered {\n    border-left: 4px solid ",";\n  }\n\n  aside {\n    float: left;\n    margin: 1rem 1rem 1rem -2rem;\n    width: 52%;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  li,\n  div {\n    clear: left;\n  }\n\n  blockquote {\n    border-left: 4px solid ",";\n    color: ",";\n    margin: 0 0 1rem;\n    padding: 0 0 0 2rem;\n\n    p,\n    h3 {\n      color: ",";\n      font-weight: ",";\n      font-size: ",";\n      font-family: ",";\n      line-height: 1.5em;\n\n      "," {\n        font-size: ",";\n      }\n\n      cite {\n        display: block;\n        font-size: ",";\n      }\n    }\n  }\n\n  section.accent-tofu {\n    background-color: ",";\n    margin-bottom: 2rem;\n    padding: 2rem 4rem;\n\n    "," {\n      margin-left: -4rem;\n      margin-right: -4rem;\n      padding: 4rem;\n    }\n  }\n\n  .accent-box {\n    padding: 2rem;\n    margin: 2rem 0;\n    max-width: 100%;\n\n    &.accent-tofu {\n      background-color: ",";\n    }\n\n    &.accent-oat {\n      background-color: ",";\n    }\n\n    "," {\n      padding: 4rem;\n    }\n  }\n\n  ",",\n  "," {\n    margin: auto;\n  }\n\n  p img {\n    display: block;\n    margin: auto;\n  }\n\n  [data-garden-id='accordions.accordion'] {\n    margin-bottom: 2rem;\n  }\n\n  ","\n"]);return l=function(){return e},e}function u(){var e=(0,r.Z)(["\n  box-shadow: ",";\n"]);return u=function(){return e},e}function h(){var e=(0,r.Z)(["\n  overflow: unset;\n\n  "," {\n    margin-left: 16px;\n    margin-right: 16px;\n  }\n"]);return h=function(){return e},e}function m(){var e=(0,r.Z)(["\n  "," {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n  }\n"]);return m=function(){return e},e}function g(){var e=(0,r.Z)(["\n  cursor: zoom-in;\n  box-shadow: ",";\n  height: 100%;\n\n  > img {\n    height: 100%;\n  }\n"]);return g=function(){return e},e}function f(){var e=(0,r.Z)(["\n  "," {\n    display: none;\n  }\n"]);return f=function(){return e},e}function p(){var e=(0,r.Z)(["\n  background-color: ",";\n"]);return p=function(){return e},e}function x(){var e=(0,r.Z)(["\n  display: block;\n  height: 56px;\n  width: 56px;\n  position: absolute;\n  top: calc(50% - 28px);\n  left: calc(50% - 28px);\n  z-index: 20;\n  color: ",";\n"]);return x=function(){return e},e}var b=(0,o.default)(a.Row).withConfig({componentId:"sc-da9dfd51-0"})(l(),function(e){return e.theme.palette.popeye},function(e){return e.theme.palette.popeye},function(e){return e.theme.palette.popeye},function(e){return e.theme.palette.popeye},function(e){return e.theme.fontWeights.semibold},function(e){return e.theme.fontSizes.xl},function(e){return e.theme.fonts.heading},(0,i.cy)("down","sm",a.greenhouse),function(e){return e.theme.fontSizes.lg},function(e){return e.theme.fontSizes.md},function(e){return e.theme.palette.tofu},(0,i.cy)("up","md",a.greenhouse),function(e){return e.theme.palette.tofu},function(e){return e.theme.palette.oat_milk},(0,i.cy)("up","md",a.greenhouse),a.Col,a.Row,function(e){return"jp"===e.locale&&(0,o.css)(d())});b.defaultProps={theme:a.greenhouse};var j=(0,o.default)(a.Row).withConfig({componentId:"sc-da9dfd51-1"})(u(),function(e){return e.theme.shadows.ss2});j.defaultProps={theme:a.greenhouse};var v=(0,o.default)(a.Base).withConfig({componentId:"sc-da9dfd51-2"})(h(),c.InlinePromo);v.defaultProps={theme:a.greenhouse};var k=(0,o.default)(a.SocialBlock).withConfig({componentId:"sc-da9dfd51-3"})(m(),(0,i.cy)("down","sm",a.greenhouse)),y=o.default.div.withConfig({componentId:"sc-da9dfd51-4"})(g(),function(e){return e.theme.shadows.ss2});y.defaultProps={theme:a.greenhouse};var w=(0,o.default)(a.Row).withConfig({componentId:"sc-da9dfd51-5"})(f(),function(e){var n=e.theme;return(0,i.cy)("down","sm",n)});w.defaultProps={theme:a.greenhouse};var C=(0,o.default)(a.Relationframe).withConfig({componentId:"sc-da9dfd51-6"})(p(),function(e){return e.theme.palette.kale});C.defaultProps={theme:a.greenhouse};var Z=(0,o.default)(s.ZendeskSoloZ).withConfig({componentId:"sc-da9dfd51-7"})(x(),function(e){return e.theme.palette.white});Z.defaultProps={theme:a.greenhouse}},14754:function(e,n,t){t.r(n),t.d(n,{__N_SSG:function(){return V},default:function(){return J}});var r=t(26042),o=t(69396),a=t(85893),i=t(67294),s=t(82621),c=t(46714),d=t(10945),l=t(65119),u=t(24185),h=t(41414),m=t(88843),g=t(30322),f=t(78992),p=t(51421),x=t(51759),b=t(41645),j=t(65067),v=t(95549),k=t(99534),y=t(82539),w=t(26350),C=t(45697),Z=t.n(C),P=function(e){var n=e.gatedPDFLink,t=e.trackingParams,i=e.gatedHeading,s=e.gatedSuccessHeading,d=e.gatedSuccessMessage,u=e.appendSuccessHtml,h=(0,k.Z)(e,["gatedPDFLink","trackingParams","gatedHeading","gatedSuccessHeading","gatedSuccessMessage","appendSuccessHtml"]),m=(0,x.Z)().t;return(0,a.jsxs)(y.l,(0,o.Z)((0,r.Z)({"data-nmw-id":"global.Forms.FormPresets.BlogGatedContentForm",trackingParams:(0,r.Z)({trackingFunnelStage:"content"},t),before:(0,a.jsx)("div",{style:{textAlign:"center"},children:(0,a.jsx)(c.Heading,{variant:"h3",children:i})}),success:(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,a.jsx)(c.Heading,{variant:"h4",children:s}),u?(0,l.QA)(u):(0,a.jsx)(c.Text,{children:d}),(0,a.jsx)(c.LinkGroup,{isCenter:!0,children:n&&(0,a.jsx)(c.Link,{href:n,rel:"nofollow",children:m("blog:gated_btn_default")})})]})}),submitText:m("formGlobal:submit_btn"),onSubmit:function(){n&&window.open(n,"_blank")}},h),{children:[(0,a.jsx)(w.k.FullName,{isTwoCol:!0}),(0,a.jsx)(w.k.Email,{}),(0,a.jsx)(w.k.PhoneNumber,{}),(0,a.jsx)(w.k.JobTitle,{}),(0,a.jsx)(w.k.CompanyName,{}),(0,a.jsx)(w.k.NumEmployees,{variant:"select"}),(0,a.jsx)(w.k.Country,{name:"selectedCountry"}),(0,a.jsx)(w.k.DynamicCompliance,{})]}))};P.propTypes={gatedPDFLink:Z().string};var _=t(67351),S=t(11163),A=t(7297),F=t(19521),T=t(44915),z=t(8164);function L(){var e=(0,A.Z)(["\n      "," {\n        transform: rotate(180deg);\n      }\n    "]);return L=function(){return e},e}function R(){var e=(0,A.Z)(["\n  vertical-align: middle;\n  padding: 12px 16px;\n  ","\n"]);return R=function(){return e},e}function D(){var e=(0,A.Z)(["\n  color: ",";\n  transition: transform ",";\n  cursor: pointer;\n  width: 12px;\n"]);return D=function(){return e},e}function B(){var e=(0,A.Z)(["\n      span {\n        border: 0 !important;\n      }\n    "]);return B=function(){return e},e}function I(){var e=(0,A.Z)(["\n  line-height: 1.5;\n\n  ","\n"]);return I=function(){return e},e}function N(){var e=(0,A.Z)(["\n      li {\n        line-height: 1.5;\n      }\n    "]);return N=function(){return e},e}function E(){var e=(0,A.Z)(["\n  position: sticky;\n  overflow-y: auto;\n  top: 90px;\n  max-height: calc(100vh - 90px);\n  padding-top: 64px;\n  padding-right: 12px;\n\n  ","\n\n  "," {\n    overflow-y: hidden;\n    background-color: ",";\n    padding: 18px;\n    box-shadow: ",";\n    width: 100vw;\n    margin-left: -16px;\n    margin-top: -64px;\n    ul {\n      transition-duration: 0.2s;\n    }\n  }\n"]);return E=function(){return e},e}var H=F.default.span.withConfig({componentId:"sc-51890a11-0"})(R(),function(e){return e.isExpanded&&(0,F.css)(L(),Q)}),Q=(0,F.default)(z.ChevronDown).withConfig({componentId:"sc-51890a11-1"})(D(),function(e){return e.theme.colors.foreground},function(e){return e.theme.animations.animationDuration}),q=(0,F.default)(c.Link).withConfig({componentId:"sc-51890a11-2"})(I(),function(e){return e.isActive&&(0,F.css)(B())}),O=F.default.nav.withConfig({componentId:"sc-51890a11-3"})(E(),function(e){return"primary"===e.linkVariant&&(0,F.css)(N())},function(e){var n=e.theme;return(0,T.cy)("down","sm",n)},function(e){return e.theme.palette.tofu},function(e){return e.theme.shadows.ss2});O.defaultProps={theme:c.greenhouse};var M=function(e){var n=e.hub,t=e.spokes,s=(0,k.Z)(e,["hub","spokes"]),d=(0,i.useState)(!1),l=d[0],u=d[1],h=(0,F.useTheme)(),m=(0,c.useMediaQuery)("(max-width: ".concat(h.breakpoints.md,")")),g=function(){return u(!l)},f=(0,S.useRouter)().asPath,p=function(e){return{isActive:e.href===f,forwardedAs:e.href===f?"span":null}},x=j.C.instance.getL10nVariant({default:{variant:"primary",sizes:{mobile:"small",desktop:"xsmall"}},jp:{variant:"secondary",sizes:{mobile:"medium",desktop:"small"}}});return(0,a.jsx)(O,(0,o.Z)((0,r.Z)({"data-nmw-id":"pages.Blog.BlogStickySidenav",linkVariant:x.variant},s),{children:m?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(q,(0,o.Z)((0,r.Z)({},n,p(n)),{size:x.sizes.mobile,variant:x.variant})),(0,a.jsx)(H,{onClick:g,isExpanded:l,children:(0,a.jsx)(Q,{})}),l&&(0,a.jsx)(c.UnorderedList,{bullet:"none",items:t.map(function(e){return{body:(0,a.jsx)(q,(0,o.Z)((0,r.Z)({},p(e),e),{size:x.sizes.mobile,variant:x.variant}),e.key)}})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(q,(0,o.Z)((0,r.Z)({},n,p(n)),{size:x.sizes.desktop,variant:x.variant})),(0,a.jsx)(c.UnorderedList,{bullet:"none",items:t.map(function(e){return{body:(0,a.jsx)(q,(0,o.Z)((0,r.Z)({},p(e),e),{size:x.sizes.desktop,variant:x.variant}),e.key)}})})]})}))};M.propTypes={hub:Z().shape({href:Z().string,children:Z().string}).isRequired,spokes:Z().array};var G=t(36738),W=t(14314),U=function(e){var n,t,u,k=e.meta,y=e.attributes,w=(0,x.Z)("blog").t,C=(0,W.bQ)(),Z=(y["blog-post-gated"]&&"0"!==y["blog-post-gated"]||y["blog-post-has-form"])&&y["sfdc-campaign-id"],S=(0,v.D)({cookieName:"completed-gated-content-form"}),A=(0,i.useState)(!1),F=A[0],z=A[1],L=function(){return z(!1)},R=function(e){e.preventDefault(),z(!0)};Z&&(u={trackingSiteCategory:"RegisterLead",trackingEventName:"ContentDownload",trackingFunnelStage:"content",dataLayerEventName:"resources_form_submit",elqFormName:"WebsiteResourceLead",hiddenCampaignId:y["sfdc-campaign-id"],SFDCCampaigncode:y["sfdc-campaign-id"],lead_source_detail:y["lead-source-detail"]||"Website-Content Download",lead_source:y["lead-source"]||"Website-Content Download",productInterest:"Select One"!==y["product-interest"]&&y["product-interest"],marketingQualifiedLead:y["blog-post-mql"],ownerId:y["sfdc-lead-owner"],event_key:y["event-key"],event_id:y["event-id"]});var D={lg:3,md:4,sm:6,style:{marginBottom:"16px"}},B=function(){return(0,a.jsx)(v.z,{style:{marginTop:"32px",marginBottom:"16px"},href:y["blog-post-gated-url"],isButton:!0,gate:S,modalChildren:(0,a.jsx)(P,{gatedHeading:w("form_heading"),gatedSuccessHeading:w("form_success_heading"),gatedSuccessMessage:w("form_success_para"),appendSuccessHtml:y["blog-post-gated-success-message"],gatedPDFLink:y["blog-post-gated-url"],trackingParams:u,onFormSuccess:S.open}),children:y["blog-post-gated-button-text"]?y["blog-post-gated-button-text"]:w("gated_btn_default")})},I=[{name:"Twitter",url:(0,b.fZ)("twitter",y.shareLinks.twitter,y.title),icon:"twitter"},{name:"Facebook",url:(0,b.fZ)("facebook",y.shareLinks.facebook),icon:"facebook"},{name:"LinkedIn",url:(0,b.fZ)("linkedin",y.shareLinks.linkedin),icon:"linkedin"},{name:"RSS",url:j.C.instance.getLocalRSSFeed(),icon:"rss"},],N=function(){var e=y["author-override-title"],n=j.C.instance.isLocaleIn(["tw","hk"]),t=j.C.instance.isLocaleIn(["jp","tw","hk"])?": ":" ",r=n?y["author-override-title"]:", ".concat(y["author-override-title"]);return n?"".concat(w("byline_author")).concat(t).concat(e&&r," ").concat(y["author-override"]):"".concat(w("byline_author")).concat(t).concat(y["author-override"]).concat(e&&r)},E="".concat(w("byline_date_updated")).concat(j.C.instance.isLocaleIn(["jp","kr","tw","hk"])?": ":" ").concat(y.updatedAtFormatted),H={bgColor:function(e){switch(e){case"2":return"oat_milk";case"3":return"ditto";case"4":return"dorothy";case"5":return"bert";case"6":return"ernie";default:return"tofu"}}(y["blog-post-gated-theme"]),columnWeight:"text",heading:(0,a.jsxs)(a.Fragment,{children:[y.supertitle&&(0,a.jsx)(g.N,{supertitle:y.supertitle}),(0,a.jsx)(c.Heading,{variant:"h2",override:"h1",children:(0,l.QA)(y.title)})]}),text:y.intro&&(0,a.jsx)(c.Text,{variant:"large",children:y.intro}),contentUnderText:Z?B():(0,a.jsx)(c.Link,{href:y["blog-post-gated-url"],isButton:!0,children:y["blog-post-gated-button-text"]?y["blog-post-gated-button-text"]:w("gated_btn_default")}),contentSide:y["featured-image"]&&(0,a.jsx)(c.Relationframe,{shape:"Select One"!==y["featured-image-shape"]?y["featured-image-shape"]:"square",children:(0,a.jsx)(d.E,{src:y["featured-image"],layout:"fill",hasRetina:!1})})},Q={isReverse:!0,bgColor:"oat_milk",columnWeight:"text",heading:y["blog-post-gated-headline"]?y["blog-post-gated-headline"]:y.title,text:y["blog-post-gated-subheadline"]&&(0,a.jsx)(c.Text,{variant:"large",children:y["blog-post-gated-subheadline"]}),contentUnderText:Z?B():(0,a.jsx)(c.Link,{href:y["blog-post-gated-url"],isButton:!0,children:y["blog-post-gated-button-text"]?y["blog-post-gated-button-text"]:w("gated_btn_default")}),contentSide:(0,a.jsxs)(a.Fragment,{children:[y["featured-image"]&&(0,a.jsx)(c.Relationframe,{shape:"Select One"!==y["featured-image-shape"]?y["featured-image-shape"]:"square",children:(0,a.jsx)(d.E,{src:y["featured-image"],layout:"fill",hasRetina:!1,alt:y["featured-image-alt"]})}),y["featured-caption"]&&(0,a.jsx)(c.Text,{variant:"caption",children:y["featured-caption"]})]})},q={columnWeight:"text",heading:(0,a.jsxs)(a.Fragment,{children:[y.supertitle&&(0,a.jsx)(g.N,{supertitle:y.supertitle}),(0,a.jsx)(c.Heading,{variant:"h2",override:"h1",children:(0,l.QA)(y.title)})]}),text:y.intro&&(0,a.jsx)(c.Text,{variant:"large",children:y.intro}),contentUnderText:(0,a.jsxs)(a.Fragment,{children:[y["author-override"]&&(0,a.jsxs)(c.Text,{children:[N(),y["author-override-twitter"]&&(0,a.jsxs)(a.Fragment,{children:[","," ",(0,a.jsxs)(c.Link,{href:"https://twitter.com/".concat(y["author-override-twitter"]),isInline:!0,children:["@","".concat(y["author-override-twitter"])]})]})]}),(0,a.jsx)(c.Text,{children:E}),k.tags&&(0,a.jsx)(c.TagContainer,{children:k.tags.map(function(e){return(0,a.jsx)(c.Tag,(0,r.Z)({},e),e.key)})}),Z&&B(),(0,a.jsx)(m.hs,{socialObjects:I})]}),contentSide:y["featured-image"]&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Relationframe,{shape:"square",children:(0,a.jsx)(d.E,{src:y["featured-image"],layout:"fill",priority:!0,hasRetina:!1})}),y["featured-caption"]&&(0,a.jsx)(c.Text,{variant:"caption",children:y["featured-caption"]})]})};(0,_.useSiteSection)("blog");var O=function(){return(0,a.jsxs)("article",{"data-nmw-id":"pages.Blog.BlogMainContent",children:[(0,a.jsx)(c.Hero,(0,r.Z)({hasReverseMobileColumns:!0},"gated"===y.layout?H:"hub"===y.layout&&y.hasStickySidebar?q:{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c.Row,{children:[(0,a.jsxs)(c.Col,{md:y["blog-post-two-column-header"]?6:12,sm:12,children:[y.supertitle&&(0,a.jsx)(g.N,{supertitle:y.supertitle}),(0,a.jsx)(c.Heading,{variant:"h2",override:"h1",children:(0,l.QA)(y.title)}),(0,a.jsx)(c.Text,{variant:"large",children:(0,l.QA)(y.intro)}),y["author-override"]&&(0,a.jsxs)(c.Text,{children:[N(),y["author-override-twitter"]&&(0,a.jsxs)(a.Fragment,{children:[","," ",(0,a.jsxs)(c.Link,{href:"https://twitter.com/".concat(y["author-override-twitter"]),isInline:!0,children:["@","".concat(y["author-override-twitter"])]})]})]}),(0,a.jsx)(c.Text,{children:E}),k.tags&&(0,a.jsx)(c.TagContainer,{children:k.tags.map(function(e){return(0,a.jsx)(c.Tag,(0,r.Z)({},e),e.key)})}),Z&&B(),(0,a.jsx)(c.SocialBlock,{socialObjects:I})]}),y["featured-image"]&&y["blog-post-two-column-header"]&&(0,a.jsxs)(c.Col,{md:5,offsetMd:1,sm:12,children:[(0,a.jsx)(c.Relationframe,{shape:"square",children:(0,a.jsx)(d.E,{src:y["featured-image"],layout:"fill",priority:!0,hasRetina:!1})}),y["featured-caption"]&&(0,a.jsx)(c.Text,{variant:"caption",children:y["featured-caption"]})]})]}),y["featured-image"]&&!y["blog-post-two-column-header"]&&(0,a.jsx)(c.Row,{children:(0,a.jsxs)(c.Col,{children:[(0,a.jsx)(d.E,{src:y["featured-image"],height:"552",width:"1104",hasRetina:!1}),y["featured-caption"]&&(0,a.jsx)(c.Text,{variant:"caption",children:y["featured-caption"]})]})}),y["featured-video"]&&(0,a.jsx)(c.Row,{children:(0,a.jsxs)(c.Col,{size:12,children:[(0,a.jsx)(c.VideoEmbed,{url:y["featured-video"]}),y["featured-media-caption"]&&(0,a.jsx)(c.Text,{variant:"caption",children:y["featured-media-caption"]})]})})]})})),(0,a.jsx)(c.Base,{bgColor:"white",hasPadding:"gated"===y.layout,children:(0,a.jsx)(c.Row,{children:(0,a.jsxs)(c.Col,{children:[S.isOpen()&&y["blog-post-gated-content"]&&(0,a.jsx)(m._d,{children:(0,a.jsx)(c.Col,{size:9,children:(0,a.jsx)(c.Text,{isCenter:!0,children:(0,l.QA)(y["blog-post-gated-content"])})})}),(0,a.jsx)(m.Jv,{locale:j.C.instance.locale,children:(0,a.jsx)(c.Col,{md:y.hasStickySidebar?12:9,sm:12,children:(0,l.QA)(y.content,{gatedCta:Z?B():null})})})]})})})]})};return(0,a.jsxs)(s.Z,{meta:k,attributes:y,eyebrowPromo:C&&j.C.instance.isLocale("jp")&&(0,a.jsx)(T.f6,{theme:c.greenhouseDark,children:(0,a.jsx)(G.F,{heading:C.heading,body:C.body,linkData:[{children:C.cta,href:C.url,size:"xsmall"},],data:{cookieName:C.cookieName,location:"top"},variant:"eyebrow"})}),children:[y.breadcrumbs&&"gated"!==y.layout&&(0,a.jsx)(c.Base,{hasPadding:!1,children:(0,a.jsx)(m.SR,{children:(0,a.jsx)(c.Col,{children:(0,a.jsx)(c.Breadcrumbs,{trail:y.breadcrumbs})})})}),y.hasStickySidebar?(0,a.jsx)(m.w,{"data-nmw-id":"pages.blogPost.hubBase",hasPadding:!1,children:(0,a.jsxs)(c.Row,{children:[(0,a.jsx)(c.Col,{md:2,sm:12,style:{paddingRight:0},children:(0,a.jsx)(M,{"aria-label":"Sticky side navigation",hub:y.hub,spokes:y.spokes})}),(0,a.jsx)(c.Col,{md:9,sm:12,offsetMd:1,children:(0,a.jsx)(O,{})})]})}):(0,a.jsx)(O,{}),y["blog-post-infographic-url"]&&(0,a.jsx)(c.Base,{bgColor:"white",children:(0,a.jsx)(c.Row,{children:(0,a.jsx)(c.Col,{textAlign:"center",size:12,children:(0,a.jsx)(m._P,{children:(0,a.jsx)("img",{onClick:R,src:y["blog-post-infographic-url"],alt:""})})})})}),y.promo?(0,a.jsx)(c.Base,{bgColor:"white",children:(0,a.jsx)(c.Col,{children:(0,a.jsx)(G.F,(0,o.Z)((0,r.Z)({},y.promo),{otherTrackingData:{siteCategory:"Blog",placement:"body",position:"bottom",type:"gated-cta",title:y.promo.heading},linkData:!Z&&[(0,r.Z)({},y.promo.link)],media:(0,a.jsx)(c.Relationframe,{children:(0,a.jsx)(d.E,(0,o.Z)((0,r.Z)({},y.promo.image),{layout:"fill"}))}),children:Z&&B()}))})}):j.C.instance.isAPAC()&&y.APACFooterPromo?(0,a.jsx)(c.Base,{bgColor:"white",children:(0,a.jsx)(c.Col,{children:(0,a.jsx)(G.F,{heading:y.APACFooterPromo.title,body:y.APACFooterPromo.text,otherTrackingData:{siteCategory:"Blog",placement:"footer-ads-cta",position:"bottom",type:"footer-post-cta",title:y.APACFooterPromo.title},linkData:[{href:y.APACFooterPromo.link,children:y.APACFooterPromo.linkText},],media:(0,a.jsx)(c.Relationframe,{children:(0,a.jsx)(d.E,(0,o.Z)((0,r.Z)({},y.APACFooterPromo.image),{layout:"fill"}))})})})}):null,"gated"===y.layout&&(0,a.jsx)(c.ActionFooter,(0,r.Z)({},Q)),"gated"!==y.layout&&(null===(n=k.relatedPosts)||void 0===n?void 0:n.length)>0&&(0,a.jsx)(c.Base,{bgColor:"white",heading:(0,a.jsx)(c.Heading,{variant:"h2",children:w("related_blog")}),children:(0,a.jsx)(c.Row,{children:null===(t=k.relatedPosts)||void 0===t?void 0:t.map(function(e){return(0,i.createElement)(c.Col,(0,o.Z)((0,r.Z)({},D),{key:e.key}),(0,a.jsx)(h.TileCard,(0,r.Z)({},e)))})})}),(0,a.jsx)(f.s,{}),y.promo?(0,a.jsx)(p.C,(0,o.Z)((0,r.Z)({},y.promo),{isBlogAd:!0,gatedLink:Z&&B()})):j.C.instance.isAPAC()&&y.APACFloatingPromo?(0,a.jsx)(p.C,{heading:y.APACFloatingPromo.title,body:y.APACFloatingPromo.text,link:{href:y.APACFloatingPromo.link,children:y.APACFloatingPromo.linkText},image:{src:y.APACFloatingPromo.image.src},isBlogAd:!0}):null,y["blog-post-infographic-url"]&&F&&(0,a.jsx)(c.Modal,{isCenter:!0,onClose:L,width:"1088px",children:(0,a.jsx)("img",{src:y["blog-post-infographic-url"],alt:""})})]})};U.propTypes=(0,r.Z)({},u.Z);var V=!0,J=U}}]);