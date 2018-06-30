export default class Utils{
       ajax(options){
           const DEFAULTS = {type:"GET",dataType:'json'};
           let xhr = window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()
           let cfg = Object.assign(DEFAULTS,options);
           let self = this;
           let params = this.format(cfg.data);
           return new Promise((resolve,reject)=>{
                   xhr.onreadystatechange = function () {
                   	console.log(xhr); 
	            if (xhr.readyState == 4) {
	                let status = xhr.status;
	                status == 200 ?resolve(xhr.responseText): reject(status)  
	            }
	       };
                   if (cfg.type == "GET") {              	
	             xhr.open("GET", cfg.url + "?" + params, true);
	             xhr.send(null);
	       } else if (cfg.type == "POST") {
	            xhr.open("POST", cfg.url, true);
	            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	            xhr.send(params);
	       };
           });
       }
       format(data){
           var arr = [];
           for (var name in data) {
              arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
          };
          arr.push(("v=" + Math.random()).replace(".",""));
          return arr.join("&");
       }
}
