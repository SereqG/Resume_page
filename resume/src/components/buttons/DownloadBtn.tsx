import { PDFDownloadLink } from "@react-pdf/renderer";

import PDFPattern1 from "@/components/patterns/PDFPattern1";
import PDFPattern2 from "@/components/patterns/PDFPattern2";
import PDFPattern3 from "@/components/patterns/PDFPattern3";

import Button from "./Button";

import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import { useResumePersonalizationContext } from "@/context/ResumePersonalizationProvider";

const DownloadBtn = () => {
  const { userDataSet } = useUserDataSetContext();
  const { userPersonalization } = useResumePersonalizationContext();
  return (
    <div>
      {userDataSet.selectedPattern === 1 ? (
        <PDFDownloadLink
          fileName="Resume"
          document={
            <PDFPattern1
              data={userDataSet}
              personalization={userPersonalization}
            />
          }
        >
          <Button label="Download" type={undefined} action={undefined} />
        </PDFDownloadLink>
      ) : (
        <>
          {userDataSet.selectedPattern === 2 ? (
            <PDFDownloadLink
              fileName="Resume"
              document={
                <PDFPattern2
                  data={userDataSet}
                  personalization={userPersonalization}
                />
              }
            >
              <Button label="Download" type={undefined} action={undefined} />
            </PDFDownloadLink>
          ) : (
            <>
              {userDataSet.selectedPattern === 3 ? (
                <PDFDownloadLink
                  fileName="Resume"
                  document={
                    <PDFPattern3
                      data={userDataSet}
                      personalization={userPersonalization}
                    />
                  }
                >
                  <Button
                    label="Download"
                    type={undefined}
                    action={undefined}
                  />
                </PDFDownloadLink>
              ) : (
                ""
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DownloadBtn;
