(this["webpackJsonpfor-game"]=this["webpackJsonpfor-game"]||[]).push([[0],{72:function(e,n,t){"use strict";t.r(n);var a,c,r,s,i,o,d,l=t(0),m=t.n(l),u=t(23),g=t.n(u),b=t(10),p=t(14),j=t(15),h=t.n(j),f=t(21),O=t(17),x=t.n(O),v="https://api.rawg.io/api/",y=(new Date).getFullYear(),w=function(){var e=(new Date).getMonth()+1;return e<10?"0".concat(e):e}(),C=function(){var e=(new Date).getDate();return e<10?"0".concat(e):e}(),k="".concat(y,"-").concat(w,"-").concat(C),_="".concat(y-1,"-").concat(w,"-").concat(C),E="".concat(y+1,"-").concat(w,"-").concat(C),D="games?key=".concat("eda59755cd584070a853aa6426d51024","&dates=").concat(_,",").concat(k,"&ordering=-rating&page_size=9"),N="games?key=".concat("eda59755cd584070a853aa6426d51024","&dates=").concat(k,",").concat(E,"&ordering=-added&page_size=9"),S="games?key=".concat("eda59755cd584070a853aa6426d51024","&dates=").concat(_,",").concat(k,"&ordering=-released&page_size=9"),T=function(e){return"".concat(v,"games/").concat(e,"/screenshots?key=").concat("eda59755cd584070a853aa6426d51024")},L=t(11),I=t(73),A=function(e,n){return e.match(/media\/screenshots/)?e.replace("media/screenshots","media/resize/".concat(n,"/-/screenshots")):e.replace("media/games/","media/resize/".concat(n,"/-/games/"))},G=function(e){return function(){var n=Object(f.a)(h.a.mark((function n(t){var a,c;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"LOADING_DETAIL"}),n.next=3,x.a.get((r=e,"".concat(v,"games/").concat(r,"?key=").concat("eda59755cd584070a853aa6426d51024")));case 3:return a=n.sent,n.next=6,x.a.get(T(e));case 6:c=n.sent,console.log("detailAction recived id: ".concat(e)),t({type:"GET_DETAIL",payload:{details:a.data,screenshots:c.data}});case 9:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()},z=t(18),F=t(1),H=Object(L.b)(I.a.div)(a||(a=Object(b.a)(["\n    overflow: hidden;\n    margin: 1rem;\n    padding-bottom: 1rem;\n    text-align: center;\n    border-radius: 1rem;\n    border-top: none;\n    box-shadow:grey 2px 2px 10px;\n    img{\n        width: 100%;\n    }\n    .link{\n        color: #1a1a1a;\n        text-decoration: none;\n    }\n    h3{\n        margin: 1rem;\n        font-weight: 800;\n    }\n    p{\n        margin:0.5rem;\n        font-weight: 400;\n    }\n"]))),M=function(e){var n=e.name,t=e.released,a=e.id,c=e.image,r=a.toString(),s=Object(p.b)();return Object(F.jsx)(H,{layoutId:r,onClick:function(){console.log(typeof r),document.body.style.overflow="hidden",console.log(a),s(G(a))},children:Object(F.jsxs)(z.b,{className:"link",to:"/game/".concat(a),children:[Object(F.jsx)("img",{src:A(c,640),alt:n}),Object(F.jsx)("h3",{children:n}),Object(F.jsx)("p",{children:t})]})},a)},R=t(3),B=t.p+"static/media/Full_Star.bc04972e.png",P=t.p+"static/media/Empty_Stars.fd2b9eaa.png",J=Object(L.b)(I.a.div)(c||(c=Object(b.a)(["\n    width: 100%;\n    min-height: 100vh;\n    overflow-y:scroll ;\n    background-color: rgba(0,0,0,0.5);\n    position: fixed;\n    top:0;\n    left:0;\n    .gameDetailsContainer{\n        margin:1rem;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n    h2{\n        padding: 0px;\n        color:grey;\n    }\n    h3{\n        margin:0rem 1rem;\n        color:darkgrey;\n    }\n    .ratingContainer, .platformContainer{\n        margin: 1rem;\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n        padding: 0;\n    }\n    .ratingStar{\n        width: 1.5rem;\n    }\n    .backGroundImage{\n        width: 100%;\n        height: 400px;\n        object-fit: cover;\n    }\n    .screenshot{\n        width: 90%;\n        margin: 0.5rem;\n    }\n    .screenshotContainer{\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n    }\n"]))),U=Object(L.b)(I.a.div)(r||(r=Object(b.a)(["\n    width: 80%;\n    border-radius: 25px;\n    margin:2rem;\n    padding: 2rem;\n    background:white;\n    position: absolute;\n    left:10%;\n\n"]))),X=function(e){var n=e.pathID;console.log(n);var t=Object(R.e)(),a=Object(p.c)((function(e){return e.game_details})),c=a.gameDetails,r=a.gameScreenshots,s=a.isLoading;return Object(F.jsx)("section",{children:!s&&Object(F.jsx)(J,{className:"45DF23!",onClick:function(e){var n=e.target;console.log(n),n.classList.contains("45DF23!")&&(document.body.style.overflow="auto",t.push("/"))},children:Object(F.jsxs)(U,{layoutId:n,children:[Object(F.jsxs)("article",{children:[Object(F.jsx)("h1",{className:"gameTitle",children:c.name}),Object(F.jsxs)("section",{className:"gameDetailsContainer",children:[Object(F.jsxs)("div",{className:"ratingContainer",children:[Object(F.jsxs)("h3",{children:["Rating: ",c.rating," / ",c.rating_top]}),function(){for(var e=[],n=Math.floor(c.rating),t=1;t<=5;t++)t<=n?(console.log("full"),e.push(Object(F.jsx)("img",{className:"ratingStar",alt:"full",src:B},t))):(console.log("empty"),e.push(Object(F.jsx)("img",{className:"ratingStar",alt:"empty",src:P},t)));return e}()]}),Object(F.jsx)("div",{className:"platformContainer",children:c.platforms.map((function(e){return Object(F.jsx)("h3",{className:"platform",children:e.platform.name})}))})]})]}),Object(F.jsx)("img",{className:"backGroundImage",src:A(c.background_image,1280)}),Object(F.jsx)("section",{children:Object(F.jsx)("p",{children:c.description_raw})}),Object(F.jsxs)("section",{children:[Object(F.jsx)("h2",{children:"Screenshots"}),Object(F.jsx)("div",{className:"screenshotContainer",children:r.results.map((function(e){return Object(F.jsx)("img",{className:"screenshot",src:A(e.image,1280)},e.id)}))})]})]})})})},V=Object(L.b)(I.a.div)(s||(s=Object(b.a)(["\n    padding: 0 5rem;\n    .Title{\n    }\n    .closeBtn{\n        background-color: white;\n        color:#1a1a1a;\n        font-size: 1.5rem;\n        padding:0.5rem 1rem;\n        border:#bfbfbf 1px solid;\n        border-radius:25px;\n        transition: 0.5s;\n    }\n    .closeBtn:hover{\n        cursor: pointer;\n        color:white;\n        background: #333333;\n    }\n    h2{\n        color: #1a1a1a;\n        font-size: 2.5rem;\n        margin:5rem 0;\n    }\n    .inputform{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n"]))),Y=Object(L.b)(I.a.div)(i||(i=Object(b.a)(["\n    margin: 0;\n    padding: 0;\n    min-height:80vh;\n    display:grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    align-items: center;\n"]))),q=function(){var e=Object(R.f)().pathname.split("/")[2];console.log(e);var n=Object(p.b)();Object(l.useEffect)((function(){n(function(){var e=Object(f.a)(h.a.mark((function e(n){var t,a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(v).concat(D));case 2:return t=e.sent,e.next=5,x.a.get("".concat(v).concat(N));case 5:return a=e.sent,e.next=8,x.a.get("".concat(v).concat(S));case 8:c=e.sent,n({type:"FETCH_GAMES",payload:{popular:t.data.results,newgames:c.data.results,upcoming:a.data.results}});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[n]);var t=Object(p.c)((function(e){return e.games})),a=t.popular,c=t.newGames,r=t.upComing,s=t.searched;return Object(F.jsxs)(V,{children:[e&&Object(F.jsx)(X,{pathID:e}),s.length?Object(F.jsxs)("div",{className:"searchedGamesContainer",children:[Object(F.jsxs)("div",{className:"inputform",children:[Object(F.jsx)("h2",{className:"Title",children:"Searched"}),Object(F.jsx)("button",{className:"closeBtn",onClick:function(){n(function(){var e=Object(f.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"CLOSE_SEARCHED"});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())},children:"Close Results"})]}),Object(F.jsx)(Y,{children:s.map((function(e){var n=e.name,t=e.released,a=e.id,c=e.background_image;return Object(F.jsx)(M,{name:n,released:t,id:a,image:c},a)}))})]}):"",Object(F.jsx)("h2",{className:"Title",children:"Up Coming"}),Object(F.jsx)(Y,{children:r.map((function(e){var n=e.name,t=e.released,a=e.id,c=e.background_image;return Object(F.jsx)(M,{name:n,released:t,id:a,image:c},a)}))}),Object(F.jsx)("h2",{className:"Title",children:"Popular"}),Object(F.jsx)(Y,{children:a.map((function(e){var n=e.name,t=e.released,a=e.id,c=e.background_image;return Object(F.jsx)(M,{name:n,released:t,id:a,image:c},a)}))}),Object(F.jsx)("h2",{className:"Title",children:"New Games"}),Object(F.jsx)(Y,{children:c.map((function(e){var n=e.name,t=e.released,a=e.id,c=e.background_image;return Object(F.jsx)(M,{name:n,released:t,id:a,image:c},a)}))})]})},K=Object(L.a)(o||(o=Object(b.a)(["\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n    body{\n        font-family: 'Montserrat', sans-serif;\n        width: 100%;\n    }\n    .gameTitle{\n        font-size: 2rem;\n        text-align: center;\n    }\n    p{\n        font-size: 1.2rem;\n        margin: 2rem;\n    }\n"]))),Q=t(43),W=function(){var e=Object(l.useState)(""),n=Object(Q.a)(e,2),t=n[0],a=n[1],c=Object(p.b)();return Object(F.jsx)(Z,{children:Object(F.jsxs)("form",{className:"inputContainer",children:[Object(F.jsx)("input",{value:t,onChange:function(e){a(e.target.value)},type:"text"}),Object(F.jsx)("button",{onClick:function(e){var n;e.preventDefault(),c((n=t,function(){var e=Object(f.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get((c=n,"".concat(v,"games?key=").concat("eda59755cd584070a853aa6426d51024","&search=").concat(c,"&page_size=6")));case 2:a=e.sent,t({type:"FETCH_SEARCHED",payload:{searched:a.data.results}});case 4:case"end":return e.stop()}var c}),e)})));return function(n){return e.apply(this,arguments)}}()))},type:"submit",children:"Search"})]})})},Z=Object(L.b)(I.a.div)(d||(d=Object(b.a)(["\n    margin: 2rem;\n    display: flex;\n    justify-content:center;\n    input, button{\n        color:#1a1a1a;\n        font-size: 1.5rem;\n        padding:0.5rem 1rem;\n        border:#bfbfbf 1px solid;\n    }\n    input{\n        border-top-left-radius: 25px;\n        border-bottom-left-radius: 25px;\n    }\n    button{\n        border-top-right-radius: 25px;\n        border-bottom-right-radius: 25px;\n        transition: 0.5s;\n        border-left: none;\n        background-color: white;\n    }\n    button:hover{\n        cursor: pointer;\n        color:white;\n        background: #333333;\n    }\n"])));var $=function(){return Object(F.jsxs)("div",{className:"App",children:[Object(F.jsx)(K,{}),Object(F.jsxs)(R.a,{path:["/game/:id","/"],children:[Object(F.jsx)(W,{}),Object(F.jsx)(q,{})]})]})},ee=t(6),ne={popular:[],newGames:[],upComing:[],searched:[]},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_GAMES":return Object(ee.a)(Object(ee.a)({},e),{},{popular:n.payload.popular,newGames:n.payload.newgames,upComing:n.payload.upcoming});case"FETCH_SEARCHED":return Object(ee.a)(Object(ee.a)({},e),{},{searched:n.payload.searched});case"CLOSE_SEARCHED":return Object(ee.a)(Object(ee.a)({},e),{},{searched:[]});default:return Object(ee.a)({},e)}},ae={gameDetails:{name:[]},gameScreenshots:{results:[]},isLoading:!0},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,n=arguments.length>1?arguments[1]:void 0;switch(console.log("gameDetails reducer accepted action ".concat(n.type," and deployed corresponding changes of the 'details' state")),n.type){case"GET_DETAIL":return Object(ee.a)(Object(ee.a)({},e),{},{gameDetails:n.payload.details,gameScreenshots:n.payload.screenshots,isLoading:!1});case"LOADING_DETAIL":return Object(ee.a)(Object(ee.a)({},e),{},{isLoading:!0});default:return Object(ee.a)({},e)}},re=t(22),se=Object(re.b)({games:te,game_details:ce}),ie=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,74)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),a(e),c(e),r(e),s(e)}))},oe=t(42),de=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.c,le=Object(re.d)(se,de(Object(re.a)(oe.a)));g.a.render(Object(F.jsx)(m.a.StrictMode,{children:Object(F.jsx)(p.a,{store:le,children:Object(F.jsx)(z.a,{children:Object(F.jsx)($,{})})})}),document.getElementById("root")),ie()}},[[72,1,2]]]);
//# sourceMappingURL=main.22257cd9.chunk.js.map