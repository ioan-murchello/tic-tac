const GameOver = ({winner, restart}) => {
  return (
    <div className="w-full h-full sm:h-3/4 sm:w-2/4 font-['Montserrat'] bg-gray-100 absolute left-0 right-0 top-0 sm:top-20 mx-auto rounded-xl p-40 flex shrink-0 grow-0 gap-y-5 flex-col justify-center items-center game-over">
      <h1 className='text-5xl text-center sm:text-7xl'>Game Over!</h1>
      {winner && (
        <p className='text-center text-lg sm:text-3xl'>{winner} won!</p>
      )}
      {!winner && <p className='text-lg sm:text-3xl'>It&apos;s draw!</p>}
      <button
        className='text-xl sm:text-2xl bg-black py-4 px-5 text-white rounded-md transition-all duration-200 hover:bg-gray-600 hover:scale-105'
        onClick={restart}
      >
        Rematch
      </button>
    </div>
  );
}
export default GameOver