// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

"use client"

import InformationModal from './InformationModal'
import SummaryModal from './SummaryModal'
import ExperienceModal from './ExperienceModal'
import EducationModal from './EducationModal'
import DownloadPDF from './DownloadPDF'
import Image from 'next/image'
import { useState } from 'react'
import { Margin, usePDF } from "react-to-pdf";

const initialData = {
  fullName: 'John Doe',
  email: 'johndoe@rocketmail.com',
  phoneNumber: '089243573821',
  address: 'Rangkasbitung, Lebak, Banten'
}

const ResumeBuilder = () => {
  const [data, setData] = useState(initialData)
  const [summary, setSummary] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante risus, porta vitae nibh sed, tempor dictum nulla. Duis porta, erat ut aliquam pulvinar, arcu dolor feugiat eros, sed aliquam enim justo ac arcu. ')
  const [experiences, setExperiences] = useState([])
  const [educations, setEducations] = useState([])

  const handleDataChange = (e: React.ChangeEvent<any>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSummaryChange = (e: React.ChangeEvent<any>) => {
    setSummary(e.target.value)
  }
  const handleExperienceChange = ({title,company,start,end}: {title: string, company: string, start: string, end:string}) => {
    setExperiences([
      ...experiences,
      {title: title, company: company, start: start, end: end}
    ])
  }

  const handleEducationChange = ({school,start,end}: {school: string,start:string,end:string}) => {
    setEducations([
      ...educations,
      {school: school, start: start, end:end}
    ])
  }
  
  const { toPDF, targetRef } = usePDF({
    filename: "my-resume.pdf",
    page: { margin: Margin.MEDIUM }
  });
  return(
    <main className="min-h-screen">
    <DownloadPDF onDownload={toPDF} />

    {/* Resume */}

      <div className="border max-w-[806px] bg-white relative rounded-lg">
        <InformationModal
          fullNameValue={data.fullName}
          emailValue={data.email}
          phoneNumberValue={data.phoneNumber}
          addressValue={data.address}
          onChange={handleDataChange}
        />
        <SummaryModal 
          summaryValue={summary}
          onChange={handleSummaryChange}
        />
        <ExperienceModal 
          onAddExperience={handleExperienceChange}
        />
        <EducationModal 
          onAddEducation={handleEducationChange}  
        />
     
        <div ref={targetRef} className="p-12 w-full min-h-[1040px]">        
          <h1 
            style={{ 
              fontSize: '32px', 
              fontWeight: '400', 
              marginBottom: '4px' }}
            >
            {data.fullName}
          </h1>
          <p style={{ fontSize: '14px' }}>{data.address}</p>
          <div style={{paddingTop: '16px',paddingBottom: '24px', marginBottom: '24px'}}>
            
            <p style={{ fontSize: '14px'}}>
             {data.email}
            </p>
            
            <p style={{ fontSize: '14px'}}>
               {data.phoneNumber}
            </p>
          </div>

          <h2 
            style={{
              fontWeight: '700',
              fontSize: '18px',
              marginBottom: '4px'
            }}>
            Summary
          </h2>
          <p style={{
              marginBottom: '24px',
              paddingBottom: '24px'
          }}>{summary}</p>

          <h2
            style={{
              fontWeight: '700',
              fontSize: '18px',
              marginBottom: '4px'
            }}>
            Experience
          </h2>
          {experiences.map(experience => (
            <div style={{marginTop: '16px', paddingBottom:'24px'}} key={experience.company}>
              <h4>{experience.title}</h4>
              <p>{experience.company}</p>
              <p>{experience.start} - {experience.end}</p>
              
            </div>
          ))}

          <h2
            style={{
              fontWeight: '700',
              fontSize: '18px',
              marginBottom: '4px',
              marginTop: '24px'
            }}>
            Education
          </h2>
          {educations.map(education => (
            <div style={{marginTop: '16px', paddingBottom:'24px'}} key={education.school}>
              <h4>{education.school}</h4>
              <p>{education.start} - {education.end}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
export default ResumeBuilder