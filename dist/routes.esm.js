function r(u){u.magic("route",()=>(n,t)=>{let e=window.alpineRoutes[n];return Object.keys(t).forEach(function(o){e=e.replace(`:${o}`,t[o])}),e})}var i=r;export{i as default};
