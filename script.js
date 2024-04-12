//toggle icon navbar
let menuIcon=document.getElementById('menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}


//scroll sections
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a')

window.onscroll=()=>{
sections.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.offsetTop-150;

    let height=sec.offsetHeight;

    let id=sec.getAttribute('id');

    if(top>= offset && top<offset+height){
        //navbar linki aktive et mavi yapıyor navbardaki yazının rengini hangi sayfadaysa
        navLinks.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+id+']').classList.add('active');
        });
        sec.classList.add('show-animate');

    }
    else{
        sec.classList.remove('show-animate');
    }
});
    //yapışan başlık 
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);


    // remove toggle icon
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

//Read More
let readButton = document.getElementById('read');
let descriptionBox = document.querySelector('.description-box');

readButton.onclick = function() {
    let computedStyle = window.getComputedStyle(descriptionBox); // Gerçek CSS değerlerini al

    if (computedStyle.height === '150px') {
        descriptionBox.style.height = 'auto';
        descriptionBox.style.transition = 'height 0.5s ease'; // Yumuşak açılma efekti
        readButton.querySelector('.btn').textContent = 'Daha Az Göster';
    } else {
        descriptionBox.style.height = '150px';
        descriptionBox.style.transition = ' 0.5s ease'; // Yumuşak açılma efekti
        readButton.querySelector('.btn').textContent = 'Devamını Oku';
    }
    
   
   
};
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress .bar span');

    progressBars.forEach(bar => {
        const width = bar.parentElement.parentElement.querySelector('span').textContent; // Her barın yüzdesini al
        bar.style.width = width; // Genişliği yüzde değerine göre ayarla
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle

        // Telefon numarasının değerini al
        const phone = form.querySelector('input[name="phone"]').value;

        // Telefon numarasının uzunluğunu kontrol et
        if (phone.length !== 11) {
            alert('Telefon numarası 11 haneli olmalıdır.');
            return; // Göndermeyi durdur
        }

        // Formu gönder
        fetch(form.action, {
            method: form.method,
            body: new FormData(form)
        })
        .then(response => {
            if (response.ok) {
                alert('Mail başarıyla gönderildi.');
                form.reset(); // Formu temizle
            } else {
                alert('Form gönderilirken bir hata oluştu.');
            }
        })
        .catch(error => {
            console.error('Form gönderme hatası:', error);
            alert('Form gönderilirken bir hata oluştu.');
        });
    });
});