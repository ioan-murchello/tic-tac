import { useState } from 'react';

const Player = ({ name, symbol, onChangeName, active }) => {
  let [initialName, setInitialName] = useState(name);
  const [edit, setEdit] = useState(false);

  const handleEditClick = () => {
    setEdit((edit) => !edit);

    if (edit) {
      onChangeName(symbol, initialName);
    }
  };

  if (initialName.length > 15) {
    initialName = initialName.slice(0, 15);
  }

  const handleName = (e) => {
    setInitialName(e.target.value);
  };

  let player = (
    <div className='flex items-center'>
      <span className='text-white text-ellipsis truncate'>{initialName}</span>
    </div>
  );

  if (edit) {
    player = (
      <div className='flex text-ellipsis truncate ... flex-wrap break-words items-center '>
        <input
          className='max-w-28 w-full'
          type='text'
          value={initialName}
          onChange={handleName}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex justify-between gap-x-3 p-3 ${
        active ? 'border border-orange-400 shadow-lg shadow-orange-700 ' : ''
      }`}
    >
      <div
        className={`flex gap-x-3 px-4 py-2 bg-black items-center ${
          active ? 'bg-black/50' : ''
        }`}
      >
        {player}
        <div className='h-full text-2xl capitalize text-white'>{symbol}</div>
      </div>
      <button
        className='bg-black border p-3 text-white'
        onClick={handleEditClick}
      >
        {edit ? 'save' : 'edit'}
      </button>
    </div>
  );
};
export default Player;
