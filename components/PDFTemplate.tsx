import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { QuestionPaperProps } from '../templates/question-paper';

//Design styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  question: {
    fontSize: 12,
    marginBottom: 5,
  },
});

// PDFTemplate component to render the question paper in PDF format
const PDFTemplate: React.FC<{ data: QuestionPaperProps }> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>{data.course.name}</Text> {/* Render course name */}
        {/* Render questions */}
        {data.questions.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.heading}>Section {index + 1}</Text>
            {section.map((subsection, subIndex) => (
              <View key={subIndex}>
                {subsection.map((question, questionIndex) => (
                  <Text key={questionIndex} style={styles.question}>
                    {question.text}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default PDFTemplate;