// search-bar.js
const gamePages = [
  { title: 'Lapdance Dash', url: 'https://browndoggames.com/Lapdance-Dash.html' },
  { title: 'Naked Craft', url: 'https://browndoggames.com/naked-craft.html' },
  { title: 'Butt Blaster Arena', url: 'https://browndoggames.com/butt-blaster-arena.html' },
  { title: 'Streaker Run', url: 'https://browndoggames.com/streaker-run.html' },
  { title: 'Pet Penis Simulator', url: 'https://browndoggames.com/pet-penis-simulator.html' },
  { title: 'Naked Fang', url: 'https://browndoggames.com/naked-fang.html' },
  { title: 'Climax Clash', url: 'https://browndoggames.com/Climax-Clash.html' },
  { title: 'Shafted', url: 'https://browndoggames.com/Shafted.html' },
  { title: 'She Comes First', url: 'https://browndoggames.com/She-Comes-First.html' }
];

const searchInput = document.getElementById('game-search-input');
const suggestionsDropdown = document.getElementById('suggestions-dropdown');
let highlightedIndex = -1;

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();

  if (query) {
    const firstLetterMatches = gamePages.filter(game =>
      game.title.toLowerCase().startsWith(query[0])
    );

    const results = firstLetterMatches.concat(gamePages.filter(game =>
      game.title.toLowerCase().includes(query) && !game.title.toLowerCase().startsWith(query[0])
    ));

    if (results.length > 0) {
      suggestionsDropdown.style.display = 'block';
      suggestionsDropdown.innerHTML = '';

      results.forEach((game, index) => {
        const suggestionItem = document.createElement('div');
        suggestionItem.style.padding = '8px 12px';
        suggestionItem.style.cursor = 'pointer';
        suggestionItem.style.transition = 'background-color 0.2s';
        suggestionItem.innerHTML = game.title;

        suggestionItem.addEventListener('mouseover', () => {
          suggestionItem.style.backgroundColor = '#ff69b4';
          suggestionItem.style.color = '#1e1b2e';
        });

        suggestionItem.addEventListener('mouseout', () => {
          if (highlightedIndex !== index) {
            suggestionItem.style.backgroundColor = 'transparent';
            suggestionItem.style.color = '#fefefe';
          }
        });

        suggestionItem.addEventListener('click', () => {
          window.location.href = game.url;
        });

        suggestionsDropdown.appendChild(suggestionItem);
      });
    } else {
      suggestionsDropdown.style.display = 'none';
    }
  } else {
    suggestionsDropdown.style.display = 'none';
  }
});

searchInput.addEventListener('keydown', (e) => {
  const suggestions = suggestionsDropdown.querySelectorAll('div');

  if (e.key === 'ArrowDown') {
    if (highlightedIndex < suggestions.length - 1) {
      highlightedIndex++;
      updateHighlightedItem(suggestions);
    }
  } else if (e.key === 'ArrowUp') {
    if (highlightedIndex > 0) {
      highlightedIndex--;
      updateHighlightedItem(suggestions);
    }
  } else if (e.key === 'Enter' && highlightedIndex >= 0) {
    suggestions[highlightedIndex].click();
  }
});

function updateHighlightedItem(suggestions) {
  suggestions.forEach((item, index) => {
    if (index === highlightedIndex) {
      item.style.backgroundColor = '#ff69b4';
      item.style.color = '#1e1b2e';
    } else {
      item.style.backgroundColor = 'transparent';
      item.style.color = '#fefefe';
    }
  });
}

document.addEventListener('click', (event) => {
  if (!searchInput.contains(event.target) && !suggestionsDropdown.contains(event.target)) {
    suggestionsDropdown.style.display = 'none';
  }
});

document.getElementById('search-button').addEventListener('click', () => {
  const query = searchInput.value.trim().toLowerCase();
  const result = gamePages.find(game => game.title.toLowerCase() === query);

  if (result) {
    window.location.href = result.url;
  } else {
    alert('No game found for your search.');
  }
});
