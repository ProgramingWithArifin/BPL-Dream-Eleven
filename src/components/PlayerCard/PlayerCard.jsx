import { FaFlag, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const PlayerCard = ({ player, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
    const isSelected = selectedPlayers.some(p => p.id === player.id);
    const cardBtn = () => {
    if (coin >= player.price) {
        setCoin(coin - player.price);
        setSelectedPlayers([...selectedPlayers, player]);
        toast.success(`Successfully Added ${player.name}`)
    } else {
        toast.error("Not Enough Money")
    }
}
    return (
        <div className="card bg-base-100 shadow-sm w-full max-w-100 mx-auto ">
            <figure>
                <img
                    className='w-full object-cover h-75'
                    src={player.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><FaUser></FaUser> {player.name}</h2>
                <div className='flex justify-between items-center text-gray-600'>
                    <div className='flex gap-2 items-center'>
                        <FaFlag></FaFlag>
                        <p>{player.country}</p>
                    </div>
                    <div>
                        {player.role}
                    </div>
                </div>
                <div className="divider bg-gray-100"></div>
                <div className='flex justify-between items-center text-gray-900 text-[16px]'>
                    <h2 className='font-bold'>
                        Rating
                    </h2>
                    <div>
                        {player.rating}
                    </div>
                </div>
                <div className='flex justify-between items-center text-gray-900 text-[16px]'>
                    <h2 className='font-bold'>
                        Bating
                    </h2>
                    <div>
                        {player.style}
                    </div>
                </div>
                <div className='flex justify-between items-center text-gray-900 text-[16px]'>
                    <h2 className='font-bold'>
                        Bowling
                    </h2>
                    <div>
                        {player.bowling}
                    </div>
                </div>
                <div className='flex justify-between items-center text-gray-900 text-[16px]'>
                    <h2 className='font-bold'>
                        Price:${player.price}
                    </h2>
                    <div>
                        <button onClick={cardBtn} disabled={isSelected?true:false} className='btn btn-warning text-black'>{isSelected?'Selected':'Select Now'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;