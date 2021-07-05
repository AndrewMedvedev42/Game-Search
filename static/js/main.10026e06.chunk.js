(this["webpackJsonpfor-game"]=this["webpackJsonpfor-game"]||[]).push([[0],{71:function(e,n,t){"use strict";t.r(n);var a,c,r,i,s,o,d=t(0),l=t.n(d),g=t(22),m=t.n(g),j=t(11),u=t(14),p=t(20),b=t.n(p),h=t(23),O=t(18),f=t.n(O),x="https://api.rawg.io/api/",v=(new Date).getFullYear(),y=function(){var e=(new Date).getMonth()+1;return e<10?"0".concat(e):e}(),w=function(){var e=(new Date).getDate();return e<10?"0".concat(e):e}(),_="".concat(v,"-").concat(y,"-").concat(w),D="".concat(v-1,"-").concat(y,"-").concat(w),k="".concat(v+1,"-").concat(y,"-").concat(w),C="games?key=".concat("eda59755cd584070a853aa6426d51024","&dates=").concat(D,",").concat(_,"&ordering=-rating&page_size=10?"),E="games?key=".concat("eda59755cd584070a853aa6426d51024","&dates=").concat(_,",").concat(k,"&ordering=-added&page_size=10?"),I="games?key=".concat("eda59755cd584070a853aa6426d51024","&dates=").concat(D,",").concat(_,"&ordering=-released&page_size=10?"),N=function(e){return"".concat(x,"games/").concat(e,"/screenshots?key=").concat("eda59755cd584070a853aa6426d51024")},L=function(){return function(){var e=Object(h.a)(b.a.mark((function e(n){var t,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(x).concat(C));case 2:return t=e.sent,e.next=5,f.a.get("".concat(x).concat(E));case 5:return a=e.sent,e.next=8,f.a.get("".concat(x).concat(I));case 8:c=e.sent,n({type:"FETCH_GAMES",payload:{popular:t.data.results,newgames:c.data.results,upcoming:a.data.results}});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},T=t(12),G=t(72),S=function(e,n){return e.match(/media\/screenshots/)?e.replace("media/screenshots","media/resize/".concat(n,"/-/screenshots")):e.replace("media/games/","media/resize/".concat(n,"/-/games/"))},A=function(e){return function(){var n=Object(h.a)(b.a.mark((function n(t){var a,c;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"LOADING_DETAIL"}),n.next=3,f.a.get((r=e,"".concat(x,"games/").concat(r,"?key=").concat("eda59755cd584070a853aa6426d51024")));case 3:return a=n.sent,n.next=6,f.a.get(N(e));case 6:c=n.sent,console.log("detailAction recived id: ".concat(e)),t({type:"GET_DETAIL",payload:{details:a.data,screenshots:c.data}});case 9:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()},F=t(16),z=t(1),M=Object(T.b)(G.a.div)(a||(a=Object(j.a)(["\n    margin: 1rem;\n    padding: 1rem;\n    text-align: center;\n    border-radius: 1rem;\n    box-shadow: 2px 2px 5px grey;\n    img{\n        width: 100%;\n    }\n    h3{\n        font-weight: 400;\n    }\n    p{\n        font-weight: 800;\n    }\n"]))),P=function(e){var n=e.name,t=e.released,a=e.id,c=e.image,r=a.toString(),i=Object(u.b)();return Object(z.jsx)(M,{layoutId:r,onClick:function(){console.log(typeof r),document.body.style.overflow="hidden",console.log(a),i(A(a))},children:Object(z.jsxs)(F.b,{to:"/game/".concat(a),children:[Object(z.jsx)("img",{src:S(c,640),alt:n}),Object(z.jsx)("h3",{children:n}),Object(z.jsx)("p",{children:t})]})},a)},B=t(3),H=Object(T.b)(G.a.div)(c||(c=Object(j.a)(["\n    width: 100%;\n    min-height: 100vh;\n    overflow-y:scroll ;\n    background-color: rgba(0,0,0,0.5);\n    position: fixed;\n    top:0;\n    left:0;\n    .gameDetailsContainer{\n        margin:1rem;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n    h2{\n        padding: 0px;\n        color:grey;\n    }\n    h3{\n        margin:0rem 1rem;\n        color:darkgrey;\n    }\n    .ratingContainer, .platformContainer{\n        margin: 1rem;\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n        padding: 0;\n    }\n    .backGroundImage{\n        width: 100%;\n        height: 400px;\n        object-fit: cover;\n    }\n    .screenshot{\n        width: 90%;\n        margin: 0.5rem;\n    }\n    .screenshotContainer{\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n    }\n"]))),J=Object(T.b)(G.a.div)(r||(r=Object(j.a)(["\n    width: 80%;\n    border-radius: 25px;\n    margin:2rem;\n    padding: 2rem;\n    background:white;\n    position: absolute;\n    left:10%;\n\n"]))),R=function(e){var n=e.pathID;console.log(n);var t=Object(B.e)(),a=Object(u.c)((function(e){return e.game_details})),c=a.gameDetails,r=a.gameScreenshots,i=a.isLoading;return Object(z.jsx)("section",{children:!i&&Object(z.jsx)(H,{className:"45DF23!",onClick:function(e){var n=e.target;console.log(n),n.classList.contains("45DF23!")&&(document.body.style.overflow="auto",t.push("/"))},children:Object(z.jsxs)(J,{layoutId:n,children:[Object(z.jsxs)("article",{children:[Object(z.jsx)("h1",{className:"gameTitle",children:c.name}),Object(z.jsxs)("section",{className:"gameDetailsContainer",children:[Object(z.jsx)("div",{className:"ratingContainer",children:Object(z.jsxs)("h3",{children:["Rating: ",c.rating," / ",c.rating_top]})}),Object(z.jsx)("div",{className:"platformContainer",children:c.platforms.map((function(e){return Object(z.jsx)("h3",{className:"platform",children:e.platform.name})}))})]})]}),Object(z.jsx)("img",{className:"backGroundImage",src:S(c.background_image,1280)}),Object(z.jsx)("section",{children:Object(z.jsx)("p",{children:c.description_raw})}),Object(z.jsxs)("section",{children:[Object(z.jsx)("h2",{children:"Screenshots"}),Object(z.jsx)("div",{className:"screenshotContainer",children:r.results.map((function(e){return Object(z.jsx)("img",{className:"screenshot",src:S(e.image,1280)},e.id)}))})]})]})})})},U=Object(T.b)(G.a.div)(i||(i=Object(j.a)(["\n    padding: 0 5rem;\n    h2{\n        padding:5rem 0;\n    }\n"]))),X=Object(T.b)(G.a.div)(s||(s=Object(j.a)(["\n    min-height:80vh;\n    display:grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    align-items: center;\n"]))),V=function(){var e=Object(B.f)().pathname.split("/")[2];console.log(e);var n=Object(u.b)();Object(d.useEffect)((function(){n(L())}),[n]);var t=Object(u.c)((function(e){return e.games})),a=t.popular,c=t.newGames,r=t.upComing;return Object(z.jsxs)(U,{children:[e&&Object(z.jsx)(R,{pathID:e}),Object(z.jsx)("h2",{children:"Up Coming"}),Object(z.jsx)(X,{children:r.map((function(e){var n=e.name,t=e.released,a=e.id,c=e.background_image;return Object(z.jsx)(P,{name:n,released:t,id:a,image:c},a)}))}),Object(z.jsx)("h2",{children:"Popular"}),Object(z.jsx)(X,{children:a.map((function(e){var n=e.name,t=e.released,a=e.id,c=e.background_image;return Object(z.jsx)(P,{name:n,released:t,id:a,image:c},a)}))}),Object(z.jsx)("h2",{children:"New Games"}),Object(z.jsx)(X,{children:c.map((function(e){var n=e.name,t=e.released,a=e.id,c=e.background_image;return Object(z.jsx)(P,{name:n,released:t,id:a,image:c},a)}))})]})},Y=Object(T.a)(o||(o=Object(j.a)(["\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n    body{\n        font-family: 'Montserrat', sans-serif;\n        width: 100%;\n    }\n    .gameTitle{\n        font-size: 2rem;\n        text-align: center;\n    }\n    p{\n        font-size: 1.2rem;\n        margin: 2rem;\n    }\n"])));var q=function(){return Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)(Y,{}),Object(z.jsx)(B.a,{path:["/game/:id","/"],children:Object(z.jsx)(V,{})})]})},K=t(13),Q={popular:[],newGames:[],upComing:[]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_GAMES":return Object(K.a)(Object(K.a)({},e),{},{popular:n.payload.popular,newGames:n.payload.newgames,upComing:n.payload.upcoming});default:return Object(K.a)({},e)}},Z={gameDetails:{name:[]},gameScreenshots:{results:[]},isLoading:!0},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,n=arguments.length>1?arguments[1]:void 0;switch(console.log("gameDetails reducer accepted action ".concat(n.type," and deployed corresponding changes of the 'details' state")),n.type){case"GET_DETAIL":return Object(K.a)(Object(K.a)({},e),{},{gameDetails:n.payload.details,gameScreenshots:n.payload.screenshots,isLoading:!1});case"LOADING_DETAIL":return Object(K.a)(Object(K.a)({},e),{},{isLoading:!0});default:return Object(K.a)({},e)}},ee=t(21),ne=Object(ee.b)({games:W,game_details:$}),te=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,73)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))},ae=t(42),ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.c,re=Object(ee.d)(ne,ce(Object(ee.a)(ae.a)));m.a.render(Object(z.jsx)(l.a.StrictMode,{children:Object(z.jsx)(u.a,{store:re,children:Object(z.jsx)(F.a,{children:Object(z.jsx)(q,{})})})}),document.getElementById("root")),te()}},[[71,1,2]]]);
//# sourceMappingURL=main.10026e06.chunk.js.map