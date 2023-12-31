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
  renderSection,
  renderContactInfoPattern2,
  renderFooter,
} from "./RenderFunctions";

const styles = StyleSheet.create({
  photoContainer: {
    width: 140,
    height: 140,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    width: 140,
    height: 140,
  },

  headingContainer: {
    marginTop: 5,
  },
  dataContainer: {
    flexDirection: "column",
    marginTop: 8,
  },
  squere: {
    width: 40,
    height: 120,
    position: "absolute",
  },
  bottomSquere: {
    width: 120,
    height: 40,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  section: {
    width: "45%",
    paddingTop: 30,
    paddingLeft: 30,
  },

  sectionSquere: {
    position: "absolute",
    left: -10,
    bottom: 0,
    width: 30,
    height: 10,
  },
});

export const PDFPattern2 = ({ data, personalization }: PatternProps) => (
  <Document>
    <Page
      size="A4"
      style={{
        fontFamily: personalization.fontFamily,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <View
        style={[styles.squere, { backgroundColor: personalization.color }]}
      />
      <View
        style={[
          styles.bottomSquere,
          {
            backgroundColor: personalization.color,
          },
        ]}
      />
      <View style={styles.section}>
        {data.photo !== "" && (
          <View style={styles.photoContainer}>
            <Image src={data.photo} style={styles.photo} />
          </View>
        )}
        <View style={styles.headingContainer}>
          <Text
            style={{
              fontSize: personalization.fontSize,
              fontFamily: personalization.fontFamily,
              marginRight: 5,
              fontWeight: 700,
            }}
          >
            {data.name}
          </Text>
          <Text
            style={{
              color: personalization.color,
              fontSize: personalization.fontSize * 1.3,
              fontFamily: personalization.fontFamily,
              fontWeight: 700,
            }}
          >
            {data.surname}
          </Text>
        </View>
        <View style={styles.headingContainer}>
          <View style={{ position: "relative" }}>
            <View
              style={[
                styles.sectionSquere,
                {
                  backgroundColor: personalization.color,
                },
              ]}
            />
            <Text
              style={{
                fontSize: personalization.fontSize,
                fontFamily: `${
                  personalization.fontFamily != "Times-Roman"
                    ? personalization.fontFamily
                    : "Times"
                }-Bold`,
              }}
            >
              Contact
            </Text>
          </View>
          {renderContactInfoPattern2(false, data.phoneNumber, personalization)}
          {renderContactInfoPattern2(false, data.email, personalization)}
          {renderContactInfoPattern2(true, data.websiteURL, personalization)}
        </View>

        {renderSection("Skills", data.skills, personalization, {
          headingContainer: styles.headingContainer,
          headingDot: styles.sectionSquere,
          dataContainer: styles.dataContainer,
        })}

        {renderSection("Hobbies", data.hobbys, personalization, {
          headingContainer: styles.headingContainer,
          headingDot: styles.sectionSquere,
          dataContainer: styles.dataContainer,
        })}

        {renderSection("Achievements", data.achievements, personalization, {
          headingContainer: styles.headingContainer,
          headingDot: styles.sectionSquere,
          dataContainer: styles.dataContainer,
        })}
      </View>
      <View style={styles.section}>
        {renderSection("Experience", data.experience, personalization, {
          headingContainer: styles.headingContainer,
          headingDot: styles.sectionSquere,
          dataContainer: styles.dataContainer,
        })}
        {renderSection("Education", data.education, personalization, {
          headingContainer: styles.headingContainer,
          headingDot: styles.sectionSquere,
          dataContainer: styles.dataContainer,
        })}

        {renderSection("Certificates", data.certificates, personalization, {
          headingContainer: styles.headingContainer,
          headingDot: styles.sectionSquere,
          dataContainer: styles.dataContainer,
        })}

        {renderSection(
          "Additional Activity",
          data.additional_activity,
          personalization,
          {
            headingContainer: styles.headingContainer,
            headingDot: styles.sectionSquere,
            dataContainer: styles.dataContainer,
          }
        )}
      </View>
      {renderFooter(data.footer, personalization)}
    </Page>
  </Document>
);
