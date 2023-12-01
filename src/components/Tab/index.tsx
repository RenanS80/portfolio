import { useState } from 'react';
import { Link } from "react-router-dom";
import { i18n } from "translate/i18n";

import './style.css';

function Tab() {

    const [toggleCertification, setToggleCertification] = useState(1);

    const toggleTab = (index: number) => {
        setToggleCertification(index);
    }

    return (

        <div className="tab">
            <div className="tab__item">
                <h3 className={toggleCertification === 1 ? "tab__item--category active" : "tab__item--category"} onClick={() => toggleTab(1)}>
                    Salesforce Associate
                </h3>
                <div className={toggleCertification === 1 ? "tab__item--panel active" : "tab__item--panel"}>
                    <div className="tab__item--info">
                        <div className="tab__item--title">
                            <h4>Associate</h4>
                            <span>05/2023</span>
                        </div>
                        <Link to='https://trailhead.salesforce.com/en/credentials/verification/' target="_blank" className="credential-id">
                            ID: 3385748
                        </Link>
                        <blockquote cite="https://trailhead.salesforce.com/en/credentials/associate">
                            <p className="tab__item--description">
                                {i18n.t('certifications.associateDescription')}
                            </p>
                        </blockquote>

                    </div>
                </div>
            </div>

            <div className="tab__item">
                <h3 className={toggleCertification === 2 ? "tab__item--category active" : "tab__item--category"} onClick={() => toggleTab(2)}>
                    Salesforce Platform App Builder
                </h3>
                <div className={toggleCertification === 2 ? "tab__item--panel active" : "tab__item--panel"}>
                    <div className="tab__item--info">
                        <div className="tab__item--title">
                            <h4>Platform App Builder</h4>
                            <span>07/2023</span>
                        </div>
                        <Link to='https://trailhead.salesforce.com/en/credentials/verification/' target="_blank" className="credential-id">
                            ID: 3535398
                        </Link>
                        <blockquote cite="https://trailhead.salesforce.com/en/credentials/platformappbuilder">
                            <p className="tab__item--description">
                                {i18n.t('certifications.appBuilderDescription')}
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>









        </div>

    );
}

export default Tab;


