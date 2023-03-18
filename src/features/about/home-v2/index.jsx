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
            title: 'What is Dapper Dogs?',
            desc : "The hottest new collection of NFTs on the blockchain! Our unique and collectible digital assets are sure to turn heads and make a statement. Each Dapper Dog is one-of-a-kind, with stunning artwork and incredible detail that will make your collection stand out from the rest. Whether you're an avid NFT collector or just starting out, Dapper Dogs are the perfect addition to your portfolio."
        }
    )

    return (
        <section className="tf-section tf-about style2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content-about" data-aos="fade-up" data-aos-duration="800">
                            <div className="tf-title">
                                <p className="h8 sub-title">{dataBlock.subtitle}</p>
                                <h4 className="title">{dataBlock.title}</h4>
                            </div>
                            <p className='pd20'>{dataBlock.desc}</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="wrap-about" data-aos="fade-up" data-aos-duration="800">
                            {
                                data.map(item => (
                                    <AboutItem key={item.id} item={item} />
                                ))
                            }
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="btn-about" data-aos="fade-up" data-aos-duration="800">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;