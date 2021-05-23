



// document.querySelector('#submit_button').addEventListener('click', contactLoad(backToCon));
// function backToCon() {
//     document.querySelector('.contact').scrollIntoView({ behavior: "smooth" });
// }
// function contactLoad(callback) {
//     location = 'file:///C:/Users/kasia/Desktop/wine_page/index.html';
// }
// contactLoad(backToCon);

// btn.addEventListener('click', () => {
//     alert('You clicked me!');

//     let pElem = document.createElement('p');
//     pElem.textContent = 'This is a newly-added paragraph.';
//     document.body.appendChild(pElem);
//   });

//   const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//   alert('You clicked me!');

//   let pElem = document.createElement('p');
//   pElem.textContent = 'This is a newly-added paragraph.';
//   document.body.appendChild(pElem);
// });

//vid animation//

let vid = document.querySelector('.videoId');
vid.playbackRate = 0.5;
let prevScrollpos = window.pageYOffset;
let rootElement = document.documentElement;

let menuOptions = document.querySelectorAll('.p_menu_options');
let menuOption = document.querySelectorAll('.menu_option');
let menuOptionsArray = ['home', 'about us', 'about wine', 'offer', 'contact'];
let mobileArrow = document.querySelector('.menu_arrow');
let mobileArrowIsVisible = false;
let mobileMenu = document.querySelector('.menu');
let articlePics = ['red-wine-glass.jpg', 'Print-background.webp', 'wine_glsses.jpg', 'viney.jpg', 'wine_with_food.jpg', 'red_white.jpg', 'hiszpanskiewino.jpg', 'table_bg.jpg', 'tuscany.jpg', 'Hot-Wine.jpg'];
let articles_bg = document.querySelectorAll('.article_bg');
let articleList = [];
let articleContent;
let articlesContentWraper = document.createElement('div');
articlesContentWraper.className = '.article_content_wraper';
let mediaQuery = window.matchMedia('(min-width: 770px)');
let menuMediaQuery = window.matchMedia('(max-width: 770px)');

let LoremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
localStorage.setItem("vOneLocalStorage", articleList);

window.addEventListener('scroll', vineyardVisibleArticleFade);
document.querySelector('.back_to_top_bg').addEventListener('click', scrollToTop);
document.querySelector('#read_more_button').addEventListener('click', putArticle);
document.querySelector('.menu').addEventListener('click', scrollToElement);
mobileArrow.addEventListener('click', menuDropDown);
window.addEventListener('scroll', hideShowMenu);

fillMenu();
putImage();
eventListenerSet();

function menuDropDown() {
    mobileArrowIsVisible === false ? mobileArrowIsVisible = true : mobileArrowIsVisible = false;
    console.log(mobileArrowIsVisible);
    if (mobileArrowIsVisible) {
        mobileMenu.style.top = '5.4rem';
        mobileArrow.style.transform = 'rotate(0)';
        // document.querySelector('.menu_option').style.opacity = '.99';
    } else {
        if (menuMediaQuery.matches) {
            mobileMenu.style.top = '-25rem';
            mobileArrow.style.transform = 'rotate(180deg)';
        }
    }
    console.log(mobileMenu.style.translateY);
}

function vineyardVisibleArticleFade() {
    let topHeight = window.pageYOffset + window.innerHeight;
    let vineyardIsVisible = topHeight > document.querySelector('#vineyard').offsetTop;
    let articleWraperIsVisible = topHeight > document.querySelector('.article_wraper').offsetTop;

    if (vineyardIsVisible) {
        document.getElementById('vineyard').style = 'animation: fadeIn 2s ease';
    }
    // else {
    //     document.getElementById('vineyard').classList.remove('animate__fadeInDown');
    // }

    if (articleWraperIsVisible) {
        document.querySelectorAll('.article').forEach(element => {
            element.classList.add('animate__fadeInLeft');
        });
        document.querySelectorAll('.article_bg').forEach(element => {
            element.classList.add('animate__fadeInRight');
        });
    } else {
        document.querySelectorAll('.article').forEach(element => {
            element.classList.remove('animate__fadeInLeft');
        });
        document.querySelectorAll('.article_bg').forEach(element => {
            element.classList.remove('animate__fadeInRight');
        });
    }
}

