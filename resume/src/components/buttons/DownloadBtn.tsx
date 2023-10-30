import { FC } from "react";

import { PDFDownloadLink } from "@react-pdf/renderer";

import PDFPattern1 from "@/components/patterns/PDFPattern1";
import PDFPattern2 from "@/components/patterns/PDFPattern2";
import PDFPattern3 from "@/components/patterns/PDFPattern3";

import Button from "./Button";

interface IProps {
  selectedPattern: number;
  data: any;
  personalization: any;
}

const DownloadBtn: FC<IProps> = ({
  selectedPattern,
  data,
  personalization,
}) => {
  return (
    <div>
      {selectedPattern === 1 ? (
        <PDFDownloadLink
          fileName="Resume"
          document={
            <PDFPattern1 data={data} personalization={personalization} />
          }
        >
          <Button label="Download" type={undefined} action={undefined} />
        </PDFDownloadLink>
      ) : (
        <>
          {selectedPattern === 2 ? (
            <PDFDownloadLink
              fileName="Resume"
              document={
                <PDFPattern2 data={data} personalization={personalization} />
              }
            >
              <Button label="Download" type={undefined} action={undefined} />
            </PDFDownloadLink>
          ) : (
            <>
              {selectedPattern === 3 ? (
                <PDFDownloadLink
                  fileName="Resume"
                  document={
                    <PDFPattern3
                      data={data}
                      personalization={personalization}
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
