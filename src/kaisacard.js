import Card from 'react-bootstrap/Card';

export default function kaisaCards (){
    return   (<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
      Some quick example text to build on the card title and make up the
          bulk of the card's content
      </Card.Text>
      </Card.Body>
    </Card>)
}