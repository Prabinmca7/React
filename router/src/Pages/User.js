import React from 'react';
import { useParams } from 'react-router-dom';

export function User() {
  const { id } = useParams();
  return <h2>User Page for ID: {id}</h2>;
}
