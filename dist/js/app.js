fetch('./js/snow.json')
  .then((response) => response.json())
  .then((json) => tsParticles.load('body', json))

// ;(async () => {
//   await loadLinksPreset(tsParticles) // this is required only if you are not using the bundle script

//   await tsParticles.load('banner', {
//     preset: 'links',
//   })
// })()

// ;(async () => {
//   await loadSnowPreset(tsParticles) // this is required only if you are not using the bundle script

//   await tsParticles.load('banner', {
//     preset: 'snow',
//   })
// })()

// tsParticles.load('tsparticles', {
//   particles: {
//     shape: {
//       type: 'square', // starting from v2, this require the square shape script
//     },
//   },
//   preset: 'snow',
// })
