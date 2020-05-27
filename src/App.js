import React from 'react';
import {
    Text,
    Document,
    PDFViewer,
    Page,
    View,
} from '@react-pdf/renderer';

export default () => {

    return (
        <PDFViewer>
            <Document>
                <Page size="A4" wrap={true}>
                    <View>
                        <Text>
                            Example
                        </Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}
