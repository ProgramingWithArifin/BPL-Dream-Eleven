import React from 'react';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin}) => {
    const handleDelete=(player)=>{
        const filteredPlayers = selectedPlayers.filter(p=> p.name != player.name);
        setSelectedPlayers(filteredPlayers);
        setCoin(Number(coin)+Number(player.price));
        toast.success(`Successfully Removed ${player.name}`)
    }
    return (
        <div className='mt-6 border border-gray-300 p-4 rounded-lg space-y-10'>
        {
            selectedPlayers.length == 0
            ? <h2 className='text-center text-xl font-bold'>Please Select Player</h2>
            : selectedPlayers.map(player => (
                <div key={player.id} className='flex justify-between items-center w-full'>
                    <div className='flex gap-3'>
                        <img className='w-15 h-15 object-cover rounded-lg' src={player.image} alt="" />
                        <div>
                            <h2 className='font-bold text-lg'>Name: {player.name}</h2>
                            <p>Style: {player.style}</p>
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-error text-red-100' onClick={()=>handleDelete(player)}><MdDelete /></button>
                    </div>
                </div>
            ))
        }
    </div>
    );
};

export default SelectedPlayers;