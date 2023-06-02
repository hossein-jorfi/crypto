import React from 'react';
import { useState, useEffect } from 'react';

const index = () => {

  // const [variableNameTwo, setVariableNameTwo] = useState([]);
  // useEffect(() => {
  //   // setLoading(true);
  //   const fetchBlogData = async () => {
  //     const blgData = await fetch(
  //       'https://academy.finobit.io/wp-json/wp/v2/posts?_embed&order=desc&status=publish'
  //     );
  //     const blgJsnData = await blgData.json();
  //     console.log(blgJsnData);
  //   };
  //   fetchBlogData();
  // }, []);

  return (
    <div className='container'>
      <h1 className='container'>test</h1>
    </div>
  );
};

export default index;

// export const getServerSideProps = async () => {
//   const variableName = await fetch('https://academy.finobit.io/wp-json/wp/v2/posts')
//   const variableNameTwo = await variableName.json()
//   return {
//     props: {
//       variableNameTwo,
//     }
//   }
// }