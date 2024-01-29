import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { NavLink } from "react-router-dom"

const CakeProtectedIndex = ({ cakes, currentUser }) => {
  const myCakes = apartments.filter(cake => currentUser.id === cake.user_id)
  console.log(myCakes)
  return (
    <div className='cakes-body'>
      <h3 className="text-center my-5">MY CAKE RECIPES:</h3>
      <div className='d-flex flex-column flex-md-row justify-content-evenly align-items-center gap-4'>
        {myCakes.map((cake, index) => {
          return (
            <Card key={index} style={{ width: "18rem"}}>
            <img alt="Cake Image" src={cake.cakeImage} />
            <CardBody>
              <CardTitle tag="h5" style={{ color: "var(--primary-color)" }}>
                <b>{cake.cakeName}</b>
              </CardTitle>
              <CardSubtitle
                className="mb-2"
                tag="h6"
                style={{ color: "var(--secondary-dark)" }}
              >
                <i>Serves: {cake.cakeServings} </i>
              </CardSubtitle>
              <CardText>{cake.cakeDescription}</CardText>
              <CardSubtitle>
                <NavLink to={`/cakeshow/${cake.id}`} className="nav-link">
                  <Button
                    style={{
                      backgroundColor: "var(--secondary-color)",
                      borderColor: "var(--secondary-color)",
                      color: "var(--primary-dark)",
                      marginTop: "25px",
                    }}
                  >
                    View Recipe
                  </Button>
                </NavLink>
              </CardSubtitle>
              <button className='mx-2 my-2 btn btn-dark'>Edit</button>
              <button className='mx-2 my-2 btn btn-danger'>Delete</button>
            </CardBody>
          </Card>
          )
        })}
      </div>
    </div>
  )
}
export default CakeProtectedIndex