import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import TeamRoll from '../components/TeamRoll';
import AdvisorRoll from '../components/AdvisorRoll';
import InvestorRoll from '../components/InvestorRoll';
import PartnerRoll from '../components/PartnerRoll';

function splitter(s) {
  var middle = Math.floor(s.length / 2);
  var before = s.lastIndexOf(' ', middle);
  var after = s.indexOf(' ', middle + 1);

  if (before == -1 || (after != -1 && middle - before >= after - middle)) {
      middle = after;
  } else {
      middle = before;
  }

  var s1 = s.substr(0, middle);
  var s2 = s.substr(middle + 1);

  return [s1,s2]
}

export const IndexPageTemplate = ({
  roadmap_image,
  latest_updates,
  conversation,
  decentralization,
}) => (
        <main className="main">
          <div className="hero hero__home">
            <img alt="" src="/images/hero/hero-curve.svg " className="hero__curve" />
            <div className="hero__container container">
              <div className="hero__col">
                <h2 className="hero__title">Open Consensus<br /> for <span className="no-break">10 Billion</span> People.<br /> Harmony for One and All.</h2>
                <p className="hero__desc subhead">Our open infrastructure is a revolutionary high-throughput, low-latency, and low-fee consensus platform designed to power decentralized economies of the future.</p>
                <h4 className="hero-signup-text">Be the first to know on anything Harmony</h4>
                <div id="mc_embed_signup" className="harmony-signup">
                  <form action="https://medium.us20.list-manage.com/subscribe/post?u=13db1cd29d5fd5c3b8169108c&id=301564a525" method="post" id="mc-embedded-subscribe-form-1" name="mc-embedded-subscribe-form" className="validate" target="">
                    <div id="mc_embed_signup_scroll" className="width-relative">
                      <div className="mc-field-group width-relative">
                        <span className="input-border">
                          <input type="email" defaultValue name="EMAIL" className="required email" id="mce-EMAIL-1" placeholder="Your email" required />
                        </span>
                      </div>
                      <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response" style={{display: 'none'}} />
                        <div className="response" id="mce-success-response" style={{display: 'none'}} />
                      </div>
                      <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_93b2e477d4e2dec2a336c4585_da655ebf7e" tabIndex={-1} defaultValue /></div>
                      <div className="clear"><input className="button" type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" /></div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="hero__col">
                <img alt="" src="/images/hero/home-hero.svg " className="hero__image" />
              </div>
            </div>
            <div className="container">
              <a href="#features" data-g-event="hero" data-g-label="features" data-g-action="clicked" className="scroll-trigger">
                <span className="icon-arrow-down">
                </span>
              </a>
            </div>
            <ul className="social-icons">
              <li key="facebook">  <a href="/blog/" className="social__item" data-g-event="footer" data-g-label="medium" data-g-action="clicked">
                  <span>
                    <img alt="" src="/images/social/medium.svg " />
                  </span>
                </a>
              </li>
              <li key="instagram">  <a href="https://www.instagram.com/harmonyoneprotocol/" className="social__item" target="" data-g-event="footer" data-g-label="instagram" data-g-action="clicked">
                  <span>
                    <img alt="" src="/images/social/instagram.svg " />
                  </span>
                </a>
              </li>
              <li key="telegram">  <a href="https://t.me/harmony_one" className="social__item" target="" data-g-event="footer" data-g-label="telegram" data-g-action="clicked">
                  <span>
                    <img alt="" src="/images/social/telegram.svg " />
                  </span>
                </a>
              </li>
              <li key="twitter">  <a href="https://twitter.com/harmonyprotocol" className="social__item" target="" data-g-event="footer" data-g-label="linkedin" data-g-action="clicked">
                  <span>
                    <img alt="" src="/images/social/twitter.svg " />
                  </span>
                </a>
              </li>
              <li key="linkedin">  <a href="https://www.linkedin.com/company/harmony-protocol/" className="social__item" target="" data-g-event="footer" data-g-label="linkedin" data-g-action="clicked">
                  <span>
                    <img alt="" src="/images/social/linkedin.svg " />
                  </span>
                </a>
              </li>
            </ul>  <div className="spacer" />
          </div>
          <section className="section__feature-banner" id="features">
            <div className="container">
              <div className="features">

              {decentralization.content.map( (item, index) => (
                  <div className="feature" key={index}>
                  <img alt="" src={item.image} className="feature__image" />
                  <div className="feature__text-container">
                  {splitter(item.text).map((data,index1) => (
                    <h4 className="text--center"  key={index1}>{data}</h4>
                  ))}
                    </div>
                </div>
              ))}

              </div>
            </div>
            <div className="spacer" />
          </section>
          <section className="decentralization">
            <div className="container">
              <h3 className="text-container__title mobile text--center">{decentralization.heading}</h3>
            </div>
            <div className="container decentralization__container">
              <div className="decentralization__text text-container">
                <h3 className="text-container__title desktop">{decentralization.heading}</h3>

                {decentralization.description.map((item, index) => (
                    <p className="text-container__text" key={index}>{item.segment}</p>
                ))}

                <div className="text-container__cta-container">
                  <a href="/technology/" className="outline button" data-g-event="timeline" data-g-label="Our Technology" data-g-action="clicked">
                    <span>Our Technology</span>
                  </a>
                </div>
              </div>
              <div className="decentralization__image">
                <img alt="" src="/images/home-technology.svg " className="tech-image" />
              </div>
            </div>
          </section>
          <section className="section__timeline" id="timeline">
            <div className="container">
              <div className="timeline">
                <h2 className="timeline__title">Latest Updates</h2>
                <div className="timeline__content timeline__content-current">

                    {latest_updates && latest_updates.map((item,index) =>  (
                      <div className="timeline__content-item-container" key={index}>
                        <img alt="" src="/images/icons/check-icon.svg"/>
                        <p className="timeline__content-item">{item.title}</p>
                      </div>
                    ))}

                </div>
              </div>
              <div className="text--center">
                <a href="/technology/#timeline-catcher" className="outline button" data-g-event="timeline" data-g-label="See Our Roadmap" data-g-action="clicked">
                  <span>See Our Roadmap</span>
                </a>
              </div>
            </div>
          </section>

          <section className="section__latest-update">
            <h3 className="text--center">Sign up and get the latest Harmony tech updates </h3>
            <div id="mc_embed_signup" className="harmony-signup">
              <form action="https://medium.us20.list-manage.com/subscribe/post?u=13db1cd29d5fd5c3b8169108c&id=301564a525" method="post" id="mc-embedded-subscribe-form-2" name="mc-embedded-subscribe-form" className="validate" target="">
                <div id="mc_embed_signup_scroll" className="width-relative">
                  <div className="mc-field-group width-relative">
                    <input type="email" defaultValue name="EMAIL" className="required email" id="mce-EMAIL-2" placeholder="Your email" required />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{display: 'none'}} />
                    <div className="response" id="mce-success-response" style={{display: 'none'}} />
                  </div>
                  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_93b2e477d4e2dec2a336c4585_da655ebf7e" tabIndex={-1} defaultValue /></div>
                  <div className="clear"><input className="button" type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" /></div>
                </div>
              </form>
            </div>
          </section>
          <section className="section__out-team">
            <div className="container">
              <h2 className="text--center">The Harmony Team</h2>
              <div className="our-team-description">
                <h4 className="text--center first-line">We’re ambitiously idealistic</h4>
                <h4 className="text--center">That’s why we left our jobs at big companies like Google, Apple, Microsoft and Amazon to create a radically fair economy through blockchain. </h4>
              </div>

               <TeamRoll/>

               <div className="our-team-description">
                  <h3 className="text--center first-line">The Harmony Advisors</h3>
               </div>

               <AdvisorRoll/>

            </div>
          </section>
          <section className="section__roadmap">
            <div className="container">
              <h2 className="text--center">Harmony Roadmap 2018 - 2019</h2>
              <div className="our-team-description" />
              <h4 className="text--center first-line">What Harmony has been up to</h4>
            </div>
            <img src={roadmap_image} alt="Harmony Roadmap 2018 - 2019" className="roadmap-image" />
          </section>
          <section className="section__investors">
            <div className="container">
              <h2 className="text--center">Investors in Harmony</h2>
              <div className="our-team-description"></div>
              <InvestorRoll/>
            </div>
          </section>
          <section className="section__partnership">
            <div className="container">
              <h2 className="text--center">Harmony Partners</h2>
              <div className="our-team-description">
              </div>
              <PartnerRoll/>
            </div>
          </section>
          <section className="section__blog-posts" id="blog-posts">
            <div className="container">
              <div className="blog-posts">
                <h3 className="text--center">Join the Conversation</h3>
                <div className="blog-posts__container">
                { conversation && conversation.map((item,index)=> (
                    <div className="post" key={index}>
                    <img alt="" src={item.image} className="blog__image" />
                    <div className="post__content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                    <a href={item.link} target="">
                      <img alt="" src="/images/icons/continue-icon.svg " className="blog__icon" />
                    </a>
                  </div>
                ))}
                </div>
                <div className="blog-posts__cta text--center">
                  <a href="/blog/" className="outline button" data-g-event="blog-posts" data-g-label="Read more on Medium" data-g-action="clicked">
                    <span>Read more on Medium</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="whitepaper-fixed-mobile">
            <a href="/pdf/whitepaper.pdf" className="outline button" target="" data-g-event="hero" data-g-label="Whitepaper" data-g-action="clicked">
              <span>Whitepaper</span>
            </a>
          </div>
          </main>
)

IndexPageTemplate.propTypes = {
  roadmap_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  latest_updates: PropTypes.array,
  conversation: PropTypes.array,
  decentralization: PropTypes.shape({}),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout page='home'>
      <IndexPageTemplate
        roadmap_image={frontmatter.roadmap.image}
        latest_updates={frontmatter.latest_updates}
        conversation={frontmatter.conversation}
        decentralization={frontmatter.decentralization}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        roadmap {
          image
        }
        latest_updates {
          title
        }
        conversation {
           image
           title
           link
           description
        }

        decentralization {
            heading
            description {
              segment
            }
            content {
              image
              text
            }
        }
      }
    }
  }
`