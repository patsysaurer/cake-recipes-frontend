import React from 'react'
import mockUsers from './mockUsers.js'
import mockCakes from './mockCakes.js'

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [cakes, setCakes] = useState(mockCakes)

  return (
    <>
      <h1>Cake Recipe App</h1>
    </>
  )
}

export default App