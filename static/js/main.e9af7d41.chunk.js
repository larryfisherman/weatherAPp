(this.webpackJsonpweatherapp2=this.webpackJsonpweatherapp2||[]).push([[0],[,,,,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var a=t(1),n=t.n(a),c=t(4),r=t.n(c),i=(t(9),t(2)),u=(t(10),t(11),t(0)),o="5460cb53463514612fab001d3067fc4e",j="https://api.openweathermap.org/data/2.5/",l="https://api.openweathermap.org/data/2.5/",d="5fd2a278c2455f638b0fe4da35b1d244",h=function(e){var s=e.shareCurrentWeatherResult,t=e.shareToggleClass,n=e.shareNextHours,c=Object(a.useState)(!1),r=Object(i.a)(c,2),h=r[0],p=r[1],x=Object(a.useState)(""),m=Object(i.a)(x,2),b=m[0],O=m[1],v=Object(a.useState)({}),f=Object(i.a)(v,2),y=(f[0],f[1]);return Object(u.jsx)("input",{type:"text",placeholder:"Search..",className:h?"Active":"unActive",onChange:function(e){return O(e.target.value)},value:b,onKeyPress:function(e){"Enter"===e.key&&(p(!0),fetch("".concat(l,"forecast?q=").concat(b,"&appid=").concat(d)).then((function(e){return e.json()})).then((function(e){console.log(e);var s=Math.floor(Math.round(e.list[0].main.temp)-273.15),t=e.list[0].weather[0].main,a=e.list[0].dt_txt,c=Math.floor(Math.round(e.list[12].main.temp)-273.15),r=e.list[1].weather[0].main,i=e.list[1].dt_txt,u=Math.floor(Math.round(e.list[2].main.temp)-273.15),o=e.list[2].weather[0].main,j=e.list[2].dt_txt;n({threeHoursTemp:s,threeHoursSky:t,threeHoursDate:a,sixHoursTemp:c,sixHoursSky:r,sixHoursDate:i,nineHoursTemp:u,nineHoursSky:o,nineHoursDate:j})})),fetch("".concat(j,"weather?q=").concat(b,"&units=metric&APPID=").concat(o)).then((function(e){return e.json()})).then((function(e){y(e);var a=Math.floor(e.main.temp),n=e.main.temp_min,c=e.main.temp_max,r=e.name,i=new Date(1e3*e.sys.sunrise).toISOString().substr(11,8),u=new Date(1e3*e.sys.sunset).toISOString().substr(11,8),o=e.sys.country,j=e.wind.speed,l=e.main.pressure,d=e.weather[0].main;s({tempMax:c,location:r,tempMin:n,sunrise:i,sunset:u,wind:j,country:o,pressure:l,temp:a,sky:d}),t({toggleClass:h})})))}})},p=(t(13),{Clear:t.p+"static/media/Clear.63561cd5.svg",Clouds:t.p+"static/media/Clouds.4e0858f0.svg",Flurries:t.p+"static/media/Flurries.da4a73d7.svg",Mist:t.p+"static/media/Mist.a6733a73.svg",Rain:t.p+"static/media/Rain.6412f4fc.svg",Snow:t.p+"static/media/Snow.5ccde895.svg",Sunny:t.p+"static/media/Sunny.f72ea8a7.svg"}),x=function(e){var s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear();return"".concat(s," ").concat(t," ").concat(a," ").concat(n)},m=function(e){var s=e.currentWeatherResult;return Object(u.jsxs)("div",{className:"locationDate",children:[Object(u.jsx)("span",{children:s.location}),Object(u.jsx)("span",{children:x(new Date)}),Object(u.jsxs)("span",{children:[s.temp,"\xb0C"]}),Object(u.jsx)("img",{src:p[s.sky],alt:p[s.sky]})]})},b=(t(14),function(e){var s=e.nextHours;return Object(u.jsxs)("div",{className:"weekDays",children:[Object(u.jsxs)("div",{className:"one",children:[Object(u.jsx)("img",{src:p[s.threeHoursSky],alt:p[s.threeHoursSky]}),Object(u.jsxs)("span",{children:[s.threeHoursTemp," \xb0C"]}),Object(u.jsx)("span",{children:s.threeHoursDate})]}),Object(u.jsxs)("div",{className:"two",children:[Object(u.jsx)("img",{src:p[s.sixHoursSky],alt:p[s.sixHoursSky]}),Object(u.jsxs)("span",{children:[s.sixHoursTemp," \xb0C"]}),Object(u.jsx)("span",{children:s.sixHoursDate})]}),Object(u.jsxs)("div",{className:"three",children:[Object(u.jsx)("img",{src:p[s.nineHoursSky],alt:p[s.nineHoursSky]}),Object(u.jsxs)("span",{children:[s.nineHoursTemp," \xb0C"]}),Object(u.jsx)("span",{children:s.nineHoursDate})]}),Object(u.jsxs)("div",{className:"four",children:[Object(u.jsx)("img",{src:p[s.sixHoursSky],alt:p[s.sixHoursSky]}),Object(u.jsxs)("span",{children:[s.sixHoursTemp," \xb0C"]}),Object(u.jsx)("span",{children:s.sixHoursDate})]}),Object(u.jsxs)("div",{className:"five",children:[Object(u.jsx)("img",{src:p[s.sixHoursSky],alt:p[s.sixHoursSky]}),Object(u.jsxs)("span",{children:[s.sixHoursTemp," \xb0C"]}),Object(u.jsx)("span",{children:s.sixHoursDate})]})]})}),O=(t(15),function(e){var s=e.currentWeatherResult;return Object(u.jsxs)("div",{className:"additionalInfo",children:[Object(u.jsxs)("div",{className:"maxTemp",children:[Object(u.jsxs)("p",{children:[Math.floor(s.tempMax),"\xb0C"]}),Object(u.jsx)("p",{children:"Temp. max."})]}),Object(u.jsxs)("div",{className:"wind",children:[Object(u.jsxs)("p",{children:[s.wind," mph"]}),Object(u.jsx)("p",{children:"Wind"})]}),Object(u.jsxs)("div",{className:"sunrise",children:[Object(u.jsx)("p",{children:s.sunrise}),Object(u.jsx)("p",{children:"Sunrise"})]}),Object(u.jsxs)("div",{className:"lowestTemp",children:[Object(u.jsxs)("p",{children:[Math.floor(s.tempMin),"\xb0C"]}),Object(u.jsx)("p",{children:"Temp. min."})]}),Object(u.jsxs)("div",{className:"pressure",children:[Object(u.jsxs)("p",{children:[s.pressure," hPa"]}),Object(u.jsx)("p",{children:"Pressure"})]}),Object(u.jsxs)("div",{className:"sunset",children:[Object(u.jsx)("p",{children:s.sunset}),Object(u.jsx)("p",{children:"Sunset"})]})]})}),v=function(){var e=Object(a.useState)({}),s=Object(i.a)(e,2),t=s[0],n=s[1],c=Object(a.useState)({}),r=Object(i.a)(c,2),o=r[0],j=r[1],l=Object(a.useState)(!1),d=Object(i.a)(l,2),p=d[0],x=d[1],v=function(e){x(e)};return Object(u.jsxs)("div",{className:p?"activeApp":"unActiveApp",children:[Object(u.jsxs)("div",{className:p?"activeHeader":"unActiveHeader",children:[Object(u.jsx)("h1",{className:p?"active":"unActive",children:" Weather App "}),Object(u.jsx)(h,{shareNextHours:function(e){j(e)},shareCurrentWeatherResult:function(e){n(e)},shareToggleClass:v})]}),Object(u.jsxs)("div",{className:p?"activeMain":"unActiveMain",children:[Object(u.jsx)(m,{currentWeatherResult:t}),Object(u.jsx)(O,{currentWeatherResult:t,shareToggleClass:v}),Object(u.jsx)(b,{nextHours:o})]})]})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.e9af7d41.chunk.js.map