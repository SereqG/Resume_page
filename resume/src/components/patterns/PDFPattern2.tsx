import { FC } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

import { v4 as uuidv4 } from "uuid";

Font.register({
  family: "Roboto",
  fonts: [
    { src: "/fonts/Roboto-Regular.ttf" },
    { src: "/fonts/Roboto-Bold.ttf", fontWeight: 700 },
  ],
});

Font.register({
  family: "Segoe UI",
  fonts: [
    { src: "/fonts/segoeui.ttf" },
    { src: "/fonts/segoeuib.ttf", fontWeight: 700 },
  ],
});

Font.register({
  family: "Arial",
  fonts: [
    { src: "/fonts/ARIAL.ttf" },
    { src: "/fonts/ARIALBD.ttf", fontWeight: 700 },
  ],
});

Font.register({
  family: "Courier New",
  fonts: [
    { src: "/fonts/COUR.ttf" },
    { src: "/fonts/COURBD.ttf", fontWeight: 700 },
  ],
});

Font.register({
  family: "Times New Roman",
  fonts: [
    { src: "/fonts/TIMES.ttf" },
    { src: "/fonts/TIMESBD.ttf", fontWeight: 700 },
  ],
});

Font.register({
  family: "Georgia",
  fonts: [
    { src: "/fonts/GEORGIA.ttf" },
    { src: "/fonts/GEORGIAB.ttf", fontWeight: 700 },
  ],
});

Font.register({
  family: "Bahnschrift",
  fonts: [
    { src: "/fonts/BAHNSCHRIFT.ttf" },
    { src: "/fonts/BAHNSCHRIFT.ttf", fontWeight: 700 },
  ],
});

