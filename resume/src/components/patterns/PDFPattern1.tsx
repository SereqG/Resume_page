import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import { PatternProps } from "@/validation/resumeCreator/patterns/types";

import {
  renderContactInfo,
  renderFooter,
  renderSection,
} from "./RenderFunctions";

const styles = StyleSheet.create({
  photoContainer: {
    width: 100,
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    borderRadius: 500,
    width: 100,
    height: 100,
  },
  name: {
    marginRight: 5,
    textTransform: "uppercase",
    fontWeight: 700,
  },
  dataContainer: {
    marginTop: 8,
    marginLeft: 36,
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headingDot: {
    width: 15,
    height: 15,
    marginRight: 8,
    borderRadius: 50,
  },
});

export const PDFPattern1 = ({ data, personalization }: PatternProps) => (
  <Document>
    <Page
      size="A4"
      style={{
        fontFamily: `${
          personalization.fontFamily != "Times-Roman"
            ? personalization.fontFamily
            : "Times"
        }-Bold`,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5%",
          borderBottom: `2px dashed ${personalization.color}`,
        }}
      >
        {data.photo !== "" && (
          <View style={styles.photoContainer}>
            <Image src={data.photo} style={styles.photo} />
          </View>
        )}
        <View style={{ justifyContent: "space-between", width: "75%" }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Text
              style={[
                styles.name,
                {
                  fontSize: personalization.fontSize,
                  fontFamily: `${
                    personalization.fontFamily != "Times-Roman"
                      ? personalization.fontFamily
                      : "Times"
                  }-Bold`,
                },
              ]}
            >
              {data.name}
            </Text>
            <Text
              style={[
                styles.name,
                {
                  color: personalization.color,
                  fontSize: personalization.fontSize,
                  fontFamily: `${
                    personalization.fontFamily != "Times-Roman"
                      ? personalization.fontFamily
                      : "Times"
                  }-Bold`,
                },
              ]}
            >
              {data.surname}
            </Text>
          </View>
          <View>
            {renderContactInfo(false, data.phoneNumber, personalization)}
            {renderContactInfo(false, data.email, personalization)}
            {renderContactInfo(true, data.websiteURL, personalization)}
          </View>
        </View>
      </View>
      <View style={{ padding: "5%" }}>
        {renderSection("Experience", data.experience, personalization, {
          headingContainer: styles.headingContainer,
          headingDot: styles.headingDot,
          dataContainer: styles.dataContainer,
        })}
        {renderSection("Education", data.education, personalization, {
          headingContainer: styles.headingContainer,
          headingDot: styles.headingDot,
          dataContainer: styles.dataContainer,
        })}
        {renderSection("Certificates", data.certificates, personalization, {
          headingContainer: styles.headingContainer,
          headingDot: styles.headingDot,
          dataContainer: styles.dataContainer,
        })}
        {renderSection("Skills", data.skills, personalization, {
          headingContainer: styles.headingContainer,
          headingDot: styles.headingDot,
          dataContainer: styles.dataContainer,
        })}
        {renderSection("Achievements", data.achievements, personalization, {
          headingContainer: styles.headingContainer,
          headingDot: styles.headingDot,
          dataContainer: styles.dataContainer,
        })}
        {renderSection(
          "Additional Activity",
          data.additional_activity,
          personalization,
          {
            headingContainer: styles.headingContainer,
            headingDot: styles.headingDot,
            dataContainer: styles.dataContainer,
          }
        )}
        {renderSection("Hobbies", data.hobbys, personalization, {
          headingContainer: styles.headingContainer,
          headingDot: styles.headingDot,
          dataContainer: styles.dataContainer,
        })}
      </View>
      {renderFooter(data.footer, personalization)}
    </Page>
  </Document>
);
