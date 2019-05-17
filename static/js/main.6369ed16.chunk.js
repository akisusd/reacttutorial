(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(75)},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),c=n(3),s=n(28),i=n.n(s),l=(n(57),n(15)),u=n(1),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOKEN":return Object(u.a)({},e,{token:t.token});default:return e}},h={fetchSongsPending:!0},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SONGS_PENDING":return Object(u.a)({},e,{fetchSongsPending:!0});case"FETCH_SONGS_SUCCESS":return Object(u.a)({},e,{songs:t.songs,fetchSongsError:!1,fetchSongsPending:!1});case"FETCH_SONGS_ERROR":return Object(u.a)({},e,{fetchSongsError:!0,fetchSongsPending:!1});default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_SUCCESS":return Object(u.a)({},e,{user:t.user,fetchUserError:!1});case"FETCH_USER_ERROR":return Object(u.a)({},e,{fetchUserError:!0});default:return e}},m=function(e){return{type:"SELECT_SUBREDDIT",subreddit:e}},E=function(e){return{type:"INVALIDATE_SUBREDDIT",subreddit:e}},g=function(e){return function(t){return t(function(e){return{type:"REQUEST_POSTS",subreddit:e}}(e)),fetch("https://www.reddit.com/r/".concat(e,".json")).then(function(e){return e.json()}).then(function(n){return t(function(e,t){return{type:"RECEIVE_POSTS",subreddit:e,posts:t.data.children.map(function(e){return e.data}),receivedAt:Date.now()}}(e,n))})}},v=function(e){return function(t,n){if(function(e,t){var n=e.postsBySubreddit[t];return!n||!n.isFetching&&n.didInvalidate}(n(),e))return t(g(e))}},b=Object(c.combineReducers)({postsBySubreddit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INVALIDATE_SUBREDDIT":case"RECEIVE_POSTS":case"REQUEST_POSTS":return Object(u.a)({},e,Object(l.a)({},t.subreddit,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,didInvalidate:!1,items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INVALIDATE_SUBREDDIT":return Object(u.a)({},e,{didInvalidate:!0});case"REQUEST_POSTS":return Object(u.a)({},e,{isFetching:!0,didInvalidate:!1});case"RECEIVE_POSTS":return Object(u.a)({},e,{isFetching:!1,didInvalidate:!1,items:t.posts,lastUpdated:t.receivedAt});default:return e}}(e[t.subreddit],t)));default:return e}},tokenReducer:d,songsReducer:p,userReducer:f,selectedSubreddit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"reactjs",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_SUBREDDIT":return t.subreddit;default:return e}}}),S=n(8),y=n(7);var k=function(){return r.a.createElement("nav",{className:"navbar navbar-light bg-dark"},r.a.createElement("form",{className:"form-inline"},r.a.createElement(y.b,{className:"btn btn-outline-success",to:"/reddit"},"reddit"),r.a.createElement(y.b,{className:"btn btn-outline-success",to:"/spotify"},"spotify")))},w=n(9),O=n(10),R=n(12),j=n(11),N=n(13),T=n(6),_=function(e){var t=e.value,n=e.onChange,a=e.options;return r.a.createElement("span",null,r.a.createElement("h1",null,"Selected Subreddit: ",t),r.a.createElement("select",{className:"btn btn-success",onChange:function(e){return n(e.target.value)},value:t},a.map(function(e){return r.a.createElement("option",{value:e,key:e},e)})))},C=function(e){var t=e.posts;return r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement("div",{key:t},e.title)}))},U=function(e){function t(){var e,n;Object(w.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(R.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){n.props.dispatch(m(e))},n.handleRefreshClick=function(e){e.preventDefault();var t=n.props,a=t.dispatch,r=t.selectedSubreddit;a(E(r)),a(v(r))},n}return Object(N.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,n=e.selectedSubreddit;t(v(n))}},{key:"componentDidUpdate",value:function(e){if(e.selectedSubreddit!==this.props.selectedSubreddit){var t=this.props,n=t.dispatch,a=t.selectedSubreddit;n(v(a))}}},{key:"render",value:function(){var e=this.props,t=e.selectedSubreddit,n=e.posts,a=e.isFetching,o=e.lastUpdated,c=0===n.length;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(_,{value:t,onChange:this.handleChange,options:["reactjs","frontend"]}),r.a.createElement("p",null,o&&r.a.createElement("span",null,"Last updated at ",new Date(o).toLocaleTimeString(),"."," "),!a&&r.a.createElement("button",{className:"btn btn-success",onClick:this.handleRefreshClick},"Refresh")),c?a?r.a.createElement("h2",null,"Loading..."):r.a.createElement("h2",null,"Empty."):r.a.createElement("div",{style:{opacity:a?.5:1}},r.a.createElement(C,{posts:n})))}}]),t}(a.Component),I=Object(T.b)(function(e){var t=e.selectedSubreddit,n=e.postsBySubreddit[t]||{isFetching:!0,items:[]},a=n.isFetching,r=n.lastUpdated;return{selectedSubreddit:t,posts:n.items,isFetching:a,lastUpdated:r}})(U),P=function(e){return function(t){var n=new Request("https://api.spotify.com/v1/me",{headers:new Headers({Authorization:"Bearer "+e})});fetch(n).then(function(e){return"Unauthorized"===e.statusText&&(window.location.href="./"),e.json()}).then(function(e){t({type:"FETCH_USER_SUCCESS",user:e})}).catch(function(e){t({type:"FETCH_USER_ERROR"})})}},A=function(e){return function(t){var n=new Request("https://api.spotify.com/v1/me/player/recently-played",{headers:new Headers({Authorization:"Bearer "+e})});t({type:"FETCH_SONGS_PENDING"}),fetch(n).then(function(e){return"Unauthorized"===e.statusText&&(window.location.href="./"),e.json()}).then(function(e){t({type:"FETCH_SONGS_SUCCESS",songs:e.items})}).catch(function(e){t({type:"FETCH_SONGS_ERROR"})})}},D=function(e){return{type:"SET_TOKEN",token:e}},L=n(33),F=n.n(L),H=function(e){function t(){return Object(w.a)(this,t),Object(R.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(O.a)(t,[{key:"componentWillReceiveProps",value:function(e){""!==e.token&&!e.fetchSongsError&&e.fetchSongsPending&&this.props.fetchSongs(e.token)}},{key:"msToMinutesAndSeconds",value:function(e){var t=Math.floor(e/6e4),n=(e%6e4/1e3).toFixed(0);return t+":"+(n<10?"0":"")+n}},{key:"renderSongs",value:function(){var e=this;return this.props.songs.map(function(t,n){return r.a.createElement("div",{key:n,className:"row"},r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("p",null,t.track.name)),r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("p",null,t.track.artists[0].name)),r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("p",null,t.track.album.name)),r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("p",null,F()(t.added_at).format("YYYY-MM-DD"))),r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("p",null,e.msToMinutesAndSeconds(t.track.duration_ms))))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("h1",null,"Last played songs"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-2 bg-info"},r.a.createElement("p",null,"Title")),r.a.createElement("div",{className:"col-sm-2 bg-info"},r.a.createElement("p",null,"Artist")),r.a.createElement("div",{className:"col-sm-2 bg-info"},r.a.createElement("p",null,"Album")),r.a.createElement("div",{className:"col-sm-2 bg-info"},r.a.createElement("p",null,"Date Added")),r.a.createElement("div",{className:"col-sm-2 bg-info"},r.a.createElement("p",null,"Length"))),this.props.songs&&!this.props.fetchSongsPending&&!this.props.fetchPlaylistSongsPending&&this.renderSongs())}}]),t}(a.Component),B=Object(T.b)(function(e){return{token:e.tokenReducer.token?e.tokenReducer.token:"",songs:e.songsReducer.songs?e.songsReducer.songs:"",fetchSongsError:e.songsReducer.fetchSongsError,fetchSongsPending:e.songsReducer.fetchSongsPending,fetchPlaylistSongsPending:e.songsReducer.fetchPlaylistSongsPending}},function(e){return Object(c.bindActionCreators)({fetchSongs:A},e)})(H),M=function(e){function t(){return Object(w.a)(this,t),Object(R.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){for(var e,t={},n=/([^&;=]+)=?([^&;]*)/g,a=window.location.hash.substring(1);e=n.exec(a);)t[e[1]]=decodeURIComponent(e[2]);t.access_token?this.props.setToken(t.access_token):window.location.href="https://accounts.spotify.com/authorize?client_id=32e01da48975407b869e51284666b21a&response_type=token&redirect_uri=http://localhost:3000/spotify/callback"}},{key:"componentWillReceiveProps",value:function(e){e.token&&(this.props.fetchUser(e.token),this.props.fetchSongs(e.token))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(B,null))}}]),t}(a.Component),x=Object(T.b)(function(e){return{token:e.tokenReducer.token}},function(e){return Object(c.bindActionCreators)({fetchUser:P,fetchSongs:A,setToken:D},e)})(M);var G=function(){return r.a.createElement("nav",{className:"footer navbar navbar-light bg-info"},r.a.createElement("form",{className:"form-inline"},r.a.createElement(y.b,{className:"btn btn-outline-success",to:"/about"},"About us")))};var W=function(){return r.a.createElement("div",{className:"container-fluid about"},r.a.createElement("h3",null,"What is Lorem Ipsum?"),r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))},V=function(e){e.store;return r.a.createElement("div",null,r.a.createElement(S.a,{path:"/",component:k}),r.a.createElement(S.a,{path:"/reddit",component:I}),r.a.createElement(S.a,{path:"/spotify",component:x}),r.a.createElement(S.a,{path:"/about",component:W}),r.a.createElement(S.a,{path:"/",component:G}))};n(73);function q(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(74);var z=[i.a];var Y=Object(c.createStore)(b,c.applyMiddleware.apply(void 0,z));Object(o.render)(r.a.createElement(y.a,null,r.a.createElement(T.a,{store:Y},r.a.createElement(V,{store:Y}))),document.getElementById("root")),function(e){if(new URL("/akisusd/akisusd.github.io/reacttutorial",window.location.href).origin===window.location.origin){var t=["/"];window.addEventListener("install",function(e){e.waitUntil(caches.open("my-pwa-cache-v1").then(function(e){return e.addAll(t)}))}),window.addEventListener("fetch",function(e){console.log("asdfdsaf",e.request.url),e.respondWith(caches.match(e.request).then(function(t){return t||fetch(e.request)}))}),window.addEventListener("load",function(){var t="".concat("/akisusd/akisusd.github.io/reacttutorial","/service-worker-test.js");console.log("swUrl",t),function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):q(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),q(t,e)})}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.6369ed16.chunk.js.map