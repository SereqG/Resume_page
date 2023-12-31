import React from "react";
import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";

const localStyles = StyleSheet.create({
  contact: {
    fontSize: 12,
    color: "black",
  },
  dot: {
    width: 8,
    height: 8,
    marginRight: 8,
    borderRadius: 50,
  },
});

export const renderContactInfo = (
  isLink: boolean,
  value: string,
  personalization: { color: string; fontFamily: string; fontSize: number }
) =>
  value !== "" && (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}
    >
      <View
        style={[localStyles.dot, { backgroundColor: personalization.color }]}
      ></View>
      {isLink == true ? (
        <Link src={value} style={localStyles.contact}>
          {value}
        </Link>
      ) : (
        <Text style={localStyles.contact}>{value}</Text>
      )}
    </View>
  );

export const renderSection = (
  sectionName: string,
  items: any[],
  personalization: { color: string; fontFamily: string; fontSize: number },
  styles: { headingContainer: {}; headingDot: {}; dataContainer: {} }
) =>
  items.length > 0 && (
    <View style={{ marginTop: 20 }}>
      <View style={styles.headingContainer}>
        <View
          style={[
            styles.headingDot,
            { backgroundColor: personalization.color },
          ]}
        ></View>
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
          {sectionName}
        </Text>
      </View>
      {items.map((e) => (
        <View style={styles.dataContainer} key={e.id}>
          <Text
            style={{
              fontSize: personalization.fontSize / 1.5,
              fontFamily: `${
                personalization.fontFamily != "Times-Roman"
                  ? personalization.fontFamily
                  : "Times"
              }-Bold`,
            }}
          >
            {e.inputsValues.position ||
              e.inputsValues.institutionName ||
              e.inputsValues.achievementName ||
              e.inputsValues.activity ||
              e.inputsValues.certificateName ||
              e.inputsValues.skillName ||
              e.inputsValues.hobbyName}
          </Text>
          {e.inputsValues.startDate != undefined ||
          e.inputsValues.endDate != undefined
            ? renderDateRange(
                e.inputsValues.startDate,
                e.inputsValues.endDate,
                personalization
              )
            : ""}
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: personalization.fontSize / 2,
                fontFamily: `${
                  personalization.fontFamily != "Times-Roman"
                    ? personalization.fontFamily
                    : "Times"
                }-Bold`,
              }}
            >
              {e.inputsValues.level || e.inputsValues.companyName}
              {e.inputsValues.level ||
              (e.inputsValues.companyName && e.inputsValues.city)
                ? ", "
                : ""}
              {e.inputsValues.city}
            </Text>
          </View>
          <Text
            style={{
              fontSize: personalization.fontSize / 2,
              fontFamily: personalization.fontFamily,
              color: "#595959",
            }}
          >
            {e.inputsValues.additionalInfo}
          </Text>
        </View>
      ))}
    </View>
  );

const renderDateRange = (
  startDate: string,
  endDate: string,
  personalization: { color: string; fontFamily: string; fontSize: number }
) => {
  if (startDate !== "" && startDate !== undefined) {
    if (endDate !== "" && endDate !== undefined) {
      return (
        <Text
          style={{
            fontSize: personalization.fontSize / 2,
            fontFamily: personalization.fontFamily,
            color: personalization.color,
          }}
        >
          {`${startDate} - ${endDate}`}
        </Text>
      );
    } else if (startDate !== "" && startDate !== undefined) {
      return (
        <Text
          style={{
            fontSize: personalization.fontSize / 2,
            fontFamily: personalization.fontFamily,
            color: personalization.color,
          }}
        >{`Start date: ${startDate}`}</Text>
      );
    }
  } else if (endDate !== "" && endDate !== undefined) {
    return (
      <Text
        style={{
          fontSize: personalization.fontSize / 2,
          fontFamily: personalization.fontFamily,
          color: personalization.color,
        }}
      >{`Finish date: ${endDate}`}</Text>
    );
  }

  return null;
};

export const renderFooter = (
  value: string,
  personalization: { color: string; fontFamily: string; fontSize: number }
) =>
  value !== "" && (
    <View
      style={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        textAlign: "center",
        padding: 40,
      }}
    >
      <Text
        style={{
          fontSize: personalization.fontSize / 3,
          fontFamily: personalization.fontFamily,
          color: "grey",
        }}
      >
        {value}
      </Text>
    </View>
  );

//Specific for Pattern 2

export const renderContactInfoPattern2 = (
  isLink: boolean,
  value: string,
  personalization: { color: string; fontFamily: string; fontSize: number }
) =>
  value !== "" && (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 2,
      }}
    >
      <View
        style={[localStyles.dot, { backgroundColor: personalization.color }]}
      ></View>
      {isLink == true ? (
        <Link
          src={value}
          style={{
            fontSize: personalization.fontSize / 1.5,
            fontFamily: `${
              personalization.fontFamily != "Times-Roman"
                ? personalization.fontFamily
                : "Times"
            }-Bold`,
          }}
        >
          {value}
        </Link>
      ) : (
        <Text
          style={{
            fontSize: personalization.fontSize / 1.5,
            fontFamily: `${
              personalization.fontFamily != "Times-Roman"
                ? personalization.fontFamily
                : "Times"
            }-Bold`,
          }}
        >
          {value}
        </Text>
      )}
    </View>
  );
