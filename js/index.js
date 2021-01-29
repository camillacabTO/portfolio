const lines = document.querySelectorAll('.line')
const progressBar = document.querySelectorAll('.progress')
const projectsBoxes = document.querySelectorAll('.projects-box')
const firstProjectBox = document.querySelector('#first-project-box')

const isInViewport = el => {
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
  lines.forEach(line => {
    if (isInViewport(line)) {
      line.classList.add('line-expanded')
    }
  })
  progressBar.forEach(bar => {
    if (isInViewport(bar)) {
      switch (bar.id) {
        case 'css':
          bar.style.width = '75%'
          break
        case 'js':
          bar.style.width = '80%'
          break
        case 'node':
          bar.style.width = '75%'
          break
        case 'react':
          bar.style.width = '50%'
          break
        case 'api':
          bar.style.width = '80%'
          break
        case 'sql':
          bar.style.width = '85%'
          break
        case 'java':
          bar.style.width = '75%'
          break
        case 'ios':
          bar.style.width = '60%'
          break
        case 'cpp':
          bar.style.width = '65%'
          break
        default:
          break
      }
    }
  })

  projectsBoxes.forEach(box => {
    if (isInViewport(firstProjectBox)) {
      box.classList.contains('box-top')
        ? box.classList.add('swing-in-top-fwd')
        : box.classList.add('swing-in-bottom-fwd')
    }
  })
}

window.addEventListener('load', run)
window.addEventListener('resize', run)
window.addEventListener('scroll', run)
