import Utils from './Utils.js';
export default class router{
        constructor(config){
             this.config = this._getConfig(config);
             this.init();
        }
        _getConfig(config){
        	 let defaults = {
        	     routeMap : []	
        	 };
        	return Object.assign(defaults,config);
        }
        
        pushState(path,params){
              window.history.pushState(params,null,path);
        }  

        replaceState(path,params){
             window.history.replaceState(params,null,path);
        }

        pageChange(route){
        	let self = this;
        	this.matcher(route,(templateUrl)=>{
                   // let utils = new Utils();
                   // console.log(templateUrl);
                   // utils.ajax({url : templateUrl,type:'html',data:{}}).then(res=>{
                   //     console.log(res);
                   //     let view = document.body.querySelector('[data-ui-view="true"]');
                   //     view.innerHTML = res;
                   // },err=>{
                   //     console.log(err);
                   // });
                   $('[data-ui-view="true"]').load(templateUrl);
        	});
        }
        
        matcher(route,callBack){
        	 let self = this;
              this.config.routeMap.forEach((item,index)=>{
                   console.log(index+"=="+item);
                   if(route.match(new RegExp(item.path,'i'))){
                   	callBack.call(self,item.templateUrl);
                   }
              });
        } 

        init(){
        	let self = this;
        	window.addEventListener('hashchange',(e)=>{
        	      let route = window.location.hash;
        	      self.pageChange(route);
        	},false);
        	window.addEventListener('load',(e)=>{
        	       let route = window.location.hash;
        	       self.pageChange(route);
        	},false);
        } 

}