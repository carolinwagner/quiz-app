export default {
  title: 'Demo',
}

export const Heading = () => '<h1>Hello World</h1>'

export const Button = () => {
  const btn = document.createElement('button') // <button></button>
  btn.type = 'button' // <button type="button"></button>
  btn.innerText = 'Hello Button' // <button type="button">Hello Button</button>
  btn.addEventListener('click', (event) => console.log(event))
  return btn
}
