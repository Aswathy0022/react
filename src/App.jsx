import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


      export default function App() {
        let districts = [
          {
            id: 1,
            title: "Trivandrum",
            desc: "Capital City",
            image:"https://trisoj.com/travel-guide/wp-content/uploads/2022/10/Places-to-visit-in-Trivandrum.png",
          },
          {
            id: 2,
            title: "Kollam",
            desc: "Port City",
            image: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg",
          },
          {
            id: 3,
            title: "Pathanamthitta",
            desc: "Pilgrim Center",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/17/fb/80/perunthenaruvi-waterfall.jpg?w=700&h=-1&s=1",
          },
          {
            id: 4,
            title: "Alappuzha",
            desc: "Backwater Destination",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg",
          },
          {
            id: 5,
            title: "Kottayam",
            desc: "Lakeside Retreat",
            image: "https://curlytales.com/wp-content/uploads/2022/10/Illickal_Kallu_1152-1170x658.jpg",
          },
          {
            id: 6,
            title: "Idukki",
            desc: "Hill Station",
            image: "https://keralatourism.travel/images/destinations/headers/idukki-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg",
          },
          {
            id: 7,
            title: "Ernakulam",
            desc: "Commercial Hub",
            image: "https://cdn.britannica.com/79/144379-050-8BC20473/festival-Vadakkumnathan-Temple-Thrissur-India-Kerala.jpg",
          },
          {
            id: 8,
            title: "Thrissur",
            desc: "Cultural Capital",
            image: "https://cdn.britannica.com/79/144379-050-8BC20473/festival-Vadakkumnathan-Temple-Thrissur-India-Kerala.jpg",
          },
          {
            id: 9,
            title: "Palakkad",
            desc: "Gateway to Kerala",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Palakkad_Fort_5.jpg",
          },
          {
            id: 10,
            title: "Malappuram",
            desc: "Land of Teak",
            image: "https://assets-news.housing.com/news/wp-content/uploads/2022/08/14104744/Top-tourist-attractions-in-Malappuram-and-things-to-do.jpg",
          },
          {
            id: 11,
            title: "Kozhikode",
            desc: "City of Spices",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Calicut_Beach.jpg",
          },
          {
            id: 12,
            title: "Wayanad",
            desc: "Green Paradise",
            image: "https://www.wayanad.com/files/slides/7110478409.jpg",
          },
          {
            id: 13,
            title: "Kannur",
            desc: "Land of Looms and Lores",
            image: "https://th-i.thgim.com/public/news/national/kerala/83tkmt/article25883708.ece/alternates/FREE_1200/02tvkr-palakkayamthattu",
          },
          {
            id: 14,
            title: "Kasaragod",
            desc: "Northernmost District",
            image: "https://www.keralatourism.org/images/destination/mobile/aquatourism_in_kasaragod20131107114603_306_1.jpg",
          },
        ];
      
        return (
          <div>
            <Container>
              <Row>
                {
                districts.map((e) => (
                  <Col key={e.id}>
                    <Card style={{ width: "15rem" }}>
                      <Card.Img variant="top" src={e.image} />
                      <Card border="dark" style={{ width: '15rem' }}></Card>
                      <Card.Body>
                        
                        <Card.Title>{e.title}</Card.Title>
                        <Card.Text>
                          {e.desc}
                        </Card.Text>
                        <Button variant="primary">read more</Button>
                        
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        );
      }
    
