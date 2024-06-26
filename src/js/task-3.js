    document.getElementById('name-input').addEventListener('input', function(event) {
      const input = event.target.value.trim();
      document.getElementById('name-output').textContent = input || 'Anonymous';
    });