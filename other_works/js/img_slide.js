var posters = [
    {
        imgSrc: 'poster_01.jpg',
        title: '전시-풀짚, 소풍오다.',
        details: {
            '기간': '2020년 10월 ~ 11월',
            '참여인원': '3명',
            '개요': '용산공예관의 유튜브 채널에 젊은층의 구독자를 늘리기 위하여 MBTI 성격유형 이라는 소재를 빌어 제작한 영상콘텐츠',
            '담당역할': '기획 및 프로젝트 총괄',
            '제작프로그램': '포토샵, 일러스트레이터, 프리미어프로'
        }
    },
    {
        imgSrc: 'poster_02.jpg',
        title: '전시-손길',
        details: {
            '기간': '2020년 10월 ~ 11월',
            '참여인원': '3ㅇ명',
            '개요': '용산공예관의 유튜브 채널에 젊은층의 구독자를 늘리기 위하여 MBTI 성격유형 이라는 소재를 빌어 제작한 영상콘텐츠',
            '담당역할': '기획 및 프로젝트 총괄',
            '제작프로그램': '포토샵, 일러스트레이터, 프리미어프로'
        }
    },{
        imgSrc: 'poster_03.jpg',
        title: '전시-화류춘몽',
        details: {
            '기간': '2020년 10월 ~ 11월',
            '참여인원': '3ㅎ명',
            '개요': '용산공예관의 유튜브 채널에 젊은층의 구독자를 늘리기 위하여 MBTI 성격유형 이라는 소재를 빌어 제작한 영상콘텐츠',
            '담당역할': '기획 및 프로젝트 총괄',
            '제작프로그램': '포토샵, 일러스트레이터, 프리미어프로'
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