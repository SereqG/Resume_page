import { PDFDownloadLink } from "@react-pdf/renderer";

import { PDFPattern1 } from "@/components/patterns/PDFPattern1";
import { PDFPattern2 } from "@/components/patterns/PDFPattern2";
import { PDFPattern3 } from "@/components/patterns/PDFPattern3";

import { Button } from "./Button";

import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import { useResumePersonalizationContext } from "@/context/ResumePersonalizationProvider";

const getPdfDocument = (pattern: any) => (
  <PDFDownloadLink fileName="Resume" document={pattern}>
    <Button type={undefined} action={undefined}>
      Download
    </Button>
  </PDFDownloadLink>
);

const pdfPatterns = [PDFPattern1, PDFPattern2, PDFPattern3];

export const DownloadBtn = () => {
  const { userDataSet } = useUserDataSetContext();
  const { userPersonalization } = useResumePersonalizationContext();
  const selectedPattern = userDataSet.selectedPattern;

  return (
    <div>
      {selectedPattern &&
        pdfPatterns.map(
          (Pattern, index) =>
            selectedPattern === index + 1 &&
            getPdfDocument(
              <Pattern
                data={userDataSet}
                personalization={userPersonalization}
              />
            )
        )}
    </div>
  );
};
