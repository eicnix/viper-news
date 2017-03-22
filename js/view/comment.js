module.exports = (render, model) => render`
<article class='comment'>
  <span class='meta'><a href='${`/user/${model.by}`}'> ${model.by} </a> ${mode.timebetween} ago</span>
  <div class='body'>
    <p>${model.text}</p>
  </div>
  <ul class='${model.children.length ? 'children' : 'hidden'}'>${
    model.children.map(li => li.render())
  }</ul>
</article>`;
