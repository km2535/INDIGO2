const toggle_btn = document.querySelector('.menu-toggle-btn');

const stylesheets = document.styleSheets[1];
let css_rule;
for (let i = 0; i < stylesheets.cssRules.length; i++) {
    if(stylesheets.cssRules[i].selectorText === '.header .gnb'){
        css_rule = stylesheets.cssRules[i];
    }
}

function toggle_action(){
    //css_rule.style.setProperty('display', 'block');
    css_rule.style.display = 'block';
    setInterval(() => {
        css_rule.style.display = 'none';
    }, 5000);
}


toggle_btn.addEventListener('click',toggle_action)




console.log(css_rule.style)