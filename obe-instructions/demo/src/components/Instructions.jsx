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
        <h2>Project Overview</h2>
        <p className="project-overview">
          The OBE Documentation Software is designed to streamline the process of generating NAAC-compliant documents for colleges and universities. It leverages Outcome-Based Education (OBE) principles, which focus on measuring student performance through clearly defined Course Outcomes (COs) and Program Outcomes (POs). The software automates the documentation process by processing data from Excel files, Google Forms, and other sources, ensuring accuracy and efficiency in compliance with NAAC standards.
        </p>
        <h3>What is Outcome-Based Education (OBE)?</h3>
        <p className="obe-explanation">
          Outcome-Based Education (OBE) is an educational approach that centers on achieving specific outcomes in terms of student learning and skills. Unlike traditional education methods that focus on content delivery, OBE is results-oriented, meaning that every aspect of the educational process is organized around what students should be able to do at the end of their learning experience. This approach helps in ensuring that graduates possess the necessary skills and knowledge required by employers and society.
        </p>
        <h3>How the Software Works:</h3>
        <ul className="how-it-works">
          <li><strong>Data Input:</strong> The software takes in marks and performance data from various sources, including Excel files for T1, T2, T3 (end-term exams), and other assessments. It also gathers information from Google Forms and other digital platforms.</li>
          <li><strong>Dynamic Database Management:</strong> The software is built on MongoDB Atlas, which allows the database to dynamically adjust to changes in the academic structure. For example, if the number of questions or assessments changes, the database schema is automatically updated to accommodate these modifications.</li>
          <li><strong>Error Checking and Validation:</strong> Before any data is processed, the software checks for common errors, such as ensuring that marks awarded do not exceed the maximum marks for each question.</li>
          <li><strong>CO/PO Evaluation:</strong> The software calculates Course Outcomes (COs) and Program Outcomes (POs) by analyzing student performance across different assessments. This is crucial in OBE, as it helps educators assess whether students are meeting the desired learning outcomes.</li>
          <li><strong>Automated Report Generation:</strong> Once the data is processed and validated, the software generates detailed reports that are ready for NAAC submission. These reports include opening and closing reports, attainment levels, and percentages of students meeting target outcomes.</li>
        </ul>
        <h3>Key Features:</h3>
        <ul className="features-list">
          <li><strong>Dynamic Database Structure:</strong> Automatically adjusts to accommodate varying numbers of questions per exam, ensuring accurate data management.</li>
          <li><strong>Efficient Report Generation:</strong> The software drastically reduces the time required to generate NAAC-compliant reports from 5-7 days (assuming 12 hours of continuous work per day) to just 5 hours. This not only significantly increases efficiency but also reduces the chances of errors due to manual data entry to approximately zero.</li>
          <li><strong>CO/PO Evaluation:</strong> Accurately calculates Course Outcomes and Program Outcomes, essential for OBE and NAAC accreditation.</li>
          <li><strong>Scalable Data Management:</strong> Capable of managing large datasets, supporting at least 60 subjects taught by over 150 faculty members.</li>
          <li><strong>NAAC Compliance:</strong> Produces print-ready reports formatted according to NAAC submission guidelines, ensuring compliance with accreditation standards.</li>
        </ul>
        <h3>Achievements:</h3>
        <ul className="achievements-list">
          <li><strong>Academic Excellence:</strong> The software earned an A+ grade in the 6th Semester of EVEN SEM 2024.</li>
          <li><strong>Funding Secured:</strong> Successfully obtained funding for purchasing a Render database for deployment.</li>
          <li><strong>Deployment:</strong> Currently in testing, with plans for rollout at JIIT in the near future.</li>
        </ul>
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