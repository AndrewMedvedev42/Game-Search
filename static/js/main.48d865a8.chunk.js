(this["webpackJsonpfor-game"]=this["webpackJsonpfor-game"]||[]).push([[0],{72:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(23),o=t.n(r),A=t(10),i=t(14),s=t(15),l=t.n(s),d=t(21),b=t(17),g=t.n(b),m="https://api.rawg.io/api/",u=(new Date).getFullYear(),p=function(){var e=(new Date).getMonth()+1;return e<10?"0".concat(e):e}(),j=function(){var e=(new Date).getDate();return e<10?"0".concat(e):e}(),h="".concat(u,"-").concat(p,"-").concat(j),f="".concat(u-1,"-").concat(p,"-").concat(j),O="".concat(u+1,"-").concat(p,"-").concat(j),x="games?key=".concat("867e1e3142b94a69bcbd615a727b92da","&dates=").concat(f,",").concat(h,"&ordering=-rating&page_size=9"),C="games?key=".concat("867e1e3142b94a69bcbd615a727b92da","&dates=").concat(h,",").concat(O,"&ordering=-added&page_size=9"),v="games?key=".concat("867e1e3142b94a69bcbd615a727b92da","&dates=").concat(f,",").concat(h,"&ordering=-released&page_size=9");console.log("867e1e3142b94a69bcbd615a727b92da");var E,w,y,B,D,Q,I,G=function(e){return"".concat(m,"games/").concat(e,"/screenshots?key=").concat("867e1e3142b94a69bcbd615a727b92da")},T=t(11),k=t(73),L=function(e,n){return e?e.match(/media\/screenshots/)?e.replace("media/screenshots","media/resize/".concat(n,"/-/screenshots")):e.replace("media/games/","media/resize/".concat(n,"/-/games/")):"data:image/jpeg;base64,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"},M=function(e){return function(){var n=Object(d.a)(l.a.mark((function n(t){var a,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"LOADING_DETAIL"}),n.next=3,g.a.get((r=e,"".concat(m,"games/").concat(r,"?key=").concat("867e1e3142b94a69bcbd615a727b92da")));case 3:return a=n.sent,n.next=6,g.a.get(G(e));case 6:c=n.sent,console.log("detailAction recived id: ".concat(e)),t({type:"GET_DETAIL",payload:{details:a.data,screenshots:c.data}});case 9:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()},S=t(18),U=t(1),N=Object(T.b)(k.a.div)(E||(E=Object(A.a)(["\n    overflow: hidden;\n    margin: 1rem;\n    padding-bottom: 1rem;\n    text-align: center;\n    border-radius: 1rem;\n    border-top: none;\n    box-shadow:grey 2px 2px 10px;\n    img{\n        width: 100%;\n    }\n    .link{\n        color: #1a1a1a;\n        text-decoration: none;\n    }\n    h3{\n        margin: 1rem;\n        font-weight: 800;\n    }\n    p{\n        margin:0.5rem;\n        font-weight: 400;\n    }\n"]))),z=function(e){var n=e.name,t=e.released,a=e.id,c=e.image,r=a.toString(),o=Object(i.b)();return Object(U.jsx)(N,{layoutId:r,onClick:function(){console.log(typeof r),document.body.style.overflow="hidden",console.log(a),o(M(a))},children:Object(U.jsxs)(S.b,{className:"link",to:"/game/".concat(a),children:[Object(U.jsx)("img",{src:L(c,640),alt:n}),Object(U.jsx)("h3",{children:n}),Object(U.jsx)("p",{children:t})]})},a)},R=t(3),Y=t.p+"static/media/Full_Star.bc04972e.png",H=t.p+"static/media/Empty_Stars.fd2b9eaa.png",P=Object(T.b)(k.a.div)(w||(w=Object(A.a)(["\n    width: 100%;\n    min-height: 100vh;\n    overflow-y:scroll ;\n    background-color: rgba(0,0,0,0.5);\n    position: fixed;\n    top:0;\n    left:0;\n    .gameDetailsContainer{\n        margin:1rem;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n    h2{\n        padding: 0px;\n        color:grey;\n    }\n    h3{\n        margin:0rem 1rem;\n        color:darkgrey;\n    }\n    .ratingContainer, .platformContainer{\n        margin: 1rem;\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n        padding: 0;\n    }\n    .ratingStar{\n        width: 1.5rem;\n    }\n    .backGroundImage{\n        width: 100%;\n        height: 400px;\n        object-fit: cover;\n    }\n    .screenshot{\n        width: 90%;\n        margin: 0.5rem;\n    }\n    .screenshotContainer{\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n    }\n"]))),J=Object(T.b)(k.a.div)(y||(y=Object(A.a)(["\n    width: 80%;\n    border-radius: 25px;\n    margin:2rem;\n    padding: 2rem;\n    background:white;\n    position: absolute;\n    left:10%;\n\n"]))),K=function(e){var n=e.pathID;console.log(n);var t=Object(R.e)(),a=Object(i.c)((function(e){return e.game_details})),c=a.gameDetails,r=a.gameScreenshots,o=a.isLoading;return Object(U.jsx)("section",{children:!o&&Object(U.jsx)(P,{className:"45DF23!",onClick:function(e){var n=e.target;console.log(n),n.classList.contains("45DF23!")&&(document.body.style.overflow="auto",t.push("/"))},children:Object(U.jsxs)(J,{layoutId:n,children:[Object(U.jsxs)("article",{children:[Object(U.jsx)("h1",{className:"gameTitle",children:c.name}),Object(U.jsxs)("section",{className:"gameDetailsContainer",children:[Object(U.jsxs)("div",{className:"ratingContainer",children:[Object(U.jsxs)("h3",{children:["Rating: ",c.rating," / ",c.rating_top]}),function(){for(var e=[],n=Math.floor(c.rating),t=1;t<=5;t++)t<=n?(console.log("full"),e.push(Object(U.jsx)("img",{className:"ratingStar",alt:"full",src:Y},t))):(console.log("empty"),e.push(Object(U.jsx)("img",{className:"ratingStar",alt:"empty",src:H},t)));return e}()]}),Object(U.jsx)("div",{className:"platformContainer",children:c.platforms.map((function(e){return Object(U.jsx)("h3",{className:"platform",children:e.platform.name})}))})]})]}),Object(U.jsx)("img",{className:"backGroundImage",src:L(c.background_image,1280)}),Object(U.jsx)("section",{children:Object(U.jsx)("p",{children:c.description_raw})}),Object(U.jsxs)("section",{children:[Object(U.jsx)("h2",{children:"Screenshots"}),Object(U.jsx)("div",{className:"screenshotContainer",children:r.results.map((function(e){return Object(U.jsx)("img",{className:"screenshot",src:L(e.image,1280)},e.id)}))})]})]})})})},F=Object(T.b)(k.a.div)(B||(B=Object(A.a)(["\n    padding: 0 5rem;\n    .Title{\n    }\n    .closeBtn{\n        background-color: white;\n        color:#1a1a1a;\n        font-size: 1.5rem;\n        padding:0.5rem 1rem;\n        border:#bfbfbf 1px solid;\n        border-radius:25px;\n        transition: 0.5s;\n    }\n    .closeBtn:hover{\n        cursor: pointer;\n        color:white;\n        background: #333333;\n    }\n    h2{\n        color: #1a1a1a;\n        font-size: 2.5rem;\n        margin:5rem 0;\n    }\n    .inputform{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n"]))),Z=Object(T.b)(k.a.div)(D||(D=Object(A.a)(["\n    margin: 0;\n    padding: 0;\n    min-height:80vh;\n    display:grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    align-items: center;\n"]))),V=function(){var e=Object(R.f)().pathname.split("/")[2];console.log(e);var n=Object(i.b)();Object(a.useEffect)((function(){n(function(){var e=Object(d.a)(l.a.mark((function e(n){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat(m).concat(x));case 2:return t=e.sent,e.next=5,g.a.get("".concat(m).concat(C));case 5:return a=e.sent,e.next=8,g.a.get("".concat(m).concat(v));case 8:c=e.sent,n({type:"FETCH_GAMES",payload:{popular:t.data.results,newgames:c.data.results,upcoming:a.data.results}});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[n]);var t=Object(i.c)((function(e){return e.games})),c=t.popular,r=t.newGames,o=t.upComing,A=t.searched;return Object(U.jsxs)(F,{children:[e&&Object(U.jsx)(K,{pathID:e}),A.length?Object(U.jsxs)("div",{className:"searchedGamesContainer",children:[Object(U.jsxs)("div",{className:"inputform",children:[Object(U.jsx)("h2",{className:"Title",children:"Searched"}),Object(U.jsx)("button",{className:"closeBtn",onClick:function(){n(function(){var e=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"CLOSE_SEARCHED"});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())},children:"Close Results"})]}),Object(U.jsx)(Z,{children:A.map((function(e){var n=e.name,t=e.released,a=e.id,c=e.background_image;return Object(U.jsx)(z,{name:n,released:t,id:a,image:c},a)}))})]}):"",Object(U.jsx)("h2",{className:"Title",children:"Up Coming"}),Object(U.jsx)(Z,{children:o.map((function(e){var n=e.name,t=e.released,a=e.id,c=e.background_image;return Object(U.jsx)(z,{name:n,released:t,id:a,image:c},a)}))}),Object(U.jsx)("h2",{className:"Title",children:"Popular"}),Object(U.jsx)(Z,{children:c.map((function(e){var n=e.name,t=e.released,a=e.id,c=e.background_image;return Object(U.jsx)(z,{name:n,released:t,id:a,image:c},a)}))}),Object(U.jsx)("h2",{className:"Title",children:"New Games"}),Object(U.jsx)(Z,{children:r.map((function(e){var n=e.name,t=e.released,a=e.id,c=e.background_image;return Object(U.jsx)(z,{name:n,released:t,id:a,image:c},a)}))})]})},W=Object(T.a)(Q||(Q=Object(A.a)(["\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n    body{\n        font-family: 'Montserrat', sans-serif;\n        width: 100%;\n    }\n    .gameTitle{\n        font-size: 2rem;\n        text-align: center;\n    }\n    p{\n        font-size: 1.2rem;\n        margin: 2rem;\n    }\n"]))),q=t(43),X=function(){var e=Object(a.useState)(""),n=Object(q.a)(e,2),t=n[0],c=n[1],r=Object(i.b)();return Object(U.jsx)(_,{children:Object(U.jsxs)("form",{className:"inputContainer",children:[Object(U.jsx)("input",{value:t,onChange:function(e){c(e.target.value)},type:"text"}),Object(U.jsx)("button",{onClick:function(e){var n;e.preventDefault(),r((n=t,function(){var e=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get((c=n,"".concat(m,"games?key=").concat("867e1e3142b94a69bcbd615a727b92da","&search=").concat(c,"&page_size=9")));case 2:a=e.sent,t({type:"FETCH_SEARCHED",payload:{searched:a.data.results}});case 4:case"end":return e.stop()}var c}),e)})));return function(n){return e.apply(this,arguments)}}()))},type:"submit",children:"Search"})]})})},_=Object(T.b)(k.a.div)(I||(I=Object(A.a)(["\n    margin: 2rem;\n    display: flex;\n    justify-content:center;\n    input, button{\n        color:#1a1a1a;\n        font-size: 1.5rem;\n        padding:0.5rem 1rem;\n        border:#bfbfbf 1px solid;\n    }\n    input{\n        border-top-left-radius: 25px;\n        border-bottom-left-radius: 25px;\n    }\n    button{\n        border-top-right-radius: 25px;\n        border-bottom-right-radius: 25px;\n        transition: 0.5s;\n        border-left: none;\n        background-color: white;\n    }\n    button:hover{\n        cursor: pointer;\n        color:white;\n        background: #333333;\n    }\n"])));var $=function(){return Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(W,{}),Object(U.jsxs)(R.a,{path:["/game/:id","/"],children:[Object(U.jsx)(X,{}),Object(U.jsx)(V,{})]})]})},ee=t(6),ne={popular:[],newGames:[],upComing:[],searched:[]},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_GAMES":return Object(ee.a)(Object(ee.a)({},e),{},{popular:n.payload.popular,newGames:n.payload.newgames,upComing:n.payload.upcoming});case"FETCH_SEARCHED":return Object(ee.a)(Object(ee.a)({},e),{},{searched:n.payload.searched});case"CLOSE_SEARCHED":return Object(ee.a)(Object(ee.a)({},e),{},{searched:[]});default:return Object(ee.a)({},e)}},ae={gameDetails:{name:[]},gameScreenshots:{results:[]},isLoading:!0},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,n=arguments.length>1?arguments[1]:void 0;switch(console.log("gameDetails reducer accepted action ".concat(n.type," and deployed corresponding changes of the 'details' state")),n.type){case"GET_DETAIL":return Object(ee.a)(Object(ee.a)({},e),{},{gameDetails:n.payload.details,gameScreenshots:n.payload.screenshots,isLoading:!1});case"LOADING_DETAIL":return Object(ee.a)(Object(ee.a)({},e),{},{isLoading:!0});default:return Object(ee.a)({},e)}},re=t(22),oe=Object(re.b)({games:te,game_details:ce}),Ae=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,74)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),c(e),r(e),o(e)}))},ie=t(42),se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.c,le=Object(re.d)(oe,se(Object(re.a)(ie.a)));o.a.render(Object(U.jsx)(c.a.StrictMode,{children:Object(U.jsx)(i.a,{store:le,children:Object(U.jsx)(S.a,{children:Object(U.jsx)($,{})})})}),document.getElementById("root")),Ae()}},[[72,1,2]]]);
//# sourceMappingURL=main.48d865a8.chunk.js.map