import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Card.css';
function NewsItems(props) {
  return (
    <Card className='card'>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default NewsItems;