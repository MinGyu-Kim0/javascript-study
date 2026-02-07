var imageUrl = 'http://imageAddress.com/';
var productUrl = 'http://productAddress.com/';

// 이미지 타입별 요청 함수 준비
var getImage = getInformation(imageUrl);        // http://imageAddress.com/
var getEmoticon = getImage('emoticon');        // http://imageAddress.com/emoticon
var getIcon = getImage('icon');                // http://imageAddress.com/icon

// 제품 타입별 요청 함수 준비
var getProduct = getInformation(productUrl);    // http://productAddress.com/
var getFruit = getProduct('fruit');            // http://productAddress.com/fruit
var getVegetable = getProduct('vegetable');    // http://productAddress.com/vegetable

// 실제 요청
var emoticon1 = getEmoticon(100);              // http://imageAddress.com/emoticon/100
var emoticon2 = getEmoticon(102);              // http://imageAddress.com/emoticon/102
var icon1 = getIcon(205);                      // http://imageAddress.com/icon/205
var icon2 = getIcon(234);                      // http://imageAddress.com/icon/234
var fruit1 = getFruit(300);                    // http://productAddress.com/fruit/300
var fruit2 = getFruit(400);                    // http://productAddress.com/fruit/400
var vegetable1 = getVegetable(456);            // http://productAddress.com/vegetable/456
var vegetable2 = getVegetable(789);            // http://productAddress.com/vegetable/789