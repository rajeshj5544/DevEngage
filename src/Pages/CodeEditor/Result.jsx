import { PropTypes } from 'prop-types';
/*Result of COde editor */
// eslint-disable-next-line react/prop-types
const Result = ({ srcCode }) => {
    return (
        <div style={{ color: "white", backgroundColor: "#333333" }}>
            <div className="bg-[#282c34] p-4 shadow mt-4 rounded-lg">
                <h2
                    className="text-lg font-semibold mb-2" style={{ color: "black", border: "2px solid" }}>
                    Result
                </h2>
                <iframe
                    className="w-full h-60 border border-gray-700 rounded-md"
                    srcDoc={srcCode}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                >
                </iframe>
            </div>
        </div>
    )
}
Result.prototype = {
    srcCode: PropTypes.string.isRequired
};

export default Result