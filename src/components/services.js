import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
    {
      id: 1,
      icon: 'fas fa-clone',
      title: 'САБР',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
      id: 2,
      icon: 'fas fa-snowflake',
      title: 'АРАКЕТ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
      id: 3,
      icon: 'fas fa-plug',
      title: 'УБАКЫТ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
      id: 4,
      icon: 'fas fa-desktop',
      title: 'БИЛБЕГЕНИҢДИ СУРОО',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
      id: 5,
      icon: 'fas fa-trophy',
      title: 'АНГЛИС ТИЛИН ҮЙРӨНҮҮ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
      id: 6,
      icon: 'fas fa-life-ring',
      title: 'САБАКТАРДЫ КАЛТЫРБОО',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    }
  ]

function AppServices(){
    return(
        <section id="services" className="block services-block">
        <Container>
        <div className='title-holder'>
            <h2>ПРОГРАММИСТ БОЛУУ ҮЧҮН ЭМНЕ КЫЛУУ КЕРЕК?</h2>
            <div className='subtitle'>ОКУРМЕНГЕ ОКУУ КЕРЕК</div>
        </div>
        <Row>
        {
            servicesData.map((services) => {
                return(
                    <Col sm={4} className='holder' key={services.id}>
                    <div className='icon'>
                    <i className={services.icon}></i>
                    </div>
                    <h3>{services.title}</h3>
                    <p>{services.id}</p>
                 </Col>
                )
            })
        }
        </Row>
        </Container>
        </section>
    );
}

export default AppServices;