interface IData {
  data: any;
  personalization: { color: string; fontFamily: string; fontSize: number };
}

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
  dot: {
    width: 4,
    height: 4,
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
    paddingLeft: 30,
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

const PDFPattern2: FC<IData> = ({ data, personalization }) => (
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
        {data.photo !== "" ? (
          <View style={styles.photoContainer}>
            <Image src={data.photo} style={styles.photo} />
          </View>
        ) : (
          ""
        )}
        <View style={styles.dataContainer}>
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
        {data.phoneNumber !== "" || data.websiteURL !== "" || data.email}
        <View style={styles.dataContainer}>
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
                fontFamily: personalization.fontFamily,
                fontWeight: 700,
              }}
            >
              Contact
            </Text>
          </View>
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

        {data.skills.length > 0 ? (
          <View style={styles.dataContainer}>
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
                  fontFamily: personalization.fontFamily,
                  fontWeight: 700,
                }}
              >
                Skills
              </Text>
            </View>

            {data.skills.map((e: any) => {
              return (
                <View key={uuidv4()} style={styles.elementContainer}>
                  <View
                    style={[
                      styles.dot,
                      { backgroundColor: personalization.color },
                    ]}
                  ></View>
                  <View key={uuidv4()}>
                    <Text
                      style={{
                        fontSize: personalization.fontSize / 1.5,
                        fontFamily: personalization.fontFamily,
                        fontWeight: 700,
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
                  fontFamily: personalization.fontFamily,
                  fontWeight: 700,
                }}
              >
                Characteristic
              </Text>
            </View>
            {data.characteristic.map((e: any) => {
              return (
                <View key={uuidv4()} style={styles.elementContainer}>
                  <View
                    style={[
                      styles.dot,
                      { backgroundColor: personalization.color },
                    ]}
                  ></View>
                  <View key={uuidv4()}>
                    <Text
                      style={{
                        fontSize: personalization.fontSize / 1.5,
                        fontFamily: personalization.fontFamily,
                        fontWeight: 700,
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
                  fontFamily: personalization.fontFamily,
                  fontWeight: 700,
                }}
              >
                Hobbys
              </Text>
            </View>
            {data.hobbys.map((e: any) => {
              return (
                <View key={uuidv4()} style={styles.elementContainer}>
                  <View
                    style={[
                      styles.dot,
                      { backgroundColor: personalization.color },
                    ]}
                  ></View>
                  <View key={uuidv4()}>
                    <Text
                      style={{
                        fontSize: personalization.fontSize / 1.5,
                        fontFamily: personalization.fontFamily,
                        fontWeight: 700,
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

      <View style={styles.section}>
        {data.experience.length > 0 ? (
          <View>
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
                  fontFamily: personalization.fontFamily,
                  fontWeight: 700,
                }}
              >
                Experience
              </Text>
            </View>
            {data.experience.map((e: any) => {
              return (
                <View key={uuidv4()} style={{ marginBottom: 6 }}>
                  <View>
                    <View style={styles.elementContainer}>
                      <View
                        style={[
                          styles.dot,
                          { backgroundColor: personalization.color },
                        ]}
                      ></View>
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 1.5,
                          fontFamily: personalization.fontFamily,
                          fontWeight: 700,
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
                        }}
                      >
                        {e.inputsValues.companyName},
                      </Text>
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 2,
                          fontFamily: personalization.fontFamily,
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
                  fontFamily: personalization.fontFamily,
                  fontWeight: 700,
                }}
              >
                Education
              </Text>
            </View>
            {data.education.map((e: any) => {
              return (
                <View key={uuidv4()} style={{ marginBottom: 6 }}>
                  <View>
                    <View style={styles.elementContainer}>
                      <View
                        style={[
                          styles.dot,
                          { backgroundColor: personalization.color },
                        ]}
                      ></View>
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 1.5,
                          fontFamily: personalization.fontFamily,
                          fontWeight: 700,
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
                        }}
                      >
                        {e.inputsValues.level}
                      </Text>
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 2,
                          fontFamily: personalization.fontFamily,
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
                  fontFamily: personalization.fontFamily,
                  fontWeight: 700,
                }}
              >
                Certificates
              </Text>
            </View>
            {data.certificates.map((e: any) => {
              return (
                <View key={uuidv4()} style={{ marginBottom: 6 }}>
                  <View>
                    <View style={styles.elementContainer}>
                      <View
                        style={[
                          styles.dot,
                          { backgroundColor: personalization.color },
                        ]}
                      ></View>
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 1.5,
                          fontFamily: personalization.fontFamily,
                          fontWeight: 700,
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
                  fontFamily: personalization.fontFamily,
                  fontWeight: 700,
                }}
              >
                Courses
              </Text>
            </View>
            {data.courses.map((e: any) => {
              return (
                <View key={uuidv4()} style={{ marginBottom: 6 }}>
                  <View>
                    <View style={styles.elementContainer}>
                      <View
                        style={[
                          styles.dot,
                          { backgroundColor: personalization.color },
                        ]}
                      ></View>
                      <Text
                        style={{
                          fontSize: personalization.fontSize / 1.5,
                          fontFamily: personalization.fontFamily,
                          fontWeight: 700,
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
                  fontFamily: personalization.fontFamily,
                  fontWeight: 700,
                }}
              >
                Achievements
              </Text>
            </View>
            {data.achievements.map((e: any) => {
              return (
                <View key={uuidv4()} style={{ marginBottom: 6 }}>
                  <View style={styles.elementContainer}>
                    <View
                      style={[
                        styles.dot,
                        { backgroundColor: personalization.color },
                      ]}
                    ></View>
                    <Text
                      style={{
                        fontSize: personalization.fontSize / 1.5,
                        fontFamily: personalization.fontFamily,
                        fontWeight: 700,
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
                  fontFamily: personalization.fontFamily,
                  fontWeight: 700,
                }}
              >
                Additional activity
              </Text>
            </View>
            {data.additionalActivity.map((e: any) => {
              return (
                <View key={uuidv4()} style={{ marginBottom: 6 }}>
                  <View style={styles.elementContainer}>
                    <View
                      style={[
                        styles.dot,
                        { backgroundColor: personalization.color },
                      ]}
                    ></View>
                    <Text
                      style={{
                        fontSize: personalization.fontSize / 1.5,
                        fontFamily: personalization.fontFamily,
                        fontWeight: 700,
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
export default PDFPattern2;
