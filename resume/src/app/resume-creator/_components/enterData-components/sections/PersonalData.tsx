import FormInput from "@/components/inputs/FormInput";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import React from "react";

const PersonalData = () => {
  const { userDataSet, setUserDataSet } = useUserDataSetContext();
  return (
    <div className="flex max-h-[50vh] w-full flex-col overflow-auto p-5">
      <FormInput
        type="file"
        label="Photo"
        id="photo"
        name="photo"
        onChange={(e) => {
          setUserDataSet({
            ...userDataSet,
            photo: URL.createObjectURL(e.target.files[0]),
          });
        }}
      />
      <FormInput
        type="text"
        label="Name"
        id="name"
        name="name"
        onChange={(e) =>
          setUserDataSet({ ...userDataSet, name: e.target.value })
        }
      />
      <FormInput
        type="text"
        label="Surname"
        id="surname"
        name="surname"
        onChange={(e) =>
          setUserDataSet({ ...userDataSet, surname: e.target.value })
        }
      />
      <FormInput
        type="text"
        label="Phone number"
        id="phoneNumber"
        name="phoneNumber"
        onChange={(e) =>
          setUserDataSet({ ...userDataSet, phoneNumber: e.target.value })
        }
      />
      <FormInput
        type="email"
        label="Email address"
        id="email"
        name="email"
        onChange={(e) =>
          setUserDataSet({ ...userDataSet, email: e.target.value })
        }
      />
      <FormInput
        type="url"
        label="Website URL address"
        id="websiteURL"
        name="websiteURL"
        onChange={(e) =>
          setUserDataSet({ ...userDataSet, websiteURL: e.target.value })
        }
      />
    </div>
  );
};

export default PersonalData;