function hideShowMenu() {
    let currentScrollPos = window.pageYOffset;
    let back = document.querySelector('.back_to_top_bg');
    let backBg = document.querySelector('.back_to_top_wraper');
    let arrow = document.querySelector('#arrow');
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0";
        if (prevScrollpos < 10) {
            back.style.opacity = '0';
            back.style.bottom = '-4rem';
            backBg.style.opacity = '0';
            backBg.style.bottom = '-4rem';
            arrow.style.marginBottom = '-10rem';
        }
    } else {
        if (mediaQuery.matches) {
            document.querySelector(".navbar").style.top = "-120px";
        }
        back.style.opacity = '.95';
        back.style.bottom = '3rem';
        backBg.style.opacity = '.95';
        backBg.style.bottom = '3rem';
        arrow.style.marginBottom = '0';
    }
    prevScrollpos = currentScrollPos;
}


function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function scrollToElement() {
    mobileMenu.style.translate = '0 -30rem';
    mobileArrow.style.transform = 'rotate(180deg)';
    let scrollTargetNumber = (event.target.id.length > 0 ? event.target.id : event.target.parentElement.id).slice(2);
    console.log(scrollTargetNumber);
    let scrollTarget = '.' + menuOptionsArray[scrollTargetNumber].split(' ').join('_');
    console.log(scrollTarget);
    document.querySelector(scrollTarget).scrollIntoView({ behavior: "smooth" });
}

function eventListenerSet() {
    let picsUrlsBg = document.querySelectorAll('.article_bg');
    for (let i = 0; i < picsUrlsBg.length; i++) {
        picsUrlsBg[i].addEventListener('click', checkArticle);
    }
}

function checkArticle() {
    let bgTarget = event.target.id.length > 0 ? event.target : event.target.parentElement;
    if (articleList.indexOf(bgTarget.id) === -1) {
        articleList.push(bgTarget.id);
        bgTarget.firstChild.style.display = 'block';
        bgTarget.children[1].style.color = 'white';
        bgTarget.children[1].style.borderBottom = '1px solid white';
        bgTarget.lastChild.style.color = 'white';
        bgTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.819)';
    } else {

        for (let i = 0; i < articleList.length; i++) {
            if (articleList[i] === bgTarget.id) {
                articleList.splice(i, 1);
            }
        }
        bgTarget.firstChild.style.display = 'none';
        bgTarget.children[1].style.color = 'transparent';
        bgTarget.children[1].style.borderBottom = '0';
        bgTarget.lastChild.style.color = 'transparent';
        bgTarget.style.backgroundColor = 'transparent';
    }
    if (articleList.length > 0) {
        document.querySelector('#read_more_button').style.color = 'rgb(223, 40, 91)';
        document.querySelector('#read_more_button').style.borderColor = 'rgb(223, 40, 91)';
        document.querySelector('#read_more_button').style.cursor = 'pointer';
    }
    else {
        document.querySelector('#read_more_button').style.color = 'rgb(160, 160, 160)';
        document.querySelector('#read_more_button').style.borderColor = 'rgb(160, 160, 160)';
        document.querySelector('#read_more_button').style.cursor = 'auto';
    } return articleList;
}

