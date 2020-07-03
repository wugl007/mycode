
//定义产品对象
function Product(){
    this.name = '';
    this.description = '';
    this.normalPrice = '';
    this.groupbuyPrice = '';
    this.buySum = 100;
    this.images = [
        {small:'',big:''},
        {small:'',big:''},
        {small:'',big:''}
    ];

}


Product.prototype={
    /*普通购买*/
    buy:function(){},
    /*绑定图片列表*/
    bindDOMImage:function(){
        var str=''
        for(var i= 0,len=this.images.length;i<len;i++) {
            str+='<li>'
            str+='<img class="etalage_thumb_image" src="'+ this.images[i].small+'" class="img-responsive" />'
            str+='<img class="etalage_source_image" src="'+ this.images[i].small+'" class="img-responsive" />'
            str+='</li>'
        }
        $('#etalage').html(str)

        /*jquery插件实现的幻灯片特效*/
        $('#etalage').etalage({
            thumb_image_width: 300,
            thumb_image_height: 400,

            show_hint: true,
            click_callback: function(image_anchor, instance_id){
                alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
            }
        });
        // This is for the dropdown list example:
        $('.dropdownlist').change(function(){
            etalage_show( $(this).find('option:selected').attr('class') );
        });
    },
    /*绑定详细信息*/
    bindDOMDetail:function(){
        /*绑定元素*/
        $('#pname').html(this.name)
        $('#description').html(this.description)
        $('#price').html(this.normalPrice)
        $('#groupPrice').html(this.groupbuyPrice)
        $('#buyCount').html(this.buySum)
    },
    /*绑定事件*/
    bindEvents:function(){
        /*绑定事件*/
        $('#btnaddcart').onclick=function(){

        }
        $('#btnbuy').onclick=function(){}
    },
    /*团购*/
    groupBuy:function(){},
    /*添加到购物车*/
    addCart:function(){

    }
}