import Image from 'next/image';
import CheckMark from './CheckMark';
import s from './solution.module.scss';
import s1 from '@/assets/Solution/s1.png';
import s2 from '@/assets/Solution/s2.png';

const SolutionInfo = () => {
  return (
    <>
      <section className="section is-padding-block">
        <div className="container">
          <h2 className="heading-h2 is-centered">
            ei9verify Solution
          </h2>

          <div className={s.solutionsInfo}>
            <div className={s.solutionsInfoBlockImg}>
              <div className={`${s.solutionsInfoBlock} ${s.isFirst}`}>
                <div className={s.solutionsInfoBlockMain}>
                  <h3 className='heading-h3 mb-8'>
                    I-9 / E-Verify® Solution
                  </h3>

                  <div className={s.solutionsInfoTextWrapper}>
                    <p className='text'>
                      Using our fully integrated I-9 / E-Verify® Solution makes the work eligibility compliance process seamless. After completing the I-9, automatically submit E-Verify for real-time results and securely store all case data within the employee record for easy access and audit readiness.
                    </p>
                  </div>
                </div>

                <div className={s.solutionsInfoBlockGrid}>
                  <div className={s.solutionsInfoBlockGridItem}>
                    <CheckMark />

                    <p>
                      Record E-Verify® Case Numbers and status with the corresponding I-9s
                    </p>
                  </div>

                  <div className={s.solutionsInfoBlockGridItem}>
                    <CheckMark />

                    <p>
                      Automated notifications for Pending Referral process using e-signatures
                    </p>
                  </div>

                  <div className={s.solutionsInfoBlockGridItem}>
                    <CheckMark />

                    <p>
                      I-9 validation mirrors the values accepted by E-Verify® Web Services
                    </p>
                  </div>

                  <div className={s.solutionsInfoBlockGridItem}>
                    <CheckMark />

                    <p>
                      Automated Case Tracking
                    </p>
                  </div>

                  <div className={s.solutionsInfoBlockGridItem}>
                    <CheckMark />

                    <p>
                      Employee verification data is automatically submitted to E-Verify®
                    </p>
                  </div>

                  <div className={s.solutionsInfoBlockGridItem}>
                    <CheckMark />

                    <p>
                      Ability to correct I-9 for an existing E-Verify® case to sync data
                    </p>
                  </div>
                </div>
              </div>

              <div className={s.solutionsInfoBlockImagesWrapper}>
                <Image
                  src={s1}
                  alt=''
                  className={s.solutionsInfoBlockImage}
                />

                <Image
                  src={s2}
                  alt=''
                  className={s.solutionsInfoBlockImage}
                />
              </div>
            </div>


            <div className={s.solutionsInfoBlocksSeparator}></div>

            <div className={s.solutionsInfoBlock}>
              <div className={s.solutionsInfoBlockMain}>
                <h3 className='heading-h3 mb-8'>
                  I-9 Compliance
                </h3>

                <div className={s.solutionsInfoTextWrapper}>
                  <p className='text'>
                    Manage your I-9 process and stay compliant with an intuitive solution that streamlines document collection, verification, secure storage, and retrieval, while providing real-time tracking, automated alerts, and audit support
                  </p>
                  <p className='text'>
                    <span className='is-bold'>Remote Verifier Support:</span> Enable compliant Form I-9 completion for remote hires with Remote Verifier to designate authorized representatives, securely validate documents, and streamline Section 2 & 3 verification from anywhere.
                  </p>
                </div>
              </div>

              <div className={s.solutionsInfoBlockGrid}>
                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Digital Completion of Form I-9s</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Remote I-9 Verification Section 2 & 3</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Real-Time Error Detection</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Centralized Dashboard</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Configurable Re-verification and Expiring Document Alerts</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Compliance Reporting</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Document Repository</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Audit Support</p>
                </div>
              </div>
            </div>

            <div className={s.solutionsInfoBlocksSeparator}></div>

            <div className={s.solutionsInfoBlock}>
              <div className={s.solutionsInfoBlockMain}>
                <h3 className='heading-h3 mb-8'>
                  E-Verify® Web Service
                </h3>

                <div className={s.solutionsInfoTextWrapper}>
                  <p className='text'>
                    As a trusted E-Verify® Employer Agent, we offer seamless integration of E-Verify® Web Services within our platform.
                  </p>
                  <p className='text'>
                    Our system guides you step-by-step through the E-Verify process, automatically storing all case information directly within the employee’s record for easy access.
                  </p>
                </div>
              </div>

              <div className={s.solutionsInfoBlockGrid}>
                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Verify Work Eligibility with DHS and SSA</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Case Action Notifications</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Instant Case Results</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Real Time Reporting</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>MOU Auto Enrollment</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Experienced Customer Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={s.solutionsBanner}>
        <div className="container">
          <div className={s.solutionsBannerWrapper}>
            <h2 className={s.solutionsBannerHeading}>
              <span className={s.isBlue}>98%</span> of E-Verify cases are confirmed as <span className={s.isBlue}>&quot;Employment Authorized&quot;</span> either instantly or within 24 hours.
            </h2>

            <p className={s.solutionsBannerText}>
              Source: www.e-verify.gov/about-e-verify/e-verify-data/e-verify-performance
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default SolutionInfo