"use client"
import React from "react"
import { Document, Page, Text, View } from "@react-pdf/renderer"

interface FilePdfProps {
    data: {
      name: string;
      age: number;
      data: string;
    };
    company: {
        id: number;
        name: string;
    };
    status: string[];
    people: {
        id: number;
        name: string;
    }[]
  }

const FilePdf: React.FC<FilePdfProps> = ({data, company, status, people}) => {
    const originalDate = new Date(data.data);
  originalDate.setDate(originalDate.getDate() - 1);
  const signDate = originalDate.toISOString().split('T')[0];
  const employee = people.find(el => el.name === data.name)






    return (
        <Document>
            <Page size="A4">
                <View>
                    <Text>{data.name}</Text>
                </View>
                <View>
                    <Text>{data.age}</Text>
                </View>
                <View><Text>{company.name}</Text></View>
                <View><Text>{signDate}</Text></View>
                <View><Text>{employee?.name}</Text></View>
                <View >
                    {status.map((el, index) => (
                        <Text key={index}
                        >
                        {el}
                        </Text>
                    ))}
                </View>
            </Page>
        </Document>
    )
}

export default FilePdf