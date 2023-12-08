import { FC } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

interface IProps {
  data: {
    email: string;
    name: string;
    phoneNumber: string;
    surname: string;
    websiteURL: string;
    photo: string;

    selectedPattern: number;

    achievements: any[];
    additional_activity: any[];
    certificates: any[];
    education: any[];
    experience: any[];
    hobbys: any[];
    skills: any[];
  };
  personalization: { color: string; fontFamily: string; fontSize: number };
}

const styles = StyleSheet.create({
  page: {},
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
  contact: {
    fontSize: 12,
  },
  dot: {
    width: 8,
    height: 8,
    marginRight: 8,
    borderRadius: 50,
  },
  dataContainer: {
    marginTop: 8,
    marginLeft: 36,
  },
});

const PDFPattern1: FC<IProps> = ({ data, personalization }) => (
  <Document>
    <Page size="A4" style={{ fontFamily: personalization.fontFamily }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5%",
          borderBottom: `2px dashed ${personalization.color}`,
        }}
      >
        {data.photo !== "" ? (
          <View style={styles.photoContainer}>
            <Image src={data.photo} style={styles.photo} />
          </View>
        ) : (
          ""
        )}
        <View style={{ justifyContent: "space-between", width: "75%" }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Text
              style={[
                styles.name,
                {
                  fontSize: personalization.fontSize,
                  fontFamily: personalization.fontFamily,
                },
              ]}
            >
              {data.name}
            </Text>
            <Text
              style={[
                {
                  color: personalization.color,
                  fontSize: personalization.fontSize,
                  fontFamily: personalization.fontFamily,
                },
                styles.name,
              ]}
            >
              {data.surname}
            </Text>
          </View>
          <View>
            {data.phoneNumber !== "" ? (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 2,
                }}
              >
                <View
                  style={[
                    styles.dot,
                    { backgroundColor: personalization.color },
                  ]}
                ></View>
                <Text style={styles.contact}>{data.phoneNumber}</Text>
              </View>
            ) : (
              ""
            )}
            {data.email !== "" ? (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 2,
                }}
              >
                <View
                  style={[
                    styles.dot,
                    { backgroundColor: personalization.color },
                  ]}
                ></View>
                <Text style={styles.contact}>{data.email}</Text>
              </View>
            ) : (
              ""
            )}
            {data.websiteURL !== "" ? (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 2,
                }}
              >
                <View
                  style={[
                    styles.dot,
                    { backgroundColor: personalization.color },
                  ]}
                ></View>
                <Text style={styles.contact}>{data.websiteURL}</Text>
              </View>
            ) : (
              ""
            )}
          </View>
        </View>
      </View>
      <View style={{ padding: "5%" }}>
        {data.experience.length > 0 ? (
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={[
                  styles.dot,
                  {
                    width: 15,
                    height: 15,
                    backgroundColor: personalization.color,
                  },
                ]}
              ></View>
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
                <View style={styles.dataContainer} key={e.id}>
                  <Text
                    style={{
                      fontSize: personalization.fontSize / 1.5,
                      fontFamily: personalization.fontFamily,
                      fontWeight: 700,
                    }}
                  >
                    {e.inputsValues.position}
                  </Text>
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
              );
            })}
          </View>
        ) : (
          ""
        )}
        {data.education.length > 0 ? (
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={[
                  styles.dot,
                  {
                    width: 15,
                    height: 15,
                    backgroundColor: personalization.color,
                  },
                ]}
              ></View>
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
                <View style={styles.dataContainer} key={e.id}>
                  <Text
                    style={{
                      fontSize: personalization.fontSize / 1.5,
                      fontFamily: personalization.fontFamily,
                      fontWeight: 700,
                    }}
                  >
                    {e.inputsValues.institutionName}
                  </Text>
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
              );
            })}
          </View>
        ) : (
          ""
        )}
        {data.certificates.length > 0 ? (
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={[
                  styles.dot,
                  {
                    width: 15,
                    height: 15,
                    backgroundColor: personalization.color,
                  },
                ]}
              ></View>
              <Text
                style={{
                  fontSize: personalization.fontSize,
                  fontFamily: personalization.fontFamily,
                  fontWeight: 700,
                }}
              >
                Certyficates
              </Text>
            </View>
            {data.certificates.map((e: any) => {
              return (
                <View style={styles.dataContainer} key={e.id}>
                  <Text
                    style={{
                      fontSize: personalization.fontSize / 1.5,
                      fontFamily: personalization.fontFamily,
                      fontWeight: 700,
                    }}
                  >
                    {e.inputsValues.certificateName}
                  </Text>
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
              );
            })}
          </View>
        ) : (
          ""
        )}

        {data.skills.length > 0 ? (
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={[
                  styles.dot,
                  {
                    width: 15,
                    height: 15,
                    backgroundColor: personalization.color,
                  },
                ]}
              ></View>
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
                <View style={styles.dataContainer} key={e.id}>
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
              );
            })}
          </View>
        ) : (
          ""
        )}
        {data.achievements.length > 0 ? (
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={[
                  styles.dot,
                  {
                    width: 15,
                    height: 15,
                    backgroundColor: personalization.color,
                  },
                ]}
              ></View>
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
                <View style={styles.dataContainer} key={e.id}>
                  <Text
                    style={{
                      fontSize: personalization.fontSize / 1.5,
                      fontFamily: personalization.fontFamily,
                      fontWeight: 700,
                    }}
                  >
                    {e.inputsValues.achievementName}
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
              );
            })}
          </View>
        ) : (
          ""
        )}
        {data.additional_activity.length > 0 ? (
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={[
                  styles.dot,
                  {
                    width: 15,
                    height: 15,
                    backgroundColor: personalization.color,
                  },
                ]}
              ></View>
              <Text
                style={{
                  fontSize: personalization.fontSize,
                  fontFamily: personalization.fontFamily,
                  fontWeight: 700,
                }}
              >
                Additional Activity
              </Text>
            </View>
            {data.additional_activity.map((e: any) => {
              return (
                <View style={styles.dataContainer} key={e.id}>
                  <Text
                    style={{
                      fontSize: personalization.fontSize / 1.5,
                      fontFamily: personalization.fontFamily,
                      fontWeight: 700,
                    }}
                  >
                    {e.inputsValues.activityName}
                  </Text>
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

        {data.hobbys.length > 0 ? (
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={[
                  styles.dot,
                  {
                    width: 15,
                    height: 15,
                    backgroundColor: personalization.color,
                  },
                ]}
              ></View>
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
                <View style={styles.dataContainer} key={e.id}>
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

export default PDFPattern1;
