"use client";
import { updateUserInfo } from "@/app/actions/account";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

const ContactInfo = ({ userInfo }) => {
  const [infoState, setInfoState] = useState({
    phone: userInfo.phone,
    url: userInfo.url,
  });

  const handleChange = () => {
    const field = event.target.name;
    const value = event.target.value;

    setInfoState({
      ...infoState,
      [field]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateUserInfo(userInfo?.email, infoState);

      toast.success("Contact details updated successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <h5 className="text-lg font-semibold mb-4">Contact Info :</h5>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5">
          <div>
            <Label className="mb-2 block">Phone No :</Label>
            <Input
              name="phone"
              id="phone"
              type="number"
              placeholder="Enter phone number"
              onChange={handleChange}
              value={infoState?.phone}
            />
          </div>
          <div>
            <Label className="mb-2 block">Website :</Label>
            <Input
              name="url"
              id="url"
              type="url"
              placeholder="https://example.com/"
              onChange={handleChange}
              value={infoState?.url}
            />
          </div>
        </div>
        {/*end grid*/}
        <Button className="mt-5" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default ContactInfo;
