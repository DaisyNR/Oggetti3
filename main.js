let bowling = {
    'players': [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],

    new_Player : function (name) {
        let newPlayer = {'name': name, 'scores': []};
        this.players.push(newPlayer);
    },

    punteggi_casuali : function () {
        this.players.forEach(player =>{
            for (let i = 1; i <= 10; i++) {
                player.scores.push(Math.floor(Math.random() * (10 - 1 +1) + 1))
            }
            console.log(player.scores);     
        })
    },
    
    punteggi_finali: function () {
        this.players.forEach(player=>{
            player.finalscore = player.scores.reduce((acc, num)=> acc + num);
            // ho aggiunto una proprietà all'oggetto players per poi fare la classifica finale
        })
    },

    classifica_finale : function () {
        let classificaFinale = this.players.sort((a, b) => b.finalscore - a.finalscore);
        console.log(classificaFinale);
        this.players.forEach(player => {
            console.log(`${player.name} ha totalizzato ${player.finalscore} punti`);
        });
    },

    winner : function () {
        let winner = this.players[0]
        console.log(`Il vincitore è ${winner.name} con ${winner.finalscore} punti`);
    }

}

bowling.new_Player('Gianni')
bowling.punteggi_casuali()
bowling.punteggi_finali()
bowling.classifica_finale()
bowling.winner()
