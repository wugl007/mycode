/*���幺�ﳵ����*/

function Cart(){
    this.products = [];
    this.sum = 0;
    this.allPrice = 2000;
}



Cart.prototype  = {

    //�󶨻�������
    bindBasic:function () {
        //��ȡ���ﳵ����Ŀ
        $('.cartsum').html(this.getSum());
        //��ȡ���ﳵ�ܼ۸�
        $('#cartprice').html(this.getAllPrice());
    },

    //�󶨲�Ʒ�б�,ÿ�ε�������ﳵִ�еķ���
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



    //��д��ȡ���ﳵ����Ŀ����
    getSum:function () {
        this.sum = this.products.length;
        return this.sum;
    },
    //��д��ȡ���ﳵ�ܼ۸񷽷�
    getAllPrice:function () {
        for(var i = 0; i < this.products.length; i++){
            this.allPrice += this.products[i].groupbuyPrice;
        }
        return this.allPrice;
    }
};