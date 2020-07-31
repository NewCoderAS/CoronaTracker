(this["webpackJsonpcorona-tracking"]=this["webpackJsonpcorona-tracking"]||[]).push([[0],{21:function(e,t,a){e.exports=a(51)},27:function(e,t,a){e.exports={container:"App_container__3ruBV"}},33:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(16),s=a.n(c),o=a(2),u=a.n(o),l=a(3),d=a(17),i=a(18),m=a(20),p=a(19),h=(a(27),a(7),a(4)),f=a.n(h),v=(a(33),function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,s=t.lastUpdate;return a?n.a.createElement("div",{className:"row mt-3 justify-content-center"},n.a.createElement("div",{className:"card col-sm-3 border-dark border-rounded",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"Infected"),n.a.createElement("h5",{className:"card-subtitle mb-2 text-muted"},n.a.createElement(f.a,{start:0,end:a.value,duration:2,separator:","})),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},new Date(s).toDateString()))),n.a.createElement("div",{className:"card col-sm-3 offset-sm-1 border-dark",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"Recovered"),n.a.createElement("h5",{className:"card-subtitle mb-2 text-muted"},n.a.createElement(f.a,{start:0,end:r.value,duration:2,separator:","}),n.a.createElement("span",null," (",n.a.createElement(f.a,{start:0,end:r.value/a.value*100,duration:2,separator:","}),"%)")),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},new Date(s).toDateString()))),n.a.createElement("div",{className:"card col-sm-3 offset-sm-1 border-dark",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"Deaths"),n.a.createElement("h5",{className:"card-subtitle mb-2 text-muted"},n.a.createElement(f.a,{start:0,end:c.value,duration:2,separator:","}),n.a.createElement("span",null," (",n.a.createElement(f.a,{start:0,end:c.value/a.value*100,duration:2,separator:","}),"%)")),n.a.createElement("h6",{className:"card-subtitle mb2 text-muted"},new Date(s).toDateString())))):"Loading..."}),E=function(){return n.a.createElement("h1",null,"Charts")},b=function(e){return e.countries[0]?n.a.createElement("div",{className:"form-group col-md-12 mt-3"},n.a.createElement("label",{htmlFor:"inputState"},n.a.createElement("h4",null,"Choose Country")),n.a.createElement("select",{id:"inputState",className:"form-control",onChange:function(t){return e.handleCountryUpdate(t.target.value)}},n.a.createElement("option",{value:""},"Global"),e.countries.map((function(e,t){return n.a.createElement("option",{key:t,value:e},e)})))):"Loading.."},y=a(5),x=a.n(y),N=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,r,n,c,s,o,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),""!==t){e.next=7;break}return e.next=4,x.a.get("https://covid19.mathdro.id/api/");case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,x.a.get("https://covid19.mathdro.id/api/countries/".concat(t));case 9:e.t0=e.sent;case 10:return a=e.t0,r=a.data,n=r.confirmed,c=r.recovered,s=r.deaths,o=r.lastUpdate,console.log(n),l={confirmed:n,recovered:c,deaths:s,lastUpdate:o},e.abrupt("return",l);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://covid19.mathdro.id/api/countries");case 2:return t=e.sent,a=t.data.countries.map((function(e){return e.name})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={country:"",data:{},countries:[]},e.handleCountryUpdate=function(){var t=Object(l.a)(u.a.mark((function t(a){var r,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a;case 2:return r=t.sent,e.setState({country:r}),t.next=6,N(e.state.country);case 6:n=t.sent,e.setState({data:n});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.componentDidMount=Object(l.a)(u.a.mark((function t(){var a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e.state.country);case 2:return a=t.sent,e.setState({data:a}),t.next=6,w();case 6:r=t.sent,e.setState({countries:r});case 8:case"end":return t.stop()}}),t)}))),e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement(v,{data:this.state.data}),n.a.createElement(b,{countries:this.state.countries,handleCountryUpdate:this.handleCountryUpdate}),n.a.createElement(E,null))}}]),a}(r.Component);s.a.render(n.a.createElement(g,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.ea5678ef.chunk.js.map