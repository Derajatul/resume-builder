import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Input} from "@nextui-org/react";
import {useState} from 'react'

type EducationModalValues = {
  onAddEducation: () => void;
}

const EducationModal = ({onAddEducation}: EducationModalValues) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [education,setEducation] = useState({})

  const handleChange = (e: React.ChangeEvent<any>) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value
    })
  } 

  const handleAddEducation = () => {
    onAddEducation(education)
  }
    
  return(
    <>
      <span className="absolute right-2 top-48">
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
                   name="school"
                   type="text" 
                   label="School"  
                   value={education.school} 
                   onChange={handleChange}
                />
                <Input 
                   name="start"
                   type="number" 
                   label="Start"
                   value={education.start}
                   onChange={handleChange}
                 />
                <Input 
                   name="end"
                   type="number"
                   label="End"
                   value={education.end}
                   onChange={handleChange}
                 />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose} onClick={handleAddEducation}>
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
export default EducationModal