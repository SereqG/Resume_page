import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import {
  renderContactInfo,
  renderFooter,
  renderSection,
} from "./RenderFunctions";

import { PatternProps } from "@/validation/resumeCreator/patterns/types";

const styles = StyleSheet.create({
  photoContainer: {
    width: 100,
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    width: 100,
    height: 100,
  },

  headingContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  dataContainer: {
    marginTop: 8,
  },

  section: {
    width: "45%",
    paddingTop: 30,
  },

  headingDot: {
    display: "none",
  },
});

export const PDFPattern3 = ({ data, personalization }: PatternProps) => (
  <Document>
    <Page
      size="A4"
      style={{
        fontFamily: personalization.fontFamily,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <View style={styles.section}>
        {data.photo !== "" && (
          <View
            style={[styles.photoContainer, { marginTop: 20, marginLeft: 20 }]}
          >
            <Image src={data.photo} style={styles.photo} />
          </View>
        )}
        <View style={[styles.dataContainer, { padding: 20 }]}>
          {renderContactInfo(false, data.phoneNumber, personalization)}
          {renderContactInfo(false, data.email, personalization)}
          {renderContactInfo(true, data.websiteURL, personalization)}
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: personalization.color + "41",
            height: "60vh",
            padding: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          {renderSection("Skills", data.skills, personalization, {
            headingContainer: styles.headingContainer,
            headingDot: styles.headingDot,
            dataContainer: styles.dataContainer,
          })}
          {renderSection("Hobbies", data.hobbys, personalization, {
            headingContainer: styles.headingContainer,
            headingDot: styles.headingDot,
            dataContainer: styles.dataContainer,
          })}
          {renderSection("Achievements", data.achievements, personalization, {
            headingContainer: styles.headingContainer,
            headingDot: styles.headingDot,
            dataContainer: styles.dataContainer,
          })}
        </View>
      </View>

      <View style={[styles.section, { marginLeft: "5%" }]}>
        <View style={[styles.dataContainer, { marginBottom: 30 }]}>
          <Text
            style={{
              fontSize: personalization.fontSize,
              fontFamily: personalization.fontFamily,
              fontWeight: 700,
            }}
          >
            {data.name}
          </Text>
          <Text
            style={{
              fontSize: personalization.fontSize * 1.3,
              fontFamily: personalization.fontFamily,
              fontWeight: 700,
            }}
          >
            {data.surname}
          </Text>
        </View>
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
      </View>
      {renderFooter(data.footer, personalization)}
    </Page>
  </Document>
);
