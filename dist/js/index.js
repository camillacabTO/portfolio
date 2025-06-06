const lines = document.querySelectorAll('.line')
const projectsBoxes = document.querySelectorAll('.projects-box')
const firstProjectBox = document.querySelector('#first-project-box')
const form = document.querySelector('#contact-form')
const subMessage = document.querySelector('#submission-message')

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

const run = () => {
  lines.forEach((line) => {
    if (isInViewport(line)) {
      line.classList.add('line-expanded')
    }
  })

  // projectsBoxes.forEach(box => {
  //   if (isInViewport(firstProjectBox)) {
  //     box.classList.contains('box-top')
  //       ? box.classList.add('swing-in-top-fwd')
  //       : box.classList.add('swing-in-bottom-fwd')
  //   }
  // })
}

window.addEventListener('load', run)
window.addEventListener('resize', run)
window.addEventListener('scroll', run)

document.addEventListener('DOMContentLoaded', function () {
  var gallery = document.querySelectorAll('.materialboxed')
  M.Materialbox.init(gallery, {})
})

form.addEventListener('submit', (e) => {
  // e.preventDefault()
  e.target.reset()
  subMessage.style.display = 'block'
})

window.scroll({
  top: 2500,
  left: 0,
  behavior: 'smooth',
})

// Scroll certain amounts from current position
window.scrollBy({
  top: 0,
  left: 0,
  behavior: 'smooth',
})

// Scroll to a certain element
document.querySelector('.hello section').scrollIntoView({
  behavior: 'smooth',
})

document.getElementById('action').onclick = (e) =>
  history.pushState({}, '', '#about')
