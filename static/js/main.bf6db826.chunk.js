(this.webpackJsonpwfa=this.webpackJsonpwfa||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),i=c.n(s),r=(c(13),c(5)),o=c(6),h=c(8),p=c(7),l=(c(14),c(0)),u=function(e){var t=e.searchChange;return Object(l.jsx)("input",{type:"search",placeholder:"search/city/district/state",onChange:t})},d=c(3),j=(c(16),function(e){var t,c=e.closePopup,n=e.name,a=e.temp,s=e.description;return Object(l.jsx)("div",{className:"popup--back",children:Object(l.jsxs)("div",{className:"popup--content",children:[Object(l.jsx)("div",{className:"popup--close",onClick:c,children:"x"}),Object(l.jsxs)("div",(t={className:"dib"},Object(d.a)(t,"className","content"),Object(d.a)(t,"children",[Object(l.jsx)("br",{}),Object(l.jsx)("h3",{children:n}),Object(l.jsxs)("p",{children:["Temp: ",a," K"]}),Object(l.jsx)("p",{children:s})]),t))]})})}),b=function(e){Object(h.a)(c,e);var t=Object(p.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.addUrl=function(){0===e.state.searchfield.length?e.setState({popup:!0}):e.fetchUrl()},e.closePopup=function(){e.setState({popup:!1})},e.state={searchfield:"",place:"Enter Place name on Searchbox",temp:"showsTemperature",description:"showsDescription",popup:!1},e}return Object(o.a)(c,[{key:"fetchUrl",value:function(){this.cityName=this.state.searchfield,console.log(this.cityName),this.url="https://api.openweathermap.org/data/2.5/weather?q=".concat(this.cityName,"&appid=afd17ef4e034f170fab2aa26860b0df3"),console.log(this.url),this.getData(),this.setState({popup:!0})}},{key:"getData",value:function(){var e=this;console.log("fetching data"),fetch(this.url).then((function(e){return e.json()})).then((function(t){e.setState({temp:t.main.temp}),e.setState({place:t.name}),e.setState({description:t.weather[0].description})}))}},{key:"render",value:function(){return Object(l.jsxs)(a.a.Fragment,{children:[this.state.popup?Object(l.jsx)(j,{closePopup:this.closePopup,name:this.state.place,temp:this.state.temp,description:this.state.description}):"",Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("p",{children:"WeatherForecast"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("i",{className:"fas fa-cloud-sun"})}),Object(l.jsx)(u,{searchChange:this.onSearchChange}),Object(l.jsx)("button",{onClick:this.addUrl,children:"Search"})]})]})]})}}]),c}(a.a.Component),f=(c(17),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))});i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),f()}},[[18,1,2]]]);
//# sourceMappingURL=main.bf6db826.chunk.js.map