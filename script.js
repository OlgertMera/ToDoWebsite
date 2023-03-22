const input = document.getElementById('input');
const list = document.getElementById('list');

function addTask() {
  if (input.value !== '') {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const label = document.createElement('label');
    label.innerText = input.value;
    const button = document.createElement('button');
    button.innerText = 'Delete';
    button.addEventListener('click', () => {
      li.remove();
    });
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(button);
    list.appendChild(li);
    input.value = '';
  }
}
