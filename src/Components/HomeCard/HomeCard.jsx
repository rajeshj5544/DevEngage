import PropTypes from 'prop-types';
import "./Homecard.css";
/*Hom card */
const HomeCard = ({ title, data,image }) => {
    return (
        <>
            <div className="section_our_solution">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="our_solution_category">
                            <div className="solution_cards_box">
                                <div className="solution_card">
                                    <div className="hover_color_bubble" />
                                    <div className="so_top_icon">
                                        <img src={image} alt="icon" />
                                    </div>
                                    <div className="solu_title">
                                        <div>{title}</div>
                                    </div>
                                    <div className="solu_description">
                                        <p>
                                            {data}
                                        </p>
                                        <button className="read_more_btn" type="button">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
HomeCard.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    image:PropTypes.string.isRequired
};

export default HomeCard