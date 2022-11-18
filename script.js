const sobrebtn = document.getElementById('sobrebtn');
const homebtn = document.getElementById('Homebtn');
const sobre = document.getElementById('about');
const header = document.getElementById('header');
const body = document.getElementsByTagName('body');
const resumoInit = document.getElementById('resumoInit')
const socialLinks = document.getElementById('socialLinks');
const nav = document.getElementById('navbar');
const flexb = document.getElementById('nome');
const activeGreen = document.getElementsByClassName('active')
const uls = nav.firstElementChild
const fotoHeader = document.getElementById('foto-header');
console.log(body);
const calcIdade = () => {
  const idadep = document.getElementById('idade');
  const data = new Date,
    ano_atual = data.getFullYear(),
    mes_atual = data.getMonth() + 1,
    dia_atual = data.getDate,

    anoAniver = 1998,
    mesAniver = 05,
    diaAniver = 03,

    idade = ano_atual - anoAniver;

    if (mes_atual < mesAniver || mes_atual == mesAniver && dia_atual < diaAniver) {
      idade--;
    }
    idadep.innerHTML = idade;
    return idade < 0 ? 0 : idade;
}


const removeActive = () => {
  const lis = uls.children;
  for ( let i = 0; i < lis.length; i += 1) {
    const listClass = lis[i].firstChild.classList;
    for (let i = 0; i < listClass.length; i += 1) {
      if (listClass[i] === 'active') {
        listClass.remove(listClass[i]);
      }
    }
  }
}

sobrebtn.addEventListener('click', () => {
  removeActive();
  sobrebtn.classList.add('active');
  sobre.style.overflow = 'visible';
  sobre.style.opacity = '1';
  header.setAttribute('class', 'header-top');
  body[0].classList.add('gif');
  header.style.margin = '0';
  nav.classList.add('flexb')
  resumoInit.style.display = 'none';
  fotoHeader.style.display = 'none';
  // resumoInit.style.opacity = '0';
  socialLinks.style.display = 'none';
  // socialLinks.style.opacity = '0';
  flexb.style.display = 'flex';
  flexb.style.justifyContent = 'space-between';

});

homebtn.addEventListener('click', () => {
  removeActive();
  homebtn.classList.add('active');
  sobre.style.overflow = 'hidden';
  sobre.style.opacity = '0';
  header.classList.remove('header-top');
  header.style.margin = '25px';
  nav.classList.remove('flexb');
  resumoInit.style.display = 'block';
  fotoHeader.style.display = 'block';
  // resumoInit.style.opacity = '1';
  socialLinks.style.display = 'flex';
  // socialLinks.style.opacity = '1';
  flexb.style.display = 'block';
});

calcIdade();

