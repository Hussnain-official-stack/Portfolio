    // alert
alert('Good luck! Hope you get a good experience!');
// ── GRAB ELEMENTS FROM THE PAGE ──
const ratingCard   = document.getElementById('rating-card');
const thankyouCard = document.getElementById('thankyou-card');
const submitBtn    = document.getElementById('submit-btn');
const ratingBtns   = document.querySelectorAll('.rating-btn');
const selectedSpan = document.getElementById('selected-rating');
const rateAgainBtn = document.getElementById('rate-again-btn');

// Keeps track of which number user clicked (null = nothing selected yet)
let selectedRating = null;

// ── STEP 1: RATING BUTTON CLICK ──
ratingBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {

    // Remove .active from ALL buttons first
    ratingBtns.forEach(function(b) {
      b.classList.remove('active');
    });

    // Add .active to the one that was clicked
    btn.classList.add('active');

    // Save the clicked number (btn.textContent = "1", "2" etc.)
    selectedRating = btn.textContent;
  });
});

// ── STEP 2: SUBMIT BUTTON CLICK ──
submitBtn.addEventListener('click', function() {

  // If user hasn't picked a number yet, do nothing
  if (selectedRating === null) {
    // Shake the rating buttons to hint user to pick one
    const list = document.querySelector('.rating-list');
    list.style.animation = 'none';
    list.offsetHeight; // force reflow
    list.style.animation = 'shake 0.3s ease';
    return;
  }

  // Put the selected number into the thank you card
  selectedSpan.textContent = selectedRating;

  // Hide rating card, show thank you card
  ratingCard.style.display   = 'none';
  thankyouCard.style.display = 'flex';
});

rateAgainBtn.addEventListener('click', function() {
  // Reset selected rating
  selectedRating = null;

  // Remove .active from all rating buttons
  ratingBtns.forEach(function(b) {
    b.classList.remove('active');
  });

  // Show rating card, hide thank you card
  ratingCard.style.display = 'block';
  thankyouCard.style.display = 'none';
})