"use client"

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Link} from "@nextui-org/react"

type InformationModalValues = {
  fullNameValue: string;
  emailValue: string;
  phoneNumberValue: string;
  addressValue: string;
  onChange: (e: React.ChangeEvent<any>) => void;
}

const InformationModal = ({
  fullNameValue,
  emailValue,
  phoneNumberValue,
  addressValue,
  onChange,
}:InformationModalValues) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return(
    <>
      <span className="absolute right-2 top-12">
        <Button onPress={onOpen} isIconOnly variant="light" aria-label="edit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#0A66C2"
            width={24}
            height={24}
          >
            <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z" />
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
              <ModalHeader className="flex flex-col gap-1">Edit contact information</ModalHeader>
              <ModalBody>
                <Input 
                   name="fullName"
                   type="text" 
                   label="Fullname" 
                   placeholder="Enter your fullname" 
                   value={fullNameValue} 
                   onChange={onChange}
                   isRequired='true'
                />
                <Input
                   name="address"
                   type="text" 
                   label="Address" 
                   placeholder="Enter your address"  
                   value={addressValue}
                   onChange={onChange}
                 />
                <Input 
                   name="email"
                   type="email" 
                   label="Email"  
                   placeholder="Enter your email"
                   value={emailValue}
                   onChange={onChange}
                 />
                <Input 
                   name="phoneNumber"
                   type="tel" 
                   label="Phone number" 
                   placeholder="Enter your phone number"
                   value={phoneNumberValue}
                   onChange={onChange}
                 />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
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
export default InformationModal