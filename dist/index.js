function e(e){"@swc/helpers - typeof";return e&&typeof Symbol!=="undefined"&&e.constructor===Symbol?"symbol":typeof e}import n from"chalk";import{curry4 as r}from"@typed/curry";var t=function(e){return JSON.stringify(typeof e=="string"?JSON.parse(e):e,null,2)},o=["FATAL","ERROR","WARN","INFO","DEBUG","TRACE"],c=function(n){return(typeof n==="undefined"?"undefined":e(n))=="object"?"\n"+t(n):n},i=r(function(e,r,t,i){var u;var a=new Date().toISOString(),s=function(){switch(t){case"FATAL":return n.whiteBright.bgRed;case"ERROR":return n.red;case"WARN":return n.yellow;case"INFO":return n.green;case"DEBUG":return n.blue;case"TRACE":return n.magenta}}();o.slice(0,o.indexOf(e)+1).includes(t)&&(console.log(s("[".concat(t,"] [").concat(a,"] [").concat(r,"] ").concat(i.map(c).join(" ")))),t==="FATAL"&&((u=process)===null||u===void 0?void 0:u.exit(1)))});export{i as logger,t as prettify_json};