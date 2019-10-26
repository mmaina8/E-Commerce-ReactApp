import React from 'react'
import banner48 from '../assets/img/banner/48.jpg'

class Newsletter extends React.Component {
  render() {
    return (
      <div className="newsletter-area bg-img ptb-105" style={{backgroundImage: `url(${banner48})`}}>
            <div className="container">
                <div className="newsletter-wrapper">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="fruits-newsletter-title">
                                <span>Subscribe</span>
                                <h3>To Our Newsletter</h3>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-12">
                            <div id="mc_embed_signup" className="subscribe-form-furits f-right">
                                <form action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                                    <div id="mc_embed_signup_scroll" className="mc-form">
                                        <input type="email" value="" name="EMAIL" className="email" placeholder="Enter Mail Address" required/>
                                        <div className="mc-news" aria-hidden="true"><input type="text" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" tabindex="-1" value=""/></div>
                                        <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Newsletter