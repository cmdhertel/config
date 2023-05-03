"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[8721],{88828:(e,t,i)=>{i.r(t),i.d(t,{AssistantLabelerBar:()=>_});var o=i(97464),n=i.n(o),r=i(77094),l=i.n(r),a=i(96486),s=i.n(a),d=i(67294),c=i(480),u=i(81954),p=i(24405),v=i(94568),m=i(42875),h=i(59054),y=i(21202),b=i(70203),g=i(82990),f=i(54642),k=i(73100),w=i(98104),C=i(80863),S=i(31622),Z=i(24666),x=i(52275),I=i(88359),X=i(1743),B=i(74194),F=i(84076),K=i(68785),V=i(63296),E=i(44532),T=i(14871);function _(){window.__c={n:"AssistantLabelerBar"};const e=(0,c.O7)(),t=(0,p.yK)((e=>({wrap:{padding:8,backgroundColor:e.contentBackground,width:400},samplingPicker:{display:"flex",alignItems:"center",marginBottom:8,gap:4},error:{fontSize:14,color:e.accentColors.red[600],maxHeight:150,overflow:"scroll"},observation:{fontSize:14,maxHeight:150,overflow:"scroll"},tooltip:{width:500,whiteSpace:"pre-wrap",fontFamily:g.Z.baseFontFamily.mono},input:{marginTop:5,marginBottom:5,fontFamily:g.Z.baseFontFamily.githubMono,fontSize:12},inputInner:{height:100}})),[]),i=(0,u.VK)((()=>C.Hl.state),[]),o=(0,u.VK)((()=>{const e=C.oX.state;return Boolean(e&&e.sampledSteps.length>0)}),[]),n=(0,u.VK)((()=>{const e=C.oX.state;return Boolean(e&&(e.sampling||e.evaluating))}),[]),r=(0,u.VK)((()=>{const e=C.oX.state;return null==e?void 0:e.previewingStepIndex}),[]),a=(0,u.VK)((()=>{const e=C.oX.state,t=null==e?void 0:e.previewingStepIndex;var i;if("number"==typeof t)return null==e||null===(i=e.sampledSteps)||void 0===i?void 0:i[t]}),[],{useDeepEqual:!0}),s=(0,u.VK)((()=>{const e=C.oX.state;return(null==e?void 0:e.previewingStepObservations)||[]}),[],{useDeepEqual:!0}),v=s.filter((e=>"error"===e.observationType)),m=s.filter((e=>"search"===e.observationType||"queryDatabase"===e.observationType)),h=(0,d.useCallback)((()=>{k.cz({store:C.oX})}),[]),y=(0,d.useCallback)((async t=>{const i=C.oX.state;if(!a||!i)return;const o={...a,value:t.target.value};(0,C.zZ)({store:C.oX,step:o}),await k.mA({environment:e,store:C.oX,step:o,commit:!1,isStreaming:!1,preventSelection:!0})}),[e,a]),b=(0,d.useCallback)((async t=>{const i=C.oX.state;i&&await k.mA({environment:e,store:C.oX,step:i.sampledSteps[t],commit:!1,isStreaming:!1})}),[e]),f=(0,d.useCallback)((async()=>{await k.vR({environment:e,store:C.oX}),k.qE({environment:e,store:C.oX})}),[e]),S=(0,d.useCallback)((async()=>{await k.f6({environment:e,store:C.oX})}),[e]),x=(0,u.VK)((()=>({top:20,left:0,right:0,bottom:0,width:e.WindowSizeStore.state.width,height:0})),[e],{useDeepEqual:!0}),[I,F]=(0,d.useState)(!1),T=(0,d.useCallback)((()=>{Z.default.hasSelection()&&w.ZH(e),F(!0)}),[e,F]),_=(0,d.useCallback)((()=>{F(!1)}),[F]);return l()(E.ZP,{popupType:E.kQ.Popup,open:!0,originRect:x,originGap:6,disableMouseCapture:!0,render:()=>l()(X.Z,{capture:I},void 0,l()("div",{style:t.wrap},void 0,l()(z,{}),o&&d.createElement(d.Fragment,null,l()("div",{style:t.samplingPicker},void 0,l()(V.Z,{hovered:void 0===r||void 0,onClick:h},void 0,"Original"),l()(V.Z,{hovered:0===r||void 0,onClick:()=>b(0)},void 0,"A"),l()(V.Z,{hovered:1===r||void 0,onClick:()=>b(1)},void 0,"B"),l()("div",{style:{flexGrow:1}}),n&&l()(K.Z,{style:{marginRight:4}}),l()(V.Z,{disabled:void 0===r||n||!i,disabledFeedback:!0,onClick:S},void 0,"Retry"),l()(V.Z,{disabled:void 0===r||n||!i,disabledFeedback:!0,onClick:f,isBlue:!0},void 0,"Accept")),a&&l()(B.Z,{style:t.input,inputStyle:t.inputInner,value:a.value,onChange:y,onFocus:T,onBlur:_,textarea:!0,spellCheck:!1}),v.length>0&&!n&&l()("div",{style:t.error},void 0,v.map((e=>e.value)).join("\n")),m.length>0&&!n&&l()("div",{style:t.observation},void 0,"Results: ",m.map((e=>e.value)).join("\n")))))})}function z(e){var t;window.__c={n:"TaskPicker"};const i=(0,c.O7)(),o=(0,u.VK)((()=>C.Hl.state),[]),[r]=(0,h.r5)((async()=>{const e="results",t={type:"reducer",filter:{operator:"and",filters:[{property:"ouFf",filter:{operator:"status_is",value:{type:"is_group",value:"In progress"}}}]},sort:[],userTimeZone:(0,m.r)(),searchQuery:void 0,reducers:{[e]:{type:"results",limit:100}}},o=await f.queryCollection(i,{source:{type:"collection",id:"f704a995-6417-457a-8038-ca9e1cb2c65f",spaceId:v.vj},collectionView:{id:"1dee420b-aa96-4e48-8eba-c2a0613e179e",spaceId:v.vj},loader:t},void 0,{src:"queryCollectionAction"});if("failed"===o.type)return;const n=o.data.result.reducerResults.results;if(!n||"results"!==n.type)return;const{blockIds:r}=n;let l=s().compact(r.map((e=>new S.G(i,{table:y.iU,id:e}).getValue()))).map((e=>{var t,i,o;return{id:e.id,name:(0,b.Q)(null==e||null===(t=e.properties)||void 0===t?void 0:t.title),url:(0,b.Q)(null==e||null===(i=e.properties)||void 0===i?void 0:i["}v_K"]),type:(0,b.Q)(null==e||null===(o=e.properties)||void 0===o?void 0:o.pdfW)}}));return l=s().sortBy(l,(e=>e.name.toLowerCase())),l}),[i]),a=(0,d.useCallback)((e=>{var t;const i=null===(t=r.value)||void 0===t?void 0:t.find((t=>t.id===e));i&&C.Hl.set(i)}),[r]),g={menuTitle:"",items:(null===(t=r.value)||void 0===t?void 0:t.map((e=>e.id)))??[],getKey:e=>e,selectedItem:null==o?void 0:o.id,onSelect:a,renderItem:e=>{var t;const i=null===(t=r.value)||void 0===t?void 0:t.find((t=>t.id===e.value));return d.createElement(x.Z,n()({},e,{title:null==i?void 0:i.name}))},renderOrigin:e=>d.createElement(I.Z,n()({focused:!1,title:"",right:(null==o?void 0:o.name)||l()("span",{style:{color:"red"}},void 0,"Please select a task")},e)),width:300},k=(0,p.yK)((e=>({wrap:{marginBottom:8},inner:{display:"flex",alignItems:"center",marginBottom:4,gap:4},label:{fontSize:14,flexShrink:0},link:{fontSize:14,textDecoration:"underline"}})),[]);return l()("div",{style:k.wrap},void 0,l()("div",{style:k.inner},void 0,l()("div",{style:k.label},void 0,"Current task:"),d.createElement(T.Z,g)),o&&l()(F.Z,{style:k.link,href:o.url,external:!0},void 0,"Instructions for task"))}},88359:(e,t,i)=>{i.d(t,{Z:()=>m});var o=i(97464),n=i.n(o),r=i(77094),l=i.n(r),a=i(67294),s=i(83355),d=i(3779),c=i(64921),u=i(28992),p=i(64369);class v extends s.Z{renderComponent(){const{device:e}=this.environment;return l()(c.Z,{mobileFeedback:e.isMobile,onClick:this.props.onClick,hovered:this.props.focused,disabled:this.props.disabled,style:{width:"100%",...!e.isMobile&&{width:"calc(100% - 8px)",marginLeft:4,marginRight:4,borderRadius:3},...this.props.buttonStyle}},void 0,a.createElement(u.Z,n()({},this.props,{dontShrinkTitle:!0,right:l()("div",{style:{display:"flex",whiteSpace:"nowrap"}},void 0,this.props.right&&l()(p.Z,{isSecondaryColor:!0,isMobile:e.isMobile},void 0,this.props.right),!e.isMobile&&l()("div",{style:{visibility:this.props.disabled?"hidden":void 0,flexShrink:0}},void 0,d.Z.chevronDown({width:10,marginLeft:4,fill:this.theme.lightIconColor})))})))}}v.displayName="DropdownMenuItem";const m=v}}]);