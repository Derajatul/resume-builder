import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Input} from "@nextui-org/react";
import {useState} from 'react'

type ExperienceModalValues = {
  onAddExperience: ({title,company,start,end}: ExperienceDataType) => void;
}

type ExperienceDataType = {
  title: string;
  company: string;
  start: string;
  end: string;
}

const ExperienceModal = ({onAddExperience}:ExperienceModalValues) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [experience,setExperience] = 
    useState({title: '', company: '', start: '', end: ''})

  const handleChange = (e: React.ChangeEvent<any>) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value
    })
  } 

  const handleAddExperience = () => {
    onAddExperience(experience)
  }
    
  return(
    <>
      <span className="absolute right-2 top-36">
        <Button onPress={onOpen} isIconOnly variant="light" aria-label="edit">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#0A66C2"
            width={24}
            height={24}
          >
            <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z" />
          </svg>
        </Button>
      </span>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add experience</ModalHeader>
              <ModalBody>
                <Input 
                   name="title"
                   type="text" 
                   label="Title"  
                   value={experience.title} 
                   onChange={handleChange}
                />
                <Input
                   name="company"
                   type="text" 
                   label="Company"   
                   value={experience.company}
                   onChange={handleChange}
                 />
                <Input 
                   name="start"
                   type="text" 
                   label="Start"
                   value={experience.start}
                   onChange={handleChange}
                 />
                <Input 
                   name="end"
                   type="text"
                   label="End"
                   value={experience.end}
                   onChange={handleChange}
                 />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose} onClick={handleAddExperience}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
export default ExperienceModal