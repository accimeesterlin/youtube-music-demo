import { useEffect, useState } from 'react'

import Image from 'next/image'
import {
  Flex,
} from '@chakra-ui/react';
import axios from 'axios'
// TODO: Fetch Music from this platform 


import MusicCard from './card'


const HomePage = () => {

  const [music, setMusic] = useState([]);

  useEffect(() => {
    fetchMusic();
  }, []);


  const fetchMusic = async () => {
    try {

      const { data } = await axios("/api/music");
      console.log("Data: ", data)
      setMusic(data?.response);
      return data;

    } catch (error) {
      return error?.response?.data;
    }
  }

  const renderImages = (images = []) => {


    return music?.map((singleMusic, index) => {

      console.log("Single Music: ", singleMusic);

      return <MusicCard key={index} singleMusic={singleMusic} />
      // return <img layout="fill" key={index} src={singleMusic?.img} alt="" />
    });
  }




  return <>
    <h1>Welcome to the Live Music Page</h1>

    <Flex justify="center" alignItems="center" wrap="wrap">
      {renderImages(music)}
    </Flex>
  </>
}

export default HomePage;