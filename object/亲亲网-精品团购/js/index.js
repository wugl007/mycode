//��Ʒ����
/*���������ʹ�ö�������Ժͷ�����this�����������ʹ�ã���ʵ���������õ��﷨*/

function Product(){
    this.image = "";
    this.zhekou = "";
    this.description = "";
    this.youhuijia = "";
    this.price = "";
    this.sales = "";
}

Product.prototype = {
    bindDom:function () {
        var str = '';
        str += '<dl>';
                str +=  '<dt><a href="javascript:;"><img src="'+ this.image+'" width="384" height="225" /></a></dt>';
                str +=  '<dd>';
                    str +=  '<span>';
                        str +=  '<a href="javascript:;">';
                            str +=  '<em>'+ this.zhekou+'</em>'+ this.description+'';
                        str +=  '</a>';
                    str +=  '</span>';
                str +=  '</dd>';
                str +=  '<dd class="price">';
                    str +=  '<em>'+ this.youhuijia+'</em>';
                    str +=  '<del>'+ this.price +'</del>';
                    str +=  '<i>������'+ this.sales +'&nbsp ʣ�ࣺ0��2ʱ19��6��</i>';
                str +=  '</dd>';
        str += '</dl>';
        return str;
    },
    bindEvents:function () {

    }
}

/*���ľ���� -- ����ɶ��Լ���*/
window.onload=function() {
  /*��������ajax��ȡ��json���� -- �������Ǻ�̨���������*/
    /*����һʵ�������*/
   /* /!*��Ʒ1*!/
    var product1 = new Product();
    product1.image = 'images/boutque07_r2_c2.jpg';
    product1.zhekou = '3.5��';
    product1.description = 'Aussie���������ӯ���ɻ�����400ml';
    product1.youhuijia = '?42.00';
    product1.price = '?120.00';
    product1.sales = '1000';

    /!*��Ʒ2*!/
    var product2 = new Product();
    product2.image = 'images/boutque08_r2_c2.jpg';
    product2.zhekou = '3.2��';
    product2.description  = '����������������ʪ��ʿ˪50g';
    product2.youhuijia = '?16.00';
    product2.price = '?50.04';
    product2.sales = '2500';

    /!*��Ʒ3*!/
    var product3 = new Product();
    product3.image = 'images/boutque01_r2_c2.jpg';
    product3.zhekou = '3.5��';
    product3.description = 'Aussie���������ӯ���ɻ�����400ml';
    product3.youhuijia = '?42.00';
    product3.price = '?120.00';
    product3.sales = '1000';

    /!*��Ʒ4*!/
    var product4 = new Product();
    product4.image = 'images/boutque08_r2_c2.jpg';
    product4.zhekou = '3.2��';
    product4.description  = '����������������ʪ��ʿ˪50g';
    product4.youhuijia = '?16.00';
    product4.price = '?50.04';
    product4.sales = '2500';*/

    /*��ʾ�ж����Ʒ  ������Ҫ������ʵ��*/
    /*����һ*/
    // var products = [product1,product2,product3,product4];


    /*������ ʹ��json*/
    var products = [
        {image:'images/boutque01_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque02_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque03_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque04_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque05_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque06_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque07_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque08_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque09_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque10_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque11_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque12_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque13_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque14_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque15_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque16_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque17_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque18_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque19_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque20_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
        {image:'images/boutque21_r2_c2.jpg',zhekou:'3.2��',description:'����������������ʪ��ʿ˪50g',youhuijia:'?16.00',price:'?50.04',sales:'2500'},
    ];



    /*ǰ�˴���*/
    /*ǰ��̨������Ӱ�죬���ǲ��صȴ������Ա����������*/

   /* var str = '',len =products.length;
    for(var i = 0; i < len; i++ ){
        str += products[i].bindDom();
    }
    var container  =document.getElementById('container');
    container.innerHTML  = str;*/

    var str='';
    for(var i = 0,len=products.length;i<len;i++) {
        var product = new Product();
        product.description=products[i].description;
        product.price=products[i].price;
        product.youhuijia=products[i].youhuijia;
        product.zhekou=products[i].zhekou;
        product.sales=products[i].sales;
        product.image=products[i].image;

        str+= product.bindDom()
    }
    var container = document.getElementById('container');
    container.innerHTML=str;
};



