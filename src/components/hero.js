import Carousel from 'react-bootstrap/Carousel';

let heroData = [
    {
      id: 1,
      image: require('../assets/img-hero1.jpg'),
      title: '"ОКУРМЕН" КЫРГЫЗ ТИЛДҮҮ IT АКАДЕМИЯ',
      description: 'Практик тренерлерден окуп 6 айда ПРОГРАММИСТ бол!',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      image: require('../assets/img-hero2.jpg'),
      title: 'IT-БУЛ ЗАМАНДЫН ТАЛАБЫ ЖАНА КЕРЕКТӨӨСҮ',
      description: 'Биздин бүтүрүүчүлөр ЭҢ МЫКТЫ компанияларда иштешет',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: require('../assets/img-hero3.jpg'),
      title: 'IT-БУЛ ЖАҢЫ БАГЫТ',
      description: 'Эч экзамендерсиз ОКУРМЕН окуу борборунан IT адистигин 4 жылда эмес, болгону 6 айда окууга мүмкүнчүлүк бар',
      link: 'https://www.twitter.com'
    }
  ]

function AppHero(){
    return(
        <section id="home" className="hero-block">
        <Carousel>
        {
            heroData.map((hero) => {
                return(
                    <Carousel.Item key={hero.id}>
                    <img src={hero.image} alt={"slide" + hero.id}/>
                    <Carousel.Caption>
                      <h3>{hero.title}</h3>
                      <p>{hero.description}</p>
                      <a className="btn btn-primary" href={hero.link}>
                      ТОЛУК МААЛЫМАТ 
                      </a>
                    </Carousel.Caption>
                  </Carousel.Item>  
                );
            })
        }
      


    </Carousel>
        </section>
    );
};

export default AppHero
