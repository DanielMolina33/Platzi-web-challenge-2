const user = document.querySelector('#user-content');
const share = document.querySelector('#share');
const footer = document.querySelector('#article-footer');
const buttonShare = document.querySelectorAll('#button-share');
let sn = false;

const toggleIcons = () => {
  if(!sn){
    share.style.display = 'flex';
    footer.classList.add('show');
    sn = true;
  } else {
    share.style.display = 'none';
    footer.classList.remove('show');
    sn = false;
  }
}

buttonShare.forEach(button => {
  button.addEventListener('click', toggleIcons);
});
