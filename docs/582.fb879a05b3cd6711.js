"use strict";(self.webpackChunkProWay_Computer=self.webpackChunkProWay_Computer||[]).push([[582],{7582:(T,d,r)=>{r.r(d),r.d(d,{CarrinhoModule:()=>p});var s=r(6895),m=r(9541),t=r(1571),g=r(5087),a=r(433);function _(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"li"),t._UZ(1,"img",6),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.ALo(6,"currency"),t.qZA(),t.TgZ(7,"label"),t._uU(8," Quantidades: "),t.TgZ(9,"input",7),t.NdJ("ngModelChange",function(i){const u=t.CHM(n).$implicit;return t.KtG(u.quantidade=i)})("change",function(){t.CHM(n);const i=t.oxw(2);return t.KtG(i.calculaTotal())}),t.qZA()(),t.TgZ(10,"button",8),t.NdJ("click",function(){const C=t.CHM(n).$implicit,u=t.oxw(2);return t.KtG(u.carrinhoService.removerProdutoCarrinho(C.id))}),t._UZ(11,"i",9),t.qZA()()}if(2&e){const n=o.$implicit;t.xp6(1),t.Q6J("src",n.imagem,t.LSH),t.xp6(2),t.Oqu(n.descricao),t.xp6(2),t.hij("Pre\xe7o: ",t.xi3(6,4,n.preco,"BRL"),""),t.xp6(4),t.Q6J("ngModel",n.quantidade)}}function f(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div")(1,"ul"),t.YNc(2,_,12,7,"li",3),t.qZA(),t.TgZ(3,"h2",4),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.TgZ(6,"button",5),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.comprar)}),t._uU(7,"Comprar"),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.itensCarrinho),t.xp6(2),t.hij("Total: ",t.xi3(5,2,n.total,"BRL"),"")}}function x(e,o){1&e&&t._uU(0,"Nenhum produto foi adicionado ao carrinho")}class l{constructor(o){this.carrinhoService=o,this.itensCarrinho=[]}ngOnInit(){this.itensCarrinho=this.carrinhoService.obtemCarrinho(),this.calculaTotal()}calculaTotal(){this.total=this.itensCarrinho.reduce((o,n)=>o+(n.preco+n.quantidade),0)}removeProdutoCarrinho(o){this.itensCarrinho=this.itensCarrinho.filter(n=>n.id!==o),this.carrinhoService.removerProdutoCarrinho(o),this.calculaTotal()}comprar(){alert("Parab\xe9ns! voc\xea finalizou a sua compra"),this.carrinhoService.limparCarrinho(),this.router.navigate(["produtos"])}static#t=this.\u0275fac=function(n){return new(n||l)(t.Y36(g.e))};static#n=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-carrinho"]],decls:5,vars:2,consts:[[1,"cart-title"],[4,"ngIf","ngIfElse"],["semproduto",""],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],[3,"src"],["type","number",3,"ngModel","ngModelChange","change"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(n,c){if(1&n&&(t.TgZ(0,"h2",0),t._uU(1,"Carrinho"),t.qZA(),t.YNc(2,f,8,5,"div",1),t.YNc(3,x,1,0,"ng-template",null,2,t.W1O)),2&n){const i=t.MAs(4);t.xp6(2),t.Q6J("ngIf",c.itensCarrinho.length>0)("ngIfElse",i)}},dependencies:[s.sg,s.O5,a.Fj,a.wV,a.JJ,a.On,s.H9],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}"]})}const v=[{path:"",component:l}];class h{static#t=this.\u0275fac=function(n){return new(n||h)};static#n=this.\u0275mod=t.oAB({type:h});static#o=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(v),m.Bz]})}class p{static#t=this.\u0275fac=function(n){return new(n||p)};static#n=this.\u0275mod=t.oAB({type:p});static#o=this.\u0275inj=t.cJS({imports:[s.ez,h,a.u5]})}}}]);