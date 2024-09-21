import React from 'react';
import '../styles/Instructions.css'; // Proper relative path

const Instructions = () => {
  const data = [
    {
      text: 'Step 1: Open the OBE Documentation Software from the link above.',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1725979674/eduqqz74amqocabnrcnb.png'
    },
    {
      text: 'Step 2: Register admin, coordinators and teachers',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1725979980/obe%20documentation/ivg45a62geyinkr37wrf.png'
    },
    {
      text: 'Step 3: Login as Admin',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1725985570/obe%20documentation/mm76tfs75tpyqv2lazxu.png'
    },
    {
      text: 'Step 4: Select Course Mapping and enter details of courses using excel sheet',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1725985582/obe%20documentation/ueuwb8zcbvx6xfnjog0b.png'
    },
    {
      text: 'Download sample excel',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1725985600/obe%20documentation/twu3eu9x3ltipjlr5nbm.png'
    },
    {
      text: 'Upload the excel',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1725985617/obe%20documentation/px31zctftcsw7ioiywdw.png'
    },
    {
      text: 'View data as per your choice',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1725985631/obe%20documentation/dzgttpav75wqwe4cyizr.png'
    },
    {
      text: 'Go to coordinator allotment',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1725985641/obe%20documentation/crpgzftijpldu4f1wfht.png'
    } ,{
      text: 'Select course,year,sem,subject and assign coordinators for the same',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1725985660/obe%20documentation/yozcjfvmjvsflua80fpg.png'
    }
    ,{
      text: "Set coordinators or remove them as per requirements,the selected users will only be allowed to login as coordinators using their id's",
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1725985660/obe%20documentation/yozcjfvmjvsflua80fpg.png'
    },{
      text: 'Go to teacher allotment',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1726946174/obe%20documentation/cg5pj93mnvxopshqlgo1.png'
    },{
      text: 'Select course,year,sem,subject and assign teachers for the same',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1726944262/obe%20documentation/rbkpcwnw9j0izzx8wnkc.png'
    },{
      text: 'View list of available teachers and assign them for the subject as required',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1726946307/obe%20documentation/olzjjwiuqf5wfzjqjcmz.png'
    },{
      text: 'Add new faculty,if required',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1726944400/obe%20documentation/uzuydksdlmtqdshdiozo.png'
    },{
      text: 'Coordinator Login',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1726948322/coordinator/ustjlkcvj0l39ljahzbv.png'
    },{
      text: 'Open Attainment,select course outcome and then select course to enter data',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1726948404/coordinator/qmmd4dfiwwhg4gui2wlz.png'
    },{
      text: 'Select courses from the list of courses assigned to you',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1726948514/coordinator/r4rrvtuzy09g7i8zt7te.png'
    },{
      text: 'Add course outcomes,modules,evaluation criteria,recommended reading materials and reference books',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1726949180/coordinator/gzslk1usnblkqmpnxxzd.png'
    },{
      text: 'Print the document if required(proper formatting will be done automatically)',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1725985660/obe%20documentation/yozcjfvmjvsflua80fpg.png'
    },{
      text: '',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1726949344/coordinator/qblyozvf96frfgd29oxi.png'
    },{
      text: '',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1726949346/coordinator/kbmvmhpyb5qe5qsv9kzd.png'
    }


  ];

  return (
    <div className="outer-container">
      <div className="box">
        <h2>Introduction</h2>
        <p className="description">
          Welcome to the OBE Documentation Software. This guide will walk you through the steps of using the software effectively. Follow the instructions below to get started with the various features and functionalities of the application.
        </p>
        <div className="link-container">
          
          <a
            className="software-link"
            href="https://obedovumentation.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to OBE Documentation Software (might take 2-3 minutes to load as we are currently using a free version of Render)
          </a>
        </div>
        <h2>Instructions and Working Demo</h2>
        <div className="instruction-list">
          {data.map((item, index) => (
            <div key={index} className="instruction-item">
              <p>{item.text}</p>
              <img src={item.image} alt={`Step ${index + 1}`} className="instruction-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructions;
