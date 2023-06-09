import React , {useState} from 'react';
import PropTypes from 'prop-types';
import '../styles.scss'
import AboutItem from '../about-item';
import Button from '../../../components/button';

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            subtitle : 'About us',
            title: 'What is Dapper?',
            desc : "The hottest new collection of NFTs on the blockchain! Our unique and collectible digital assets are sure to turn heads and make a statement. Each Dapper Dog is one-of-a-kind, with stunning artwork and incredible detail that will make your collection stand out from the rest. Whether you're an avid NFT collector or just starting out, Dapper Dogs are the perfect addition to your portfolio."
        }
    )

    return (
        <section className="tf-section tf-about">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content-about mobie-40 mb-60" data-aos="fade-up" data-aos-duration="800">
                            <div className="tf-title">
                                <p className="h8 sub-title">{dataBlock.subtitle}</p>
                                <h4 className="title">{dataBlock.title}</h4>
                            </div>
                            <p className='pd30 center'>{dataBlock.desc}</p>
                        </div>
                    </div>

                        {
                            data.map(item => (
                                <div key={item.id} className="col-xl-4 col-lg-4 col-md-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                                    <AboutItem item={item} />
                                </div>
                            ))
                        }
                    <div className="col-md-12">
                        <div className="btn-about center" data-aos="fade-up" data-aos-duration="800">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;