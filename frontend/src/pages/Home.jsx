import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner.jsx';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState([false]);
  useEffect(() => {
    
  })
  return (
    <div>Home</div>
  )
}

export default Home