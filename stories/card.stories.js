export default {
  title: 'card',
}

export const Normal = () => /*html*/ `
<section data-js="card" class="card">
  <h2>Heading</h2>
  <p class="card__text card__text--question">
    Question ipsum dolor sit amet consectetur?
  </p>
  <div class="card__answer-container">
    <button class="card__answer-button">Show answer</button>

    <p class="text-answer hidden">
      Answer ipsum dolor sit amet consectetur.
    </p>
  </div>

  <ul class="tag-list p-0">
    <li>Lorem ipsum</li>
    <li>dolor sit</li>
    <li>amet consectetur</li>
  </ul>
</section>
`
