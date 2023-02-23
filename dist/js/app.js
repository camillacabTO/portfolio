fetch('./js/backgroundAnimation.json')
  .then((response) => response.json())
  .then((json) => tsParticles.load('body', json))
