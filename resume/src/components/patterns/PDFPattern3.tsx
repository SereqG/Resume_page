import { FC } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import { v4 as uuidv4 } from "uuid";

interface IProps {
  data: {
    email: string;
    name: string;
    phoneNumber: string;
    photo: string;
    surname: string;
    websiteURL: string;

    selectedPattern: number;

    achievements: any[];
    additionalActivity: any[];
    certificates: any[];
    characteristic: any[];
    courses: any[];
    education: any[];
    experience: any[];
    hobbys: any[];
    skills: any[];
  };
  personalization: { color: string; fontFamily: string; fontSize: number };
}

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
  dot: {
    width: 8,
    height: 8,
    marginRight: 8,
    borderRadius: 50,
  },
  dataContainer: {
    marginTop: 10,
  },
  elementContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
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
  },
  surname: {
    fontWeight: 700,
  },
  sectionSquere: {
    position: "absolute",
    left: -10,
    bottom: 0,
    width: 30,
    height: 10,
  },
});

const PDFPattern3: FC<IProps> = ({ data, personalization }) => (
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
        {data.photo !== "" ? (
          <View
            style={[styles.photoContainer, { marginTop: 20, marginLeft: 20 }]}
          >
            <Image src={data.photo} style={styles.photo} />
          </View>
        ) : (
          ""
        )}
        {data.phoneNumber !== "" || data.websiteURL !== "" || data.email}
        <View style={[styles.dataContainer, { padding: 20 }]}>
          {data.phoneNumber !== "" ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <View
                style={[styles.dot, { backgroundColor: personalization.color }]}
              ></View>
              <Text
                style={{
                  fontSize: personalization.fontSize / 1.5,
                  fontFamily: personalization.fontFamily,
                  fontWeight: 700,
                }}
              >
                {data.phoneNumber}
              </Text>
            </View>
          ) : (
            ""
          )}
          {data.email !== "" ? (
            <View style={styles.elementContainer}>
              <View
                style={[styles.dot, { backgroundColor: personalization.color }]}
              ></View>
              <Text
                style={{
                  fontSize: personalization.fontSize / 1.5,
                  fontFamily: personalization.fontFamily,
                  fontWeight: 700,
                }}
              >
                {data.email}
              </Text>
            </View>
          ) : (
            ""
          )}
          {data.websiteURL !== "" ? (
            <View style={styles.elementContainer}>
              <View
                style={[styles.dot, { backgroundColor: personalization.color }]}
              ></View>
              <Text
                style={{
                  fontSize: personalization.fontSize / 1.5,
                  fontFamily: personalization.fontFamily,
                  fontWeight: 700,
                }}
              >
                {data.websiteURL}
              </Text>
            </View>
          ) : (
            ""
          )}
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
          {data.skills.length > 0 ? (
            <View style={styles.dataContainer}>
              <Text
                style={{
                  fontSize: personalization.fontSize,
                  fontFamily: personalization.fontFamily,
                  fontWeight: 700,
                }}
              >
                Skills
              </Text>

              {data.skills.map((e: any) => {
                return (
                  <View key={uuidv4()} style={styles.elementContainer}>
                    <View style={{ flexDirection: "column" }}>
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 1.5,
                          fontFamily: personalization.fontFamily,
                          fontWeight: 700,
                          color: personalization.color,
                        }}
                      >
                        {e.inputsValues.skillName}
                      </Text>
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
                  </View>
                );
              })}
            </View>
          ) : (
            ""
          )}

          {data.characteristic.length > 0 ? (
            <View style={styles.dataContainer}>
              <Text
                style={{
                  fontSize: personalization.fontSize,
                  fontFamily: personalization.fontFamily,
                  fontWeight: 700,
                }}
              >
                Characteristic
              </Text>
              {data.characteristic.map((e: any) => {
                return (
                  <View key={uuidv4()} style={styles.elementContainer}>
                    <View style={{ flexDirection: "column" }}>
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 1.5,
                          fontFamily: personalization.fontFamily,
                          fontWeight: 700,
                          color: personalization.color,
                        }}
                      >
                        {e.inputsValues.characteristicName}
                      </Text>
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
                  </View>
                );
              })}
            </View>
          ) : (
            ""
          )}

          {data.hobbys.length > 0 ? (
            <View style={styles.dataContainer}>
              <Text
                style={{
                  fontSize: personalization.fontSize,
                  fontFamily: personalization.fontFamily,
                  fontWeight: 700,
                }}
              >
                Hobbys
              </Text>
              {data.hobbys.map((e: any) => {
                return (
                  <View key={uuidv4()} style={styles.elementContainer}>
                    <View style={{ flexDirection: "column" }}>
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 1.5,
                          fontFamily: personalization.fontFamily,
                          fontWeight: 700,
                          color: personalization.color,
                        }}
                      >
                        {e.inputsValues.hobbyName}
                      </Text>
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
                  </View>
                );
              })}
            </View>
          ) : (
            ""
          )}
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
        {data.experience.length > 0 ? (
          <View>
            <Text
              style={{
                fontSize: personalization.fontSize,
                fontFamily: personalization.fontFamily,
                fontWeight: 700,
              }}
            >
              Experience
            </Text>
            {data.experience.map((e: any) => {
              return (
                <View key={uuidv4()} style={{ marginBottom: 6 }}>
                  <View>
                    <View style={styles.elementContainer}>
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 1.5,
                          fontFamily: personalization.fontFamily,
                          fontWeight: 700,
                          color: personalization.color,
                        }}
                      >
                        {e.inputsValues.position}
                      </Text>
                    </View>
                    {e.inputsValues.startDate !== "" &&
                    e.inputsValues.endDate !== "" ? (
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 2,
                          fontFamily: personalization.fontFamily,
                          fontWeight: 700,
                          color: personalization.color,
                        }}
                      >
                        {e.inputsValues.startDate} - {e.inputsValues.endDate}
                      </Text>
                    ) : (
                      <View>
                        {e.inputsValues.startDate !== "" ? (
                          <Text
                            style={{
                              fontSize: personalization.fontSize / 2,
                              fontFamily: personalization.fontFamily,
                              fontWeight: 700,
                              color: personalization.color,
                            }}
                          >
                            Start date: {e.inputsValues.startDate}
                          </Text>
                        ) : (
                          <View>
                            {e.inputsValues.endDate !== "" ? (
                              <Text
                                style={{
                                  fontSize: personalization.fontSize / 2,
                                  fontFamily: personalization.fontFamily,
                                  fontWeight: 700,
                                  color: personalization.color,
                                }}
                              >
                                Finish date: {e.inputsValues.endDate}
                              </Text>
                            ) : (
                              ""
                            )}
                          </View>
                        )}
                      </View>
                    )}
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 2,
                          fontFamily: personalization.fontFamily,
                          fontWeight: 700,
                          marginRight: personalization.fontSize / 4,
                          color: personalization.color,
                        }}
                      >
                        {e.inputsValues.companyName},
                      </Text>
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 2,
                          fontFamily: personalization.fontFamily,
                          color: personalization.color,
                        }}
                      >
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
                </View>
              );
            })}
          </View>
        ) : (
          ""
        )}
        {data.education.length > 0 ? (
          <View style={styles.dataContainer}>
            <Text
              style={{
                fontSize: personalization.fontSize,
                fontFamily: personalization.fontFamily,
                fontWeight: 700,
              }}
            >
              Education
            </Text>
            {data.education.map((e: any) => {
              return (
                <View key={uuidv4()} style={{ marginBottom: 6 }}>
                  <View>
                    <View style={styles.elementContainer}>
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 1.5,
                          fontFamily: personalization.fontFamily,
                          fontWeight: 700,
                          color: personalization.color,
                        }}
                      >
                        {e.inputsValues.institutionName}
                      </Text>
                    </View>
                    {e.inputsValues.startDate !== "" &&
                    e.inputsValues.endDate !== "" ? (
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 2,
                          fontFamily: personalization.fontFamily,
                          fontWeight: 700,
                          color: personalization.color,
                        }}
                      >
                        {e.inputsValues.startDate} - {e.inputsValues.endDate}
                      </Text>
                    ) : (
                      <View>
                        {e.inputsValues.startDate !== "" ? (
                          <Text
                            style={{
                              fontSize: personalization.fontSize / 2,
                              fontFamily: personalization.fontFamily,
                              fontWeight: 700,
                              color: personalization.color,
                            }}
                          >
                            Start date: {e.inputsValues.startDate}
                          </Text>
                        ) : (
                          <View>
                            {e.inputsValues.endDate !== "" ? (
                              <Text
                                style={{
                                  fontSize: personalization.fontSize / 2,
                                  fontFamily: personalization.fontFamily,
                                  fontWeight: 700,
                                  color: personalization.color,
                                }}
                              >
                                Finish date: {e.inputsValues.endDate}
                              </Text>
                            ) : (
                              ""
                            )}
                          </View>
                        )}
                      </View>
                    )}
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 2,
                          fontFamily: personalization.fontFamily,
                          fontWeight: 700,
                          marginRight: personalization.fontSize / 4,
                          color: personalization.color,
                        }}
                      >
                        {e.inputsValues.level}
                      </Text>
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 2,
                          fontFamily: personalization.fontFamily,
                          color: personalization.color,
                        }}
                      >
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
                </View>
              );
            })}
          </View>
        ) : (
          ""
        )}
        {data.certificates.length > 0 ? (
          <View style={styles.dataContainer}>
            <Text
              style={{
                fontSize: personalization.fontSize,
                fontFamily: personalization.fontFamily,
                fontWeight: 700,
              }}
            >
              Certificates
            </Text>
            {data.certificates.map((e: any) => {
              return (
                <View key={uuidv4()} style={{ marginBottom: 6 }}>
                  <View>
                    <View style={styles.elementContainer}>
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 1.5,
                          fontFamily: personalization.fontFamily,
                          fontWeight: 700,
                          color: personalization.color,
                        }}
                      >
                        {e.inputsValues.certificateName}
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: personalization.fontSize / 2,
                        fontFamily: personalization.fontFamily,
                        fontWeight: 700,
                        color: personalization.color,
                      }}
                    >
                      Finish date: {e.inputsValues.endDate}
                    </Text>
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
                </View>
              );
            })}
          </View>
        ) : (
          ""
        )}
        {data.courses.length > 0 ? (
          <View style={styles.dataContainer}>
            <Text
              style={{
                fontSize: personalization.fontSize,
                fontFamily: personalization.fontFamily,
                fontWeight: 700,
              }}
            >
              Courses
            </Text>
            {data.courses.map((e: any) => {
              return (
                <View key={uuidv4()} style={{ marginBottom: 6 }}>
                  <View>
                    <View style={styles.elementContainer}>
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 1.5,
                          fontFamily: personalization.fontFamily,
                          fontWeight: 700,
                          color: personalization.color,
                        }}
                      >
                        {e.inputsValues.courseName}
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: personalization.fontSize / 2,
                        fontFamily: personalization.fontFamily,
                        fontWeight: 700,
                        color: personalization.color,
                      }}
                    >
                      Finish date: {e.inputsValues.endDate}
                    </Text>
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
                </View>
              );
            })}
          </View>
        ) : (
          ""
        )}
        {data.achievements.length > 0 ? (
          <View style={styles.dataContainer}>
            <Text
              style={{
                fontSize: personalization.fontSize,
                fontFamily: personalization.fontFamily,
                fontWeight: 700,
              }}
            >
              Achievements
            </Text>
            {data.achievements.map((e: any) => {
              return (
                <View key={uuidv4()} style={{ marginBottom: 6 }}>
                  <View style={styles.elementContainer}>
                    <Text
                      style={{
                        fontSize: personalization.fontSize / 1.5,
                        fontFamily: personalization.fontFamily,
                        fontWeight: 700,
                        color: personalization.color,
                      }}
                    >
                      {e.inputsValues.achievementName}
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
              );
            })}
          </View>
        ) : (
          ""
        )}
        {data.additionalActivity.length > 0 ? (
          <View style={styles.dataContainer}>
            <Text
              style={{
                fontSize: personalization.fontSize,
                fontFamily: personalization.fontFamily,
                fontWeight: 700,
              }}
            >
              Additional activity
            </Text>
            {data.additionalActivity.map((e: any) => {
              return (
                <View key={uuidv4()} style={{ marginBottom: 6 }}>
                  <View style={styles.elementContainer}>
                    <Text
                      style={{
                        fontSize: personalization.fontSize / 1.5,
                        fontFamily: personalization.fontFamily,
                        fontWeight: 700,
                        color: personalization.color,
                      }}
                    >
                      {e.inputsValues.activityName}
                    </Text>
                  </View>
                  {e.inputsValues.startDate !== "" &&
                  e.inputsValues.endDate !== "" ? (
                    <Text
                      style={{
                        fontSize: personalization.fontSize / 2,
                        fontFamily: personalization.fontFamily,
                        fontWeight: 700,
                        color: personalization.color,
                      }}
                    >
                      {e.inputsValues.startDate} - {e.inputsValues.endDate}
                    </Text>
                  ) : (
                    <View>
                      {e.inputsValues.startDate !== "" ? (
                        <Text
                          style={{
                            fontSize: personalization.fontSize / 2,
                            fontFamily: personalization.fontFamily,
                            fontWeight: 700,
                            color: personalization.color,
                          }}
                        >
                          Start date: {e.inputsValues.startDate}
                        </Text>
                      ) : (
                        <View>
                          {e.inputsValues.endDate !== "" ? (
                            <Text
                              style={{
                                fontSize: personalization.fontSize / 2,
                                fontFamily: personalization.fontFamily,
                                fontWeight: 700,
                                color: personalization.color,
                              }}
                            >
                              Finish date: {e.inputsValues.endDate}
                            </Text>
                          ) : (
                            ""
                          )}
                        </View>
                      )}
                    </View>
                  )}
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontSize: personalization.fontSize / 2,
                        fontFamily: personalization.fontFamily,
                        color: personalization.color,
                      }}
                    >
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
              );
            })}
          </View>
        ) : (
          ""
        )}
      </View>
    </Page>
  </Document>
);
export default PDFPattern3;
