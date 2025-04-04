function toggleHeart(button) {
    const heart = button.nextElementSibling; // قلب در کنار دکمه پسندیدن
    const likeCount = heart.nextElementSibling; // شمارنده در کنار قلب
    let count = parseInt(likeCount.textContent);

    if (heart.style.display === 'none' || heart.style.display === '') {
        heart.textContent = '💕'; // اضافه کردن قلب
        heart.style.display = 'inline'; // نمایش قلب
        count += 1; // افزایش شمارنده
    } else {
        heart.style.display = 'none'; // مخفی کردن قلب
        count = 0; // تنظیم شمارنده به 0
    }

    likeCount.textContent = count; // به‌روزرسانی متن شمارنده
}
