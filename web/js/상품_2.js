const PRUDUCT_LIST = 
    [
    // 일본
        [{ item_no: 0, src: "img/travel/tokyo.jpg", name: '도쿄', desc:'일본하면 도쿄지' ,price: '350,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) }, // 0번 아이템 정보    
        { item_no: 1, src: "img/travel/osaka.jpg", name: '오사카', desc:'일식은 오사카지', price: '300,000원~', num: Math.floor(Math.random()*100000+1)  ,code: Math.floor(Math.random()*100000+1) },
        { item_no: 2, src: "img/travel/fukoka.jpeg", name: '후쿠오카', desc:'가까운게 최고임', price: '250,000원~', num: Math.floor(Math.random()*100000+1)  ,code: Math.floor(Math.random()*100000+1) },
        { item_no: 3, src: "img/travel/saporo.jpg", name: '삿포로', desc:'봄의 삿포로도 충분히 매력적이랍니다' , price: '380,000원~', num: Math.floor(Math.random()*100000+1)  },
        { item_no: 4, src: "img/travel/nara.jpg", name: '나라', desc:'일잘알은 나라감' , price: '350,000원~', num: Math.floor(Math.random()*100000+1)  ,code: Math.floor(Math.random()*100000+1) },
        { item_no: 5, src: "img/travel/okinawa.jpg", name: '오키나와', desc:'일본인듯 일본아닌 오키나와로 오세요' , price: '380,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) }, // 0번 아이템 정보    
        { item_no: 6, src: "img/travel/sendai.jpg", name: '센다이', desc:'사람에 찌든 그대 오라' , price: '400,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) },
        { item_no: 7, src: "img/travel/nagoya.jpg", name: '나고야', desc:'미안 잘 몰라' , price: '300,000원~', num: Math.floor(Math.random()*100000+1)  ,code: Math.floor(Math.random()*100000+1) },
        { item_no: 8, src: "img/travel/sakura.jpg", name: '벚꽃투어', desc:'일본하면 벚꽃' , price: '440,000원'},],
        // 동남아
        [{ item_no: 0, src: "img/travel/danang.jpg", name: '다낭', desc:'일본하면 도쿄지' ,price: '350,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) }, // 0번 아이템 정보    
        { item_no: 1, src: "img/travel/hanoi.jpg", name: '하노이', desc:'일식은 오사카지', price: '300,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) },
        { item_no: 1, src: "img/travel/borakai.jpg", name: '보라카이', desc:'가까운게 최고임', price: '250,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) },
        { item_no: 2, src: "img/travel/cebu.jpg", name: 'tpqn', desc:'봄의 삿포로도 충분히 매력적이랍니다' , price: '380,000원~', num: Math.floor(Math.random()*100000+1)  , code: Math.floor(Math.random()*100000+1) },
        { item_no: 3, src: "img/travel/taiwan.png", name: '타이완', desc:'일잘알은 나라감' , price: '350,000원~', num: Math.floor(Math.random()*100000+1)  ,code: Math.floor(Math.random()*100000+1) },
        { item_no: 4, src: "img/travel/malaysia.jpg", name: '말레이시아', desc:'일본인듯 일본아닌 오키나와로 오세요' , price: '380,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) }, // 0번 아이템 정보    
        { item_no: 5, src: "img/travel/raos.jpg", name: '라오스', desc:'사람에 찌든 그대 오라' , price: '400,000원~', num: Math.floor(Math.random()*100000+1), code: Math.floor(Math.random()*100000+1)},
        { item_no: 6, src: "img/travel/india.jpg", name: '인도', desc:'미안 잘 몰라' , price: '300,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) },
        { item_no: 7, src: "img/travel/singapore.jpg", name: '싱가폴', desc:'일본하면 벚꽃' , price: '440,000원' , num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1)},
    ],
    // 유럽
    [{ item_no: 0, src: "img/travel/london.jpg", name: '런던', desc:'일본하면 도쿄지' ,price: '350,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) }, // 0번 아이템 정보    
    { item_no: 1, src: "img/travel/paris.jpg", name: '파리', desc:'일식은 오사카지', price: '300,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) },
    { item_no: 1, src: "img/travel/italy.jpg", name: '이탈리아', desc:'가까운게 최고임', price: '250,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) },
    { item_no: 2, src: "img/travel/spain.jpg", name: '스페인', desc:'봄의 삿포로도 충분히 매력적이랍니다' , price: '380,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) },
    { item_no: 3, src: "img/travel/northeu.jpg", name: '북유럽', desc:'일잘알은 나라감' , price: '350,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) },
    { item_no: 4, src: "img/travel/koka.jpg", name: '코카서스', desc:'일본인듯 일본아닌 오키나와로 오세요' , price: '380,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) }, // 0번 아이템 정보    
    { item_no: 5, src: "img/travel/egypt.jpg", name: '이집트', desc:'사람에 찌든 그대 오라' , price: '400,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) },
    { item_no: 6, src: "img/travel/africa.jpg", name: '아프리카', desc:'미안 잘 몰라' , price: '300,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) },
    { item_no: 7, src: "img/travel/arab.jpg", name: '아랍', desc:'일본하면 벚꽃' , price: '440,000원' , num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1)},
],
// 중국
[{ item_no: 0, src: "img/travel/beijing.jpg", name: '베이징', desc:'일본하면 도쿄지' ,price: '350,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) }, // 0번 아이템 정보    
{ item_no: 1, src: "img/travel/shanghai.jpg", name: '상해', desc:'일식은 오사카지', price: '300,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) },
{ item_no: 1, src: "img/travel/qingdao.jpg", name: '청도', desc:'가까운게 최고임', price: '250,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) },
{ item_no: 2, src: "img/travel/spain.jpg", name: '하얼빈', desc:'봄의 삿포로도 충분히 매력적이랍니다' , price: '380,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) },
{ item_no: 3, src: "img/travel/xian.jpg", name: '시안', desc:'일잘알은 나라감' , price: '350,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) },
{ item_no: 4, src: "img/travel/mong.jpg", name: '몽골', desc:'일본인듯 일본아닌 오키나와로 오세요' , price: '380,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) }, // 0번 아이템 정보    
{ item_no: 5, src: "img/travel/centerasia.jpg", name: '중앙아시아', desc:'사람에 찌든 그대 오라' , price: '400,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) },
{ item_no: 6, src: "img/travel/westasia.jpg", name: '서아시아', desc:'미안 잘 몰라' , price: '300,000원~', num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1) },
{ item_no: 7, src: "img/travel/hongkong.jpg", name: '홍콩', desc:'일본하면 벚꽃' , price: '440,000원' , num: Math.floor(Math.random()*100000+1) , code: Math.floor(Math.random()*100000+1)},
]
    ]
    const ITEM_LIST = 
    [
    // 일본
        [{ item_no: 0, src: "img/travel/tokyo.jpg", name: '도쿄', desc:'일본하면 도쿄지' ,price: '350,000원~'}, // 0번 아이템 정보    
        { item_no: 1, src: "img/travel/osaka.jpg", name: '오사카', desc:'일식은 오사카지', price: '300,000원~'},
        { item_no: 2, src: "img/travel/fukoka.jpeg", name: '후쿠오카', desc:'가까운게 최고임', price: '250,000원~'},
        { item_no: 3, src: "img/travel/saporo.jpg", name: '삿포로', desc:'봄의 삿포로도 충분히 매력적이랍니다' , price: '380,000원~'},
        { item_no: 4, src: "img/travel/nara.jpg", name: '나라', desc:'일잘알은 나라감' , price: '350,000원~'},
        { item_no: 5, src: "img/travel/okinawa.jpg", name: '오키나와', desc:'일본인듯 일본아닌 오키나와로 오세요' , price: '380,000원~'}, // 0번 아이템 정보    
        { item_no: 6, src: "img/travel/sendai.jpg", name: '센다이', desc:'사람에 찌든 그대 오라' , price: '400,000원~'},
        { item_no: 7, src: "img/travel/nagoya.jpg", name: '나고야', desc:'미안 잘 몰라' , price: '300,000원~'},
        { item_no: 8, src: "img/travel/sakura.jpg", name: '벚꽃투어', desc:'일본하면 벚꽃' , price: '440,000원'},],
        // 동남아
        [{ item_no: 0, src: "img/travel/danang.jpg", name: '다낭', desc:'일본하면 도쿄지' ,price: '350,000원~'}, // 0번 아이템 정보    
        { item_no: 1, src: "img/travel/hanoi.jpg", name: '하노이', desc:'일식은 오사카지', price: '300,000원~'},
        { item_no: 2, src: "img/travel/borakai.jpg", name: '보라카이', desc:'가까운게 최고임', price: '250,000원~'},
        { item_no: 3, src: "img/travel/cebu.jpg", name: 'tpqn', desc:'봄의 삿포로도 충분히 매력적이랍니다' , price: '380,000원~'},
        { item_no: 4, src: "img/travel/taiwan.png", name: '타이완', desc:'일잘알은 나라감' , price: '350,000원~'},
        { item_no: 5, src: "img/travel/malaysia.jpg", name: '말레이시아', desc:'일본인듯 일본아닌 오키나와로 오세요' , price: '380,000원~'}, // 0번 아이템 정보    
        { item_no: 6, src: "img/travel/raos.jpg", name: '라오스', desc:'사람에 찌든 그대 오라' , price: '400,000원~'},
        { item_no: 7, src: "img/travel/india.jpg", name: '인도', desc:'미안 잘 몰라' , price: '300,000원~'},
        { item_no: 8, src: "img/travel/singapore.jpg", name: '싱가폴', desc:'일본하면 벚꽃' , price: '440,000원'},
    ],
    // 유럽
    [{ item_no: 0, src: "img/travel/london.jpg", name: '런던', desc:'일본하면 도쿄지' ,price: '350,000원~'}, // 0번 아이템 정보    
    { item_no: 1, src: "img/travel/paris.jpg", name: '파리', desc:'일식은 오사카지', price: '300,000원~'},
    { item_no: 2, src: "img/travel/italy.jpg", name: '이탈리아', desc:'가까운게 최고임', price: '250,000원~'},
    { item_no: 3, src: "img/travel/spain.jpg", name: '스페인', desc:'봄의 삿포로도 충분히 매력적이랍니다' , price: '380,000원~'},
    { item_no: 4, src: "img/travel/northeu.jpg", name: '북유럽', desc:'일잘알은 나라감' , price: '350,000원~'},
    { item_no: 5, src: "img/travel/koka.jpg", name: '코카서스', desc:'일본인듯 일본아닌 오키나와로 오세요' , price: '380,000원~'}, // 0번 아이템 정보    
    { item_no: 6, src: "img/travel/egypt.jpg", name: '이집트', desc:'사람에 찌든 그대 오라' , price: '400,000원~'},
    { item_no: 7, src: "img/travel/africa.jpg", name: '아프리카', desc:'미안 잘 몰라' , price: '300,000원~'},
    { item_no: 8, src: "img/travel/arab.jpg", name: '아랍', desc:'일본하면 벚꽃' , price: '440,000원'},
],
// 중국
[{ item_no: 0, src: "img/travel/beijing.jpg", name: '베이징', desc:'일본하면 도쿄지' ,price: '350,000원~'}, // 0번 아이템 정보    
{ item_no: 1, src: "img/travel/shanghai.jpg", name: '상해', desc:'일식은 오사카지', price: '300,000원~'},
{ item_no: 2, src: "img/travel/qingdao.jpg", name: '청도', desc:'가까운게 최고임', price: '250,000원~'},
{ item_no: 3, src: "img/travel/haelbin.jpg", name: '하얼빈', desc:'봄의 삿포로도 충분히 매력적이랍니다' , price: '380,000원~'},
{ item_no: 4, src: "img/travel/xian.jpg", name: '시안', desc:'일잘알은 나라감' , price: '350,000원~'},
{ item_no: 5, src: "img/travel/mong.jpg", name: '몽골', desc:'일본인듯 일본아닌 오키나와로 오세요' , price: '380,000원~'}, // 0번 아이템 정보    
{ item_no: 6, src: "img/travel/centerasia.jpg", name: '중앙아시아', desc:'사람에 찌든 그대 오라' , price: '400,000원~'},
{ item_no: 7, src: "img/travel/westasia.jpg", name: '서아시아', desc:'미안 잘 몰라' , price: '300,000원~'},
{ item_no: 8, src: "img/travel/hongkong.jpg", name: '홍콩', desc:'일본하면 벚꽃' , price: '440,000원'},
],
// 호주
[{ item_no: 0, src: "img/travel/guam.jpg", name: '괌', desc:'일본하면 도쿄지' ,price: '350,000원~'}, // 0번 아이템 정보    
{ item_no: 1, src: "img/travel/saipan.jpg", name: '사이판', desc:'일식은 오사카지', price: '300,000원~'},
{ item_no: 2, src: "img/travel/sydney.jpg", name: '시드니', desc:'가까운게 최고임', price: '250,000원~'},
{ item_no: 3, src: "img/travel/brisbone.jpg", name: '브리즈번', desc:'봄의 삿포로도 충분히 매력적이랍니다' , price: '380,000원~'},
{ item_no: 4, src: "img/travel/mel.jpg", name: '멜버른', desc:'일잘알은 나라감' , price: '350,000원~'},
{ item_no: 5, src: "img/travel/okland.jpg", name: '오클랜드', desc:'일본인듯 일본아닌 오키나와로 오세요' , price: '380,000원~'}, // 0번 아이템 정보    
{ item_no: 6, src: "img/travel/newsouth.jpg", name: '뉴질랜드 남섬', desc:'사람에 찌든 그대 오라' , price: '400,000원~'},
],
// dkapflzk
[{ item_no: 0, src: "img/travel/mexico.jpg", name: '멕시코', desc:'일본하면 도쿄지' ,price: '350,000원~'}, // 0번 아이템 정보    
{ item_no: 1, src: "img/travel/argentina.jpg", name: '남미', desc:'일식은 오사카지', price: '300,000원~'},
{ item_no: 2, src: "img/travel/hawai.jpg", name: '하와이', desc:'가까운게 최고임', price: '250,000원~'},
{ item_no: 3, src: "img/travel/newyork.jpg", name: '뉴욕', desc:'봄의 삿포로도 충분히 매력적이랍니다' , price: '380,000원~'},
{ item_no: 4, src: "img/travel/la.jpg", name: 'LA', desc:'일잘알은 나라감' , price: '350,000원~'},
{ item_no: 5, src: "img/travel/roki.jpg", name: '로키산맥투어', desc:'일본인듯 일본아닌 오키나와로 오세요' , price: '380,000원~'}, // 0번 아이템 정보    
{ item_no: 6, src: "img/travel/toronto.jpg", name: '토론토', desc:'사람에 찌든 그대 오라' , price: '400,000원~'},
]
    ]