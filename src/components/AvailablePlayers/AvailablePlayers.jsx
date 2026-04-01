import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({players, setCoin, coin, selectedPlayers, setSelectedPlayers}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {players.map(player=><PlayerCard selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin={coin} key={player.id} player={player}></PlayerCard>)}
        </div>
    );
};

export default AvailablePlayers;