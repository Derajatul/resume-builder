import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Textarea} from "@nextui-org/react";

type SummaryModalValues = {
  summaryValue: string;
  onChange: (e: React.ChangeEvent<any>) => void;
}

const SummaryModal = ({summaryValue,onChange}:SummaryModalValues) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return(
    <>
      <span className="absolute right-2 top-56">
        <Button onPress={onOpen} isIconOnly variant="light" aria-label="edit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#0A66C2" width="24" height="24" focusable="false">
            <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
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
              <ModalHeader className="flex flex-col gap-1">Edit summary</ModalHeader>
              <ModalBody>
                <Textarea
                  label="Summary"
                  labelPlacement="outside"
                  placeholder="Enter your summary"
                  className="max-w-xs"
                  value={summaryValue}
                  onChange={onChange}
                  size="lg"
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
export default SummaryModal