function putImage() {
    for (let i = 0; i < articlePics.length; i++) {
        let articles = document.createElement('div');
        let articles_bg = document.createElement('div');
        articles_bg.className = 'article_bg animate__animated';
        articles.className = 'article animate__animated';
        document.querySelector('.article_wraper').appendChild(articles);
        document.querySelector('.article_bg_wraper').appendChild(articles_bg);
        let picsUrlsBg = document.querySelectorAll('.article_bg');
        let check = document.createElement('div');
        check.className = 'checkmark draw';
        check.style.display = 'none';
        checks = document.querySelectorAll('.checkmark');
        picsUrlsBg[i].appendChild(check);
        let picsUrls = document.querySelectorAll('.article');
        picsUrlsBg[i].id = 'picId' + i;
        picsUrls[i].style.backgroundImage = 'url(' + articlePics[i] + ')';
        let paras = document.createElement('div');
        let describe = document.createElement('p');
        describe.className = 'article_describe';
        paras.className = 'article_para';
        picsUrlsBg[i].appendChild(paras);
        picsUrlsBg[i].appendChild(describe);
        paras.textContent = articlePics[i];
        articleContent = articlePics;
        describe.textContent = LoremIpsum;

        if (describe.textContent.length > 70) {
            describe.textContent = describe.textContent.substring(0, 90) + '...';
        }
    }
}

function putArticle() {
    console.log(articleList.length);
    if (articleList.length > 0) {
        console.log(articleList);
        articlesContentWraper.remove();
        articlesContentWraper = document.createElement('div');
    }
    articlesContentWraper.className = 'article_content_wraper';
    document.querySelector('.about_wine').appendChild(articlesContentWraper);
    let closeArticleWraper;
    if (!document.querySelector('.close_article_wraper') && articleList.length > 0) {
        closeArticleWraper = document.createElement('div');
        closeArticleWraper.className = 'close_article_wraper';
        let closeArticle = document.createElement('img');
        closeArticle.className = 'close_article';
        closeArticle.setAttribute('src', 'x.svg');
        closeArticleWraper.appendChild(closeArticle);
        articlesContentWraper.appendChild(closeArticleWraper);
    }
    articleListId = articleList.map(el => Number(el.slice(-1)));
    for (let i = 0; i < articleListId.length; i++) {
        console.log(document.querySelector('#picId' + articleListId[i]).firstChild.style.display);
        if (document.querySelector('#picId' + articleListId[i]).firstChild.style.display === 'block') {
            let allArticleWraper = document.createElement('div');
            allArticleWraper.className = 'all_article_wraper';
            let article = document.createElement('img');
            article.className = 'article_img';
            let header = document.createElement('h2');
            header.textContent = articlePics[articleListId[i]];
            let headTextWraper = document.createElement('div');
            headTextWraper.className = 'pic_text_wraper';
            headTextWraper.appendChild(header);
            let text = document.createElement('div');
            headTextWraper.appendChild(text);
            text.className = 'text';
            if (i % 2 == 0) {
                text.textContent = LoremIpsum;
            } else {
                text.textContent = LoremIpsum + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
            }
            allArticleWraper.appendChild(article);
            allArticleWraper.appendChild(headTextWraper);
            articlesContentWraper.appendChild(allArticleWraper);
            article.setAttribute('src', articlePics[articleListId[i]]);
            let articleImgSrc = articlePics[articleListId[i]];
        } else {
            articleListId.splice(articleListId.indexOf(articleListId[i]), 1);
            console.log('slice', articleListId);
        }
        document.querySelector('.close_article').addEventListener('click', function () {
            articlesContentWraper.remove();
        });
    } if (articleList.length > 0) {
        articlesContentWraper.scrollIntoView({ behavior: "smooth" });
    }

}
function fillMenu() {

    for (let i = 0; i < menuOptionsArray.length; i++) {
        menuOption[i].textContent = menuOptionsArray[i];
        menuOption[i].setAttribute = ('id', 'id' + i + 'para');
        menuOptions[i].setAttribute('id', 'id' + i);
    }
}

function checkMenuTab() {

    for (let i = 0; i < menuOption.length; i++) {
        if (event.target.id === 'id' + i || event.target.parentElement.id === 'id' + i) {
            menuOptions[i].style.backgroundPosition = '500% 100%';
            menuOptions[i].style.color = 'white';
            menuOptions[i].style.filter = 'hue-rotate(97deg)';
        } else {
            menuOptions[i].style.backgroundPosition = '0 -130%';
            menuOptions[i].style.color = 'rgb(105, 105, 105)';
            menuOptions[i].style.filter = 'hue-rotate(97deg)';
        }
        scrollToElement();
    }
}
