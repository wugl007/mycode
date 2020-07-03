/*定义购物车对象*/

function Cart(){
    this.products = [];
    this.sum = 0;
    this.allPrice = 2000;
}


/*Cart.prototype={
    bindBasic:function(){
        //绑定
        $('.cartsum').html(this.getSum())
        $('#cartprice').html(this.getAllPrice())
    },
    //绑定产品列表,每次点击到购物车执行的方法
    bindList:function(){
        var str=''
        for(var i= 0,len=this.products.length;i<len;i++){
            str+='<div class="cart_box">'
            str+='<div class="message">'
            str+=' <div class="alert-close"> </div>'
            str+=' <div class="list_img"> <img src="'+this.products[i].images[0].small+'" class="img-responsive" alt=""/> </div>'
            str+=' <div class="list_desc"><h4><a href="#">'+this.products[i].name+'</a></h4><span class="actual">'+ this.products[i].groupbuyPrice+'</span></div>'
            str+=' <div class="clearfix"></div>'
            str+='  <div class="clearfix"></div>'
            str+='  </div>'
            str+='   </div>'
        }
        $('.shopping_cart').html(str)

    },
    /!*结算*!/
    calcalate:function(){},
    /!*获取产品个数*!/
    getSum:function(){
        this.sum=this.products.length;
        return this.sum;
    },
    /!*获取产品总价*!/
    getAllPrice:function(){
        for(var i= 0,len=this.products.length;i<len;i++){
            this.allPrice+=this.products[i].groupbuyPrice;
        }
        return this.allPrice;
    }

}*/


Cart.prototype  = {

    //绑定基本功能
    bindBasic:function () {
        //获取购物车总数目
        $('.cartsum').html(this.getSum());
        //获取购物车总价格
        $('#cartprice').html(this.getAllPrice());
    },

    //绑定产品列表,每次点击到购物车执行的方法
    bindList:function(){
        var str = '';
        for(var i = 0,len = this.products.length; i < len; i++){
            str+='<div class="cart_box">';
            str+='<div class="message">';
            str+=' <div class="alert-close"> </div>';
            str+=' <div class="list_img"> <img src="'+this.products[i].images[0].small+'" class="img-responsive" alt=""/> </div>';
            str+=' <div class="list_desc"><h4><a href="#">'+this.products[i].name+'</a></h4><span class="actual">'+ this.products[i].groupbuyPrice+'</span></div>';
            str+=' <div class="clearfix"></div>';
            str+='  <div class="clearfix"></div>';
            str+='  </div>';
            str+='   </div>';
        }
        $('.shopping_cart').html(str);

    },



    //编写获取购物车总数目方法
    getSum:function () {
        this.sum = this.products.length;
        return this.sum;
    },
    //编写获取购物车总价格方法
    getAllPrice:function () {
        for(var i = 0; i < this.products.length; i++){
            this.allPrice += this.products[i].groupbuyPrice;
        }
        return this.allPrice;
    }
};