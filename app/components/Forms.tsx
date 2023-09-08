"use client"
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

type FormValues = {
  fullNameValue: string;
  emailValue: string;
  phoneNumberValue: string;
  addressValue: string;
  handleChange: void;
  onPress: any;
}

const Forms = ({
  fullNameValue,
  emailValue,
  phoneNumberValue,
  addressValue,
  handleChange,
  onPress
}:FormValues) => {
  return(
    <div className="w-full bg-white p-6 rounded">
      <h3>Personal detail</h3>
      <div className="flex flex-col gap-4">
        <Input 
          name="fullName"
          type="text" 
          label="Fullname" 
          placeholder="Enter your fullname" 
          value={fullNameValue} 
          onChange={handleChange}
        />
        <Input
          name="address"
          type="text" 
          label="Address" 
          placeholder="Enter your address"  
          value={addressValue}
          onChange={handleChange}
        />
        <Input 
          name="email"
          type="email" 
          label="Email"  
          placeholder="Enter your email"
          value={emailValue}
          onChange={handleChange}
        />
        <Input 
          name="phoneNumber"
          type="tel" 
          label="Phone number" 
          placeholder="Enter your phone number"
          value={phoneNumberValue}
          onChange={handleChange}
        />
        
      </div>
      <Button
        className="mt-4"
        onPress={onPress}
        color="primary"
      >Download CV
      </Button>
    </div>
  )
}
export default Forms