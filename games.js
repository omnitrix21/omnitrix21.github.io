document.addEventListener('DOMContentLoaded', () => {
    const games = [
        { id: '1', name: 'Terminal Tic-Tac-Toe' },
        { id: '2', name: 'Code Breaker' },
        { id: '3', name: 'Text-based Adventure' }
    ];

    const gamesListContainer = document.getElementById('games-list');
    
    const gamesListHTML = games.map(game => `
        <div class="game-item">
            <a href="#">${game.name}</a>
            <p style="font-size: 10px; opacity: 0.8; margin-top: 5px;">(Coming Soon!)</p>
        </div>
    `).join('');

    gamesListContainer.innerHTML += gamesListHTML;
});