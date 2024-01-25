"use client"
import React from "react"
import { Document, Page, Text, View } from "@react-pdf/renderer"

interface FilePdfProps {
    data: {
      name: string;
      age: number;
    };
  }

const FilePdf: React.FC<FilePdfProps> = ({data}) => {
    return (
        <Document>
            <Page size="A4">
                <View>
                    <Text>{data.name}</Text>
                </View>
                <View>
                    <Text>{data.age}</Text>
                </View>
            </Page>
        </Document>
    )
}

export default FilePdf