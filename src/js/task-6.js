   function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    function createBoxes(amount) {
      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = ''; // Clear existing boxes

      const boxes = [];
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.push(box);
      }
      boxesContainer.append(...boxes);
    }

    function destroyBoxes() {
      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = '';
    }

    document.querySelector('[data-create]').addEventListener('click', () => {
      const input = document.querySelector('#controls input');
      const amount = parseInt(input.value, 10);

      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
      } else {
        alert('Please enter a number between 1 and 100.');
      }
      input.value = ''; // Clear the input
    });

    document.querySelector('[data-destroy]').addEventListener('click', () => {
      destroyBoxes();
    });
