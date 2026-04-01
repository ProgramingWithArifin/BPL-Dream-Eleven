import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const PlayerSection = ({playersPromise, setCoin, coin}) => {
    const [selectType, setSelect]= useState('available')
    const [selectedPlayers, setSelectedPlayers]=useState([])
    const players = use(playersPromise);
    return (
        <div className='w-11/12 mx-auto space-y-5'>
            <div className="sub-header flex justify-between">
                <h2 className='text-2xl font-bold'>{selectType=='available'&&'Available'} {selectType=='selected'&&'Selected'}</h2>
                <div className="btn-section flex gap-3">
                    <button className={`btn btn-warning ${selectType == 'available'?'btn-active text-white':'btn-outline'}`} onClick={()=>setSelect('available')}>Available({players.length-selectedPlayers.length})</button>
                    <button className={`btn btn-warning ${selectType == 'selected'?'btn-active text-white':'btn-outline'}`} onClick={()=>setSelect('selected')}>Selected({selectedPlayers.length})</button>                 
                </div>
            </div>
            {
                selectType=='available'?
                <AvailablePlayers players={players} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></AvailablePlayers>:
                <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin={coin}></SelectedPlayers>
            }
        </div>
    );
};

export default PlayerSection;