"use strict";(self.webpackChunkDaily=self.webpackChunkDaily||[]).push([[538],{3337:(S,b,o)=>{o.d(b,{g:()=>O});var s=o(4953),n=o(2340),f=o(5e3),m=o(520);let O=(()=>{class e{constructor(c){this.http=c}getAll(c){return this.http.get(n.N.url+s.X.LOOKUPS.LOOKUP_PATH+("prices"===c?s.X.LOOKUPS.PRICES:s.X.LOOKUPS.PG)+s.X.CRUD.GET_ALL,{})}managePgGroup(c,p){return this.http.post(n.N.url+s.X.LOOKUPS.LOOKUP_PATH+s.X.LOOKUPS.PG+(p?s.X.CRUD.UPDATE:s.X.CRUD.ADD),c)}getPgGroupById(c){return this.http.post(n.N.url+s.X.LOOKUPS.LOOKUP_PATH+s.X.LOOKUPS.PG+s.X.CRUD.GET,{pgGroupId:c})}updatePriceGroups(c,p){return this.http.post(n.N.url+s.X.LOOKUPS.LOOKUP_PATH+s.X.LOOKUPS.PRICES+s.X.CRUD.UPDATE_BATCH,{priceGroupList:p})}deletePriceGroup(c){return this.http.post(n.N.url+s.X.LOOKUPS.LOOKUP_PATH+s.X.LOOKUPS.PG+s.X.CRUD.DELETE,{pgGroupId:c})}}return e.\u0275fac=function(c){return new(c||e)(f.LFG(m.eN))},e.\u0275prov=f.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},1121:(S,b,o)=>{o.d(b,{k:()=>O});var s=o(4953),n=o(2340),f=o(5e3),m=o(520);let O=(()=>{class e{constructor(c){this.http=c,this.baseUrl=n.N.url+s.X.LOOKUPS.LOOKUP_PATH}getAllRatePlans(){return this.http.post(this.baseUrl+s.X.RATEPLANS_ENDPOINTS.RATEPALN+s.X.CRUD.GET_ALL,{})}updateRatePlan(c){let p=[];for(let g of c)p.push({ratePlanCode:g.ratePlanCode,showFlag:g.showFlag,ratePlanGroupKey:g.ratePlanGroupKey});return this.http.post(this.baseUrl+s.X.RATEPLANS_ENDPOINTS.RATEPALN+s.X.CRUD.UPDATE,Object.assign({},p))}updateRateplansList(c){console.log(c);let p=[];for(let g of c)p.push({ratePlanCode:g.ratePlanCode,showFlag:g.showFlag,ratePlanGroupKey:g.ratePlanGroupKey});return this.http.post(this.baseUrl+s.X.RATEPLANS_ENDPOINTS.RATEPALN+s.X.CRUD.UPDATE_BATCH,{ratePlans:[...p]})}getRateplaneGroup(c){return this.http.post(this.baseUrl+s.X.RATEPLANS_ENDPOINTS.RATEPALNGROUPS+s.X.CRUD.GET,{ratePlanGroupKey:parseInt(c)})}getAllRatePlanGroups(){return this.http.post(this.baseUrl+s.X.RATEPLANS_ENDPOINTS.RATEPALNGROUPS+s.X.CRUD.GET_ALL,{})}updateRatePlanGroup(c){return this.http.post(this.baseUrl+s.X.RATEPLANS_ENDPOINTS.RATEPALNGROUPS+s.X.CRUD.UPDATE,Object.assign({},c))}createRateplanGroup(c){return this.http.post(this.baseUrl+s.X.RATEPLANS_ENDPOINTS.RATEPALNGROUPS+s.X.CRUD.ADD,c)}deletRateplanGroup(c){return this.http.post(this.baseUrl+s.X.RATEPLANS_ENDPOINTS.RATEPALNGROUPS+s.X.CRUD.DELETE,{ratePlanGroupKey:c})}}return e.\u0275fac=function(c){return new(c||e)(f.LFG(m.eN))},e.\u0275prov=f.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},5036:(S,b,o)=>{o.d(b,{r:()=>e});var s=o(7579),n=o(4953),f=o(2340),m=o(5e3),O=o(520);let e=(()=>{class d{constructor(p){this.http=p,this.searchSubject=new s.x,this.clearSubject=new s.x}getAllServices(p){return this.http.post(f.N.url+n.X.LOOKUPS.LOOKUP_PATH+("tariffs"===p?n.X.LOOKUPS.TARIFFS:n.X.LOOKUPS.CLASSES)+n.X.CRUD.GET_ALL,{})}updateServices(p,g){return this.http.post(f.N.url+n.X.LOOKUPS.LOOKUP_PATH+("tariffs"===p?n.X.LOOKUPS.TARIFFS:n.X.LOOKUPS.CLASSES)+n.X.CRUD.UPDATE_BATCH,"tariffs"===p?{tariffModelList:g}:{serviceClasseList:g})}}return d.\u0275fac=function(p){return new(p||d)(m.LFG(O.eN))},d.\u0275prov=m.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},2517:(S,b,o)=>{o.d(b,{I:()=>A});var s=o(2382),n=o(5e3),f=o(5036),m=o(9808),O=o(1424),e=o(5652),d=o(4036),c=o(1208),p=o(845);function g(u,C){if(1&u&&(n.TgZ(0,"span",15),n._UZ(1,"input",16),n.TgZ(2,"label",17),n._uU(3),n.qZA()()),2&u){const a=n.oxw().$implicit;n.xp6(1),n.s9C("formControlName",a.controlName),n.xp6(2),n.hij("",a.label," ")}}function L(u,C){if(1&u&&(n.TgZ(0,"span",15),n._UZ(1,"input",18),n.TgZ(2,"label",17),n._uU(3),n.qZA()()),2&u){const a=n.oxw().$implicit;n.xp6(1),n.s9C("formControlName",a.controlName),n.xp6(2),n.hij("",a.label," ")}}function w(u,C){if(1&u){const a=n.EpF();n.TgZ(0,"span",15)(1,"p-calendar",19),n.NdJ("onSelect",function(){return n.CHM(a),n.oxw(2).onSubmit()}),n.qZA(),n.TgZ(2,"label",17),n._uU(3),n.qZA()()}if(2&u){const a=n.oxw().$implicit;n.xp6(1),n.s9C("formControlName",a.controlName),n.xp6(2),n.hij("",a.label," ")}}function I(u,C){if(1&u){const a=n.EpF();n.TgZ(0,"span",15)(1,"p-dropdown",20),n.NdJ("keyup.enter",function(){return n.CHM(a),n.oxw(2).onSubmit()}),n.qZA(),n.TgZ(2,"label",17),n._uU(3),n.qZA()()}if(2&u){const a=n.oxw().$implicit;n.xp6(1),n.s9C("formControlName",a.controlName),n.Q6J("options",a.options)("optionLabel","ratePlanGroupKey"==a.controlName?"ratePlanGroup":"id")("optionValue","ratePlanGroupKey"==a.controlName?"ratePlanGroupKey":"value")("showClear",!0)("autoDisplayFirst",!1),n.xp6(2),n.hij("",a.label," ")}}function N(u,C){if(1&u&&(n.TgZ(0,"span",21),n._UZ(1,"p-checkbox",22),n.TgZ(2,"label",23),n._uU(3),n.qZA()()),2&u){const a=n.oxw().$implicit;n.xp6(1),n.s9C("formControlName",a.controlName),n.Q6J("binary",!0)("trueValue",1)("falseValue",0),n.xp6(2),n.hij("",a.label," ")}}function x(u,C){if(1&u&&(n.TgZ(0,"span",12),n.YNc(1,g,4,2,"span",13),n.YNc(2,L,4,2,"span",13),n.YNc(3,w,4,2,"span",13),n.YNc(4,I,4,7,"span",13),n.YNc(5,N,4,5,"span",14),n.qZA()),2&u){const a=C.$implicit,v=n.oxw();n.Q6J("ngClass",v.isInline?"":"mr-right"),n.xp6(1),n.Q6J("ngIf","text"===a.type),n.xp6(1),n.Q6J("ngIf","number"===a.type),n.xp6(1),n.Q6J("ngIf","date"===a.type),n.xp6(1),n.Q6J("ngIf","dropDown"===a.type),n.xp6(1),n.Q6J("ngIf","checkbox"===a.type)}}let A=(()=>{class u{constructor(a){this.tariffClassesService=a,this.serviceType="Service classes"}ngOnInit(){this.initForm()}initForm(){switch(this.source){case"tariffs":this.searchForm=new s.cw({tariffModelName:new s.NI,tariffModelType:new s.NI,hybird:new s.NI,contractType:new s.NI,activationSource:new s.NI,bundleType:new s.NI,deactivationSourceFlag:new s.NI});break;case"classes":this.searchForm=new s.cw({serviceClassName:new s.NI,serviceClassType:new s.NI,hybird:new s.NI,contractType:new s.NI,activationSource:new s.NI,bundleType:new s.NI,deacSourceFlag:new s.NI});break;case"rateplans":this.searchForm=new s.cw({ratePlan:new s.NI,ratePlanType:new s.NI,activationSourceFlag:new s.NI,contractType:new s.NI,showFlag:new s.NI,ratePlanGroupKey:new s.NI});break;case"rateplansGroups":this.searchForm=new s.cw({description:new s.NI,ratePlanGroup:new s.NI,showFlag:new s.NI});break;case"prices":this.searchForm=new s.cw({priceGroup:new s.NI,pgGroup:new s.NI});break;case"pgGroups":this.searchForm=new s.cw({pgGroup:new s.NI,description:new s.NI,showFlag:new s.NI});break;case"footprint":this.searchForm=new s.cw({userId:new s.NI,date:new s.NI})}}onSubmit(){this.tariffClassesService.searchSubject.next(this.searchForm.value)}resetForm(){this.searchForm.reset(),this.tariffClassesService.clearSubject.next(!0)}}return u.\u0275fac=function(a){return new(a||u)(n.Y36(f.r))},u.\u0275cmp=n.Xpm({type:u,selectors:[["app-service-form"]],inputs:{source:"source",inputs:"inputs",isInline:"isInline"},decls:14,vars:4,consts:[[1,"wrapper"],[1,"search-title"],[1,"search"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"search-form",3,"ngClass"],[1,"dropList",3,"ngClass"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"btns"],["pButton","","type","button","label","Reset",1,"btn","btn-light",3,"click"],[1,"pi","pi-refresh"],[1,"break"],["pButton","","type","submit","label","Search",1,"btn","btn-basic",2,"width","100px"],[3,"ngClass"],["class","p-float-label",4,"ngIf"],["class","check",4,"ngIf"],[1,"p-float-label"],["id","input.label","type","text","pInputText","","maxlength","50",2,"width","16vw",3,"formControlName"],["for","input.label"],["id","input.label","type","number","pInputText","","maxlength","50",2,"width","16vw",3,"formControlName"],[3,"formControlName","onSelect"],["styleClass","searchDrop",3,"options","optionLabel","optionValue","showClear","autoDisplayFirst","formControlName","keyup.enter"],[1,"check"],[3,"binary","trueValue","falseValue","formControlName"],[1,"check-label"]],template:function(a,v){1&a&&(n.TgZ(0,"div",0)(1,"div",1)(2,"span",2),n._uU(3,"Search"),n.qZA()(),n.TgZ(4,"form",3),n.NdJ("ngSubmit",function(){return v.onSubmit()}),n.TgZ(5,"div",4)(6,"div",5),n.YNc(7,x,6,6,"span",6),n.qZA(),n.TgZ(8,"div",7)(9,"button",8),n.NdJ("click",function(){return v.resetForm()}),n._UZ(10,"i",9),n.qZA(),n.TgZ(11,"span",10),n._uU(12,"|"),n.qZA(),n._UZ(13,"button",11),n.qZA()()()()),2&a&&(n.xp6(4),n.Q6J("formGroup",v.searchForm),n.xp6(1),n.Q6J("ngClass",v.isInline?"flexInline":""),n.xp6(1),n.Q6J("ngClass",v.isInline?"inlineMode":"flex-start"),n.xp6(1),n.Q6J("ngForOf",v.inputs))},directives:[s._Y,s.JL,s.sg,m.mk,m.sg,m.O5,s.Fj,O.o,s.nD,s.JJ,s.u,s.wV,e.f,d.Lt,c.XZ,p.Hq],styles:[".wrapper[_ngcontent-%COMP%]{border:1px solid;border-color:#dfdfdf;margin-top:17px;padding:20px;border-radius:12px}.wrapper[_ngcontent-%COMP%]   .search-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;margin-top:10px}.wrapper[_ngcontent-%COMP%]   .search-title[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{font-weight:600}.wrapper[_ngcontent-%COMP%]   .search-title[_ngcontent-%COMP%]   .viewLess[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{border-radius:50%;border:1px solid var(--darkBlue);margin-left:6px}.wrapper[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .dropList[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between}.wrapper[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .dropList[_ngcontent-%COMP%]   .p-float-label[_ngcontent-%COMP%]{margin-top:20px}.wrapper[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .dropList[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]{position:relative;top:22px}.wrapper[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .dropList[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   p-checkbox[_ngcontent-%COMP%]{vertical-align:middle}.wrapper[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .dropList[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   .check-label[_ngcontent-%COMP%]{color:var(--darkGray);padding-left:4px;position:relative;top:1px}.wrapper[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .dropList.inlineMode[_ngcontent-%COMP%]{justify-content:start}.wrapper[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .dropList.inlineMode[_ngcontent-%COMP%]   .p-float-label[_ngcontent-%COMP%]{margin-right:20px}.wrapper[_ngcontent-%COMP%]   .flexInline[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.wrapper[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]{display:flex;justify-content:end}.wrapper[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:20px 0}.wrapper[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px}.wrapper[_ngcontent-%COMP%]   .break[_ngcontent-%COMP%]{font-family:icomoon;font-weight:lighter;font-size:31px;margin:16px 18px}.mr-right[_ngcontent-%COMP%]{margin-right:1rem}.flex-start[_ngcontent-%COMP%]{justify-content:flex-start!important}"]}),u})()},365:(S,b,o)=>{o.d(b,{Q:()=>q});var s=o(2382),n=o(7579),f=o(6451),m=o(2722),O=o(4004),e=o(5e3),d=o(5036),c=o(1121),p=o(3337),g=o(9783),L=o(8753),w=o(6458),I=o(4255),N=o(9808),x=o(4036),A=o(1208),u=o(845),C=o(9114);const a=["dt"];function v(i,_){if(1&i&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&i){const t=_.$implicit;e.xp6(1),e.Oqu(t.label)}}function T(i,_){1&i&&(e.TgZ(0,"th")(1,"div",9)(2,"span",10),e._uU(3,"|"),e.qZA()()())}function M(i,_){1&i&&(e.TgZ(0,"th"),e._uU(1," Actions "),e.qZA())}function D(i,_){if(1&i&&(e.ynx(0),e.YNc(1,T,4,0,"th",6),e.YNc(2,M,2,0,"th",6),e.BQk()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf","rateplansGroups"==t.source||"pgGroups"==t.source),e.xp6(1),e.Q6J("ngIf","rateplansGroups"==t.source||"pgGroups"==t.source)}}function U(i,_){if(1&i&&(e.TgZ(0,"tr"),e.YNc(1,v,2,1,"th",8),e.YNc(2,D,3,2,"ng-container",6),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.inputs),e.xp6(1),e.Q6J("ngIf",t.enableUpdate||t.enableDelete||t.viewDetails)}}function G(i,_){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw().$implicit,r=e.oxw().$implicit;e.xp6(1),e.Oqu(r.get(t.controlName).value)}}function F(i,_){if(1&i&&(e.TgZ(0,"span",15),e._UZ(1,"p-dropdown",16),e.qZA()),2&i){const t=e.oxw().$implicit,r=e.oxw(2);e.xp6(1),e.s9C("formControlName",t.controlName),e.Q6J("options",t.options)("placeholder",t.label)("optionLabel","ratePlanGroupKey"==t.controlName?"ratePlanGroup":"id")("optionValue","ratePlanGroupKey"==t.controlName?"ratePlanGroupKey":"value")("showClear","classes"==r.source||"tariffs"==r.source)("autoDisplayFirst",!1)}}function R(i,_){if(1&i&&e._UZ(0,"p-checkbox",17),2&i){const t=e.oxw().$implicit;e.s9C("formControlName",t.controlName),e.Q6J("disabled",t.disabled)("binary",!0)("trueValue",1)("falseValue",0)}}function K(i,_){if(1&i&&(e.TgZ(0,"td"),e.YNc(1,G,2,1,"span",6),e.YNc(2,F,2,7,"span",13),e.TgZ(3,"div"),e.YNc(4,R,1,5,"p-checkbox",14),e.qZA()()),2&i){const t=_.$implicit;e.xp6(1),e.Q6J("ngIf","text"===t.type),e.xp6(1),e.Q6J("ngIf","dropDown"===t.type),e.xp6(2),e.Q6J("ngIf","checkbox"===t.type)}}function Z(i,_){1&i&&(e.TgZ(0,"td")(1,"div",9)(2,"span",10),e._uU(3,"|"),e.qZA()()())}function B(i,_){1&i&&(e.TgZ(0,"span"),e._UZ(1,"i",21),e._uU(2," Edit"),e.qZA())}function J(i,_){1&i&&(e.TgZ(0,"span"),e._UZ(1,"i",22),e._uU(2," View Details"),e.qZA())}function X(i,_){if(1&i){const t=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(3),h=l.$implicit,P=l.rowIndex;return e.oxw().manageEdit(h,P)}),e.YNc(1,B,3,0,"span",6),e.YNc(2,J,3,0,"span",6),e.qZA()}if(2&i){const t=e.oxw(4);e.xp6(1),e.Q6J("ngIf",t.enableUpdate),e.xp6(1),e.Q6J("ngIf",t.viewDetails&&!t.enableUpdate)}}function Q(i,_){if(1&i){const t=e.EpF();e.TgZ(0,"button",23),e.NdJ("click",function(l){e.CHM(t);const h=e.oxw(3),P=h.$implicit,y=h.rowIndex;return e.oxw().manageDelete(l,P,y)}),e._UZ(1,"i",24),e._uU(2," Delete "),e.qZA()}}function Y(i,_){if(1&i&&(e.TgZ(0,"td"),e.YNc(1,X,3,2,"button",18),e.YNc(2,Q,3,0,"button",19),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.Q6J("ngIf",t.enableUpdate||t.viewDetails),e.xp6(1),e.Q6J("ngIf",t.enableDelete)}}function W(i,_){if(1&i&&(e.ynx(0),e.YNc(1,Z,4,0,"td",6),e.YNc(2,Y,3,2,"td",6),e.BQk()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf","rateplansGroups"==t.source||"pgGroups"==t.source),e.xp6(1),e.Q6J("ngIf","rateplansGroups"==t.source||"pgGroups"==t.source)}}function j(i,_){if(1&i){const t=e.EpF();e.ynx(0,11),e.TgZ(1,"tr",12),e.NdJ("click",function(){const h=e.CHM(t).rowIndex,P=e.oxw();return"footprint"==P.source?P.openLogDetails(h):""}),e.YNc(2,K,5,3,"td",8),e.YNc(3,W,3,2,"ng-container",6),e.qZA(),e.BQk()}if(2&i){const t=_.rowIndex,r=e.oxw();e.xp6(1),e.Q6J("formGroupName",t)("ngClass","footprint"==r.source?"pointer":""),e.xp6(1),e.Q6J("ngForOf",r.inputs),e.xp6(1),e.Q6J("ngIf",r.enableUpdate||r.enableDelete||r.viewDetails)}}function k(i,_){1&i&&(e.TgZ(0,"tr")(1,"td",25),e._uU(2,"No Data found."),e.qZA()())}function V(i,_){if(1&i&&e._UZ(0,"button",28),2&i){const t=e.oxw(3);e.Q6J("disabled",0==t.Changeditems.length)}}function H(i,_){if(1&i&&e.YNc(0,V,1,1,"button",27),2&i){const t=e.oxw(2);e.Q6J("ngIf",t.enableUpdate)}}function $(i,_){1&i&&e.YNc(0,H,1,1,"ng-template",26)}const z=function(){return[5,15,25,50]};let q=(()=>{class i{constructor(t,r,l,h,P,y,E,ee){this.cdr=t,this.tariffsClasses=r,this.rateplansService=l,this.pricesService=h,this.confirmationService=P,this.router=y,this.priceService=E,this.footprintService=ee,this.loading=!1,this.pageSize=5,this.tableList=[],this.changesUnsubscribe=new n.x,this.Changeditems=[]}ngOnInit(){this.initForm(),this.getALLServices(),this.searchSubscription=this.tariffsClasses.searchSubject.subscribe(t=>{if("footprint"!==this.source){this.servicesList=this.tableListclone;for(const r in t)t[r]&&(this.servicesList=this.servicesList.filter(l=>"string"==typeof l[r]?(t[r]=t[r].toLowerCase(),l[r].toLowerCase().includes(t[r])):l[r]===t[r]));this.clearFormArray(),this.fillFormArray()}else this.clearFormArray(),this.epochDate=t.date?t.date.getTime():null,this.getAllFootprints(this.epochDate,t.userId)}),this.clearSubscription=this.tariffsClasses.clearSubject.subscribe(t=>{this.servicesList=this.tableListclone,this.clearFormArray(),this.fillFormArray()})}getALLServices(){"rateplans"==this.source?this.rateplansService.getAllRatePlans().subscribe(t=>{let r=this.footprintService.handleRateplansoldValue(t.payload);this.footprintService.handleOldValue(r,"ratePlanCode"),this.servicesList=t.payload,this.tableListclone=this.servicesList,this.fillFormArray()}):"rateplansGroups"==this.source?this.rateplansService.getAllRatePlanGroups().subscribe(t=>{this.servicesList=t.payload,this.tableListclone=this.servicesList,this.fillFormArray()}):"classes"==this.source||"tariffs"==this.source?this.tariffsClasses.getAllServices(this.source).subscribe(t=>{this.servicesList="classes"===this.source?t.payload.serviceClasseList:t.payload.tariffModelList,this.tableListclone="classes"===this.source?t.payload.serviceClasseList:t.payload.tariffModelList,this.footprintService.handleOldValue(this.tableListclone,"classes"===this.source?"serviceClassCode":"tariffModelCode"),this.fillFormArray()}):"prices"==this.source||"pgGroups"==this.source?this.pricesService.getAll(this.source).subscribe(t=>{"prices"===this.source&&this.footprintService.handlePriceGroupOldValue(t),this.servicesList="prices"===this.source?this.handlePriceGroupResponse(t):t.payload.allPriceGroupGroupsResponses,this.tableListclone="prices"===this.source?this.handlePriceGroupResponse(t):t.payload.allPriceGroupGroupsResponses,this.fillFormArray()}):"footprint"==this.source&&this.getAllFootprints()}handlePriceGroupResponse(t){return t.payload.priceGroupModel.map(r=>(r.pgGroup=r.pgGroupKey?r.pgGroupKey.pgGroup:null,r.pgKey=r.pgGroupKey?r.pgGroupKey.pgGroupKey:null,r))}clearFormArray(){for(;0!==this.servicesForm.get("servicesArray").length;)this.servicesForm.get("servicesArray").removeAt(0)}initForm(){this.servicesForm=new s.cw({servicesArray:new s.Oe([])})}ngAfterContentChecked(){this.cdr.detectChanges()}getControls(){return this.servicesForm.get("servicesArray").controls}fillFormArray(){this.servicesList.forEach(t=>{switch(this.source){case"tariffs":this.tableName="tariffModelName",this.servicesForm.get("servicesArray").push(new s.cw({tariffModelCode:new s.NI(t.tariffModelCode),tariffModelName:new s.NI(t.tariffModelName),tariffModelType:new s.NI(t.tariffModelType),hybird:new s.NI(t.hybird),activationSource:new s.NI(t.activationSource),contractType:new s.NI(t.contractType),bundleType:new s.NI(t.bundleType),deactivationSourceFlag:new s.NI(t.deactivationSourceFlag)}));break;case"classes":this.tableName="serviceClassName",this.servicesForm.get("servicesArray").push(new s.cw({serviceClassCode:new s.NI(t.serviceClassCode),serviceClassName:new s.NI(t.serviceClassName),serviceClassType:new s.NI(t.serviceClassType),hybird:new s.NI(t.hybird),activationSource:new s.NI(t.activationSource),contractType:new s.NI(t.contractType),bundleType:new s.NI(t.bundleType),deacSourceFlag:new s.NI(t.deacSourceFlag)}));break;case"rateplans":this.tableName="ratePlan",this.servicesForm.get("servicesArray").push(new s.cw({ratePlan:new s.NI({value:t.ratePlan,disabled:!0}),ratePlanType:new s.NI({value:t.ratePlanType,disabled:!0}),activationSourceFlag:new s.NI({value:t.activationSourceFlag,disabled:!0}),contractType:new s.NI({value:t.contractType,disabled:!0}),showFlag:new s.NI(t.showFlag),ratePlanGroupKey:new s.NI(t.ratePlanGroupKey)}));break;case"rateplansGroups":this.tableName="ratePlanGroup",this.servicesForm.get("servicesArray").push(new s.cw({description:new s.NI(t.description),ratePlanGroup:new s.NI(t.ratePlanGroup),showFlag:new s.NI({value:t.showFlag,disabled:!0})}));break;case"prices":this.servicesForm.get("servicesArray").push(new s.cw({priceGroup:new s.NI(t.priceGroup),pgGroup:new s.NI(t.pgGroup),pgKey:new s.NI(t.pgKey)}));break;case"pgGroups":this.servicesForm.get("servicesArray").push(new s.cw({pgGroupKey:new s.NI(t.pgGroupKey),pgGroup:new s.NI(t.pgGroup),description:new s.NI(t.description),showFlag:new s.NI(t.showFlag)}));break;case"footprint":this.servicesForm.get("servicesArray").push(new s.cw({userName:new s.NI(t.userName),userId:new s.NI(t.userId),pageName:new s.NI(t.pageName),date:new s.NI(t.date),objectIdentifier:new s.NI(t.objectIdentifier),actionName:new s.NI(t.actionName)}))}}),this.tableList=[...this.servicesForm.controls.servicesArray.value],this.detectFormArryChanges()}updateList(){"rateplans"==this.source?(this.Changeditems=this.Changeditems?this.Changeditems.map(t=>t.data):[],this.footprintService.handleNewValue(this.Changeditems),this.rateplansService.updateRateplansList(this.Changeditems).subscribe(t=>{this.Changeditems=[],this.clearFormArray(),this.getALLServices()})):"classes"===this.source||"tariffs"===this.source?(this.Changeditems=this.Changeditems?this.Changeditems.map(t=>(console.log("Changeditems",t.data),t.data)):[],this.footprintService.handleNewValue(this.Changeditems),this.tariffsClasses.updateServices(this.source,this.Changeditems).subscribe(t=>{this.Changeditems=[],this.clearFormArray(),this.getALLServices()})):("prices"==this.source||"pgGroups"==this.source)&&(this.Changeditems=this.Changeditems.map(t=>(t.data={priceGroupCode:t.data.priceGroupCode,pgGroupKey:t.data.pgKey},t.data)),this.footprintService.handleNewValue(this.Changeditems),this.pricesService.updatePriceGroups(this.source,this.Changeditems).subscribe(t=>{this.Changeditems=[],this.clearFormArray(),this.getALLServices()}))}manageEdit(t,r){"pgGroups"===this.source?this.editPgGroup(t.value.pgGroupKey):"rateplansGroups"===this.source&&this.editRateplaneGroup(r)}manageDelete(t,r,l){this.confirmationService.confirm({target:t.target,message:"rateplansGroups"===this.source?"Are you sure that you want to delete this Rateplan Group ?":"Are you sure that you want to delete this PG Group ?",icon:"pi pi-exclamation-triangle",accept:()=>{if("rateplansGroups"===this.source){let h=this.servicesList[l].ratePlanGroupKey;this.footprintService.objectIdentifier=h,this.rateplansService.deletRateplanGroup(h).subscribe(P=>this.rateplansService.getAllRatePlanGroups().subscribe(y=>{this.servicesList=y.payload,this.tableListclone=this.servicesList,this.servicesForm.get("servicesArray").clear(),this.fillFormArray()}))}else if("pgGroups"==this.source){let h=r.value.pgGroupKey;this.footprintService.objectIdentifier=h,this.priceService.deletePriceGroup(h).subscribe(P=>{this.priceService.getAll("PG").subscribe(y=>{this.servicesList=y.payload.allPriceGroupGroupsResponses,this.tableListclone=this.servicesList,this.servicesForm.get("servicesArray").clear(),this.fillFormArray()})})}},reject:()=>{}})}editRateplaneGroup(t){let l=this.viewDetails&&!this.enableUpdate?"daily/rateplans/rateplansGroups/view/":"daily/rateplans/rateplansGroups/edit/";l+=this.servicesList[t].ratePlanGroupKey,this.router.navigateByUrl(l)}editPgGroup(t){let r=this.viewDetails&&!this.enableUpdate?"/daily/prices/view/":"/daily/prices/edit/";r+=t,this.router.navigateByUrl(r)}detectFormArryChanges(){this.changesUnsubscribe.next(!0),(0,f.T)(...this.servicesForm.get("servicesArray").controls.map((t,r)=>t.valueChanges.pipe((0,m.R)(this.changesUnsubscribe),(0,O.U)(l=>({rowIndex:r,control:t,data:l}))))).subscribe(t=>{console.log("changes",t),this.rowIndex=t.rowIndex,this.onValueChanged(t)})}onValueChanged(t){var r;let l=!1;this.Changeditems&&(null===(r=this.Changeditems)||void 0===r||r.map(h=>{if(h.rowIndex===t.rowIndex)return l=!0,"rateplans"==this.source?t.data=Object.assign(Object.assign({},t.data),{ratePlanCode:this.servicesList[this.rowIndex].ratePlanCode}):"prices"===this.source&&(t.data=Object.assign(Object.assign({},t.data),{priceGroupCode:this.servicesList[this.rowIndex].priceGroupCode})),console.log("changes exist item",h),h.data=JSON.parse(JSON.stringify(t.data))}),console.log("changesItem",this.Changeditems)),"rateplans"==this.source?t.data=JSON.parse(JSON.stringify(Object.assign(Object.assign({},t.data),{ratePlanCode:this.servicesList[this.rowIndex].ratePlanCode}))):"prices"===this.source&&(t.data=JSON.parse(JSON.stringify(Object.assign(Object.assign({},t.data),{priceGroupCode:this.servicesList[this.rowIndex].priceGroupCode})))),l||console.log("changes first time",t),l||this.Changeditems.push(t)}getAllFootprints(t,r){let l={userId:r||null,echoDate:t||this.footprintService.getTodayInTime()};this.footPrintSubscription=this.footprintService.getFootprintsRequest(l).subscribe(h=>{this.servicesList=h.payload.logModelList,this.tableListclone=h.payload.logModelList,this.fillFormArray()})}openLogDetails(t){let r=this.servicesList[t].transactionUserDetails;this.footprintService.openDialog.next({show:!0,empty:!(r.length>0),data:r})}ngOnDestroy(){var t,r,l;null===(t=this.searchSubscription)||void 0===t||t.unsubscribe(),null===(r=this.clearSubscription)||void 0===r||r.unsubscribe(),null===(l=this.footPrintSubscription)||void 0===l||l.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.sBO),e.Y36(d.r),e.Y36(c.k),e.Y36(p.g),e.Y36(g.YP),e.Y36(L.F0),e.Y36(p.g),e.Y36(w.x))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-services-list"]],viewQuery:function(t,r){if(1&t&&e.Gf(a,5),2&t){let l;e.iGM(l=e.CRH())&&(r.dt=l.first)}},inputs:{source:"source",inputs:"inputs",logs:"logs",enableUpdate:"enableUpdate",enableDelete:"enableDelete",viewDetails:"viewDetails"},decls:8,vars:9,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],["styleClass","p-datatable-customers  p-datatable-striped","dataKey","id",3,"value","paginator","totalRecords","rows","loading","rowsPerPageOptions"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[4,"ngIf"],["header","Confirmation","icon","pi pi-exclamation-triangle",1,"confirm-dialog"],[4,"ngFor","ngForOf"],[1,"mt-2"],[1,"break"],["formArrayName","servicesArray"],[3,"formGroupName","ngClass","click"],["class","p-float-label",4,"ngIf"],[3,"disabled","binary","trueValue","falseValue","formControlName",4,"ngIf"],[1,"p-float-label"],["styleClass","tableDrop",3,"options","placeholder","optionLabel","optionValue","showClear","autoDisplayFirst","formControlName"],[3,"disabled","binary","trueValue","falseValue","formControlName"],["pButton","","type","button","class","edit-button mr-3","iconPos","left",3,"click",4,"ngIf"],["pButton","","type","button","class","delete-button mr-3","iconPos","left",3,"click",4,"ngIf"],["pButton","","type","button","iconPos","left",1,"edit-button","mr-3",3,"click"],[1,"icon-edit"],[1,"icon-eye"],["pButton","","type","button","iconPos","left",1,"delete-button","mr-3",3,"click"],[1,"pi","pi-trash"],["colspan","7",2,"text-align","center"],["pTemplate","paginatorright"],["pButton","","class","btn btn-basic","style","width: 100px","type","submit","label","Submit",3,"disabled",4,"ngIf"],["pButton","","type","submit","label","Submit",1,"btn","btn-basic",2,"width","100px",3,"disabled"]],template:function(t,r){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return r.updateList()}),e.TgZ(1,"p-table",1,2),e.YNc(3,U,3,2,"ng-template",3),e.YNc(4,j,4,4,"ng-template",4),e.YNc(5,k,3,0,"ng-template",5),e.YNc(6,$,1,0,null,6),e.qZA()(),e._UZ(7,"p-confirmDialog",7)),2&t&&(e.Q6J("formGroup",r.servicesForm),e.xp6(1),e.Q6J("value",r.getControls())("paginator",r.tableList.length>0)("totalRecords",r.tableList.length)("rows",r.pageSize)("loading",r.loading)("rowsPerPageOptions",e.DdM(8,z)),e.xp6(5),e.Q6J("ngIf",!("rateplansGroups"===r.source||"pgGroups"===r.source)))},directives:[s._Y,s.JL,s.sg,I.iA,g.jx,N.sg,N.O5,s.CE,s.x0,N.mk,x.Lt,s.JJ,s.u,A.XZ,u.Hq,C.Q],styles:[".break[_ngcontent-%COMP%]{font-family:icomoon;font-weight:lighter;font-size:31px}.icon-eye[_ngcontent-%COMP%]{font-size:13px;padding-right:.2rem;vertical-align:bottom}.pointer[_ngcontent-%COMP%]{cursor:pointer}"]}),i})()}}]);