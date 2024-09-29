import "./DocsCard.css"

/* Docs Card */
// eslint-disable-next-line react/prop-types
const DocsCard = ({ title, data, doc, image }) => {
    const handleDownload = () => {
        // Construct a temporary anchor element
        const link = document.createElement('a');
        link.href = doc;
        link.target = '_blank'; 
        // eslint-disable-next-line react/prop-types
        link.download = doc.split('/').pop(); 
        link.click();
        document.body.removeChild(link);
      };
    return (
        <>
            <div className="card">
                <div className="card-details">
                    <img className="card-image" src={image} alt="logo" />
                    <p className="text-title">{title}</p>
                    <p className="text-body">{data}</p>
                </div>
                <button className="card-button" onClick={handleDownload}>Download document</button>
            </div >

        </>
    )
}

export default DocsCard