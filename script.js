// تغيير لون الخلفية والحذاء
const colors = document.querySelectorAll('.color');
const bg = document.querySelector('.bg-circle');
colors.forEach(color => {
  color.addEventListener('click', () => {
    let newColor = color.getAttribute('data-color');
    bg.style.background = newColor;
    document.querySelector('.btn').style.background = newColor;
    document.querySelector('h2 span').style.color = newColor;
  })
})

// سلة بسيطة
let cartCount = 0;
document.querySelector('.add-to-cart').addEventListener('click', () => {
  cartCount++;
  document.querySelector('.cart span').innerText = cartCount;
  alert('تمت اضافة المنتج للسلة');
})



