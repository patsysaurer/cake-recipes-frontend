import React from 'react'

const CakeProtectedIndex = ({cakes, currentUser}) => {
  const myCakes = cakes.filter(
    (cake) => currentUser?.id === cake.user_id
  )
  return (
    <div>CakeProtectedIndex</div>
  )
}

export default CakeProtectedIndex