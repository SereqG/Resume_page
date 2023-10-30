import { useState, FC } from "react";

import DropdownElement from "./DropdownElement";

interface props {
  displayDropdown: boolean;
}

const EnterDataRightSide: FC<props> = ({ displayDropdown }) => {
  const [unroleldElement, setUnroleldElement] = useState<string>("");

  return (
    <>
      {displayDropdown ? (
        <div className="flex max-h-[22rem] w-full flex-col overflow-auto p-5 md:max-h-[26rem]">
          <DropdownElement
            name="Experience"
            id="experience"
            inputs={[
              {
                label: "Company name",
                type: "text",
                name: "companyName",
              },
              {
                label: "City",
                type: "text",
                name: "city",
              },
              {
                label: "Positon",
                type: "text",
                name: "position",
              },
              {
                label: "Start date",
                type: "date",
                name: "startDate",
              },
              {
                label: "End date",
                type: "date",
                name: "endDate",
              },
              {
                label: "Additional info",
                type: "text",
                name: "additionalInfo",
              },
            ]}
            plusBtnClickFunc={setUnroleldElement}
            currentlyUnrolledElement={unroleldElement}
          />

          <DropdownElement
            name="Certificates"
            id="certificates"
            inputs={[
              {
                label: "Certificate name",
                type: "text",
                name: "certificateName",
              },
              {
                label: "End date",
                type: "date",
                name: "endDate",
              },
              {
                label: "Additional info",
                type: "text",
                name: "additionalInfo",
              },
            ]}
            plusBtnClickFunc={setUnroleldElement}
            currentlyUnrolledElement={unroleldElement}
          />

          <DropdownElement
            name="Education"
            id="education"
            inputs={[
              {
                label: "Level",
                type: "text",
                name: "level",
              },
              {
                label: "City",
                type: "text",
                name: "city",
              },
              {
                label: "Full institution name",
                type: "text",
                name: "institutionName",
              },
              {
                label: "Start date",
                type: "date",
                name: "startDate",
              },
              {
                label: "End date",
                type: "date",
                name: "endDate",
              },
              {
                label: "Additional Info",
                type: "text",
                name: "additionalInfo",
              },
            ]}
            plusBtnClickFunc={setUnroleldElement}
            currentlyUnrolledElement={unroleldElement}
          />

          <DropdownElement
            name="Completed courses and training"
            id="courses"
            inputs={[
              {
                label: "Course / training name",
                type: "text",
                name: "courseName",
              },
              {
                label: "Start date",
                type: "date",
                name: "startDate",
              },
              {
                label: "End date",
                type: "date",
                name: "endDate",
              },
              {
                label: "Additional info",
                type: "text",
                name: "additionalInfo",
              },
            ]}
            plusBtnClickFunc={setUnroleldElement}
            currentlyUnrolledElement={unroleldElement}
          />

          <DropdownElement
            name="Skills"
            id="skills"
            inputs={[
              {
                label: "Skill name",
                type: "text",
                name: "skillName",
              },
              {
                label: "additional info",
                type: "text",
                name: "additionalInfo",
              },
            ]}
            plusBtnClickFunc={setUnroleldElement}
            currentlyUnrolledElement={unroleldElement}
          />

          <DropdownElement
            name="Achievements"
            id="achievements"
            inputs={[
              {
                label: "Achievement",
                type: "text",
                name: "achievementName",
              },
              {
                label: "Additional info",
                type: "text",
                name: "additionalInfo",
              },
            ]}
            plusBtnClickFunc={setUnroleldElement}
            currentlyUnrolledElement={unroleldElement}
          />

          <DropdownElement
            name="Hobbys"
            id="hobbys"
            inputs={[
              {
                label: "Hobby",
                type: "text",
                name: "hobbyName",
              },
              {
                label: "Additional info",
                type: "text",
                name: "additionalInfo",
              },
            ]}
            plusBtnClickFunc={setUnroleldElement}
            currentlyUnrolledElement={unroleldElement}
          />
          <DropdownElement
            name="Characteristics"
            id="characteristic"
            inputs={[
              {
                label: "Characteristic",
                type: "text",
                name: "characteristicName",
              },
              {
                label: "Additional info",
                type: "text",
                name: "additionalInfo",
              },
            ]}
            plusBtnClickFunc={setUnroleldElement}
            currentlyUnrolledElement={unroleldElement}
          />

          <DropdownElement
            name="Additional Activity"
            id="additionalActivity"
            inputs={[
              {
                label: "Activity name",
                type: "text",
                name: "activityName",
              },
              {
                label: "City",
                type: "text",
                name: "city",
              },
              {
                label: "Start date",
                type: "date",
                name: "startDate",
              },
              {
                label: "End date",
                type: "date",
                name: "endDate",
              },
              {
                label: "Additional info",
                type: "text",
                name: "additionalInfo",
              },
            ]}
            plusBtnClickFunc={setUnroleldElement}
            currentlyUnrolledElement={unroleldElement}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default EnterDataRightSide;
