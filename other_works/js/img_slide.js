var posters = [
    {
        imgSrc: 'poster_01.jpg',
        title: '풀짚, 소풍오다.',
        details: {
            '분류': '전시홍보 포스터',
            '담당역할': '디자인, 전시 네이밍 개발, 온라인·오프라인 홍보 콘텐츠 패키지 제작(x배너, 카드뉴스 이미지 등)',
            '사이즈' : '297 x 420mm',
            '제작프로그램': '포토샵, 일러스트레이터'
        }
    },
    {
        imgSrc: 'poster_02.jpg',
        title: '손길',
        details: {
            '분류': '전시홍보 포스터',
            '담당역할': '디자인, 전시 네이밍 개발, 온라인·오프라인 홍보 콘텐츠 패키지 제작(x배너, 카드뉴스 이미지 등)',
            '사이즈' : '297 x 420mm',
            '제작프로그램': '포토샵, 일러스트레이터'
        }
    },{
        imgSrc: 'poster_03.jpg',
        title: '화류춘몽',
        details: {
            '분류': '전시홍보 포스터',
            '담당역할': '디자인, 전시 네이밍 개발, 온라인·오프라인 홍보 콘텐츠 패키지 제작(x배너, 카드뉴스 이미지 등)',
            '사이즈' : '297 x 420mm',
            '제작프로그램': '포토샵, 일러스트레이터'
        }
    }
];

var currentIndex = 0;
var totalPosters = posters.length;

function updatePoster() {
    var poster = posters[currentIndex];
    $('.box3 .item_box .img_box img').attr('src', './img/' + poster.imgSrc).hide().fadeIn('fast');
    $('.box3 .item_box .txt_box h3').text(poster.title);

    var dl = $('.box3 .item_box .txt_box dl');
    dl.empty();
    for (var key in poster.details) {
        dl.append('<dt>' + key + '</dt><dd>' + poster.details[key] + '</dd>');
    }

    $('.box3 .item_box .text').text((currentIndex + 1) + '/' + totalPosters);
}

$('.box3 .item_box .prev').click(function(e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalPosters) % totalPosters;
    updatePoster();
});

$('.box3 .item_box .next').click(function(e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalPosters;
    updatePoster();
});

// 초기 포스터 표시
updatePoster();