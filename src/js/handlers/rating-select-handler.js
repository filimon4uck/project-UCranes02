export default function handleSetRating (e) {
    // debugger;
    const rating = e.target.closest('.rating');
    if (!rating) return;

    const ratingInputs = rating.querySelectorAll('[name="rate"]');
    const ratingLabel = rating.parentElement.firstElementChild;

    ratingInputs.forEach((input) => {
        if (input.checked) {
            ratingLabel.textContent = input.value + '.0';        
        }
    });
}
