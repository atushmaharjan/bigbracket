// function myFunction() {
//     location.replace("redirect.html")
//   }


  window.addEventListener('load', ()=>{
    const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const email = params.get('email');
    const mobile = params.get('phone');
    const domainName = params.get('domainName');
    const domainExtension = params.get('domainExtension');

    document.querySelectorAll('.name').forEach(item=>{
        item.innerText = name
    })
    document.querySelector('#email').innerText = email
    document.querySelector('#mobile').innerText = mobile
    document.querySelectorAll('.domain-extension').forEach(item=>{
        item.innerText = domainName+"."+domainExtension
    })
    document.querySelector('#just-domain-extension').innerText = domainExtension
})