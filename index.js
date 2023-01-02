const ratingConEl = document.querySelector('.rating-container');
const starEl = ratingConEl.querySelectorAll('.star');
const emojiConEl = document.querySelector('.emoji-container');

for (const [index, el] of starEl.entries()) {
    el.addEventListener('click', () => {
        const elIndex = index;
        if (!el.classList.contains('full')) {
            for (let i = 0; i <= elIndex; i++) {
                starEl[i].src = '/files/starFull.svg';
                starEl[i].classList.add('full');
            }
        } else {
            for (let i = 4; i > elIndex; i--) {
                starEl[i].src = '/files/starEmpty.svg';
                starEl[i].classList.remove('full');
            }
        }
        emojiConEl.style.transform = `translate(${109 - elIndex * 54}px)`;
    });
}