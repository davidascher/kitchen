function setFavorite(fave, userId, componentId) {
  $.ajax('/api/favorite', {
    data: {
      componentId: componentId,
      userId: userId,
      favorite: fave
    },
    type: 'post',
    success: function (data) {
    },
    error: function (data, err) {
      console.log("Error setting a favorite flag", err);
    }
  });
}
function toggleStar(star, userId, componentId) {
  var starCount = document.querySelector("#star-" + componentId);
  if (star.classList.contains('fa-star-o')) {
    star.classList.remove('fa-star-o');
    star.classList.add('fa-star');
    setFavorite(true, userId, componentId);
    starCount.textContent = String(Number(starCount.textContent) + 1);
  } else {
    star.classList.remove('fa-star');
    star.classList.add('fa-star-o');
    setFavorite(false, userId, componentId);
    starCount.textContent = String(Number(starCount.textContent) - 1);
  }
}