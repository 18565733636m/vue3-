export function _notice(val: any) {
  const div = document.createElement('div')
  div.classList.add('global-notice')
  div.textContent = val
  document.body.append(div)
  setTimeout(() => {
    document.body.removeChild(div)
  }, 1000)
}
