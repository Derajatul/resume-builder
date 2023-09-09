import Image from 'next/image'
import {Button} from "@nextui-org/button";

type DownloadPDFValues = {
  onDownload: () => any;
}

const DownloadPDF = ({onDownload}: DownloadPDFValues) => {
  return(
    <div className="flex justify-between border max-w-[806px] bg-white rounded-lg p-6 mb-4 items-center mt-12">
      <div className=" flex gap-5"> 
      <Image src="/icons/megaphone.svg" width={30} height={30} style={{width:'auto',height:'auto'}} alt='' />
      <div className="hidden sm:block">
        <h3>Apply to jobs with this resume</h3>
        <p>Download this resume as a PDF and upload it when you apply to jobs.</p>
      </div>  
      </div>
      <Button variant="ghost" radius="full" onPress={onDownload}>
          Download as PDF
      </Button>
    </div>
     
  )
}
export default DownloadPDF