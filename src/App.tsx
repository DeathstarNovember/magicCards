import { useState } from 'react'

const App = () => {
  const [cardCount, setCardCount] = useState<number>(5)

  const cards = new Array(cardCount).fill(null)

  const maxNumber = 2 ** cardCount - 1

  const addCard = () => {
    if (cardCount < 10) {
      setCardCount(cardCount + 1)
    }
  }

  const removeCard = () => {
    if (cardCount > 1) {
      setCardCount(cardCount - 1)
    }
  }

  return (
    <div
      style={{
        backgroundColor: '#444',
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        minHeight: '100vh',
        alignItems: 'center',
        gap: '50px',
      }}
    >
      <p style={{ fontSize: '40px', color: 'white' }}>Magic Cards</p>
      <div style={{ display: 'flex', gap: 50 }}>
        <button style={{ height: '50px', width: '50px' }} onClick={addCard}>
          +
        </button>
        <p style={{ color: 'white' }}>{cardCount}</p>
        <button style={{ height: '50px', width: '50px' }} onClick={removeCard}>
          -
        </button>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(3, 1fr)`,
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        {cards.map((_bit, cardIndex) => {
          const numbers = new Array(maxNumber).fill(null).map((_e, i) => i + 1)

          const numbersForThisCard = numbers.filter((number) => {
            return (number & (1 << cardIndex)) > 0
          })

          const sideSize = Math.ceil(Math.sqrt(numbersForThisCard.length))

          const size = sideSize * 50

          return (
            <div
              key={cardIndex}
              style={{
                padding: '10px',
                display: 'grid',
                gridTemplateColumns: `repeat(${sideSize}, 1fr)`,
                gridTemplateRows: `repeat(${sideSize}, 1fr)`,
                backgroundColor: '#fff',
                width: size,
                height: size,
              }}
            >
              {numbersForThisCard.map((number) => (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bold',
                  }}
                  key={`${cardIndex}${number}`}
                >
                  {number}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default App
