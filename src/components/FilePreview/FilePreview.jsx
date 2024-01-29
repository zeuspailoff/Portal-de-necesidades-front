import { Document, Page, pdfjs } from 'react-pdf';
import Gallery from 'react-image-gallery';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const FilePreview = ({ fileUrl, fileType }) => {
    if (fileType === 'pdf') {
        return (
            <div>
                <Document file={fileUrl} onLoadSuccess={({ numPages }) => console.log(numPages)}>
                    <Page pageNumber={1} />
                </Document>
            </div>
        );
    } else if (fileType === 'doc' || fileType === 'docx') {
        return (
            <div>
                <p>❤️</p>
            </div>
        );
    } else if (fileType.startsWith('image/')) {
        const images = [{ original: fileUrl, thumbnail: fileUrl }];
        return <Gallery items={images} />;
    } else {
        return <p>No se puede mostrar la vista previa para este tipo de archivo.</p>;
    }
};

export default FilePreview;
