import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  areaPitch = [
    {areaName:'Software Development', pitch: `FDM has a dedicated training stream focused on software development, using Java, SQL and Unix as the languages of choice. During the training, the trainees will learn essential development skills such as core Java, OOP basics, JDBC, Spring framework, Hibernate and more. Throughout the training, they will undertake projects such as creating a trading platform and subway routing system to provide a hands-on learning experience.`},
    {areaName:'Application Support',  pitch: `FDM has a dedicated training stream focused on application support where our consultants learn ITIL foundations, as well as technical skills such as SQL, Unix, OS administration and more. Through this training, our candidates are prepared for level 2-3 support roles across both technical and business centered teams.`},
    {areaName:'Project Management',   pitch: `FDM has a dedicated training stream focused on project management which includes training on Lean and Agile methodologies such as Scrum. Our consultants undertake projects such as building a performance tracking dashboard, leading and organizing the project while creating gant charts, tracking costs, presenting to stakeholders, which prepares them for project management roles on site.`},
    {areaName:'Testing/QA/QE',        pitch: `FDM has a dedicated training stream focused on quality engineering and test automation, where training is centered around ISTQB certification, manual testing techniques, interface testing using Selenium and API testing using SoapUI. During this program, the candidates test a multitude of different web APIs and applications to provide a hands-on learning experience.`},
    {areaName:'Information/Cyber Security', pitch: `FDM has a dedicated training stream focused on information security which includes training on ethical hacking, defensive security techniques, IAM, risk management, networking and more. Our consultants focus on both the offensive and defensive sides of InfoSec, which prepares them for junior InfoSec analyst roles on site.`},
    {areaName:'Salesforce', pitch: `FDM has a dedicated training stream focused on Salesforce administration and development which includes training on Apex and Lightning as well as data management and Visualforce.`},
    {areaName:'Business Analysis', pitch: `FDM has a dedicated training stream focused on project management which includes training on Lean and agile methodologies such as Scrum. Our consultants undertake projects such as collaborating to build a performance tracking dashboard, collecting and managing requirements, creating project documentation as well as engaging and working closely with project managers, developers, and testers which prepares them for business analyst roles on site.`},
    {areaName:'Data Science/Engineering', pitch: `FDM has a dedicated training stream focused on data engineering which includes training on scala/spark, Hive, pig, mapreduce and using the Hadoop Distributed file system (HDFS). Our consultants undertake projects such as extracting and massaging data from multiple sources and loading it into the HDFS as well as building dashboard to visualize said data which prepares them for big data/data engineering roles on site.`},
    {areaName:'Risk, Regulation & Compliance', pitch: `FDM has a dedicated training stream focused on risk, regulation, and compliance which includes training on risk analysis and management, financial regulations and concepts, Anti-money laundering, as well as audit and compliance procedures.`},
    {areaName:'Cloud/Infrastructure', pitch: `FDM has a dedicated training stream focused on cloud which includes training on cloud native principles, patterns and technologies as well as integrating and using specific vendor services in the cloud. Our consultants undertake projects such as building serverless architecture, and scaling resources for high performance and availability among others which prepares them for junior cloud engineering roles on site.`},
    {areaName:'Mobile Development', pitch: `FDM has a dedicated training stream focused on mobile development, where the trainees will to develop hybrid applications using Ionic, Native applications using Android Studio for Android and Swift for IOS, as well as program back ends using Node.js. During their training, they will undertake projects such as creating a fully functional TODO list application as well as other creative applications of their choice.`},
    {areaName:'Pega', pitch: `FDM has a partnership with Pega where we can train across several areas of the platform. Our partnership provides us access to training content which teach the hands-on skills required to work as a Pega developer, Pega Analyst or Pega Robotics Engineer.`},
    {areaName:'BluePrism', pitch: `FDM has the ability to train in BluePrism where resources learn both technical and non-technical  pathways. Throughout the training, trainees will learn to become proficient BluePrism developers, with proven capabilities in automating real-life business processes from end-to-end.`},
    {areaName:'UiPath', pitch: `FDM has a partnership with UiPath where we can train resources in technical and non-technical UiPath related content. Throughout the training, trainees will learn to become an advanced UiPath developer, with proven capabilities in automating real-life business processes from end-to-end.`},
    {areaName:'ServiceNow', pitch: `FDM has developed a partnership with ServiceNow to provide training on the ServiceNow platform including creating digital workflows, administration and scripting. Our consultants come equipped with knowledge and skills to effectively use and develop on the ServiceNow platform preparing them for ServiceNow roles on site. `},
    {areaName:'HR', pitch: `Having a strong focus on diversity and gender equality in the workplace, FDM’s ‘Women in Tech’ initiative strives to make IT a more female-friendly career choice by being dedicated to promoting this initiative and helping women progress within the IT industry. We have signed the CEO Statement of Support for the United Nations Women’s Empowerment Principles and have received numerous awards for our work in this space, such as the recently awarded the 'Advocate of the Year' at the Information Age Women in IT Awards.

FDM employs over 80 nationalities working together as a team globally, and 50% of the FDM management team is female, along with almost 30% of consultants and trainees. We are keen to partner with organizations who are passionate about similar initiatives so we can work together in continuing to drive change within the industry.`}
  ];

  constructor() { }

  generatePitch(user:any, pitchData:any){  

   // console.log(`user info: ${JSON.stringify(user)} + pitchData: ${JSON.stringify(pitchData)}`);
   
    let firstName = pitchData.client.clientFirstName;
    let lastName = pitchData.client.clientLastName;
    let org = pitchData.client.clientOrganization;
    let area = pitchData.client.clientArea;
    let title = pitchData.client.clientTitle;
    let pitchContent = this.selectPitch(area);
    let salutation = user.pitchSalutation;
    let intro = user.pitchIntro;
    let pitchStart = user.pitchStart;
    let conclusion = user.pitchConclusion;
    let final = user.pitchFinal;
    let userFirst = user.firstName;
    let userLast = user.lastName;

    let pitch =`
${salutation} ${firstName},

${intro}

${pitchStart} ${title} at ${org}. ${pitchContent}

${conclusion}

${final}
${userFirst} ${userLast}
    `;
    return pitch;
  }

  selectPitch(area){
    let pitchContent;
    let clientArea = area;

    pitchContent = this.areaPitch.find(p => {
      return p.areaName === area;
    });
      
    return pitchContent.pitch;
  }
}
