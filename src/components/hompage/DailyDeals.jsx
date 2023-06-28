import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Card, Button } from 'react-bootstrap';
import Drone from '../../assets/dronep.jpg';
import S23 from '../../assets/s23-ultrap.jfif';
import Watch from '../../assets/smartwatchp.jpg';
import Hoodie from '../../assets/hoodiesp.webp';

const DailyDeals = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  let username = '';
  if (currentUser) {
    const email = currentUser.email;
    username = email.split('@')[0];
  }

  // Sample data for the products
  const products = [
    {
      id: 1,
      name: '3D HD Drones',
      price: '$9.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: Drone,
    },
    {
      id: 2,
      name: 'S23 Ultra',
      price: '$19.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: S23,
    },
    {
      id: 3,
      name: 'Indie Hoodie',
      price: '$29.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: Hoodie,
    },
    {
      id: 4,
      name: 'Apple Smartwatch',
      price: '$39.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: Watch,
    },
  ];

  return (
    <div>
      <h3 className="text-center">Daily Deals</h3>
      <br/>
      <br/>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> {product.price}
                  <br />
                  <strong>Description:</strong> {product.description}
                  <br />
                  <strong>Created by:</strong> {username}
                  <br />
                </Card.Text>
                <Button variant="primary">Contact Seller</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyDeals;
